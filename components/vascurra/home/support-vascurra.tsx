import styles from "./homepage-scaffold.module.css";
import { VascurraGradientText } from "./gradient-text";
import { homepageV2 } from "@/content/homepage-v2";

const routes = [
  ["Support the project", "One-off or recurring support."],
  ["Fund AI research", "Help fund defined Vascurra Lab research activity."],
  ["Partner with Vascurra", "For philanthropy, foundations and organisations."],
] as const;

export function SupportVascurra() {
  return <section id="support" aria-labelledby="support-heading" className={styles.section}><div className={styles.inner}><div className={styles.editorialIntro}><p className={styles.eyebrow}>Support Vascurra</p><h2 id="support-heading" className={styles.heading}><span>Help fund the</span><VascurraGradientText>{homepageV2.support.headingAccent}</VascurraGradientText></h2><p className={styles.lead}>Vascurra begins with one family, but the challenge affects millions. Support can help fund research, responsible AI development and the infrastructure required to learn continuously.</p></div><div className={styles.routes} aria-label="Ways to support Vascurra">{routes.map(([name, body]) => <button key={name} type="button" disabled><span><strong>{name}</strong><span>{body}</span></span><span aria-hidden="true" className={styles.routeArrow}>→</span></button>)}</div><p className={`${styles.closing} ${styles.supportClosing}`}>Every research contribution should leave a trail of knowledge.</p></div></section>;
}
