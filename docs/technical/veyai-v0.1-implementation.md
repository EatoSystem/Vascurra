# VeyAI v0.1 — fixture implementation and activation gates

> **Subsequent fixture-product approval, 7 October 2026:** The founder explicitly
> authorised local development identities and credential-free fixture providers.
> The earlier requirement below for actual Supabase identity in every fixture
> environment is superseded for local development only. Connected/production
> identity still requires verified staff Auth/MFA/RLS. See
> [external provider architecture](external-provider-architecture.md) for the
> current capability policy, providers and wider synthetic product scope. The
> original implementation and activation record below is retained as history.

Status: local implementation for review, 7 October 2026. Supabase and OpenAI
account setup are deferred at the founder's request. No remote migrations,
live model calls or production deployment are recorded by this document.

## Scope and authority

The founder approved the [architecture proposal](veyai-v0.1-proposal.md) with
scope locked to Research → explicitly requested Evidence → Human Decision.
Identity, permissions, provenance, versioning and budgets are foundational.

**OpenAI is the reasoning runtime. Vascurra is the system of record.** Supabase
is the selected infrastructure for the durable institutional record. OpenAI
integration is still a future activation step, not an installed runtime here.

The implemented slice uses fictional, non-sensitive source bundles and fixed
outputs. It exercises workflow mechanics, not scientific reasoning. Veya,
Patient 0, patient information and the future clinical platform remain outside
this scope. Operations and Capital are descriptive shells without executable
tools. A human decision starts no downstream workflow or external action.

## What exists locally

| Area | Current implementation |
| --- | --- |
| Staff identity | Request-scoped Supabase SSR client, existing-account email sign-in, invitation callback, TOTP enrolment/verification and sign-out. Current user and active workspace membership are checked before console access; console records and commands require MFA. |
| Permissions | `admin`, `researcher`, `reviewer` membership roles. Researchers/admins can request Research with a different assigned reviewer. Runs are visible only to their owner or assigned reviewer with the required active role. Being a workspace administrator does not grant blanket run access. |
| Database | Two local migrations define `veyai` record tables and `veyai_private` jobs/commands, explicit grants, RLS and narrow mutation functions. They have not been applied to a remote project. |
| Contracts | Version `0.1.0` Research/Evidence contracts and strict runtime output schemas; Operations/Capital are `shell`. Human owners remain unassigned pending setup. |
| Fixtures | Association versus causation; missing provenance; and malicious instructions embedded in source content. All examples are explicitly fictional. |
| Workstation | Staff console, Research/Evidence lists, individual run records, paired output review, sources, version/hash metadata, history, cancellation, revision and assigned human decisions. |
| Worker | A separate Node command processes at most one queued fixture job per invocation through a restricted database role. No OpenAI dependency, web search, arbitrary document upload or autonomous orchestration. |
| Usage controls | Transactional daily run-count cap for each initiating user within a workspace; duplicate command protection; one fixture dispatch per worker invocation. Monetary fields default to zero; no live execution path exists. |
| Public information | `/VeyAI-Research`, `/VeyAI-Evidence`, `/VeyAI-Operations` and `/VeyAI-Capital` explain the four roles within the existing marketing preview policy. These pages grant no console access. |

Core is the state-transition and permission logic in server actions and database
commands. It is not a model-led manager. Public explanatory content stays
separate from private domain contracts and operational records.

## Configuration and failure behaviour

Use Node 24, as pinned by `package.json` and `.node-version`. Dependency versions
and the lockfile accompany the implementation. `.env.example` contains names
and safe empty/default values only; copy appropriate values to an ignored local
environment file when an authorised development project is available. Never
commit credentials or personal identifiers.

