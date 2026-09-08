import { ArtworkPlaceholder } from "./artwork-placeholder";
import styles from "./homepage-scaffold.module.css";

const principles = ["Consent and control.", "Purpose-limited access.", "Data minimisation.", "Provenance and uncertainty.", "Human review where it matters.", "Responsible claims."];

export function Responsible() {
  return <section id="responsible" aria-labelledby="responsible-heading" className={styles.section}><div className={`${styles.inner} ${styles.split}`}><div><p className={styles.eyebrow}>Responsible by design</p><h2 id="responsible-heading" className={styles.heading}>Trust is part of the <span className={styles.gradient}>architecture.</span></h2><p className={styles.lead}>The person should remain in control of who sees what.</p><p className={styles.body}>Vascurra is being developed around explicit permissions, careful use of information, visible provenance and clear uncertainty. Sensitive health context should never become a hidden assumption or an automatic family permission.</p><ul className={`${styles.simpleList} ${styles.twoColumnList}`}>{principles.map(item => <li key={item}>{item}</li>)}</ul><p className={styles.closing}>Useful intelligence should never require surrendering dignity or agency.</p></div><ArtworkPlaceholder variant="portrait" description="Quiet human-centred permission / agency visual in Vascurra ribbon language" /></div></section>;
}
