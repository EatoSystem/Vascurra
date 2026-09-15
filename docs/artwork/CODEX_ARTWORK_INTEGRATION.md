# Codex Artwork Integration Instructions

Use this document whenever approved Vascurra artwork is added to the repository.

## Scope

This task is for **integration**, not redesign.

When a supplied asset matches an existing `ArtworkToFollow` slot, Codex should integrate it cleanly while preserving the approved page design, copy, release gate and responsive behaviour.

---

## Standard integration prompt

```text
VASCURRA — APPROVED ARTWORK INTEGRATION

The following approved artwork assets have been added to the repository.

Your task is to replace the matching ArtworkToFollow placeholders with the supplied assets.

IMPORTANT

This is NOT a redesign task.

Do not change approved page structure, content, typography, navigation or visual hierarchy unless a very small layout adjustment is required to fit the supplied artwork correctly.

Use the existing Vascurra artwork manifest to identify the intended route, section, aspect ratio and meaning of each asset.

INTEGRATION RULES

1. Match each supplied filename/asset key to the existing ArtworkToFollow slot.
2. Preserve the canonical Vascurra page design.
3. Do not add generic cards, frames, shadows or backgrounds around artwork unless the approved section design already calls for them.
4. Integrate transparent artwork naturally into the page.
5. Use next/image where appropriate.
6. Set accurate width/height or fill behaviour to prevent layout shift.
7. Provide correct responsive sizes.
8. Do not upscale a low-resolution source beyond a sensible rendered size.
9. Keep artwork crisp on high-density displays.
10. Preserve the intended section whitespace.
11. Do not crop important subject matter merely to fill a box.
12. If the desktop asset does not work on mobile, report the problem rather than forcing a poor crop.
13. Use an explicit mobile asset when one has been supplied.
14. Use meaningful alt text only when the artwork communicates content.
15. Use alt="" when artwork is decorative.
16. Do not add medical meaning to alt text that the artwork itself does not establish.
17. Preserve WCAG AA and keyboard accessibility.
18. Preserve reduced-motion behaviour.
19. Do not add new runtime animation libraries.
20. Update the artwork manifest status from placeholder to supplied after successful integration.
21. Do not mark artwork approved unless founder review has explicitly approved it in context.

VISUAL REVIEW

Review every integrated asset at:

- 320px
- 390px
- 430px
- 768px
- 1280px
- 1440px+

Check:

- no horizontal overflow
- no clipped artwork
- no awkward crop
- no accidental white rectangle around transparent artwork
- no excessive dead space
- typography remains dominant where intended
- image does not compete with CTA hierarchy
- dark sections remain balanced
- mobile composition still feels deliberate

PERFORMANCE

- Optimize supplied images where appropriate.
- Do not create duplicate oversized derivatives unnecessarily.
- Do not preload every artwork asset.
- Prioritize only genuinely above-the-fold imagery.
- Preserve strong Core Web Vitals.

RELEASE SAFETY

Do not:

- launch V2
- alter the holding-page gate
- weaken noindex/nofollow
- change production secrets
- change DNS
- merge to main
- modify production health data
- alter Supabase migrations
- introduce payments

Artwork integration does not constitute launch approval.

FINAL REPORT

For each integrated artwork report:

- route
- section
- asset key
- source file
- rendered component
- desktop behaviour
- mobile behaviour
- alt-text decision
- optimization performed
- manifest status

Also report:

- assets that could not be integrated cleanly
- missing mobile variants
- any resolution concerns
- validation results

Run the repository's established:

- lint
- typecheck
- tests
- build

Then stop for visual review.
```

---

## When an asset does not fit

Do not silently redesign the section.

Report:

- expected aspect ratio
- supplied aspect ratio
- intended placement
- why the crop fails
- whether a desktop/mobile alternate is required

The preferred solution is usually a better source composition, not a large CSS workaround.

---

## When multiple candidates exist

If more than one file exists for an asset key:

- do not guess which is approved
- do not randomly select the newest file
- keep the placeholder until the approved filename is explicitly identified

The visual design process may produce many candidates. Only the approved candidate should become the production asset.

---

## Existing supplied imagery

Existing approved artwork may be reused only where it genuinely fits the concept.

Do not repeatedly use the canonical Hero brain simply to avoid an empty artwork slot.

Each page should retain its own visual identity:

- Personal — human life/context
- Family — relationships/permissions
- Clinicians — provenance/context
- Veya — conversation/signature form
- Intelligence — interpretation
- Research — questions/evidence
- Lab — convergence/learning
- Responsible — control/permission
- Support — research capacity/knowledge

---

## Canonical design reminder

The purpose of imagery is not to make the site busier.

The artwork should make Vascurra feel:

- clearer
- more human
- more distinctive
- more beautiful
- easier to understand

If adding an asset makes the section more complicated without increasing meaning, keep the section simpler.
