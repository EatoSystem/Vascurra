import { evidenceFixture, researchFixture } from "@/lib/veyai/domain/fixtures";
import type { EvidenceOutput, ResearchOutput, Source } from "@/lib/veyai/domain/schemas";
import { researchFixtureOptions } from "./contracts";
import type { EvidenceFixtureKey, ResearchFixtureKey, ResearchVersion } from "./contracts";

/** Fictional source data exercises workflow mechanics; it cannot support real research claims. */
export function providerResearchFixture(key: ResearchFixtureKey): { output: unknown; sources: Source[] } {
  if (key === "association" || key === "missing-sources" || key === "injection") return researchFixture(key);
  const base = researchFixture("association");
  if (key === "schema-failure") return { ...base, output: { ...base.output, automatic_approval: true } };
  if (key === "tool-failure" || key === "timeout") throw new Error("Failure scenarios do not produce research material");
  const question = researchFixtureOptions.find((option) => option.key === key)!.question;
  if (key === "weak-evidence") {
    const quote = "A fictional case series of three fictional participants reports a subjective preference. There is no comparison group.";
    const source: Source = {
      id: "synthetic-case-series-01", title: "Fictional case series — workflow fixture", authors: ["Fictional researcher Alpha"],
      url: "https://example.invalid/veyai/synthetic-case-series-01", publication: "Synthetic fixture, not a publication", publication_date: null,
      retrieved_at: "2026-10-07T00:00:00.000Z", source_type: "synthetic", excerpt: quote, location: "Fixture paragraph 1",
    };
    return { sources: [source], output: {
      ...base.output, research_question: question, summary: "Synthetic example: a small case series leaves substantial uncertainty.",
      key_findings: [{ id: "finding-01", statement: "The fictional series reports a subjective preference without a comparison group.", kind: "reported", source_refs: [source.id], quote, location: source.location }],
      unknowns: ["Selection effects and independent replication are unknown.", "No causal or clinical conclusion is supported."],
      candidate_hypotheses: [{ statement: "A different fictional setting may produce different reported preferences.", basis_refs: [source.id], limitation: "A question for human review, not an established finding." }],
      relevant_researchers: [{ name: "Fictional researcher Alpha", source_refs: [source.id] }],
      limitations: [...base.output.limitations, "Three fictional participants; subjective reporting; no comparison group."],
    } satisfies ResearchOutput };
  }
  const second: Source = {
    id: "synthetic-study-02", title: "Fictional comparison study — workflow fixture", authors: [],
    url: "https://example.invalid/veyai/synthetic-study-02", publication: "Synthetic fixture, not a publication", publication_date: null,
    retrieved_at: "2026-10-07T00:00:00.000Z", source_type: "synthetic", location: "Fixture paragraph 2",
    excerpt: "Fictional demonstration only. A separate non-randomised study of 18 fictional participants did not observe the association reported in the first fictional study.",
  };
  return { sources: [...base.sources, second], output: {
    ...base.output, research_question: question, summary: "Synthetic example: two fictional studies report different observations. The conflict remains unresolved.",
    key_findings: [...base.output.key_findings, { id: "finding-02", statement: "The second fictional study did not observe the association reported in the first.", kind: "reported", source_refs: [second.id], quote: "did not observe the association reported in the first fictional study.", location: second.location }],
    contradictions: ["The first fictional study reports an association; the second does not. Their different observations are not resolved by this fixture."],
    unknowns: ["Whether the fictional settings are comparable is unknown.", "The reason for the differing observations is unknown."],
    recommended_next_steps: ["Ask a human reviewer whether comparison of the fictional study designs is warranted."],
  } satisfies ResearchOutput };
}

export function providerEvidenceFixture(key: EvidenceFixtureKey, research: ResearchOutput, parent: ResearchVersion): EvidenceOutput {
  const base = evidenceFixture(research, parent);
  return {
    ...base,
    reviews: base.reviews.map((review) => ({
      ...review,
      study_design: "Supplied fictional material; no independently verified study design",
      sample_size: null,
      key_limitations: ["All source material is fictional.", "No independent search or real-world scientific appraisal was performed."],
      contradictions: research.contradictions,
      recommendation: key === "agreement" ? "investigate" : "insufficient",
    })),
    overall_limitations: [...base.overall_limitations, key === "agreement"
      ? "Agreement is limited to the cautious interpretation and human review step. It is not agreement that a clinical claim is established."
      : "Challenge: the fictional bundle is insufficient to justify programme development. Clarify the question and evidence gaps before proposing a next step."],
  };
}
