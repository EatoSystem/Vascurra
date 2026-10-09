import { z } from "zod";

const text = z.string().trim().min(1).max(4000);
const list = z.array(text).max(30);
const refs = z.array(z.string().min(1).max(80)).min(1).max(20);
export const fixtureKey = z.enum(["association", "missing-sources", "injection"]);
export const sourceSchema = z.strictObject({
  id: z.string().min(1).max(80), title: text, authors: list,
  url: z.url().refine((url) => new URL(url).protocol === "https:", "Only HTTPS source links are allowed"),
  publication: text, publication_date: z.string().nullable(), retrieved_at: z.iso.datetime(),
  source_type: z.literal("synthetic"), excerpt: text, location: text,
});
export const sourceBundleSchema = z.array(sourceSchema).max(20);
const confidence = z.strictObject({ level: z.enum(["low", "moderate", "high", "not_assessed"]), rationale: text });
export const researchSchema = z.strictObject({
  schema_version: z.literal("0.1.0"), summary: text, research_question: text,
  key_findings: z.array(z.strictObject({ id: text, statement: text, kind: z.enum(["reported", "interpretation"]), source_refs: refs, quote: text, location: text })).max(30),
  contradictions: list, unknowns: list,
  candidate_hypotheses: z.array(z.strictObject({ statement: text, basis_refs: refs, limitation: text })).max(10),
  relevant_researchers: z.array(z.strictObject({ name: text, source_refs: refs })).max(10),
  recommended_next_steps: list, confidence, limitations: list,
});
export const evidenceSchema = z.strictObject({
  schema_version: z.literal("0.1.0"), research_output_id: z.uuid(), research_hash: z.string().regex(/^[a-f0-9]{64}$/),
  reviews: z.array(z.strictObject({
    finding_id: text, claim: text, source_refs: refs, quote: text, location: text,
    study_design: text, sample_size: z.number().int().positive().nullable(),
    human_or_preclinical: z.enum(["human", "preclinical", "synthetic", "unknown"]),
    evidence_strength: z.enum(["insufficient", "limited", "moderate", "strong"]),
    key_limitations: list, causality_status: z.enum(["not_established", "association_only", "causal_design_requires_review"]),
    replication_status: z.enum(["unknown", "not_replicated", "mixed", "replicated_with_limits"]),
    contradictions: list, generalisability: text, confidence,
    recommendation: z.enum(["reject", "insufficient", "investigate", "strong_basis"]),
  })).max(30),
  unreviewed_findings: z.array(z.strictObject({ finding_id: text, reason: text })).max(30),
  overall_limitations: list, appraisal_rubric_version: z.literal("synthetic-0.1.0"),
});
export type ResearchOutput = z.infer<typeof researchSchema>;
export type EvidenceOutput = z.infer<typeof evidenceSchema>;
export type Source = z.infer<typeof sourceSchema>;

function validateReferences(ids: string[], sources: Source[]) {
  if (ids.some((id) => !sources.some((source) => source.id === id))) throw new Error("Missing source reference");
}
function validateQuote(ids: string[], quote: string, location: string, sources: Source[]) {
  validateReferences(ids, sources);
  if (!sources.some((source) => ids.includes(source.id) && source.excerpt.includes(quote) && source.location === location)) {
    throw new Error("Supporting excerpt does not resolve");
  }
}
export function validateResearch(value: unknown, rawSources: unknown) {
  const output = researchSchema.parse(value);
  const sources = sourceBundleSchema.parse(rawSources);
  if (new Set(sources.map((s) => s.id)).size !== sources.length) throw new Error("Duplicate source ID");
  if (new Set(output.key_findings.map((f) => f.id)).size !== output.key_findings.length) throw new Error("Duplicate finding ID");
  output.key_findings.forEach((finding) => validateQuote(finding.source_refs, finding.quote, finding.location, sources));
  output.candidate_hypotheses.forEach((hypothesis) => validateReferences(hypothesis.basis_refs, sources));
  output.relevant_researchers.forEach((person) => validateReferences(person.source_refs, sources));
  return { output, sources, complete: sources.length > 0 && output.key_findings.length > 0 };
}
export function validateEvidence(value: unknown, research: ResearchOutput, sources: Source[], parent: { id: string; content_hash: string }) {
  const output = evidenceSchema.parse(value);
  if (output.research_output_id !== parent.id || output.research_hash !== parent.content_hash) throw new Error("Stale parent output");
  const reviewed = [...output.reviews.map((r) => r.finding_id), ...output.unreviewed_findings.map((r) => r.finding_id)];
  const expected = research.key_findings.map((f) => f.id);
  if (new Set(reviewed).size !== reviewed.length || reviewed.length !== expected.length || reviewed.some((id) => !expected.includes(id))) throw new Error("Incomplete claim coverage");
  output.reviews.forEach((review) => {
    const finding = research.key_findings.find((item) => item.id === review.finding_id);
    if (review.claim !== finding?.statement) throw new Error("Claim mismatch");
    validateQuote(review.source_refs, review.quote, review.location, sources);
  });
  return { output, sources, complete: expected.length > 0 && sources.length > 0 && output.unreviewed_findings.length === 0 };
}
