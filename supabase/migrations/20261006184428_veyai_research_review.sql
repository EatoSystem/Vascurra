create role veyai_worker nologin noinherit nobypassrls;
grant usage on schema veyai_private to veyai_worker;

create table veyai.agent_versions (
  agent_id text not null check (agent_id in ('research','evidence','operations','capital')),
  version text not null,
  prompt_version text not null,
  schema_version text not null,
  executable boolean not null default false,
  primary key (agent_id, version)
);
insert into veyai.agent_versions values
  ('research','0.1.0','research-0.1.0','0.1.0',true),
  ('evidence','0.1.0','evidence-0.1.0','0.1.0',true),
  ('operations','0.1.0','disabled','0.1.0',false),
  ('capital','0.1.0','disabled','0.1.0',false);

create table veyai.runs (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references veyai.workspaces(id),
  owner_id uuid not null,
  reviewer_id uuid not null,
  initiated_by uuid not null references auth.users(id),
  agent_id text not null check (agent_id in ('research','evidence')),
  agent_version text not null default '0.1.0',
  prompt_version text not null,
  model_version text not null default 'synthetic-fixture-0.1.0' check (model_version = 'synthetic-fixture-0.1.0'),
  mode text not null default 'fixture' check (mode = 'fixture'),
  fixture_key text not null check (fixture_key in ('association','missing-sources','injection')),
  status text not null default 'queued' check (status in ('queued','running','awaiting_review','incomplete','failed','cancelled')),
  parent_run_id uuid references veyai.runs(id),
  parent_output_id uuid,
  supersedes_run_id uuid references veyai.runs(id),
  is_current boolean not null default true,
  command_key uuid not null,
  created_at timestamptz not null default now(),
  completed_at timestamptz,
  failure_code text,
  foreign key (workspace_id, owner_id) references veyai.memberships(workspace_id,user_id),
  foreign key (workspace_id, reviewer_id) references veyai.memberships(workspace_id,user_id),
  foreign key (agent_id,agent_version) references veyai.agent_versions(agent_id,version),
  unique(initiated_by,command_key),
  check (owner_id <> reviewer_id),
  check ((agent_id = 'research' and parent_run_id is null and parent_output_id is null)
    or (agent_id = 'evidence' and parent_run_id is not null and parent_output_id is not null))
);
create index runs_workspace_created on veyai.runs(workspace_id,created_at desc);
create index runs_parent on veyai.runs(parent_run_id);

create table veyai.source_sets (
  id uuid primary key default gen_random_uuid(), run_id uuid not null unique references veyai.runs(id),
  version text not null default '0.1.0', sources jsonb not null check (jsonb_typeof(sources) = 'array'),
  content_hash text not null, created_at timestamptz not null default now()
);
create table veyai.outputs (
  id uuid primary key default gen_random_uuid(), run_id uuid not null unique references veyai.runs(id),
  source_set_id uuid not null references veyai.source_sets(id),
  schema_version text not null default '0.1.0', version integer not null default 1 check (version = 1),
  content jsonb not null, content_hash text not null, complete boolean not null,
  created_at timestamptz not null default now()
);
alter table veyai.runs add foreign key(parent_output_id) references veyai.outputs(id);
create table veyai.approvals (
  id uuid primary key default gen_random_uuid(), run_id uuid not null unique references veyai.runs(id),
  research_output_id uuid not null references veyai.outputs(id),
  evidence_output_id uuid not null references veyai.outputs(id),
  research_hash text not null, evidence_hash text not null,
  source_set_hash text not null,
  reviewer_id uuid not null references auth.users(id),
  status text not null default 'pending' check (status in ('pending','decided','stale')),
  created_at timestamptz not null default now()
);
create table veyai.decisions (
  id uuid primary key default gen_random_uuid(), run_id uuid not null references veyai.runs(id),
  approval_id uuid not null unique references veyai.approvals(id),
  actor_id uuid not null references auth.users(id),
  decision text not null check (decision in ('reject','hold','investigate_further','approve')),
  scope text not null check (scope in ('research_review','programme_planning')),
  reason text not null check (length(reason) between 10 and 2000),
  research_hash text not null, evidence_hash text not null, source_set_hash text not null,
  version integer not null default 1, command_key uuid not null unique,
  created_at timestamptz not null default now()
);
create table veyai.audit_log (
  id bigint generated always as identity primary key,
  run_id uuid not null references veyai.runs(id), actor_id uuid, event text not null,
  created_at timestamptz not null default now()
);
create table veyai_private.jobs (
  run_id uuid primary key references veyai.runs(id), lease uuid, lease_until timestamptz,
  state text not null default 'queued' check(state in ('queued','running','finished')),
  attempt integer not null default 0
);

