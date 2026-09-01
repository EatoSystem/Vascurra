import { describe, expect, it } from "vitest";
import {
  HOLDING_COOKIE_VALUE,
  isHoldingPublicPath,
  isHoldingUnlocked,
  passwordsMatch,
} from "./holding-gate";

describe("holding preview gate", () => {
  it("accepts the configured preview password", () => {
    expect(passwordsMatch("Monkstown")).toBe(true);
  });

  it("rejects the wrong password", () => {
    expect(passwordsMatch("monkstown")).toBe(false);
    expect(passwordsMatch("")).toBe(false);
    expect(passwordsMatch("Monkstown ")).toBe(false);
  });

  it("only treats the signed-in cookie value as unlocked", () => {
    expect(isHoldingUnlocked(HOLDING_COOKIE_VALUE)).toBe(true);
    expect(isHoldingUnlocked("nope")).toBe(false);
    expect(isHoldingUnlocked(undefined)).toBe(false);
  });

  it("keeps the holding page and crawler files public", () => {
    expect(isHoldingPublicPath("/")).toBe(true);
    expect(isHoldingPublicPath("/robots.txt")).toBe(true);
    expect(isHoldingPublicPath("/privacy")).toBe(false);
    expect(isHoldingPublicPath("/early-access")).toBe(false);
  });
});
