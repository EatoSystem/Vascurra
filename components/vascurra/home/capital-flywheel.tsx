import Image from "next/image";
import Link from "next/link";
import { capitalFlywheel } from "@/content/home";
import { CapitalAmount } from "@/components/vascurra/capital/CapitalAmount";
import { v5Artwork, v5ArtworkSrc } from "@/content/v5-artwork";
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
          <div className={styles.journeyArtwork} data-v5-artwork={v5Artwork.capitalNetwork.filename}><Image src={v5ArtworkSrc(v5Artwork.capitalNetwork)} alt={v5Artwork.capitalNetwork.alt} width={v5Artwork.capitalNetwork.width} height={v5Artwork.capitalNetwork.height} sizes="(max-width: 768px) 100vw, 94vw" quality={90}/></div>
          <ol>{capitalFlywheel.horizons.map((horizon, index) => <li className={index === 3 ? styles.globalStage : undefined} key={horizon.stage}><div className={styles.stageNumber}>{String(index + 1).padStart(2, "0")}</div><div className={styles.stageCopy}><span>{horizon.stage}</span><CapitalAmount amount={horizon.amount}/><h3>{horizon.title}</h3><p>{horizon.summary}</p>{index === 3 ? <small>Cumulative long-term mission capacity.</small> : null}</div></li>)}</ol>
        </figure>

        <div className={styles.story} aria-label={capitalFlywheel.story.join(" to ")}>{capitalFlywheel.story.map((step, index) => <span key={step}>{step}{index < capitalFlywheel.story.length - 1 ? <i aria-hidden="true">→</i> : null}</span>)}</div>
        <nav className={styles.actions} aria-label="Explore the capital flywheel">{capitalFlywheel.ctas.map((cta, index) => <Link className={index === 1 ? styles.secondary : undefined} href={cta.href} key={cta.href}>{cta.label}</Link>)}</nav>
      </div>
    </section>
  );
}
