import { describe, expect, it } from "vitest";
import { parseEarlyAccess, validateEarlyAccess } from "./early-access";

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
});
