import Link from "next/link";
import { staffRuns } from "@/lib/veyai/server/records";
import { RunList } from "@/components/veyai/RunList";
import { contracts } from "@/lib/veyai/domain/contracts";
import styles from "@/components/veyai/console.module.css";
export default async function ConsoleHome() {
  const { runs, mode, data } = await staffRuns();
  const pending = runs.filter((run) => run.is_current && run.status === "awaiting_review");
  return <><p className={styles.eyebrow}>Internal intelligence · v0.1</p><h1>Agents propose.<br />Humans decide.</h1>
    <p>Follow a research question through captured sources, independent Evidence critique and an accountable human decision.</p>
    <div className={styles.notice}>Synthetic fixtures only. No live model calls, personal health information or external actions belong in this workflow.</div>
    <div className={styles.grid}>{Object.values(contracts).map((agent) => <section className={styles.section} key={agent.id}><p className={styles.eyebrow}>{agent.status === "shell" ? "Not executable" : "Fixture workflow"}</p><h2><Link href={`/VeyAI/console/${agent.id}`}>{agent.name}</Link></h2><p>{agent.purpose}</p></section>)}</div>
    <section className={styles.section}><h2>Recent runs</h2><p>{pending.length} current output{pending.length === 1 ? "" : "s"} ready for review in this identity’s accessible records.</p><RunList runs={runs.slice(0,10)} /></section>
    <section className={styles.section}><h2>System status</h2><dl className={styles.metadata}><dt>Data provider</dt><dd>{data.research.name}</dd><dt>Workspace mode</dt><dd>{mode === "fixture" ? "Local synthetic fixtures · ephemeral session" : "Connected staff workspace · synthetic execution only"}</dd><dt>Reasoning runtime</dt><dd>Deterministic fixture provider · no OpenAI calls</dd><dt>Usage ceiling</dt><dd>{mode === "fixture" ? "10 runs per identity per UTC day in this temporary session. Research, Evidence, revisions and failed runs count." : "The connected workspace’s configured daily run ceiling applies."}</dd><dt>Actual model cost</dt><dd>Zero in fixture mode</dd><dt>Operations / Capital</dt><dd>Proposals only · no execution</dd></dl></section>
  </>;
}
