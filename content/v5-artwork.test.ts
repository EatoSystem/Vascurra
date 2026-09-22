import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { V5_ARTWORK_BASE, v5Artwork } from "./v5-artwork";

const artworks = Object.values(v5Artwork);
const publicRoot = resolve(process.cwd(), "public");
const assetRoot = resolve(publicRoot, V5_ARTWORK_BASE.replace(/^\//, ""));

describe("V5 artwork integration", () => {
  it("manifests all nine approved, unchanged PNG filenames", () => {
    expect(artworks.map((artwork) => artwork.filename)).toEqual([
      "01_veya_a_day_with_veya.png",
      "02_veya_context_over_time.png",
      "03_capital_one_stream_becomes_a_network.png",
      "04_capital_four_horizons.png",
      "05_fund_hero_capital_compute_research_expertise_to_capacity.png",
      "06_fund_mission_capacity_is_bigger_than_cash.png",
      "07_fund_1B_permanent_global_capacity.png",
      "08_fund_the_open_capital_flywheel.png",
      "09_fund_products_fund_research_loop.png",
    ]);
    expect(new Set(artworks.map((artwork) => artwork.number)).size).toBe(9);
  });

  it("keeps every image and its documentation in the expected public path", () => {
    for (const artwork of artworks) {
      const path = resolve(assetRoot, artwork.filename);
      expect(existsSync(path), artwork.filename).toBe(true);
      expect(statSync(path).size).toBe(artwork.bytes);
      expect(artwork.width).toBe(1672);
      expect(artwork.height).toBe(941);
    }
    expect(existsSync(resolve(process.cwd(), "public/vascurra/homepage/v5/README.md"))).toBe(true);
  });

  it("integrates 01–03 on the homepage and 04–09 on Fund", () => {
    const veya = readFileSync(resolve(process.cwd(), "components/vascurra/home/veya.tsx"), "utf8");
    const capital = readFileSync(resolve(process.cwd(), "components/vascurra/home/capital-flywheel.tsx"), "utf8");
    const fund = readFileSync(resolve(process.cwd(), "components/vascurra/fund/FundPage.tsx"), "utf8");
    const horizons = readFileSync(resolve(process.cwd(), "components/vascurra/fund/CapitalHorizons.tsx"), "utf8");
    expect(veya).toMatch(/v5Artwork\.veyaDay/);
    expect(veya).toMatch(/v5Artwork\.veyaContext/);
    expect(capital).toMatch(/v5Artwork\.capitalNetwork/);
    expect(`${fund}\n${horizons}`).toMatch(/v5Artwork\.capitalHorizons/);
    for (const key of ["fundHero", "missionCapacity", "permanentCapacity", "capitalFlywheel", "productsResearch"]) {
      expect(`${fund}\n${horizons}`).toContain(`v5Artwork.${key}`);
    }
  });

  it("preserves V2 noindex and the homepage section order", () => {
    const layout = readFileSync(resolve(process.cwd(), "app/(v2)/layout.tsx"), "utf8");
    expect(layout).toMatch(/index:\s*false/);
    expect(layout).toMatch(/follow:\s*false/);
  });
});
