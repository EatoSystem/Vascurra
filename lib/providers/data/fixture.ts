import { createHash, randomUUID } from "node:crypto";
import { researchFixtureOptions, type AIProvider, type ResearchFixtureKey } from "../ai/contracts";
import { contracts } from "@/lib/veyai/domain/contracts";
import { researchSchema, validateResearch, validateEvidence } from "@/lib/veyai/domain/schemas";
import { createRunInput, decisionInput, ProviderError, type ApprovalRecord, type CreateRunInput, type DataProvider, type DecisionInput, type DirectoryRecord, type ResearchDataProvider, type RunDetail, type StaffIdentity } from "./contract";

export const fixtureWorkspaceId = "10000000-0000-4000-8000-000000000000";
export const fixtureDirectory: DirectoryRecord[] = [
  { workspace_id: fixtureWorkspaceId, user_id: "10000000-0000-4000-8000-000000000001", role: "researcher", display_name: "Synthetic researcher" },
  { workspace_id: fixtureWorkspaceId, user_id: "10000000-0000-4000-8000-000000000002", role: "reviewer", display_name: "Synthetic reviewer" },
  { workspace_id: fixtureWorkspaceId, user_id: "10000000-0000-4000-8000-000000000003", role: "admin", display_name: "Synthetic administrator" },
];
export function fixtureIdentity(role: StaffIdentity["role"]): StaffIdentity {
  const member = fixtureDirectory.find((m) => m.role === role)!;
  return { id: member.user_id, role, displayName: member.display_name, workspaceId: member.workspace_id };
}
type Entry = RunDetail & { initiator: string; evidence: "agreement" | "challenge" };
export type FixtureWorkspace = {
  runs: Map<string, Entry>; approvals: Map<string, ApprovalRecord>;
  commands: Map<string, { signature: string; result: string }>;
  decisions: Map<string, string>; dailyLimit: number;
};
export function createFixtureWorkspace(dailyLimit = 10): FixtureWorkspace {
  return { runs: new Map(), approvals: new Map(), commands: new Map(), decisions: new Map(), dailyLimit };
}
const hash = (value: unknown) => createHash("sha256").update(JSON.stringify(value)).digest("hex");

