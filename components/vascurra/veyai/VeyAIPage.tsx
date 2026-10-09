import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { CapitalAmount } from "@/components/vascurra/capital/CapitalAmount";
import { VascurraGradientText } from "@/components/vascurra/home/gradient-text";
import { agentContract, agentStatusLabels, veyaiAgents, veyaiBoundaries, veyaiHorizons, veyaiWorkflow, type VeyAIAgent } from "@/content/veyai-agents";
import { brainCellMissionTitle, formatMissionEuro, formatScale, ultimateBrainCellTarget, ultimateCapitalTargetCents } from "@/content/brain-cells";
import { researchEngine } from "@/content/research-engine";
import styles from "./veyai.module.css";

function TextList({ items }: { items: readonly string[] }) {
  return <ul className={styles.list}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function AgentDefinition({ agent }: { agent: VeyAIAgent }) {
  const featured = agent.id === "governance";
  return <article id={`agent-${agent.id}`} className={`${styles.agent} ${featured ? styles.governance : ""}`} aria-labelledby={`agent-title-${agent.id}`}>
    <header><p className={styles.status}>{agentStatusLabels[agent.status]} · {agent.family}</p>
      <h3 id={`agent-title-${agent.id}`}><span className={styles.agentPrefix}>VeyAI</span>{agent.name}</h3>
    </header>
    <div className={styles.stack}>
      <p className={styles.question}>{agent.purpose}</p><p>{agent.description}</p>
      <p className={styles.boundary}>{agent.prohibitedActions.join(" ")}</p>
      {["research", "evidence", "operations", "capital"].includes(agent.id) && <Link href={`/VeyAI-${agent.name}`}>Explore VeyAI {agent.name} <span aria-hidden="true">→</span></Link>}
      <details><summary>Scope and human ownership<span className="sr-only"> for VeyAI {agent.name}</span></summary>
        <div className={styles.detailsBody}>
          <h4>Proposed responsibilities</h4><TextList items={agent.responsibilities} />
          {agent.domains ? <><h4>Potential research scope</h4><p>{agent.domains.join(" · ")}</p></> : null}
          {agent.outputs ? <><h4>Proposed outputs</h4><p>{agent.outputs.join(" · ")}</p></> : null}
          <h4>Human owner required</h4><p>{agent.humanOwner}</p>
        </div>
      </details>
    </div>
  </article>;
}

function AgentHorizon({ horizon }: { horizon: (typeof veyaiHorizons)[number] }) {
  return <section id={`horizon-${horizon.id}`} className={`${styles.chapter} ${horizon.id === "04" ? styles.deep : ""}`} aria-labelledby={`horizon-title-${horizon.id}`}>
    <div className={styles.shell}>
      <header className={styles.horizonHeader}>
        <div><p className={styles.eyebrow}>{horizon.id === "01" ? "Foundation planning horizon" : "Future planning horizon"} / {horizon.id}</p>
          <CapitalAmount amount={horizon.amount} className={styles.amount} /><p className={styles.cells}>{horizon.brainCells}</p>
        </div>
        <div className={styles.stack}><h2 id={`horizon-title-${horizon.id}`}>{horizon.title}</h2><p>{horizon.description}</p></div>
      </header>
      <div className={styles.agents}>{horizon.agents.map((agent) => <AgentDefinition key={agent.id} agent={agent} />)}</div>
    </div>
  </section>;
}

export function VeyAIPage() {
  return <main id="main" className={styles.page}>
    <section className={`${styles.chapter} ${styles.hero}`} aria-labelledby="veyai-title"><div className={styles.shell}>
      <p className={styles.eyebrow}>Vascurra / Internal intelligence</p>
      <h1 id="veyai-title">VeyAI.</h1>
      <p className={styles.heroSubtitle}>Built for the mission.</p>
      <div className={styles.heroBottom}>
        <p className={styles.distinction}>Veya is built for the person.<br />VeyAI is built for the mission.</p>
        <div className={styles.stack}><p className={styles.lead}>VeyAI helps Vascurra research and operate.</p><p>Its first bounded workflow turns a question into source-aware Research, independent Evidence review and a version-bound human decision. Future Operations and Capital roles remain proposal-only.</p>
          <p className={styles.boundary}>{veyaiBoundaries.status}</p>
          <div className={styles.actions}><CtaLink href="#agent-system">Explore the agent system</CtaLink><CtaLink href="/veya" variant="secondary">Explore Veya</CtaLink></div>
        </div>
      </div>
      <nav className={styles.chapterNav} aria-label="VeyAI chapters"><a href="#veya-and-veyai">Veya and VeyAI</a><a href="#horizon-01">Foundation agents</a><a href="#horizon-02">Future horizons</a><a href="#agent-families">Agent families</a><a href="#agent-contract">Governance and contracts</a></nav>
    </div></section>

    <section className={`${styles.chapter} ${styles.quiet}`} aria-labelledby="why-title"><div className={`${styles.shell} ${styles.split}`}>
      <div className={styles.stack}><p className={styles.eyebrow}>Why an internal system?</p><h2 id="why-title">One mission.<br />Many specialised responsibilities.</h2></div>
      <div className={styles.stack}><p className={styles.lead}>Serving people and building a research organisation call for different kinds of work.</p><p>Research, evidence, operations, capital, partnerships, governance, product development, clinical research and international coordination each need their own boundaries and expertise.</p><p>Specialist agents could help organise that work around shared institutional context. They would contribute to a governed process with people responsible for its decisions.</p><p className={styles.statement}>Different agents.<br />Shared context.<br />Clear permissions.<br />Human responsibility.</p></div>
    </div></section>

    <section id="veya-and-veyai" className={styles.chapter} aria-labelledby="comparison-title"><div className={styles.shell}>
      <p className={styles.eyebrow}>Two responsibilities. One purpose.</p><h2 id="comparison-title">For the person.<br />For the mission.</h2>
      <div className={styles.comparison}>
        <section aria-labelledby="veya-comparison"><p className={styles.status}>Conceptual / in development</p><h3 id="veya-comparison">Veya</h3><p className={styles.question}>The everyday companion.</p><p>Human-facing, calm and permission-aware: conversation, questions, preparation, chosen context, optional routine support and continuity.</p><Link href="/veya">Explore Veya <span aria-hidden="true">→</span></Link></section>
        <section aria-labelledby="veyai-comparison"><p className={styles.status}>Proposed architecture</p><h3 id="veyai-comparison">VeyAI</h3><p className={styles.question}>The internal operating layer.</p><p>Specialist, source-aware and designed for audit: research, evidence, operations, planning, capital, partnerships, governance and internal intelligence.</p><a href="#agent-system">Explore the roles <span aria-hidden="true">→</span></a></section>
      </div>
    </div></section>

    <section id="agent-system" className={`${styles.chapter} ${styles.deep}`} aria-labelledby="core-title"><div className={styles.shell}>
      <div className={styles.split}><div className={styles.stack}><p className={styles.eyebrow}>VeyAI Core / Proposed orchestration</p><h2 id="core-title">Agents propose.<br /><VascurraGradientText luminous>Humans decide.</VascurraGradientText></h2><p className={styles.lead}>Core would coordinate specialist contributions around shared objectives, explicit contracts and human approval.</p></div>
        <div className={styles.stack}><p>Its proposed role includes task routing, permission-aware requests, source provenance, evidence requirements, institutional memory, approval routing, escalation and audit history.</p><p>Core is not an autonomous executive. A Vascurra-owned service boundary would enforce tool and data permissions, retain versions and provenance, validate structured outputs and provide safe fallbacks.</p><p className={styles.boundary}>{veyaiBoundaries.authority}</p></div>
      </div>
      <div className={styles.responsibilitySplit}><div><h3>AI could help</h3><p>Search · analyse · challenge · organise · simulate · recommend · coordinate</p></div><div><h3>Humans remain responsible</h3><p>Scientific and medical judgement · ethics · capital and programme approval · external commitments · clinical decisions</p></div></div>
    </div></section>

    {veyaiHorizons.filter((horizon) => horizon.id === "01").map((horizon) => <AgentHorizon key={horizon.id} horizon={horizon} />)}

    <section className={`${styles.chapter} ${styles.quiet}`} aria-labelledby="workflow-title"><div className={styles.shell}>
      <p className={styles.eyebrow}>An illustrative workflow / Not a live system</p><h2 id="workflow-title">Research proposes.<br />Evidence challenges.</h2>
      <p className={styles.intro}>A promising finding would begin a review process. It would not trigger a study, a payment or an external commitment.</p>
      <ol className={styles.workflow}>{veyaiWorkflow.map((step, index) => <li key={step.role}><span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.role}</h3><p>{step.action}</p></div></li>)}</ol>
      <div className={styles.allocation}><h3>Capital follows evidence.</h3><ol aria-label="Proposed allocation review">{researchEngine.allocation.flow.map((step) => <li key={step}>{step}</li>)}</ol><p>Human leadership would approve allocation. Measurement would inform further review, with assumptions and uncertainty retained.</p></div>
    </div></section>

    {veyaiHorizons.slice(1).map((horizon) => <AgentHorizon key={horizon.id} horizon={horizon} />)}

    <section id="agent-families" className={styles.chapter} aria-labelledby="families-title"><div className={styles.shell}>
      <p className={styles.eyebrow}>The proposed specialist system</p><h2 id="families-title">Investigate the questions.<br />Build the organisation.</h2>
      <div className={styles.comparison}>{(["mission", "organisation"] as const).map((family) => <section key={family} aria-labelledby={`family-${family}`}>
        <p className={styles.status}>Proposed and future roles</p><h3 id={`family-${family}`}>VeyAI {family === "mission" ? "Mission" : "Organisation"}</h3>
        <p>{family === "mission" ? "Help Vascurra investigate vascular cognitive health through disciplined research." : "Help Vascurra operate, support its people and grow mission capacity."}</p>
        <ul className={styles.familyLinks}>{veyaiAgents.filter((agent) => agent.family === family).map((agent) => <li key={agent.id}><a href={`#agent-${agent.id}`}>{agent.name}</a></li>)}</ul>
      </section>)}</div>
      <p className={styles.shared}>Both would share institutional context, permission boundaries, evidence standards, governance and human oversight. Shared context does not grant shared access.</p>
      <div className={styles.supportingIntro}><h3>Supporting the organisation.</h3><p>Additional role proposals, subject to need and separate approval. These do not change the four foundation priorities or promise a launch schedule.</p></div>
      {veyaiAgents.filter((agent) => agent.placement === "organisation").map((agent) => <AgentDefinition key={agent.id} agent={agent} />)}
    </div></section>

    <section id="agent-contract" className={`${styles.chapter} ${styles.quiet}`} aria-labelledby="contract-title"><div className={styles.shell}>
      <div className={styles.split}><div className={styles.stack}><p className={styles.eyebrow}>Governance from the foundation</p><h2 id="contract-title">Every agent<br />has a contract.</h2></div><div className={styles.stack}><p className={styles.lead}>Specialisation needs an operational boundary, an evidence standard and a human owner.</p><p>These are requirements for future implementation. Each contract would need approval before activation and revision as the role changes. The listed owners describe required expertise; they do not announce appointed staff.</p></div></div>
      <dl className={styles.contract}>{agentContract.map((field, index) => <div key={field.name}><dt><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{field.name}</dt><dd>{field.description}</dd></div>)}</dl>
      <p className={styles.boundary}>{veyaiBoundaries.external}</p>
    </div></section>

    <section className={styles.chapter} aria-labelledby="access-title"><div className={`${styles.shell} ${styles.split}`}>
      <div className={styles.stack}><p className={styles.eyebrow}>Data minimisation by design</p><h2 id="access-title">Shared intelligence.<br />Scoped access.</h2><p className={styles.lead}>{veyaiBoundaries.access}</p></div>
      <div className={styles.accessExamples}><div><h3>Capital</h3><p>Does not automatically need personal health context.</p></div><div><h3>Research</h3><p>Does not automatically need identifying participant data.</p></div><div><h3>Operations</h3><p>Should receive only what is necessary to execute approved work.</p></div><p className={styles.boundary}>Future research access would require a defined lawful basis, approved purpose, appropriate consent and separate governance. This page collects no health data and implements no agent access.</p></div>
    </div></section>

    <section className={`${styles.chapter} ${styles.quiet}`} aria-labelledby="engine-title"><div className={`${styles.shell} ${styles.split}`}>
      <div className={styles.stack}><p className={styles.eyebrow}>VeyAI and the Research Engine</p><h2 id="engine-title">Intelligence in service<br />of scientific capability.</h2><p>VeyAI is the proposed operating intelligence. The Research Engine is the scientific capability it could help operate. Vascurra Lab is the proposed research-learning environment; programmes would need independent scientific oversight.</p><div className={styles.actions}><CtaLink href="/research-engine">Explore the Research Engine</CtaLink></div></div>
      <ol className={styles.relationship} aria-label="Conceptual research relationship">{["VeyAI", "Vascurra Research Engine", "Vascurra Lab", "Research programmes", "Evidence", "New knowledge"].map((name) => <li key={name}>{name}</li>)}</ol>
    </div></section>

    <section className={styles.chapter} aria-labelledby="capital-title"><div className={styles.shell}>
      <p className={styles.eyebrow}>VeyAI and capital</p><h2 id="capital-title">Capability grows<br />with the mission.</h2><p className={styles.intro}>Planning horizons describe possible capability, not funding raised, committed budgets or guaranteed delivery. Brain Cells are symbolic units of mission capacity, not biological cell counts.</p>
      <ol className={styles.capitalSummary}>{veyaiHorizons.map((horizon) => <li key={horizon.id}><a href={`#horizon-${horizon.id}`}>{horizon.title}</a><CapitalAmount amount={horizon.amount} /><p>{horizon.agents.map((agent) => agent.name).join(" · ")}{horizon.id === "01" ? " · VeyAI Core" : ""}</p></li>)}</ol>
      <div className={styles.fullMission}><div><p className={styles.eyebrow}>Beyond the four horizons / Long-term mission</p><p className={styles.missionNumber}>{formatScale(ultimateBrainCellTarget)} Brain Cells<br />{formatMissionEuro(ultimateCapitalTargetCents)}</p></div><div className={styles.stack}><h3>Permanent research and organisational capability.</h3><p>The long-term ambition is for AI assistance to form part of sustained scientific and organisational capability, with evidence, accountable ownership and human decisions at its centre.</p><Link href="/100-Billion">Explore {brainCellMissionTitle} <span aria-hidden="true">→</span></Link></div></div>
    </div></section>

    <section className={`${styles.chapter} ${styles.deep} ${styles.closing}`} aria-labelledby="closing-title"><div className={styles.shell}>
      <p className={styles.eyebrow}>Different responsibilities. Shared purpose.</p>
      <h2 id="closing-title"><span>Veya.<br />For the person.</span><span>VeyAI.<br /><VascurraGradientText luminous>For the mission.</VascurraGradientText></span></h2>
      <p className={styles.lead}>Human responsibility. At every stage.</p>
      <div className={styles.actions}><CtaLink href="/veya" variant="onDeep">Explore Veya</CtaLink><CtaLink href="/research-engine" variant="onDeepGhost">Explore the Research Engine</CtaLink></div>
    </div></section>
  </main>;
}