| Variable | Meaning |
| --- | --- |
| `VEYAI_CONSOLE_ENABLED` | Defaults to `false`. `true` still requires a Supabase URL and publishable key. |
| `VEYAI_EXECUTION_MODE` | Only `fixture` enables fixture submissions. Missing, `disabled`, `live` or any unknown value resolves to disabled execution. |
| `VEYAI_APP_ORIGIN` | Exact authorised app origin for sign-in callbacks; example local value `http://localhost:3100`. |
| `VEYAI_SUPABASE_URL` | URL of the deliberately selected development project/local stack. |
| `VEYAI_SUPABASE_PUBLISHABLE_KEY` | Publishable key for the staff SSR client, used with the user's session. Never substitute a service-role/secret key. |
| `VEYAI_WORKER_DATABASE_URL` | Secret connection for a dedicated restricted worker login; never a superuser, `postgres` administrator or general application connection. |
| `VEYAI_LOCAL_DATABASE` | `true` permits non-TLS connections for a deliberately local database. Remote worker connections use full certificate verification. |

No `OPENAI_API_KEY` is required or consumed. Turning a flag to `live` does not
install or enable live execution. A marketing-preview cookie is not a staff
identity and cannot bypass these controls.

Without configuration, private paths return unavailable/404. With configuration,
staff must use actual Supabase Auth and satisfy membership and MFA checks even
for fictional fixtures. No development credential, hard-coded staff user or
browser-only bypass is provided. Private routes dispatch before the marketing
gate and use no-store/noindex treatment; object access is checked again by
server code and database permissions.

## Development setup when the founder is ready

This is a setup procedure, not a record that these actions have occurred.

1. Select an isolated development Supabase project or local Supabase stack.
   Inspect its existing schema, Auth configuration and grants before applying
   the two migrations. Do not point at an unrelated or production project.
2. The CLI-initialised `supabase/config.toml` disables public and anonymous
   sign-up, enables TOTP enrolment/verification, and sets the local app origin
   and exact `/auth/veyai/callback` return URL. Match those controls deliberately
   in a hosted project: the local file does not configure a remote project by
   itself. Set invitation email/callback delivery and rate limits for the
   selected environment, then verify invitation, email sign-in, MFA and logout.
3. Expose `veyai` in the development Data API schema list. Keep `veyai_private`
   unexposed. The migrations provide explicit table/function grants and RLS;
   schema exposure is not a substitute for either. The checked-in local schema
   list is `public`, `graphql_public`, `veyai`; no VeyAI records use `public`.
4. Review and apply `20261006184425_veyai_staff_foundation.sql`, followed by
   `20261006184428_veyai_research_review.sql`, to the selected development target
   using the established migration workflow. Confirm resulting grants, RLS and
   functions against the real Supabase Auth schema and run database advisors.
5. Invite the named staff identities through the authorised administrator.
   Create a synthetic workspace and explicit active memberships through a
   controlled administrative setup. Add a separate researcher/owner and
   reviewer; the owner cannot approve their own work. There is no public signup,
   self-assigned role or membership-management console in this slice.
6. The migrations create a `NOLOGIN NOINHERIT NOBYPASSRLS` role named
   `veyai_worker`. An administrator must provision a separate login with only
   the right to assume that role, no superuser/create-role/create-database
   rights, no RLS bypass and no direct application-table write grants. The
   runtime performs `SET ROLE veyai_worker`; do not supply a superuser URL just
   because it can execute that statement. Verify the login's inherited/default
   privileges as well as the effective worker role. Store its secret securely.
7. Configure the app variables and set both application execution mode and the
   synthetic workspace's database mode to `fixture`. The database default is
   disabled. Authenticate and enrol/verify MFA before opening the console.
8. Queue a fixture through Research. With worker variables securely injected
   into the process environment, run `npm run veyai:worker`. The worker command
   does not automatically load Next.js `.env.local`; configure its environment
   explicitly without logging secrets. Refresh the run to view its output.
9. Select **Challenge with Evidence**, invoke the worker again, then have the
   assigned reviewer inspect the paired records and submit a reasoned decision.
   **Develop programme** records programme-planning intent and stops.

