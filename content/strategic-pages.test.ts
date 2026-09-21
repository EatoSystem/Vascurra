import { describe, expect, it } from "vitest";
import { primaryNav } from "./vascurra/public-site";
import { strategicArtworkManifest } from "./strategic-artwork";
import { strategicPages, type StrategicChapter } from "./strategic-pages";

const prohibitedClaims = [
  /vascurra (?:diagnoses|predicts|prevents|treats|cures|slows)/i,
  /clinically validated(?! medical system)/i,
  /tax-deductible donation/i,
  /has (?:achieved|produced) (?:a )?breakthrough/i,
];

describe("Wave 2A strategic pages", () => {
  it("defines the three strategic routes with substantial chapters", () => {
    expect(Object.keys(strategicPages)).toEqual(["system", "fund", "roadmap"]);
    for (const page of Object.values(strategicPages)) {
      expect(page.chapters.length).toBeGreaterThanOrEqual(4);
      expect(page.qualifier.length).toBeGreaterThan(80);
      expect(page.closing.ctas.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("preserves the required System and Fund boundaries", () => {
    const system = JSON.stringify(strategicPages.system);
    expect(system).toContain("No autonomous diagnosis");
    expect(system).toContain("No automatic family access");
    expect(system).toContain("not automatically a scientific finding");
    expect(strategicPages.fund.qualifier).toContain("accepts no payments");
    expect(strategicPages.fund.qualifier).toContain("not represented as a registered charity");
  });

  it("labels roadmap phases without presenting future work as complete", () => {
    const chapters: readonly StrategicChapter[] = strategicPages.roadmap.chapters;
    const statuses = chapters.flatMap((chapter) => chapter.items?.map((item) => item.status) ?? []).filter(Boolean);
    expect(statuses).toContain("Current");
    expect(statuses).toContain("Next");
    expect(statuses).toContain("Future");
    expect(strategicPages.roadmap.qualifier).toContain("Future phases are not completed products");
    expect(strategicPages.fund.qualifier).toContain("proven business model");
    expect(strategicPages.fund.qualifier).toContain("not represented");
  });

  it("contains no prohibited positive health or financing claims", () => {
    const copy = JSON.stringify(strategicPages);
    for (const claim of prohibitedClaims) expect(copy).not.toMatch(claim);
  });

  it("exposes Roadmap while keeping Fund discoverable through Support", () => {
    expect(primaryNav.some((item) => item.label === "The System" && "href" in item && item.href === "/system")).toBe(true);
    expect(primaryNav.some((item) => item.label === "Roadmap" && "href" in item && item.href === "/roadmap")).toBe(true);
    expect(JSON.stringify(strategicPages.fund.closing.ctas)).toContain("/support");
  });

  it("defines replaceable artwork handoffs for every flagship page", () => {
    expect(strategicArtworkManifest).toHaveLength(7);
    expect(new Set(strategicArtworkManifest.map((item) => item.assetKey)).size).toBe(strategicArtworkManifest.length);
    expect(new Set(strategicArtworkManifest.map((item) => item.route))).toEqual(new Set(["/system", "/fund", "/roadmap"]));
    for (const item of strategicArtworkManifest) {
      expect(item.alt.length).toBeGreaterThan(40);
      expect(item.brief.length).toBeGreaterThan(80);
      expect(item.status).toBe("coded visual active; external artwork optional");
    }
  });
});
