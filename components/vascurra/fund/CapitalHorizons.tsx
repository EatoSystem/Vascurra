import type { CapitalHorizon } from "@/content/fund";
import { FundHorizons } from "@/components/vascurra/strategic/StrategicVisuals";
import styles from "./fund-page.module.css";

function Horizon({ horizon }: { horizon: CapitalHorizon }) {
  return (
    <article className={styles.horizon} aria-labelledby={`capital-horizon-${horizon.id}`}>
      <div className={styles.horizonHeading}>
        <p>{horizon.eyebrow}</p>
        <strong>{horizon.amount}</strong>
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
        <div className={styles.horizonOverview}><FundHorizons horizons={horizons}/></div>
        <div className={styles.planningHorizons}>{planning.map((horizon) => <Horizon horizon={horizon} key={horizon.id}/>)}</div>
      </div>
      {mission ? <div className={styles.missionHorizon} id="global-capacity" data-artwork-key="fund-global-capacity"><div className={styles.shell}>{mission.headline ? <h2 className={styles.missionHeadline}>{mission.headline}</h2> : null}<Horizon horizon={mission}/><p className={styles.missionBoundary}>€1B+ means cumulative long-term mission capacity—not a current raise, valuation, equity round, current budget, single transaction or funding guarantee.</p></div></div> : null}
    </section>
  );
}
