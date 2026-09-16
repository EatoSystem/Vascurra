import Image from "next/image";
import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

export function Lab() {
  return <section id="lab" aria-labelledby="lab-heading" className={`${styles.section} ${styles.deep}`}>
    <div className={styles.inner}><div className={styles.immersiveCopy}><p className={styles.eyebrow}>Vascurra Lab</p><h2 id="lab-heading" className={styles.heading}><span>Where lived experience meets</span><VascurraGradientText luminous>research.</VascurraGradientText></h2><p className={styles.lead}>Research and learning around longer-term questions.</p><p className={styles.body}>{homepageV2.lab.body}</p><p className={styles.body}>{homepageV2.lab.governance}</p></div><figure className={styles.labArtworkStage}><Image src="/vascurra/homepage/candidates/convergence_of_life_and_science.webp" alt="Two flowing streams of lived experience and research converge while retaining their distinct forms." width={1672} height={941} sizes="100vw" className={styles.labArtworkImage} /><figcaption className={styles.loop}>Real life <span>→</span> Questions <span>→</span> Evidence <span>→</span> AI-assisted research <span>→</span> Human review <span>→</span> New understanding</figcaption></figure><p className={styles.careful}>Vascurra Lab is a development concept. No research finding, clinical trial, partnership or regulatory status is implied.</p></div>
  </section>;
}
