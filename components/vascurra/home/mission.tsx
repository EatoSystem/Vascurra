import { homepageV2 } from "@/content/homepage-v2";
import { VascurraGradientText } from "./gradient-text";
import { SectionIcon } from "./section-icon";
import { V4ArtworkSlot, v4Artwork } from "./v4-artwork-slot";
import styles from "./homepage-scaffold.module.css";

const icons = ["person", "book", "insight"] as const;

export function Mission() {
  return (
    <section id="mission" aria-labelledby="mission-heading" className={`${styles.section} ${styles.missionV3}`}>
      <div className={styles.inner}>
        <div className={styles.missionV3Grid}><div className={styles.missionV3Copy}>
          <p className={styles.eyebrow}>Our mission</p>
          <h2 id="mission-heading" className={styles.missionV3Heading}><span>Help today.</span><span>Learn every day.</span><VascurraGradientText>Insights for tomorrow.</VascurraGradientText></h2>
          <p className={styles.missionV3Lead}>Begin with daily life. Learn carefully from lived experience. Turn what we learn into better tools and better questions for tomorrow.</p>
          <p className={styles.missionV3Philosophy}>Start with one person. Learn deeply. Build for many.</p>
          <small>Patient 0 means daily learning and co-design—not a clinical trial.</small>
        </div><div className={styles.missionV4Artwork}><V4ArtworkSlot sizes="(max-width: 639px) 100vw, (max-width: 1199px) 92vw, 55vw" slot="mission-flow" source={v4Artwork.mission} /></div></div>
        <ol className={styles.missionV3Principles}>{homepageV2.mission.pillars.map(([label, body], index) => <li key={label}><span className={styles.v3Icon}><SectionIcon name={icons[index]!} /></span><h3>{label}</h3><p>{body}</p></li>)}</ol>
      </div>
    </section>
  );
}
