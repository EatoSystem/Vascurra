import { homepageV2 } from "@/content/homepage-v2";
import { ArtworkReservation } from "./artwork-reservation";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

const trustPrinciples = ["Consent", "Control", "Provenance", "Uncertainty", "Human review", "Data minimisation"] as const;

export function Lab() {
  return (
    <section id="lab" aria-labelledby="lab-heading" className={`${styles.section} ${styles.deep} ${styles.labChapter}`}>
      <div className={styles.inner}>
        <div className={styles.labIntro}><p className={styles.eyebrow}>Vascurra Lab</p><h2 id="lab-heading" className={styles.heading}><span>Where lived experience</span><VascurraGradientText luminous>meets research.</VascurraGradientText></h2><p className={styles.lead}>Research and learning around longer-term questions.</p><p className={styles.body}>{homepageV2.lab.body}</p></div>
        <ArtworkReservation assetKey="homepage-lab-trust-lived-evidence" chapter="Lab + Trust" variant="lab" brief="A dark-background scientific visualisation in which a subtle human/lived-experience stream and a precise research/evidence stream meet without losing provenance. Fine luminous cyan and green linework, restrained particles, evidence structures and atmospheric depth; no white image strip or implied clinical result." />
        <div className={styles.trustLayer} id="responsible"><div><p className={styles.eyebrow}>Responsible by design</p><h3>Trust is part<br />of the architecture.</h3><p className={styles.trustStatement}>Collect what matters. Not everything possible.</p></div><div><p>{homepageV2.responsible.body}</p><ul>{trustPrinciples.map((principle) => <li key={principle}>{principle}</li>)}</ul></div></div>
        <p className={styles.careful}>Vascurra Lab is a development concept. No research finding, clinical trial, partnership or regulatory status is implied. Future research use would require explicit consent, appropriate permissions and governance.</p>
      </div>
    </section>
  );
}
