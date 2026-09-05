# CLAUDE.md

Claude Code should treat `AGENTS.md` as mandatory and this file as historical tool-specific guidance. The authoritative agent-neutral workflow is `docs/development/development-workflow.md`.

## Default behaviour

- Inspect before editing.
- Do not implement beyond the explicitly approved Public Platform scope.
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

## Public Platform source of truth

See `docs/product/phase-1-website-spec.md`.
