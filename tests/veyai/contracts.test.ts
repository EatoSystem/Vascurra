import { describe, expect, it } from "vitest";
import { contracts } from "@/lib/veyai/domain/contracts";
import { evidenceFixture, researchFixture } from "@/lib/veyai/domain/fixtures";
import { validateResearch, validateEvidence } from "@/lib/veyai/domain/schemas";
import { maximumRunCost } from "@/lib/veyai/domain/budget";
import { isVeyaiPrivatePath, veyaiConfiguration } from "@/lib/veyai/config";
import { processFixtureJob } from "@/lib/veyai/runtime/fixture-worker";

describe("provenance and contract enforcement", () => {
  it("requires captured references and exact supporting excerpts", () => {
    const { output, sources } = researchFixture("association");
    expect(validateResearch(output,sources).complete).toBe(true);
    expect(() => validateResearch(output,[])).toThrow("Missing source reference");
    expect(() => validateResearch({ ...output, key_findings: [{ ...output.key_findings[0], quote: "Invented proof" }] }, sources)).toThrow("Supporting excerpt");
    expect(() => validateResearch({ ...output, approve: true }, sources)).toThrow();
  });
  it("rejects partial, changed or untraceable Evidence reviews", () => {
    const { output, sources } = researchFixture("association"); const parent = { id: crypto.randomUUID(), content_hash: "a".repeat(64) };
    const evidence = evidenceFixture(output,parent);
    expect(validateEvidence(evidence,output,sources,parent).complete).toBe(true);
    expect(() => validateEvidence({ ...evidence, reviews: [] },output,sources,parent)).toThrow("Incomplete claim coverage");
    expect(() => validateEvidence(evidence,output,sources,{ ...parent, content_hash: "b".repeat(64) })).toThrow("Stale parent output");
    expect(() => validateEvidence({ ...evidence, reviews: [{ ...evidence.reviews[0], claim: "Changed claim" }] },output,sources,parent)).toThrow("Claim mismatch");
  });
  it("keeps Operations and Capital non-executable", () => {
    for (const id of ["operations","capital"] as const) { expect(contracts[id].tools).toEqual([]); expect(contracts[id].status).toBe("shell"); }
  });
  it("fails a malformed job without accepting its output", async () => {
    let failed = false; let finished = false;
    await processFixtureJob({ claim: async () => ({ run: { id: crypto.randomUUID(), agent_id: "operations" }, lease: crypto.randomUUID() }), fail: async () => { failed = true; }, finish: async () => { finished = true; } });
    expect(failed).toBe(true); expect(finished).toBe(false);
  });
});
describe("configuration and future cost boundary", () => {
  it("fails closed without staff configuration, including with live mode requested", () => {
    expect(veyaiConfiguration({ VEYAI_CONSOLE_ENABLED: "true", VEYAI_EXECUTION_MODE: "live" })).toMatchObject({ enabled: false, mode: "disabled" });
    for (const path of ["/VeyAI/console", "/VeyAI/console/research", "/VeyAI/mfa", "/auth/veyai/callback", "/api/veyai/runs"]) expect(isVeyaiPrivatePath(path)).toBe(true);
    expect(isVeyaiPrivatePath("/VeyAI")).toBe(false);
  });
  it("rejects missing pricing and maximum reservations beyond either ceiling", () => {
    const policy = { perRunMicroUsd: 5000, perUserDailyMicroUsd: 10000, maxInputTokens: 1000, maxOutputTokens: 100, maxModelCalls: 2, inputMicroUsdPerToken: 1, outputMicroUsdPerToken: 2, maxToolCostMicroUsd: 100, priceVersion: "synthetic-rate-1" };
    expect(maximumRunCost(policy)).toBe(2500);
    expect(() => maximumRunCost({ ...policy, perRunMicroUsd: 2000 })).toThrow("Budget ceiling exceeded");
    expect(() => maximumRunCost({ ...policy, perUserDailyMicroUsd: 2000 })).toThrow("Budget ceiling exceeded");
    expect(() => maximumRunCost({ ...policy, priceVersion: "" })).toThrow();
  });
});
