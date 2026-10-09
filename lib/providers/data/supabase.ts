import "server-only";
import { z } from "zod";
import type { staffClient } from "@/lib/supabase/server";
import { fixtureKey } from "@/lib/veyai/domain/schemas";
import {
  approvalRecord, createRunInput, decisionInput, decisionRecord, directoryRecord,
  outputRecord, ProviderError, runRecord,
  type CreateRunInput, type DataProvider, type DecisionInput, type ResearchDataProvider,
  type RunDetail,
} from "./contract";

type StaffClient = Awaited<ReturnType<typeof staffClient>>;
type QueryResult = { data: unknown; error: unknown };
const historyRecord = z.object({ event: z.string(), created_at: z.string() });
const sourceSetRecord = z.object({ sources: z.unknown(), content_hash: z.string() });

function databaseError(error: unknown): ProviderError {
  const result = z.object({ message: z.string() }).safeParse(error);
  const message = result.success ? result.data.message : "";
  if (message === "Daily run limit reached") return new ProviderError("limit");
  if (message === "Stale approval" || message === "Complete current Research required") return new ProviderError("stale");
  if (["Access denied", "Reviewer permission required", "Research permission or independent reviewer required"].includes(message)) return new ProviderError("permission");
  return new ProviderError("unavailable");
}

async function read<T>(schema: z.ZodType<T>, query: PromiseLike<QueryResult>): Promise<T> {
  let response: QueryResult;
  try { response = await query; }
  catch { throw new ProviderError("unavailable"); }
  if (response.error) throw databaseError(response.error);
  const parsed = schema.safeParse(response.data);
  if (!parsed.success) throw new ProviderError("unavailable");
  return parsed.data;
}

function input<T>(schema: z.ZodType<T>, value: unknown): T {
  const parsed = schema.safeParse(value);
  if (!parsed.success) throw new ProviderError("invalid");
  return parsed.data;
}

/** Uses the verified caller's request-scoped client; SQL remains the authorization boundary. */
class SupabaseResearchDataProvider implements ResearchDataProvider {
  readonly name = "supabase";

  constructor(private readonly client: StaffClient, private readonly userId: string) {
    input(z.uuid(), userId);
  }

  async listRuns() {
    return read(z.array(runRecord), this.client.schema("veyai").from("runs")
      .select("*").order("created_at", { ascending: false }).limit(100));
  }

  async directory() {
    return read(z.array(directoryRecord), this.client.schema("veyai").from("memberships")
      .select("workspace_id,user_id,role,display_name").in("role", ["reviewer", "admin"]));
  }

  async detail(id: string): Promise<RunDetail | null> {
    const target = input(z.uuid(), id);
    const db = this.client.schema("veyai");
    const run = await read(runRecord.nullable(), db.from("runs").select("*").eq("id", target).maybeSingle());
    if (!run) return null;
    const [output, history, decisions] = await Promise.all([
      read(outputRecord.nullable(), db.from("outputs").select("*").eq("run_id", target).maybeSingle()),
      read(z.array(historyRecord), db.from("audit_log").select("event,created_at").eq("run_id", target).order("id")),
      read(z.array(decisionRecord), db.from("decisions").select("decision,scope,reason,created_at,research_hash,evidence_hash").eq("run_id", target)),
    ]);
    const [bundle, parentOutput] = await Promise.all([
      output ? read(sourceSetRecord, db.from("source_sets").select("sources,content_hash").eq("id", output.source_set_id).single()) : null,
      run.parent_run_id ? read(outputRecord, db.from("outputs").select("*").eq("run_id", run.parent_run_id).single()) : null,
    ]);
    return {
      run, output, parentOutput, bundle, history, decisions,
      telemetry: { provider: this.name, mode: "fixture", latencyMs: null, estimatedTokens: null, costMicroUsd: null },
    };
  }

  async approvals() {
    return read(z.array(approvalRecord), this.client.schema("veyai").from("approvals")
      .select("*").eq("reviewer_id", this.userId).order("created_at", { ascending: false }).limit(50));
  }

  async createRun(value: CreateRunInput) {
    const parsed = input(createRunInput, value);
    // Connected SQL and the restricted worker support only the original three scenarios.
    const fixture = input(fixtureKey, parsed.fixture);
    if (parsed.evidence && parsed.evidence !== "challenge") throw new ProviderError("unavailable");
    return read(z.uuid(), this.client.schema("veyai").rpc("create_run", {
      w: parsed.w, reviewer: parsed.reviewer, fixture, key: parsed.key,
      parent: parsed.parent ?? null, supersedes: parsed.supersedes ?? null,
    }));
  }

  async cancelRun(id: string) {
    await read(z.null(), this.client.schema("veyai").rpc("cancel_run", { target: input(z.uuid(), id) }));
  }

  async decide(value: DecisionInput) {
    const parsed = input(decisionInput, value);
    await read(z.uuid(), this.client.schema("veyai").rpc("decide", parsed));
  }

  async advanceRun() {
    // The request-scoped staff client must never acquire the restricted worker's authority.
    throw new ProviderError("unavailable");
  }
}

export class SupabaseDataProvider implements DataProvider {
  readonly research: ResearchDataProvider;

  constructor(client: StaffClient, userId: string) {
    this.research = new SupabaseResearchDataProvider(client, userId);
  }
}
