import { z } from "zod";

export const runRecord = z.object({
  id: z.uuid(), workspace_id: z.uuid(), owner_id: z.uuid(), reviewer_id: z.uuid(),
  agent_id: z.enum(["research", "evidence"]), agent_version: z.string(), prompt_version: z.string(), model_version: z.string(),
  fixture_key: z.string(), status: z.string(), parent_run_id: z.uuid().nullable(), is_current: z.boolean(), created_at: z.string(),
  supersedes_run_id: z.uuid().nullable().optional(), error_code: z.string().nullable().optional(),
  evidence_fixture_key: z.enum(["agreement", "challenge"]).optional(),
});
export type RunRecord = z.infer<typeof runRecord>;
export const outputRecord = z.object({ id: z.uuid(), source_set_id: z.uuid(), content: z.unknown(), content_hash: z.string(), complete: z.boolean(), version: z.number() });
export type OutputRecord = z.infer<typeof outputRecord>;
export const approvalRecord = z.object({ id: z.uuid(), status: z.string(), research_hash: z.string(), evidence_hash: z.string(), run_id: z.uuid(), reviewer_id: z.uuid() });
export type ApprovalRecord = z.infer<typeof approvalRecord>;
export const directoryRecord = z.object({ workspace_id: z.uuid(), user_id: z.uuid(), role: z.enum(["researcher", "reviewer", "admin"]), display_name: z.string() });
export type DirectoryRecord = z.infer<typeof directoryRecord>;
export const decisionRecord = z.object({ decision: z.string(), scope: z.string(), reason: z.string(), created_at: z.string(), research_hash: z.string(), evidence_hash: z.string() });
export type DecisionRecord = z.infer<typeof decisionRecord>;
export const createRunInput = z.object({ w: z.uuid(), reviewer: z.uuid(), fixture: z.string().min(1).max(80), key: z.uuid(), parent: z.uuid().optional(), supersedes: z.uuid().optional(), evidence: z.enum(["agreement", "challenge"]).optional() });
export type CreateRunInput = z.infer<typeof createRunInput>;
export const decisionInput = z.object({ target: z.uuid(), expected_research: z.string().regex(/^[a-f0-9]{64}$/), expected_evidence: z.string().regex(/^[a-f0-9]{64}$/), choice: z.enum(["reject", "hold", "investigate_further", "approve"]), explanation: z.string().trim().min(10).max(2000), key: z.uuid() });
export type DecisionInput = z.infer<typeof decisionInput>;
export type StaffIdentity = { id: string; displayName: string; role: DirectoryRecord["role"]; workspaceId: string };
export type RunDetail = {
  run: RunRecord; output: OutputRecord | null; parentOutput: OutputRecord | null;
  bundle: { sources: unknown; content_hash: string } | null;
  history: { event: string; created_at: string }[]; decisions: DecisionRecord[];
  telemetry: { provider: string; mode: string; latencyMs: number | null; estimatedTokens: number | null; costMicroUsd: number | null };
};
/** Domain operations, never a generic database/query interface. Identity is constructor-scoped. */
export interface ResearchDataProvider {
  readonly name: "fixture" | "supabase";
  listRuns(): Promise<RunRecord[]>;
  directory(): Promise<DirectoryRecord[]>;
  detail(id: string): Promise<RunDetail | null>;
  approvals(): Promise<ApprovalRecord[]>;
  createRun(input: CreateRunInput): Promise<string>;
  cancelRun(id: string): Promise<void>;
  decide(input: DecisionInput): Promise<void>;
  /** Local deterministic worker step. Connected execution uses the restricted worker. */
  advanceRun(id: string): Promise<void>;
}
export interface DataProvider { readonly research: ResearchDataProvider }
export class ProviderError extends Error {
  constructor(readonly code: "unavailable" | "permission" | "stale" | "limit" | "invalid" | "expired") { super(code); }
}
