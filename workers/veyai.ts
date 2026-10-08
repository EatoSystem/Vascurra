import postgres from "postgres";
import { processFixtureJob } from "../lib/veyai/runtime/fixture-worker";

if (process.env.VEYAI_EXECUTION_MODE !== "fixture") throw new Error("Only fixture execution is available");
if (!process.env.VEYAI_WORKER_DATABASE_URL) throw new Error("A dedicated restricted worker connection is required");
if (process.env.VEYAI_LOCAL_DATABASE === "true" && !["localhost", "127.0.0.1", "[::1]"].includes(new URL(process.env.VEYAI_WORKER_DATABASE_URL).hostname)) {
  throw new Error("Non-TLS worker connections are restricted to loopback hosts");
}
const sql = postgres(process.env.VEYAI_WORKER_DATABASE_URL, { max: 1, idle_timeout: 5, connect_timeout: 10, ssl: process.env.VEYAI_LOCAL_DATABASE === "true" ? false : "verify-full" });
try {
  await sql`set role veyai_worker`;
  await sql`select veyai_private.expire_jobs()`;
  // One bounded dispatch per invocation. A later deployment scheduler owns wake-up.
  const processed = await processFixtureJob({
    async claim() { const rows = await sql`select veyai_private.claim_job() as job`; return rows[0]?.job; },
    async finish(run, lease, body, sources, complete) { await sql`select veyai_private.finish_job(${run}::uuid,${lease}::uuid,${sql.json(body as postgres.JSONValue)},${sql.json(sources as postgres.JSONValue)},${complete})`; },
    async fail(run, lease) { await sql`select veyai_private.fail_job(${run}::uuid,${lease}::uuid)`; },
  });
  console.log(processed ? "One fixture job handled." : "No fixture job available.");
} finally { await sql.end(); }
