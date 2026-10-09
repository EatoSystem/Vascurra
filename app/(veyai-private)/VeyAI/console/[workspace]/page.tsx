import Link from "next/link";
import { notFound } from "next/navigation";
import { randomUUID } from "node:crypto";
import { requireWorkspace } from "@/lib/providers/server";
import { RunList } from "@/components/veyai/RunList";
import { RunProgress } from "@/components/veyai/RunProgress";
import { contracts, type AgentId } from "@/lib/veyai/domain/contracts";
import { fixtureOptions } from "@/lib/veyai/domain/fixtures";
import { researchFixtureOptions } from "@/lib/providers/ai/contracts";
import { providerConfiguration } from "@/lib/providers/config";
import { requestRun, recordDecision } from "../actions";
import { actionMessages } from "../messages";
import styles from "@/components/veyai/console.module.css";
import { atlasFixtures, capitalFixture, programmeFixture } from "@/lib/development/atlas";

export default async function Workspace({ params, searchParams }: { params: Promise<{ workspace: string }>; searchParams: Promise<{ notice?: string }> }) {
  const { workspace } = await params;
  if (!["research", "evidence", "operations", "capital", "approvals", "atlas"].includes(workspace)) notFound();
  const { data, user, memberships, mode } = await requireWorkspace();
  const { notice } = await searchParams;
  if (workspace === "atlas") return <><p className={styles.eyebrow}>Vascurra Atlas · Synthetic institutional memory</p><h1>Questions become traceable learning.</h1><p>Atlas preserves what was sourced, reported, interpreted, proposed and decided without collapsing them into one kind of knowledge.</p><div className={styles.notice}>Fixture records only. No biomedical knowledge graph, personal information or external data connection is active.</div>
    <section className={styles.section}><h2>{atlasFixtures.question.label}</h2><p><strong>{atlasFixtures.question.id}</strong> · {atlasFixtures.question.status}</p><p>{atlasFixtures.question.text}</p></section>
    <div className={styles.grid}><section className={styles.section}><h2>Sources</h2>{atlasFixtures.sources.map((item) => <article key={item.id} className={styles.source}><p className={styles.eyebrow}>{item.label} · {item.id}</p><h3>{item.text}</h3><p>{item.detail}</p></article>)}</section><section className={styles.section}><h2>Findings</h2>{atlasFixtures.findings.map((item) => <article key={item.id} className={styles.source}><p className={styles.eyebrow}>{item.label} · {item.id}</p><h3>{item.text}</h3><p>{item.detail}</p></article>)}</section></div>
    {[atlasFixtures.interpretation, atlasFixtures.hypothesis, atlasFixtures.researcher, atlasFixtures.institution, atlasFixtures.decision, atlasFixtures.programme].map((item) => <section className={styles.section} key={item.id}><p className={styles.eyebrow}>{item.label} · {item.id}</p><h2>{item.text}</h2><p>{item.detail}</p></section>)}
    <section className={styles.section}><h2>Unknowns remain visible</h2><ul>{atlasFixtures.unknowns.map((item) => <li key={item}>{item}</li>)}</ul></section></>;
  if (workspace === "approvals") {
    const approvals = await data.research.approvals();
    return <><p className={styles.eyebrow}>Human judgement</p><h1>Assigned decisions</h1><p>Read both outputs and their captured sources before deciding. Developing a programme records human intent only; it starts no work.</p>
      {notice && <p role="status" className={styles.notice}>{actionMessages[notice] ?? actionMessages.unavailable}</p>}
      {!approvals.length && <p>No reviews are assigned to this identity. A completed Evidence review creates a decision request for its assigned reviewer.</p>}
      {approvals.map((approval) => <section className={styles.section} key={approval.id}><h2>Research and Evidence review</h2><Link href={`/VeyAI/console/runs/${approval.run_id}`}>Read the paired outputs and source bundle</Link><p><span className={styles.badge}>{approval.status}</span></p>
        {approval.status === "stale" && <p className={styles.notice}>The Research or Evidence version has changed. This review cannot be approved. Any previous decision applies to historical versions only.</p>}
        <dl className={styles.metadata}><dt>Research version hash</dt><dd>{approval.research_hash}</dd><dt>Evidence version hash</dt><dd>{approval.evidence_hash}</dd></dl>
        {approval.status === "pending" && <form action={recordDecision} className={styles.form}>
          <input type="hidden" name="target" value={approval.id} /><input type="hidden" name="expected_research" value={approval.research_hash} /><input type="hidden" name="expected_evidence" value={approval.evidence_hash} /><input type="hidden" name="key" value={randomUUID()} />
          <label htmlFor={`choice-${approval.id}`}>Decision</label><select id={`choice-${approval.id}`} name="choice" required defaultValue=""><option value="" disabled>Select your decision</option><option value="reject">Reject</option><option value="hold">Hold</option><option value="investigate_further">Investigate further</option><option value="approve">Develop programme — record intent only</option></select>
          <label htmlFor={`reason-${approval.id}`}>Reason</label><textarea id={`reason-${approval.id}`} name="explanation" minLength={10} maxLength={2000} required aria-describedby={`decision-boundary-${approval.id}`} /><p id={`decision-boundary-${approval.id}`}>At least 10 characters. This human decision binds to the two output versions shown above. If either changes, this approval becomes stale.</p><RunProgress pendingLabel="Recording decision…">Record decision</RunProgress>
        </form>}
      </section>)}
    </>;
  }
  const agent = contracts[workspace as AgentId];
  const [runs, directory] = await Promise.all([
    agent.status === "shell" ? [] : data.research.listRuns(),
    workspace === "research" ? data.research.directory() : [],
  ]);
  const reviewers = directory.filter((member) => member.user_id !== user.id && member.role !== "researcher");
  const allowedMemberships = memberships.filter((member) => member.role !== "reviewer");
  const scenarios = mode === "fixture" ? researchFixtureOptions : fixtureOptions;
  return <><p className={styles.eyebrow}>{agent.status === "shell" ? "Architectural shell · not executable" : "Synthetic development workflow"}</p><h1>{agent.name}</h1><p>{agent.question}</p>
    {notice && <p role="status" className={styles.notice}>{actionMessages[notice] ?? actionMessages.unavailable}</p>}
    {workspace === "research" && <><p>Choose a fixture to explore a complete result, incomplete provenance or a controlled failure. Only a researcher or administrator can start Research; a different person must review it.</p>{mode === "fixture" && <p>Local quota: 10 runs per identity per UTC day in this temporary session, including Evidence and revisions. Cancelling or failing a run does not restore its quota.</p>}{!allowedMemberships.length && <p className={styles.notice}>This reviewer identity can read assigned Research and request Evidence, but cannot start or revise Research.</p>}</>}
    {workspace === "research" && allowedMemberships.map((membership) => <section key={membership.workspace_id} className={styles.section}><h2>Try a research scenario</h2><p>Free-text research and live models remain disabled. Each scenario uses labelled fictional sources.</p>
      <form action={requestRun} className={styles.form}><input type="hidden" name="w" value={membership.workspace_id} /><input type="hidden" name="key" value={randomUUID()} />
        <label htmlFor={`fixture-${membership.workspace_id}`}>Research scenario</label><select id={`fixture-${membership.workspace_id}`} name="fixture">{scenarios.map((fixture) => <option key={fixture.key} value={fixture.key}>{fixture.title}</option>)}</select>
        <label htmlFor={`reviewer-${membership.workspace_id}`}>Assigned Evidence reviewer</label><select id={`reviewer-${membership.workspace_id}`} name="reviewer" required defaultValue=""><option value="" disabled>Select a reviewer</option>{reviewers.filter((member) => member.workspace_id === membership.workspace_id).map((member) => <option key={member.user_id} value={member.user_id}>{member.display_name}</option>)}</select>
        <RunProgress pendingLabel="Queuing Research…" disabled={providerConfiguration().ai !== "fixture" || !reviewers.some((member) => member.workspace_id === membership.workspace_id)}>Queue synthetic Research</RunProgress>
      </form></section>)}
    {workspace === "operations" && <><div className={styles.notice}>Proposal only. Operations cannot start work, contact people, publish, spend or change records.</div><section className={styles.section}><h2>Fixture programme proposal</h2><p>{programmeFixture.objective}</p><dl className={styles.metadata}><dt>Timeline</dt><dd>{programmeFixture.timeline}</dd><dt>Workstreams</dt><dd>{programmeFixture.workstreams.join(" · ")}</dd><dt>Milestones</dt><dd>{programmeFixture.milestones.join(" · ")}</dd><dt>Dependencies</dt><dd>{programmeFixture.dependencies.join(" · ")}</dd><dt>Human roles</dt><dd>{programmeFixture.roles.join(" · ")}</dd><dt>Risks</dt><dd>{programmeFixture.risks.join(" · ")}</dd><dt>Decision points</dt><dd>{programmeFixture.decisions.join(" · ")}</dd><dt>Success measures</dt><dd>{programmeFixture.measures.join(" · ")}</dd></dl></section></>}
    {workspace === "capital" && <><div className={styles.notice}>Scenario only. Capital has no bank, payment, transfer, budget-approval or investment authority.</div><section className={styles.section}><h2>Fixture capital scenario</h2><dl className={styles.metadata}><dt>Capital range</dt><dd>{capitalFixture.range}</dd><dt>Capability unlocked</dt><dd>{capitalFixture.capability}</dd><dt>Cost categories</dt><dd>{capitalFixture.categories.join(" · ")}</dd><dt>Evidence readiness</dt><dd>{capitalFixture.readiness}</dd><dt>Learning value</dt><dd>{capitalFixture.learning}</dd><dt>Strategic fit</dt><dd>{capitalFixture.fit}</dd><dt>Risks</dt><dd>{capitalFixture.risks.join(" · ")}</dd><dt>Horizon alignment</dt><dd>{capitalFixture.horizon}</dd></dl></section></>}
    {agent.status !== "shell" && <section className={styles.section}><h2>{workspace === "evidence" ? "Evidence reviews" : "Research history"}</h2><RunList runs={runs.filter((run) => run.agent_id === workspace)} />{workspace === "evidence" && <p>Open a completed, current Research output to request an Evidence review. The critique binds to its exact sources and output version.</p>}</section>}
    <section className={styles.section}><h2>Contract · {agent.version}</h2><dl className={styles.metadata}><dt>Scope</dt><dd>{agent.scopes.join(", ")}</dd><dt>Tools</dt><dd>{agent.tools.join(", ") || "None"}</dd><dt>Human owner</dt><dd>{agent.humanOwner}</dd><dt>Provenance</dt><dd>{agent.evidenceRequirements}</dd><dt>Approval</dt><dd>{agent.approvalRules}</dd></dl></section>
  </>;
}

