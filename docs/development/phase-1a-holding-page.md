# Phase 1A — Public Holding Page

## What was built

A single premium holding page for `www.vascurra.com` introducing Vascurra as a
project in development. Phase 1A is a deliberately narrower precursor to the
full Phase 1 site described in `docs/product/phase-1-website-spec.md`: one
route, no product pages, no forms, no data collection.

Sections, in order: header · cinematic hero · editorial problem/opportunity ·
connected architecture · signature philosophy · principles journey · safety and
project status · cinematic closing frame · footer.

The first visual draft was rejected for reading as a generic SaaS holding page.
This is the redesign: the brand mark is the signature visual, concepts are
connected by vascular lines rather than boxed in cards, and the type scale
carries a real hierarchy. The engineering, accessibility work, approved copy and
claims guardrail from the first pass were retained.

The product concept preview (Personal / Family / Clinical mockups) is
deliberately omitted from this pass by product decision.

## Architecture

Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4. No
database, no authentication, no AI provider, no analytics, no API routes, no
environment variables. Every route is statically prerendered.

```text
app/                  layout (metadata, font, skip link), page, globals.css,
                      opengraph-image, robots, sitemap
components/brand/     brain-assets.ts (THE SWAP POINT), BrainMark, BrainGlyph,
                      Wordmark
components/motion/    BrainField, BloomField, Reveal
components/layout/    SiteHeader, MobileNav, SiteFooter
components/ui/        Container, Badge, CtaLink
components/marketing/ Hero, ProjectIntro, Architecture, Philosophy, Principles,
                      ProjectStatus, ComingSoon
content/site.ts       navigation, canonical URL, metadata strings
content/home.ts       every public sentence on the site
content/home.test.ts  executable claims guardrail
```

There is no `Card` component. Wrapping each idea in a white rounded rectangle
was the single biggest reason the first draft read as a generic SaaS page; the
sections now sit directly on a continuous light field and are connected by
vascular lines instead of separated by boxes.

Server components throughout. `MobileNav` and `Reveal` are the only client
components; nothing else ships JavaScript.

### Content as the audit surface

All public copy lives in `content/home.ts`. This makes the claims review
required by `AGENTS.md` §3 a single-file read, and lets `content/home.test.ts`
enforce it automatically: the test walks every string the site can render and
fails on diagnostic, predictive, preventive, validation, certification, score
and percentage language.

Prohibited words legitimately appear inside the *negative* statements in the
safety section ("does not diagnose vascular dementia, predict stroke…"). Those
exact sentences are allow-listed, and separately asserted to still be
negations, so the allowlist cannot be used to smuggle in a positive claim.

## Visual system

Source of truth: `docs/brand/high-resolution-web-asset-pack-specification.md`.

**One continuous luminous field.** A vascular light-structure flows out of the
hero brain, threads behind every section and converges back into the brain in
the closing frame. Sections are moments in that flow rather than stacked bands.

**The palette is split by role**, and this resolves a genuine conflict. Spec §12
recommends the display gradient `mint -> teal -> cyan -> deep blue`. Measured as
*text* against the soft-white canvas, two of those four stops fail even the 3:1
large-text floor:

| Token | Ratio on canvas | Body 4.5:1 | Large 3:1 |
| --- | ---: | --- | --- |
| navy `#0B2B4A` | 13.83 | pass | pass |
| deep blue `#0A4F8F` | 7.98 | pass | pass |
| teal `#0097A7` | 3.37 | fail | pass |
| cyan `#43D6FF` | 1.64 | fail | **fail** |
| mint `#2ECC9A` | 1.97 | fail | **fail** |

§12 states the tokens are "production starting points… may be tuned", §17
requires accessibility, and `brand-guidelines.md` says never sacrifice
readability for glow. So:

- **Energy tier** — the spec values exactly as written. Decorative only: bloom,
  glow, ribbons, particles, node fills, the halo around the mark. No contrast
  constraint applies.
- **Ink tier** — hue-preserving darkenings for all text, including the display
  gradient: mint `#1A8362`, teal `#00707C`, cyan `#007DA0`, deep blue `#0A4F8F`.

The luminosity comes from the energy tier; the legibility comes from the ink
tier. Body copy is always solid navy.

`--color-ink-teal` was darkened from `#007F8D` to `#00707C` after measurement:
the original was 4.56:1 on the plain canvas but **4.45:1** on the footer's
slightly deeper ground, which axe correctly flagged. Tokens are now verified
against the grounds they actually sit on, not just the base canvas.

