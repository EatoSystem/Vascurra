# External providers — develop first, activate later

7 October 2026. Approved fixture product scope; no live service activation or deployment.

## Inspection and existing architecture

The repository uses Next.js App Router, strict TypeScript, server-rendered public
pages and a separately protected staff console. The existing VeyAI slice has
Supabase Auth/MFA, two local RLS migrations, a restricted fixture worker, strict
Research/Evidence schemas, captured provenance, immutable versioned outputs,
human decisions, cancellation and daily limits. Brain Cells economics already
have one integer-cent conversion source in `content/brain-cells.ts`. No OpenAI
or Stripe execution existed. `docs/technical/ai-provider-abstraction.md` described
the intended vendor boundary; database queries still lived in console routes.

## Contracts

UI → application services → Vascurra provider contracts → chosen adapter.
`lib/providers/data/contract.ts` exposes domain Research operations rather than
generic database queries. DataProvider groups domain repositories; it is not a
universal CRUD API. FixtureDataProvider enforces synthetic identity, independent
reviewers, quota, cancellation, immutable snapshots, versions and stale decisions.
SupabaseDataProvider retains the existing request-scoped client and RLS/RPC
authority. Adapter errors never switch providers.

`AIProvider` exposes Research and Evidence tasks returning the existing validated
domain schemas. FixtureAIProvider includes success, weak/conflicting evidence,
missing provenance, injection text, retrieval failure, timeout, invalid schema,
agreement and challenge. These are deterministic workflow evaluations, not proof
of scientific quality or live-model injection resistance. OpenAIProvider is an
intentionally disabled implementation; no SDK or API key is required.

`PaymentProvider` owns selection, review, mock processing, result, cancellation,
expiry, refund and history. The fixture store commits each participant's command
atomically and returns detached snapshots. Successful mock results create one
synthetic participation confirmation, never a tax invoice. Currency is integer
EUR cents; conversions use the canonical symbolic €0.10 unit. Enterprise and
amounts of €10,000 or more use an exploratory path. That threshold is a development
routing choice, not an approved commercial rule. StripePaymentProvider is disabled.

## Capability policy

`lib/providers/config.ts` is the single policy. Unconfigured local `next dev`
uses fixtures only when NODE_ENV is development and neither VERCEL nor CI is
set. VASCURRA_MODE may be fixture, connected or disabled. Production cannot select
fixture identity. Unknown modes fail closed. Connected mode requires explicit
SUPABASE_ENABLED, REAL_AUTH_ENABLED, VEYAI_CONSOLE_ENABLED and both existing
Supabase configuration values. VEYAI_EXECUTION_MODE controls the existing
connected fixture worker only. No flag can activate OpenAI, Stripe, checkout or
personal health data in this release. `.env.example` contains no credentials.

Research fixture state is process-local and isolated by a development session.
Mock participation state uses ignored local files so it survives request workers;
it remains disposable development data rather than durable institutional storage or a
verified identity system. The marketing preview cookie grants no staff access.
Connected failures remain unavailable; fixture authentication is never a fallback.

## Activation sequence

1. **Supabase:** approved isolated project; invitation-only identity, MFA, roles,
   session recovery, local migrations, RLS, cross-user isolation, audit, backup and
   real persistence verified end to end. Expanded fixture scenarios must be mapped
   deliberately before use with the restricted SQL worker (currently three cases).
2. **OpenAI:** server-only Research first; structured/provenance validation,
   bounded tools, transactional per-run/user cost reservations, timeouts, tracing,
   model/prompt/source versioning and live injection evaluations; Evidence second.
   OpenAI is the reasoning runtime. Vascurra is the system of record.
3. **Stripe:** legal/commercial/tax/accounting/refund/consumer/enterprise model
   approved first, then separately authorised test-mode checkout, idempotent
   webhooks, records, failures, refunds and reconciliation before live mode.

These are activation dependencies, not fixture development blockers. No remote
migrations, credentials, payment/webhook deployment, real data, external messages,
agent write authority, clinical execution or Foundation architecture is authorised.

## Contract testing and limitations

Provider tests cover typed results, failure boundaries, safe currency arithmetic,
state transitions, idempotency, independent decisions, stale versions, isolation,
quotas and cancellation. Existing PGlite migration tests remain. Neither local
contract tests nor mocked adapters certify hosted Auth/RLS, Stripe reconciliation
or live model quality. Those require the activation reviews above.

## Implemented fixture product pass

The seven ordered development slices are represented locally:

1. Provider policy and Data/AI/Payment contracts select fixtures only in local
   development. Supabase, OpenAI and Stripe adapters fail closed without fallback.
2. `/VeyAI/console` supports simulated local identity/MFA, roles, expanded
   Research states and failures, exact Evidence handoff, revision, stale approval,
   decision recording, history and lightweight run metadata.
3. `/VeyAI/console/atlas` presents compact institutional memory. Source, finding,
   interpretation, hypothesis and decision remain explicit record types.
4. `/development/brain-cells` implements exact conversion, review, mock outcomes,
   confirmation and history. Ignored local files preserve synthetic payment state
   across request workers. Enterprise and €10,000+ selections stay exploratory.
5. `/development/veya` covers daily support, chosen context, preparation, summary,
   explicit family sharing, refusal, uncertainty and clinical boundaries.
6. Public copy states the simple Veya, Research, VeyAI and Brain Cells relationship.
7. Operations and Capital contain structured, non-executable fixture proposals.

`/development` is the local hub. It identifies Data, AI and Payments as Fixture,
Auth as Development and Live Personal Data as Disabled. Development identity is
rejected in Vercel, CI and production. All internal routes are noindex/no-store.

## Remaining activation work

**Supabase:** select the approved project; review/apply migrations; verify invites,
MFA, recovery, roles, RLS, cross-user isolation, worker credentials, concurrency,
persistence, backup and audit. Replace ephemeral/local records deliberately.

**OpenAI:** implement the disabled adapter server-side; approve models and tools;
add transactional budget reservation, timeouts, structured parsing, provenance,
trace references, injection evaluation and scientific evaluation. Activate bounded
Research first and Evidence only after it passes.

**Stripe:** approve legal, commercial, tax, accounting, privacy, refund, receipt
and enterprise treatment; implement test mode behind PaymentProvider; verify signed
webhooks, idempotency, failures, refunds and reconciliation before live checkout.

The Stripe-hosted Checkout foundation now includes an isolated, unlinked server
endpoint and documented test placeholders. This is integration scaffolding only:
`StripePaymentProvider` remains disabled, no public control invokes the endpoint,
no webhook or fulfillment path exists and no production credential is configured.
`STRIPE_INTEGRATION_TODO.md` is the activation checklist.

## Validation record — 7 October 2026

The completed pass has 24 test files and 166 tests; the earlier 114-test baseline
grew through provider, identity, payment, persistence and boundary coverage. Lint,
strict typecheck and production build pass. Browser checks cover sign-in/MFA,
Research states, Evidence critique, reviewer decision, Atlas, Brain Cells success
and enterprise routing, Veya memory/emergency boundaries and 320/768-pixel reflow.
Runtime audit reports zero vulnerabilities. The full audit reports five high
development-tool advisories through `eslint-config-next` / `fast-glob` /
`micromatch` / `braces`; npm proposes an incompatible framework downgrade, so
they remain documented.

This does not verify hosted Supabase, live models, Stripe, real identity, personal
data or production security. Nothing was deployed.