create function veyai_private.can_read(r uuid) returns boolean language sql stable security definer set search_path = '' as $$
  select exists(select 1 from veyai.runs x where x.id = r and veyai_private.has_role(x.workspace_id)
    and (x.owner_id = auth.uid() or (x.reviewer_id = auth.uid() and veyai_private.has_role(x.workspace_id,array['reviewer','admin']))))
$$;
grant execute on function veyai_private.can_read(uuid) to authenticated;

alter table veyai.agent_versions enable row level security;
create policy agent_staff on veyai.agent_versions for select to authenticated using (
  exists(select 1 from veyai.memberships m where m.user_id = auth.uid() and veyai_private.has_role(m.workspace_id)));
alter table veyai.runs enable row level security;
create policy run_reader on veyai.runs for select to authenticated using(veyai_private.can_read(id));
alter table veyai.source_sets enable row level security;
alter table veyai.outputs enable row level security;
alter table veyai.approvals enable row level security;
alter table veyai.decisions enable row level security;
alter table veyai.audit_log enable row level security;
alter table veyai_private.jobs enable row level security;
create policy source_reader on veyai.source_sets for select to authenticated using(veyai_private.can_read(run_id));
create policy output_reader on veyai.outputs for select to authenticated using(veyai_private.can_read(run_id));
create policy approval_reader on veyai.approvals for select to authenticated using(veyai_private.can_read(run_id));
create policy decision_reader on veyai.decisions for select to authenticated using(veyai_private.can_read(run_id));
create policy audit_reader on veyai.audit_log for select to authenticated using(veyai_private.can_read(run_id));
grant select on veyai.agent_versions,veyai.runs,veyai.source_sets,veyai.outputs,veyai.approvals,veyai.decisions,veyai.audit_log to authenticated;

-- All writes pass through these bounded, fixed-search-path commands. No direct
-- table writes are granted to authenticated or the worker. Actor comes from JWT.
create function veyai_private.create_run(w uuid, reviewer uuid, fixture text, key uuid, parent uuid default null, supersedes uuid default null)
returns uuid language plpgsql security definer set search_path = '' as $$
declare r veyai.runs; p veyai.runs; o veyai.outputs; new_id uuid; limit_runs integer; total integer;
begin
  if not veyai_private.has_role(w,array['admin','researcher','reviewer']) then raise exception 'Access denied'; end if;
  -- Serialize reservations per initiating user. Failed/cancelled runs still count.
  perform 1 from veyai.memberships where workspace_id=w and user_id=auth.uid() for update;
  if not veyai_private.has_role(w,array['admin','researcher','reviewer']) then raise exception 'Access denied'; end if;
  select * into r from veyai.runs where initiated_by=auth.uid() and command_key=key;
  if found then
    if r.workspace_id<>w or r.fixture_key<>fixture or r.reviewer_id<>reviewer or r.parent_run_id is distinct from parent
      or r.supersedes_run_id is distinct from supersedes then raise exception 'Idempotency conflict'; end if;
    return r.id;
  end if;
  select daily_run_limit into limit_runs from veyai.workspaces where id=w and mode='fixture';
  if not found then raise exception 'Execution disabled'; end if;
  select count(*) into total from veyai.runs where workspace_id=w and initiated_by=auth.uid()
    and created_at >= date_trunc('day',now() at time zone 'UTC') at time zone 'UTC';
  if total >= limit_runs then raise exception 'Daily run limit reached'; end if;
  if fixture not in ('association','missing-sources','injection') then raise exception 'Unknown fixture'; end if;
  if not exists(select 1 from veyai.memberships where workspace_id=w and user_id=reviewer and active and role in ('reviewer','admin')) then raise exception 'Assigned reviewer required'; end if;
  if parent is null then
    if not veyai_private.has_role(w,array['admin','researcher']) or reviewer=auth.uid() then raise exception 'Research permission or independent reviewer required'; end if;
    if supersedes is not null then
      select * into p from veyai.runs where id=supersedes for update;
      if p.id is null or p.owner_id<>auth.uid() or p.workspace_id<>w or p.agent_id<>'research' or not p.is_current then raise exception 'Invalid revision'; end if;
      update veyai.runs set is_current=false where id=p.id or parent_run_id=p.id;
      update veyai.approvals set status='stale' where run_id in (select id from veyai.runs where parent_run_id=p.id);
    end if;
    insert into veyai.runs(workspace_id,owner_id,reviewer_id,initiated_by,agent_id,prompt_version,fixture_key,command_key,supersedes_run_id)
      values(w,auth.uid(),reviewer,auth.uid(),'research','research-0.1.0',fixture,key,supersedes) returning id into new_id;
  else
    if supersedes is not null then raise exception 'Invalid evidence revision'; end if;
    select * into p from veyai.runs where id=parent for update;
    select * into o from veyai.outputs where run_id=parent;
    if not veyai_private.can_read(parent) or p.workspace_id<>w or p.agent_id<>'research' or not p.is_current
      or p.status<>'awaiting_review' or o.id is null or not o.complete or p.fixture_key<>fixture or p.reviewer_id<>reviewer then raise exception 'Complete current Research required'; end if;
    if exists(select 1 from veyai.runs where parent_run_id=parent and status in ('queued','running')) then raise exception 'Evidence already pending'; end if;
    update veyai.runs set is_current=false where parent_run_id=parent;
    update veyai.approvals set status='stale' where run_id in(select id from veyai.runs where parent_run_id=parent);
    insert into veyai.runs(workspace_id,owner_id,reviewer_id,initiated_by,agent_id,prompt_version,fixture_key,command_key,parent_run_id,parent_output_id)
      values(w,p.owner_id,p.reviewer_id,auth.uid(),'evidence','evidence-0.1.0',fixture,key,parent,o.id) returning id into new_id;
  end if;
  insert into veyai_private.jobs(run_id) values(new_id);
  insert into veyai.audit_log(run_id,actor_id,event) values(new_id,auth.uid(),'run_requested');
  return new_id;
