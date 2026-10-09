import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { capitalFlywheel, previewSectionOrder } from "./home";
import { fundPage } from "./fund";

describe("capital visual system", () => {
  it("reuses the original bright cyan to aqua to green family and hero continuation", () => {
    const tokenCss = readFileSync(resolve(process.cwd(), "app/brand-canonical.css"), "utf8");
    const homeCss = readFileSync(resolve(process.cwd(), "components/vascurra/home/homepage-scaffold.module.css"), "utf8");
    const fundCss = readFileSync(resolve(process.cwd(), "components/vascurra/fund/fund-page.module.css"), "utf8");
    const globalCss = readFileSync(resolve(process.cwd(), "app/globals.css"), "utf8");
    const compactTokens = tokenCss.replace(/\s+/g, "");

    expect(compactTokens).toContain("--vascurra-grad-hero-cyan:#0aa3bc;");
    expect(compactTokens).toContain("--vascurra-grad-hero-aqua:#2ecfc4;");
    expect(compactTokens).toContain("--vascurra-grad-hero-green:#49c768;");
    expect(compactTokens).toContain("--vascurra-brand-gradient:linear-gradient(90deg,var(--vascurra-grad-hero-cyan)0%,var(--vascurra-grad-hero-aqua)42%,var(--vascurra-grad-hero-green)100%);");
    expect(compactTokens).toContain("--vascurra-brand-gradient-end:linear-gradient(90deg,color-mix(insrgb,var(--vascurra-grad-hero-aqua)35%,var(--vascurra-grad-hero-green))0%,var(--vascurra-grad-hero-green)100%);");
    expect(compactTokens).toContain("--vascurra-brand-gradient-ink:linear-gradient(90deg,#006f860%,#08766f42%,#23783d100%);");
    expect(compactTokens).toContain("--vascurra-display-gradient:var(--vascurra-brand-gradient);");

    expect(homeCss).toMatch(/\.gradient\s*\{[^}]*background:\s*var\(--vascurra-brand-gradient\)/);
    expect(homeCss).toMatch(/\.gradientEnd\s*\{[^}]*background-image:\s*var\(--vascurra-brand-gradient-end\)/);
    expect(homeCss).toMatch(/\.gradientEnd\s*\{[^}]*background-color:\s*#087486/);
    expect(homeCss).toMatch(/\.luminousGradient\s*\{[^}]*background:\s*var\(--vascurra-brand-gradient\)/);
    expect(fundCss).toMatch(/\.accent\s*\{[^}]*background:\s*var\(--vascurra-brand-gradient\)/);
    expect(globalCss).toMatch(/\.text-gradient\s*\{[^}]*background-image:\s*var\(--vascurra-brand-gradient\)/);
    expect(globalCss).toMatch(/\.text-mark-hero-end\s*\{[^}]*background-image:\s*var\(--vascurra-brand-gradient-end\)/);
  });

  it("retains every approved horizon and its planning boundary", () => {
    expect(capitalFlywheel.horizons.map((horizon) => horizon.amount)).toEqual(["€1–5M", "€10–25M", "€50–100M+", "€1B+"]);
    expect(fundPage.horizons.map((horizon) => horizon.amount)).toEqual(["€1–5M", "€10–25M", "€50–100M+", "€1B+"]);
    expect(capitalFlywheel.qualifier).toContain("not announced equity rounds");
    expect(fundPage.horizonsQualifier).toContain("not current funding");
    expect(fundPage.horizons[3]!.body).toContain("cumulative mission capacity over time");
  });

  it("keeps Support, the Capital Flywheel and Lab in the approved homepage sequence", () => {
    const supportIndex = previewSectionOrder.indexOf("support");
    expect(previewSectionOrder[supportIndex + 1]).toBe("capital-flywheel");
    expect(previewSectionOrder[supportIndex + 2]).toBe("lab");
  });
});
