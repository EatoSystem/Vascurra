import Image from "next/image";
import { LineIcon } from "@/components/vascurra/ui/line-icon";
import styles from "./patient-zero.module.css";

const ideas = [
  { label: "Understands your day", icon: "daily" },
  { label: "Spots patterns", icon: "insight" },
  { label: "Personalised support", icon: "person" },
  { label: "Grows with you", icon: "journey" },
] as const;
const audiences = [
  ["Personal", "My daily life", "0% 0%"],
  ["Family", "Closer together", "100% 0%"],
  ["Clinician", "Better insights", "0% 100%"],
  ["Research", "A brighter future", "100% 100%"],
] as const;
const menu = [
  ["Today's plan", "daily"], ["Medication", "document"],
  ["Brain health", "health"], ["Activity", "movement"],
  ["Nutrition", "thrive"], ["Messages", "family"],
] as const;

export function PatientZero() {
  return (
    <section id="patient-zero" aria-labelledby="patient-zero-heading" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Section 04</p>
          <h2 id="patient-zero-heading">Patient <span>0</span></h2>
          <p className={styles.lead}>Real life. Real insights. Real progress.</p>
          <div className={styles.intro}>
            <p>Vascurra is being developed with and for Dad — Patient 0 — a retired GP living with early stages of vascular dementia.</p>
            <p>His lived experience, with Veya, is helping to shape a solution for millions.</p>
          </div>
        </header>

        <div className={styles.composition}>
          <svg className={styles.flow} viewBox="0 0 1400 600" fill="none" aria-hidden="true" focusable="false">
            <defs><linearGradient id="patient-zero-flow"><stop stopColor="#19bed7"/><stop offset=".5" stopColor="#2ecfc4"/><stop offset="1" stopColor="#a6ec83"/></linearGradient></defs>
            {[0, 15, 30, 45].map((offset) => <path key={offset} transform={`translate(0 ${offset})`} d="M100 270 C330 510 420 150 620 290 S890 420 1020 260 S1170 190 1370 440" stroke="url(#patient-zero-flow)" strokeWidth={24 - offset / 3} opacity=".2" />)}
            {[90, 220, 350, 480].map((end) => <path key={end} d={`M1000 300 C1140 300 1150 ${end} 1300 ${end}`} stroke="url(#patient-zero-flow)" strokeWidth="3" opacity=".5"/>)}
          </svg>

          <div className={styles.person}>
            <ul className={styles.markers} aria-label="The Patient 0 approach">
              {["Life", "Data", "Insights", "Progress"].map((word) => <li key={word}><strong>Real</strong><span>{word}</span></li>)}
            </ul>
            <Image src="/vascurra/v2/section-04-patient-zero-dad.webp" alt="" width={1024} height={1536} sizes="(min-width: 1100px) 32vw, (min-width: 700px) 55vw, 100vw" className={styles.dad}/>
            <figure className={styles.quote}>
              <blockquote>“I want to stay independent for as long as possible, keep doing the things I enjoy, and help others along the way.”</blockquote>
              <figcaption>Patient 0</figcaption>
            </figure>
          </div>

          <div className={styles.veyaGroup}>
            <p className={styles.concept}>Veya · Proposed experience</p>
            <div className={styles.orbit}>
              <div className={styles.veya}><h3>Veya</h3><p>Always with you</p></div>
              <ul className={styles.ideas}>{ideas.map((idea) => <li key={idea.label}><LineIcon name={idea.icon}/><span>{idea.label}</span></li>)}</ul>
            </div>
          </div>

          <figure className={styles.device}>
            <figcaption>Concept interface · Illustrative example</figcaption>
            <div className={styles.screen}>
              <h3>Good morning, Dad</h3><p>Here’s your day, at a glance.</p>
              <div className={styles.screenBody}>
                <ul className={styles.menu}>{menu.map(([label, icon]) => <li key={label}><LineIcon name={icon}/><span>{label}</span></li>)}</ul>
                <div className={styles.plan}><LineIcon name="daily"/><strong>Today’s plan</strong><p>A walk outside</p><p>A call with family</p><span>Small steps.<br/>At your pace.</span></div>
              </div>
            </div>
          </figure>

          <ul className={styles.audiences} aria-label="Four proposed experiences">{audiences.map(([title, subtitle, position]) => <li key={title}><span aria-hidden="true" className={styles.portrait} style={{backgroundPosition: position}}/><div><h3>{title}</h3><p>{subtitle}</p></div></li>)}</ul>
        </div>
        <footer className={styles.closing}><p>One person. A global possibility.</p><p className={styles.note}>Vascurra and Veya are in development. These concepts describe proposed support, not live medical functionality. Portraits are illustrative.</p></footer>
      </div>
    </section>
  );
}