end $$;
create function veyai.create_run(w uuid, reviewer uuid, fixture text, key uuid, parent uuid default null, supersedes uuid default null)
returns uuid language sql security invoker set search_path = '' as $$ select veyai_private.create_run(w,reviewer,fixture,key,parent,supersedes) $$;
grant execute on function veyai_private.create_run(uuid,uuid,text,uuid,uuid,uuid),veyai.create_run(uuid,uuid,text,uuid,uuid,uuid) to authenticated;

create function veyai_private.cancel_run(target uuid) returns void language plpgsql security definer set search_path = '' as $$
declare r veyai.runs;
begin
  select * into r from veyai.runs where id=target for update;
  if not veyai_private.can_read(target) or r.owner_id<>auth.uid() then raise exception 'Access denied'; end if;
  if r.status not in ('queued','running') then raise exception 'Run cannot be cancelled'; end if;
  update veyai.runs set status='cancelled',completed_at=now() where id=target;
  update veyai_private.jobs set state='finished',lease=null where run_id=target;
  insert into veyai.audit_log(run_id,actor_id,event) values(target,auth.uid(),'run_cancelled');
end $$;
create function veyai.cancel_run(target uuid) returns void language sql security invoker set search_path = '' as $$ select veyai_private.cancel_run(target) $$;
grant execute on function veyai_private.cancel_run(uuid),veyai.cancel_run(uuid) to authenticated;

