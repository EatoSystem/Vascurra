import { ArtworkPlaceholder } from "./artwork-placeholder";
import styles from "./homepage-scaffold.module.css";

const principles = ["Context before conclusions.", "Provenance stays visible.", "Uncertainty is preserved.", "Important patterns are surfaced for human review."];

export function Intelligence() {
  return <section id="intelligence" aria-labelledby="intelligence-heading" className={styles.section}>
    <div className={`${styles.inner} ${styles.centered}`}><p className={styles.eyebrow}>Vascurra Intelligence</p><h2 id="intelligence-heading" className={styles.heading}>From information to <span className={styles.gradient}>understanding.</span></h2><p className={styles.lead}>A governed reasoning layer designed to connect context over time.</p><p className={`${styles.body} ${styles.centerCopy}`}>Vascurra Intelligence is the proposed interpretation layer beneath the experience — connecting observations, measurements, behaviours, events, clinical context and evidence while preserving where information came from and where uncertainty remains.</p><ArtworkPlaceholder variant="landscape" description="Evolved Vascurra brain / intelligence network derived from Hero icon" /><ul className={styles.principles}>{principles.map(item => <li key={item}>{item}</li>)}</ul><p className={styles.closing}>The aim is not to replace judgement. It is to make meaningful context easier to see.</p></div>
  </section>;
}
