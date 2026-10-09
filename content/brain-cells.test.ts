import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { brainCellUnitCents, cellsFromCents, horizonBrainCells, ultimateBrainCellTarget, ultimateCapitalTargetCents, formatMissionEuro } from "./brain-cells";
import { isHoldingPublicPath } from "@/lib/holding-public";

describe("symbolic Brain Cell mission", () => {
  it("keeps the ultimate target consistent in integer minor units", () => {
    expect(ultimateBrainCellTarget * brainCellUnitCents).toBe(ultimateCapitalTargetCents);
    expect(cellsFromCents(ultimateCapitalTargetCents)).toBe(ultimateBrainCellTarget);
    expect(formatMissionEuro(brainCellUnitCents)).toBe("€0.10");
    expect(formatMissionEuro(ultimateCapitalTargetCents)).toBe("€10B");
  });
  it("derives all four horizon equivalents", () => {
    expect([0, 1, 2, 3].map(horizonBrainCells)).toEqual(["10M–50M Brain Cells", "100M–250M Brain Cells", "500M–1B+ Brain Cells", "10B+ Brain Cells"]);
  });
  it("rejects values that would introduce fractional units or unsafe money arithmetic", () => {
    for (const cents of [-10, 11, 10.5, Number.MAX_SAFE_INTEGER + 1]) expect(() => cellsFromCents(cents)).toThrow();
  });
  it("keeps the mission behind the existing preview gate and out of indexing", () => {
    expect(isHoldingPublicPath("/100-Billion")).toBe(false);
    const route = readFileSync("app/(v2)/100-Billion/page.tsx", "utf8");
    expect(route).toContain("index: false, follow: false");
    expect(readFileSync("app/sitemap.ts", "utf8")).not.toContain("100-Billion");
  });
});
