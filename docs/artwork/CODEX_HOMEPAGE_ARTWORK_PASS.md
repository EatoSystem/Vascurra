# Codex — Homepage Artwork Integration Pass

Use the current V2 homepage as the absolute design source of truth. This task is **not** a homepage redesign. It is a controlled artwork integration pass using newly approved candidate artwork.

## Release safety

- Do not launch V2.
- Do not move unfinished V2 work onto `/`.
- Preserve the production holding page and existing release gate.
- Preserve `/preview` as the review surface.
- Preserve noindex/nofollow for unfinished V2.
- Do not alter production secrets, DNS, Supabase, Stripe, or authentication.
- Do not merge to `main` without explicit founder approval.

## Canonical visual references

1. Homepage Hero — canonical brand reference 01.
2. Homepage Origin / “It Began with Dad” — canonical brand reference 02.
3. `/personal` — canonical inner-page reference 01.

The candidate artwork must feel native to this world: white space, deep navy typography, cyan → teal → green, sculptural flowing forms, restrained detail, human dignity, no purple, no generic healthcare stock imagery.

## Candidate homepage artwork set

The **first concept from the latest generated set is rejected and must not be used**.

The remaining eight candidate assets are intended for the following possible uses. Treat these as art-direction suggestions rather than mandatory placements; inspect the actual page composition before deciding.

1. `homepage-framework-journey.webp`
   - Source concept: eye / connected intelligence / growth / DNA progression.
   - Best candidate for: **Framework — Observe. Understand. Support. Learn.**
   - Use only if it improves the current simpler framework illustration. Do not make the section busier.

2. `homepage-multiple-perspectives.webp`
   - Source concept: connected Personal / Family / Clinician / Research system.
   - Best candidate for: **One system. Multiple perspectives.**
   - Keep central-system logic clear and avoid icon-card treatment.

3. `homepage-veya-signature.webp`
   - Source concept: human/companion form emerging from Vascurra ribbons.
   - Best candidate for: **Veya — Complexity, made more understandable.**
   - Do not present it as a literal person, clinician, chatbot avatar, or medical authority.

4. `homepage-intelligence-network.webp`
   - Source concept: governed knowledge / evidence / context network.
   - Best candidate for: **Vascurra Intelligence — From information to understanding.**
   - Do not reuse the Hero brain. Preserve the distinction between Veya and Vascurra Intelligence.

5. `homepage-lab-convergence.webp`
   - Source concept: lived experience and research/science flowing toward one another.
   - Best candidate for: **Vascurra Lab — Where lived experience meets research.**
   - Prefer this over another brain. Keep the deep navy Lab section visually restrained.

6. `homepage-responsible-core.webp`
   - Source concept: protected central core / controlled flows.
   - Best candidate for: **Responsible by Design — Trust is part of the architecture.**
   - Avoid interpreting it as cybersecurity, a shield, or a clinical safety guarantee.

7. `homepage-one-to-many.webp`
   - Source concept: one person branching into many human perspectives.
   - Best candidate for: **Our Journey / Start with one person. Learn deeply. Build for many.**
   - Use as an organic progression, not a corporate roadmap.

8. `homepage-future-path.webp`
   - Source concept: flowing Vascurra paths converging toward light / future.
   - Best candidate for: **Final Mission / A healthier future is possible.**
   - Keep the final section aspirational without implying medical outcomes.

## Integration rules

Before changing the page, audit the existing homepage and compare each candidate against the current artwork already in place. Do **not** replace an existing artwork simply because a new file exists.

For every candidate:

- Compare it side-by-side with the current section artwork.
- Use it only where it materially improves quality, clarity, brand consistency, and composition.
- Keep the Hero and Origin artwork unchanged unless explicitly instructed separately.
- Preserve all approved copy unless a tiny spacing/layout adjustment is necessary for the artwork.
- Do not add new claims.
- Do not make the page visually busier.
- Fewer stronger images are better than filling every section.
- Avoid repeating the same brain/ribbon/network composition in adjacent sections.
- Maintain strong white space.
- Artwork should feel embedded in the section, not dropped inside generic cards.
- Do not add unnecessary borders, rounded panels, shadows, or glass containers around the supplied artwork.
- Use `next/image` for raster assets.
- Set correct intrinsic dimensions and responsive `sizes`.
- Avoid layout shift.
- Use `priority` only where genuinely above the fold.
- Decorative art should use `alt=""`; meaningful art should have concise non-medical alt text.
- Test desktop and mobile cropping before accepting an asset.
- If an asset does not work on mobile, report that rather than forcing a bad crop.

## Preferred homepage changes

### Mission
Do not force one of these eight candidates into Mission if none is materially better than the current concept. Mission still needs a truly exceptional dedicated visual. Leave the current visual or placeholder intact rather than compromising.

### Framework
Test `homepage-framework-journey.webp` against the current infinity-loop / framework visual. The framework must remain instantly readable as a continuous loop rather than a dense infographic.

### Multiple Perspectives
Strong candidate: `homepage-multiple-perspectives.webp`.

### Veya
Strong candidate: `homepage-veya-signature.webp`.

### Vascurra Intelligence
Strong candidate: `homepage-intelligence-network.webp`.

### Vascurra Lab
Strong candidate: `homepage-lab-convergence.webp`. Keep the section immersive and dark; do not place a white rectangular image card inside the navy section. If the supplied artwork has a white background that cannot be integrated elegantly, do not use it yet — report the need for a transparent/dark-background version.

### Responsible by Design
Test `homepage-responsible-core.webp`. Use only if it reads as permission/control/trust architecture rather than cybersecurity.

### Journey
Strong candidate: `homepage-one-to-many.webp`.

### Final Mission
Strong candidate: `homepage-future-path.webp`, used very lightly so the closing typography remains dominant.

## Implementation approach

1. Inspect all eight supplied assets.
2. Produce a short proposed placement table before coding:
   - asset
   - section
   - replace / add / reject
   - reason
3. Implement only the strongest 4–6 placements.
4. Do not use all eight merely because they are available.
5. Keep any unused files in the candidate asset folder for later review.
6. Update the artwork manifest with `supplied`, `used`, or `held-for-review` status.
7. Run the existing lint, typecheck, test, and build scripts.
8. Verify 320px, 390px, 768px, 1280px, and 1440px layouts.
9. Confirm `/` still serves the holding page, `/preview` still serves V2, and unfinished V2 remains noindex.
10. Stop for founder visual review. Do not merge or launch.

## Final report

Return:

- assets used
- assets held back
- exact sections changed
- screenshots / preview URL if available
- mobile behaviour
- alt-text decisions
- artwork-manifest updates
- files changed
- lint/typecheck/test/build results
- confirmation that production release behaviour is unchanged

End with:

**READY FOR HOMEPAGE ARTWORK REVIEW**
