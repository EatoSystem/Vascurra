import "server-only";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { veyaiConfiguration } from "@/lib/veyai/config";

export async function staffClient() {
  const config = veyaiConfiguration();
  if (config.auth !== "supabase" || !config.url || !config.key) throw new Error("VeyAI is not configured");
  const jar = await cookies();
  return createServerClient(config.url, config.key, {
    cookieOptions: { name: "veyai-staff", httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/" },
    cookies: {
      getAll: () => jar.getAll(),
      setAll: (values) => {
        try { values.forEach(({ name, value, options }) => jar.set(name, value, options)); }
        catch { /* Server Component: Proxy refreshes and persists cookies. */ }
      },
    },
  });
}
