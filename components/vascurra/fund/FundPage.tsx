import Image from "next/image";
import Link from "next/link";
import { fundPage } from "@/content/fund";
import { v5Artwork, v5ArtworkSrc } from "@/content/v5-artwork";
import { CapitalHorizons } from "./CapitalHorizons";
import styles from "./fund-page.module.css";

const CAPABILITY_DOMAINS = [
  { name: "Technology", items: ["Frontier AI access", "Compute", "AI evaluation", "Infrastructure"] },
  { name: "Research", items: ["Research staff", "Evidence review", "Scientists", "Statisticians", "AI researchers"] },
  { name: "Product + engineering", items: ["Engineering", "Product design", "Data architecture", "Validation"] },
  { name: "Trust + governance", items: ["Clinicians", "Legal expertise", "Ethics", "Privacy", "Governance", "Security"] },
] as const;

const SOURCE_GROUPS = [
  { name: "Public + research", items: ["Grants", "Research programmes", "University collaboration"] },
  { name: "Philanthropic", items: ["Founder capital", "Major supporters", "Foundations"] },
  { name: "Technology", items: ["AI access", "Compute credits", "Technical partners"] },
  { name: "Commercial", items: ["Product revenue", "Institutional revenue", "Appropriate licensing"] },
  { name: "Permanent capital", items: ["Endowment-style capacity", "Long-term infrastructure", "Reinvestment"] },
] as const;

function Heading({ eyebrow, title, id }: { eyebrow: string; title: readonly string[]; id: string }) {
  return <header className={styles.sectionIntro}><p className={styles.eyebrow}>{eyebrow}</p><h2 id={id}>{title.map((line, index) => <span className={index === title.length - 1 ? styles.accent : undefined} key={line}>{line}</span>)}</h2></header>;
}

function FundHeroTitle({ title }: { title: readonly string[] }) {
  return (
    <h1>
      <span>Build <span className={styles.accent}>permanent capacity</span>{" "}</span>
      <span>{title[1]}</span>
    </h1>
  );
}

