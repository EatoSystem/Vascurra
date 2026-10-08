import { PGlite } from "@electric-sql/pglite";
import { readFileSync, readdirSync } from "node:fs";
import { beforeAll, beforeEach, afterAll, describe, expect, it } from "vitest";
import { processFixtureJob } from "@/lib/veyai/runtime/fixture-worker";

const owner = "00000000-0000-4000-8000-000000000001";
const reviewer = "00000000-0000-4000-8000-000000000002";
const stranger = "00000000-0000-4000-8000-000000000003";
const workspace = "00000000-0000-4000-8000-000000000010";
const otherWorkspace = "00000000-0000-4000-8000-000000000020";
const session = (id: string) => id.replace("00000000-0000", "10000000-0000");
let db: PGlite;
async function admin() { await db.exec("reset role; select set_config('request.jwt.claims','{}',false)"); }
async function staff(id = owner, aal = "aal2") {
  await db.exec("reset role; set role authenticated");
  await db.query("select set_config('request.jwt.claims',$1,false)", [JSON.stringify({ sub: id, aal, session_id: session(id), role: "authenticated", is_anonymous: false })]);
}
async function scalar<T>(sql: string, values: unknown[] = []) { const result = await db.query<{ value: T }>(sql, values); return result.rows[0]!.value; }
async function create(fixture = "association", parent: string | null = null, supersedes: string | null = null, key = crypto.randomUUID()) {
  return scalar<string>("select veyai.create_run($1,$2,$3,$4,$5,$6) as value", [workspace, reviewer, fixture, key, parent, supersedes]);
}
async function work() {
  await db.exec("reset role; set role veyai_worker");
  return processFixtureJob({
    claim: () => scalar("select veyai_private.claim_job() as value"),
    async finish(run, lease, body, sources, complete) { await db.query("select veyai_private.finish_job($1,$2,$3,$4,$5)", [run, lease, JSON.stringify(body), JSON.stringify(sources), complete]); },
    async fail(run, lease) { await db.query("select veyai_private.fail_job($1,$2)", [run, lease]); },
  });
}
async function paired() {
  await staff(); const research = await create(); await work(); await staff(); const evidence = await create("association", research); await work(); await staff(reviewer);
  const approval = (await db.query<{ id: string; research_hash: string; evidence_hash: string }>("select * from veyai.approvals where run_id=$1", [evidence])).rows[0]!;
  return { research, evidence, approval };
}
async function decide(a: { id: string; research_hash: string; evidence_hash: string }, key = crypto.randomUUID(), choice = "approve") {
  return scalar<string>("select veyai.decide($1,$2,$3,$4,$5,$6) as value", [a.id, a.research_hash, a.evidence_hash, choice, "Fictional review decision for testing only.", key]);
}

beforeAll(async () => {
  db = new PGlite();
  await db.exec(`create role anon; create role authenticated; create schema auth;
    create table auth.users(id uuid primary key);
    create table auth.sessions(id uuid primary key,user_id uuid references auth.users(id),not_after timestamptz);
    create function auth.jwt() returns jsonb language sql stable as $$ select coalesce(nullif(current_setting('request.jwt.claims',true),''),'{}')::jsonb $$;
    create function auth.uid() returns uuid language sql stable as $$ select (auth.jwt()->>'sub')::uuid $$;
    grant usage on schema auth to authenticated;
    grant execute on function auth.jwt(),auth.uid() to authenticated;`);
  for (const file of readdirSync("supabase/migrations").filter((name) => name.endsWith(".sql")).sort()) await db.exec(readFileSync(`supabase/migrations/${file}`, "utf8"));
}, 30000);
beforeEach(async () => {
  await admin();
  await db.exec("truncate veyai.workspaces,auth.users cascade");
  for (const id of [owner, reviewer, stranger]) {
    await db.query("insert into auth.users values($1)", [id]);
    await db.query("insert into auth.sessions values($1,$2,null)", [session(id),id]);
  }
  await db.query("insert into veyai.workspaces(id,name,mode) values($1,'Fictional workspace','fixture'),($2,'Other fixture workspace','fixture')", [workspace,otherWorkspace]);
  await db.query("insert into veyai.memberships values($1,$2,'researcher','Fictional owner',true),($1,$3,'reviewer','Fictional reviewer',true),($1,$4,'researcher','Unrelated fictional member',true),($5,$4,'admin','Other workspace admin',true)", [workspace,owner,reviewer,stranger,otherWorkspace]);
  await staff();
});
afterAll(async () => { await db?.close(); });

