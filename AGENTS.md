# AGENTS.md — Vascurra Development Rules

This file applies to Codex, Cursor, Claude Code and every other automated coding system working in this repository.

## 1. Establish context before changing code

Before implementation:

1. Inspect the repository root, current branch, HEAD, remote and working tree.
2. Confirm that the working branch descends from the approved canonical application source.
3. Read:
   - `docs/product/phase-1-website-spec.md`
   - `docs/clinical/intended-purpose-and-claims.md`
   - `docs/clinical/clinical-safety.md`
   - `docs/brand/brand-guidelines.md`
   - `docs/technical/architecture.md`
   - `docs/development/development-workflow.md`
4. Read any approved design specification and decision-log entry relevant to the requested area.
5. Inspect the current implementation before proposing changes.
6. State the task scope, files likely to change, validation plan and any health, privacy, claim or production implications.

If source-of-truth documents conflict, surface the conflict before performing work that depends on choosing between them. Do not overwrite or discard unrelated work.

## 2. Respect the current product phase

The public website and the future Vascurra health platform are separate scopes. Do not implement the following without explicit approved scope:

- authentication or user accounts;
- patient, family, clinician, research or administration portals;
- health-record storage;
- medication, blood-pressure, glucose, symptom or cognition tracking;
- clinician dashboards backed by real participant data;
- passive surveillance, clinical scoring or medical-device functionality;
- diagnosis, prediction, treatment or medication recommendations;
- trial matching or enrolment;
- generative emergency triage;
- production clinical AI workflows;
- production databases containing special-category health data.

Do not infer authorization for future-product functionality from conceptual copy, designs, diagrams or roadmap documents.

## 3. Preserve dignity and agency

- Avoid fear-based, alarming or patronising UX.
- Do not trivialise health through points, streaks, badges or coercive gamification.
- Do not assume cognitive change removes a person's capacity or control.
- Do not assume family relationships grant access to personal information.
- Do not design constant measurement as the default.
- Make assistance configurable and add it only when useful.
- Keep important decisions with people and appropriately qualified professionals.

## 4. Claims and evidence are non-negotiable

Never write, display or imply that Vascurra diagnoses disease; predicts dementia, decline or stroke; prevents stroke or dementia; slows disease; improves cognition, survival or clinical outcomes; detects disease before symptoms; provides treatment; recommends medication changes; has a validated health or risk score; is clinically validated; is a medical device; or holds regulatory or compliance certification without verified evidence and explicit approval.

Do not invent research, statistics, scores, probabilities, testimonials, partnerships, logos, certifications, regulatory classifications, names, contact details or participant stories.

Use `[SOURCE REQUIRED]` in internal drafts when a claim requires evidence, or omit the claim from public content. Review body copy, headings, calls to action, metadata, social images, alt text, charts, diagrams, interface mockups and raster artwork. Reference images are design guidance, not approved evidence or public copy. Clearly label conceptual functionality and fictional examples. Preserve provenance for every research claim.

## 5. Clinical safety boundaries

Future functionality must distinguish reported information, measured data, verified clinical records, deterministic calculations, AI-generated interpretation and clinician confirmation.

A language model must never be the authoritative record, permissions system, medication source of truth, emergency protocol or diagnostic authority. Emergency signposting must use deterministic, clinically reviewed protocols. High-impact outputs require an appropriate human-review path. Do not imply that planned safeguards already exist in production.

## 6. Privacy and health data

The repository is public. Never commit personal health information, identifiable participant information, private medical material, personal transcripts, secrets, `.env` files, production data or identifiable test fixtures. Use clearly fictional test data.

Before collecting real health information, the approved architecture must define controller and processor roles, lawful basis, collection purpose, identity, recovery, Personal/Family/Clinician/Research/Administration permissions, consent history and revocation, supported decision-making, provenance, retention, correction, export, deletion, audit, backup, vendor, research and incident-response boundaries.

Minimise sensitive logging and analytics. Never use production health data for model training without an approved legal, ethical and governance basis. The marketing preview gate is not authentication and must never protect personal or health information.

## 7. Design system and accessibility

Preserve the Vascurra design language: white or soft-white canvas, deep navy text, teal/cyan/mint accents, restrained glow, flowing vascular and neural forms, generous whitespace, calm motion and high legibility.

Use the approved brain mark and documented derivatives. Do not redraw, reinterpret, randomly recolour, distort or tightly crop it. Reuse existing components and tokens before introducing new patterns. Do not publish whole webpage sections as flattened screenshots. Keep meaningful content in accessible HTML where practical.

Target WCAG 2.2 AA where practical: semantic structure, logical headings, keyboard access, visible focus, comfortable targets, text reflow, readable contrast, accessible forms, descriptive alternatives, forced colours and reduced motion. Do not encode meaning by colour alone or rely on hover or animation for required information. Content must remain available if JavaScript, hydration or animation fails. Inspect affected interfaces at narrow mobile, standard mobile, tablet and desktop sizes.

## 8. Engineering and AI architecture

Follow the approved architecture: Next.js App Router, strict TypeScript, server components by default, client components only where interaction requires them, typed content where appropriate and explicit server boundaries.

Prefer simple, auditable implementations. Avoid unnecessary dependencies, unrelated refactors, premature abstraction, duplicate components, provider-specific AI logic in core domain models, or adding a database before its requirement is approved.

Future model calls must pass through a Vascurra-owned boundary responsible for task routing, prompt and policy versions, tool permissions, structured validation, provenance, provider traceability, safety checks, fallbacks and evaluation. Do not add AI merely to make the public website appear AI-powered.

## 9. Git and production workflow

Fetch when current remote state matters, inspect the working tree, and branch from the approved canonical source. Use `codex/<name>` for Codex branches unless another convention is approved.

For substantive work: use a feature branch, keep commits focused, open a pull request, run automated validation, use Vercel Preview for visual review where applicable, and merge only after explicit approval.

Never overwrite unrelated changes, rewrite shared history, force-push, delete branches, merge, deploy, promote a deployment, change Vercel settings or domains, change production environment variables, alter production databases or data, rotate credentials, or broaden production access without explicit approval. A successful preview deployment is not production approval.

## 10. Validation and documentation

Run the checks applicable to the change:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

For UI changes, inspect affected routes, responsive layouts, narrow-screen reflow, keyboard operation, reduced motion, assets, and browser/server errors. For public content, review healthcare claims, conceptual labels, metadata and visual artwork.

Never claim a check passed unless it ran successfully. Report warnings, failures and untested areas. Do not weaken tests or claims allowlists merely to obtain a pass.

Update documentation when a decision alters product scope, intended purpose, architecture, privacy, consent, clinical safety, regulatory intent, research governance or production workflow. Keep Public Platform phases distinct from Product Platform phases, and mark superseded decisions rather than rewriting history.

When completing work, report what changed, why, affected files, validation, safety implications and material limitations. Do not merge, push or deploy unless explicitly authorized.
