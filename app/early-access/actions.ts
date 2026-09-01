"use server";

import { earlyAccess } from "@/content/early-access";
import {
  isRole,
  parseEarlyAccess,
  validateEarlyAccess,
  type EarlyAccessResult,
} from "@/lib/early-access";

export type ActionState = EarlyAccessResult | null;

export async function submitEarlyAccess(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const input = parseEarlyAccess(formData);
  const fields = validateEarlyAccess(input);
  if (Object.keys(fields).length > 0) {
    return { ok: false, code: "invalid", fields };
  }
  if (!isRole(input.role)) {
    return { ok: false, code: "invalid", fields: { role: earlyAccess.errorGeneric } };
  }

  const webhook = process.env.EARLY_ACCESS_WEBHOOK_URL;
  if (!webhook) {
    return { ok: false, code: "unavailable" };
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        source: "vascurra-early-access",
        name: input.name,
        email: input.email,
        role: input.role,
        consentedAt: new Date().toISOString(),
      }),
    });
    if (!response.ok) {
      return { ok: false, code: "unavailable" };
    }
  } catch {
    return { ok: false, code: "unavailable" };
  }

  return { ok: true };
}
