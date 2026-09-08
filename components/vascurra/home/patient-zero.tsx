import Image from "next/image";
import { LineIcon } from "@/components/vascurra/ui/line-icon";
import styles from "./patient-zero.module.css";

const ideas = [
  { label: "Life", body: "Real life. Real context.", icon: "journey" },
  { label: "Context", body: "Emerging patterns.", icon: "support" },
  { label: "Support", body: "Meaningful action.", icon: "thrive" },
  { label: "Learning", body: "A brighter future.", icon: "insight" },
] as const;

export function PatientZero() {
  return (
    <section id="patient-zero" aria-labelledby="patient-zero-heading" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.story}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Patient 0</p>
            <h2 id="patient-zero-heading">One person.<span>A global possibility.</span></h2>
            <div className={styles.intro}>
              <p>Vascurra is being developed with and for my father — Patient 0 — a retired GP living with early stages of vascular dementia.</p>
              <p>His lived experience, with Veya, is helping to shape a solution for millions.</p>
            </div>
            <figure className={styles.quote}>
              <blockquote>“I want to stay independent for as long as possible, keep doing the things I enjoy, and help others along the way.”</blockquote>
              <figcaption>Patient 0</figcaption>
            </figure>
          </div>
          <Image
            src="/vascurra/v2/section-04-patient-zero-portrait-v2.webp"
            alt=""
            width={1254}
            height={1254}
            sizes="(min-width: 1024px) 52vw, (min-width: 700px) 70vw, 100vw"
            className={styles.portrait}
          />
        </div>

        <div className={styles.journey}>
          <svg className={styles.ribbon} viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="patient-zero-ribbon" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0aa3bc"/><stop offset=".45" stopColor="#2ecfc4"/><stop offset="1" stopColor="#49c768"/>
              </linearGradient>
            </defs>
            <path d="M0 60 C100 -12 200 132 300 60 S500 132 600 60 S800 132 900 60 S1100 132 1200 60" stroke="url(#patient-zero-ribbon)" strokeWidth="24"/>
            <path d="M0 52 C100 -20 200 124 300 52 S500 124 600 52 S800 124 900 52 S1100 124 1200 52" stroke="#baf5e9" strokeWidth="5"/>
            <path d="M0 68 C100 -4 200 140 300 68 S500 140 600 68 S800 140 900 68 S1100 140 1200 68" stroke="#087486" strokeOpacity=".18" strokeWidth="5"/>
          </svg>
          <ul className={styles.ideas} aria-label="The Patient 0 approach">
            {ideas.map((idea) => (
              <li key={idea.label}>
                <div className={styles.node}><LineIcon name={idea.icon}/></div>
                <h3>{idea.label}</h3>
                <p>{idea.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <footer className={styles.closing}>
          <p className={styles.statement}>Every day brings new <span>insight.</span></p>
          <p>One person can make a difference. Together, we hope to help many more.</p>
          <p className={styles.note}>Vascurra and Veya are in development. This is our direction, not live medical functionality. Portrait is illustrative.</p>
        </footer>
      </div>
    </section>
  );
}
