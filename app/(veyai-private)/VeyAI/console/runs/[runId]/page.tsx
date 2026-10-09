import Link from "next/link";
import { notFound } from "next/navigation";
import { randomUUID } from "node:crypto";
import { z } from "zod";
import { requireWorkspace } from "@/lib/providers/server";
import { fixtureOptions } from "@/lib/veyai/domain/fixtures";
import { researchFixtureOptions, evidenceFixtureOptions } from "@/lib/providers/ai/contracts";
import { providerConfiguration } from "@/lib/providers/config";
import { ResearchView, EvidenceView, SourceView } from "@/components/veyai/OutputView";
import { RunProgress } from "@/components/veyai/RunProgress";
import { requestRun, cancelRun, advanceRun } from "../../actions";
import { actionMessages, executionMessages, errorMessages } from "../../messages";
import styles from "@/components/veyai/console.module.css";

export default async function RunDetail({ params, searchParams }: { params: Promise<{ runId: string }>; searchParams: Promise<{ notice?: string }> }) {
  const { runId } = await params;
  if (!z.uuid().safeParse(runId).success) notFound();
  const { data, user, mode, memberships } = await requireWorkspace();
  const detail = await data.research.detail(runId);
  if (!detail) notFound();
  const { run, output, parentOutput, bundle, history, decisions, telemetry } = detail;
  const { notice } = await searchParams;
  const scenario = researchFixtureOptions.find((fixture) => fixture.key === run.fixture_key);
  const working = ["queued", "running"].includes(run.status);
  const canResearch = run.owner_id === user.id && memberships.some((membership) => membership.workspace_id === run.workspace_id && membership.role !== "reviewer");
  const available = providerConfiguration().ai === "fixture";
  const scenarios = mode === "fixture" ? researchFixtureOptions : fixtureOptions;
  const identityInputs = <><input type="hidden" name="w" value={run.workspace_id} /><input type="hidden" name="reviewer" value={run.reviewer_id} /></>;
  return <><p className={styles.eyebrow}>Synthetic {run.agent_id} run</p><h1>{scenario?.title ?? "Research scenario"}</h1>
    <p><span className={styles.badge}>{run.status.replaceAll("_", " ")}{!run.is_current ? " · superseded" : ""}</span></p>
    <div className={styles.notice}>Fictional development material. These deterministic proposals demonstrate the workflow without a model call. Human review remains necessary.</div>
    {!run.is_current && <p role="status" className={styles.notice}>Superseded version. Any decision shown below is historical and cannot authorise further work. <Link href="/VeyAI/console/research">Open current Research</Link> and its Evidence review before deciding.</p>}
    {notice && <p role="alert" className={styles.notice}>{actionMessages[notice] ?? actionMessages.unavailable}</p>}
    <nav className={styles.nav} aria-label="Run sections"><a href="#brief">Brief</a>{bundle && <a href="#sources">Sources</a>}{output && <a href="#results">Findings and review</a>}<a href="#observability">Run details</a><a href="#history">History</a></nav>
    <section id="brief" className={styles.section}><h2>Brief and versions</h2><dl className={styles.metadata}><dt>Question</dt><dd>{scenario?.question ?? "See the captured output."}</dd><dt>Contract</dt><dd>{run.agent_version}</dd><dt>Instructions</dt><dd>{run.prompt_version}</dd><dt>Runtime</dt><dd>{run.model_version}</dd><dt>Output version</dt><dd>{output?.version ?? "No output yet"}</dd><dt>Output hash</dt><dd>{output?.content_hash ?? "No output yet"}</dd><dt>Source-set hash</dt><dd>{bundle?.content_hash ?? "No captured source set yet"}</dd></dl>{run.parent_run_id && <p><Link href={`/VeyAI/console/runs/${run.parent_run_id}`}>Read the exact Research version reviewed by this Evidence run</Link></p>}</section>
    <section className={styles.section}><h2>Execution state</h2>
      <p>{mode === "connected" && working ? "Waiting for the restricted fixture worker. Refresh this page after the worker handles the request." : executionMessages[run.status] ?? "See the run history for its recorded state."}</p>
      {run.error_code && <p role="status"><strong>{errorMessages[run.error_code] ?? "Execution stopped at a controlled boundary."}</strong> Error code: {run.error_code}.</p>}
      {mode === "fixture" && working && run.is_current && <form action={advanceRun}><input type="hidden" name="target" value={runId} /><RunProgress pendingLabel="Applying fixture step…">{run.status === "queued" ? "Start fixture run" : "Complete fixture run"}</RunProgress></form>}
      {working && <p><Link href={`/VeyAI/console/runs/${runId}`}>Refresh run</Link></p>}
      {canResearch && working && <form action={cancelRun}><input type="hidden" name="target" value={runId} /><RunProgress className={styles.secondary} pendingLabel="Cancelling…">Cancel run</RunProgress></form>}
    </section>
    {output && <section id="results" className={styles.section}>{run.agent_id === "research" ? <ResearchView content={output.content} /> : <div className={styles.grid}>{parentOutput && <ResearchView content={parentOutput.content} />}<EvidenceView content={output.content} /></div>}</section>}
    {bundle && <SourceView sources={bundle.sources} />}
    {run.agent_id === "research" && output?.complete && run.is_current && <section className={styles.section}><h2>Request Evidence review</h2><p>Evidence will review this exact output and source set. A new Evidence version makes the previous review and any approval stale.</p><form action={requestRun} className={styles.form}>{identityInputs}<input type="hidden" name="fixture" value={run.fixture_key} /><input type="hidden" name="parent" value={runId} /><input type="hidden" name="key" value={randomUUID()} />
      {mode === "fixture" ? <><label htmlFor="evidence-variant">Evidence scenario</label><select id="evidence-variant" name="evidence" defaultValue="challenge">{evidenceFixtureOptions.map((fixture) => <option key={fixture.key} value={fixture.key}>{fixture.title}</option>)}</select></> : <input type="hidden" name="evidence" value="challenge" />}
      <RunProgress disabled={!available} pendingLabel="Queuing Evidence…">Request Evidence review</RunProgress></form></section>}
    {run.agent_id === "research" && canResearch && run.is_current && !working && <section className={styles.section}><h2>Revise Research</h2><p>A new fixture run supersedes this version and makes existing Evidence reviews and approvals stale. Previous records remain available.</p><form action={requestRun} className={styles.form}>{identityInputs}<input type="hidden" name="supersedes" value={runId} /><input type="hidden" name="key" value={randomUUID()} /><label htmlFor="revised-fixture">Revised research scenario</label><select id="revised-fixture" name="fixture" defaultValue={run.fixture_key}>{scenarios.map((fixture) => <option key={fixture.key} value={fixture.key}>{fixture.title}</option>)}</select><RunProgress className={styles.secondary} disabled={!available} pendingLabel="Queuing revision…">Create revised Research</RunProgress></form></section>}
    {run.agent_id === "evidence" && <section className={styles.section}><h2>Human decision</h2><p>Only the assigned reviewer can record a decision for complete, current versions. No decision starts Operations or Capital.</p>{run.reviewer_id === user.id ? <Link href="/VeyAI/console/approvals">Open assigned decisions</Link> : <p>This identity can read the review but cannot approve it. {mode === "fixture" && "Switch to the assigned synthetic reviewer to exercise the decision step."}</p>}{decisions.map((decision, index) => <article className={styles.section} key={index}><h3>{decision.decision === "approve" ? "Develop programme — intent recorded" : decision.decision.replaceAll("_", " ")}</h3><p>{!run.is_current ? "Historical decision · stale versions" : "Decision on the versions below"} · <time dateTime={decision.created_at}>{decision.created_at}</time></p><p>{decision.reason}</p><dl className={styles.metadata}><dt>Scope</dt><dd>{decision.scope.replaceAll("_", " ")}</dd><dt>Research version hash</dt><dd>{decision.research_hash}</dd><dt>Evidence version hash</dt><dd>{decision.evidence_hash}</dd></dl></article>)}</section>}
    <section id="observability" className={styles.section}><h2>Run details</h2><dl className={styles.metadata}><dt>Run ID</dt><dd>{run.id}</dd><dt>Data provider</dt><dd>{telemetry.provider}</dd><dt>Execution mode</dt><dd>{telemetry.mode}</dd><dt>Research fixture</dt><dd>{run.fixture_key}</dd>{run.agent_id === "evidence" && <><dt>Evidence fixture</dt><dd>{run.evidence_fixture_key ?? "challenge"}</dd></>}<dt>State</dt><dd>{run.status.replaceAll("_", " ")}</dd><dt>Recorded latency</dt><dd>{telemetry.latencyMs === null ? "Not recorded" : `${telemetry.latencyMs} ms · synthetic execution`}</dd><dt>Usage estimate</dt><dd>{telemetry.estimatedTokens === null ? "Not recorded" : `${telemetry.estimatedTokens} synthetic tokens · not provider usage`}</dd><dt>Actual model cost</dt><dd>{telemetry.costMicroUsd === 0 ? "$0.00 · no model call" : "Not recorded · live execution is disabled"}</dd><dt>Error</dt><dd>{run.error_code ?? "None recorded"}</dd><dt>Human decisions</dt><dd>{decisions.length}</dd></dl></section>
    <section id="history" className={styles.section}><h2>History</h2>{run.supersedes_run_id && <p><Link href={`/VeyAI/console/runs/${run.supersedes_run_id}`}>Read the Research version this run supersedes</Link></p>}<ul>{history.map((event, index) => <li key={index}>{event.event.replaceAll("_", " ")} · <time dateTime={event.created_at}>{event.created_at}</time></li>)}</ul></section>
  </>;
}

