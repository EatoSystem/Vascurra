import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";
import { CapitalHorizons } from "@/components/vascurra/fund/CapitalHorizons";
import { VascurraGradientText } from "@/components/vascurra/home/gradient-text";
import { fundPage } from "@/content/fund";
import { v5Artwork, v5ArtworkSrc } from "@/content/v5-artwork";
import {
  brainCellMissionTitle, brainCellSources, businessScales, ultimateBrainCellTarget,
  formatMissionEuro, formatScale, brainCellUnitCents, missionFlow, participationScales,
  ultimateCapitalTargetCents,
} from "@/content/brain-cells";
import { BrainCellDestination, BrainCellEquation, BrainCellHero } from "./BrainCellMission";
import styles from "./brain-cells.module.css";

function Chapter({ id, eyebrow, title, children, tone = "", titleClass }: {
  id: string; eyebrow: string; title: ReactNode; children: ReactNode; tone?: string; titleClass?: string;
}) {
  return <section id={id} aria-labelledby={`${id}-title`} className={`${styles.chapter} ${tone}`}>
    <p className={styles.eyebrow}>{eyebrow}</p><h2 id={`${id}-title`} className={titleClass}>{title}</h2>{children}
  </section>;
}

function Scale({ values, business = false }: { values: readonly number[]; business?: boolean }) {
  const sizes = [2, 3, 4.5, 6.5, 9, 13, 17, 22];
  const spaces = [1, 1.5, 2, 3, 4, 6, 7, 9];
  const widths = [30, 36, 44, 54, 64, 76, 88, 100];
  return <ol className={`${styles.scale} ${business ? styles.businessScale : ""}`}>
    {values.map((value, index) => <li key={value} style={{
      "--scale-size": `${sizes[index]}rem`, "--scale-space": `${spaces[index]}rem`,
      "--scale-width": `${widths[index]}%`, "--scale-weight": 450 + index * 25,
    } as CSSProperties}>
      <span><strong className={styles.scaleNumber} aria-hidden="true"><span className={!business && index === values.length - 1 ? "text-gradient" : undefined}>{value >= 1_000 && value < 1_000_000 ? `${value / 1_000}K` : formatScale(value)}</span></strong><span className={styles.scaleUnit} aria-hidden="true">Brain {value === 1 ? "Cell" : "Cells"}</span></span>
      <span className={styles.scaleMoney} aria-hidden="true">{formatMissionEuro(value * brainCellUnitCents)}</span>
      <span className={styles.srOnly}>{value.toLocaleString("en-IE")} Brain {value === 1 ? "Cell" : "Cells"}, {new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(value * brainCellUnitCents / 100)} symbolic mission value.</span>
    </li>)}
  </ol>;
}

