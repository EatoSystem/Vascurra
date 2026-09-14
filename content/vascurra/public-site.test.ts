import { describe, expect, it } from "vitest";
import { artworkManifest, footerGroups, primaryNav, publicDisclaimer, publicPages } from "./public-site";

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
    const hrefs: string[] = primaryNav.map((link) => link.href);
    for (const group of footerGroups) hrefs.push(...group.links.map((link) => link.href));
    const valid = new Set(["/privacy", ...requiredRoutes.map((route) => `/${route}`)]);
    for (const href of hrefs) expect(valid.has(href), href).toBe(true);
  });

  it("preserves the public medical disclaimer", () => {
    expect(publicDisclaimer).toContain("does not provide medical advice, diagnosis or treatment");
  });
});
