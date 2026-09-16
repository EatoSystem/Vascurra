import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

const journey = [
  ["Ask / capture", "Questions, observations and useful context."],
  ["Understand", "Make complex information easier to understand."],
  ["Prepare", "Help prepare for conversations, appointments and next questions."],
  ["Learn", "Carry relevant context forward and help identify what may be worth exploring next."],
] as const;

export function Veya() {
  return (
    <section id="veya" aria-labelledby="veya-heading" className={`${styles.section} ${styles.layersChapter}`}>
      <div className={styles.inner}>
        <div className={styles.layersIntro}><p className={styles.eyebrow}>Veya</p><h2 id="veya-heading" className={styles.heading}><span>Complexity,</span><VascurraGradientText>made more understandable.</VascurraGradientText></h2><p className={styles.lead}>Your way through Vascurra.</p></div>
        <div className={styles.veyaJourney}><ol>{journey.map(([name, body], index) => <li key={name}><span aria-hidden="true">0{index + 1}</span><h3>{name}</h3><p>{body}</p></li>)}</ol></div>
        <p className={styles.safety}>Veya is not a doctor, diagnosis, emergency service or autonomous medical decision-maker.</p>
        <div className={styles.veyaFoundation}><p className={styles.layerLabel}>Behind Veya, Vascurra can</p><ul><li>Organise context</li><li>Preserve provenance</li><li>Surface uncertainty</li><li>Connect relevant evidence</li><li>Support human review</li></ul><p>People remain responsible for important decisions.</p></div>
      </div>
    </section>
  );
}