## Animation implementation

Pure CSS keyframes over inline SVG — no Framer Motion, no Lottie, no Rive, no
animation library, nothing added to the client bundle for the reveal itself.

`components/motion/BrainField.tsx` holds the vascular geometry; timing follows
spec §10 across roughly 5s:

| Time | Stage |
| --- | --- |
| 0.0s | particles gather |
| 0.8s | fine vascular branches emerge and draw outward |
| 1.7s | teal / cyan / mint ribbons flow in |
| 2.5s | the approved brain resolves |
| 3.3s | luminous nodes illuminate, staggered |
| 4.2s | a soft pulse travels the network |
| then | ambient breath, 1.5% scale, no rotation |

Branch paths carry `pathLength="1"`, so the draw is exact regardless of geometry.

**Scroll-revealed connectors.** `components/motion/Reveal.tsx` is a ~40-line
client component that sets one data attribute via `IntersectionObserver`; all
the motion lives in CSS. The reveal rules are wrapped in
`@media (scripting: enabled)` because they start content at `opacity: 0` — if
they applied without JavaScript the page would be blank. A browser with JS
disabled, or one too old to support the media feature, never applies them and
shows everything immediately. Nothing on this page is reachable only through
motion.

**Deliberate ordering change.** The brief lists hero copy appearing last in the
reveal, but §14 forbids the hero blocking LCP. Holding the largest text for five
seconds would regress LCP badly and read as broken, so hero copy resolves at
0.15-0.8s while the mark sequence continues behind it. Every other stage follows
the specified order.

**Reduced motion (§14).** One `prefers-reduced-motion: reduce` block pins every
animated layer to its finished state and reveals all content immediately.
Verified in Chromium: all 96 animated elements sit at their final state within
350ms. The travelling pulse declares `--v-opacity: 0` and is correctly invisible
at rest.

Nothing in the animation depicts detection, prediction or measurement of disease.

## Brand mark status — the main placeholder

**The high-resolution brain masters have not been delivered yet.**

The committed derivative `/brand/vascurra-brain.webp` is **141x144**. Spec §2 and
§20 forbid using a low-resolution derivative at hero scale, and §15 calls for
600-800 CSS px on desktop — a 4-8x upscale that would render visibly soft.

Following the §21 handoff rule, the intended layout is preserved at its real
dimensions and the large brain slots render a clearly labelled temporary
placeholder. No replacement mark has been authored.

Where the approved derivative **is** used today: the header mark at 36px and the
footer mark at 28px. From a 141px source that is downscaling at DPR 2, never the
upscaling the spec prohibits.

**To ship the real artwork:** drop the §22 files into `public/brand/brain/` and
set `BRAIN_MASTERS_AVAILABLE = true` in `components/brand/brain-assets.ts`.
Nothing else changes — the sizing contract (§15), the `sizes` attribute (§14),
the reveal choreography and the surrounding light field are all already built
for the final asset, so there is no layout shift and no CLS.

Per §3, no placeholder binaries have been committed under the spec's filenames.

Also still pending on delivery: `apple-touch-icon.png` at 180px (the committed
one is 63x64) and `vascurra-og-1200x630.jpg` (the committed one is 360x189, so
the interim Open Graph image is still generated by `next/og` from brand tokens).

## Email capture status

**Not implemented.** No email service is configured in the repository, and a
form that appears to subscribe someone while storing nothing would be
dishonest. Rather than fake a success state, Phase 1A omits the capture
entirely.

Consequently the site collects **nothing**: no form, no field, no consent
checkbox, no route handler, no provider, no cookies, no analytics. No privacy
notice is owed yet because no processing occurs.

The `Follow the journey` calls to action in the header and hero resolve to the
Coming Soon section — real in-page navigation rather than a link to a page or
service that does not exist.

When this is picked up, the integration point is a new route handler plus a
provider credential in an environment variable, with the form rendered inside
`components/marketing/ComingSoon.tsx`. Per
`docs/regulatory/privacy-gdpr.md`, collect no more than an email address and
an explicit updates consent, and write the privacy notice before shipping it.

## Accessibility

Verified in Chromium with axe-core: **0 violations** at 375px and 1280px.

- Semantic outline: exactly one `<h1>`, one `<h2>` per section, `<h3>` for the
  perspectives, principles and trust themes. Display-sized brand statements
  ("Support independence. Preserve identity.", the framing question) are
  paragraphs — visual size does not mint heading levels.
