import { z } from "zod";
import { contracts } from "@/lib/veyai/domain/contracts";
import { validateEvidence, validateResearch } from "@/lib/veyai/domain/schemas";
import type { EvidenceOutput, ResearchOutput, Source } from "@/lib/veyai/domain/schemas";
import { evidenceFixtureOptions, researchFixtureOptions } from "./contracts";
import type { AIErrorCode, AIMetadata, AIProvider, AIResult, RunEvidenceReviewInput, RunResearchInput } from "./contracts";
import { providerEvidenceFixture, providerResearchFixture } from "./fixtures";

const researchInputSchema = z.object({ fixtureKey: z.enum(researchFixtureOptions.map((item) => item.key)) });
const evidenceInputSchema = z.object({
  fixtureKey: z.enum(evidenceFixtureOptions.map((item) => item.key)).default("challenge"),
  parent: z.strictObject({ id: z.uuid(), content_hash: z.string().regex(/^[a-f0-9]{64}$/) }),
});
const messages: Record<AIErrorCode, string> = {
  provider_disabled: "Live AI execution is disabled.",
  invalid_input: "The requested fixture or research version is invalid.",
  tool_failure: "The synthetic source retrieval failed. No research output was accepted.",
  timeout: "The synthetic execution reached its deadline. No research output was accepted.",
  schema_validation_failed: "The proposed output failed structured or provenance validation.",
  cancelled: "The fixture execution was cancelled. No output was accepted.",
};

/** Fixed local examples only: no provider SDK, network retrieval, arbitrary instructions or external action. */
export class FixtureAIProvider implements AIProvider {
  readonly id = "fixture" as const;
  readonly mode = "fixture" as const;

  private metadata(agent: "research" | "evidence", key: string, started: number, output?: unknown, sources: Source[] = []): AIMetadata {
    const contract = contracts[agent];
    return {
      provider: this.id, mode: this.mode, fixtureKey: key, agent, contractVersion: contract.version,
      promptVersion: contract.promptVersion, modelVersion: "synthetic-fixture-0.1.0", schemaVersion: contract.schemaVersion,
      latencyMs: Math.max(0, Date.now() - started),
      // Character-based values are illustrative only. No tokens are sent or billed.
      usageEstimate: { kind: "synthetic", inputTokens: output ? Math.ceil(JSON.stringify(sources).length / 4) : 0,
        outputTokens: output ? Math.ceil(JSON.stringify(output).length / 4) : 0, toolCalls: 0, costMicroUsd: 0 },
    };
  }

  private failure<T>(agent: "research" | "evidence", key: string, started: number, code: AIErrorCode): AIResult<T> {
    return { status: code === "cancelled" ? "cancelled" : "failed", error: { code, message: messages[code] }, metadata: this.metadata(agent, key, started) };
  }

  async runResearch(input: RunResearchInput): Promise<AIResult<ResearchOutput>> {
    const started = Date.now();
    const parsed = researchInputSchema.safeParse(input);
    if (!parsed.success) return this.failure("research", "invalid", started, "invalid_input");
    const key = parsed.data.fixtureKey;
    // Yield once so an application cancellation before completion is observed without adding fake latency.
    await Promise.resolve();
    if (input.signal?.aborted) return this.failure("research", key, started, "cancelled");
    if (key === "tool-failure") return this.failure("research", key, started, "tool_failure");
    if (key === "timeout") return this.failure("research", key, started, "timeout");
    try {
      const fixture = providerResearchFixture(key);
      const result = validateResearch(fixture.output, fixture.sources);
      const metadata = this.metadata("research", key, started, result.output, result.sources);
      return result.complete ? { ...result, status: "completed", complete: true, metadata } : { ...result, status: "incomplete", complete: false, metadata };
    } catch {
      // Raw validation exceptions can contain source text; expose only a stable controlled error.
      return this.failure("research", key, started, "schema_validation_failed");
    }
  }

  async runEvidenceReview(input: RunEvidenceReviewInput): Promise<AIResult<EvidenceOutput>> {
    const started = Date.now();
    const parsed = evidenceInputSchema.safeParse(input);
    if (!parsed.success) return this.failure("evidence", "invalid", started, "invalid_input");
    const { fixtureKey: key, parent } = parsed.data;
    await Promise.resolve();
    if (input.signal?.aborted) return this.failure("evidence", key, started, "cancelled");
    try {
      const research = validateResearch(input.research, input.sources);
      const result = validateEvidence(providerEvidenceFixture(key, research.output, parent), research.output, research.sources, parent);
      const metadata = this.metadata("evidence", key, started, result.output, result.sources);
      return result.complete ? { ...result, status: "completed", complete: true, metadata } : { ...result, status: "incomplete", complete: false, metadata };
    } catch {
      return this.failure("evidence", key, started, "schema_validation_failed");
    }
  }
}
