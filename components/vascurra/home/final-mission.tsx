import { CtaLink } from "@/components/ui/CtaLink";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

export function FinalMission() {
  return (
    <section id="support" aria-labelledby="final-mission-heading" className={`${styles.section} ${styles.finalSection}`}>
      <div className={`${styles.inner} ${styles.finalComposition}`}>
        <div><p className={styles.eyebrow}>Join the mission</p><h2 id="final-mission-heading" className={`${styles.heading} ${styles.finalHeading}`}><span>A healthier future</span><VascurraGradientText>is possible.</VascurraGradientText></h2></div>
        <div className={styles.finalSupporting}><p className={styles.lead}>Better understanding. Better support. More useful questions for tomorrow.</p><p>Vascurra is being built carefully, beginning with one lived experience and a belief that responsible learning can create better possibilities.</p><p className={styles.finalPhilosophy}>Start with one person.<br />Learn deeply. Build for many.</p><div className={styles.ctas}><CtaLink href="/access" className={styles.cta}>Request Access</CtaLink><CtaLink href="/support" variant="secondary" className={styles.cta}>Support Vascurra</CtaLink></div></div>
      </div>
      <div className={styles.finalHorizon} aria-hidden="true" />
      <p className={styles.bridge}>Intelligence for vascular cognitive health.</p>
    </section>
  );
}
