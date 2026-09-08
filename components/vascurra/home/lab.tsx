import { ArtworkPlaceholder } from "./artwork-placeholder";
import styles from "./homepage-scaffold.module.css";

export function Lab() {
  return <section id="lab" aria-labelledby="lab-heading" className={`${styles.section} ${styles.deep}`}>
    <div className={styles.inner}><div className={styles.immersiveCopy}><p className={styles.eyebrow}>Vascurra Lab</p><h2 id="lab-heading" className={styles.heading}>Where lived experience meets <span className={styles.luminous}>research.</span></h2><p className={styles.lead}>A future learning environment connecting questions from real life with evidence and research.</p><p className={styles.body}>Vascurra Lab is the proposed research-learning layer of the project. The ambition is for questions emerging from lived experience to inform structured research, while new evidence can improve what the system is able to understand and explain.</p></div><ArtworkPlaceholder variant="immersive" description="Immersive lived-experience-to-research Vascurra Lab environment"><p className={styles.loop}>Real life → Questions → Evidence → Analysis → Human review → New learning</p></ArtworkPlaceholder><p className={styles.careful}>Vascurra Lab is a development concept. No research partnership, clinical outcome or regulatory status should be implied unless independently established.</p></div>
  </section>;
}
