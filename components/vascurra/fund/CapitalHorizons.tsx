import Image from "next/image";
import type { CapitalHorizon } from "@/content/fund";
import { CapitalAmount } from "@/components/vascurra/capital/CapitalAmount";
import { v5Artwork, v5ArtworkSrc } from "@/content/v5-artwork";
import styles from "./fund-page.module.css";
import { horizonBrainCells } from "@/content/brain-cells";
import campaign from "@/components/vascurra/brain-cells/brain-cell-horizons.module.css";

function Horizon({ horizon, showBrainCells = false }: { horizon: CapitalHorizon; showBrainCells?: boolean }) {
  const layout = showBrainCells ? campaign : styles;
  return (
    <article className={`${layout.horizon} ${layout[`horizon${horizon.id}`]}`} aria-labelledby={`capital-horizon-${horizon.id}`}>
      <div className={layout.horizonHeading}>
        <p>{horizon.eyebrow}</p>
        <CapitalAmount amount={horizon.amount}/>
        {showBrainCells ? <strong className={campaign.cellAmount}>{horizonBrainCells(Number(horizon.id) - 1).replace(" Brain Cells", "")}<small>Brain Cells</small></strong> : null}
        <span>{horizon.status}</span>
      </div>
      <div className={layout.horizonCopy}>
        <h3 id={`capital-horizon-${horizon.id}`}>{horizon.title}</h3>
        <p className={layout.horizonSubline}>{horizon.subline}</p>
        <p>{horizon.body}</p>
        <ul>{horizon.uses.map((use) => <li key={use}>{use}</li>)}</ul>
        <p className={layout.horizonStatement}>{horizon.statement}</p>
      </div>
    </article>
  );
}

export function CapitalHorizons({ horizons, qualifier, showBrainCells = false }: { horizons: readonly CapitalHorizon[]; qualifier: string; showBrainCells?: boolean }) {
  const layout = showBrainCells ? campaign : styles;
  const planning = horizons.filter((horizon) => !horizon.featured);
  const mission = horizons.find((horizon) => horizon.featured);
  return (
    <section className={layout.horizons} aria-labelledby="capital-horizons-title">
      <div className={layout.shell}>
        <header className={layout.sectionIntro}>
          <p className={layout.eyebrow}>Capital horizons</p>
          <h2 id="capital-horizons-title">Build capability.<span>Widen the mission.</span></h2>
          <p className={layout.qualifier}>{qualifier}</p>
        </header>
        <div className={layout.horizonOverview}><Image className={layout.sectionArtwork} src={v5ArtworkSrc(v5Artwork.capitalHorizons)} alt={v5Artwork.capitalHorizons.alt} width={v5Artwork.capitalHorizons.width} height={v5Artwork.capitalHorizons.height} sizes={showBrainCells ? "(max-width: 767px) 100vw, (min-width: 1360px) 1320px, calc(100vw - 40px)" : "(max-width: 767px) 124vw, 92vw"} quality={90} data-v5-artwork={v5Artwork.capitalHorizons.number}/></div>
        <div className={layout.planningHorizons}>{planning.map((horizon) => <Horizon horizon={horizon} key={horizon.id} showBrainCells={showBrainCells}/>)}</div>
      </div>
      {mission ? <div className={layout.missionHorizon} id="global-capacity" data-artwork-key="fund-global-capacity"><div className={layout.shell}>{mission.headline ? <h2 className={layout.missionHeadline}>{mission.headline}</h2> : null}<Image className={layout.missionArtwork} src={v5ArtworkSrc(v5Artwork.permanentCapacity)} alt={v5Artwork.permanentCapacity.alt} width={v5Artwork.permanentCapacity.width} height={v5Artwork.permanentCapacity.height} sizes="100vw" quality={90} data-v5-artwork={v5Artwork.permanentCapacity.number}/><Horizon horizon={mission} showBrainCells={showBrainCells}/><p className={layout.missionBoundary}>€1B+ means cumulative long-term mission capacity—not a current raise, valuation, equity round, current budget, single transaction or funding guarantee.</p></div></div> : null}
    </section>
  );
}
