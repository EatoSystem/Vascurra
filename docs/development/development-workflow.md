# Development Workflow

## Authority

No individual coding agent is inherently authoritative. Approved product documentation, Git history, tests, review evidence and explicit human approval are authoritative.

Codex, Cursor, Claude Code and future tools may each implement, inspect or review work. Their output is reviewed on the same terms as any other contribution.

## Delivery flow

```text
Founder / Product Architecture
  → feature specification
  → Codex / Cursor / Claude Code
  → feature branch
  → automated validation
  → pull request
  → Vercel Preview when applicable
  → product / design / safety review
  → approved merge
  → main
  → production
```

`main` is the canonical stable application source. Substantive changes belong on feature branches. A successful build or preview is evidence for review, not authorization to merge or deploy.

## Implementation cycle

1. Read `AGENTS.md` and relevant source-of-truth documents.
2. Inspect the repository, current branch and working tree.
3. State scope, affected files, risks and validation.
4. Implement the smallest complete change.
5. Run lint, typecheck, tests and build as applicable.
6. Inspect affected responsive and interactive behavior.
7. Review health wording, privacy boundaries and conceptual labeling.
8. Open a pull request only when authorized.
9. Review automated checks and Vercel Preview where applicable.
10. Address approved findings.
11. Merge and deploy only after explicit approval.

## Branch conventions

- `main` — canonical stable application source and production candidate.
- `codex/<name>` — Codex implementation branches.
- Other tools may use similarly identifiable, short-lived feature branches.
- Preserve meaningful historical branches until canonicalization is verified.

Do not force-push, delete branches or rewrite shared history without explicit approval.

## Documentation discipline

Any decision that changes product scope, claims, architecture, privacy, clinical safety, research governance, regulatory intent or production behavior must update the relevant documentation in the same pull request.

Historical decisions remain in the decision log. When implementation changes direction, mark the earlier decision superseded and record the replacement instead of editing history to imply the old decision never existed.

Use `docs/development/phase-naming.md` so public-site work is not confused with future health-product work.

## No invisible scope expansion

If a request requires authentication, health-data storage, medical-device functionality, regulated AI or production-system changes beyond the approved task, surface it as a product decision before implementation.
