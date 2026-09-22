import Image from "next/image";
import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

export function Intelligence() {
  return <section id="intelligence" aria-labelledby="intelligence-heading" className={styles.section}>
    <div className={`${styles.inner} ${styles.centered}`}><p className={styles.eyebrow}>Vascurra Intelligence</p><h2 id="intelligence-heading" className={styles.heading}><span>From information to</span><VascurraGradientText>understanding.</VascurraGradientText></h2><p className={styles.lead}>The governed interpretation and reasoning layer beneath Veya.</p><div className={`${styles.body} ${styles.centerCopy}`}><p>Vascurra Intelligence is the proposed layer that brings observations, measurements, behaviours, events, clinical context and evidence together over time.</p><p>It should preserve where information came from, distinguish evidence from interpretation and make uncertainty visible.</p></div><figure className={styles.intelligenceArtwork}><Image src="/vascurra/homepage/candidates/glassy_ai_knowledge_core_in_flow.webp" alt="Information streams pass through a transparent knowledge core and emerge as connected, governed context." width={1672} height={941} sizes="(min-width: 1536px) 1472px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)" className={styles.intelligenceArtworkImage} /></figure><ul className={`${styles.principles} ${styles.fourAnchors}`}>{homepageV2.intelligence.principles.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ul></div>
  </section>;
}
