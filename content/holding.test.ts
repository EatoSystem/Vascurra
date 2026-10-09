import { describe, expect, it } from "vitest";
import { holdingOverview } from "./holding";

describe("public holding-page narrative", () => {
  const copy = JSON.stringify(holdingOverview);

  it("uses the simplified public layers and keeps development status visible", () => {
    expect(holdingOverview.project.layers.map((layer) => layer.name)).toEqual(["Veya", "VeyAI", "Vascurra Lab"]);
    expect(copy).not.toContain("Vascurra Intelligence");
    expect(copy).toContain("In development");
  });

  it("keeps the holding-page navigation aligned with the public story", () => {
    expect(holdingOverview.navigation.map((item) => item.label)).toEqual([
      "Mission",
      "Challenge",
      "The system",
      "Research",
    ]);
    expect(holdingOverview.statusCta).toBe("How we’re building");
    expect(holdingOverview.footer.backToTop).toBe("Back to top");
  });

  it("frames the challenge as a connected systems problem without the retired citation", () => {
    expect(holdingOverview.challenge.heading.join(" ")).toBe("Vascular cognitive health is a systems problem.");
    expect(holdingOverview.challenge.fragmentation).toContain("often exist in separate places");
    expect(holdingOverview.challenge.response).toContain("Turn better questions into better research.");
    expect(copy).not.toMatch(/NHS|nhs\.uk/i);
  });

  it("preserves the research and human-judgement boundaries", () => {
    expect(holdingOverview.research.distinction).toBe("Everyday observations are not clinical findings.");
    expect(holdingOverview.research.boundary).toContain("Human researchers and clinicians remain responsible");
  });
});
