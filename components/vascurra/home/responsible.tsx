import { ArtworkPlaceholder } from "./artwork-placeholder";
import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

export function Responsible() {
  return <section id="responsible" aria-labelledby="responsible-heading" className={styles.section}><div className={`${styles.inner} ${styles.split}`}><div><p className={styles.eyebrow}>Responsible by design</p><h2 id="responsible-heading" className={styles.heading}><span>Trust is part of the</span><VascurraGradientText>architecture.</VascurraGradientText></h2><p className={styles.lead}>{homepageV2.responsible.lead}</p><p className={styles.body}>{homepageV2.responsible.body}</p><ul className={`${styles.principles} ${styles.twoColumnList}`}>{homepageV2.responsible.principles.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ul><p className={styles.closing}>{homepageV2.responsible.closing}</p></div><ArtworkPlaceholder variant="portrait" description="Human-centred permission and agency in the Vascurra ribbon language" /></div></section>;
}
