import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { capitalFlywheel } from "./home";
import { fundPage } from "./fund";

describe("capital visual system", () => {
  it("defines and reuses the canonical deep-teal to green display gradient", () => {
    const tokenCss = readFileSync(resolve(process.cwd(), "app/brand-canonical.css"), "utf8");
    const homeCss = readFileSync(resolve(process.cwd(), "components/vascurra/home/homepage-scaffold.module.css"), "utf8");
    const fundCss = readFileSync(resolve(process.cwd(), "components/vascurra/fund/fund-page.module.css"), "utf8");
    expect(tokenCss).toContain("--vascurra-display-gradient");
    expect(tokenCss).toContain("var(--vascurra-grad-hero-green) 100%");
    expect(homeCss).toContain("var(--vascurra-display-gradient)");
    expect(fundCss).toContain("var(--vascurra-display-gradient)");
  });

  it("retains every approved horizon and its planning boundary", () => {
    expect(capitalFlywheel.horizons.map((horizon) => horizon.amount)).toEqual(["€1–5M", "€10–25M", "€50–100M+", "€1B+"]);
    expect(fundPage.horizons.map((horizon) => horizon.amount)).toEqual(["€1–5M", "€10–25M", "€50–100M+", "€1B+"]);
    expect(capitalFlywheel.qualifier).toContain("not announced equity rounds");
    expect(fundPage.horizonsQualifier).toContain("not current funding");
    expect(fundPage.horizons[3]!.body).toContain("cumulative mission capacity over time");
  });
});
