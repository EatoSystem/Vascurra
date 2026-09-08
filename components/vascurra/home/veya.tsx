import { ArtworkPlaceholder } from "./artwork-placeholder";
import styles from "./homepage-scaffold.module.css";

const points = ["Explain information in plain language.", "Capture chosen context without adding friction.", "Prepare questions for family or clinical conversations.", "Surface changes that may deserve review."];

export function Veya() {
  return <section id="veya" aria-labelledby="veya-heading" className={styles.section}>
    <div className={`${styles.inner} ${styles.split}`}>
      <div><p className={styles.eyebrow}>Veya</p><h2 id="veya-heading" className={styles.heading}>Complexity, made more understandable.</h2><p className={styles.lead}>A calm conversational layer for navigating everyday context.</p><p className={styles.body}>Veya is the planned conversational layer of Vascurra. It is being designed to help people understand information, capture context they choose to record, prepare questions and surface meaningful changes over time.</p><ul className={styles.simpleList}>{points.map(point => <li key={point}>{point}</li>)}</ul><p className={styles.safety}>Veya is not a doctor, diagnostic system, emergency service or substitute for clinical care.</p></div>
      <ArtworkPlaceholder variant="portrait" description="Simple luminous Veya form emerging from the Vascurra ribbon" />
    </div>
  </section>;
}
