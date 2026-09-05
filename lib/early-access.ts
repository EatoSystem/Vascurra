import { roles, type RoleValue } from "@/content/early-access";

export type EarlyAccessInput = {
  name: string;
  email: string;
  role: string;
  consent: boolean;
  website: string;
};

export type FieldErrors = Partial<Record<"name" | "email" | "role" | "consent", string>>;

export type EarlyAccessResult =
  | { ok: true }
  | { ok: false; code: "invalid"; fields: FieldErrors }
  | { ok: false; code: "unavailable" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ROLE_VALUES = new Set<string>(roles.map((role) => role.value));
export const EARLY_ACCESS_LIMITS = { name: 100, email: 254, total: 1024 } as const;
const ALLOWED_FIELDS = new Set(["name", "email", "role", "consent", "website"]);

export function parseEarlyAccess(formData: FormData): EarlyAccessInput {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    consent: formData.get("consent") === "on",
    website: String(formData.get("website") ?? "").trim(),
  };
}

export function isEarlyAccessPayloadAcceptable(formData: FormData): boolean {
  let total = 0;
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("$ACTION_")) continue;
    if (!ALLOWED_FIELDS.has(key) || formData.getAll(key).length > 1 || typeof value !== "string") {
      return false;
    }
    total += key.length + value.length;
  }
  return total <= EARLY_ACCESS_LIMITS.total;
}

export function validateEarlyAccess(input: EarlyAccessInput): FieldErrors {
  const fields: FieldErrors = {};

  if (input.name.length < 2 || input.name.length > EARLY_ACCESS_LIMITS.name) {
    fields.name = "Please enter your name.";
  }
  if (input.email.length > EARLY_ACCESS_LIMITS.email || !EMAIL.test(input.email)) {
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

export function isAllowedWebhookUrl(
  value: string,
  allowLocalHttp = process.env.NODE_ENV !== "production",
): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ||
      (allowLocalHttp && url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname));
  } catch {
    return false;
  }
}

export function isRole(value: string): value is RoleValue {
  return ROLE_VALUES.has(value);
}
