import { VascurraGradientText } from "./gradient-text";
import { SectionIcon } from "./section-icon";
import { V4ArtworkSlot } from "./v4-artwork-slot";
import styles from "./homepage-scaffold.module.css";

const capabilities = [
  ["Ask / capture", "Questions, observations and useful context.", "conversation"],
  ["Understand", "Make complex information easier to understand while keeping uncertainty visible.", "context"],
  ["Prepare", "Help prepare for conversations, appointments and next questions.", "prepare"],
  ["Learn", "Carry relevant context forward and identify what may be worth exploring next.", "book"],
] as const;
export function Veya() {
  return (
    <section id="veya" aria-labelledby="veya-heading" className={`${styles.section} ${styles.veyaV3}`}>
      <div className={`${styles.inner} ${styles.veyaV3Grid}`}>
        <div className={styles.veyaV3Copy}><p className={styles.eyebrow}>Veya</p><h2 id="veya-heading" className={styles.veyaV3Heading}><span>Complexity,</span><VascurraGradientText>made more understandable.</VascurraGradientText></h2><p className={styles.veyaV3Lead}>Your way through Vascurra.</p><ol className={styles.veyaV3Capabilities}>{capabilities.map(([name, body, icon]) => <li key={name}><span className={styles.v3Icon}><SectionIcon name={icon} /></span><div><h3>{name}</h3><p>{body}</p></div></li>)}</ol></div>
        <div className={styles.veyaV4Artwork}><V4ArtworkSlot description="Questions, observations and chosen context move through Veya to clearer context, relevant evidence, practical questions and greater understanding. Veya organises, connects and clarifies." label="Veya flow" slot="veya-flow" /></div>
      </div>
      <div className={`${styles.inner} ${styles.veyaV3Footer}`}><p><strong>Behind Veya, Vascurra can</strong> organise context, preserve provenance, surface uncertainty, connect relevant evidence and support human review.</p><small>Veya is not a doctor, diagnosis, emergency service or autonomous medical decision-maker. People remain responsible for important decisions.</small></div>
    </section>
  );
}
