import Image from "next/image";
import Link from "next/link";
import { fundPage } from "@/content/fund";
import { FundTransparencyVisual } from "@/components/vascurra/strategic/StrategicVisuals";
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
  { name: "Public + research", items: ["Grants", "Government + EU programmes", "Research funding", "University + research collaboration", "Healthcare collaboration"] },
  { name: "Philanthropic", items: ["Philanthropy", "Major supporters", "Foundations"] },
  { name: "Technology + infrastructure", items: ["AI + compute contributions", "Technical partners", "In-kind expertise"] },
  { name: "Commercial", items: ["Founder capital", "Commercial revenue", "Institutional revenue", "Licensing — where appropriate", "Corporate support"] },
  { name: "Long-term", items: ["Permanent / endowment-style capital — longer term"] },
] as const;

function Heading({ eyebrow, title, id }: { eyebrow: string; title: readonly string[]; id: string }) {
  return <header className={styles.sectionIntro}><p className={styles.eyebrow}>{eyebrow}</p><h2 id={id}>{title.map((line, index) => <span className={index === title.length - 1 ? styles.accent : undefined} key={line}>{line}</span>)}</h2></header>;
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
              <h1>{page.hero.title.map((line, index) => <span className={index === 1 ? styles.accent : undefined} key={line}>{line}</span>)}</h1>
              <p className={styles.heroLead}>{page.hero.lead}</p>
              <p className={styles.heroQualifier}>{page.hero.qualifier}</p>
              <nav aria-label="Fund introduction"><Link href="#capital-horizons-title">Explore the horizons</Link><Link href="#capital-flywheel-title">See the flywheel</Link></nav>
            </div>
            <div className={styles.heroField}>
              <p className={styles.heroStatement}>{page.hero.statement.map((line, index) => <span className={index === 2 ? styles.accent : undefined} key={line}>{line}</span>)}</p>
              <Image className={styles.heroArtwork} src={v5ArtworkSrc(heroArtwork)} alt={heroArtwork.alt} width={heroArtwork.width} height={heroArtwork.height} sizes="(max-width: 1024px) 100vw, 55vw" quality={90} priority data-v5-artwork={heroArtwork.number}/>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.continuous} aria-labelledby="continuous-capital-title"><div className={styles.shell}><Heading eyebrow={page.continuousCapital.eyebrow} title={page.continuousCapital.title} id="continuous-capital-title"/><div className={styles.continuousIntro}>{page.continuousCapital.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className={styles.capabilityField}><div className={styles.capabilitySpine} aria-hidden="true"/>{CAPABILITY_DOMAINS.map((domain, index) => <section key={domain.name}><span>{String(index+1).padStart(2,"0")}</span><h3>{domain.name}</h3><p>{domain.items.join(" · ")}</p></section>)}<p className={styles.outward}>International development <span aria-hidden="true">→</span></p></div><blockquote>{page.continuousCapital.distinction}</blockquote></div></section>

      <section className={styles.mobilisation} aria-labelledby="capital-mobilisation-title"><div className={styles.shell}><div className={styles.mobilisationIntro}><Heading eyebrow={page.mobilisation.eyebrow} title={page.mobilisation.title} id="capital-mobilisation-title"/><p className={styles.sectionLead}>{page.mobilisation.body}</p></div><Image className={styles.sectionArtwork} src={v5ArtworkSrc(missionArtwork)} alt={missionArtwork.alt} width={missionArtwork.width} height={missionArtwork.height} sizes="(max-width: 767px) 124vw, 92vw" quality={90} data-v5-artwork={missionArtwork.number}/><p className={styles.mobilisationExplanation}>{page.mobilisation.explanation}</p><ol className={styles.resourceList}>{page.mobilisation.resources.map((resource, index) => <li key={resource.name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{resource.name}</h3><p>{resource.body}</p></div></li>)}</ol></div></section>

      <CapitalHorizons horizons={page.horizons} qualifier={page.horizonsQualifier}/>

      <section className={styles.flywheelSection} aria-labelledby="capital-flywheel-title"><div className={styles.shell}><Heading eyebrow={page.flywheel.eyebrow} title={page.flywheel.title} id="capital-flywheel-title"/><Image className={styles.sectionArtwork} src={v5ArtworkSrc(flywheelArtwork)} alt={flywheelArtwork.alt} width={flywheelArtwork.width} height={flywheelArtwork.height} sizes="(max-width: 767px) 124vw, 92vw" quality={90} data-v5-artwork={flywheelArtwork.number}/><ol className={styles.flywheelStages}>{page.flywheel.stages.map((stage, index) => <li key={stage.label}><span>{String(index + 1).padStart(2, "0")}</span><h3>{stage.label}</h3><p>{stage.items.join(" · ")}</p></li>)}</ol><p className={styles.qualifier}>{page.flywheel.note}</p></div></section>

      <section className={styles.sources} aria-labelledby="capital-sources-title"><div className={styles.shell}><Heading eyebrow={page.sources.eyebrow} title={page.sources.title} id="capital-sources-title"/><div className={styles.sourceConstellation}>{SOURCE_GROUPS.map((group,index)=><section key={group.name}><span>{String(index+1).padStart(2,"0")}</span><h3>{group.name}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></section>)}</div><p className={styles.qualifier}>{page.sources.qualifier}</p><aside className={styles.equityNote}><span>Financing flexibility</span><p>{page.sources.equityNote}</p></aside></div></section>

      <section className={styles.reinvestment} aria-labelledby="reinvestment-title"><div className={styles.shell}><div className={styles.reinvestmentGrid}><div><Heading eyebrow={page.reinvestment.eyebrow} title={page.reinvestment.title} id="reinvestment-title"/><p className={styles.sectionLead}>{page.reinvestment.body}</p></div><Image className={styles.reinvestmentArtwork} src={v5ArtworkSrc(productsArtwork)} alt={productsArtwork.alt} width={productsArtwork.width} height={productsArtwork.height} sizes="(max-width: 767px) 124vw, 92vw" quality={90} data-v5-artwork={productsArtwork.number}/></div><ol className={styles.reinvestmentFlow}>{page.reinvestment.flow.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol><ul className={styles.reinvestmentPriorities}>{page.reinvestment.priorities.map((item) => <li key={item}>{item}</li>)}</ul><p className={styles.qualifier}>{page.reinvestment.note}</p></div></section>

      <section className={styles.transparency} aria-labelledby="transparency-title"><div className={styles.shell}><Heading eyebrow={page.transparency.eyebrow} title={page.transparency.title} id="transparency-title"/><p className={styles.transparencyPrinciple}>{page.transparency.principle}</p><div className={styles.transparencyModel}><FundTransparencyVisual items={page.transparency.items}/></div><p className={styles.qualifier}>{page.transparency.note}</p></div></section>

      <section className={styles.close} aria-labelledby="fund-close-title"><div className={styles.shell}><div className={styles.closeGrid}><div><p className={styles.eyebrow}>{page.closing.eyebrow}</p><h2 id="fund-close-title">{page.closing.title.map((line) => <span key={line}>{line}</span>)}</h2><p>{page.closing.body}</p><nav aria-label="Support the mission">{page.closing.ctas.map((cta, index) => <Link className={index === 1 ? styles.secondaryCta : undefined} href={cta.href} key={cta.href}>{cta.label}</Link>)}</nav></div><figure className={styles.closeVisual}><figcaption className={styles.srOnly}>One question expands through research and capability into a wider field of knowledge.</figcaption><svg viewBox="0 0 700 520" aria-hidden="true"><defs><linearGradient id="closing-flow" x1="0" x2="1"><stop stopColor="#43d6ff"/><stop offset=".52" stopColor="#2ecfc4"/><stop offset="1" stopColor="#58d39a"/></linearGradient></defs><path d="M45 265 C175 40 315 455 445 250 S590 95 665 250"/><path d="M160 340 C305 210 435 390 640 315"/>{[[90,220],[250,300],[390,320],[505,175],[620,290]].map(([cx,cy])=><circle cx={cx} cy={cy} r="7" key={`${cx}-${cy}`}/>)}</svg><span>One question</span><strong>Wider research capacity</strong></figure></div></div></section>
    </main>
  );
}