- Every connecting line, spine, bloom and node is decorative and `aria-hidden`.
  The perspectives and principles are ordered/unordered lists in reading order,
  so the content is complete with no graphic rendered at all.
- `Recall -> Hint -> Guide -> Answer` is an ordered list; the arrows are
  decorative.
- Every interactive element has a visible 3px focus ring; tab order verified.
- Mobile menu: `aria-expanded`, Escape closes and returns focus to the trigger,
  selecting a link closes it.
- Touch targets are at least 44-52px.
- Base body size 18px mobile / 20px desktop, line height 1.7.
- Contrast measured on the rendered page through the browser's own colour engine
  (so `oklab()` and `color-mix()` resolve correctly): **78 text nodes, 0 AA
  failures**. Every display-gradient stop is at least 4.52:1 where large text
  requires 3:1. Gradient headings paint solid navy first and fall back to it in
  forced-colors mode.
- No content overflow at 320-1440px, or at 200% zoom. Note that `body` carries
  `overflow-x: hidden` so the bloom layers can bleed past section edges; the
  overflow check therefore measures the deepest offending *elements* rather than
  document scroll width, which that rule would otherwise mask.
- Anchor targets clear the sticky header via `scroll-padding-top`.

## Mobile

Redesigned rather than stacked. The dimensions row becomes a two-column node
grid; the four perspectives and the five principles each become a vertical
vascular spine with nodes branching off it; the philosophy progression runs
vertically with downward connectors; the hero puts the mark above the copy.

## Deployment

`vercel.json` declares `framework: "nextjs"`. This is required, not decorative:
the Vercel project was created while this repository contained documentation
only, so it had no application to detect and defaulted to a static-site preset
looking for a `public/` output directory. That made the first deploy fail with
*"No Output Directory named \"public\" found after the Build completed"* even
though `next build` had succeeded.

Next.js does not produce a build `public/` directory — `public/` is an *input*
folder for static assets, and the output goes to `.next/`, which Vercel consumes
through its Build Output API. Creating an empty `public/` would turn a broken
build into a worse one: a deploy that "succeeds" and serves nothing.

If a deploy still fails after this, the project's dashboard settings carry an
explicit override that `vercel.json` does not clear. In Vercel -> Project
Settings -> Build & Deployment, set Framework Preset to **Next.js** and clear
any Output Directory override so it falls back to the framework default.

## Known limitations

1. The brain is a labelled placeholder at hero, architecture and closing scale —
   the page will look unfinished at those three points until the masters arrive.
   This is the agreed state, not an oversight, and the composition around it is
   final.
2. `apple-touch-icon.png` is 63x64 against the 180px the spec requires.
3. The Open Graph image is generated from brand tokens (wordmark and tagline, no
   mark) pending `vascurra-og-1200x630.jpg`.
4. Email capture is absent, so the Coming Soon section is informational only and
   carries no call-to-action button — "Follow the journey" in the header and hero
   anchors *to* that section, so a button inside it could only link to itself.
5. No `/privacy` or `/contact` route; the footer links were omitted rather than
   pointed at pages that do not exist.
6. Lighthouse was not run — no Chrome UI in the build environment. The page is
   static, ships two small client components, self-hosts one variable font and
   currently loads one 4.5 KB image, so the inputs are favourable, but the score
   is unmeasured. Re-check once the 2048px hero asset is in place, since that
   becomes the largest payload on the page.
7. `eslint` is pinned to 9.39.1, which upstream marks unsupported. ESLint 10
   currently breaks `eslint-plugin-react` inside `eslint-config-next@16.3.3`;
   revisit when that config supports 10.

## Future replacement points

| Placeholder            | Replace in                                                     |
| ---------------------- | -------------------------------------------------------------- |
| Brain masters          | `public/brand/brain/` + `BRAIN_MASTERS_AVAILABLE` in `components/brand/brain-assets.ts` |
| Touch icon (180px)     | `public/brand/apple-touch-icon.png`                            |
| OG artwork             | `app/opengraph-image.tsx` -> `/brand/social/vascurra-og-1200x630.jpg` |
| Email capture          | `components/marketing/ComingSoon.tsx` + a route handler        |
| Additional routes      | `content/site.ts` nav, `app/sitemap.ts`                        |
| Motion asset (Rive/Lottie/video) | inside `BrainMark`; the surrounding choreography is reusable |
