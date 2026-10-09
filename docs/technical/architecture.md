# Technical Architecture

## Phase 1 principle

Build the simplest reliable public website that can later evolve without pretending the future clinical platform already exists.

## Recommended stack

- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS
- Vercel deployment
- Vercel Analytics or equivalent privacy-reviewed analytics
- simple server-side early-access form endpoint

Do not add a database until the actual requirement is approved.

## Page architecture

Prefer:

- server components for static/content pages;
- typed content models;
- reusable visual primitives;
- isolated client components for animation/forms;
- metadata per route;
- accessible navigation;
- image optimisation.

## Suggested directories

```text
app/
  (marketing)/
    page.tsx
    about/
    personal/
    family/
    clinical/
    research/
    science/
    privacy/
    early-access/
components/
  brand/
  layout/
  marketing/
  motion/
  ui/
content/
  site.ts
  pages/
lib/
  analytics/
  forms/
  validation/
public/
  brand/
  graphics/
docs/
```

## Future platform separation

Do not let marketing-site implementation become the future clinical backend by accident.

Future architecture should separate:

1. user experiences;
2. application services;
3. Vascurra intelligence gateway;
4. structured data services;
5. security/consent services;
6. infrastructure.

## AI principle

The language model is not:

- the database;
- medication source of truth;
- emergency protocol;
- permissions system;
- clinical record.

Models should interact through explicit tools and structured services when future AI functionality is built.

## Phase 1 AI

No production clinical AI is required for launch. The animated brand and site content are sufficient.

## Proposed VeyAI distinction — updated 7 October 2026

Veya is the proposed human-facing everyday companion. VeyAI is the proposed
mission-facing specialist-agent operating layer for research, evidence,
knowledge and mission operations. Vascurra Lab remains the broader research and
learning function involving people, methods, evidence, AI, compute and future
collaborators. Publicly, these are the three named layers: Veya, VeyAI and
Vascurra Lab. The internal Vascurra intelligence gateway remains a descriptive
technical boundary for governed context, provenance, permissions and structured
services; it is not a public product, Veya or VeyAI, and no language model is
the database or system of record. The website architecture page is `/VeyAI`;
see `docs/design/veyai.md`.

VeyAI Core would coordinate tasks through a Vascurra-owned service boundary.
Deterministic services would enforce scoped access and tool permissions; models
would propose outputs for accountable human review. Personal context is not
automatically institutional context. Contracts, ownership, source provenance,
versions, structured validation, abstention, escalation and audit are future
requirements, not deployed safeguards. No agent execution, data integration or
new service is implemented by the public website page.

## Approved VeyAI fixture slice — 7 October 2026

The founder subsequently approved a separate staff-only Research → Evidence →
Human Decision implementation. This scoped approval extends the earlier
website-only architecture for VeyAI; it does not authorise the Veya/Patient 0
product, clinical workflows or personal health data. Earlier public-page
decisions remain the historical record of those passes.

**OpenAI is the reasoning runtime. Vascurra is the system of record.** Supabase
is the selected institutional identity and persistence infrastructure. Core is
a thin deterministic workflow controller; Operations and Capital remain shells.
Independent human decisions bind the exact Research/Evidence/source versions,
and programme-planning intent never initiates a programme automatically.

Supabase and OpenAI account setup are deferred. The local slice includes staff
Auth/MFA code, RLS migration files, typed contracts, a private workstation and
a restricted fixture worker. It uses only synthetic material and has no live
OpenAI execution or remotely applied migration. Without actual staff
configuration, the console fails closed; the marketing preview gate is never
its security boundary. Hard live spend reservation, real Auth integration
verification and scientific evaluations remain activation prerequisites.

See `docs/technical/veyai-v0.1-proposal.md` for approved constraints and history,
and `docs/technical/veyai-v0.1-implementation.md` for actual behaviour, setup,
validation limits and remaining activation gates. No production deployment is
authorised by this architecture note.

## Fixture product development extension — 7 October 2026

The founder's subsequent brief explicitly authorises wider synthetic product
development: local development identity, VeyAI workstation, institutional memory,
Brain Cells mock participation, Veya fictional journeys, public copy and
non-executable Operations/Capital proposals. This extends the earlier narrow
slice; it does not activate production clinical functionality or personal data.

Vascurra-owned Data, AI and Payment contracts separate the UI from vendors.
Default local development uses fixtures without credentials. Connected production
never falls back to development identity or mock persistence. Supabase → OpenAI →
Stripe remain separately reviewed activation steps. See
`docs/technical/external-provider-architecture.md` and
`docs/roadmap/vascurra-master-roadmap.md` for the current design and sequence.
