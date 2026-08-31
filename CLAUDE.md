# CLAUDE.md

Claude Code should treat `AGENTS.md` as mandatory and this file as workflow-specific guidance.

## Default behaviour

- Inspect before editing.
- Do not implement beyond Phase 1 public-site scope.
- Preserve existing brand system and component architecture.
- Prefer small, reviewable changes.
- Never invent medical evidence or claims.
- Do not connect production services without explicit instruction.
- Do not create a database merely because future product concepts mention one.

## Before each implementation pass

Return a short plan containing:

- current-state findings;
- proposed changes;
- files affected;
- risks/assumptions;
- validation steps.

For large visual changes, implement on a dedicated branch and rely on Vercel Preview for approval.

## Phase 1 source of truth

See `docs/product/phase-1-website-spec.md`.
