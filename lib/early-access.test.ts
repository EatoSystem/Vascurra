import { describe, expect, it } from "vitest";
import {
  EARLY_ACCESS_LIMITS,
  isAllowedWebhookUrl,
  isEarlyAccessPayloadAcceptable,
  parseEarlyAccess,
  validateEarlyAccess,
} from "./early-access";

function data(entries: Record<string, string>): FormData {
  const form = new FormData();
  for (const [key, value] of Object.entries(entries)) form.append(key, value);
  return form;
}

describe("early access validation", () => {
  it("accepts a complete registration", () => {
    const input = parseEarlyAccess(
      data({
        name: "Alex Rivera",
        email: "alex@example.com",
        role: "family",
        consent: "on",
      }),
    );
    expect(validateEarlyAccess(input)).toEqual({});
  });

  it("rejects missing fields and health-looking free text is not requested", () => {
    const input = parseEarlyAccess(data({}));
    const errors = validateEarlyAccess(input);
    expect(errors.name).toBeTruthy();
    expect(errors.email).toBeTruthy();
    expect(errors.role).toBeTruthy();
    expect(errors.consent).toBeTruthy();
  });

  it("rejects an unknown role", () => {
    const input = parseEarlyAccess(
      data({
        name: "Alex",
        email: "alex@example.com",
        role: "patient-record",
        consent: "on",
      }),
    );
    expect(validateEarlyAccess(input).role).toBeTruthy();
  });

  it("rejects excessive and duplicate input", () => {
    const oversized = data({ name: "A".repeat(EARLY_ACCESS_LIMITS.name + 1), email: "alex@example.com", role: "family", consent: "on" });
    expect(validateEarlyAccess(parseEarlyAccess(oversized)).name).toBeTruthy();
    oversized.append("email", "second@example.com");
    expect(isEarlyAccessPayloadAcceptable(oversized)).toBe(false);
  });

  it("rejects unexpected payload fields", () => {
    expect(isEarlyAccessPayloadAcceptable(data({ name: "Alex", diagnosis: "private" }))).toBe(false);
  });

  it("only permits secure webhook targets in production", () => {
    expect(isAllowedWebhookUrl("https://example.com/hooks/vascurra", false)).toBe(true);
    expect(isAllowedWebhookUrl("http://example.com/hooks/vascurra", false)).toBe(false);
    expect(isAllowedWebhookUrl("not a url", false)).toBe(false);
  });
});
