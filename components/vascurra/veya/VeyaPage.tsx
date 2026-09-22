import Link from "next/link";
import type { ElementType } from "react";
import { veyaMoments, veyaPage } from "@/content/veya";
import { VeyaArtworkStatus, VeyaContextVisual, VeyaDailyRhythm, VeyaLearningVisual, VeyaPerspectivesVisual, VeyaProvenanceVisual } from "./VeyaVisuals";
import styles from "./veya-page.module.css";

function Heading({ as: Tag = "h2", lines, accent, id, className = "" }: { as?: ElementType; lines: readonly string[]; accent?: string; id?: string; className?: string }) {
  return <Tag id={id} className={`${styles.heading} ${className}`}>{lines.map((line) => <span className={line === accent ? styles.gradient : undefined} key={line}>{line}</span>)}</Tag>;
}

function Ctas({ primary, secondary }: { primary: { readonly label: string; readonly href: string }; secondary?: { readonly label: string; readonly href: string } }) {
  return <nav aria-label="Page links" className={styles.ctas}><Link href={primary.href}>{primary.label}</Link>{secondary ? <Link className={styles.secondaryCta} href={secondary.href}>{secondary.label}</Link> : null}</nav>;
}

export function VeyaPage() {
  return (
    <main className={styles.page} id="main">
      <header className={styles.hero} aria-labelledby="veya-page-title">
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{veyaPage.hero.eyebrow}</p>
              <Heading as="h1" id="veya-page-title" lines={veyaPage.hero.headline} accent={veyaPage.hero.accent} />
              <p className={styles.heroSupporting}>{veyaPage.hero.supporting.map((line) => <span key={line}>{line}</span>)}</p>
              <p className={styles.lead}>{veyaPage.hero.lead}</p>
              <p className={styles.boundary}>{veyaPage.hero.qualifier}</p>
              <Ctas primary={veyaPage.hero.primaryCta} secondary={veyaPage.hero.secondaryCta} />
            </div>
            <figure className={styles.heroVisual} data-artwork-key="veya-daily-rhythm">
              <figcaption>Continuity through the day</figcaption>
              <div className={styles.heroThread} aria-hidden="true" />
              <ol>
                <li><span>Morning</span><strong>Check in</strong></li>
                <li><span>During the day</span><strong>Ask · notice · remember</strong></li>
                <li><span>Evening</span><strong>Reflect if useful</strong></li>
                <li><span>Over time</span><strong>Keep context connected</strong></li>
              </ol>
            </figure>
          </div>
        </div>
      </header>

      <section className={`${styles.section} ${styles.quiet}`} id="day-with-veya" aria-labelledby="day-title">
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div><p className={styles.eyebrow}>{veyaPage.day.eyebrow}</p><Heading id="day-title" lines={veyaPage.day.headline} accent={veyaPage.day.accent} /></div>
            <p className={styles.lead}>{veyaPage.day.lead}</p>
          </div>
          <VeyaDailyRhythm moments={veyaMoments} />
          <p className={styles.sectionClosing}>{veyaPage.day.closing}</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.frequency}`} id="how-veya-works" aria-labelledby="frequency-title">
        <div className={styles.shell}>
          <div className={styles.frequencyGrid}>
            <div><p className={styles.eyebrow}>{veyaPage.frequency.eyebrow}</p><Heading id="frequency-title" lines={veyaPage.frequency.headline} accent={veyaPage.frequency.accent} /><p className={styles.body}>{veyaPage.frequency.body}</p></div>
            <div className={styles.conversation}><p className={styles.eyebrow}>{veyaPage.frequency.conversationEyebrow}</p><h3>{veyaPage.frequency.conversationHeadline.map((line) => <span key={line}>{line}</span>)}</h3><p>{veyaPage.frequency.conversationBody}</p><ul>{veyaPage.frequency.modes.map((mode) => <li key={mode}>{mode}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="memory-title">
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div><p className={styles.eyebrow}>{veyaPage.memory.eyebrow}</p><Heading id="memory-title" lines={veyaPage.memory.headline} accent={veyaPage.memory.accent} /></div>
            <div><p className={styles.lead}>{veyaPage.memory.body}</p><p className={styles.boundary}>{veyaPage.memory.control}</p></div>
          </div>
          <VeyaContextVisual days={veyaPage.memory.days} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.quiet}`} aria-labelledby="provenance-title">
        <div className={styles.shell}>
          <div className={styles.splitIntro}>
            <div><p className={styles.eyebrow}>{veyaPage.provenance.eyebrow}</p><Heading id="provenance-title" lines={veyaPage.provenance.headline} accent={veyaPage.provenance.accent} /><p className={styles.body}>{veyaPage.provenance.body}</p></div>
            <VeyaProvenanceVisual fields={veyaPage.provenance.fields} />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.patterns}`} aria-labelledby="patterns-title">
        <div className={styles.shell}>
          <div className={styles.patternsGrid}>
            <div><p className={styles.eyebrow}>{veyaPage.patterns.eyebrow}</p><Heading id="patterns-title" lines={veyaPage.patterns.headline} accent={veyaPage.patterns.accent} /></div>
            <div><p className={styles.lead}>{veyaPage.patterns.body}</p><ul>{veyaPage.patterns.examples.map((example) => <li key={example}>{example}</li>)}</ul><p className={styles.reviewFlow}>{veyaPage.patterns.review}</p></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.medication}`} aria-labelledby="medication-title">
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div><p className={styles.eyebrow}>{veyaPage.medication.eyebrow}</p><Heading id="medication-title" lines={veyaPage.medication.headline} accent={veyaPage.medication.accent} /></div>
            <p className={styles.lead}>{veyaPage.medication.body}</p>
          </div>
          <div className={styles.medicationLists}>
            <div><h3>Veya could help</h3><ul>{veyaPage.medication.can.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><h3>Veya would not</h3><ul>{veyaPage.medication.cannot.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <p className={styles.boundary}>{veyaPage.medication.boundary}</p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="perspectives-title">
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div><p className={styles.eyebrow}>{veyaPage.perspectives.eyebrow}</p><Heading id="perspectives-title" lines={veyaPage.perspectives.headline} accent={veyaPage.perspectives.accent} /></div>
            <p className={styles.lead}>{veyaPage.perspectives.body}</p>
          </div>
          <VeyaPerspectivesVisual views={veyaPage.perspectives.views} />
          <div className={styles.perspectiveLinks}><Link href="/personal">For people</Link><Link href="/families">For families</Link><Link href="/clinicians">For clinicians</Link><Link href="/research">For research</Link></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.learning}`} aria-labelledby="learning-title">
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div><p className={styles.eyebrow}>{veyaPage.learning.eyebrow}</p><Heading id="learning-title" lines={veyaPage.learning.headline} accent={veyaPage.learning.accent} /></div>
            <div><p className={styles.lead}>{veyaPage.learning.body}</p><p className={styles.boundary}>{veyaPage.learning.boundary}</p></div>
          </div>
          <VeyaLearningVisual steps={veyaPage.learning.steps} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.deep}`} aria-labelledby="boundaries-title">
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div><p className={styles.eyebrow}>{veyaPage.boundaries.eyebrow}</p><Heading id="boundaries-title" lines={veyaPage.boundaries.headline} accent={veyaPage.boundaries.accent} /></div>
            <div className={styles.boundaryColumns}><div><h3>Veya is not</h3><ul>{veyaPage.boundaries.isNot.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Veya may support</h3><ul>{veyaPage.boundaries.maySupport.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
          </div>
          <p className={styles.emergency}>{veyaPage.boundaries.emergency}</p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="permissions-title">
        <div className={styles.shell}>
          <div className={styles.permissionsGrid}>
            <div><p className={styles.eyebrow}>{veyaPage.permissions.eyebrow}</p><Heading id="permissions-title" lines={veyaPage.permissions.headline} accent={veyaPage.permissions.accent} /><p className={styles.lead}>{veyaPage.permissions.body}</p></div>
            <ol>{veyaPage.permissions.controls.map((control, index) => <li key={control}><span>{String(index + 1).padStart(2, "0")}</span><strong>{control}</strong></li>)}</ol>
          </div>
          <p className={styles.permissionClosing}>{veyaPage.permissions.closing}</p>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="veya-closing-title">
        <div className={styles.shell}><Heading id="veya-closing-title" lines={veyaPage.closing.headline} accent={veyaPage.closing.accent} className={styles.closingHeading} /><p>{veyaPage.closing.body}</p><Ctas primary={veyaPage.closing.primaryCta} secondary={veyaPage.closing.secondaryCta} /></div>
      </section>
      <VeyaArtworkStatus />
    </main>
  );
}
