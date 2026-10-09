-- VeyAI is a separate institutional scope. No Veya or patient tables are used.
create schema veyai;
create schema veyai_private;
revoke all on schema veyai, veyai_private from public, anon, authenticated;
grant usage on schema veyai, veyai_private to authenticated;
alter default privileges in schema veyai revoke all on tables from public, anon, authenticated;
alter default privileges in schema veyai_private revoke execute on functions from public;
alter default privileges in schema veyai revoke execute on functions from public;

create table veyai.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  mode text not null default 'disabled' check (mode in ('disabled', 'fixture')),
  daily_run_limit integer not null default 10 check (daily_run_limit between 1 and 100),
  -- Monetary limits default to zero. Live execution has no activation path yet.
  per_run_micro_usd bigint not null default 0 check (per_run_micro_usd >= 0),
  per_user_daily_micro_usd bigint not null default 0 check (per_user_daily_micro_usd >= 0)
);
create table veyai.memberships (
  workspace_id uuid not null references veyai.workspaces(id),
  user_id uuid not null references auth.users(id),
  role text not null check (role in ('admin', 'researcher', 'reviewer')),
  display_name text not null check (length(display_name) between 1 and 100),
  active boolean not null default true,
  primary key (workspace_id, user_id)
);
alter table veyai.workspaces enable row level security;
alter table veyai.memberships enable row level security;

-- Narrow, fixed-search-path privileged identity lookup. Not an exposed RPC.
-- Checks the current session and membership, not user-editable JWT metadata.
create function veyai_private.session_ok(mfa boolean default true) returns boolean
language sql stable security definer set search_path = '' as $$
  select auth.uid() is not null
    and coalesce((auth.jwt()->>'is_anonymous')::boolean, false) = false
    and (not mfa or auth.jwt()->>'aal' = 'aal2')
    and exists (select 1 from auth.sessions s where s.id::text = auth.jwt()->>'session_id'
      and s.user_id = auth.uid() and (s.not_after is null or s.not_after > now()))
$$;
create function veyai_private.has_role(w uuid, roles text[] default array['admin','researcher','reviewer']) returns boolean
language sql stable security definer set search_path = '' as $$
  select veyai_private.session_ok() and exists (
    select 1 from veyai.memberships m where m.workspace_id = w and m.user_id = auth.uid()
      and m.active and m.role = any(roles))
$$;
create function veyai_private.staff_memberships() returns table(workspace_id uuid, role text, display_name text)
language sql stable security definer set search_path = '' as $$
  select m.workspace_id, m.role, m.display_name from veyai.memberships m
    where veyai_private.session_ok(false) and m.user_id = auth.uid() and m.active
$$;
create function veyai.staff_memberships() returns table(workspace_id uuid, role text, display_name text)
language sql stable security invoker set search_path = '' as $$ select * from veyai_private.staff_memberships() $$;

create policy workspace_member on veyai.workspaces for select to authenticated using (veyai_private.has_role(id));
create policy membership_directory on veyai.memberships for select to authenticated using (veyai_private.has_role(workspace_id) and active);
grant select on veyai.workspaces, veyai.memberships to authenticated;
grant execute on function veyai_private.session_ok(boolean), veyai_private.has_role(uuid,text[]),
  veyai_private.staff_memberships(), veyai.staff_memberships() to authenticated;
-- No user can insert/update membership, role, workspace or quotas through the API.

-- PostgreSQL's global PUBLIC execute default is not removed by a schema-local
-- ALTER DEFAULT PRIVILEGES REVOKE. Explicitly close every created function.
-- Named authenticated grants above remain in place.
revoke execute on all functions in schema veyai, veyai_private from public, anon;
