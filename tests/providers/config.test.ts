import { describe, expect, it } from "vitest";
import { providerConfiguration } from "@/lib/providers/config";

describe("provider policy", () => {
  it("defaults local development to credentials-free fixtures", () => {
    expect(providerConfiguration({ NODE_ENV: "development" })).toMatchObject({ mode: "fixture", data: "fixture", ai: "fixture", payments: "fixture", auth: "development", console: true });
  });
  it.each([
    {}, { NODE_ENV: "production" }, { NODE_ENV: "production", VASCURRA_MODE: "fixture" },
    { NODE_ENV: "development", VERCEL: "1", VASCURRA_MODE: "fixture" },
    { NODE_ENV: "development", CI: "true", VASCURRA_MODE: "fixture" },
    { NODE_ENV: "development", VASCURRA_MODE: "connected" },
    { NODE_ENV: "development", VASCURRA_MODE: "unknown" },
  ])("fails closed for unavailable or non-local configuration %j", (env) => {
    expect(providerConfiguration(env)).toMatchObject({ data: "disabled", payments: "disabled", auth: "disabled", console: false, liveAI: false, realCheckout: false, personalHealthData: false });
  });
  it("requires all explicit connected auth flags, never falls back, and cannot enable live actions", () => {
    const env = { NODE_ENV: "production", SUPABASE_ENABLED: "true", REAL_AUTH_ENABLED: "true", VEYAI_CONSOLE_ENABLED: "true", VEYAI_SUPABASE_URL: "https://synthetic.invalid", VEYAI_SUPABASE_PUBLISHABLE_KEY: "synthetic", VEYAI_EXECUTION_MODE: "fixture", VEYAI_LIVE_EXECUTION: "true", STRIPE_ENABLED: "true", BRAIN_CELLS_CHECKOUT_ENABLED: "true", PERSONAL_HEALTH_DATA_ENABLED: "true" };
    expect(providerConfiguration(env)).toMatchObject({ data: "supabase", auth: "supabase", ai: "fixture", liveAI: false, realCheckout: false, personalHealthData: false });
    for (const key of ["SUPABASE_ENABLED", "REAL_AUTH_ENABLED", "VEYAI_CONSOLE_ENABLED", "VEYAI_SUPABASE_URL", "VEYAI_SUPABASE_PUBLISHABLE_KEY"] as const) expect(providerConfiguration({ ...env, [key]: undefined }).console).toBe(false);
  });
});
