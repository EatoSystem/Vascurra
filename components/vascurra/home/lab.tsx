import { homepageV2 } from "@/content/homepage-v2";
import { CtaLink } from "@/components/ui/CtaLink";
import { VascurraGradientText } from "./gradient-text";
import { V4ArtworkSlot, v4Artwork } from "./v4-artwork-slot";
import styles from "./homepage-scaffold.module.css";

const trustPrinciples = ["Consent", "Control", "Provenance", "Uncertainty", "Human review", "Data minimisation"] as const;
const learningLoop = ["Dad", "Veya", "Context + questions", "AI + research", "Human review", "New learning", "System improvement", "Better questions", "Back to Dad"] as const;
const aiResearch = ["Literature exploration", "Evidence synthesis", "Question generation", "Source comparison", "Gap identification", "Context organisation", "Hypothesis exploration", "Research directions"] as const;

export function Lab() {
  return (
    <section id="lab" aria-labelledby="lab-heading" className={`${styles.section} ${styles.deep} ${styles.labChapter}`}>
      <div className={styles.inner}>
        <div className={styles.labHero}><div className={styles.labIntro}><p className={styles.eyebrow}>Vascurra Lab</p><h2 id="lab-heading" className={styles.heading}><span>Where lived experience</span><VascurraGradientText luminous>meets research.</VascurraGradientText></h2><p className={styles.lead}>A daily learning and co-design system, beginning with Dad.</p></div>
        <div className={styles.labV4Artwork}><V4ArtworkSlot sizes="(max-width: 639px) 100vw, (max-width: 1023px) 92vw, 64vw" slot="lab-trust-lived-evidence" source={v4Artwork.labTrust} /></div></div>
        <div className={`${styles.body} ${styles.labBody}`}><p>Vascurra is being designed with Dad, a former GP living with early vascular dementia.</p><p>Together, they are developing a daily learning and co-design system in which Dad can work with advanced AI to capture questions, reflect on daily experience, explore context, prepare for conversations and help shape what Vascurra becomes.</p><p>Each day can create new questions, observations and design lessons. Those lessons can improve the next version of the system and identify areas for deeper research.</p></div>
        <div className={styles.learningModel}><p className={styles.eyebrow}>Daily learning loop</p><ol>{learningLoop.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol><p>Continuous collaboration, learning, product development and research questioning—not autonomous medicine.</p></div>
        <div className={styles.researchRole}><div><p className={styles.eyebrow}>AI + research</p><h3>Better questions, carefully explored.</h3><p>Advanced AI may support research activity while sources, uncertainty and human responsibility remain visible.</p></div><ul>{aiResearch.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <p className={styles.ambition}>Every day, Vascurra can search for better questions, useful patterns, relevant evidence and new avenues worth investigating—with the ambition of contributing to meaningful breakthroughs over time.</p>
        <div className={styles.trustLayer} id="responsible"><div><p className={styles.eyebrow}>Responsible by design</p><h3>Trust is part<br />of the architecture.</h3><p className={styles.trustStatement}>Collect what matters. Not everything possible.</p></div><div><p>{homepageV2.responsible.body}</p><ul>{trustPrinciples.map((principle) => <li key={principle}>{principle}</li>)}</ul></div></div>
        <p className={styles.careful}>Patient 0 is a co-design programme, not a clinical trial or evidence of efficacy. Lived experience may inspire research questions; personal information does not silently become research material. Any research use requires separate consent, appropriate permissions and governance.</p>
        <div className={styles.futureClose}><div><p className={styles.eyebrow}>Looking forward</p><h3>A healthier future<br /><VascurraGradientText luminous>is possible.</VascurraGradientText></h3></div><div><p>Better understanding. Better support. Better questions for tomorrow.</p><div className={styles.futureActions}><CtaLink href="/support" variant="onDeep" className={`${styles.cta} ${styles.finalSupportCta}`}>Support</CtaLink></div></div></div>
      </div>
    </section>
  );
}
