import { ArtworkPlaceholder } from "./artwork-placeholder";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

const points = ["Understand what changed.", "Prepare what matters.", "Stay connected to context."];

export function Veya() {
  return <section id="veya" aria-labelledby="veya-heading" className={styles.section}>
    <div className={`${styles.inner} ${styles.split}`}>
      <div><p className={styles.eyebrow}>Veya</p><h2 id="veya-heading" className={styles.heading}><span>Complexity,</span><VascurraGradientText>made more understandable.</VascurraGradientText></h2><p className={styles.lead}>A calm conversational layer for navigating everyday context.</p><p className={styles.body}>Veya is the planned conversational layer of Vascurra — designed to help people navigate information, capture chosen context and prepare better questions.</p><ul className={styles.simpleList}>{points.map(point => <li key={point}>{point}</li>)}</ul><p className={styles.safety}>Veya is not a doctor, diagnostic service or emergency service.</p></div>
      <ArtworkPlaceholder variant="portrait" description="Simple luminous Veya form emerging from the Vascurra ribbon" />
    </div>
  </section>;
}
