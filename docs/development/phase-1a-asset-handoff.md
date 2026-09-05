# Claude Code — Phase 1A Asset Handoff

> **Historical tool-specific handoff.** The current agent-neutral workflow is defined in `docs/development/development-workflow.md`, and “Phase 1A” now maps to Public Platform Phase P0. Preserve this document as implementation history.

The approved Vascurra identity assets are now available in `public/brand/`.

Use the existing mark. Do not author an original replacement SVG or alternative vascular/brain logo.

For the Phase 1A holding page:

- Header/brand mark: `/brand/vascurra-brain.webp` or `/brand/vascurra-lockup.webp` as appropriate.
- Hero/static animation fallback: `/brand/vascurra-brain.webp`.
- Coming Soon section: `/brand/vascurra-brain.webp`.
- Open Graph/social metadata: `/brand/vascurra-og.jpg`.
- Browser icon: `/brand/favicon.ico`.
- Touch icon: `/brand/apple-touch-icon.png`.

Read `docs/brand/assets.md` before implementing animation or logo treatment.

The final state of any hero animation must resolve to the approved brain mark. Do not approximate its internal ribbon/branch geometry if the raster source cannot be decomposed faithfully; animate the asset with masks, glow, particles and surrounding vascular motifs instead.

Do not mention Dr. Joe Curry or the founding family/personal medical story on the public Phase 1A page.
