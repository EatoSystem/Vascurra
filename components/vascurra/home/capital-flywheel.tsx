import Image from "next/image";
import { horizonBrainCellsById } from "@/content/brain-cells";
import { BrainCellDestination } from "@/components/vascurra/brain-cells/BrainCellMission";
import { CtaLink } from "@/components/ui/CtaLink";
import { capitalFlywheel } from "@/content/home";
import { researchMission } from "@/content/research-engine";
import { CapitalAmount } from "@/components/vascurra/capital/CapitalAmount";
import { v5Artwork, v5ArtworkSrc } from "@/content/v5-artwork";
import styles from "./capital-flywheel.module.css";

export function HomeCapitalFlywheel() {
  return (
    <section className={styles.section} aria-labelledby="home-capital-flywheel-title">
      <div className={styles.shell}>
        <header className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>{capitalFlywheel.eyebrow}</p>
            <h2 id="home-capital-flywheel-title"><span>{capitalFlywheel.heading[0]}</span><span className="text-gradient">{capitalFlywheel.heading[1]}</span></h2>
          </div>
          <div className={styles.copy}>
            <p className={styles.statement}><span>Not one round. Not one grant.</span><span>A capital flywheel.</span></p>
          </div>
        </header>

        <figure className={styles.progression} data-artwork-key="home-capital-flywheel">
          <figcaption><strong>{capitalFlywheel.status}</strong><span>{capitalFlywheel.qualifier}</span></figcaption>
          <div className={styles.journeyArtwork} data-v5-artwork={v5Artwork.capitalFlywheel.filename}>
            <Image src={v5ArtworkSrc(v5Artwork.capitalFlywheel)} alt={v5Artwork.capitalFlywheel.alt}
              width={v5Artwork.capitalFlywheel.width} height={v5Artwork.capitalFlywheel.height}
              sizes="(min-width: 1568px) 1504px, (min-width: 1423px) calc(100vw - 64px), (min-width: 768px) 95.5vw, 100vw"
              quality={90} loading="lazy" />
          </div>
          <ol>
            {capitalFlywheel.horizons.map((horizon, index) => <li key={horizon.stage}>
              <div className={styles.stageNumber}>{String(index + 1).padStart(2, "0")}</div>
              <div className={styles.stageCopy}>
                <span className={styles.stageLabel}>{index === 0 ? "Near-term planning horizon" : "Future planning horizon"}</span>
                <h3>{horizon.title}</h3>
                <CapitalAmount amount={horizon.amount} />
                <p className={styles.brainCells}>{horizonBrainCellsById(horizon.id)}</p>
                <p className={styles.stageSummary}>{index === 0 ? "Patient 0 · Veya · Core System · Research Infrastructure" : horizon.summary}</p>
                <p className={styles.capability}><span>Proposed capability</span>{horizon.capabilityLine}</p>
                <p className={styles.capabilityDescriptor}>{horizon.descriptor}</p>
                {index === 3 ? <small>Cumulative long-term mission capacity.</small> : null}
              </div>
            </li>)}
          </ol>
        </figure>

        <BrainCellDestination homepage label={researchMission.label} />
        <p className={styles.missionCapability}>{capitalFlywheel.missionCapabilityLine}</p>
        <p className={styles.missionBoundary}>{capitalFlywheel.missionBoundary}</p>
        <nav className={styles.actions} aria-label="Explore the capital flywheel"><CtaLink href="/research-engine" className={styles.researchLink}>Explore the Research Engine <span aria-hidden="true">→</span></CtaLink><CtaLink href="/fund" variant="secondary" className={styles.researchLink}>Explore the Vascurra Fund</CtaLink></nav>
      </div>
    </section>
  );
}
