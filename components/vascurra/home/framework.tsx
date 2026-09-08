import Image from "next/image";
import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

const stages = [
  ["Observe", "Notice what matters.", "Chosen observations, measurements, routines and meaningful events can contribute to a richer picture of daily life."],
  ["Understand", "Connect the context.", "Vascurra is designed to bring relevant information together over time while preserving where it came from and where uncertainty remains."],
  ["Support", "Make understanding useful.", "Help people navigate what matters, prepare better questions and decide what deserves attention."],
  ["Learn", "Learn from what happens next.", "New observations and evidence can refine the picture over time."],
] as const;

export function Framework() {
  return <section id="framework" aria-labelledby="framework-heading" className={styles.section}>
    <div className={`${styles.inner} ${styles.centered}`}>
      <p className={styles.eyebrow}>The framework</p>
      <h2 id="framework-heading" className={styles.heading}><span>Observe. Understand.</span><VascurraGradientText>Support. Learn.</VascurraGradientText></h2>
      <p className={styles.lead}>A continuous learning loop built around real life.</p>
      <p className={styles.qualifier}>{homepageV2.framework.qualifier}</p>
      <figure className={styles.frameworkArtwork} aria-hidden="true">
        <Image
          src="/vascurra/v2/section-05-framework-loop.png"
          alt=""
          width={1672}
          height={941}
          sizes="(min-width: 1536px) 1472px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
          className={styles.frameworkArtworkImage}
        />
      </figure>
      <ol className={`${styles.fourAnchors} ${styles.frameworkStages}`}>{stages.map(([name, title, body]) => <li key={name}><h3><span>{name}</span> — {title}</h3><p>{body}</p></li>)}</ol>
      <p className={`${styles.closing} ${styles.frameworkClosing}`}><span>Not a score. Not a snapshot.</span><span>A living picture over time.</span></p>
    </div>
  </section>;
}
