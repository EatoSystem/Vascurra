import { CtaLink } from "@/components/ui/CtaLink";
import { VascurraGradientText } from "./gradient-text";
import { SectionIcon } from "./section-icon";
import styles from "./homepage-scaffold.module.css";

const supportAreas = [
  ["AI + Compute", "Advanced AI systems, model access, compute capacity, evaluation and AI research infrastructure."],
  ["Research", "Evidence review, literature exploration, research questions, expert collaboration and responsible investigation."],
  ["Systems Development", "Veya, longitudinal context systems, family and clinician experiences, data architecture, permissions and research infrastructure."],
  ["Patient 0 / Co-design", "The daily development process with Dad: build, use, observe, discuss, learn and improve."],
] as const;
const supportIcons = ["compute", "research", "systems", "family"] as const;

export function SupportVascurra() {
  return (
    <section id="support" aria-labelledby="support-heading" className={`${styles.section} ${styles.supportChapter}`}>
      <div className={styles.inner}>
        <div className={styles.supportLayout}>
          <div className={styles.supportIntro}><p className={styles.eyebrow}>Support Vascurra</p><h2 id="support-heading" className={styles.heading}><span>Help fund</span><VascurraGradientText>the next question.</VascurraGradientText></h2><p className={styles.lead}>Support can accelerate the careful work behind better tools, better questions and responsible learning.</p><p>It helps create the systems, research capacity and time needed to develop Vascurra well. No clinical result or investment return is implied.</p><div className={styles.supportActions}><CtaLink href="/support" className={styles.cta}>Support Vascurra</CtaLink><CtaLink href="/contact" variant="secondary" className={styles.cta}>Collaborate with Vascurra</CtaLink></div></div>
          <ol className={styles.supportAreas} aria-label="What support enables">{supportAreas.map(([name, body], index) => <li key={name}><span className={styles.sectionIcon}><SectionIcon name={supportIcons[index]!} /></span><h3>{name}</h3><p>{body}</p></li>)}</ol>
        </div>
        <div className={styles.supportSequence} aria-label="Support creates a learning flow"><span>Support</span><span>Development</span><span>Learning</span><span>Better questions</span></div>
      </div>
    </section>
  );
}