create function veyai_private.decide(target uuid, expected_research text, expected_evidence text, choice text, explanation text, key uuid)
returns uuid language plpgsql security definer set search_path = '' as $$
declare a veyai.approvals; r veyai.runs; d veyai.decisions; result uuid;
begin
  select * into a from veyai.approvals where id=target;
  if a.id is null or not veyai_private.can_read(a.run_id) or a.reviewer_id<>auth.uid() then raise exception 'Access denied'; end if;
  -- Lock Research before Evidence before approval, matching handoff/revision order.
  select * into r from veyai.runs where id=a.run_id;
  perform 1 from veyai.memberships where workspace_id=r.workspace_id and user_id=auth.uid() for share;
  perform 1 from veyai.runs where id=r.parent_run_id for update;
  select * into r from veyai.runs where id=a.run_id for update;
  select * into a from veyai.approvals where id=target for update;
  if not veyai_private.has_role(r.workspace_id,array['reviewer','admin']) then raise exception 'Reviewer permission required'; end if;
  if a.status='stale' or not r.is_current or not exists(select 1 from veyai.runs where id=r.parent_run_id and is_current)
    or a.research_hash is distinct from expected_research or a.evidence_hash is distinct from expected_evidence then raise exception 'Stale approval'; end if;
  select * into d from veyai.decisions where command_key=key;
  if found then
    if d.approval_id<>target or d.actor_id<>auth.uid() or d.decision<>choice or d.reason<>explanation then raise exception 'Idempotency conflict'; end if;
    return d.id;
  end if;
  if a.status<>'pending' then raise exception 'Decision already recorded'; end if;
  insert into veyai.decisions(run_id,approval_id,actor_id,decision,scope,reason,research_hash,evidence_hash,source_set_hash,command_key)
    values(r.id,a.id,auth.uid(),choice,case when choice='approve' then 'programme_planning' else 'research_review' end,
      explanation,a.research_hash,a.evidence_hash,a.source_set_hash,key) returning id into result;
  update veyai.approvals set status='decided' where id=target;
  insert into veyai.audit_log(run_id,actor_id,event) values(r.id,auth.uid(),'human_decision_recorded');
  -- STOP. No job, programme or external action is created by a decision.
  return result;
end $$;
create function veyai.decide(target uuid, expected_research text, expected_evidence text, choice text, explanation text, key uuid)
returns uuid language sql security invoker set search_path = '' as $$ select veyai_private.decide(target,expected_research,expected_evidence,choice,explanation,key) $$;
grant execute on function veyai_private.decide(uuid,text,text,text,text,uuid),veyai.decide(uuid,text,text,text,text,uuid) to authenticated;

-- Worker commands cannot approve, alter roles or contact external systems.
create function veyai_private.claim_job() returns jsonb language plpgsql security definer set search_path = '' as $$
declare j veyai_private.jobs; r veyai.runs; token uuid;
begin
  -- Run before job everywhere, so cancellation and dispatch share lock order.
  select x.* into r from veyai.runs x join veyai_private.jobs q on q.run_id=x.id
    where q.state='queued' order by x.created_at for update of x skip locked limit 1;
  if r.id is null then return null; end if;
  select * into j from veyai_private.jobs where run_id=r.id for update;
  if r.status<>'queued' or not r.is_current or not exists(select 1 from veyai.workspaces where id=r.workspace_id and mode='fixture')
    or not exists(select 1 from veyai.memberships where workspace_id=r.workspace_id and user_id=r.initiated_by and active)
    or not exists(select 1 from veyai.memberships where workspace_id=r.workspace_id and user_id=r.owner_id and active and role in ('researcher','admin'))
    or not exists(select 1 from veyai.memberships where workspace_id=r.workspace_id and user_id=r.reviewer_id and active and role in ('reviewer','admin'))
    or (r.parent_run_id is not null and not exists(select 1 from veyai.runs where id=r.parent_run_id and is_current)) then
    update veyai_private.jobs set state='finished' where run_id=r.id;
    update veyai.runs set status='failed',failure_code='authorization_or_scope_changed',completed_at=now() where id=r.id;
    insert into veyai.audit_log(run_id,event) values(r.id,'dispatch_denied');
    return null;
  end if;
  token:=gen_random_uuid();
  update veyai_private.jobs set state='running',lease=token,lease_until=now()+interval '2 minutes',attempt=attempt+1 where run_id=r.id;
  update veyai.runs set status='running' where id=r.id;
  insert into veyai.audit_log(run_id,event) values(r.id,'run_started');
  return jsonb_build_object('run',to_jsonb(r),'lease',token,'parent_output',
    (select to_jsonb(o) from veyai.outputs o where o.id=r.parent_output_id));
end $$;

