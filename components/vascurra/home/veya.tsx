import Link from "next/link";
import { VeyaDailyRhythm } from "@/components/vascurra/veya/VeyaVisuals";
import { veyaHomepage, veyaMoments } from "@/content/veya";
import styles from "./veya-home.module.css";

export function Veya() {
  return (
    <section id="veya" aria-labelledby="veya-heading" className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>{veyaHomepage.eyebrow}</p>
            <h2 id="veya-heading" className={styles.heading}>
              <span>{veyaHomepage.headline[0]}</span>
              <span className={styles.gradient}>{veyaHomepage.headline[1]}</span>
            </h2>
          </div>
          <div className={styles.introCopy}>
            <p className={styles.supporting}>{veyaHomepage.supporting.map((line) => <span key={line}>{line}</span>)}</p>
            <p className={styles.secondary}>{veyaHomepage.secondary}</p>
            <p>{veyaHomepage.introduction}</p>
          </div>
        </div>

        <div className={styles.rhythmHeading}>
          <p className={styles.eyebrow}>{veyaHomepage.rhythmLabel}</p>
          <p>{veyaHomepage.rhythmNote}</p>
        </div>
        <VeyaDailyRhythm moments={veyaMoments} />

        <div className={styles.frequency}>
          <p>{veyaHomepage.frequency.map((line) => <span key={line}>{line}</span>)}</p>
          <small>{veyaHomepage.frequencyBody}</small>
        </div>

        <div className={styles.context}>
          <div>
            <p className={styles.eyebrow}>Context over time</p>
            <ul>{veyaHomepage.contextInputs.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className={styles.contextOutcome} aria-label={`${veyaHomepage.contextOutcome[0]} leads to ${veyaHomepage.contextOutcome[1]}`}>
            <span>{veyaHomepage.contextOutcome[0]}</span>
            <span aria-hidden="true">↓</span>
            <strong>{veyaHomepage.contextOutcome[1]}</strong>
          </div>
        </div>

        <div className={styles.outputs} aria-label="Potential Veya perspectives">
          {veyaHomepage.outputs.map((output) => <article key={output.label}><h3>{output.label}</h3><p>{output.body}</p></article>)}
        </div>

        <div className={styles.close}>
          <p>{veyaHomepage.boundary}</p>
          <Link href={veyaHomepage.cta.href}>{veyaHomepage.cta.label}<span aria-hidden="true"> →</span></Link>
        </div>
      </div>
    </section>
  );
}