The worker expires abandoned leases, attempts one dispatch and exits. It is
not a daemon or configured scheduler. Re-invoke it for each queued job during
development. Hosting, wake-up, monitoring and recovery need a later operational
decision; no background Vercel worker is implied.

## Record, provenance and approval model

The compact implementation uses `workspaces`, `memberships`, `agent_versions`,
`runs`, `source_sets`, `outputs`, `approvals`, `decisions` and `audit_log` in
`veyai`, plus `jobs` in the private schema. Unlike the larger proposed schema,
sources and structured findings are stored as validated JSON bundles rather
than separate source/finding/hypothesis tables. There are no programme tables.

Each run records contract, prompt, schema and synthetic model versions. Source
sets and outputs receive database-computed SHA-256 hashes. An output is immutable
to application users and the worker; a revision creates a new run and retains
prior records. Application immutability is not a claim that a database
administrator cannot alter records.

Research findings require source references, an exact supporting excerpt and
its location in the captured bundle. Unknown references, fabricated excerpts
and duplicate identifiers fail validation. No traceable sources or findings
means **incomplete**, not simply low confidence: Evidence and programme-planning
approval cannot proceed. Referential/excerpt validation does not prove that a
real scientific claim is true or that its interpretation is justified.

Evidence receives a specific Research output ID/hash and the same source set.
It records each finding's appraisal, or explicitly marks a finding unreviewed.
Incomplete claim coverage prevents a complete review. It does not perform an
independent search or establish scientific validity.

Approvals bind Research, Evidence and source-set hashes. The assigned reviewer
must have a current authenticated MFA session and active authority. A decision
stores actor, timestamp, reason, version, action scope and those hashes. Research
revision or a new Evidence review makes prior approvals stale. The earlier
decision remains historical and cannot approve a revised output. Transactional
locking and command idempotency guard repeat submissions; database behaviour
under real concurrent production sessions still requires verification.

`approve` means `programme_planning` intent only. `reject`, `hold` and
`investigate_further` record the review outcome. None queues another job, sends
a message, spends funds, publishes content or initiates a programme. Further
Research or Evidence requires a new explicit staff request.

## Permission and audit limits

Web requests use the person's Supabase session and RLS, not a service-role key.
Membership and session checks read current database state; editable user
metadata is not an authority. The membership directory intentionally exposes
active staff display names/roles within that workspace for reviewer assignment.
Private run records remain restricted to the owner and assigned reviewer.

Bounded `SECURITY DEFINER` functions live in the unexposed private schema, have
fixed empty search paths, explicit grants and argument/identity checks. Their
exposed command wrappers use invoker security. These privileged functions are
a trusted boundary requiring review; merely enabling RLS does not prove their
correctness. The worker can claim, finish, fail and expire jobs through its
allowlisted commands; it cannot approve, manage staff or write tables directly.

Audit history records important workflow mutations such as request, start,
output completion/incompletion, failure, cancellation and human decision. It
does **not** currently record every read, login or administrative provisioning
change, nor export a full provider trace. Broader access auditing, retention,
backup/restore and administrator-change logging need an explicit operational
policy. No comprehensive or tamper-proof audit certification is claimed.

## Verification and its limits

`npm run test:veyai` runs contract/configuration/budget tests and PostgreSQL
migration/RLS tests under PGlite. The database harness creates fictional Auth
users/sessions and simulated JWT claims; it executes the migration SQL and
tests access denials, independent review, source requirements, stale decisions,
idempotency, cancellation, revocation and caps. It is not a real Supabase Auth,
PostgREST, network, mail or browser-session integration test.

The final automated suite passes 114 tests across 17 files, including 26 VeyAI
tests. The security review added checks for effective function privileges,
worker/staff separation, expired leases, role revocation, independent review,
null expected hashes and revisions during Evidence execution. Inherited
PostgreSQL `PUBLIC` function-execution grants were explicitly removed in both
migrations; schema-local default privilege changes alone were insufficient.

