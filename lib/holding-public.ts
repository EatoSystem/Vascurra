/**
 * Shared preview-gate constants. Kept free of Node APIs so Edge middleware
 * can import them.
 */
export const HOLDING_COOKIE = "vascurra_holding";
export const HOLDING_COOKIE_VALUE = "unlocked";
export const HOLDING_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

export function isHoldingPublicPath(pathname: string): boolean {
  return (
    pathname === "/" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/opengraph-image" ||
    pathname.startsWith("/opengraph-image")
  );
}
