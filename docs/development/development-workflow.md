# Development Workflow

## Roles

### Claude Code — primary builder

Best used for:

- implementation;
- refactoring;
- visual iteration;
- component development;
- tests;
- documentation updates.

### Codex — independent reviewer

Best used for:

- architecture review;
- scope review;
- accessibility audit;
- security review;
- healthcare-claim review;
- regression analysis;
- hardening.

### Cursor — development cockpit

Best used for:

- local inspection;
- focused edits;
- visual debugging;
- exploring code;
- reviewing diffs.

## Branch workflow

Recommended:

- `main` — protected production branch;
- `phase-1/...` — feature branches;
- Vercel preview for each significant PR.

## Implementation cycle

1. Read relevant docs.
2. Inspect current code.
3. State scope and files to change.
4. Implement smallest complete change.
5. Run tests/lint/build.
6. Inspect responsive UI.
7. Review healthcare wording.
8. Open PR.
9. Independent review.
10. Fix approved findings.
11. Merge only after explicit approval.

## Documentation discipline

Any decision that changes product scope, claims, architecture, privacy or regulatory intent must update `/docs` in the same PR.

## No invisible scope creep

If an agent discovers that a requested feature requires authentication, health-data storage, medical-device functionality or regulated AI, stop and surface it as a product decision.
