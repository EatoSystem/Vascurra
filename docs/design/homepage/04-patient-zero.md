# Section 04 — Patient 0

Review implementation on `codex/section-04-patient-0`, based on the approved V2 source `84d208e`.

## Scope and source

The founder's Section 04 handoff and accompanying Patient 0 reference supplied on 2026-09-07 define this section. They supersede the historical Section 04 composition in `docs/design/homepage-v2.md` for this preview only. The existing Hero, Origin and Mission remain unchanged. `/` remains the holding page; `/preview` adds Patient 0 after Mission.

Copy and the quote come from the supplied handoff, not an invented interview. The biographical detail repeats the already-present Origin section; no additional identifying details were introduced. The quote remains subject to founder review before any publication. This work does not authorize publication or alter the preview gate.

## Claims treatment

The reference's unexplained 76 score and “You're doing well” assessment are omitted in accordance with the intended-purpose guardrails. A neutral daily-plan example replaces them. Veya's feature labels and the interface are explicitly conceptual, and daily activities are illustrative examples. There is no implemented clinical feature, collection, monitoring, scoring or account system.

## Implementation

- Server-rendered component: `components/vascurra/home/patient-zero.tsx`.
- Isolated CSS module; exactly three font-size tokens per breakpoint.
- Selectable HTML copy, quote, interface and audience labels.
- Decorative SVG connections and static CSS orbits; no animation or required interaction.
- Responsive portrait, Veya, daily-view and audience composition.

## Artwork provenance

Built-in imagegen generated both assets from the supplied reference. They are generic illustrations, not verified likenesses. Final assets are `public/vascurra/v2/section-04-patient-zero-dad.webp` and `public/vascurra/v2/section-04-patient-zero-audiences.webp`. PNG originals remain in the local generated-images directory; Sharp converted them to WebP at quality 90. Combined asset size is approximately 203 KB.

Portrait prompt: Create a decorative artwork asset based on the supplied reference, not a webpage. Remove all text, labels, UI panels, icons, quote, score and small audience portraits. Keep the elegant older man in right-facing profile, sculptural white hair, translucent cyan/teal/aqua/mint materials, luminous organic ribbons and vascular nodes. Respectful confident expression; no photo. Portrait composition with head and shoulders, white background. No logo or interface.

Audience prompt: Four stylised human profile medallions matching the supplied reference, in an equal 2-by-2 grid: older man, adult woman, male clinician with stethoscope, female researcher with hair in a bun. Translucent sculptural cyan/teal/aqua/mint, subtle luminous circular rims, pure white background. Generic illustrative people. No text, numbers, UI or logo. All circles fully visible.

## Review evidence

Lint, typecheck and production build passed. The test suite reports 28 passed and one pre-existing failure in `lib/holding-gate.test.ts`: it expects an unconfigured gate to allow access, while the source implementation fails closed. Neither gate nor test was changed.

Local browser checks cover 320, 390, 768, 1280 and 1536 pixels, computed type sizes, text clipping, console errors, reduced motion, keyboard traversal, JavaScript-disabled rendering, locked preview redirection and the holding page. Local screenshots and machine-readable results are under ignored `.tmp/section04-*` paths. Vercel Preview, push and production deployment were not performed.
