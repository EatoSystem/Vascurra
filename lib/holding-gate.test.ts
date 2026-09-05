import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  createHoldingToken,
  isHoldingGateEnabled,
  isHoldingPublicPath,
  isHoldingUnlocked,
  passwordsMatch,
} from "./holding-gate";

const ORIGINAL_PASSWORD = process.env.HOLDING_PAGE_PASSWORD;

describe("holding preview gate", () => {
  beforeEach(() => {
    process.env.HOLDING_PAGE_PASSWORD = "configured-test-credential";
  });

  afterEach(() => {
    if (ORIGINAL_PASSWORD === undefined) delete process.env.HOLDING_PAGE_PASSWORD;
    else process.env.HOLDING_PAGE_PASSWORD = ORIGINAL_PASSWORD;
  });

  it("accepts only the configured server credential", async () => {
    await expect(passwordsMatch("configured-test-credential")).resolves.toBe(true);
    await expect(passwordsMatch("wrong")).resolves.toBe(false);
    expect(isHoldingGateEnabled()).toBe(true);
  });

  it("has no repository fallback credential", async () => {
    delete process.env.HOLDING_PAGE_PASSWORD;
    expect(isHoldingGateEnabled()).toBe(false);
    await expect(passwordsMatch("legacy-fallback-not-configured")).resolves.toBe(false);
    await expect(createHoldingToken()).resolves.toBeNull();
    await expect(isHoldingUnlocked(undefined)).resolves.toBe(true);
  });

  it("accepts a signed token and rejects tampering or expiry", async () => {
    const now = Date.UTC(2026, 8, 5);
    const token = await createHoldingToken(now);
    expect(token).toBeTruthy();
    await expect(isHoldingUnlocked(token ?? undefined, now + 1_000)).resolves.toBe(true);
    await expect(isHoldingUnlocked(`${token}x`, now + 1_000)).resolves.toBe(false);
    await expect(isHoldingUnlocked(token ?? undefined, now + 8 * 60 * 60 * 1000)).resolves.toBe(false);
  });

  it("keeps privacy and crawler files public", () => {
    expect(isHoldingPublicPath("/")).toBe(true);
    expect(isHoldingPublicPath("/robots.txt")).toBe(true);
    expect(isHoldingPublicPath("/privacy")).toBe(true);
    expect(isHoldingPublicPath("/early-access")).toBe(false);
  });
});
