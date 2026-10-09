import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { veyaiConfiguration } from "@/lib/veyai/config";

export async function staffProxy(request: NextRequest) {
  const config = veyaiConfiguration();
  const noStore = { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow", "Referrer-Policy": "no-referrer" };
  if (config.auth === "development") {
    const response = NextResponse.next({ request });
    Object.entries(noStore).forEach(([name, value]) => response.headers.set(name, value));
    return response;
  }
  if (request.nextUrl.pathname === "/development" || request.nextUrl.pathname.startsWith("/development/")) return new NextResponse("Development preview unavailable.", { status: 404, headers: noStore });
  if (!config.enabled || !config.url || !config.key) {
    return new NextResponse("VeyAI staff workspace is not configured.", { status: 404, headers: noStore });
  }
  let response = NextResponse.next({ request });
  const client = createServerClient(config.url, config.key, {
    cookieOptions: { name: "veyai-staff", httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/" },
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (values) => {
        values.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        values.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });
  await client.auth.getClaims();
  Object.entries(noStore).forEach(([name, value]) => response.headers.set(name, value));
  return response;
}
