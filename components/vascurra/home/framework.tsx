import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import { SectionIcon } from "./section-icon";
import { V4ArtworkSlot, v4Artwork } from "./v4-artwork-slot";
import styles from "./homepage-scaffold.module.css";

const perspectives = [
  ["Personal", "My context. My questions.", "Daily life, routines, priorities, questions, context and independence.", "person"],
  ["Family", "Shared understanding.", "Shared understanding, practical support, preparation and permitted access.", "family"],
  ["Clinician", "Relevant context.", "Relevant longitudinal context and better-prepared conversations.", "clinical"],
  ["Research", "Lived questions.", "Lived questions, evidence, learning and responsible investigation.", "research"],
] as const;
const stages = [
  ["Observe", "Capture meaningful questions, observations and context."],
  ["Understand", "Connect information with source, time, context and uncertainty."],
  ["Support", "Make understanding useful for preparation and better questions."],
  ["Learn", "Use what happens next to improve understanding and the system."],
] as const;
export function Framework() {
  return (
    <section id="framework" aria-labelledby="framework-heading" className={`${styles.section} ${styles.systemV3}`}>
      <div className={styles.inner}>
        <div className={styles.systemV3Top}><div><p className={styles.eyebrow}>The Vascurra system</p><h2 id="framework-heading" className={styles.systemV3Heading}><span>Observe. Understand.</span><VascurraGradientText>Support. Learn.</VascurraGradientText></h2></div><div className={styles.systemV3Proposition}><h3>One system.<br /><VascurraGradientText>Multiple perspectives.</VascurraGradientText></h3><p>{homepageV2.framework.qualifier}</p></div></div>
        <div className={styles.systemV4Artwork}><V4ArtworkSlot sizes="(max-width: 639px) 116vw, (max-width: 1199px) 96vw, 72vw" slot="vascurra-system" source={v4Artwork.system} /></div>
        <div className={styles.systemV3Perspectives}>{perspectives.map(([name, , body, icon]) => <article key={name}><span className={styles.v3Icon}><SectionIcon name={icon} /></span><div><h3>{name}</h3><p>{body}</p></div></article>)}</div>
        <ol className={styles.systemV3Strip}>{stages.map(([name, body], index) => <li key={name}><span>{index + 1}</span><div><h3>{name}</h3><p>{body}</p></div></li>)}</ol>
        <p className={styles.systemV3Boundary}>The same underlying context can support different people in different ways. <span>Role · Permission · Purpose · Control</span> Family and research access are never automatic, and clinician context does not mean autonomous clinical decision-making.</p>
      </div>
    </section>
  );
}
