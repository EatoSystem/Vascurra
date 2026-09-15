import { ParticipationForm } from "@/components/vascurra/forms/participation-form";
import type { PublicPageContent } from "@/content/vascurra/public-site";
import { CTA, CTAGroup, SafetyBoundary, VascurraHeadline } from "./inner-page";
import styles from "./participation-page.module.css";

export function ParticipationPage({ page, kind }: { page: PublicPageContent; kind: "access" | "contact" }) {
  const isAccess = kind === "access";
  return <main className={styles.page} id="main">
    <header className={styles.hero} aria-labelledby={`${kind}-title`}><div className={styles.shell}><div className={styles.heroGrid}><div><p className={styles.eyebrow}>{page.eyebrow}</p><VascurraHeadline as="h1" id={`${kind}-title`} lines={page.title} accent={page.accent} /><p className={styles.lead}>{page.lead}</p>{page.qualifier ? <SafetyBoundary>{page.qualifier}</SafetyBoundary> : null}</div><div className={styles.formWrap}><ParticipationForm kind={kind} /></div></div></div></header>
    <section className={styles.after} aria-labelledby={`${kind}-after-title`}><div className={styles.shell}><p className={styles.eyebrow}>{isAccess ? "What happens next" : "Before you send"}</p><div className={styles.afterGrid}><VascurraHeadline id={`${kind}-after-title`} lines={isAccess ? ["An expression of interest.", "Not automatic enrolment."] : ["A clear question", "is a good beginning."]} accent={isAccess ? "Not automatic enrolment." : "is a good beginning."} /><div><p className={styles.body}>{isAccess ? "A request records interest only. It is not access to a live health product, a clinical trial, medical care or a promise of participation." : "Choose the enquiry context that fits. Vascurra cannot provide medical advice or respond as an emergency service."}</p><CTAGroup><CTA href="/privacy" secondary>Read the privacy notice</CTA>{isAccess ? <CTA href="/responsible" secondary>Responsible by Design</CTA> : <CTA href="/about" secondary>About Vascurra</CTA>}</CTAGroup></div></div></div></section>
  </main>;
}
