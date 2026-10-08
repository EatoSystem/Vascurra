import { homepageV2 } from "@/content/homepage-v2";
import { CtaLink } from "@/components/ui/CtaLink";
import { VascurraGradientText } from "./gradient-text";
import { V4ArtworkSlot, v4Artwork } from "./v4-artwork-slot";
import styles from "./homepage-scaffold.module.css";

const trustPrinciples = ["Consent", "Control", "Provenance", "Uncertainty", "Human review", "Data minimisation"] as const;

export function Lab() {
  return (
    <section id="lab" aria-labelledby="lab-heading" className={`${styles.section} ${styles.deep} ${styles.labChapter}`}>
      <div className={styles.inner}>
        <div className={styles.labHero}><div className={styles.labIntro}><p className={styles.eyebrow}>Vascurra Lab</p><h2 id="lab-heading" className={styles.heading}><span>Where lived experience</span><VascurraGradientText luminous>meets research.</VascurraGradientText></h2><p className={styles.lead}>A daily learning and co-design system, beginning with Dad.</p></div>
        <div className={styles.labV4Artwork}><V4ArtworkSlot sizes="(max-width: 639px) 100vw, (max-width: 1023px) 92vw, 64vw" slot="lab-trust-lived-evidence" source={v4Artwork.labTrust} /></div></div>
        <div className={`${styles.body} ${styles.labBody}`}>
          <p>Vascurra Lab is intended to connect questions from daily life with scientific evidence, advanced AI, compute and expert review, turning lived questions into structured investigation.</p>
          <div className={styles.futureActions}><CtaLink href="/lab" variant="onDeep" className={styles.cta}>Explore Vascurra Lab</CtaLink></div>
        </div>
        <div className={styles.trustLayer} id="responsible"><div><p className={styles.eyebrow}>Responsible by design</p><h3>Trust is part<br />of the architecture.</h3><p className={styles.trustStatement}>Collect what matters. Not everything possible.</p></div><div><p>{homepageV2.responsible.body}</p><ul>{trustPrinciples.map((principle) => <li key={principle}>{principle}</li>)}</ul></div></div>
        <p className={styles.careful}>Patient 0 is a co-design programme, not a clinical trial or evidence of efficacy. Research use requires separate consent, appropriate permissions and governance.</p>
        <div className={styles.futureClose}><div><p className={styles.eyebrow}>Looking forward</p><h3>A healthier future<br /><VascurraGradientText luminous>is possible.</VascurraGradientText></h3></div><div><p>Better understanding. Better support. Better questions for tomorrow.</p><div className={styles.futureActions}><CtaLink href="/support" variant="onDeep" className={`${styles.cta} ${styles.finalSupportCta}`}>Support</CtaLink></div></div></div>
      </div>
    </section>
  );
}
