import { describe, expect, it } from "vitest";
import { personal, personalArtworkManifest } from "./personal";

describe("canonical personal page content", () => {
  it("defines four uniquely keyed artwork handoff slots", () => {
    expect(personalArtworkManifest).toHaveLength(4);
    expect(new Set(personalArtworkManifest.map((item) => item.assetKey)).size).toBe(4);
    expect(personalArtworkManifest.map((item) => item.assetKey)).toEqual(["personal-hero", "personal-adaptive-support", "personal-veya", "personal-control"]);
  });

  it("keeps product status and clinical boundaries explicit", () => {
    expect(personal.hero.qualifier).toContain("currently in development");
    expect(personal.everyday.qualifier).toContain("not diagnosis");
    expect(personal.veya.safety).toContain("not a doctor");
    expect(personal.veya.safety).toContain("not a diagnostic system");
  });

  it("uses internal next steps only", () => {
    expect([personal.next.href, "/access", "/how-it-works", "/veya", "/about"]).toEqual(expect.arrayContaining(["/families", "/access"]));
  });
});
