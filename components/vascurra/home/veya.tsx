import { homepageV2 } from "@/content/homepage-v2";
import { ArtworkReservation } from "./artwork-reservation";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

export function Veya() {
  return (
    <section id="veya" aria-labelledby="veya-heading" className={`${styles.section} ${styles.layersChapter}`}>
      <div className={styles.inner}>
        <div className={styles.layersIntro}><p className={styles.eyebrow}>Veya + Vascurra Intelligence</p><h2 id="veya-heading" className={styles.heading}><span>Complexity,</span><VascurraGradientText>made more understandable.</VascurraGradientText></h2></div>
        <div className={styles.layersComposition}>
          <article className={styles.layerVeya}><p className={styles.layerLabel}>Veya</p><h3>Your way through Vascurra.</h3><p>{homepageV2.veya.body}</p><p className={styles.safety}>Veya is not a doctor, diagnostic service or emergency service.</p></article>
          <ArtworkReservation assetKey="homepage-veya-intelligence-conversation-context" chapter="Veya + Intelligence" variant="layers" brief="A signature layered composition: an open, human-facing conversational flow above resolves into a precise evidence, source, context and interpretation structure below. Fine cyan–teal–green lines with crisp vertical or diagonal movement; no avatar, woman-shaped AI, doctor, orb, brain, robot or chat bubble." />
          <article className={styles.layerIntelligence}><p className={styles.layerLabel}>Vascurra Intelligence</p><h3>From information to understanding.</h3><p>The proposed governed interpretation layer beneath Veya—connecting context over time while keeping source and uncertainty visible.</p><ul>{homepageV2.intelligence.principles.map(([name]) => <li key={name}>{name}</li>)}</ul></article>
        </div>
      </div>
    </section>
  );
}
