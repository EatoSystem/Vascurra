import { describe, expect, it, vi } from "vitest";
import { createFixtureWorkspace, fixtureIdentity, FixtureDataProvider, fixtureWorkspaceId } from "@/lib/providers/data/fixture";
import { FixtureAIProvider } from "@/lib/providers/ai";
import type { ResearchDataProvider } from "@/lib/providers/data/contract";

function setup(limit = 10) {
  const store = createFixtureWorkspace(limit); const ai = new FixtureAIProvider();
  const owner = new FixtureDataProvider(store, fixtureIdentity("researcher"), ai);
  const reviewer = new FixtureDataProvider(store, fixtureIdentity("reviewer"), ai);
  const admin = new FixtureDataProvider(store, fixtureIdentity("admin"), ai);
  const input = (fixture = "association") => ({ w: fixtureWorkspaceId, reviewer: fixtureIdentity("reviewer").id, fixture, key: crypto.randomUUID() });
  return { owner, reviewer, admin, input, store };
}
async function complete(provider: ResearchDataProvider, id: string) { await provider.advanceRun(id); await provider.advanceRun(id); }
describe("research data contract", () => {
  it("preserves the full explicit Research → Evidence → independent human decision loop", async () => {
    const { owner, reviewer, input } = setup(); const research = await owner.createRun(input());
    expect((await owner.detail(research))?.run.status).toBe("queued");
    await owner.advanceRun(research); expect((await owner.detail(research))?.run.status).toBe("running");
    await owner.advanceRun(research); expect((await owner.detail(research))?.output?.complete).toBe(true);
    expect(await reviewer.approvals()).toEqual([]);
    const evidence = await owner.createRun({ ...input(), parent: research }); await complete(owner, evidence);
    const approval = (await reviewer.approvals())[0]!;
    const decision = { target: approval.id, expected_research: approval.research_hash, expected_evidence: approval.evidence_hash, choice: "approve" as const, explanation: "Synthetic independent review only.", key: crypto.randomUUID() };
    await expect(owner.decide(decision)).rejects.toThrow("permission");
    await reviewer.decide(decision); await reviewer.decide(decision);
    expect((await reviewer.detail(evidence))?.decisions).toHaveLength(1);
    expect((await reviewer.detail(evidence))?.decisions[0]?.scope).toBe("programme_planning");
    expect(await owner.listRuns()).toHaveLength(2);
    expect((await reviewer.approvals())[0]?.status).toBe("decided");
    const revision = await owner.createRun({ ...input(), supersedes: research });
    expect(revision).not.toBe(research);
    expect((await reviewer.approvals())[0]?.status).toBe("stale");
    expect((await owner.detail(evidence))?.run.is_current).toBe(false);
    await expect(reviewer.decide({ ...decision, key: crypto.randomUUID() })).rejects.toThrow("stale");
    expect((await owner.detail(evidence))?.decisions).toHaveLength(1);
  });
  it("invalidates an old Evidence approval on re-review and rejects changed hashes", async () => {
    const { owner, reviewer, input } = setup(); const id = await owner.createRun(input()); await complete(owner, id);
    const first = await owner.createRun({ ...input(), parent: id }); await complete(owner, first);
    const a = (await reviewer.approvals())[0]!;
    await expect(reviewer.decide({ target: a.id, expected_research: "b".repeat(64), expected_evidence: a.evidence_hash, choice: "hold", explanation: "Wrong Research version supplied.", key: crypto.randomUUID() })).rejects.toThrow("stale");
    await owner.createRun({ ...input(), parent: id, evidence: "agreement" });
    expect((await reviewer.approvals())[0]?.status).toBe("stale");
  });
  it("enforces access, assigned roles, workspace and store isolation", async () => {
    const { owner, reviewer, admin, input } = setup(); const id = await owner.createRun(input());
    expect(await admin.detail(id)).toBeNull(); expect(await admin.listRuns()).toEqual([]);
    expect(await setup().owner.detail(id)).toBeNull();
    await expect(reviewer.createRun(input())).rejects.toThrow("permission");
    await expect(owner.createRun({ ...input(), reviewer: fixtureIdentity("researcher").id })).rejects.toThrow("permission");
    await expect(owner.createRun({ ...input(), w: crypto.randomUUID() })).rejects.toThrow("invalid");
    await expect(reviewer.cancelRun(id)).rejects.toThrow("permission");
  });
  it("counts cancelled/failed runs toward a hard daily ceiling while replay remains idempotent", async () => {
    const { owner, input } = setup(1); const command = input(); const id = await owner.createRun(command);
    await owner.cancelRun(id); expect(await owner.createRun(command)).toBe(id);
    await expect(owner.createRun(input())).rejects.toThrow("limit");
    await expect(owner.createRun({ ...command, fixture: "missing-sources" })).rejects.toThrow("invalid");
    await expect(owner.advanceRun(id)).rejects.toThrow("stale");
  });
  it("keeps missing provenance incomplete and failure scenarios without accepted outputs", async () => {
    const { owner, input } = setup(); const missing = await owner.createRun(input("missing-sources")); await complete(owner, missing);
    expect((await owner.detail(missing))?.run.status).toBe("incomplete");
    await expect(owner.createRun({ ...input(), parent: missing })).rejects.toThrow("stale");
    for (const fixture of ["tool-failure", "timeout", "schema-failure"]) {
      const id = await owner.createRun(input(fixture)); await complete(owner, id);
      expect((await owner.detail(id))?.run.status).toBe("failed"); expect((await owner.detail(id))?.output).toBeNull();
    }
  });
  it("returns detached snapshots and cannot resurrect a cancelled running run", async () => {
    const { owner, input } = setup(); const id = await owner.createRun(input());
    const snapshot = (await owner.detail(id))!; snapshot.run.status = "approved";
    expect((await owner.detail(id))?.run.status).toBe("queued");
    await owner.advanceRun(id); const execution = owner.advanceRun(id); await owner.cancelRun(id); await execution;
    expect((await owner.detail(id))?.run.status).toBe("cancelled"); expect((await owner.detail(id))?.output).toBeNull();
  });
  it("records a controlled failure when a provider throws or returns an invalid completed payload", async () => {
    for (const failure of ["throw", "invalid"]) {
      const store = createFixtureWorkspace(); const ai = new FixtureAIProvider();
      if (failure === "throw") vi.spyOn(ai, "runResearch").mockRejectedValue(new Error("Sensitive raw provider error"));
      else vi.spyOn(ai, "runResearch").mockResolvedValue({ status: "completed", output: {}, sources: [] } as never);
      const provider = new FixtureDataProvider(store, fixtureIdentity("researcher"), ai);
      const id = await provider.createRun({ w: fixtureWorkspaceId, reviewer: fixtureIdentity("reviewer").id, fixture: "association", key: crypto.randomUUID() });
      await complete(provider, id); const result = (await provider.detail(id))!;
      expect(result.run).toMatchObject({ status: "failed", error_code: "provider_or_validation_failure" });
      expect(result.output).toBeNull(); expect(result.history.at(-1)?.event).toBe("run_failed");
      expect(JSON.stringify(result)).not.toContain("Sensitive");
    }
  });
  it("commits only one Evidence output and approval for concurrent completion", async () => {
    const { owner, reviewer, input } = setup(); const id = await owner.createRun(input()); await complete(owner, id);
    const evidence = await owner.createRun({ ...input(), parent: id }); await owner.advanceRun(evidence);
    await Promise.all([owner.advanceRun(evidence), owner.advanceRun(evidence)]);
    expect(await reviewer.approvals()).toHaveLength(1);
    expect((await owner.detail(evidence))?.history.filter((h) => h.event === "output_validated")).toHaveLength(1);
  });
});