describe("actual PostgreSQL RLS and transactional commands (synthetic auth harness)", () => {
  it("denies anonymous access and exposes no privileged public functions", async () => {
    await admin();
    const publicFunctions = await db.query<{ name: string }>(`select p.proname as name from pg_proc p
      join pg_namespace n on n.oid=p.pronamespace where n.nspname in ('veyai','veyai_private')
      and (has_function_privilege('anon',p.oid,'execute')
        or exists(select 1 from aclexplode(coalesce(p.proacl,acldefault('f',p.proowner))) a
          where a.grantee=0 and a.privilege_type='EXECUTE'))`);
    expect(publicFunctions.rows).toEqual([]);
    await db.exec("reset role; set role anon");
    await expect(db.exec("select * from veyai.runs")).rejects.toThrow();
    await expect(db.exec("select veyai_private.claim_job()")).rejects.toThrow();
  });
  it("keeps worker access confined to its bounded commands", async () => {
    await create();
    await db.exec("reset role; set role veyai_worker");
    for (const table of ["veyai.runs", "veyai.outputs", "veyai.source_sets", "veyai.approvals", "veyai.decisions", "veyai.memberships", "veyai_private.jobs"]) {
      await expect(db.exec(`select * from ${table}`)).rejects.toThrow();
    }
    await expect(create()).rejects.toThrow();
    await expect(db.exec("select veyai_private.decide(null,null,null,null,null,null)")).rejects.toThrow("permission denied");
    expect(await scalar("select veyai_private.claim_job() as value")).not.toBeNull();
  });
  it("does not let authenticated staff invoke worker commands directly", async () => {
    await create();
    await expect(db.exec("select veyai_private.claim_job()")).rejects.toThrow("permission denied");
    await expect(db.exec("select veyai_private.finish_job(null,null,'{}','[]',false)")).rejects.toThrow("permission denied");
    await expect(db.exec("select veyai_private.fail_job(null,null)")).rejects.toThrow("permission denied");
    await expect(db.exec("select veyai_private.expire_jobs()")).rejects.toThrow("permission denied");
  });
  it("requires an independent reviewer even when the requester is an administrator", async () => {
    await admin();
    await db.query("update veyai.memberships set role='admin' where user_id=$1", [owner]);
    await staff();
    await expect(db.query("select veyai.create_run($1,$2,'association',$3)", [workspace, owner, crypto.randomUUID()]))
      .rejects.toThrow("independent reviewer required");
    expect(await scalar("select count(*)::int as value from veyai.runs")).toBe(0);
  });
  it("requires a current session and MFA even for a legitimate member", async () => {
    await staff(owner,"aal1"); await expect(create()).rejects.toThrow("Access denied");
    await admin(); await db.query("delete from auth.sessions where user_id=$1",[owner]); await staff();
    await expect(create()).rejects.toThrow("Access denied");
  });
  it("does not let role claims or workspace membership grant another person's runs", async () => {
    const id = await create(); await work(); await staff(stranger);
    for (const table of ["runs","outputs","source_sets","audit_log"]) expect((await db.query(`select * from veyai.${table}`)).rows).toHaveLength(0);
    await expect(create("association",id)).rejects.toThrow();
    await expect(db.query("update veyai.memberships set role='admin'")).rejects.toThrow();
    await expect(db.query("insert into veyai.runs(id) values($1)",[crypto.randomUUID()])).rejects.toThrow();
  });
  it("persists Research, exact sources, Evidence and an independent human decision then stops", async () => {
    const { approval, evidence } = await paired();
    await decide(approval);
    expect(await scalar("select count(*)::int as value from veyai.decisions")).toBe(1);
    expect(await scalar("select scope as value from veyai.decisions")).toBe("programme_planning");
    await admin();
    expect(await scalar("select count(*)::int as value from veyai.runs")).toBe(2);
    expect(await scalar("select count(*)::int as value from veyai_private.jobs where state<>'finished'")).toBe(0);
    expect(await scalar("select count(*)::int as value from veyai.audit_log where run_id=$1 and event='human_decision_recorded'",[evidence])).toBe(1);
  });
  it("rejects self approval and worker approval, including direct mutation", async () => {
    const { approval } = await paired(); await staff(); await expect(decide(approval)).rejects.toThrow("Access denied");
    await db.exec("reset role; set role veyai_worker"); await expect(decide(approval)).rejects.toThrow();
    await expect(db.exec("update veyai.approvals set status='decided'")).rejects.toThrow();
  });
  it("makes prior approval stale when Research is revised", async () => {
    const { research, approval } = await paired(); await decide(approval); await staff(); await create("association",null,research); await staff(reviewer);
    expect(await scalar("select status as value from veyai.approvals where id=$1",[approval.id])).toBe("stale");
    await expect(decide(approval)).rejects.toThrow("Stale approval");
    expect(await scalar("select count(*)::int as value from veyai.decisions")).toBe(1);
  });
  it("makes prior approval stale when a new Evidence review is requested", async () => {
    const { research, approval } = await paired(); await create("association", research);
    await expect(decide(approval)).rejects.toThrow("Stale approval");
  });
  it("rejects mismatched hashes and duplicate conflicting decisions", async () => {
    const { approval } = await paired();
    await expect(db.query("select veyai.decide($1,null,null,'approve','Fictional reason for test',$2)",[approval.id,crypto.randomUUID()])).rejects.toThrow("Stale approval");
    await expect(decide({ ...approval, research_hash: "0".repeat(64) })).rejects.toThrow("Stale approval");
    const key = crypto.randomUUID(); const id = await decide(approval,key); expect(await decide(approval,key)).toBe(id);
    await expect(decide(approval,key,"reject")).rejects.toThrow("Idempotency conflict");
    await expect(decide(approval)).rejects.toThrow("Decision already recorded");
    await expect(db.exec("update veyai.decisions set reason='changed'")).rejects.toThrow();
  });
  it("treats missing provenance as incomplete and prevents Evidence/approval", async () => {
    const id = await create("missing-sources"); await work(); await staff();
    expect(await scalar("select status as value from veyai.runs where id=$1",[id])).toBe("incomplete");
    await expect(create("missing-sources",id)).rejects.toThrow("Complete current Research required");
  });
  it("does not let injected source instructions create decisions or downstream jobs", async () => {
    const id = await create("injection"); await work(); await staff(); await create("injection",id); await work(); await admin();
    expect(await scalar("select count(*)::int as value from veyai.decisions")).toBe(0);
    expect(await scalar("select count(*)::int as value from veyai.runs")).toBe(2);
    expect(await scalar("select count(*)::int as value from veyai.runs where agent_id not in ('research','evidence')")).toBe(0);
  });
  it("cancels queued work and rejects a late completion", async () => {
    const id = await create(); await db.exec("reset role; set role veyai_worker");
    const job = await scalar<{ lease: string }>("select veyai_private.claim_job() as value");
    await staff(); await db.query("select veyai.cancel_run($1)",[id]);
    await db.exec("reset role; set role veyai_worker");
    await expect(db.query("select veyai_private.finish_job($1,$2,'{}','[]',true)",[id,job.lease])).rejects.toThrow("Lease expired or run cancelled");
    await staff(); expect(await scalar("select status as value from veyai.runs where id=$1",[id])).toBe("cancelled");
  });
  it("rejects expired leases and records the expiry without accepting output", async () => {
    const id = await create();
    await db.exec("reset role; set role veyai_worker");
    const job = await scalar<{ lease: string }>("select veyai_private.claim_job() as value");
    await admin();
    await db.query("update veyai_private.jobs set lease_until=now()-interval '1 second' where run_id=$1", [id]);
    await db.exec("set role veyai_worker");
    await expect(db.query("select veyai_private.finish_job($1,$2,'{}','[]',false)", [id, job.lease]))
      .rejects.toThrow("Lease expired or run cancelled");
    await db.exec("select veyai_private.expire_jobs()");
    await staff();
    expect(await scalar("select failure_code as value from veyai.runs where id=$1", [id])).toBe("worker_lease_expired");
    expect(await scalar("select count(*)::int as value from veyai.outputs where run_id=$1", [id])).toBe(0);
    expect(await scalar("select count(*)::int as value from veyai.audit_log where run_id=$1 and event='worker_lease_expired'", [id])).toBe(1);
  });
  it("rechecks the assigned reviewer's role before publishing a worker result", async () => {
    const id = await create();
    await db.exec("reset role; set role veyai_worker");
    const job = await scalar<{ lease: string }>("select veyai_private.claim_job() as value");
    await admin();
    await db.query("update veyai.memberships set role='researcher' where workspace_id=$1 and user_id=$2", [workspace, reviewer]);
    await db.exec("set role veyai_worker");
    await expect(db.query("select veyai_private.finish_job($1,$2,'{}','[]',false)", [id, job.lease])).rejects.toThrow("Scope revoked");
    await db.query("select veyai_private.fail_job($1,$2)", [id, job.lease]);
    await staff(reviewer);
    expect((await db.query("select * from veyai.runs")).rows).toHaveLength(0);
    await staff();
    expect(await scalar("select status as value from veyai.runs where id=$1", [id])).toBe("failed");
    expect(await scalar("select count(*)::int as value from veyai.outputs where run_id=$1", [id])).toBe(0);
  });
  it("rejects an Evidence result when Research is revised during execution", async () => {
    const research = await create(); await work(); await staff();
    const evidence = await create("association", research);
    await db.exec("reset role; set role veyai_worker");
    const job = await scalar<{ lease: string }>("select veyai_private.claim_job() as value");
    await staff(); await create("association", null, research);
    await db.exec("reset role; set role veyai_worker");
    await expect(db.query("select veyai_private.finish_job($1,$2,'{}','[]',false)", [evidence, job.lease])).rejects.toThrow("Scope revoked");
    await staff();
    expect(await scalar("select is_current as value from veyai.runs where id=$1", [evidence])).toBe(false);
    expect(await scalar("select count(*)::int as value from veyai.outputs where run_id=$1", [evidence])).toBe(0);
    expect(await scalar("select count(*)::int as value from veyai.approvals")).toBe(0);
  });
  it("rechecks membership before dispatch and hides records after revocation", async () => {
    await create(); await admin(); await db.query("update veyai.memberships set active=false where user_id=$1",[owner]);
    expect(await work()).toBe(false); await staff(); expect((await db.query("select * from veyai.runs")).rows).toHaveLength(0);
    await admin(); expect(await scalar("select status as value from veyai.runs")).toBe("failed");
  });
  it("enforces a durable daily cap and idempotency before queueing", async () => {
    await admin(); await db.exec("update veyai.workspaces set daily_run_limit=1"); await staff();
    const key = crypto.randomUUID(); const id = await create("association",null,null,key); expect(await create("association",null,null,key)).toBe(id);
    await expect(create()).rejects.toThrow("Daily run limit reached");
    await expect(create("injection",null,null,key)).rejects.toThrow("Idempotency conflict");
  });
  it("cannot enable live execution through a database mode or client parameter", async () => {
    await admin(); await expect(db.exec("update veyai.workspaces set mode='live'")).rejects.toThrow();
    await staff(); await expect(create("unrestricted-live-task")).rejects.toThrow("Unknown fixture");
  });
});
