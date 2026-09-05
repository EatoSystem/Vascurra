# Vascurra

**Intelligence for vascular cognitive health.**

Vascurra is a proposed human-centred support, research and intelligence platform focused initially on vascular cognitive change. This repository currently contains the public website foundation and product, clinical, design and governance documentation. It does not contain a deployed clinical product.

## What exists today

- A Next.js public-site application with a holding page and private marketing preview.
- An unlocked conceptual homepage for people, families, clinicians and research.
- Public-site privacy and early-access routes behind the preview gate.
- A server-side early-access action that can forward minimum registration details to a configured webhook.
- Brand assets, design references and typed public copy.
- Automated claim guardrails and application tests.

The preview gate is a marketing-release control. It is not authentication and must never protect personal or health information.

## What does not exist

There are no patient or family accounts, health records, clinical dashboards backed by real data, medication or measurement tracking, production health database, diagnostic workflow, treatment recommendations, clinical scoring, Veya implementation or live clinical AI.

See [`docs/development/phase-naming.md`](docs/development/phase-naming.md) for the distinction between the Public Platform and future Product Platform phases.

## Technical stack

- Next.js App Router
- React
- strict TypeScript
- Tailwind CSS
- Vitest
- ESLint with the Next.js Core Web Vitals and TypeScript configurations
- Vercel-compatible deployment configuration

The application uses server components by default, with client components limited to forms, mobile navigation and scroll-reveal behavior.

## Local setup

Requirements:

- Node.js 20.9 or later
- npm and the committed `package-lock.json`

```bash
npm ci
npm run dev
```

The development server is normally available at `http://localhost:3000`.

Optional server-only environment variables:

| Variable | Purpose |
| --- | --- |
| `HOLDING_PAGE_PASSWORD` | Overrides the local/default marketing-preview password. The gate is not an account system. |
| `EARLY_ACCESS_WEBHOOK_URL` | Receives validated name, email, role and communication-consent data from the early-access server action. Without it, the form returns an unavailable state and stores nothing. |

Do not commit `.env` files or secrets. No database is required for the current public application.

## Validation

Run before requesting review:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

`npm test` includes a public-copy claims guardrail. Do not weaken its restrictions or expand its allowlist merely to obtain a pass.

## Public-site architecture

- `/` — public holding page; complete conceptual homepage after preview unlock.
- `/early-access` — minimum-data registration form, available within the preview.
- `/privacy` — current public-site privacy information, available within the preview.
- `/robots.txt`, `/sitemap.xml`, `/opengraph-image` — metadata endpoints.

Public copy lives primarily in `content/`. Application routes live in `app/`; reusable components live in `components/`; approved runtime and reference assets live in `public/vascurra/` and `public/brand/`.

## Repository workflow

`main` is intended to be the canonical stable application source. Substantive changes use feature branches, automated validation, pull requests and Vercel Preview where useful. Merge and production deployment require explicit human approval.

Codex, Cursor, Claude Code and future tools may contribute. No agent is inherently authoritative; approved documentation, Git history, tests, review evidence and human decisions are authoritative. See [`AGENTS.md`](AGENTS.md) and [`docs/development/development-workflow.md`](docs/development/development-workflow.md).

## Health, claims and privacy boundaries

Vascurra must not present unsupported diagnosis, prediction, treatment, efficacy, validation or regulatory claims. Do not invent studies, statistics, partnerships, testimonials, scores or certifications.

This public repository must not contain personal health information, production credentials, private medical material or identifiable participant data. Use clearly fictional examples. Authentication, consent, Personal/Family/Clinician/Research/Administration permissions and health-data governance must be designed and approved before any real health information is collected.

## Documentation

Start with [`docs/README.md`](docs/README.md). Important implementation sources include:

- [`docs/product/phase-1-website-spec.md`](docs/product/phase-1-website-spec.md)
- [`docs/clinical/intended-purpose-and-claims.md`](docs/clinical/intended-purpose-and-claims.md)
- [`docs/clinical/clinical-safety.md`](docs/clinical/clinical-safety.md)
- [`docs/brand/brand-guidelines.md`](docs/brand/brand-guidelines.md)
- [`docs/technical/architecture.md`](docs/technical/architecture.md)
- [`docs/operations/decision-log.md`](docs/operations/decision-log.md)

Internal repository documentation may identify project leadership or participants when appropriate and consented. The current public website intentionally does not name individuals or publish the founding family's private medical story. Internal attribution is not approval for public attribution.
