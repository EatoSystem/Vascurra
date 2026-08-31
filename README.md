# Vascurra

**AI for vascular cognitive health.**

Vascurra is a proposed human-centered support platform for people, families, clinicians and research. Phase 1 of this repository is the public website and product foundation, not a clinical product deployment.

## Current phase

**Phase 1 — Public foundation website**

The immediate goal is to launch a beautiful, accessible and medically cautious public website that explains:

- why vascular cognitive health matters;
- the Vascurra vision;
- the Personal, Family, Clinical and Research product architecture;
- the founding principles of independence, identity, consent and safety;
- the science and evidence approach;
- the Ireland/EU-first privacy and regulatory approach;
- how individuals, families, clinicians and researchers can register interest.

Phase 1 does **not** include patient accounts, health-data storage, diagnostic functionality, treatment recommendations, proprietary clinical scores, medical-device functionality, passive monitoring, trial enrolment or autonomous clinical decision support.

## Product principle

> **Support independence. Preserve identity.**

Vascurra should help people use what they still have, provide useful context to families and clinicians, and never unnecessarily replace human judgement or agency.

## Repository documentation

Start with [`docs/README.md`](docs/README.md). The most important implementation documents are:

- [`AGENTS.md`](AGENTS.md) — mandatory instructions for coding agents.
- [`docs/product/product-vision.md`](docs/product/product-vision.md)
- [`docs/product/phase-1-website-spec.md`](docs/product/phase-1-website-spec.md)
- [`docs/clinical/intended-purpose-and-claims.md`](docs/clinical/intended-purpose-and-claims.md)
- [`docs/brand/brand-guidelines.md`](docs/brand/brand-guidelines.md)
- [`docs/technical/architecture.md`](docs/technical/architecture.md)
- [`docs/development/phase-1-implementation-plan.md`](docs/development/phase-1-implementation-plan.md)

## Development approach

Recommended workflow:

1. **Claude Code** — primary implementation and iteration.
2. **Vercel Preview** — visual and responsive review.
3. **Codex** — independent architecture, safety, accessibility and code-quality review.
4. **Claude Code** — implement only approved fixes.
5. **Cursor** — local inspection and small controlled edits.

No AI coding agent may invent healthcare claims, clinical scores, certifications, research partners, testimonials, statistics or regulatory status.

## Development lead

**Dr. Joe Curry** — retired GP, clinical co-designer and founding user.

The project should use his clinical expertise while protecting his privacy. No personal health information belongs in this public repository.

## Status

Private development concepts may be referenced in `/docs`, but public-facing copy must follow the claims guardrails in this repository.
