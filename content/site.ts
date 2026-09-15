/**
 * Site-level constants for the Vascurra public site.
 *
 * Navigation points only at sections and routes that exist.
 */

export const SITE_URL = "https://www.vascurra.com";

export const site = {
  name: "Vascurra",
  url: SITE_URL,
  displayUrl: "www.vascurra.com",
  tagline: "Intelligence for vascular cognitive health.",
  title: "Vascurra — Intelligence for vascular cognitive health",
  description:
    "Vascurra is a human-centred project exploring new ways to support people experiencing vascular cognitive change, their families, clinicians and research.",
  locale: "en_IE",
} as const;

/** Section ids used for in-page navigation. Each one must exist in the page. */
export const sectionIds = {
  why: "why-vascurra",
  people: "people",
  families: "families",
  clinicians: "clinicians",
  research: "research",
  approach: "our-approach",
  closing: "request-access",
} as const;

export const navLinks = [
  { label: "Platform", href: "/" },
  { label: "Personal", href: "/personal" },
  { label: "Family", href: "/family" },
  { label: "Clinical", href: "/clinical" },
  { label: "Research", href: "/research" },
  { label: "Science", href: "/science" },
  { label: "About", href: "/about" },
] as const;

export const earlyAccessHref = "/early-access";
export const privacyHref = "/privacy";
export const homeDiscoverHref = `/#${sectionIds.why}`;
