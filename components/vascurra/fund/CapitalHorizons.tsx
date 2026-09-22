import Image from "next/image";
import type { CapitalHorizon } from "@/content/fund";
import { CapitalAmount } from "@/components/vascurra/capital/CapitalAmount";
import { v5Artwork, v5ArtworkSrc } from "@/content/v5-artwork";
import styles from "./fund-page.module.css";

function Horizon({ horizon }: { horizon: CapitalHorizon }) {
  return (
    <article className={`${styles.horizon} ${styles[`horizon${horizon.id}`]}`} aria-labelledby={`capital-horizon-${horizon.id}`}>
      <div className={styles.horizonHeading}>
        <p>{horizon.eyebrow}</p>
        <CapitalAmount amount={horizon.amount}/>
        <span>{horizon.status}</span>
      </div>
      <div className={styles.horizonCopy}>
        <h3 id={`capital-horizon-${horizon.id}`}>{horizon.title}</h3>
        <p className={styles.horizonSubline}>{horizon.subline}</p>
        <p>{horizon.body}</p>
        <ul>{horizon.uses.map((use) => <li key={use}>{use}</li>)}</ul>
        <p className={styles.horizonStatement}>{horizon.statement}</p>
      </div>
    </article>
  );
}

export function CapitalHorizons({ horizons, qualifier }: { horizons: readonly CapitalHorizon[]; qualifier: string }) {
  const planning = horizons.filter((horizon) => !horizon.featured);
  const mission = horizons.find((horizon) => horizon.featured);
  return (
    <section className={styles.horizons} aria-labelledby="capital-horizons-title">
      <div className={styles.shell}>
        <header className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Capital horizons</p>
          <h2 id="capital-horizons-title">Build capability.<span>Widen the mission.</span></h2>
          <p className={styles.qualifier}>{qualifier}</p>
        </header>
        <div className={styles.horizonOverview}><Image className={styles.sectionArtwork} src={v5ArtworkSrc(v5Artwork.capitalHorizons)} alt={v5Artwork.capitalHorizons.alt} width={v5Artwork.capitalHorizons.width} height={v5Artwork.capitalHorizons.height} sizes="(max-width: 767px) 124vw, 92vw" quality={90} data-v5-artwork={v5Artwork.capitalHorizons.number}/><ol className={styles.horizonMarkers}>{horizons.map((horizon) => <li key={horizon.id}><span>{horizon.id}</span><CapitalAmount amount={horizon.amount}/><small>{horizon.title}</small></li>)}</ol></div>
        <div className={styles.planningHorizons}>{planning.map((horizon) => <Horizon horizon={horizon} key={horizon.id}/>)}</div>
      </div>
      {mission ? <div className={styles.missionHorizon} id="global-capacity" data-artwork-key="fund-global-capacity"><div className={styles.shell}>{mission.headline ? <h2 className={styles.missionHeadline}>{mission.headline}</h2> : null}<Image className={styles.missionArtwork} src={v5ArtworkSrc(v5Artwork.permanentCapacity)} alt={v5Artwork.permanentCapacity.alt} width={v5Artwork.permanentCapacity.width} height={v5Artwork.permanentCapacity.height} sizes="100vw" quality={90} data-v5-artwork={v5Artwork.permanentCapacity.number}/><Horizon horizon={mission}/><p className={styles.missionBoundary}>€1B+ means cumulative long-term mission capacity—not a current raise, valuation, equity round, current budget, single transaction or funding guarantee.</p></div></div> : null}
    </section>
  );
}
