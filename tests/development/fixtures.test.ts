import { describe, expect, it } from "vitest";
import { atlasFixtures, capitalFixture, programmeFixture } from "@/lib/development/atlas";
import { veyaJourneys } from "@/lib/development/veya-fixtures";
import { homepageIntroduction } from "@/content/home";

describe("development fixture boundaries", () => {
  it("keeps institutional knowledge types visibly distinct and synthetic", () => {
    expect([atlasFixtures.question.label, atlasFixtures.sources[0].label, atlasFixtures.findings[0].label, atlasFixtures.interpretation.label, atlasFixtures.hypothesis.label, atlasFixtures.decision.label]).toEqual(["Question", "Source", "Finding", "Interpretation", "Hypothesis", "Decision"]);
    expect(JSON.stringify(atlasFixtures)).toContain("Synthetic");
    expect(JSON.stringify(atlasFixtures)).toContain("Proposal only");
  });
  it("keeps Operations and Capital proposals non-executable", () => {
    expect(programmeFixture.risks).toContain("Premature external action");
    expect(capitalFixture.readiness).toContain("approved programme");
    expect(JSON.stringify(capitalFixture)).not.toMatch(/bank integration|transfer funds|investment advice/i);
  });
  it("covers Veya control, uncertainty, emergency and medical boundaries", () => {
    const ids = veyaJourneys.map((journey) => journey.id);
    expect(ids).toEqual(expect.arrayContaining(["morning", "preference", "appointment", "weekly", "family", "decline", "uncertain", "emergency", "medical"]));
    expect(veyaJourneys.find((journey) => journey.id === "emergency")?.veya).toContain("emergency services");
    expect(veyaJourneys.find((journey) => journey.id === "medical")?.veya).toContain("cannot recommend");
    expect(JSON.stringify(veyaJourneys)).not.toMatch(/diagnos(?:e|is) you|change your medication now/i);
  });
  it("states the simple public model without presenting achieved outcomes", () => {
    expect(homepageIntroduction).toContain("Veya is being designed to support the person");
    expect(homepageIntroduction).toContain("VeyAI helps Vascurra research and operate");
    expect(homepageIntroduction).toContain("Brain Cells help build mission capability");
    expect(homepageIntroduction).not.toMatch(/prevents|cures|clinically validated/i);
  });
});
