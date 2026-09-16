import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import { SectionIcon } from "./section-icon";
import styles from "./homepage-scaffold.module.css";

const stages = [
  ["Observe", "Capture meaningful questions, observations and context."],
  ["Understand", "Connect information with source, time, context and uncertainty."],
  ["Support", "Make understanding useful for preparation, explanation and better questions."],
  ["Learn", "Use what happens next to improve understanding and the system."],
] as const;
const perspectives = [
  ["Personal", "Daily life, routines, priorities, questions, preparation and independence."],
  ["Family", "Shared understanding, practical support, preparation and permitted access."],
  ["Clinician", "Relevant longitudinal context and better-prepared conversations."],
  ["Research", "Lived questions, evidence, learning and responsible investigation."],
] as const;
const perspectiveIcons = ["person", "family", "clinical", "research"] as const;

export function Framework() {
  return (
    <section id="framework" aria-labelledby="framework-heading" className={`${styles.section} ${styles.systemChapter}`}>
      <div className={styles.inner}>
        <div className={styles.systemHeadingRow}>
          <div><p className={styles.eyebrow}>The Vascurra system</p><h2 id="framework-heading" className={styles.heading}><span>Observe. Understand.</span><VascurraGradientText>Support. Learn.</VascurraGradientText></h2></div>
          <div className={styles.systemProposition}><p>One system.</p><p>Multiple perspectives.</p><small>{homepageV2.framework.qualifier}</small></div>
        </div>
        <div className={styles.systemArchitecture}>
          <div className={styles.systemMap}>
            <div className={styles.systemCore}><span className={styles.sectionIcon}><SectionIcon name="person" /></span><strong>Person / system</strong><small>Role · Permission · Purpose · Control</small></div>
            <ul aria-label="Vascurra perspectives">{perspectives.map(([name, body], index) => <li key={name}><span className={styles.sectionIcon}><SectionIcon name={perspectiveIcons[index]!} /></span><strong>{name}</strong><span>{body}</span></li>)}</ul>
          </div>
          <ol className={styles.systemCycle} aria-label="Vascurra learning cycle">{stages.map(([name, body], index) => <li key={name}><span aria-hidden="true">0{index + 1}</span><h3>{name}</h3><p>{body}</p></li>)}</ol>
        </div>
        <div className={styles.systemClosing}><p>The same underlying context can support different people in different ways.</p><small>Each view must remain appropriate to role, permission, purpose, consent and control. Family and research access are never automatic, and clinician context does not mean autonomous clinical decision-making.</small></div>
      </div>
    </section>
  );
}
