# Cursor Prompt — Implement Section 02 Only

Implement **homepage Section 02 only**.

Read first:
- `/docs/design/homepage/02-life-system.md`

Use this approved production asset:
- `/public/vascurra/homepage/02-life-system/life-system-graphic.svg`

## Scope lock
Do not modify:
- Section 01 / Hero
- Section 03 or any later homepage section
- backend functionality
- Request Access flow
- Supabase / Stripe / auth / deployment configuration

## Task
Replace the current weak/minimal “Living better with vascular cognitive change / Cognition doesn’t change in isolation” implementation with the approved Section 02 composition defined in the spec.

The finished section must use:
- pure white background
- large left editorial text block
- large approved man-and-woman life-system artwork on the right
- the exact approved copy
- three small supporting principles beneath/after the copy
- no Vascurra brain icon
- no generic radial diagram
- no decorative background waves

Do not redraw the life-system artwork. Use the supplied asset as-is.

## Required process
1. Inspect the current Section 02 component and styles.
2. Implement the approved layout without touching other sections.
3. Run the app locally.
4. Capture Section 02 at 1440px desktop.
5. Compare scale, spacing, typography and visual balance against `/docs/design/homepage/02-life-system.md`.
6. Refine until the artwork is a major visual and the section no longer looks sparse or wireframe-like.
7. Check tablet and mobile layouts at 768px and 390/430px.
8. Run lint/typecheck/build for the repository as appropriate.

## Acceptance gate
Do not continue to Section 03.
Stop after Section 02 is implemented and report:
- files changed
- screenshot(s) of Section 02 desktop/tablet/mobile
- lint/typecheck/build result
- any remaining mismatch against the locked spec

The design is already approved. **Implement it; do not redesign it.**
