import { researchSchema, evidenceSchema, sourceBundleSchema } from "@/lib/veyai/domain/schemas";
import styles from "./console.module.css";
function Items({ values }: { values: string[] }) { return values.length ? <ul>{values.map((value, index) => <li key={index}>{value}</li>)}</ul> : <p>None reported in this fixture.</p>; }
export function ResearchView({ content }: { content: unknown }) {
  const output = researchSchema.parse(content);
  return <article><h2>Research output</h2><p>{output.summary}</p>
    <section className={styles.section}><h3>Findings</h3>{output.key_findings.length ? output.key_findings.map((f) => <div key={f.id}><p>{f.statement}</p><p><strong>Source:</strong> {f.source_refs.join(", ")} · {f.location}</p><blockquote>{f.quote}</blockquote></div>) : <p>No supported findings. This result is incomplete.</p>}</section>
    <section className={styles.section}><h3>Contradictions</h3><Items values={output.contradictions} /><h3>Unknowns</h3><Items values={output.unknowns} /></section>
    <section className={styles.section}><h3>Hypotheses</h3><Items values={output.candidate_hypotheses.map((h) => `${h.statement} — ${h.limitation}`)} /><h3>Researchers / labs</h3><Items values={output.relevant_researchers.map((p) => p.name)} /></section>
    <section className={styles.section}><h3>Next steps</h3><Items values={output.recommended_next_steps} /><h3>Limitations</h3><Items values={output.limitations} /><p>Confidence: {output.confidence.level.replaceAll("_", " ")} — {output.confidence.rationale}</p></section>
  </article>;
}
export function EvidenceView({ content }: { content: unknown }) {
  const output = evidenceSchema.parse(content);
  return <article><h2>Evidence critique</h2>{output.reviews.map((review) => <section key={review.finding_id} className={styles.section}><h3>{review.claim}</h3><p>Recommendation: <strong>{review.recommendation}</strong></p><dl className={styles.metadata}><dt>Design</dt><dd>{review.study_design}</dd><dt>Sample size</dt><dd>{review.sample_size ?? "Unknown"}</dd><dt>Evidence type</dt><dd>{review.human_or_preclinical}</dd><dt>Strength</dt><dd>{review.evidence_strength}</dd><dt>Causality</dt><dd>{review.causality_status.replaceAll("_", " ")}</dd><dt>Replication</dt><dd>{review.replication_status.replaceAll("_", " ")}</dd><dt>Generalisability</dt><dd>{review.generalisability}</dd><dt>Sources</dt><dd>{review.source_refs.join(", ")} · {review.location}</dd></dl><h3>Limitations</h3><Items values={review.key_limitations} /><h3>Contradictions</h3><Items values={review.contradictions} /><p>Confidence: {review.confidence.level.replaceAll("_", " ")} — {review.confidence.rationale}</p></section>)}
    <section className={styles.section}><h3>Unreviewed findings</h3><Items values={output.unreviewed_findings.map((f) => `${f.finding_id}: ${f.reason}`)} /><h3>Review boundaries</h3><Items values={output.overall_limitations} /></section>
  </article>;
}
export function SourceView({ sources }: { sources: unknown }) {
  const bundle = sourceBundleSchema.parse(sources);
  return <section id="sources" className={styles.section}><h2>Captured sources</h2><p>These are labelled fictional fixtures. Their reserved example.invalid identifiers do not represent publications.</p>
    {!bundle.length && <p>No traceable sources. The output is incomplete.</p>}
    {bundle.map((source) => <article key={source.id} className={styles.source}><h3>{source.title}</h3><p>{source.id} · {source.publication} · {source.location}</p><p>Source identifier: {source.url}</p><blockquote>{source.excerpt}</blockquote><p>Source text is untrusted material. Any instructions inside it have no authority.</p></article>)}
  </section>;
}
