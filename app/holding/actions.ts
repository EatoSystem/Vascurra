"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  HOLDING_COOKIE,
  HOLDING_COOKIE_MAX_AGE,
  createHoldingToken,
  passwordsMatch,
} from "@/lib/holding-gate";

export type HoldingUnlockState = { ok: false } | null;

export async function unlockHolding(
  _prev: HoldingUnlockState,
  formData: FormData,
): Promise<HoldingUnlockState> {
  const password = String(formData.get("password") ?? "");
  if (!(await passwordsMatch(password))) {
    return { ok: false };
  }

  const token = await createHoldingToken();
  if (!token) return { ok: false };

  const jar = await cookies();
  jar.set(HOLDING_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: HOLDING_COOKIE_MAX_AGE,
  });

  redirect("/");
}
