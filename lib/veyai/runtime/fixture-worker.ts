import { z } from "zod";
import { contracts } from "../domain/contracts";
import { evidenceFixture, researchFixture } from "../domain/fixtures";
import { fixtureKey, researchSchema, validateEvidence, validateResearch } from "../domain/schemas";

const jobSchema = z.object({
  lease: z.uuid(),
  run: z.object({ id: z.uuid(), agent_id: z.enum(["research", "evidence"]), agent_version: z.literal("0.1.0"), prompt_version: z.string(), model_version: z.literal("synthetic-fixture-0.1.0"), mode: z.literal("fixture"), fixture_key: fixtureKey }),
  parent_output: z.object({ id: z.uuid(), content_hash: z.string(), content: researchSchema }).nullable(),
});
export interface WorkerDatabase {
  claim(): Promise<unknown>;
  finish(run: string, lease: string, body: unknown, sources: unknown, complete: boolean): Promise<void>;
  fail(run: string, lease: string): Promise<void>;
}
/** Core is deterministic. Model output never selects a command or authorises a job. */
export async function processFixtureJob(database: WorkerDatabase) {
  const raw = await database.claim();
  if (!raw) return false;
  const envelope = z.object({ lease: z.uuid(), run: z.object({ id: z.uuid() }) }).parse(raw);
  try {
    const job = jobSchema.parse(raw);
    if (job.run.prompt_version !== contracts[job.run.agent_id].promptVersion) throw new Error("Unrecognised prompt version");
    const fixture = researchFixture(job.run.fixture_key);
    const result = job.run.agent_id === "research"
      ? validateResearch(fixture.output, fixture.sources)
      : (() => {
        if (!job.parent_output) throw new Error("Parent required");
        return validateEvidence(evidenceFixture(job.parent_output.content, job.parent_output), job.parent_output.content, fixture.sources, job.parent_output);
      })();
    await database.finish(job.run.id, job.lease, result.output, result.sources, result.complete);
  } catch {
    // Error payloads can contain source text; persist only a deterministic code.
    await database.fail(envelope.run.id, envelope.lease);
  }
  return true;
}
