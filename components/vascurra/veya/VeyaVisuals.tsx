import type { VeyaMoment } from "@/content/veya";
import { veyaArtworkBriefs } from "@/content/veya";
import styles from "./veya-visuals.module.css";

export function VeyaDailyRhythm({ moments, compact = false }: { moments: readonly VeyaMoment[]; compact?: boolean }) {
  return (
    <div className={`${styles.rhythm} ${compact ? styles.compactRhythm : ""}`} data-artwork-key="veya-daily-rhythm">
      <div className={styles.rhythmThread} aria-hidden="true" />
      <ol className={styles.rhythmList} aria-label="Illustrative optional moments in a day with Veya">
        {moments.map((moment) => (
          <li key={`${moment.time}-${moment.label}`}>
            <time>{moment.time}</time>
            <span className={styles.momentLabel}>{moment.label}</span>
            {moment.quote ? <q>{moment.quote}</q> : null}
            <p>{moment.description}</p>
            {moment.details ? <ul aria-label={`${moment.label} context examples`}>{moment.details.map((detail) => <li key={detail}>{detail}</li>)}</ul> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function VeyaContextVisual({ days }: { days: readonly string[] }) {
  return (
    <figure className={styles.contextVisual} data-artwork-key="veya-context-over-time">
      <figcaption><span>Chosen context</span><strong>Across days, not isolated moments</strong></figcaption>
      <ol>{days.map((day, index) => <li key={day}><span>Day {index + 1}</span><strong>{day}</strong></li>)}</ol>
      <div className={styles.contextOutcome}><span>Context over time</span><strong>A clearer picture for better questions</strong></div>
    </figure>
  );
}

export function VeyaProvenanceVisual({ fields }: { fields: readonly { readonly label: string; readonly body: string }[] }) {
  return (
    <figure className={styles.provenanceVisual} data-artwork-key="veya-provenance">
      <figcaption><span>Context record</span><strong>Source stays attached</strong></figcaption>
      <dl>{fields.map((field) => <div key={field.label}><dt>{field.label}</dt><dd>{field.body}</dd></div>)}</dl>
    </figure>
  );
}

export function VeyaPerspectivesVisual({ views }: { views: readonly [{ readonly label: string; readonly qualifier: string; readonly body: string }, ...{ readonly label: string; readonly qualifier: string; readonly body: string }[]] }) {
  const person = views[0];
  return (
    <figure className={styles.perspectivesVisual} data-artwork-key="veya-perspectives">
      <figcaption>Purpose-specific, permission-led views</figcaption>
      <div className={styles.personView}><span>Primary relationship</span><strong>{person.label}</strong><p>{person.body}</p></div>
      <ul>{views.slice(1).map((view) => <li key={view.label}><span>{view.qualifier}</span><strong>{view.label}</strong><p>{view.body}</p></li>)}</ul>
    </figure>
  );
}

export function VeyaLearningVisual({ steps }: { steps: readonly string[] }) {
  return (
    <figure className={styles.learningVisual} data-artwork-key="veya-learning-loop">
      <figcaption>An accountable learning direction</figcaption>
      <ol>{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
    </figure>
  );
}

export function VeyaArtworkStatus() {
  return <span className={styles.srOnly}>Five coded visual placeholders are prepared for future supplied artwork: {veyaArtworkBriefs.map((brief) => brief.assetKey).join(", ")}.</span>;
}
