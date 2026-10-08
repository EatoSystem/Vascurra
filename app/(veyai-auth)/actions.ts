"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { staffClient } from "@/lib/supabase/server";
import { requireStaff } from "@/lib/veyai/server/auth";
import { cookies } from "next/headers";
import { providerConfiguration } from "@/lib/providers/config";
import { developmentCookie, developmentSessions, requireDevelopmentSession } from "@/lib/development/server";

export async function developmentSignIn(form: FormData) {
  const registry = developmentSessions();
  const role = z.enum(["researcher", "reviewer", "admin"]).safeParse(form.get("role"));
  if (!role.success) redirect("/VeyAI/sign-in?notice=permission");
  const jar = await cookies();
  const previous = jar.get(developmentCookie)?.value;
  if (previous) registry.revoke(previous);
  const session = registry.create(role.data);
  jar.set(developmentCookie, session.id, { httpOnly: true, sameSite: "strict", path: "/", maxAge: 8 * 60 * 60, secure: false });
  redirect("/VeyAI/mfa");
}
export async function verifyDevelopmentSession() {
  const session = await requireDevelopmentSession(false);
  developmentSessions().verify(session.id);
  redirect("/VeyAI/console");
}
export async function switchDevelopmentRole(form: FormData) {
  const session = await requireDevelopmentSession();
  const role = z.enum(["researcher", "reviewer", "admin"]).parse(form.get("role"));
  developmentSessions().switchRole(session.id, role);
  redirect("/VeyAI/console");
}
export async function expireDevelopmentSession() {
  const session = await requireDevelopmentSession(false);
  developmentSessions().revoke(session.id);
  (await cookies()).delete(developmentCookie);
  redirect("/VeyAI/sign-in?notice=expired");
}

export async function sendSignIn(form: FormData) {
  const email = z.email().max(254).safeParse(form.get("email"));
  const origin = process.env.VEYAI_APP_ORIGIN;
  if (!email.success || !origin) redirect("/VeyAI/sign-in?notice=access");
  const client = await staffClient();
  await client.auth.signInWithOtp({ email: email.data, options: { shouldCreateUser: false, emailRedirectTo: `${origin}/auth/veyai/callback` } });
  // Uniform result avoids revealing staff addresses. Supabase owns rate limits.
  redirect("/VeyAI/sign-in?notice=sent");
}
export async function signOut() {
  if (providerConfiguration().auth === "development") {
    const registry = developmentSessions(); const jar = await cookies(); const id = jar.get(developmentCookie)?.value;
    if (id) registry.revoke(id);
    jar.delete(developmentCookie);
    redirect("/VeyAI/sign-in");
  }
  const client = await staffClient();
  await client.auth.signOut({ scope: "local" });
  redirect("/VeyAI/sign-in");
}
export type MfaState = { error?: string; secret?: string; factorId?: string };
export async function enrolAuthenticator(_state: MfaState, _form: FormData): Promise<MfaState> {
  void _state;
  void _form;
  const { client } = await requireStaff(false);
  const { data: factors } = await client.auth.mfa.listFactors();
  if (factors?.totp.some((factor) => factor.status === "verified")) return { error: "Use your existing authenticator." };
  for (const factor of factors?.all ?? []) {
    if (factor.factor_type === "totp" && factor.status === "unverified") await client.auth.mfa.unenroll({ factorId: factor.id });
  }
  const { data, error } = await client.auth.mfa.enroll({ factorType: "totp", friendlyName: "VeyAI staff" });
  if (error || !data) return { error: "Authenticator setup could not be started. Please try again." };
  return { secret: data.totp.secret, factorId: data.id };
}
export async function verifyAuthenticator(form: FormData) {
  const { client } = await requireStaff(false);
  const input = z.object({ factorId: z.uuid(), code: z.string().regex(/^\d{6}$/) }).safeParse(Object.fromEntries(form));
  if (!input.success) redirect("/VeyAI/mfa?notice=invalid");
  const { error } = await client.auth.mfa.challengeAndVerify(input.data);
  if (error) redirect("/VeyAI/mfa?notice=invalid");
  redirect("/VeyAI/console");
}
