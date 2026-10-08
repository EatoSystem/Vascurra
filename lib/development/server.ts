import "server-only";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { providerConfiguration } from "@/lib/providers/config";
import { DevelopmentSessions } from "./sessions";

export const developmentCookie = "vascurra-development-session";
const globalDevelopment = globalThis as typeof globalThis & { vascurraDevelopmentSessions?: DevelopmentSessions };
export function developmentSessions() {
  if (providerConfiguration().auth !== "development") notFound();
  return globalDevelopment.vascurraDevelopmentSessions ??= new DevelopmentSessions();
}
export async function requireDevelopmentSession(requireMfa = true) {
  const registry = developmentSessions();
  const session = registry.get((await cookies()).get(developmentCookie)?.value);
  if (!session) redirect("/VeyAI/sign-in?notice=expired");
  if (requireMfa && !session.verified) redirect("/VeyAI/mfa");
  return session;
}