Lint, TypeScript and the production build passed. Six private URL families were
checked with and without a valid marketing-preview cookie: all returned 404
with private/no-store/noindex while staff configuration was absent. All four
explanation pages returned 200/noindex when the marketing preview was unlocked.
These 16 local HTTP checks do not substitute for configured staff-auth tests.

Public explanation layouts and a static rendering of the actual Research,
Evidence and source components were inspected at 320, 390, 768 and 1440 pixels.
The component review had no horizontal overflow, visible keyboard focus and no
reported browser errors. It was an isolated synthetic HTML artefact, not an
authenticated console session or development access bypass. Hosted sign-in,
MFA, authenticated forms, concurrent database sessions and full console-browser
integration remain unverified until Supabase setup.

Next.js was patched from 16.3.3 to 16.3.6 after a critical dependency advisory.
Compatible transitive patches were applied. `npm audit --omit=dev` reports zero
known runtime vulnerabilities. The full audit still reports five high-severity
findings in the ESLint/Next lint dependency chain; no framework downgrade or
forced dependency change was made to suppress them.

The injection fixture demonstrates that deterministic workflow commands and
fixed fixture output do not obey instructions placed in source data. It does
not prove prompt-injection resistance of a live model. No live reasoning,
retrieval quality, clinical validity or scientific appraisal quality has been
demonstrated.

## Remaining gates before live execution

1. **Real identity and data boundary:** configure the development project,
   invite named staff, assign accountable owners, prove MFA/recovery/revocation,
   validate real Auth/session/RLS/API behaviour and cross-user isolation, and
   complete the private browser flow. Admit only synthetic data until this
   foundation is proven; approved public literature is the next possible scope.
2. **Hard spending controls:** implement a durable transactional spend-reservation
   ledger before any provider request. `maximumRunCost` is a strict calculation
   primitive, not an integrated reservation system. Current zero monetary fields
   and fixture run-count caps are not live spend enforcement. Version actual
   pricing and reserve the maximum permitted model/tool cost against both run
   and user ceilings before dispatch; reconcile usage without allowing parallel
   requests, retries, unknown pricing or tool charges to exceed those ceilings.
3. **Bounded provider adapter:** add the reviewed Agents SDK/Responses adapter,
   pinned model/instructions, explicit token/tool/turn/time/concurrency limits,
   kill switch, cancellation and retry rules. Keep permissions and transitions
   deterministic. The model gets no database credential or external-write tool.
4. **Provenance capture:** implement the approved public-source search/retrieval
   boundary, source extraction, versioned capture and validation. Preserve
   evidence independently of model-generated citations; reject unsupported
   findings and distinguish fact, interpretation and hypothesis.
5. **Adversarial and scientific evaluation:** exercise prompt injections in
   search/document content, malicious URLs, fabricated references, contradictory
   studies, absent data and scope violations against the actual model/tools.
   Use versioned, qualified-human-reviewed scientific evaluation datasets and
   release thresholds. Fixture success is not the scientific release criterion.
6. **Tracing and operational controls:** decide provider data settings, privacy
   and retention, sanitized trace export, observed usage/cost reconciliation,
   worker hosting/wake-up, recovery, incident handling and access/audit retention.
   Never claim unobserved token use or cost is zero. Prove backups and restore
   and review account/data responsibilities before real internal content.
7. **Release review:** run the applicable lint/typecheck/test/build, database,
   responsive/keyboard/reduced-motion browser and security checks. Record known
   limitations. Review the live activation separately; production deployment,
   Operations/Capital execution and any health-data scope require their own
   explicit authority.

These gates allow local development to proceed while account setup is deferred.
They are not reasons to add a mock staff bypass or silently enable live calls.
