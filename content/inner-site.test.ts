import { describe, expect, it } from "vitest";
import { artworkManifest } from "./artwork-manifest";
import { innerSitePages, type InnerStoryPage } from "./inner-site";
import { publicPages } from "./vascurra/public-site";

const expected = ["why-vascurra", "patient-0", "how-it-works", "families", "clinicians", "intelligence", "research", "lab", "responsible", "support", "about"];
const prohibitedPositiveClaims = [/vascurra (?:slows|prevents|predicts|diagnoses|cures|improves)/i, /clinically validated/i, /proven efficacy/i, /has produced discoveries/i];

describe("Phase 2 inner-site stories", () => {
  it("covers every major non-personal narrative route", () => {
    expect(Object.keys(innerSitePages)).toEqual(expected);
    for (const page of Object.values(innerSitePages) as readonly InnerStoryPage[]) expect(page.chapters.length).toBeGreaterThanOrEqual(6);
  });

  it("uses selective accents and no more than one immersive chapter per page", () => {
    for (const page of Object.values(innerSitePages) as readonly InnerStoryPage[]) {
      expect(page.title).toContain(page.accent);
      expect(page.chapters.filter((chapter) => chapter.tone === "deep")).toHaveLength(1);
      for (const chapter of page.chapters) if (chapter.accent) expect(chapter.headline).toContain(chapter.accent);
    }
  });

  it("keeps next chapters on real internal routes", () => {
    const valid = new Set(["/personal", "/privacy", ...Object.keys(publicPages).map((slug) => `/${slug}`)]);
    for (const page of Object.values(innerSitePages) as readonly InnerStoryPage[]) {
      expect(valid.has(page.next.href), `${page.slug} → ${page.next.href}`).toBe(true);
      for (const cta of page.closing.ctas) expect(valid.has(cta.href), `${page.slug} → ${cta.href}`).toBe(true);
    }
  });

  it("has complete, uniquely keyed artwork handoffs", () => {
    expect(artworkManifest.length).toBeGreaterThanOrEqual(20);
    expect(new Set(artworkManifest.map((item) => item.assetKey)).size).toBe(artworkManifest.length);
    for (const item of artworkManifest) {
      expect(item.route).toMatch(/^\/[a-z0-9-]+$/);
      expect(item.assetKey).toMatch(/^[a-z0-9-]+$/);
      expect(item.brief.length).toBeGreaterThan(40);
      expect(item.status).toBe("placeholder");
    }
  });

  it("contains no prohibited positive health claims", () => {
    const copy = JSON.stringify(innerSitePages);
    for (const claim of prohibitedPositiveClaims) expect(copy).not.toMatch(claim);
  });

  it("keeps the three platform layers distinct", () => {
    const intelligence = JSON.stringify(innerSitePages.intelligence);
    expect(intelligence).toContain("Veya is the conversation layer");
    expect(intelligence).toContain("Vascurra Intelligence is the governed interpretation layer");
    expect(intelligence).toContain("Vascurra Lab is the future research-learning layer");
  });
});
