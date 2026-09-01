import { roles, type RoleValue } from "@/content/early-access";

export type EarlyAccessInput = {
  name: string;
  email: string;
  role: string;
  consent: boolean;
};

export type FieldErrors = Partial<Record<"name" | "email" | "role" | "consent", string>>;

export type EarlyAccessResult =
  | { ok: true }
  | { ok: false; code: "invalid"; fields: FieldErrors }
  | { ok: false; code: "unavailable" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ROLE_VALUES = new Set<string>(roles.map((role) => role.value));

export function parseEarlyAccess(formData: FormData): EarlyAccessInput {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    consent: formData.get("consent") === "on",
  };
}

export function validateEarlyAccess(input: EarlyAccessInput): FieldErrors {
  const fields: FieldErrors = {};

  if (input.name.length < 2) {
    fields.name = "Please enter your name.";
  }
  if (!EMAIL.test(input.email)) {
    fields.email = "Please enter a valid email address.";
  }
  if (!ROLE_VALUES.has(input.role)) {
    fields.role = "Please choose a role.";
  }
  if (!input.consent) {
    fields.consent = "Please confirm we may email you about Vascurra.";
  }

  return fields;
}

export function isRole(value: string): value is RoleValue {
  return ROLE_VALUES.has(value);
}
