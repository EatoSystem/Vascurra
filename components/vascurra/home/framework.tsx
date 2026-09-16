import { homepageV2 } from "@/content/homepage-v2";
import { ArtworkReservation } from "./artwork-reservation";
import { VascurraGradientText } from "./gradient-text";
import styles from "./homepage-scaffold.module.css";

const stages = [["Observe", "Notice what matters."], ["Understand", "Connect context without hiding uncertainty."], ["Support", "Make understanding useful to people."], ["Learn", "Let what happens next refine the picture."]] as const;
const perspectives = [["Personal", "My life and context."], ["Family", "Closer, with permission."], ["Clinician", "Better organised context."], ["Research", "Governed learning where approved."]] as const;

export function Framework() {
  return (
    <section id="framework" aria-labelledby="framework-heading" className={`${styles.section} ${styles.systemChapter}`}>
      <div className={styles.inner}>
        <div className={styles.systemHeadingRow}>
          <div><p className={styles.eyebrow}>The Vascurra system</p><h2 id="framework-heading" className={styles.heading}><span>Observe. Understand.</span><VascurraGradientText>Support. Learn.</VascurraGradientText></h2></div>
          <div className={styles.systemProposition}><p>One system.</p><p>Multiple perspectives.</p><small>{homepageV2.framework.qualifier}</small></div>
        </div>
        <ArtworkReservation assetKey="homepage-system-continuous-perspectives" chapter="System" variant="system" brief="One precise continuous Vascurra flow linking Observe, Understand, Support and Learn, with Personal, Family, Clinician and Research woven into the same system as subtle perspective points. Fine linework, controlled translucency and generous white space; no cards, bubbles or corporate flowchart." />
        <ol className={styles.systemStages}>{stages.map(([name, body]) => <li key={name}><h3>{name}</h3><p>{body}</p></li>)}</ol>
        <ul className={styles.perspectiveLine} aria-label="Vascurra perspectives">{perspectives.map(([name, body]) => <li key={name}><strong>{name}</strong><span>{body}</span></li>)}</ul>
        <p className={styles.systemClosing}>Not a score. Not a snapshot. A living picture over time.</p>
      </div>
    </section>
  );
}
