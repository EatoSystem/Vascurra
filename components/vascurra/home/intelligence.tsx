import Image from "next/image";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

const principles = [
  ["Context", "Information becomes more meaningful when understood over time."],
  ["Provenance", "Where information came from remains visible."],
  ["Uncertainty", "What is known and what remains uncertain stay distinct."],
] as const;

export function Intelligence() {
  return <section id="intelligence" aria-labelledby="intelligence-heading" className={styles.section}>
    <div className={`${styles.inner} ${styles.centered}`}><p className={styles.eyebrow}>Vascurra Intelligence</p><h2 id="intelligence-heading" className={styles.heading}><span>From information to</span><VascurraGradientText>understanding.</VascurraGradientText></h2><p className={styles.lead}>A governed reasoning and interpretation layer beneath Veya.</p><div className={`${styles.body} ${styles.centerCopy}`}><p>Vascurra Intelligence is the proposed layer that brings observations, measurements, behaviours, events, clinical context and evidence together over time.</p><p>It should preserve where information came from, distinguish evidence from interpretation and make uncertainty visible.</p></div><figure className={styles.intelligenceArtwork} aria-hidden="true"><Image src="/vascurra/v2/section-08-intelligence.png" alt="" width={1448} height={1086} sizes="(min-width: 1536px) 1472px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)" className={styles.intelligenceArtworkImage} /></figure><ul className={`${styles.principles} ${styles.threeAnchors}`}>{principles.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ul></div>
  </section>;
}