/** Each local browser sandbox owns a store. Ephemeral, synthetic; never a persistence fallback. */
export class FixtureDataProvider implements DataProvider, ResearchDataProvider {
  readonly name = "fixture" as const;
  readonly research = this;
  constructor(private readonly store: FixtureWorkspace, private readonly actor: StaffIdentity, private readonly ai: AIProvider, private readonly now: () => Date = () => new Date()) {}
  private identity() {
    if (!fixtureDirectory.some((m) => m.user_id === this.actor.id && m.role === this.actor.role && m.workspace_id === this.actor.workspaceId)) throw new ProviderError("permission");
  }
  private readable(entry: Entry) {
    this.identity();
    return entry.run.workspace_id === this.actor.workspaceId && ((entry.run.owner_id === this.actor.id && this.actor.role !== "reviewer") || (entry.run.reviewer_id === this.actor.id && this.actor.role !== "researcher"));
  }
  private entry(id: string) {
    const entry = this.store.runs.get(id);
    if (!entry || !this.readable(entry)) throw new ProviderError("permission");
    return entry;
  }
  private event(entry: Entry, event: string) { entry.history.push({ event, created_at: this.now().toISOString() }); }
  async listRuns() { this.identity(); return structuredClone([...this.store.runs.values()].filter((e) => this.readable(e)).map((e) => e.run).reverse()); }
  async directory() { this.identity(); return structuredClone(fixtureDirectory); }
  async detail(id: string): Promise<RunDetail | null> {
    this.identity(); const entry = this.store.runs.get(id);
    if (!entry || !this.readable(entry)) return null;
    return structuredClone({ run: entry.run, output: entry.output, parentOutput: entry.parentOutput, bundle: entry.bundle, history: entry.history, decisions: entry.decisions, telemetry: entry.telemetry });
  }
  async approvals() { this.identity(); return structuredClone([...this.store.approvals.values()].filter((a) => a.reviewer_id === this.actor.id && this.readable(this.store.runs.get(a.run_id)!)).reverse()); }
  private stale(entry: Entry) {
    entry.run.is_current = false;
    if (["queued", "running"].includes(entry.run.status)) entry.run.status = "cancelled";
    for (const approval of this.store.approvals.values()) if (approval.run_id === entry.run.id) approval.status = "stale";
    this.event(entry, "version_superseded");
  }
  async createRun(raw: CreateRunInput) {
    this.identity(); const parsed = createRunInput.safeParse(raw); if (!parsed.success) throw new ProviderError("invalid");
    const input = parsed.data;
    if (!researchFixtureOptions.some((f) => f.key === input.fixture)) throw new ProviderError("invalid");
    if (input.w !== this.actor.workspaceId || (input.parent && input.supersedes)) throw new ProviderError("invalid");
    const command = `${this.actor.id}:${input.key}`; const signature = hash(input);
    const prior = this.store.commands.get(command);
    if (prior) { if (prior.signature !== signature) throw new ProviderError("invalid"); return prior.result; }
    const parent = input.parent ? this.entry(input.parent) : null;
    const previous = input.supersedes ? this.entry(input.supersedes) : null;
    if (!parent && this.actor.role === "reviewer") throw new ProviderError("permission");
    if (previous && (previous.run.agent_id !== "research" || previous.run.owner_id !== this.actor.id || !previous.run.is_current || ["queued", "running"].includes(previous.run.status))) throw new ProviderError("stale");
    if (parent && (parent.run.agent_id !== "research" || !parent.run.is_current || !parent.output?.complete)) throw new ProviderError("stale");
    const owner = parent?.run.owner_id ?? this.actor.id;
    const reviewer = parent?.run.reviewer_id ?? input.reviewer;
    if (reviewer === owner || !fixtureDirectory.some((m) => m.user_id === reviewer && m.role !== "researcher")) throw new ProviderError("permission");
    if (parent && [...this.store.runs.values()].some((e) => e.run.parent_run_id === parent.run.id && e.run.is_current && ["queued", "running"].includes(e.run.status))) throw new ProviderError("invalid");
    const today = this.now().toISOString().slice(0, 10);
    if ([...this.store.runs.values()].filter((e) => e.initiator === this.actor.id && e.run.created_at.startsWith(today)).length >= this.store.dailyLimit || this.store.runs.size >= 200) throw new ProviderError("limit");
    if (previous) {
      this.stale(previous);
      for (const entry of this.store.runs.values()) if (entry.run.parent_run_id === previous.run.id) this.stale(entry);
    }
    if (parent) for (const entry of this.store.runs.values()) if (entry.run.parent_run_id === parent.run.id && entry.run.is_current) this.stale(entry);
    const id = randomUUID(); const agent = parent ? "evidence" : "research"; const contract = contracts[agent];
    const entry: Entry = {
      run: { id, workspace_id: input.w, owner_id: owner, reviewer_id: reviewer, agent_id: agent, agent_version: contract.version, prompt_version: contract.promptVersion, model_version: "fixture-0.1.0", fixture_key: parent?.run.fixture_key ?? input.fixture, status: "queued", parent_run_id: parent?.run.id ?? null, supersedes_run_id: previous?.run.id ?? null, is_current: true, created_at: this.now().toISOString(), error_code: null },
      output: null, parentOutput: parent?.output ? structuredClone(parent.output) : null, bundle: null, history: [], decisions: [],
      telemetry: { provider: "fixture", mode: "synthetic", latencyMs: null, estimatedTokens: null, costMicroUsd: 0 }, initiator: this.actor.id, evidence: input.evidence ?? "challenge",
    };
    if (parent) entry.run.evidence_fixture_key = entry.evidence;
    this.event(entry, "run_queued"); this.store.runs.set(id, entry); this.store.commands.set(command, { signature, result: id }); return id;
  }
  async cancelRun(id: string) {
    const entry = this.entry(id);
    if (entry.run.owner_id !== this.actor.id) throw new ProviderError("permission");
    if (!["queued", "running"].includes(entry.run.status)) throw new ProviderError("stale");
    entry.run.status = "cancelled"; this.event(entry, "run_cancelled");
  }
  async advanceRun(id: string) {
    const entry = this.entry(id);
    if (!entry.run.is_current || !["queued", "running"].includes(entry.run.status)) throw new ProviderError("stale");
    if (entry.run.status === "queued") { entry.run.status = "running"; this.event(entry, "run_started"); return; }
    const parent = entry.run.parent_run_id ? this.entry(entry.run.parent_run_id) : null;
    if (parent && (!parent.run.is_current || !parent.output?.complete || parent.output.content_hash !== entry.parentOutput?.content_hash)) throw new ProviderError("stale");
    try {
    const result = parent?.output && parent.bundle
      ? await this.ai.runEvidenceReview({ research: researchSchema.parse(parent.output.content), sources: validateResearch(parent.output.content, parent.bundle.sources).sources, parent: { id: parent.output.id, content_hash: parent.output.content_hash }, fixtureKey: entry.evidence })
      : await this.ai.runResearch({ fixtureKey: entry.run.fixture_key as ResearchFixtureKey });
    // An awaited provider cannot resurrect cancellation or an obsolete version.
    if (entry.run.status !== "running" || !entry.run.is_current || (parent && !parent.run.is_current)) return;
    if ("error" in result) {
      entry.run.status = result.status; entry.run.error_code = result.status === "failed" ? result.error.code : "cancelled";
      this.event(entry, `run_${entry.run.status}`); return;
    }
    const checked = parent?.output
      ? validateEvidence(result.output, researchSchema.parse(parent.output.content), validateResearch(parent.output.content, parent.bundle?.sources).sources, { id: parent.output.id, content_hash: parent.output.content_hash })
      : validateResearch(result.output, result.sources);
    const sourceId = randomUUID();
    entry.bundle = { sources: structuredClone(checked.sources), content_hash: hash(checked.sources) };
    entry.output = { id: randomUUID(), source_set_id: sourceId, content: structuredClone(checked.output), content_hash: hash(checked.output), complete: checked.complete, version: 1 };
    entry.run.status = checked.complete ? "awaiting_review" : "incomplete";
    entry.run.model_version = result.metadata.modelVersion;
    entry.telemetry.latencyMs = result.metadata.latencyMs;
    entry.telemetry.estimatedTokens = result.metadata.usageEstimate.inputTokens + result.metadata.usageEstimate.outputTokens;
    this.event(entry, checked.complete ? "output_validated" : "provenance_incomplete");
    if (parent?.output && checked.complete) {
      const approvalId = randomUUID();
      this.store.approvals.set(approvalId, { id: approvalId, status: "pending", research_hash: parent.output.content_hash, evidence_hash: entry.output.content_hash, run_id: id, reviewer_id: entry.run.reviewer_id });
      this.event(entry, "human_review_requested");
    }
    } catch {
      if (entry.run.status === "running" && entry.run.is_current && (!parent || parent.run.is_current)) {
        entry.run.status = "failed"; entry.run.error_code = "provider_or_validation_failure";
        this.event(entry, "run_failed");
      }
    }
  }
  async decide(raw: DecisionInput) {
    this.identity(); const parsed = decisionInput.safeParse(raw); if (!parsed.success) throw new ProviderError("invalid"); const input = parsed.data;
    const approval = this.store.approvals.get(input.target);
    if (!approval || approval.reviewer_id !== this.actor.id || this.actor.role === "researcher") throw new ProviderError("permission");
    const entry = this.entry(approval.run_id); const parent = entry.run.parent_run_id ? this.entry(entry.run.parent_run_id) : null;
    if (!entry.run.is_current || !parent?.run.is_current || input.expected_research !== parent.output?.content_hash || input.expected_evidence !== entry.output?.content_hash || approval.status === "stale") throw new ProviderError("stale");
    const key = `${this.actor.id}:${input.key}`; const signature = hash(input);
    if (this.store.decisions.has(key)) { if (this.store.decisions.get(key) !== signature) throw new ProviderError("invalid"); return; }
    if (approval.status !== "pending") throw new ProviderError("stale");
    entry.decisions.push({ decision: input.choice, scope: input.choice === "approve" ? "programme_planning" : "review", reason: input.explanation, created_at: this.now().toISOString(), research_hash: input.expected_research, evidence_hash: input.expected_evidence });
    approval.status = "decided"; this.store.decisions.set(key, signature); this.event(entry, `human_decision_${input.choice}`);
  }
}
