# AGENTS.md — Mandatory Instructions for AI Coding Agents

This file applies to Claude Code, Codex, Cursor agents and any other automated coding system working in the Vascurra repository.

## 1. Read before changing code

Before implementing a feature, read:

1. `docs/product/phase-1-website-spec.md`
2. `docs/clinical/intended-purpose-and-claims.md`
3. `docs/clinical/clinical-safety.md`
4. `docs/brand/brand-guidelines.md`
5. `docs/technical/architecture.md`
6. `docs/development/development-workflow.md`

If documentation conflicts, stop and surface the conflict. Do not silently choose a version.

## 2. Phase 1 scope is intentionally narrow

Phase 1 is a **public information and early-access website**.

Do not implement without explicit approval:

- authentication;
- patient/family accounts;
- health-record storage;
- medication logging;
- glucose tracking;
- clinician dashboards backed by real patient data;
- medical-device functionality;
- clinical scoring;
- passive surveillance;
- AI diagnosis;
- treatment recommendations;
- medication recommendations or changes;
- trial matching/enrolment;
- AI-generated emergency triage beyond static educational signposting;
- production OpenAI health workflows;
- production databases containing special-category health data.

## 3. Claims guardrail — non-negotiable

Never write or imply that Vascurra:

- diagnoses vascular dementia or any condition;
- predicts dementia or stroke;
- prevents stroke;
- slows dementia;
- improves clinical outcomes;
- detects disease before symptoms appear;
- has a validated “brain health score”;
- is clinically validated unless a source-of-truth document explicitly says so;
- is MDR compliant, CE marked, HIPAA compliant, SOC 2 certified, ISO certified, or otherwise certified unless the repository contains verified evidence and explicit approval.

Avoid fabricated metrics such as `82/100`, “risk age”, “vascular age”, “low risk”, or invented trial statistics.

## 4. No invented evidence

Never invent:

- research papers;
- clinical trials;
- institutional partnerships;
- clinician names;
- patient testimonials;
- market statistics;
- logos of hospitals/universities;
- compliance badges;
- regulatory classifications.

If content requires evidence that is not in the repository, use a clearly marked placeholder such as `[SOURCE REQUIRED]` or omit the claim.

## 5. Visual design

Use the Vascurra visual language:

- white/soft-white canvas;
- luminous teal, cyan and mint accents;
- deep navy for high-legibility body text;
- restrained futuristic glow, not neon overload;
- flowing vascular/neural forms;
- generous whitespace;
- premium health-tech aesthetic;
- calm motion;
- clear accessibility contrast.

Do not allow decorative graphics to reduce readability.

## 6. Accessibility

Target WCAG 2.2 AA where practical.

- Semantic HTML first.
- Keyboard navigation.
- Visible focus states.
- Reduced-motion support.
- Descriptive alt text.
- Accessible forms and validation.
- Do not encode meaning by colour alone.
- Minimum comfortable touch targets.

## 7. Privacy

The repository is public. Never commit:

- personal health information;
- real patient data;
- passwords;
- API keys;
- `.env` files;
- production credentials;
- private clinical letters or scans;
- identifiable test data.

Use fictional examples that are clearly fictional.

## 8. Architecture

Prefer simple, auditable solutions.

- Next.js App Router + TypeScript.
- Server components by default.
- Client components only when interaction requires them.
- Content should live in typed content/config files where appropriate.
- Keep forms and analytics separate from future health-data architecture.
- No premature database.
- No provider-specific AI dependency in core domain models.

## 9. Change discipline

Before coding:

- state scope;
- inspect current implementation;
- list files to change;
- identify safety/claim implications.

After coding:

- run lint;
- run tests;
- run build;
- inspect responsive layouts;
- report any warnings or failures;
- do not merge unless explicitly asked.

## 10. Decision rule

When in doubt, choose the safer and more reversible implementation and ask for a product decision rather than expanding scope.
