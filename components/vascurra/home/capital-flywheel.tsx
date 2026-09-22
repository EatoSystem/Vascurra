import Link from "next/link";
import { capitalFlywheel } from "@/content/home";
import { VascurraGradientText } from "./gradient-text";
import styles from "./capital-flywheel.module.css";

export function HomeCapitalFlywheel() {
  return (
    <section className={styles.section} aria-labelledby="home-capital-flywheel-title">
      <div className={styles.shell}>
        <header className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>{capitalFlywheel.eyebrow}</p>
            <h2 id="home-capital-flywheel-title"><span>{capitalFlywheel.heading[0]}</span><VascurraGradientText>{capitalFlywheel.heading[1]}</VascurraGradientText></h2>
          </div>
          <div className={styles.copy}>
            <p>{capitalFlywheel.body}</p>
            <p className={styles.statement}>{capitalFlywheel.statement.map((line) => <span key={line}>{line}</span>)}</p>
          </div>
        </header>

        <figure className={styles.progression} data-artwork-key="home-capital-flywheel">
          <figcaption><strong>{capitalFlywheel.status}</strong><span>{capitalFlywheel.qualifier}</span></figcaption>
          <svg viewBox="0 0 1400 330" aria-hidden="true">
            <defs><linearGradient id="home-capital-gradient" x1="0" x2="1"><stop stopColor="#43d6ff"/><stop offset=".5" stopColor="#2ecfc4"/><stop offset="1" stopColor="#58d39a"/></linearGradient></defs>
            <path d="M30 172 C170 172 188 150 320 150 S495 126 600 150 780 205 890 170 1070 64 1370 152"/>
            <path d="M310 170 C500 190 570 228 745 190 S1012 84 1370 118"/>
            <path d="M650 178 C840 268 1030 244 1370 205"/>
          </svg>
          <ol>{capitalFlywheel.horizons.map((horizon, index) => <li className={index === 3 ? styles.globalStage : undefined} key={horizon.stage}><div><span>{horizon.stage}</span><strong>{horizon.amount}</strong><h3>{horizon.title}</h3></div><ul>{horizon.detail.map((item) => <li key={item}>{item}</li>)}</ul></li>)}</ol>
        </figure>

        <div className={styles.story} aria-label={capitalFlywheel.story.join(" to ")}>{capitalFlywheel.story.map((step, index) => <span key={step}>{step}{index < capitalFlywheel.story.length - 1 ? <i aria-hidden="true">→</i> : null}</span>)}</div>
        <nav className={styles.actions} aria-label="Explore the capital flywheel">{capitalFlywheel.ctas.map((cta, index) => <Link className={index === 1 ? styles.secondary : undefined} href={cta.href} key={cta.href}>{cta.label}</Link>)}</nav>
      </div>
    </section>
  );
}
