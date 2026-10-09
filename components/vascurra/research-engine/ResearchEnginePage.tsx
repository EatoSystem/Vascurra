import Image from "next/image";
import { researchEngine, researchHorizons, researchProgrammes, longTermProgrammes, researchMission, researchSources, type ResearchProgramme, type ResearchHorizon } from "@/content/research-engine";
import { brainCellMissionTitle } from "@/content/brain-cells";
import { v5Artwork, v5ArtworkSrc, type V5Artwork } from "@/content/v5-artwork";
import { v4Artwork } from "@/components/vascurra/home/v4-artwork-slot";
import { VascurraGradientText } from "@/components/vascurra/home/gradient-text";
import { CapitalAmount } from "@/components/vascurra/capital/CapitalAmount";
import { CtaLink } from "@/components/ui/CtaLink";
import styles from "./research-engine.module.css";

const page = researchEngine;
const columnArtworkSizes = "(min-width: 1440px) 620px, (min-width: 768px) calc(50vw - 48px), calc(100vw - 32px)";

function Lines({ lines }: { lines: readonly string[] }) {
  return <>{lines.map((line) => <span key={line}>{line}</span>)}</>;
}

function TextList({ items }: { items: readonly string[] }) {
  return <ul className={styles.textList}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function Sequence({ steps }: { steps: readonly string[] }) {
  return <ol className={styles.sequence}>{steps.map((step) => <li key={step}>{step}</li>)}</ol>;
}

function Artwork({ asset, priority = false, sizes = "(min-width: 1440px) 1376px, calc(100vw - 32px)" }: { asset: V5Artwork; priority?: boolean; sizes?: string }) {
  return <figure className={styles.artwork} data-v5-artwork={asset.filename}>
    <Image src={v5ArtworkSrc(asset)} alt={asset.alt} width={asset.width} height={asset.height}
      sizes={sizes} quality={90} priority={priority} />
  </figure>;
}

function Programme({ programme }: { programme: ResearchProgramme }) {
  if (programme.status === "Proposed research capability") {
    return <details className={styles.enabler} id={`programme-${programme.id}`}>
      <summary><span className={styles.status}>{programme.status}</span><strong>{programme.name}</strong></summary>
      <div className={styles.programmeDetails}><p>{programme.description}</p><p className={styles.boundary}>{programme.boundary}</p>
        {programme.domains.length ? <><h3>Potential research scope</h3><p>{programme.domains.join(" · ")}</p></> : null}
        {programme.aiRoles.length ? <><h3>Proposed AI assistance</h3><TextList items={programme.aiRoles} /></> : null}
        <h3>Human expertise required</h3><p>{programme.humanExpertise.join(" · ")}</p>
      </div>
    </details>;
  }
  const featured = ["atlas", "prevention", "cure-programme"].includes(programme.id);
  return <article className={`${styles.programme} ${featured ? styles.programmeFeature : ""}`} id={`programme-${programme.id}`} aria-labelledby={`programme-title-${programme.id}`}>
    <header><span className={styles.status}>{programme.status}</span><p className={styles.programmeName}>{programme.name}</p><h3 id={`programme-title-${programme.id}`}>{programme.headline}</h3></header>
    <div className={styles.programmeBody}>
      <p>{programme.description}</p>
      {programme.question ? <p className={styles.question}>{programme.question}</p> : null}
      <p className={styles.boundary}>{programme.boundary}</p>
      <details><summary>Research scope and responsibilities</summary><div className={styles.programmeDetails}>
        {programme.domains.length ? <><h4>Potential research domains</h4><p>{programme.domains.join(" · ")}</p></> : null}
        {programme.aiRoles.length ? <><h4>Proposed AI assistance</h4><TextList items={programme.aiRoles} /></> : null}
        {programme.humanExpertise.length ? <><h4>Human expertise required</h4><p>{programme.humanExpertise.join(" · ")}</p></> : null}
      </div></details>
    </div>
  </article>;
}

function Horizon({ horizon }: { horizon: ResearchHorizon }) {
  return <section id={horizon.id === "01" ? "capital-horizons" : `horizon-${horizon.id}`} className={`${styles.chapter} ${horizon.id === "04" ? styles.deep : ""}`} aria-labelledby={`horizon-title-${horizon.id}`}>
    <div className={styles.shell}>
      <header className={styles.horizonHeader}><div><p className={styles.eyebrow}>Capital horizon {horizon.id}</p><CapitalAmount amount={horizon.amount} className={styles.amount} /><p className={styles.cells}>{horizon.brainCells}</p><span className={styles.status}>{horizon.status}</span></div>
        <div><h2 id={`horizon-title-${horizon.id}`}>{horizon.title}</h2><p className={styles.lead}>{horizon.descriptor}</p><p className={styles.boundary}>{horizon.capabilityLine}</p></div>
      </header>
      {horizon.id === "04" ? <div className={styles.flowImage}><Artwork asset={v5Artwork.permanentCapacity} /></div> : null}
      <div className={styles.programmeList} id={horizon.id === "01" ? "programmes" : undefined}>
        {horizon.id === "01" ? <p className={styles.boundary}>{page.programmes.boundary}</p> : null}
        {horizon.programmeIds.filter((id) => id !== "common-data-model").map((id) => <Programme key={id} programme={researchProgrammes[id]} />)}
      </div>
    </div>
  </section>;
}

export function ResearchEnginePage() {
  return <main id="main" className={styles.page}>
    <section className={`${styles.chapter} ${styles.hero}`} aria-labelledby="research-engine-title"><div className={styles.shell}>
      <div className={styles.heroGrid}><div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{page.hero.eyebrow}</p><h1 id="research-engine-title"><Lines lines={page.hero.title} /></h1>
        <p className={styles.lead}>{page.hero.lead}</p><p>{page.hero.aiLead}</p><p className={styles.boundary}><strong>{page.hero.status}.</strong> {page.hero.boundary}</p>
        <nav className={styles.actions} aria-label="Research Engine introduction"><CtaLink href="#programmes">Explore the programmes</CtaLink><CtaLink href="#capital-horizons" variant="secondary">Capital horizons</CtaLink></nav>
      </div><Artwork asset={v5Artwork.capitalNetwork} priority sizes="(min-width: 1440px) 620px, (min-width: 1024px) 42vw, (min-width: 768px) 672px, calc(100vw - 32px)" /></div>
      <nav className={styles.chapterNav} aria-label="Research Engine chapters"><a href="#ai-purpose">AI and human judgement</a><a href="#research-loop">The research loop</a><a href="#capital-horizons">Capital horizons</a><a href="#full-mission">The full mission</a><a href="#human-expertise">Human expertise</a><a href="#research-principles">Research principles</a></nav>
    </div></section>

    <section className={styles.chapter} aria-labelledby="capital-capability-title"><div className={`${styles.shell} ${styles.split}`}>
      <div className={styles.sectionCopy}><p className={styles.eyebrow}>Capital → capability</p><h2 id="capital-capability-title">{page.capital.title}</h2><p className={styles.lead}>{page.capital.body}</p></div>
      <div><p className={styles.eyebrow}>What financial capital could build</p><ul className={styles.capitalItems}>{page.capital.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </div></section>

    <section id="ai-purpose" className={styles.chapter} aria-labelledby="ai-purpose-title"><div className={styles.shell}>
      <div className={styles.sectionCopy}><p className={styles.eyebrow}>The proposed AI role</p><h2 id="ai-purpose-title"><Lines lines={page.ai.title} /></h2><p className={styles.lead}>{page.ai.lead}</p></div>
      <div className={styles.aiColumns}><div><h3>AI can help</h3><TextList items={page.ai.roles} /></div><div><h3>Humans must decide</h3><TextList items={page.ai.humanResponsibilities} /></div></div>
      <p className={`${styles.boundary} ${styles.limit}`}>{page.ai.boundary}</p><h3 className={styles.limitTitle}>AI does not</h3><TextList items={page.ai.limits} />
    </div></section>

    <section id="research-loop" className={`${styles.chapter} ${styles.deep}`} aria-labelledby="research-loop-title"><div className={`${styles.shell} ${styles.split}`}>
      <div className={styles.sectionCopy}><p className={styles.eyebrow}>The continuous research loop</p><h2 id="research-loop-title">{page.loop.title}</h2><p className={styles.lead}>{page.loop.body}</p>
        <figure className={`${styles.artwork} ${styles.flowImage}`}><Image src={v4Artwork.labTrust.src} alt={v4Artwork.labTrust.alt} width={v4Artwork.labTrust.width} height={v4Artwork.labTrust.height} sizes={columnArtworkSizes} /></figure>
        <p className={styles.boundary}>{page.loop.boundary}</p>
      </div><Sequence steps={page.loop.steps} />
    </div></section>

    {researchHorizons.slice(0, 3).map((horizon) => <Horizon key={horizon.id} horizon={horizon} />)}
    <section id="programme-common-data-model" className={styles.chapter} aria-labelledby="common-data-title"><div className={styles.shell}>
      <div className={styles.sectionCopy}><p className={styles.eyebrow}>{researchProgrammes["common-data-model"].status}</p><p className={styles.programmeName}>{researchProgrammes["common-data-model"].name}</p><h2 id="common-data-title">{researchProgrammes["common-data-model"].headline}</h2><p className={styles.lead}>{researchProgrammes["common-data-model"].description}</p><p className={styles.boundary}>{researchProgrammes["common-data-model"].boundary}</p></div>
      <ul className={styles.capitalItems}>{researchProgrammes["common-data-model"].domains.map((domain) => <li key={domain}>{domain}</li>)}</ul>
      <details className={styles.sources}><summary>Research responsibilities</summary><div className={styles.programmeDetails}>
        <h3>Proposed AI assistance</h3><TextList items={researchProgrammes["common-data-model"].aiRoles} />
        <h3>Human expertise required</h3><p>{researchProgrammes["common-data-model"].humanExpertise.join(" · ")}</p>
      </div></details>
    </div></section>
    {researchHorizons.slice(3).map((horizon) => <Horizon key={horizon.id} horizon={horizon} />)}

    <section className={styles.chapter} aria-labelledby="research-compute-title"><div className={`${styles.shell} ${styles.split}`}>
      <div className={styles.sectionCopy}><p className={styles.eyebrow}>Vascurra Compute · proposed</p><h2 id="research-compute-title">{page.compute.title}</h2><p className={styles.lead}>{page.compute.body}</p><p className={styles.boundary}>{page.compute.boundary}</p></div><TextList items={page.compute.items} />
    </div></section>

    <section id="full-mission" className={styles.chapter} aria-labelledby="full-mission-title"><div className={styles.shell}>
      <p className={styles.eyebrow}>{researchMission.label}</p><h2 id="full-mission-title">Build a lasting system for investigation.</h2>
      <div className={styles.missionNumbers}><div><strong>{researchMission.brainCells.replace(" Brain Cells", "")}</strong><span>Brain Cells</span></div><div><strong>{researchMission.capital}</strong><span>Long-term mission capacity</span></div></div>
      <p className={styles.boundary}>{researchMission.boundary}</p><div className={styles.missionProgrammes}>{longTermProgrammes.map((programme) => <Programme key={programme.id} programme={programme} />)}</div>
    </div></section>

    <section id="daily-research" className={`${styles.chapter} ${styles.deep}`} aria-labelledby="daily-research-title"><div className={styles.shell}>
      <p className={styles.eyebrow}>The permanent AI job · future capability</p><h2 id="daily-research-title">{page.dailyJob.title}</h2><p className={styles.dailyQuestion}>{page.dailyJob.question}</p>
      <div className={`${styles.split} ${styles.dailyBody}`}><div><h3>A source-aware watch</h3><TextList items={page.dailyJob.inputs} /></div><div><h3>Questions for human review</h3><TextList items={page.dailyJob.questions} /></div></div>
      <p className={`${styles.boundary} ${styles.limit}`}>{page.dailyJob.boundary}</p>
    </div></section>

    <section id="human-expertise" className={styles.chapter} aria-labelledby="human-expertise-title"><div className={styles.shell}>
      <div className={styles.sectionCopy}><p className={styles.eyebrow}>Human expertise</p><h2 id="human-expertise-title"><Lines lines={page.expertise.title} /></h2><p className={styles.lead}>{page.expertise.body}</p></div>
      <ul className={styles.expertise}>{page.expertise.roles.map((role) => <li key={role}>{role}</li>)}</ul>
      <p className={styles.boundary}>{page.expertise.boundary}</p>
    </div></section>

    <section className={styles.chapter} aria-labelledby="capital-forms-title"><div className={styles.shell}>
      <p className={styles.eyebrow}>Five forms of capital</p><h2 id="capital-forms-title">{page.capitalForms.title}</h2><dl className={styles.forms}>{page.capitalForms.items.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.body}</dd></div>)}</dl>
    </div></section>

    <section className={styles.chapter} aria-labelledby="research-reinvestment-title"><div className={`${styles.shell} ${styles.split}`}>
      <div className={styles.sectionCopy}><p className={styles.eyebrow}>Research reinvestment · proposed</p><h2 id="research-reinvestment-title">{page.reinvestment.title}</h2><p className={styles.lead}>{page.reinvestment.body}</p><div className={styles.flowImage}><Artwork asset={v5Artwork.capitalFlywheel} sizes={columnArtworkSizes} /></div><p className={styles.boundary}>{page.reinvestment.boundary}</p></div>
      <Sequence steps={page.reinvestment.flow} />
    </div></section>

    <section id="research-principles" className={styles.chapter} aria-labelledby="research-principles-title"><div className={styles.shell}>
      <p className={styles.eyebrow}>Research principles</p><h2 id="research-principles-title">{page.principles.title}</h2><ul className={styles.principles}>{page.principles.items.map((principle) => <li key={principle}>{principle}</li>)}</ul>
      <details className={styles.sources}><summary>Scientific framing and sources</summary><p>These sources inform research questions and domains. They do not establish Vascurra capabilities, partnerships or clinical benefit.</p><ul>{Object.values(researchSources).map((source) => <li key={source.href}><a href={source.href}>{source.title}</a></li>)}</ul></details>
    </div></section>

    <section className={styles.chapter} aria-labelledby="evidence-capital-title"><div className={`${styles.shell} ${styles.split}`}>
      <div className={styles.sectionCopy}><p className={styles.eyebrow}>Decisions over time</p><h2 id="evidence-capital-title">{page.allocation.title}</h2><p className={styles.lead}>{page.allocation.body}</p><TextList items={page.allocation.criteria} /></div><Sequence steps={page.allocation.flow} />
    </div></section>

    <section className={`${styles.chapter} ${styles.deep} ${styles.closing}`} aria-labelledby="research-engine-closing-title"><div className={styles.shell}>
      <p className={styles.eyebrow}>{page.closing.label}</p><h2 id="research-engine-closing-title"><Lines lines={page.closing.title.slice(0, -1)} /><VascurraGradientText luminous>{page.closing.title.at(-1)}</VascurraGradientText></h2>
      <p className={styles.humanLine}><Lines lines={page.closing.humanLine} /></p><p className={styles.missionLine}>{brainCellMissionTitle} · {researchMission.capital} long-term mission</p><p className={styles.boundary}>{page.closing.boundary}</p>
      <nav className={styles.actions} aria-label="Explore the wider mission"><CtaLink href="/100-Billion" variant="onDeep">Explore 100 Billion Brain Cells</CtaLink><CtaLink href="/preview" variant="onDeepGhost">Explore Vascurra</CtaLink></nav>
    </div></section>
  </main>;
}
