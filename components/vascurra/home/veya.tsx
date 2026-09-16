import { homepageV2 } from "@/content/homepage-v2";
import { ArtworkReservation } from "./artwork-reservation";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

export function Veya() {
  return (
    <section id="veya" aria-labelledby="veya-heading" className={`${styles.section} ${styles.layersChapter}`}>
      <div className={styles.inner}>
        <div className={styles.layersIntro}><p className={styles.eyebrow}>Veya</p><h2 id="veya-heading" className={styles.heading}><span>Complexity,</span><VascurraGradientText>made more understandable.</VascurraGradientText></h2><p className={styles.lead}>Your way through Vascurra.</p></div>
        <div className={styles.layersComposition}>
          <article className={styles.layerVeya}><p className={styles.layerLabel}>Human-facing conversation</p><h3>Make context useful.</h3><p>Veya may help someone understand information, capture questions, preserve useful context, prepare for conversations, remember important things, navigate Vascurra and surface changes or new questions worth discussing.</p><p className={styles.safety}>Veya is not a doctor, clinician, diagnosis or treatment system, emergency service or medication adviser.</p></article>
          <ArtworkReservation assetKey="homepage-veya-intelligence-conversation-context" chapter="Veya" variant="layers" brief="A signature layered composition: an open, human-facing conversational flow above resolves into a precise evidence, source, context and interpretation structure below. Fine cyan–teal–green lines with crisp vertical or diagonal movement; no avatar, woman-shaped AI, doctor, orb, brain, robot or chat bubble." />
          <article className={styles.layerIntelligence}><p className={styles.layerLabel}>Behind Veya</p><h3>Context → evidence → interpretation → human review.</h3><p>Vascurra can organise context, preserve provenance, surface uncertainty and support human review. People remain responsible for important decisions.</p><ul>{homepageV2.intelligence.principles.map(([name]) => <li key={name}>{name}</li>)}</ul></article>
        </div>
      </div>
    </section>
  );
}
