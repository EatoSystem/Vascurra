import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import { SectionIcon } from "./section-icon";
import { V4ArtworkSlot } from "./v4-artwork-slot";
import styles from "./homepage-scaffold.module.css";

const perspectives = [
  ["Personal", "My context. My questions.", "Daily life, routines, priorities, preparation and independence.", "person"],
  ["Family", "Shared understanding.", "Practical support and preparation—with permitted access.", "family"],
  ["Clinician", "Relevant context.", "Longitudinal context and better-prepared conversations.", "clinical"],
  ["Research", "Lived questions.", "Evidence, learning and responsible investigation.", "research"],
] as const;
const stages = [
  ["Observe", "Capture meaningful questions, observations and context."],
  ["Understand", "Connect information with source, time, context and uncertainty."],
  ["Support", "Make understanding useful for preparation and better questions."],
  ["Learn", "Use what happens next to improve understanding and the system."],
] as const;
const leftPerspectives = [perspectives[0], perspectives[3]] as const;
const rightPerspectives = [perspectives[1], perspectives[2]] as const;

export function Framework() {
  return (
    <section id="framework" aria-labelledby="framework-heading" className={`${styles.section} ${styles.systemV3}`}>
      <div className={styles.inner}>
        <div className={styles.systemV3Top}><div><p className={styles.eyebrow}>The Vascurra system</p><h2 id="framework-heading" className={styles.systemV3Heading}><span>Observe. Understand.</span><VascurraGradientText>Support. Learn.</VascurraGradientText></h2></div><div className={styles.systemV3Proposition}><h3>One system.<br /><VascurraGradientText>Multiple perspectives.</VascurraGradientText></h3><p>{homepageV2.framework.qualifier}</p></div></div>
        <div className={styles.systemV3Body}>
          <div className={styles.systemV3Side}>{leftPerspectives.map(([name, , body, icon]) => <article key={name}><span className={styles.v3Icon}><SectionIcon name={icon} /></span><div><h3>{name}</h3><p>{body}</p></div></article>)}</div>
          <div className={styles.systemV4Artwork}><V4ArtworkSlot description="A person-centred Vascurra system connecting Personal, Family, Clinician and Research perspectives through Observe, Understand, Support and Learn, with role, permission, purpose and control." label="The Vascurra System" ratio="square" slot="vascurra-system" /></div>
          <div className={styles.systemV3Side}>{rightPerspectives.map(([name, , body, icon]) => <article key={name}><span className={styles.v3Icon}><SectionIcon name={icon} /></span><div><h3>{name}</h3><p>{body}</p></div></article>)}</div>
        </div>
        <ol className={styles.systemV3Strip}>{stages.map(([name, body], index) => <li key={name}><span>{index + 1}</span><div><h3>{name}</h3><p>{body}</p></div></li>)}</ol>
        <p className={styles.systemV3Boundary}>The same underlying context can support different people in different ways. Family and research access are never automatic, and clinician context does not mean autonomous clinical decision-making.</p>
      </div>
    </section>
  );
}
