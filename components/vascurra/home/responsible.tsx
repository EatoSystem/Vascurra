import { ArtworkPlaceholder } from "./artwork-placeholder";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

const principles = [["Consent", "Chosen participation."], ["Permissions", "Appropriate access for appropriate people."], ["Provenance", "Keep track of where information came from."], ["Uncertainty", "Do not disguise what remains unknown."]] as const;

export function Responsible() {
  return <section id="responsible" aria-labelledby="responsible-heading" className={styles.section}><div className={`${styles.inner} ${styles.split}`}><div><p className={styles.eyebrow}>Responsible by design</p><h2 id="responsible-heading" className={styles.heading}><span>Trust is part of the</span><VascurraGradientText>architecture.</VascurraGradientText></h2><p className={styles.lead}>Vascurra is intended to be developed around consent, careful permissions, provenance, uncertainty and responsible use of AI.</p><ul className={`${styles.principles} ${styles.twoColumnList}`}>{principles.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ul><p className={styles.closing}>The person remains in control of who sees what.</p></div><ArtworkPlaceholder variant="portrait" description="Human-centred permission and agency in the Vascurra ribbon language" /></div></section>;
}
