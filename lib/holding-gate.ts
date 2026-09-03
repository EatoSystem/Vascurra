import { timingSafeEqual } from "node:crypto";
import { HOLDING_COOKIE_VALUE } from "./holding-public";

export {
  HOLDING_COOKIE,
  HOLDING_COOKIE_MAX_AGE,
  HOLDING_COOKIE_VALUE,
  isHoldingPublicPath,
} from "./holding-public";

/**
 * Shared preview gate for the public site. This is not an account system and
 * does not protect health data — it only holds the full marketing pages until
 * the agreed preview password is entered.
 */

function expectedPassword(): string {
  return process.env.HOLDING_PAGE_PASSWORD ?? "Monkstown";
}

function asComparable(value: string): Buffer {
  return Buffer.from(value.normalize("NFKC"));
}

export function passwordsMatch(input: string): boolean {
  const expected = asComparable(expectedPassword());
  const received = asComparable(input);
  if (expected.length !== received.length) {
    timingSafeEqual(expected, expected);
    return false;
  }
  return timingSafeEqual(expected, received);
}

export function isHoldingUnlocked(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false;
  const expected = asComparable(HOLDING_COOKIE_VALUE);
  const received = asComparable(cookieValue);
  if (expected.length !== received.length) return false;
  return timingSafeEqual(expected, received);
}
