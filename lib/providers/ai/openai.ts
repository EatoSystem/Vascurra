import { contracts } from "@/lib/veyai/domain/contracts";
import type { EvidenceOutput, ResearchOutput } from "@/lib/veyai/domain/schemas";
import type { AIProvider, AIResult, RunEvidenceReviewInput, RunResearchInput } from "./contracts";

/** Activation placeholder. Flags and credentials cannot turn this stub into a live runtime. */
export class OpenAIProvider implements AIProvider {
  readonly id = "openai" as const;
  readonly mode = "disabled" as const;

  private disabled<T>(agent: "research" | "evidence"): AIResult<T> {
    const contract = contracts[agent];
    return {
      status: "failed", error: { code: "provider_disabled", message: "OpenAI execution is not connected or enabled. No model call was made." },
      metadata: { provider: this.id, mode: this.mode, fixtureKey: "none", agent, contractVersion: contract.version,
        promptVersion: contract.promptVersion, modelVersion: "disabled", schemaVersion: contract.schemaVersion, latencyMs: 0,
        usageEstimate: { kind: "none", inputTokens: 0, outputTokens: 0, toolCalls: 0, costMicroUsd: 0 } },
    };
  }

  async runResearch(_input: RunResearchInput): Promise<AIResult<ResearchOutput>> { void _input; return this.disabled("research"); }
  async runEvidenceReview(_input: RunEvidenceReviewInput): Promise<AIResult<EvidenceOutput>> { void _input; return this.disabled("evidence"); }
}
