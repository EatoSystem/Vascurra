import { VascurraGradientText } from "./gradient-text";
import { SectionIcon } from "./section-icon";
import styles from "./homepage-scaffold.module.css";

const journey = [
  ["Ask / capture", "Questions, observations and useful context."],
  ["Understand", "Make complex information easier to understand."],
  ["Prepare", "Help prepare for conversations, appointments and next questions."],
  ["Learn", "Carry relevant context forward and help identify what may be worth exploring next."],
] as const;
const journeyIcons = ["conversation", "context", "prepare", "book"] as const;

export function Veya() {
  return (
    <section id="veya" aria-labelledby="veya-heading" className={`${styles.section} ${styles.layersChapter}`}>
      <div className={styles.inner}>
        <div className={styles.veyaComposition}>
          <div><div className={styles.layersIntro}><p className={styles.eyebrow}>Veya</p><h2 id="veya-heading" className={styles.heading}><span>Complexity,</span><VascurraGradientText>made more understandable.</VascurraGradientText></h2><p className={styles.lead}>Your way through Vascurra.</p></div><div className={styles.veyaJourney}><ol>{journey.map(([name, body], index) => <li key={name}><span className={styles.sectionIcon}><SectionIcon name={journeyIcons[index]!} /></span><h3>{name}</h3><p>{body}</p></li>)}</ol></div></div>
          <div className={styles.veyaSignal} aria-label="Conversation becomes context, understanding and a better question"><span>Conversation</span><span>Context</span><span>Understanding</span><span>Better question</span></div>
        </div>
        <p className={styles.safety}>Veya is not a doctor, diagnosis, emergency service or autonomous medical decision-maker.</p>
        <div className={styles.veyaFoundation}><p className={styles.layerLabel}>Behind Veya, Vascurra can</p><ul><li>Organise context</li><li>Preserve provenance</li><li>Surface uncertainty</li><li>Connect relevant evidence</li><li>Support human review</li></ul><p>People remain responsible for important decisions.</p></div>
      </div>
    </section>
  );
}
