import { homepageV2 } from "@/content/homepage-v2";
import { ArtworkReservation } from "./artwork-reservation";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

const stages = [
  ["Observe", "Capture meaningful questions, observations and context."],
  ["Understand", "Connect information with source, time, context and uncertainty."],
  ["Support", "Turn understanding into useful preparation, explanation and next questions."],
  ["Learn", "Use what happens next to improve the system and identify better questions."],
] as const;
const perspectives = [
  ["Personal", "Daily life, questions, routines, priorities, preparation, context and independence."],
  ["Family", "Shared understanding, practical support and preparation—with permitted access, never automatic access."],
  ["Clinician", "Relevant context, longitudinal observations and better-prepared conversations—not autonomous clinical decisions."],
  ["Research", "Lived questions, evidence and responsible investigation under separate consent and governance."],
] as const;

export function Framework() {
  return (
    <section id="framework" aria-labelledby="framework-heading" className={`${styles.section} ${styles.systemChapter}`}>
      <div className={styles.inner}>
        <div className={styles.systemHeadingRow}>
          <div><p className={styles.eyebrow}>The Vascurra system</p><h2 id="framework-heading" className={styles.heading}><span>Observe. Understand.</span><VascurraGradientText>Support. Learn.</VascurraGradientText></h2></div>
          <div className={styles.systemProposition}><p>One system.</p><p>Multiple perspectives.</p><small>{homepageV2.framework.qualifier}</small></div>
        </div>
        <div className={styles.systemCanvas}>
          <ArtworkReservation assetKey="homepage-vascurra-system" chapter="Vascurra System" variant="system" brief="A premium architectural evolution of One system. Multiple perspectives: the person or Vascurra core at centre; Observe, Understand, Support and Learn as a connected inner cycle; Personal, Family, Clinician and Research as an outer system. Fine cyan–aqua–green linework, crisp hierarchy and strong white space; no glossy bubbles, cartoon icons or thick ribbons." />
          <ol className={styles.systemStages}>{stages.map(([name, body], index) => <li key={name}><span aria-hidden="true">0{index + 1}</span><h3>{name}</h3><p>{body}</p></li>)}</ol>
          <ul className={styles.perspectiveLine} aria-label="Vascurra perspectives">{perspectives.map(([name, body]) => <li key={name}><strong>{name}</strong><span>{body}</span></li>)}</ul>
        </div>
        <div className={styles.systemClosing}><p>The same underlying context can support different people in different ways.</p><small>Each view must remain appropriate to role, permission, purpose, consent and control. Family and research access are never automatic.</small></div>
      </div>
    </section>
  );
}
