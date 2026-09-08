import { ArtworkPlaceholder } from "./artwork-placeholder";
import styles from "./homepage-scaffold.module.css";

const stages = [
  ["Observe", "Notice what matters.", "Chosen observations, measurements, routines and meaningful events create a richer picture of daily life."],
  ["Understand", "Connect the context.", "Vascurra brings information together over time, preserving where it came from and where uncertainty remains."],
  ["Support", "Turn understanding into useful action.", "Help the person, family and clinicians navigate what matters, prepare questions and decide what deserves attention."],
  ["Learn", "Learn from what happens next.", "New observations and evidence feed back into the system so the picture can become more useful over time."],
] as const;

export function Framework() {
  return <section id="framework" aria-labelledby="framework-heading" className={styles.section}>
    <div className={`${styles.inner} ${styles.centered}`}>
      <p className={styles.eyebrow}>The framework</p>
      <h2 id="framework-heading" className={styles.heading}><span>Observe. Understand.</span><span className={styles.gradient}>Support. Learn.</span></h2>
      <p className={styles.lead}>A continuous learning loop built around real life.</p>
      <div className={styles.intro}><p>Vascurra is designed to bring meaningful observations, measurements, events and context together over time — helping people see patterns, prepare better questions and make sense of change without reducing a person to a single score.</p><p>What happens next becomes part of what the system learns.</p></div>
      <ArtworkPlaceholder variant="wide" description="Continuous Observe → Understand → Support → Learn Vascurra ribbon loop" />
      <ol className={styles.fourAnchors}>{stages.map(([name, title, body]) => <li key={name}><h3><span>{name}</span> — {title}</h3><p>{body}</p></li>)}</ol>
      <p className={styles.closing}>Not a score. Not a snapshot. A living picture over time.</p>
    </div>
  </section>;
}
