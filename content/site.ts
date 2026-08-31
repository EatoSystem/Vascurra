/**
 * Site-level constants for the Vascurra public site.
 *
 * Phase 1A is a single holding page. Navigation therefore points only at
 * sections that exist on this page — no links to product pages that have not
 * been built yet.
 */

export const SITE_URL = "https://www.vascurra.com";

export const site = {
  name: "Vascurra",
  url: SITE_URL,
  displayUrl: "www.vascurra.com",
  tagline: "AI for vascular cognitive health.",
  title: "Vascurra — AI for vascular cognitive health",
  description:
    "Vascurra is a human-centred AI project exploring new ways to support people experiencing vascular cognitive change, their families and clinicians.",
  locale: "en_IE",
} as const;

/** Section ids used for in-page navigation. Each one must exist in the page. */
export const sectionIds = {
  project: "the-project",
  approach: "our-approach",
  comingSoon: "coming-soon",
} as const;

export const navLinks = [
  { label: "The Project", href: `#${sectionIds.project}` },
  { label: "Our Approach", href: `#${sectionIds.approach}` },
  { label: "Coming Soon", href: `#${sectionIds.comingSoon}` },
] as const;

/**
 * Destination for every "Follow the journey" call to action.
 *
 * Phase 1A has no email service configured and no other route, so this resolves
 * to the Coming Soon section rather than to a form or a page that does not
 * exist. Change this single constant to a real URL or mailto the moment there
 * is somewhere to send people; every call to action picks it up.
 *
 * Known limitation while it points in-page: the button inside the Coming Soon
 * section itself anchors to its own section and is therefore a no-op. The
 * header and hero calls to action, which scroll the reader here, work as
 * intended.
 */
export const followHref = `#${sectionIds.comingSoon}`;
