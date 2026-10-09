import { describe, expect, it } from "vitest";
import { artworkManifest, footerGroups, footerUtilityLinks, primaryNav, publicDisclaimer, publicPages, type NavigationItem } from "./public-site";
import { strategicPages } from "../strategic-pages";

const requiredRoutes = ["why-vascurra", "patient-0", "how-it-works", "veya", "intelligence", "lab", "people", "families", "clinicians", "research", "responsible", "support", "about", "access", "contact", "terms", "accessibility", "disclaimer"];
const forbiddenClaims = [/slows? dementia/i, /prevents? stroke/i, /clinically validated/i, /medically proven/i, /improves? survival/i, /cures? vascular dementia/i];

describe("Wave 1 public-site content", () => {
  it("defines every required gated route", () => {
    expect(Object.keys(publicPages).sort()).toEqual(requiredRoutes.sort());
  });

  it("keeps artwork placeholders structured and replaceable", () => {
    expect(artworkManifest.length).toBeGreaterThanOrEqual(12);
    for (const item of artworkManifest) {
      expect(item.assetKey).toMatch(/^[a-z0-9-]+$/);
      expect(item.status).toBe("Awaiting approved artwork");
      expect(item.mobileFormat.length).toBeGreaterThan(3);
    }
  });

  it("contains no prohibited positive claims", () => {
    const copy = JSON.stringify(publicPages);
    for (const claim of forbiddenClaims) expect(copy).not.toMatch(claim);
  });

  it("uses only real internal routes in shared navigation", () => {
    const hrefs: string[] = (primaryNav as readonly NavigationItem[]).flatMap((link) => link.children ? link.children.map((child) => child.href) : link.href ? [link.href] : []);
    for (const group of footerGroups) hrefs.push(...group.links.map((link) => link.href));
    hrefs.push(...footerUtilityLinks.map((link) => link.href));
    const valid = new Set(["/privacy", "/personal", "/research-engine", "/VeyAI", ...requiredRoutes.map((route) => `/${route}`), ...Object.keys(strategicPages).map((route) => `/${route}`)]);
    for (const href of hrefs) expect(valid.has(href), href).toBe(true);
  });

  it("keeps the main navigation concise and leaves the primary action to the header CTA", () => {
    const labels: readonly string[] = primaryNav.map((item) => item.label);
    expect(labels).toEqual(["Why Vascurra", "The System", "For You", "Research", "Roadmap"]);
    expect(labels).not.toContain("Support");
  });

  it("preserves the public medical disclaimer", () => {
    expect(publicDisclaimer).toContain("does not provide medical advice, diagnosis or treatment");
  });

  it("uses the simplified public product model", () => {
    const copy = JSON.stringify(publicPages);
    expect(copy).toContain("Veya");
    expect(copy).toContain("VeyAI");
    expect(copy).toContain("Vascurra Lab");
    expect(copy).not.toContain("Vascurra Intelligence");
  });
});
