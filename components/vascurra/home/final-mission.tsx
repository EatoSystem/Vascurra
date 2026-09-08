import { CtaLink } from "@/components/ui/CtaLink";
import { ArtworkPlaceholder } from "./artwork-placeholder";
import styles from "./homepage-scaffold.module.css";

export function FinalMission() {
  return <section id="request-access" aria-labelledby="final-mission-heading" className={`${styles.section} ${styles.finalSection}`}><div className={`${styles.inner} ${styles.centered}`}><p className={styles.eyebrow}>The mission continues</p><h2 id="final-mission-heading" className={styles.heading}>A healthier future is <span className={styles.gradient}>possible.</span></h2><p className={styles.lead}>Help today. Learn every day. Fight for tomorrow.</p><p className={`${styles.body} ${styles.centerCopy}`}>Vascurra is being built carefully, beginning with one lived experience and a belief that better understanding can create better possibilities.</p><div className={styles.ctas}><CtaLink href="/early-access" className={styles.cta}>Request Access</CtaLink><CtaLink href="#top" variant="secondary" className={styles.cta}>Follow Vascurra</CtaLink></div><ArtworkPlaceholder variant="immersive" description="Final evolved Vascurra brain / ribbon composition" /><p className={styles.bridge}>Intelligence for vascular cognitive health.</p></div></section>;
}
