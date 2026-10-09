import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { brainCellHorizons, horizonBrainCellsById, ultimateBrainCellTarget, ultimateCapitalTargetCents, brainCellUnitCents, missionFlow } from "./brain-cells";
import { capitalFlywheel } from "./home";
import { fundPage } from "./fund";
import { researchEngine, researchHorizons, researchProgrammes, longTermProgrammes, researchMission, researchSources, type ResearchProgramme } from "./research-engine";
import { primaryNav, type NavigationItem } from "./vascurra/public-site";
import { isHoldingPublicPath } from "../lib/holding-public";

describe("proposed Vascurra Research Engine", () => {
  it("shares four canonical horizons and derives the separate full mission", () => {
    expect(researchHorizons.map((horizon) => horizon.id)).toEqual(brainCellHorizons.map((horizon) => horizon.id));
    expect(researchHorizons.map((horizon) => horizon.amount)).toEqual(fundPage.horizons.map((horizon) => horizon.amount));
    expect(researchHorizons.map((horizon) => horizon.amount)).toEqual(capitalFlywheel.horizons.map((horizon) => horizon.amount));
    for (const horizon of researchHorizons) expect(horizon.brainCells).toBe(horizonBrainCellsById(horizon.id));
    expect(ultimateCapitalTargetCents).toBe(ultimateBrainCellTarget * brainCellUnitCents);
    expect(researchMission).toMatchObject({ brainCells: "100B Brain Cells", capital: "€10B", label: "The full long-term mission" });
    expect(researchHorizons).toHaveLength(4);
    expect(researchEngine.reinvestment.flow).toBe(missionFlow);
  });

  it("keeps every programme reference unique, valid and explicitly proposed", () => {
    const programmes: readonly ResearchProgramme[] = [...Object.values(researchProgrammes), ...longTermProgrammes];
    expect(new Set(programmes.map((programme) => programme.id)).size).toBe(programmes.length);
    const mapped = researchHorizons.flatMap((horizon) => horizon.programmeIds);
    expect(new Set(mapped).size).toBe(mapped.length);
    expect(new Set(mapped)).toEqual(new Set(Object.keys(researchProgrammes)));
    for (const programme of programmes) {
      expect(programme.status).toMatch(/^Proposed /);
      expect(programme.boundary.length).toBeGreaterThan(35);
      expect(programme.humanExpertise.length).toBeGreaterThan(0);
      for (const sourceId of programme.sourceIds) expect(sourceId in researchSources).toBe(true);
    }
  });

  it("preserves clinical, privacy and evidence boundaries beside the proposals", () => {
    expect(researchProgrammes["patient-0"].boundary).toContain("cannot establish causation");
    expect(researchProgrammes.cohort.boundary).toContain("not stages of inevitable progression");
    expect(researchProgrammes.prevention.boundary).toContain("does not mean Vascurra prevents disease");
    expect(researchProgrammes["digital-phenotyping"].boundary).toContain("separate explicit consent");
    expect(researchProgrammes["trial-intelligence"].boundary).toContain("Simulation is not clinical evidence");
    expect(longTermProgrammes.find((programme) => programme.id === "cure-programme")?.status).toBe("Proposed long-term therapeutics research");
    expect(researchMission.boundary).toContain("not a cure promise");
    expect(researchEngine.hero.boundary).toContain("does not announce active studies");
    expect(researchEngine.capital.body).toContain("symbolic units of mission capacity, not biological cell counts");
    const copy = JSON.stringify({ researchEngine, researchProgrammes, longTermProgrammes });
    expect(copy).not.toMatch(/Vascurra will (?:cure|prevent|predict|diagnose)|AI will cure|guaranteed (?:discovery|cure|clinical benefit)|enrol now|buy Brain Cells/i);
  });

  it("links a real route while keeping it behind the existing marketing gate", () => {
    const research = (primaryNav as readonly NavigationItem[]).find((item) => item.label === "Research");
    expect(research?.children?.[0]).toMatchObject({ label: "Research Engine", href: "/research-engine" });
    expect(isHoldingPublicPath("/research-engine")).toBe(false);
    const route = resolve(process.cwd(), "app/(v2)/research-engine/page.tsx");
    expect(existsSync(route)).toBe(true);
    expect(readFileSync(route, "utf8")).toContain("index: false, follow: false");
  });

  it("keeps homepage additions compact and research sources traceable", () => {
    for (const horizon of capitalFlywheel.horizons) {
      expect(horizon.capabilityLine.split(/\s+/).length).toBeLessThanOrEqual(22);
      expect(horizon.descriptor.split(/\s+/).length).toBeLessThanOrEqual(14);
    }
    for (const source of Object.values(researchSources)) {
      expect(source.href).toMatch(/^https:\/\//);
      expect(source.scope.length).toBeGreaterThan(25);
    }
  });
});
