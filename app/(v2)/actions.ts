"use server";

import { headers } from "next/headers";
import { isAllowedWebhookUrl } from "@/lib/early-access";
import { validateParticipation, type ParticipationResult } from "@/lib/participation";

export type ParticipationState = ParticipationResult | null;
const attempts = new Map<string, { count: number; reset: number }>();

function limited(key: string, now = Date.now()) {
  const current = attempts.get(key);
  if (!current || current.reset <= now) { attempts.set(key, { count: 1, reset: now + 10 * 60_000 }); return false; }
  current.count += 1;
  return current.count > 5;
}

export async function submitParticipation(_previous: ParticipationState, formData: FormData): Promise<ParticipationState> {
  const parsed = validateParticipation(formData);
  if ("ok" in parsed) return parsed;
  if (parsed.website) return { ok: true };
  const headerList = await headers();
  const client = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(client)) return { ok: false, code: "rate-limited" };
  const webhook = process.env.EARLY_ACCESS_WEBHOOK_URL;
  if (!webhook || !isAllowedWebhookUrl(webhook)) return { ok: false, code: "unavailable" };
  try {
    const response = await fetch(webhook, { method: "POST", headers: { "content-type": "application/json" }, signal: AbortSignal.timeout(5_000), body: JSON.stringify({ source: `vascurra-${parsed.kind}`, name: parsed.name, email: parsed.email, country: parsed.country || undefined, category: parsed.category, message: parsed.message || undefined, consentedAt: new Date().toISOString() }) });
    return response.ok ? { ok: true } : { ok: false, code: "unavailable" };
  } catch { return { ok: false, code: "unavailable" }; }
}
