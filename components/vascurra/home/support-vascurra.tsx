import styles from "./homepage-scaffold.module.css";

const routes = [
  ["Support the project", "Make a one-off or recurring contribution to help Vascurra move forward.", "Support Vascurra"],
  ["Fund AI research", "Help fund defined units of AI-assisted evidence and research work, with transparent records of what was explored and learned.", "Fund AI Research"],
  ["Partner with Vascurra", "For philanthropy, foundations, organisations and larger research-support partnerships.", "Partner with Vascurra"],
] as const;

export function SupportVascurra() {
  return <section id="support" aria-labelledby="support-heading" className={styles.section}><div className={styles.inner}><div className={styles.editorialIntro}><p className={styles.eyebrow}>Support Vascurra</p><h2 id="support-heading" className={styles.heading}>Help fund the next <span className={styles.gradient}>discovery.</span></h2><p className={styles.lead}>Vascurra begins with one family, but the problem affects millions.</p><p className={styles.body}>Support can help fund AI research, evidence synthesis, product development and the infrastructure required to learn continuously from real life.</p></div><div className={styles.routes}>{routes.map(([name, body, cta]) => <article key={name}><div><h3>{name}</h3><p>{body}</p></div><button type="button" className={styles.futureCta} disabled>{cta}<span className={styles.srOnly}> — planned action, not yet available</span></button></article>)}</div><p className={styles.closing}>Every research contribution should leave a trail of knowledge.</p></div></section>;
}
