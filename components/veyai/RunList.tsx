import Link from "next/link";
import { researchFixtureOptions } from "@/lib/providers/ai/contracts";
import type { RunRecord } from "@/lib/providers/data/contract";
import styles from "./console.module.css";
export function RunList({ runs }: { runs: RunRecord[] }) {
  if (!runs.length) return <p>No runs yet. Research will appear here after an authorised fixture request.</p>;
  return <table className={styles.table}><caption className="sr-only">Accessible research and evidence runs</caption><thead><tr><th scope="col">Question</th><th scope="col">Agent</th><th scope="col">State</th><th scope="col">Created</th></tr></thead><tbody>
    {runs.map((run) => <tr key={run.id}><td><Link prefetch={false} href={`/VeyAI/console/runs/${run.id}`}>{researchFixtureOptions.find((f) => f.key === run.fixture_key)?.title ?? "Research run"}</Link></td><td data-label="Agent">{run.agent_id}</td><td data-label="State"><span className={styles.badge}>{run.status.replaceAll("_", " ")}{!run.is_current ? " · superseded" : ""}</span></td><td data-label="Created"><time dateTime={run.created_at}>{new Date(run.created_at).toISOString().slice(0,16).replace("T", " ")} UTC</time></td></tr>)}
  </tbody></table>;
}
