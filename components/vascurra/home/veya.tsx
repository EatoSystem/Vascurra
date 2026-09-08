import Image from "next/image";
import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

export function Veya() {
  return <section id="veya" aria-labelledby="veya-heading" className={styles.section}>
    <div className={`${styles.inner} ${styles.split}`}>
      <div><p className={styles.eyebrow}>Veya</p><h2 id="veya-heading" className={styles.heading}><span>Complexity,</span><VascurraGradientText>made more understandable.</VascurraGradientText></h2><p className={styles.lead}>{homepageV2.veya.lead}</p><p className={styles.body}>{homepageV2.veya.body}</p><ul className={styles.simpleList}>{homepageV2.veya.points.map(point => <li key={point}>{point}</li>)}</ul><p className={styles.relationship}>{homepageV2.veya.relationship}</p><p className={styles.safety}>Veya is not a doctor, diagnostic service or emergency service.</p></div>
      <figure className={styles.veyaArtwork} aria-hidden="true">
        <Image
          src="/vascurra/v2/section-07-veya.png"
          alt=""
          width={1448}
          height={1086}
          sizes="(min-width: 1536px) 820px, (min-width: 1024px) 55vw, calc(100vw - 2.5rem)"
          className={styles.veyaArtworkImage}
        />
      </figure>
    </div>
  </section>;
}
