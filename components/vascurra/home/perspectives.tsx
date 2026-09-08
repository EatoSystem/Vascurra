import { ArtworkPlaceholder } from "./artwork-placeholder";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

const views = [
  ["Personal", "My life and context."],
  ["Family", "Closer, with permission."],
  ["Clinician", "Better organised context."],
  ["Research", "Learning at scale."],
] as const;

export function Perspectives() {
  return <section id="perspectives" aria-labelledby="perspectives-heading" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.split}>
        <div><p className={styles.eyebrow}>Multiple perspectives</p><h2 id="perspectives-heading" className={styles.heading}><span>One system.</span><VascurraGradientText>Multiple perspectives.</VascurraGradientText></h2><p className={styles.lead}>The same underlying context can support different people in different ways.</p><p className={styles.body}>Vascurra is being designed so information can be organised around the person while remaining appropriate to each role, permission and purpose. These are different permitted perspectives on one underlying system.</p></div>
        <ArtworkPlaceholder variant="portrait" description="One connected system serving Personal, Family, Clinician and Research perspectives" />
      </div>
      <ul className={styles.fourAnchors}>{views.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ul>
      <p className={`${styles.closing} ${styles.centered}`}>One person at the centre. Different permitted views around them.</p>
    </div>
  </section>;
}
