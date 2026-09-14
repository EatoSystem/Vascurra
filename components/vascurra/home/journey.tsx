import { ArtworkPlaceholder } from "./artwork-placeholder";
import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

export function Journey() {
  return <section id="journey" aria-labelledby="journey-heading" className={styles.section}><div className={`${styles.inner} ${styles.centered}`}><p className={styles.eyebrow}>Our journey</p><h2 id="journey-heading" className={styles.heading}><span>Start with one person.</span><VascurraGradientText>Learn deeply. Build for many.</VascurraGradientText></h2><p className={`${styles.lead} ${styles.centerCopy}`}>Vascurra begins with deep co-design and lived experience, with the long-term ambition of building knowledge and tools capable of helping many more people.</p><ArtworkPlaceholder variant="wide" description="One organic Vascurra ribbon evolving from one person to many" /><p className={styles.progression}>{homepageV2.journey.progression.map((step, index) => <span key={step}>{index > 0 ? <b aria-hidden="true">→</b> : null}{step}</span>)}</p></div></section>;
}
