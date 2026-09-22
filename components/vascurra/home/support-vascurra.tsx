import { CtaLink } from "@/components/ui/CtaLink";
import { VascurraGradientText } from "./gradient-text";
import { V4ArtworkSlot, v4Artwork } from "./v4-artwork-slot";
import styles from "./homepage-scaffold.module.css";

const areas = [
  ["AI + Compute", "Support advanced AI systems, model access, compute capacity, evaluation and AI research infrastructure."],
  ["Research", "Support evidence review, literature exploration, research questions, collaboration and responsible investigation."],
  ["Systems Development", "Support Veya, context systems, family and clinician experiences, data architecture, permissions and research infrastructure."],
  ["Patient 0 / Co-design", "Support the daily development programme with Dad: Build. Use. Observe. Discuss. Learn. Improve."],
] as const;

export function SupportVascurra() {
  return (
    <section id="support-vascurra" aria-labelledby="support-heading" className={`${styles.section} ${styles.supportV3}`}>
      <div className={styles.inner}>
        <div className={styles.supportV3Grid}><div className={styles.supportV3Copy}><p className={styles.eyebrow}>Support Vascurra</p><h2 id="support-heading" className={styles.supportV3Heading}><span>Help fund</span><VascurraGradientText>the next question.</VascurraGradientText></h2><p className={styles.supportV3Lead}>Support can accelerate careful development, responsible learning and better research questions.</p><p>It helps create the systems, research capacity and time needed to develop Vascurra well. No clinical result or investment return is implied.</p><div className={styles.supportV3Actions}><CtaLink href="/fund" className={styles.cta}>Explore the Vascurra Fund</CtaLink><CtaLink href="/support" variant="secondary" className={styles.cta}>Ways to support</CtaLink></div><p className={styles.supportV3Equation}>People + technology + insight = better questions for tomorrow</p></div>
        <div className={styles.supportV3Visual}><ol className={styles.supportV3Areas}>{areas.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ol><div className={styles.supportV4Artwork}><V4ArtworkSlot sizes="(max-width: 639px) 108vw, (max-width: 1199px) 96vw, 68vw" slot="support-flow" source={v4Artwork.support} /></div><p className={styles.supportV3Outcome}>Insights for better questions tomorrow</p></div></div>
      </div>
    </section>
  );
}
