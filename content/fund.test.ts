import { describe, expect, it } from "vitest";
import { fundPage } from "./fund";

const copy = JSON.stringify(fundPage);

describe("Vascurra Fund capital mobilisation model", () => {
  it("uses the flagship capacity hero while retaining the campaign line", () => {
    expect(fundPage.hero.title.join(" ")).toBe("Build permanent capacity to fight vascular dementia.");
    expect(fundPage.hero.title).toEqual(["Build permanent capacity", "to fight vascular dementia."]);
    expect(fundPage.hero.title.join(" ")).not.toBe("Fund the next question.");
    expect(fundPage.hero.lead).toContain("mobilise sustained capital, compute, research capacity and expertise");
    expect(fundPage.closing.eyebrow).toBe("Fund the next question");
  });

  it("defines all four qualified mission-capacity horizons", () => {
    expect(fundPage.horizons.map((horizon) => horizon.amount)).toEqual(["€1–5M", "€10–25M", "€50–100M+", "€1B+"]);
    expect(fundPage.horizons.map((horizon) => horizon.title)).toEqual(["Build the foundation", "Build the research engine", "Build the international network", "Permanent global capacity"]);
    expect(fundPage.horizons.slice(0, 3).every((horizon) => horizon.status === "Planning horizon")).toBe(true);
    expect(fundPage.horizons[3]).toMatchObject({ status: "Long-term mission", featured: true });
    expect(fundPage.horizonsQualifier).toContain("not current funding");
    expect(fundPage.horizonsQualifier).toContain("not current funding, announced equity rounds, valuations, fundraising commitments or guarantees");
    expect(fundPage.horizons[0]!.themes?.map((theme) => theme.label)).toEqual(["Build", "Protect", "Prepare"]);
    expect(fundPage.horizons[1]!.themes?.map((theme) => theme.label)).toEqual(["Research", "Expand", "Strengthen"]);
    expect(fundPage.horizons[2]!.themes?.map((theme) => theme.label)).toEqual(["Connect", "Infrastructure", "Expand"]);
  });

  it("defines the more-than-cash model, diversified sources and accountability", () => {
    expect(fundPage.mobilisation.title.join(" ")).toBe("Capacity is bigger than cash alone.");
    expect(fundPage.mobilisation.explanation).toContain("does not necessarily mean €100M in cash");
    expect(fundPage.mobilisation.resources.map((resource) => resource.name)).toEqual(expect.arrayContaining(["Cash capital", "AI + compute", "Research funding", "Expertise", "Infrastructure", "Commercial revenue", "In-kind contributions"]));
    expect(fundPage.sources.items).toContain("Founder capital");
    expect(fundPage.sources.items).toContain("Permanent / endowment-style capital — longer term");
    expect(fundPage.transparency.eyebrow).toBe("Vascurra Research Ledger");
    expect(fundPage.transparency.items).toContain("What resources were mobilised?");
    expect(fundPage.transparency.items).toContain("What was opened to others?");
  });

  it("frames €1B+ only as cumulative long-term mission capacity", () => {
    const mission = fundPage.horizons[3];
    expect(mission).toBeDefined();
    if (!mission) throw new Error("Long-term mission horizon is required");
    expect(mission.body).toContain("cumulative mission capacity over time");
    expect(mission.statement).toContain("cumulative capacity");
    expect(mission.body).not.toMatch(/currently raising|valuation|single transaction/i);
  });

  it("preserves financial and legal boundaries", () => {
    expect(fundPage.hero.qualifier).toContain("not represented as a registered charity");
    expect(fundPage.hero.qualifier).toContain("tax-deductible fund");
    expect(fundPage.hero.qualifier).toContain("investment product");
    expect(fundPage.hero.qualifier).toContain("accepts no payments");
    expect(fundPage.sources.qualifier).toContain("No existing commitment, partnership, legal structure or eligibility is implied");
    expect(fundPage.sources.equityNote).toContain("without assuming that equity financing must be the default");
    expect(copy).not.toMatch(/invest now|investment opportunity|shareholder return|\bROI\b|Series [ABC]|secured funding|committed funding/i);
  });

  it("keeps reinvestment aspirational rather than binding", () => {
    expect(fundPage.reinvestment.flow).toEqual(["Products", "Revenue", "Research + development", "Better systems", "Better products"]);
    expect(fundPage.reinvestment.body).toContain("strategic ambition");
    expect(fundPage.reinvestment.note).toContain("not a binding allocation");
    expect(copy).not.toMatch(/mandatory percentage|will allocate \d|guaranteed revenue/i);
  });

  it("contains no promised medical or scientific outcome", () => {
    expect(copy).not.toMatch(/will cure|will prevent|will slow|will improve cognition|guaranteed breakthrough|guaranteed scientific|guaranteed clinical/i);
    expect(fundPage.flywheel.note).toContain("not a representation of current revenue, current funding or guaranteed future outcomes");
  });
});
