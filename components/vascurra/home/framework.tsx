import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import { SectionIcon } from "./section-icon";
import { SystemOrbitGraphic } from "./v3-graphics";
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
          <div className={styles.systemV3Orbit}><SystemOrbitGraphic /><div className={styles.systemV3Core}><span>Person</span><strong>Vascurra</strong><small>Role · Permission<br />Purpose · Control</small></div>{perspectives.map(([name, subline, , icon]) => <div key={name} className={`${styles.systemV3Node} ${styles[`systemV3Node${name}`]}`}><span className={styles.v3Icon}><SectionIcon name={icon} /></span><strong>{name}</strong><small>{subline}</small></div>)}<span className={`${styles.systemV3CycleLabel} ${styles.systemV3CycleObserve}`}>Observe</span><span className={`${styles.systemV3CycleLabel} ${styles.systemV3CycleUnderstand}`}>Understand</span><span className={`${styles.systemV3CycleLabel} ${styles.systemV3CycleSupport}`}>Support</span><span className={`${styles.systemV3CycleLabel} ${styles.systemV3CycleLearn}`}>Learn</span></div>
          <div className={styles.systemV3Side}>{rightPerspectives.map(([name, , body, icon]) => <article key={name}><span className={styles.v3Icon}><SectionIcon name={icon} /></span><div><h3>{name}</h3><p>{body}</p></div></article>)}</div>
        </div>
        <ol className={styles.systemV3Strip}>{stages.map(([name, body], index) => <li key={name}><span>{index + 1}</span><div><h3>{name}</h3><p>{body}</p></div></li>)}</ol>
        <p className={styles.systemV3Boundary}>The same underlying context can support different people in different ways. Family and research access are never automatic, and clinician context does not mean autonomous clinical decision-making.</p>
      </div>
    </section>
  );
}
