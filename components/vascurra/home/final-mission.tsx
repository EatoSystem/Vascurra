import { CtaLink } from "@/components/ui/CtaLink";
import { ArtworkPlaceholder } from "./artwork-placeholder";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

export function FinalMission() {
  return <section id="request-access" aria-labelledby="final-mission-heading" className={`${styles.section} ${styles.finalSection}`}><div className={`${styles.inner} ${styles.centered}`}><p className={styles.eyebrow}>Our future</p><h2 id="final-mission-heading" className={`${styles.heading} ${styles.finalHeading}`}><span>A healthier future</span><VascurraGradientText>is possible.</VascurraGradientText></h2><p className={`${styles.lead} ${styles.missionLine}`}><span>Help today.</span><span>Learn every day.</span><span>Fight for tomorrow.</span></p><p className={`${styles.body} ${styles.centerCopy}`}>Vascurra is being built carefully, beginning with one lived experience and a belief that better understanding can create better possibilities.</p><div className={styles.ctas}><CtaLink href="/early-access" className={styles.cta}>Request Access</CtaLink><CtaLink href="#support" variant="secondary" className={styles.cta}>Support Vascurra</CtaLink></div><ArtworkPlaceholder variant="immersive" description="Final evolved Vascurra brain and ribbon composition" /><p className={styles.bridge}>Intelligence for vascular cognitive health.</p></div></section>;
}