create function veyai_private.finish_job(target uuid, token uuid, body jsonb, sources jsonb, is_complete boolean)
returns uuid language plpgsql security definer set search_path = '' as $$
declare r veyai.runs; j veyai_private.jobs; source_id uuid; output_id uuid; source_hash text; output_hash text; parent_out veyai.outputs;
begin
  -- Parent before child: revisions cannot race a successful Evidence publication.
  select * into r from veyai.runs where id=target;
  if r.parent_run_id is not null then perform 1 from veyai.runs where id=r.parent_run_id for update; end if;
  select * into r from veyai.runs where id=target for update;
  select * into j from veyai_private.jobs where run_id=target for update;
  if j.lease is distinct from token or j.state<>'running' or j.lease_until<now() or r.status<>'running' then raise exception 'Lease expired or run cancelled'; end if;
  if not r.is_current or not exists(select 1 from veyai.memberships where workspace_id=r.workspace_id and user_id=r.owner_id and active and role in ('researcher','admin'))
    or not exists(select 1 from veyai.memberships where workspace_id=r.workspace_id and user_id=r.initiated_by and active)
    or not exists(select 1 from veyai.memberships where workspace_id=r.workspace_id and user_id=r.reviewer_id and active and role in ('reviewer','admin'))
    or not exists(select 1 from veyai.workspaces where id=r.workspace_id and mode='fixture') then raise exception 'Scope revoked'; end if;
  if jsonb_typeof(sources) is distinct from 'array' or jsonb_typeof(body) is distinct from 'object' or body->>'schema_version' is distinct from '0.1.0' then raise exception 'Invalid output'; end if;
  if is_complete and jsonb_array_length(sources)=0 then raise exception 'Provenance required'; end if;
  if r.agent_id='evidence' then
    select * into parent_out from veyai.outputs where id=r.parent_output_id;
    if not exists(select 1 from veyai.runs where id=r.parent_run_id and is_current)
      or body->>'research_output_id' is distinct from parent_out.id::text
      or body->>'research_hash' is distinct from parent_out.content_hash then raise exception 'Stale Research'; end if;
    if sources is distinct from (select s.sources from veyai.source_sets s where s.id=parent_out.source_set_id) then raise exception 'Source set mismatch'; end if;
  end if;
  source_hash:=encode(sha256(convert_to(sources::text,'UTF8')),'hex');
  output_hash:=encode(sha256(convert_to(body::text,'UTF8')),'hex');
  insert into veyai.source_sets(run_id,sources,content_hash) values(target,sources,source_hash) returning id into source_id;
  insert into veyai.outputs(run_id,source_set_id,content,content_hash,complete) values(target,source_id,body,output_hash,is_complete) returning id into output_id;
  update veyai.runs set status=case when is_complete then 'awaiting_review' else 'incomplete' end,completed_at=now() where id=target;
  update veyai_private.jobs set state='finished',lease=null where run_id=target;
  if r.agent_id='evidence' and is_complete and parent_out.complete then
    insert into veyai.approvals(run_id,research_output_id,evidence_output_id,research_hash,evidence_hash,source_set_hash,reviewer_id)
      values(target,parent_out.id,output_id,parent_out.content_hash,output_hash,source_hash,r.reviewer_id);
  end if;
  insert into veyai.audit_log(run_id,event) values(target,case when is_complete then 'output_validated' else 'output_incomplete' end);
  return output_id;
end $$;

create function veyai_private.fail_job(target uuid, token uuid) returns void language plpgsql security definer set search_path = '' as $$
begin
  perform 1 from veyai.runs where id=target for update;
  if exists(select 1 from veyai_private.jobs where run_id=target and lease=token and state='running') then
    update veyai.runs set status='failed',failure_code='execution_or_validation_failed',completed_at=now() where id=target and status='running';
    update veyai_private.jobs set state='finished',lease=null where run_id=target;
    insert into veyai.audit_log(run_id,event) values(target,'run_failed');
  end if;
end $$;

create function veyai_private.expire_jobs() returns void language plpgsql security definer set search_path = '' as $$
declare target uuid;
begin
  for target in select run_id from veyai_private.jobs where state='running' and lease_until<now() loop
    perform 1 from veyai.runs where id=target for update;
    if not exists(select 1 from veyai_private.jobs where run_id=target and state='running' and lease_until<now()) then continue; end if;
    update veyai.runs set status='failed',failure_code='worker_lease_expired',completed_at=now() where id=target and status='running';
    update veyai_private.jobs set state='finished',lease=null where run_id=target and lease_until<now();
    insert into veyai.audit_log(run_id,event) values(target,'worker_lease_expired');
  end loop;
end $$;
grant execute on function veyai_private.claim_job(),veyai_private.finish_job(uuid,uuid,jsonb,jsonb,boolean),
  veyai_private.fail_job(uuid,uuid),veyai_private.expire_jobs() to veyai_worker;
revoke all on all tables in schema veyai_private from public, anon, authenticated, veyai_worker;
revoke all on all tables in schema veyai from anon;
-- Preserve explicit authenticated/worker grants, remove global PUBLIC execute.
revoke execute on all functions in schema veyai, veyai_private from public, anon;
