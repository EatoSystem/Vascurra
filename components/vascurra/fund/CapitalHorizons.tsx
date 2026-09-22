import type { CapitalHorizon } from "@/content/fund";
import { FundHorizons } from "@/components/vascurra/strategic/StrategicVisuals";
import { CapitalAmount } from "@/components/vascurra/capital/CapitalAmount";
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
        <div className={styles.horizonOverview}><FundHorizons horizons={horizons}/></div>
        <div className={styles.planningHorizons}>{planning.map((horizon) => <Horizon horizon={horizon} key={horizon.id}/>)}</div>
      </div>
      {mission ? <div className={styles.missionHorizon} id="global-capacity" data-artwork-key="fund-global-capacity"><div className={styles.shell}>{mission.headline ? <h2 className={styles.missionHeadline}>{mission.headline}</h2> : null}<div className={styles.globalField} aria-hidden="true"><svg viewBox="0 0 1200 540"><defs><linearGradient id="global-capacity-flow" x1="0" x2="1"><stop stopColor="#43d6ff"/><stop offset=".52" stopColor="#2ecfc4"/><stop offset="1" stopColor="#58d39a"/></linearGradient></defs><path d="M40 300 C220 80 345 455 520 260 S865 40 1160 270"/><path d="M90 390 C280 245 440 430 630 305 S950 180 1140 360"/>{[[180,210],[420,335],[575,245],[760,170],[910,245],[1080,285]].map(([cx,cy])=><circle cx={cx} cy={cy} r="7" key={`${cx}-${cy}`}/>)}</svg><span>Research</span><span>Compute</span><span>Institutions</span><span>Products</span><span>Open knowledge</span></div><Horizon horizon={mission}/><p className={styles.missionBoundary}>€1B+ means cumulative long-term mission capacity—not a current raise, valuation, equity round, current budget, single transaction or funding guarantee.</p></div></div> : null}
    </section>
  );
}
