import { afterEach, describe, expect, it, vi } from "vitest";
import { FixtureAIProvider, OpenAIProvider, researchFixtureOptions } from "@/lib/providers/ai";
import type { RunResearchInput } from "@/lib/providers/ai";
import { researchFixture } from "@/lib/veyai/domain/fixtures";
import { fixtureKey, validateEvidence, validateResearch } from "@/lib/veyai/domain/schemas";

const parent = { id: "2d571e16-88a3-4a48-b5e3-16d4a82c805b", content_hash: "a".repeat(64) };
afterEach(() => { vi.restoreAllMocks(); });

describe("fixture AI provider contract", () => {
  it("validates deterministic successful, weak and conflicting research with captured provenance", async () => {
    const provider = new FixtureAIProvider();
    for (const key of ["association", "weak-evidence", "conflicting-evidence", "injection"] as const) {
      const result = await provider.runResearch({ fixtureKey: key });
      expect(result.status).toBe("completed");
      if (result.status !== "completed") throw new Error("Expected a complete fixture");
      expect(validateResearch(result.output, result.sources).complete).toBe(true);
      const repeated = await provider.runResearch({ fixtureKey: key });
      if (repeated.status !== "completed") throw new Error("Expected repeatable fixture");
      expect(repeated.output).toEqual(result.output);
      expect(repeated.sources).toEqual(result.sources);
      expect(result.metadata).toMatchObject({ provider: "fixture", mode: "fixture", contractVersion: "0.1.0", schemaVersion: "0.1.0", modelVersion: "synthetic-fixture-0.1.0", usageEstimate: { kind: "synthetic", costMicroUsd: 0, toolCalls: 0 } });
      expect(result.metadata.latencyMs).toBeGreaterThanOrEqual(0);
      if (key === "conflicting-evidence") { expect(result.output.contradictions).toHaveLength(1); expect(result.sources).toHaveLength(2); }
      if (key === "weak-evidence") expect(result.output.relevant_researchers[0]?.name).toMatch(/^Fictional /);
    }
  });
  it("keeps provenance gaps incomplete rather than assigning a lower confidence and completing", async () => {
    const result = await new FixtureAIProvider().runResearch({ fixtureKey: "missing-sources" });
    expect(result).toMatchObject({ status: "incomplete", complete: false, sources: [], output: { key_findings: [] } });
  });
  it.each([["tool-failure", "tool_failure"], ["timeout", "timeout"], ["schema-failure", "schema_validation_failed"]] as const)("rejects %s without exposing an output", async (key, code) => {
    const result = await new FixtureAIProvider().runResearch({ fixtureKey: key });
    expect(result).toMatchObject({ status: "failed", error: { code } });
    expect(result).not.toHaveProperty("output");
  });
  it("cancels before accepting a research or Evidence output", async () => {
    const provider = new FixtureAIProvider();
    const controller = new AbortController();
    const researchPromise = provider.runResearch({ fixtureKey: "association", signal: controller.signal });
    controller.abort();
    expect(await researchPromise).toMatchObject({ status: "cancelled", error: { code: "cancelled" } });
    const fixture = researchFixture("association");
    expect(await provider.runEvidenceReview({ research: fixture.output, sources: fixture.sources, parent, signal: controller.signal })).toMatchObject({ status: "cancelled" });
  });
  it("returns a stable error for an unrecognised fixture", async () => {
    const result = await new FixtureAIProvider().runResearch({ fixtureKey: "external-search" } as unknown as RunResearchInput);
    expect(result).toMatchObject({ status: "failed", error: { code: "invalid_input" }, metadata: { fixtureKey: "invalid" } });
  });
  it("supports independent Evidence agreement and challenge bound to the exact supplied version", async () => {
    const provider = new FixtureAIProvider();
    const fixture = researchFixture("association");
    for (const key of ["agreement", "challenge"] as const) {
      const result = await provider.runEvidenceReview({ fixtureKey: key, research: fixture.output, sources: fixture.sources, parent });
      expect(result.status).toBe("completed");
      if (result.status !== "completed") throw new Error("Expected completed Evidence");
      expect(result.output.research_output_id).toBe(parent.id);
      expect(result.output.research_hash).toBe(parent.content_hash);
      expect(result.output.reviews[0]?.recommendation).toBe(key === "agreement" ? "investigate" : "insufficient");
      expect(() => validateEvidence(result.output, fixture.output, fixture.sources, { ...parent, content_hash: "b".repeat(64) })).toThrow("Stale parent output");
    }
  });
  it("rejects malformed or unsupported Research passed into Evidence", async () => {
    const provider = new FixtureAIProvider();
    const fixture = researchFixture("association");
    expect(await provider.runEvidenceReview({ research: fixture.output, sources: [], parent })).toMatchObject({ status: "failed", error: { code: "schema_validation_failed" } });
    expect(await provider.runEvidenceReview({ research: fixture.output, sources: fixture.sources, parent: { ...parent, content_hash: "not-a-version" } })).toMatchObject({ status: "failed", error: { code: "invalid_input" } });
    const missing = researchFixture("missing-sources");
    expect(await provider.runEvidenceReview({ research: missing.output, sources: missing.sources, parent })).toMatchObject({ status: "incomplete", complete: false });
  });
  it("does not leak mutable fixture state or change Research during Evidence", async () => {
    const provider = new FixtureAIProvider();
    const fixture = researchFixture("association");
    const before = structuredClone(fixture);
    const reviewed = await provider.runEvidenceReview({ research: fixture.output, sources: fixture.sources, parent });
    expect(fixture).toEqual(before);
    if (reviewed.status !== "completed") throw new Error("Expected complete review");
    reviewed.sources[0]!.excerpt = "Changed locally";
    expect(fixture).toEqual(before);
    const research = await provider.runResearch({ fixtureKey: "association" });
    if (research.status !== "completed") throw new Error("Expected complete research");
    expect(research.sources[0]?.excerpt).toBe(before.sources[0]?.excerpt);
  });
  it("keeps source instructions inert and every provider offline", async () => {
    const fetch = vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("Unexpected network access"));
    const provider = new FixtureAIProvider();
    for (const option of researchFixtureOptions) await provider.runResearch({ fixtureKey: option.key });
    const result = await provider.runResearch({ fixtureKey: "injection" });
    if (result.status !== "completed") throw new Error("Expected complete injection fixture");
    expect(result.sources[0]?.excerpt).toContain("UNTRUSTED INSTRUCTION");
    expect(result.output.limitations.join(" ")).toContain("grant no authority");
    expect(result.output).not.toHaveProperty("automatic_approval");
    expect(provider).not.toHaveProperty("runOperations");
    expect(provider).not.toHaveProperty("runCapital");
    const live = new OpenAIProvider();
    expect(await live.runResearch({ fixtureKey: "association" })).toMatchObject({ status: "failed", error: { code: "provider_disabled" }, metadata: { provider: "openai", mode: "disabled", usageEstimate: { kind: "none", costMicroUsd: 0 } } });
    expect(await live.runEvidenceReview({ research: result.output, sources: result.sources, parent })).toMatchObject({ status: "failed", error: { code: "provider_disabled" } });
    expect(fetch).not.toHaveBeenCalled();
  });
  it("preserves the legacy database worker's three permitted fixture keys", () => {
    expect(fixtureKey.options).toEqual(["association", "missing-sources", "injection"]);
  });
});
