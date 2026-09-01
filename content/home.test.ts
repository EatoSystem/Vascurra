import { describe, expect, it } from "vitest";
import * as home from "./home";
import * as siteContent from "./site";
import * as earlyAccessContent from "./early-access";
import * as privacyContent from "./privacy";

/**
 * Executable claims guardrail.
 *
 * `AGENTS.md` §3/§4 and docs/clinical/intended-purpose-and-claims.md prohibit
 * a specific vocabulary from appearing in public copy. This test walks every
 * string this site can render and fails the build if any of it reappears.
 *
 * Some prohibited words legitimately appear inside *negative* statements — the
 * safety section has to be able to say Vascurra does not diagnose. Those exact
 * sentences are allow-listed below, and separately asserted to still be
 * negations, so the allowlist cannot be used to smuggle in a positive claim.
 */

const PROHIBITED: ReadonlyArray<readonly [string, RegExp]> = [
  ["diagnosis claim", /diagnos/i],
  ["prediction claim", /predict/i],
  ["prevention claim", /prevent/i],
  ["early-detection claim", /detect/i],
  ["slows-decline claim", /slow(s|ing)?\s+(cognitive\s+)?(decline|progression|dementia)/i],
  ["improves-cognition claim", /improv\w*\s+(cognition|outcomes?|survival)/i],
  ["clinical validation claim", /clinical(ly)?\s+validat/i],
  ["medical device claim", /medical\s+device/i],
  ["brain health score", /brain[\s-]?health\s+score/i],
  ["vascular age", /vascular\s+age/i],
  ["risk score or rating", /(risk\s+(score|age|rating))|\b(low|high|moderate)\s+risk\b/i],
  ["numeric score", /\b\d{1,3}\s*\/\s*100\b/],
  ["invented statistic", /\b\d+(\.\d+)?\s*%/],
  ["regulatory certification", /\b(ce[\s-]?mark|hipaa|soc\s?2|iso\s?\d|gdpr[\s-]compliant|fda|certified|accredited)\b/i],
  ["proven claim", /\bproven\b/i],
  ["named individual", /\bcurry\b/i],
];

/** Sentences permitted to contain prohibited words because they negate them. */
const NEGATIONS: readonly string[] = [
  home.projectStatus.boundaries,
  home.footer.disclaimer,
  home.perspectives.note,
];

function collectStrings(value: unknown, path: string): Array<[string, string]> {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => collectStrings(item, path + "." + String(i)));
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) =>
      collectStrings(item, `${path}.${key}`),
    );
  }
  return [];
}

const allStrings = [
  ...collectStrings(home, "home"),
  ...collectStrings(siteContent, "site"),
  ...collectStrings(earlyAccessContent, "earlyAccess"),
  ...collectStrings(privacyContent, "privacy"),
];

describe("public copy claims guardrail", () => {
  it("collects the site's copy", () => {
    expect(allStrings.length).toBeGreaterThan(40);
  });

  const auditable = allStrings.filter(([, text]) => !NEGATIONS.includes(text));

  for (const [label, pattern] of PROHIBITED) {
    it(`contains no ${label}`, () => {
      const offenders = auditable
        .filter(([, text]) => pattern.test(text))
        .map(([path, text]) => `${path}: ${text}`);

      expect(offenders).toEqual([]);
    });
  }

  it("keeps every allow-listed sentence a negation", () => {
    for (const sentence of NEGATIONS) {
      expect(sentence).toMatch(/\b(not|never|no)\b/i);
    }
  });

  it("allow-listed sentences are all actually used in the copy", () => {
    const rendered = new Set(allStrings.map(([, text]) => text));
    for (const sentence of NEGATIONS) {
      expect(rendered.has(sentence)).toBe(true);
    }
  });
});
