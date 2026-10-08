import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";
import { brainSources, brainIntrinsic } from "@/components/brand/brain-assets";
import { v5Artwork, v5ArtworkSrc } from "@/content/v5-artwork";
import {
  brainCellMissionTitle, brainCellUnitCents, formatMissionEuro, formatScale,
  ultimateBrainCellTarget, ultimateCapitalTargetCents,
} from "@/content/brain-cells";
import styles from "./brain-cells.module.css";

export function BrainCellEquation({ homepage = false }: { homepage?: boolean }) {
  return <dl className={`${styles.equation} ${homepage ? styles.homeEquation : ""}`}>
    <div><dt>1 Brain Cell</dt><dd>{formatMissionEuro(brainCellUnitCents)}</dd></div>
    <div><dt>{formatScale(ultimateBrainCellTarget)} Brain Cells</dt><dd>{formatMissionEuro(ultimateCapitalTargetCents)}</dd></div>
  </dl>;
}

export function BrainCellDestination({ expansive = false, homepage = false, label = "Beyond the current horizons" }: { expansive?: boolean; homepage?: boolean; label?: string }) {
  return <aside className={`${styles.destination} ${expansive ? styles.destinationExpansive : ""} ${homepage ? styles.homeDestination : ""}`}>
    <p className={styles.eyebrow}>{label}</p>
    <div className={styles.destinationNumbers}>
      <strong>{formatScale(ultimateBrainCellTarget)}<span>Brain Cells</span></strong>
      <strong>{formatMissionEuro(ultimateCapitalTargetCents)}<span>The full long-term mission</span></strong>
    </div>
    <p className={styles.note}>A proposed destination beyond the capital horizons. Not capital raised, a current funding round, valuation or guaranteed outcome.</p>
  </aside>;
}

export function BrainCellHero({ homepage = false }: { homepage?: boolean }) {
  const Heading = homepage ? "h2" : "h1";
  const artwork = v5Artwork.capitalNetwork;
  return <div className={`${styles.hero} ${homepage ? styles.homeHero : ""}`}>
    <div className={styles.heroTop}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{homepage ? "The long-term mission" : "Vascurra / The long-term mission"}</p>
        <Heading id={homepage ? "support-heading" : "brain-cell-title"} className={styles.missionTitle} aria-label={brainCellMissionTitle}>
          <span className={styles.heroNumber}>{ultimateBrainCellTarget / 1_000_000_000}</span>
          <span className={styles.heroBillion}>Billion</span>
          <span className={styles.heroCells}>Brain Cells.</span>
        </Heading>
      </div>
      <div className={styles.heroArt}>
        <Image src={homepage ? v5ArtworkSrc(artwork) : brainSources.hero} alt=""
          width={homepage ? artwork.width : brainIntrinsic.width}
          height={homepage ? artwork.height : brainIntrinsic.height}
          sizes={homepage ? "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 56vw, (min-width: 1440px) 760px, 56vw" : "(max-width: 767px) calc(100vw - 40px), (min-width: 1440px) 800px, 58vw"}
          priority={!homepage} quality={90} />
      </div>
    </div>
    <div className={styles.heroBottom}>
      <div><p className={styles.humanLine}>For the people we love now.<br />For all of us in the future.</p>
        {homepage ? <p className={styles.heroDescription}>Build the research, technology and lasting capacity to investigate vascular cognitive health. From one person, to one system, to a wider mission.</p> : null}
      </div>
      <div><BrainCellEquation homepage={homepage} />
        <nav className={styles.actions} aria-label={homepage ? "Explore the Brain Cell mission" : "Mission introduction"}>
          <CtaLink href={homepage ? "/100-Billion" : "#participation"}>{homepage ? "Explore the mission" : "Explore participation"}</CtaLink>
          <CtaLink href={homepage ? "/100-Billion#participation" : "#why-100-billion"} variant="secondary">{homepage ? "Explore participation" : "Why 100 Billion?"}</CtaLink>
        </nav>
        <p className={styles.note}>A proposed long-term mission. Brain Cells are symbolic units; purchases are not available yet.</p>
      </div>
    </div>
  </div>;
}

export function BrainCellMission() {
  return <section id="support-vascurra" aria-labelledby="support-heading" className={`${styles.chapter} ${styles.homeMission}`}><BrainCellHero homepage /></section>;
}
