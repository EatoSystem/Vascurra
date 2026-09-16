import { ArtworkReservation } from "./artwork-reservation";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

const functions = [
  ["Understand", "Make complex information easier to understand."],
  ["Capture", "Keep useful questions, observations and context."],
  ["Prepare", "Prepare for conversations and appointments."],
  ["Remember", "Keep track of important context."],
  ["Navigate", "Move through Vascurra with greater clarity."],
  ["Question", "Surface new questions worth exploring."],
] as const;

export function Veya() {
  return (
    <section id="veya" aria-labelledby="veya-heading" className={`${styles.section} ${styles.layersChapter}`}>
      <div className={styles.inner}>
        <div className={styles.layersIntro}><p className={styles.eyebrow}>Veya</p><h2 id="veya-heading" className={styles.heading}><span>Complexity,</span><VascurraGradientText>made more understandable.</VascurraGradientText></h2><p className={styles.lead}>Your way through Vascurra.</p></div>
        <div className={styles.veyaComposition}>
          <div className={styles.veyaFunctions}><ul>{functions.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ul><p className={styles.safety}>Veya is not a doctor, diagnosis or treatment system, emergency service or medication adviser.</p></div>
          <ArtworkReservation assetKey="homepage-veya-signature" chapter="Veya" variant="layers" brief="A signature structured transformation from conversation to context, understanding, questions and learning. Fine cyan, teal and green traces; precise, calm and potentially animatable, with generous white space. No AI woman, avatar, orb, brain, chatbot icon, robot or generic neural network." />
        </div>
        <div className={styles.veyaFoundation}><p className={styles.layerLabel}>Behind Veya, Vascurra can</p><ul><li>Organise context</li><li>Preserve provenance</li><li>Surface uncertainty</li><li>Connect relevant evidence</li><li>Support human review</li></ul><p>People remain responsible for important decisions.</p></div>
      </div>
    </section>
  );
}
