import { describe, expect, it } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { brainCellHorizons, horizonBrainCellsById } from "./brain-cells";
import { agentContract, veyaiAgents, veyaiBoundaries, veyaiHorizons } from "./veyai-agents";
import { primaryNav, type NavigationItem } from "./vascurra/public-site";
import { isHoldingPublicPath } from "../lib/holding-public";

describe("VeyAI proposed agent architecture", () => {
  it("uses canonical horizons without introducing a fifth financial stage", () => {
    expect(veyaiHorizons.map(({ id, amount }) => ({ id, amount }))).toEqual(brainCellHorizons.map(({ id, amount }) => ({ id, amount })));
    for (const horizon of veyaiHorizons) expect(horizon.brainCells).toBe(horizonBrainCellsById(horizon.id));
    expect(veyaiHorizons[0]?.agents.map((agent) => agent.id)).toEqual(["research", "evidence", "operations", "capital"]);
    const scheduled = veyaiHorizons.flatMap((horizon) => horizon.agents);
    expect(new Set(scheduled.map((agent) => agent.id))).toEqual(new Set(veyaiAgents.filter((agent) => agent.placement === "horizon").map((agent) => agent.id)));
  });

  it("requires explicit status, limits and human ownership for every unique specialist", () => {
    expect(new Set(veyaiAgents.map((agent) => agent.id)).size).toBe(veyaiAgents.length);
    for (const agent of veyaiAgents) {
      expect(agent.status).toBe(agent.horizon === "01" ? "proposed" : agent.horizon === "04" ? "long-term" : "future");
      expect(agent.responsibilities.length).toBeGreaterThan(0);
      expect(agent.prohibitedActions.join(" ").length).toBeGreaterThan(35);
      expect(agent.humanOwner.length).toBeGreaterThan(25);
      expect(brainCellHorizons.some((horizon) => horizon.id === agent.horizon)).toBe(true);
    }
    expect(veyaiBoundaries.status).toContain("does not announce operational agents");
  });

  it("keeps clinical, external-action and permission authority with people and services", () => {
    const agent = (id: string) => veyaiAgents.find((candidate) => candidate.id === id);
    expect(agent("governance")?.description).toContain("Governance is required from the foundation");
    expect(agent("governance")?.prohibitedActions.join(" ")).toContain("Deterministic services enforce access");
    expect(agent("fundraising")?.prohibitedActions.join(" ")).toContain("requires human approval");
    expect(agent("communications")?.prohibitedActions.join(" ")).toContain("unsupported medical claims");
    expect(agent("capital")?.prohibitedActions.join(" ")).toContain("Cannot move money");
    expect(agent("trial-intelligence")?.prohibitedActions.join(" ")).toContain("Simulation is not clinical evidence");
    expect(agent("prevention")?.description).toContain("not a claim that Vascurra prevents disease");
    expect(agent("therapeutics")?.prohibitedActions.join(" ")).toContain("laboratory, experimental and clinical validation");
    expect(veyaiBoundaries.access).toContain("minimum information necessary");
    expect(veyaiBoundaries.authority).toContain("must never be the authoritative record");
    expect(agentContract.map((field) => field.name)).toEqual(["Purpose", "Permitted data", "Prohibited actions", "Evidence standard", "Confidence requirements", "Human owner", "Escalation rules", "Audit history"]);
  });

  it("exposes the case-preserved route through The System while retaining preview protection", () => {
    const system = (primaryNav as readonly NavigationItem[]).find((item) => item.label === "The System");
    expect(system?.children?.map((item) => item.href)).toEqual(["/system", "/veya", "/VeyAI"]);
    expect(isHoldingPublicPath("/VeyAI")).toBe(false);
    expect(isHoldingPublicPath("/veyai")).toBe(false);
    const route = resolve(process.cwd(), "app/(v2)/VeyAI/page.tsx");
    expect(existsSync(route)).toBe(true);
    expect(readFileSync(route, "utf8")).toContain('canonical: "/VeyAI"');
    expect(readFileSync(route, "utf8")).toContain("index: false, follow: false");
  });
});
