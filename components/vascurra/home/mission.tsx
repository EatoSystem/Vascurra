import { homepageV2 } from "@/content/homepage-v2";
import { ArtworkReservation } from "./artwork-reservation";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

export function Mission() {
  return (
    <section id="mission" aria-labelledby="mission-heading" className={`${styles.section} ${styles.missionChapter}`}>
      <div className={styles.inner}>
        <div className={styles.missionComposition}>
          <div className={styles.chapterIntro}>
            <p className={styles.eyebrow}>Our mission</p>
            <h2 id="mission-heading" className={styles.heading}>
              <span>Help today. Learn every day.</span>
              <VascurraGradientText>Insights for tomorrow.</VascurraGradientText>
            </h2>
            <p className={styles.lead}>Begin with daily life. Learn carefully from lived experience. Turn what we learn into better tools and better questions for tomorrow.</p>
          </div>
          <ArtworkReservation assetKey="homepage-mission-human" chapter="Mission" variant="mission" brief="A dignified, human-centred composition showing today moving through careful learning toward tomorrow. An older adult or couple in a realistic sculptural treatment, with restrained cyan–teal–green flow and generous negative space; no fantasy landscape, bubbles, leaves or glossy ribbons." />
        </div>
        <div className={styles.missionGrid}>
          <ol className={styles.missionPillars}>
            {homepageV2.mission.pillars.map(([label, body], index) => (
              <li key={label}><span aria-hidden="true">0{index + 1}</span><h3>{label}</h3><p>{body}</p></li>
            ))}
          </ol>
          <div className={styles.missionStatement}>
            <p>Start with one person.</p><p>Learn deeply.</p><p>Build for many.</p>
            <small>Patient 0 means co-design and lived-experience learning—not a clinical trial.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
