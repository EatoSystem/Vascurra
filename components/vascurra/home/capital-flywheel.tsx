import Link from "next/link";
import { capitalFlywheel } from "@/content/home";
import { CapitalAmount } from "@/components/vascurra/capital/CapitalAmount";
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
          <svg viewBox="0 0 1400 470" aria-hidden="true" className={styles.journeyRibbon}>
            <defs><linearGradient id="home-capital-gradient" x1="0" x2="1"><stop stopColor="#087486"/><stop offset=".34" stopColor="#0aa3bc"/><stop offset=".64" stopColor="#2ecfc4"/><stop offset="1" stopColor="#49c768"/></linearGradient></defs>
            <path className={styles.primaryPath} d="M35 250 C180 250 205 225 330 225 S500 185 620 226 790 302 915 246 1110 100 1370 190"/>
            <path className={styles.branchPath} d="M330 230 C520 275 590 330 760 278 S1060 120 1370 145"/>
            <path className={styles.branchPath} d="M640 250 C820 365 1030 340 1370 275"/>
            <path className={styles.fieldPath} d="M930 245 C1080 370 1260 385 1380 330"/>
            {[330,620,915,1180,1325].map((cx, index) => <circle cx={cx} cy={[225,226,246,168,232][index]} r={index < 3 ? 5 : 8} key={cx}/>)}
          </svg>
          <ol>{capitalFlywheel.horizons.map((horizon, index) => <li className={index === 3 ? styles.globalStage : undefined} key={horizon.stage}><div className={styles.stageNumber}>{String(index + 1).padStart(2, "0")}</div><div className={styles.stageCopy}><span>{horizon.stage}</span><CapitalAmount amount={horizon.amount}/><h3>{horizon.title}</h3><p>{horizon.summary}</p>{index === 3 ? <small>Cumulative long-term mission capacity.</small> : null}</div></li>)}</ol>
        </figure>

        <div className={styles.story} aria-label={capitalFlywheel.story.join(" to ")}>{capitalFlywheel.story.map((step, index) => <span key={step}>{step}{index < capitalFlywheel.story.length - 1 ? <i aria-hidden="true">→</i> : null}</span>)}</div>
        <nav className={styles.actions} aria-label="Explore the capital flywheel">{capitalFlywheel.ctas.map((cta, index) => <Link className={index === 1 ? styles.secondary : undefined} href={cta.href} key={cta.href}>{cta.label}</Link>)}</nav>
      </div>
    </section>
  );
}