export function BrainCellPage() {
  return <main id="main" className={styles.page}>
    <header className={styles.chapter}><BrainCellHero /></header>

    <section id="why-100-billion" aria-labelledby="why-100-billion-title" className={`${styles.chapter} ${styles.numberChapter}`}>
      <p className={styles.eyebrow}>The human brain</p>
      <div className={styles.numberLayout}>
        <h2 id="why-100-billion-title" className={styles.neuronTitle} aria-label="Approximately 86 billion neurons">
          <span className={styles.giantNumber} aria-hidden="true">≈86</span><span className={styles.numberLabel} aria-hidden="true">Billion<br />neurons.</span>
        </h2>
        <div className={styles.narrowCopy}>
          <p className={styles.lead}>One extraordinary system.</p>
          <p>A widely cited study estimated an average of approximately 86 billion neurons in the adult human brain. This is an estimate, not an exact count for every person. Neurons are not the brain’s only cells.</p>
          <p><a href={brainCellSources[0].href}>Read the original cell-count study</a></p>
          <p>The campaign target is symbolic. It does not describe the biological cell count of a human brain.</p>
        </div>
      </div>
    </section>

    <Chapter id="vascular-health" eyebrow="The challenge" title="When blood flow changes, the brain can change." tone={`${styles.mist} ${styles.flowChapter}`}>
      <p>Brain tissue needs oxygen and nutrients supplied by blood. Reduced blood flow can damage tissue and contribute to vascular dementia.</p>
      <p>Vascular dementia currently has no cure. Treatment and support still matter: care can address underlying causes and help people manage the condition.</p>
      <p className={styles.note}>Sources: <a href={brainCellSources[1].href}>NHS causes</a> and <a href={brainCellSources[2].href}>NHS treatment guidance</a>. This website does not provide medical advice.</p>
      <Image className={styles.flowArtwork} src="/vascurra/homepage/candidates/emerald_ribbons_towards_dawn.webp" width={1672} height={941} sizes="100vw" alt="" />
    </Chapter>

    <section id="why-now" aria-labelledby="why-now-title" className={styles.chapter}>
      <p className={styles.eyebrow}>Why investigate now</p>
      <div className={styles.researchLayout}>
        <div><h2 id="why-now-title" className={styles.researchTitle} aria-label="A new generation of research tools."><span>A new</span><span>generation</span><span>of research</span><span>tools.</span></h2>
          <p>Vascurra proposes exploring AI, compute, evidence review and carefully governed research systems as tools for asking and testing better questions.</p>
          <p>Access to tools is not evidence of clinical effectiveness. Each research use would need appropriate evaluation, expertise and governance. No AI system guarantees prevention, treatment or a cure.</p>
        </div>
        <ul className={styles.researchWords} aria-label="Proposed research tools"><li>AI.</li><li>Compute.</li><li>Evidence.</li><li>Expertise.</li></ul>
      </div>
    </section>

    <Chapter id="mission" eyebrow="One person → one system → a wider mission" title={<><span>Build the</span><VascurraGradientText luminous>capability.</VascurraGradientText></>} tone={styles.dark} titleClass={styles.capabilityTitle}>
      <p className={styles.lead}>To investigate a different future.</p>
      <div className={styles.capabilityBody}>
        <p>Patient 0 is the proposed starting point for careful co-design. The longer-term ambition is a system that can develop useful tools, support responsible investigation and make knowledge more accessible.</p>
        <p>Research questions may concern better support, changes over time and future approaches to prevention and treatment. These are ambitions for investigation, not capabilities delivered by Vascurra today.</p>
      </div>
    </Chapter>

    <Chapter id="symbolic-unit" eyebrow="The participation language" title="One symbolic unit. A global ambition.">
      <BrainCellEquation />
      <p>A Vascurra Brain Cell is a proposed symbolic unit of participation in building the mission. It is not a biological cell, ownership right, equity, an investment security or a promise of financial return or medical outcomes.</p>
      <Scale values={participationScales} />
      <p className={styles.note}>These are conceptual mission equivalents, not checkout offers. Future transaction prices and tax treatment require a separate decision.</p>
    </Chapter>

    <CapitalHorizons horizons={fundPage.horizons} qualifier={fundPage.horizonsQualifier} showBrainCells />
    <section className={`${styles.chapter} ${styles.mist} ${styles.destinationChapter}`} aria-label="Long-term destination"><BrainCellDestination expansive /></section>

    <Chapter id="participation" eyebrow="Different people, same mission" title={<>Different scale.<br />Same mission.</>} tone={styles.participationChapter}>
      <p>Participation pathways are proposed. No purchase programme, supporter entitlement or partnership benefit is established by this page.</p>
      <div className={styles.grid}>{[
        ["One person", "Explore the mission and the future possibility of personal participation."],
        ["One family", "Consider supporting a shared purpose without sharing private health information."],
        ["One business", "Discuss potential contributions to technology, expertise or research capacity."],
        ["One institution", "Explore separately governed collaboration, infrastructure and expertise."],
        ["Global partners", "Discuss the long-term ambition for international capacity."],
      ].map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div>
      <div className={styles.actions}><CtaLink href="/contact">Discuss participation</CtaLink><CtaLink href="/fund" variant="secondary">Explore the capital philosophy</CtaLink></div>
    </Chapter>

    <section id="dedication" aria-labelledby="dedication-title" className={`${styles.chapter} ${styles.humanChapter}`}>
      <div className={styles.dedicationLayout}>
        <div><p className={styles.eyebrow}>For someone</p><h2 id="dedication-title"><span>For someone<br />you love now.</span><span>For someone<br />you may never<br />meet.</span></h2>
          <p>A future participation experience could allow a dedication to someone important to you, or to the future. Dedications are not collected here, and no purchase or personal dedication record is created.</p>
        </div>
        <Image className={styles.dedicationArtwork} src="/vascurra/v2/section-02-origin-illustration.webp" alt="" width={720} height={696} sizes="(max-width: 767px) 94vw, 45vw" />
      </div>
    </section>

    <Chapter id="business" eyebrow="Businesses and institutions" title={<>Build research<br />capacity at scale.</>} tone={styles.businessChapter}>
      <Scale values={businessScales} business />
      <p>Capital is one possible contribution. Compute, expertise, infrastructure and responsibly agreed collaboration could also help create capacity. These examples confer no benefits, investment rights or tax relief.</p>
    </Chapter>

    <Chapter id="transparency" eyebrow="Transparency" title="Know what the mission is building." tone={`${styles.mist} ${styles.transparencyChapter}`}>
      <p>Future reporting should distinguish capital received from symbolic participation, and plans from capability actually built.</p>
      <ul className={styles.transparencyList}><li>Capital received and its use</li><li>Current planning horizon and capability delivered</li><li>Governed research programmes and questions under investigation</li><li>Published outputs, products and confirmed partnerships</li></ul>
      <p className={styles.note}>This is a proposed reporting model. No live totals or activity metrics are presented.</p>
    </Chapter>

    <Chapter id="reinvestment" eyebrow="The commercial flywheel" title={<>Build capacity.<br />Create knowledge.<br />Reinvest. Repeat.</>} tone={styles.reinvestmentChapter}>
      <Image className={styles.flywheelArtwork} src={v5ArtworkSrc(v5Artwork.capitalFlywheel)} alt={v5Artwork.capitalFlywheel.alt} width={v5Artwork.capitalFlywheel.width} height={v5Artwork.capitalFlywheel.height} sizes="(min-width: 1440px) 1320px, 94vw" quality={90} />
      <ol className={styles.flow}>{missionFlow.map(stage => <li key={stage}>{stage}</li>)}</ol>
      <p>Vascurra intends to explore products and services that could generate revenue and support further research. This is a proposed commercial model, not an established revenue stream or a guaranteed self-sustaining system.</p>
      <p>Commercial activity, research and any future philanthropic structures would require clearly defined governance and responsibilities.</p>
    </Chapter>

    <Chapter id="permanent-capacity" eyebrow="Many sources of capacity" title={<><span>Continuous<br />research </span><span className={styles.needs}>needs </span><VascurraGradientText luminous>continuous<br />capacity.</VascurraGradientText></>} tone={`${styles.dark} ${styles.continuousChapter}`} titleClass={styles.continuousTitle}>
      <ul className={styles.capacityWords} aria-label="Sources of lasting capacity">{["People", "Compute", "Research", "Software", "Clinical expertise", "Infrastructure", "Partnerships", "Products"].map(word => <li key={word}>{word}</li>)}</ul>
      <div className={styles.capabilityBody}>
        <div><p>Capacity is bigger than cash alone. It includes people, compute, research systems, product development, knowledge infrastructure and appropriately governed clinical collaboration.</p>
          <p>Potential sources include commercial revenue, grants, institutional collaboration, philanthropy, technical contributions and expertise. None is presented as secured.</p>
        </div>
        <div><p>The long-term ambition concerns cumulative capacity over time, rather than a balance sitting in a bank account.</p>
          <blockquote><p>The work may be continuous. The person should never become an object of continuous surveillance.</p></blockquote>
          <p>Participation in research, and any use of personal information, would require separate consent and governance. This campaign collects no health information.</p>
        </div>
      </div>
    </Chapter>

    <section id="full-mission" aria-labelledby="full-mission-title" className={`${styles.chapter} ${styles.dark} ${styles.final}`}>
      <p className={styles.eyebrow}>The full long-term mission</p>
      <h2 id="full-mission-title" className={styles.finalTitle} aria-label={brainCellMissionTitle}><span className={styles.finalNumber}>{ultimateBrainCellTarget / 1_000_000_000}</span><span className={styles.finalBillion}>Billion</span><VascurraGradientText luminous>Brain Cells.</VascurraGradientText></h2>
      <div className={styles.finalAmount}>{formatMissionEuro(ultimateCapitalTargetCents)}</div>
      <p className={styles.humanLine}>For the people we love now.<br />For all of us in the future.</p>
      <p className={styles.note}>The ambition is lasting capability. Outcomes remain uncertain; evidence must come before claims.</p>
      <nav className={styles.actions} aria-label="Explore the mission"><CtaLink href="#participation" variant="onDeep">Explore participation</CtaLink><CtaLink href="/preview" variant="onDeepGhost">Explore Vascurra</CtaLink></nav>
    </section>
  </main>;
}
