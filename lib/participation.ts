export const participationRoles = ["person", "family", "clinician", "researcher", "partner", "supporter", "other"] as const;
export const contactTopics = ["general", "clinical", "research", "partnerships", "funding", "media"] as const;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED = new Set(["kind", "name", "email", "country", "category", "message", "consent", "website"]);

export type ParticipationInput = { kind: string; name: string; email: string; country: string; category: string; message: string; consent: boolean; website: string };
export type ParticipationField = "name" | "email" | "country" | "category" | "message" | "consent";
export type ParticipationResult = { ok: true } | { ok: false; code: "invalid"; fields: Partial<Record<ParticipationField, string>> } | { ok: false; code: "unavailable" | "rate-limited" };

export function parseParticipation(formData: FormData): ParticipationInput {
  return { kind: String(formData.get("kind") ?? ""), name: String(formData.get("name") ?? "").trim(), email: String(formData.get("email") ?? "").trim(), country: String(formData.get("country") ?? "").trim(), category: String(formData.get("category") ?? ""), message: String(formData.get("message") ?? "").trim(), consent: formData.get("consent") === "on", website: String(formData.get("website") ?? "").trim() };
}

export function validateParticipation(formData: FormData): ParticipationResult | ParticipationInput {
  let total = 0;
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("$ACTION_")) continue;
    if (!ALLOWED.has(key) || formData.getAll(key).length > 1 || typeof value !== "string") return { ok: false, code: "invalid", fields: { name: "Please check the form and try again." } };
    total += key.length + value.length;
  }
  if (total > 5000) return { ok: false, code: "invalid", fields: { message: "Please keep your message under 2,000 characters." } };
  const input = parseParticipation(formData);
  const fields: Partial<Record<ParticipationField, string>> = {};
  if (input.name.length < 2 || input.name.length > 100) fields.name = "Please enter your name.";
  if (input.email.length > 254 || !EMAIL.test(input.email)) fields.email = "Please enter a valid email address.";
  if (input.kind === "access" && (input.country.length < 2 || input.country.length > 100)) fields.country = "Please enter your country.";
  const allowed = input.kind === "access" ? participationRoles : contactTopics;
  if (!(allowed as readonly string[]).includes(input.category)) fields.category = "Please choose an option.";
  if (input.message.length > 2000) fields.message = "Please keep your message under 2,000 characters.";
  if (!input.consent) fields.consent = "Please confirm we may use these details to respond.";
  return Object.keys(fields).length ? { ok: false, code: "invalid", fields } : input;
}