export function FundPage() {
  const page = fundPage;
  const heroArtwork = v5Artwork.fundHero;
  const missionArtwork = v5Artwork.missionCapacity;
  const flywheelArtwork = v5Artwork.capitalFlywheel;
  const productsArtwork = v5Artwork.productsResearch;
  return (
    <main id="main" className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{page.hero.eyebrow}</p>
              <FundHeroTitle title={page.hero.title}/>
              <p className={styles.heroStatement}>{page.hero.statement.map((line) => <span key={line}>{line}</span>)}</p>
              <p className={styles.heroLead}>{page.hero.lead}</p>
              <nav aria-label="Fund introduction"><Link href="/support">Support Vascurra</Link><Link href="#capital-horizons-title">View Fund Model</Link></nav>
              <p className={styles.heroQualifier}>{page.hero.qualifier}</p>
            </div>
            <div className={styles.heroField}>
              <Image className={styles.heroArtwork} src={v5ArtworkSrc(heroArtwork)} alt={heroArtwork.alt} width={heroArtwork.width} height={heroArtwork.height} sizes="(max-width: 1024px) 100vw, 55vw" quality={90} priority data-v5-artwork={heroArtwork.number}/>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.continuous} aria-labelledby="continuous-capital-title"><div className={styles.shell}><Heading eyebrow={page.continuousCapital.eyebrow} title={page.continuousCapital.title} id="continuous-capital-title"/><div className={styles.continuousIntro}>{page.continuousCapital.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className={styles.capabilityField}><p className={styles.capabilitySpine}>Continuous capacity</p>{CAPABILITY_DOMAINS.map((domain) => <section key={domain.name}><h3>{domain.name}</h3><p>{domain.items.join(" · ")}</p></section>)}<p className={styles.outward}>International development <span aria-hidden="true">extends outward</span></p></div><blockquote>{page.continuousCapital.distinction}</blockquote></div></section>

      <section className={styles.mobilisation} aria-labelledby="capital-mobilisation-title"><div className={styles.shell}><div className={styles.mobilisationIntro}><Heading eyebrow={page.mobilisation.eyebrow} title={page.mobilisation.title} id="capital-mobilisation-title"/><p className={styles.sectionLead}>{page.mobilisation.body}</p></div><Image className={styles.sectionArtwork} src={v5ArtworkSrc(missionArtwork)} alt={missionArtwork.alt} width={missionArtwork.width} height={missionArtwork.height} sizes="(max-width: 767px) 124vw, 92vw" quality={90} data-v5-artwork={missionArtwork.number}/><p className={styles.mobilisationExplanation}>{page.mobilisation.explanation}</p><ol className={styles.resourceList}>{page.mobilisation.resources.map((resource) => <li key={resource.name}><h3>{resource.name}</h3><p>{resource.body}</p></li>)}</ol></div></section>

      <CapitalHorizons horizons={page.horizons} qualifier={page.horizonsQualifier}/>

      <section className={styles.flywheelSection} aria-labelledby="capital-flywheel-title"><div className={styles.shell}><Heading eyebrow={page.flywheel.eyebrow} title={page.flywheel.title} id="capital-flywheel-title"/><Image className={styles.sectionArtwork} src={v5ArtworkSrc(flywheelArtwork)} alt={flywheelArtwork.alt} width={flywheelArtwork.width} height={flywheelArtwork.height} sizes="(max-width: 767px) 124vw, 92vw" quality={90} data-v5-artwork={flywheelArtwork.number}/><ol className={styles.flywheelStages}>{page.flywheel.stages.map((stage) => <li key={stage.label}>{stage.label}</li>)}</ol><p className={styles.flywheelSummary}>{page.flywheel.summary}</p><p className={styles.qualifier}>{page.flywheel.note}</p></div></section>

      <section className={styles.sources} aria-labelledby="capital-sources-title"><div className={styles.shell}><Heading eyebrow={page.sources.eyebrow} title={page.sources.title} id="capital-sources-title"/><div className={styles.sourceConstellation}>{SOURCE_GROUPS.map((group)=><section key={group.name}><h3>{group.name}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}<p>Vascurra Mission Capacity</p></div><p className={styles.qualifier}>{page.sources.qualifier}</p><aside className={styles.equityNote}><span>Financing flexibility</span><p>{page.sources.equityNote}</p></aside></div></section>

      <section className={styles.reinvestment} aria-labelledby="reinvestment-title"><div className={styles.shell}><Heading eyebrow={page.reinvestment.eyebrow} title={page.reinvestment.title} id="reinvestment-title"/><p className={styles.sectionLead}>{page.reinvestment.body}</p><Image className={styles.reinvestmentArtwork} src={v5ArtworkSrc(productsArtwork)} alt={productsArtwork.alt} width={productsArtwork.width} height={productsArtwork.height} sizes="(max-width: 767px) 124vw, 92vw" quality={90} data-v5-artwork={productsArtwork.number}/><ol className={styles.reinvestmentLoop}>{page.reinvestment.flow.map((item, index) => <li key={item}>{item}{index === page.reinvestment.flow.length - 1 ? <span aria-hidden="true">↺</span> : <span aria-hidden="true">→</span>}</li>)}</ol><ul className={styles.reinvestmentPriorities}>{page.reinvestment.priorities.map((item) => <li key={item}>{item}</li>)}</ul><p className={styles.qualifier}>{page.reinvestment.note}</p></div></section>

      <section className={styles.transparency} aria-labelledby="transparency-title"><div className={styles.shell}><Heading eyebrow={page.transparency.eyebrow} title={page.transparency.title} id="transparency-title"/><p className={styles.transparencyPrinciple}>{page.transparency.principle}</p><div className={styles.ledgerGrid}>{page.transparency.items.map((item) => <p key={item}>{item}</p>)}</div><p className={styles.qualifier}>{page.transparency.note}</p></div></section>

      <section className={styles.close} aria-labelledby="fund-close-title"><div className={styles.shell}><p className={styles.eyebrow}>{page.closing.eyebrow}</p><h2 id="fund-close-title">{page.closing.title.map((line) => <span key={line}>{line}</span>)}</h2><p>{page.closing.body}</p><nav aria-label="Support the mission">{page.closing.ctas.map((cta, index) => <Link className={index === 1 ? styles.secondaryCta : undefined} href={cta.href} key={cta.href}>{cta.label}</Link>)}</nav></div></section>
    </main>
  );
}
