/**
 * Shared preview-gate constants. Kept free of Node APIs so Edge middleware
 * can import them.
 */
export const HOLDING_COOKIE = "vascurra_holding";
export const HOLDING_COOKIE_MAX_AGE = 60 * 60 * 8;

export function isHoldingPublicPath(pathname: string): boolean {
  return (
    pathname === "/" ||
    pathname === "/privacy" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/opengraph-image" ||
    pathname.startsWith("/opengraph-image")
  );
}
