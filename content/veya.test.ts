import { describe, expect, it } from "vitest";
import { veyaArtworkBriefs, veyaHomepage, veyaMoments, veyaPage } from "./veya";

const positiveClinicalClaims = [
  /veya (?:diagnoses|predicts|prevents|treats|prescribes|changes doses)/i,
  /veya (?:is|has been) clinically validated/i,
  /veya improves? (?:cognition|clinical outcomes|survival)/i,
];

describe("Veya experience content", () => {
  it("uses the approved everyday companion positioning", () => {
    expect(veyaHomepage.headline.join(" ")).toBe("Your everyday intelligence companion.");
    expect(veyaHomepage.supporting).toEqual(["There when you need it.", "Learning with you over time."]);
    expect(veyaHomepage.introduction).toContain("once, several times, or not at all");
    expect(veyaHomepage.introduction).toContain("learning with them over time");
    expect(veyaPage.hero.supporting).toEqual(veyaHomepage.supporting);
  });

  it("shows optional interaction across an illustrative day", () => {
    expect(veyaMoments).toHaveLength(5);
    expect(veyaHomepage.rhythmNote).toContain("not a required schedule");
    expect(veyaPage.frequency.body).toContain("paused or left unused");
    expect(veyaPage.permissions.closing).toContain("never become surveillance");
  });

  it("keeps medication support inside the agreed boundaries", () => {
    expect(veyaPage.medication.body).toContain("agreed medication schedule");
    expect(veyaPage.medication.can).toContain("Prepare medication questions for a clinician");
    expect(veyaPage.medication.cannot).toEqual(expect.arrayContaining(["Prescribe medication", "Alter a dose", "Stop medication", "Independently recommend a change"]));
    expect(veyaPage.medication.boundary).toContain("not an authoritative medication record");
  });

  it("keeps permissions, clinical review and research participation distinct", () => {
    const copy = JSON.stringify(veyaPage);
    expect(copy).toContain("With permission");
    expect(copy).toContain("for human review");
    expect(copy).toContain("Separately governed");
    expect(copy).toContain("separate, explicit process");
  });

  it("defines five uniquely keyed, responsive artwork handoffs", () => {
    expect(veyaArtworkBriefs).toHaveLength(5);
    expect(new Set(veyaArtworkBriefs.map((brief) => brief.assetKey)).size).toBe(5);
    expect(veyaArtworkBriefs.map((brief) => brief.assetKey)).toEqual([
      "veya-daily-rhythm",
      "veya-context-over-time",
      "veya-provenance",
      "veya-perspectives",
      "veya-learning-loop",
    ]);
    for (const brief of veyaArtworkBriefs) {
      expect(brief.mobileUse.length).toBeGreaterThan(30);
      expect(brief.recommendedDimensions).toContain("mobile");
      expect(brief.status).toBe("coded placeholder");
    }
  });

  it("contains no prohibited positive health claims", () => {
    const copy = JSON.stringify({ veyaHomepage, veyaPage });
    for (const claim of positiveClinicalClaims) expect(copy).not.toMatch(claim);
  });
});
