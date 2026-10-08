/** The single capability policy. Safe in Proxy; never export credentials to a client. */
export function providerConfiguration(env: Record<string, string | undefined> = process.env) {
  const local = env.NODE_ENV === "development" && !env.VERCEL && !env.CI;
  const requested = env.VASCURRA_MODE ?? (local ? "fixture" : "connected");
  const fixture = local && requested === "fixture";
  const connected = requested === "connected";
  const supabase = connected && env.SUPABASE_ENABLED === "true" && env.REAL_AUTH_ENABLED === "true"
    && env.VEYAI_CONSOLE_ENABLED === "true" && Boolean(env.VEYAI_SUPABASE_URL && env.VEYAI_SUPABASE_PUBLISHABLE_KEY);
  return {
    mode: fixture ? "fixture" : connected ? "connected" : "disabled",
    data: fixture ? "fixture" : supabase ? "supabase" : "disabled",
    ai: fixture || (supabase && env.VEYAI_EXECUTION_MODE === "fixture") ? "fixture" : "disabled",
    payments: fixture ? "fixture" : "disabled",
    auth: fixture ? "development" : supabase ? "supabase" : "disabled",
    console: fixture || supabase,
    // Activation is deliberately not implemented. Setting env vars cannot enable it.
    liveAI: false, realCheckout: false, personalHealthData: false,
  } as const;
}
