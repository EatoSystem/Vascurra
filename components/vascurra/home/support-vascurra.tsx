import { CtaLink } from "@/components/ui/CtaLink";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

const supportAreas = [
  ["AI + Compute", "Advanced AI access, model evaluation, experimentation, compute capacity and responsible research infrastructure."],
  ["Research", "Evidence review, stronger research questions, literature exploration and expert collaboration."],
  ["Systems Development", "Veya, longitudinal context, permission-aware experiences, privacy and research infrastructure."],
  ["Patient 0 / Co-design", "The daily programme with Dad: build, use, observe, discuss, learn and improve."],
] as const;

export function SupportVascurra() {
  return (
    <section id="support" aria-labelledby="support-heading" className={`${styles.section} ${styles.supportChapter}`}>
      <div className={styles.inner}>
        <div className={styles.supportIntro}>
          <div><p className={styles.eyebrow}>Support Vascurra</p><h2 id="support-heading" className={styles.heading}><span>Help fund</span><VascurraGradientText>the next question.</VascurraGradientText></h2></div>
          <div><p className={styles.lead}>Support can accelerate the careful work behind better tools, better questions and responsible learning.</p><p>It does not buy a clinical result or imply investment returns. It helps create the time, systems and research capacity needed to develop Vascurra well.</p></div>
        </div>
        <div className={styles.supportFlow} aria-label="What support enables">
          <p>Support</p>
          <ol>{supportAreas.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ol>
          <p>Veya · Vascurra System · Vascurra Lab</p>
          <p>New questions · New learning · Better tools</p>
        </div>
        <div className={styles.supportActions}><CtaLink href="/support" className={styles.cta}>Support Vascurra</CtaLink><CtaLink href="/contact" variant="secondary" className={styles.cta}>Collaborate with Vascurra</CtaLink></div>
      </div>
    </section>
  );
}
