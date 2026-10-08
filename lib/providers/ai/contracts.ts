import type { EvidenceOutput, ResearchOutput, Source } from "@/lib/veyai/domain/schemas";

export const researchFixtureOptions = [
  { key: "association", title: "Research completed", question: "What can a fictional observational study tell us about a fictional routine?" },
  { key: "conflicting-evidence", title: "Conflicting evidence", question: "How should two fictional studies with different findings be represented?" },
  { key: "weak-evidence", title: "Weak evidence", question: "What remains unknown after a small fictional case series?" },
  { key: "missing-sources", title: "Missing provenance", question: "What should happen when no traceable sources are available?" },
  { key: "injection", title: "Untrusted source instructions", question: "Can source content change the workflow's permissions?" },
  { key: "tool-failure", title: "Retrieval failure", question: "How does a run stop when its source retrieval fails?" },
  { key: "timeout", title: "Execution timeout", question: "How does a run stop when its execution deadline is reached?" },
  { key: "schema-failure", title: "Invalid structured output", question: "How does a run reject an output that breaks its contract?" },
] as const;
export type ResearchFixtureKey = typeof researchFixtureOptions[number]["key"];
export const evidenceFixtureOptions = [
  { key: "agreement", title: "Evidence agrees with the cautious interpretation" },
  { key: "challenge", title: "Evidence challenges the proposed next step" },
] as const;
export type EvidenceFixtureKey = typeof evidenceFixtureOptions[number]["key"];

export interface ResearchVersion { id: string; content_hash: string }
export interface RunResearchInput { fixtureKey: ResearchFixtureKey; signal?: AbortSignal }
export interface RunEvidenceReviewInput {
  fixtureKey?: EvidenceFixtureKey;
  research: ResearchOutput;
  sources: Source[];
  /** The application supplies an immutable version and checks that it is still current before persistence. */
  parent: ResearchVersion;
  signal?: AbortSignal;
}

export type AIErrorCode = "provider_disabled" | "invalid_input" | "tool_failure" | "timeout" | "schema_validation_failed" | "cancelled";
export interface AIMetadata {
  provider: "fixture" | "openai";
  mode: "fixture" | "disabled";
  fixtureKey: string;
  agent: "research" | "evidence";
  contractVersion: string;
  promptVersion: string;
  modelVersion: string;
  schemaVersion: string;
  latencyMs: number;
  usageEstimate: { kind: "synthetic" | "none"; inputTokens: number; outputTokens: number; toolCalls: number; costMicroUsd: number };
}
export type AIResult<T> =
  | { status: "completed"; output: T; sources: Source[]; complete: true; metadata: AIMetadata }
  | { status: "incomplete"; output: T; sources: Source[]; complete: false; metadata: AIMetadata }
  | { status: "failed" | "cancelled"; error: { code: AIErrorCode; message: string }; metadata: AIMetadata };

/** No arbitrary prompt, tool, external write, Operations or Capital execution enters this boundary. */
export interface AIProvider {
  readonly id: "fixture" | "openai";
  readonly mode: "fixture" | "disabled";
  runResearch(input: RunResearchInput): Promise<AIResult<ResearchOutput>>;
  runEvidenceReview(input: RunEvidenceReviewInput): Promise<AIResult<EvidenceOutput>>;
}
