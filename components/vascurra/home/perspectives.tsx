import { ArtworkPlaceholder } from "./artwork-placeholder";
import styles from "./homepage-scaffold.module.css";

const views = [
  ["Personal", "Understand my day, my context and what matters to me."],
  ["Family", "Stay connected to the information I choose to share."],
  ["Clinician", "See meaningful context that can help prepare better conversations and review."],
  ["Research", "Learn from appropriately governed, permissioned and de-identified patterns where future research use is approved."],
] as const;

export function Perspectives() {
  return <section id="perspectives" aria-labelledby="perspectives-heading" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.split}>
        <div><p className={styles.eyebrow}>Multiple perspectives</p><h2 id="perspectives-heading" className={styles.heading}><span>One system.</span><span className={styles.gradient}>Multiple perspectives.</span></h2><p className={styles.lead}>The same underlying context can support different people in different ways.</p><p className={styles.body}>Vascurra is being designed so information can be organised around the person while remaining appropriate to each role, permission and purpose.</p></div>
        <ArtworkPlaceholder variant="landscape" description="One person connected to Personal, Family, Clinician and Research perspectives" />
      </div>
      <ul className={styles.fourAnchors}>{views.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ul>
      <p className={`${styles.closing} ${styles.centered}`}>One person at the centre. Different views around them.</p>
    </div>
  </section>;
}
