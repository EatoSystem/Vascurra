# Phase 1A — Public Holding Page

## What was built

A single premium holding page for `www.vascurra.com` introducing Vascurra as a
project in development. Phase 1A is a deliberately narrower precursor to the
full Phase 1 site described in `docs/product/phase-1-website-spec.md`: one
route, no product pages, no forms, no data collection.

Sections, in order: header · hero · project introduction · four connected
perspectives · cognitive-support philosophy · principles · safety and project
status · coming soon · footer.

## Architecture

Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4. No
database, no authentication, no AI provider, no analytics, no API routes, no
environment variables. Every route is statically prerendered.

```text
app/                 layout (metadata, font, skip link), page, globals.css,
                     opengraph-image, robots, sitemap
components/brand/    VascurraMark (the asset swap point), Wordmark
components/motion/   BrandReveal, AmbientField
components/layout/   SiteHeader, MobileNav, SiteFooter
components/ui/       Container, Section, Card, Badge, CtaLink
components/marketing/ one component per page section
content/site.ts      navigation, canonical URL, metadata strings
content/home.ts      every public sentence on the site
content/home.test.ts executable claims guardrail
```

Server components throughout. `MobileNav` is the only client component on the
site; nothing else ships JavaScript.

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

## Animation implementation

The signature reveal is pure CSS keyframes over inline SVG — no Framer Motion,
no Lottie, no Rive, no animation library, no JavaScript, nothing added to the
client bundle.

`components/motion/AmbientField.tsx` holds the vascular geometry; the stage
timing follows `docs/brand/motion-guidelines.md` across roughly 4.5s:

| Time  | Stage                                             |
| ----- | ------------------------------------------------- |
| 0.0s  | particles gather                                  |
| 0.9s  | filaments connect, vascular branches draw          |
| 1.8s  | teal/mint ribbons form                            |
| 2.6s  | the brand mark resolves                            |
| 3.4s  | nodes illuminate, staggered                        |
| 4.8s+ | ambient loop — a slow ~11s breath, no spin         |

Branch paths carry `pathLength="1"` so the draw is exact regardless of
geometry.

**Deliberate ordering change.** The Phase 1A brief lists hero copy appearing
last in the sequence, but also requires that motion must not block LCP.
Holding the `<h1>` back four seconds would regress LCP badly and read as a
broken page, so hero copy resolves at 0.15–0.75s while the mark sequence
continues behind it. Everything else follows the specified order.

**Reduced motion.** A single `prefers-reduced-motion: reduce` block pins every
animated layer to its finished state. Because this is CSS rather than
JavaScript there is no flash of an unanimated frame first, and no information
is lost — the field is decorative and `aria-hidden` throughout. Verified in
Chromium: all 69 animated elements sit at final opacity within 350ms, well
before the animated timeline would have finished.

Nothing in the animation depicts detection, prediction or measurement of
disease.

## Brand mark status — the main placeholder

**The Vascurra brain icon is not in this repository.** No brand assets exist
yet; the final artwork is being supplied separately.

Rather than invent a brain silhouette — which would risk establishing the
wrong mark — `components/brand/VascurraMark.tsx` reserves the space with an
aspect-locked, visibly captioned placeholder ("Brand mark to be supplied").

To ship the real mark, replace only the contents of the inner frame in that
one file and delete the caption. The frame has its own sizing contract, so
nothing else on the page moves: no layout shift, no spacing changes, no CLS.
The surrounding reveal choreography is already wired and the incoming asset
inherits it.

Also still pending on that asset: the favicon and app icons, and the brand
mark in the Open Graph image (currently wordmark and tagline only).

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

- Semantic outline: exactly one `<h1>`, one `<h2>` per section, `<h3>` for
  cards and principles. Display-sized brand statements ("Support independence.
  Preserve identity.", the framing question) are paragraphs, not headings —
  visual size does not mint heading levels.
- `Recall → Hint → Guide → Answer` is an ordered list, so the progression is
  carried by markup rather than by arrow glyphs or colour.
- Every interactive element has a visible 3px focus ring; tab order verified.
- Mobile menu: `aria-expanded`, Escape closes and returns focus to the
  trigger, selecting a link closes it.
- Touch targets are at least 44–48px.
- Base body size 18px mobile / 19px desktop, line height 1.7.
- Contrast measured on the rendered page: 60 text nodes, 0 AA failures,
  weakest 5.72:1. Every stop of the display gradient is at least 5.04:1
  against its background, where large text only requires 3:1. Gradient
  headings paint solid navy first and fall back to it in forced-colors mode.
- No horizontal scrolling at 320–1440px, or at 200% zoom.
- Anchor targets clear the sticky header via `scroll-padding-top`.

## Deployment

`vercel.json` declares `framework: "nextjs"`. This is required, not decorative:
the Vercel project was created while this repository contained documentation
only, so it had no application to detect and defaulted to a static-site preset
looking for a `public/` output directory. That made the first deploy fail with
*"No Output Directory named \"public\" found after the Build completed"* even
though `next build` had succeeded.

Next.js does not produce a `public/` directory — `public/` is an *input* folder
for static assets, and the build output goes to `.next/`, which Vercel consumes
through its Build Output API. Creating an empty `public/` would turn a broken
build into a worse one: a deploy that "succeeds" and serves nothing.

If a deploy still fails after this, the project's dashboard settings carry an
explicit override that `vercel.json` does not clear. In Vercel → Project
Settings → Build & Deployment, set Framework Preset to **Next.js** and clear
any Output Directory override so it falls back to the framework default.

## Known limitations

1. The brand mark is a labelled placeholder — the page will look unfinished at
   the mark until the asset arrives. This is the agreed state, not an
   oversight.
2. No favicon or app icons; the browser default is used.
3. The Open Graph image carries no brand mark.
4. Email capture is absent, so the Coming Soon section is informational only.
5. No `/privacy` or `/contact` route; the footer links to them were omitted
   rather than pointed at pages that do not exist.
6. Lighthouse was not run — no Chrome UI in the build environment. The page is
   static, ships one small client component, self-hosts one variable font and
   uses no images, so the inputs are favourable, but the score is unmeasured.
7. `eslint` is pinned to 9.39.1, which upstream marks unsupported. ESLint 10
   currently breaks `eslint-plugin-react` inside `eslint-config-next@16.3.3`;
   revisit when that config supports 10.

## Future replacement points

| Placeholder                | Replace in                                      |
| -------------------------- | ----------------------------------------------- |
| Brand mark                 | `components/brand/VascurraMark.tsx`             |
| Favicon / app icons        | `app/icon.*`, `app/apple-icon.*`                |
| OG image artwork           | `app/opengraph-image.tsx`                       |
| Email capture              | `components/marketing/ComingSoon.tsx` + route   |
| Additional routes          | `content/site.ts` nav, `app/sitemap.ts`         |
| Final motion asset         | inside `VascurraMark`; choreography is reusable |
