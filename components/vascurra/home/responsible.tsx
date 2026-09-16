import Image from "next/image";
import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

export function Responsible() {
  return <section id="responsible" aria-labelledby="responsible-heading" className={styles.section}><div className={`${styles.inner} ${styles.split}`}><div><p className={styles.eyebrow}>Responsible by design</p><h2 id="responsible-heading" className={styles.heading}><span>Trust is part of the</span><VascurraGradientText>architecture.</VascurraGradientText></h2><p className={styles.lead}>{homepageV2.responsible.lead}</p><p className={styles.body}>{homepageV2.responsible.body}</p><ul className={`${styles.principles} ${styles.twoColumnList}`}>{homepageV2.responsible.principles.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ul><p className={styles.closing}>{homepageV2.responsible.closing}</p></div><figure className={styles.responsibleArtwork}><Image src="/vascurra/homepage/candidates/luminous_teal_orbital_core.webp" alt="A luminous core is held within balanced, permission-like orbital layers." width={1672} height={941} sizes="(min-width: 1536px) 720px, (min-width: 1024px) 48vw, calc(100vw - 2.5rem)" className={styles.responsibleArtworkImage} /></figure></div></section>;
}
