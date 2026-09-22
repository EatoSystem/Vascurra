import Link from "next/link";
import { fundPage } from "@/content/fund";
import { FundAllocationVisual, FundFlywheel, FundHeroVisual, FundTransparencyVisual } from "@/components/vascurra/strategic/StrategicVisuals";
import { CapitalHorizons } from "./CapitalHorizons";
import { ReinvestmentVisual } from "./FundVisuals";
import styles from "./fund-page.module.css";

function Heading({ eyebrow, title, id }: { eyebrow: string; title: readonly string[]; id: string }) {
  return <header className={styles.sectionIntro}><p className={styles.eyebrow}>{eyebrow}</p><h2 id={id}>{title.map((line, index) => <span className={index === title.length - 1 ? styles.accent : undefined} key={line}>{line}</span>)}</h2></header>;
}

export function FundPage() {
  const page = fundPage;
  return (
    <main id="main" className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{page.hero.eyebrow}</p>
              <h1>{page.hero.title.map((line, index) => <span className={index === 1 ? styles.accent : undefined} key={line}>{line}</span>)}</h1>
              <p className={styles.heroLead}>{page.hero.lead}</p>
              <p className={styles.heroQualifier}>{page.hero.qualifier}</p>
              <nav aria-label="Fund introduction"><Link href="#capital-horizons-title">Explore the horizons</Link><Link href="#capital-flywheel-title">See the flywheel</Link></nav>
            </div>
            <div><p className={styles.heroStatement}>{page.hero.statement.map((line) => <span key={line}>{line}</span>)}</p><FundHeroVisual/></div>
          </div>
        </div>
      </header>

      <section className={styles.continuous} aria-labelledby="continuous-capital-title"><div className={styles.shell}><Heading eyebrow={page.continuousCapital.eyebrow} title={page.continuousCapital.title} id="continuous-capital-title"/><div className={styles.continuousGrid}><div>{page.continuousCapital.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><ul>{page.continuousCapital.requirements.map((item) => <li key={item}>{item}</li>)}</ul></div><blockquote>{page.continuousCapital.distinction}</blockquote></div></section>

      <section className={styles.mobilisation} aria-labelledby="capital-mobilisation-title"><div className={styles.shell}><Heading eyebrow={page.mobilisation.eyebrow} title={page.mobilisation.title} id="capital-mobilisation-title"/><p className={styles.sectionLead}>{page.mobilisation.body}</p><p className={styles.mobilisationExplanation}>{page.mobilisation.explanation}</p><div className={styles.allocationModel}><FundAllocationVisual items={page.mobilisation.resources.map((resource) => ({ title: resource.name, body: resource.body }))}/></div></div></section>

      <CapitalHorizons horizons={page.horizons} qualifier={page.horizonsQualifier}/>

      <section className={styles.flywheelSection} aria-labelledby="capital-flywheel-title"><div className={styles.shell}><Heading eyebrow={page.flywheel.eyebrow} title={page.flywheel.title} id="capital-flywheel-title"/><div className={styles.flywheelModel}><FundFlywheel stages={page.flywheel.stages}/></div><p className={styles.qualifier}>{page.flywheel.note}</p></div></section>

      <section className={styles.sources} aria-labelledby="capital-sources-title"><div className={styles.shell}><Heading eyebrow={page.sources.eyebrow} title={page.sources.title} id="capital-sources-title"/><div className={styles.sourceField}><ul>{page.sources.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></div><p className={styles.qualifier}>{page.sources.qualifier}</p><aside className={styles.equityNote}><span>Financing flexibility</span><p>{page.sources.equityNote}</p></aside></div></section>

      <section className={styles.reinvestment} aria-labelledby="reinvestment-title"><div className={styles.shell}><div className={styles.reinvestmentGrid}><div><Heading eyebrow={page.reinvestment.eyebrow} title={page.reinvestment.title} id="reinvestment-title"/><p className={styles.sectionLead}>{page.reinvestment.body}</p><ul className={styles.reinvestmentPriorities}>{page.reinvestment.priorities.map((item) => <li key={item}>{item}</li>)}</ul></div><ReinvestmentVisual flow={page.reinvestment.flow}/></div><p className={styles.qualifier}>{page.reinvestment.note}</p></div></section>

      <section className={styles.transparency} aria-labelledby="transparency-title"><div className={styles.shell}><Heading eyebrow={page.transparency.eyebrow} title={page.transparency.title} id="transparency-title"/><p className={styles.transparencyPrinciple}>{page.transparency.principle}</p><div className={styles.transparencyModel}><FundTransparencyVisual items={page.transparency.items}/></div><p className={styles.qualifier}>{page.transparency.note}</p></div></section>

      <section className={styles.close} aria-labelledby="fund-close-title"><div className={styles.shell}><p className={styles.eyebrow}>{page.closing.eyebrow}</p><h2 id="fund-close-title">{page.closing.title.map((line) => <span key={line}>{line}</span>)}</h2><p>{page.closing.body}</p><nav aria-label="Support the mission">{page.closing.ctas.map((cta, index) => <Link className={index === 1 ? styles.secondaryCta : undefined} href={cta.href} key={cta.href}>{cta.label}</Link>)}</nav></div></section>
    </main>
  );
}
