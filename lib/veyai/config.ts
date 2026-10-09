import { providerConfiguration } from "@/lib/providers/config";
/** Safe to import in Proxy. Configuration never grants record access. */
export function veyaiConfiguration(env: Record<string, string | undefined> = process.env) {
  const url = env.VEYAI_SUPABASE_URL;
  const key = env.VEYAI_SUPABASE_PUBLISHABLE_KEY;
  const policy = providerConfiguration(env);
  const enabled = policy.console;
  // Live activation is deliberately unavailable in this fixture-first release.
  const mode = policy.ai;
  return { enabled, url, key, mode, auth: policy.auth } as const;
}

export function isVeyaiPrivatePath(path: string) {
  return ["/VeyAI/console", "/VeyAI/sign-in", "/VeyAI/mfa", "/auth/veyai", "/api/veyai", "/development"]
    .some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}
