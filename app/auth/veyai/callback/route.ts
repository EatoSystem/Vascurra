import { NextResponse, type NextRequest } from "next/server";
import { staffClient } from "@/lib/supabase/server";
export async function GET(request: NextRequest) {
  const client = await staffClient();
  const code = request.nextUrl.searchParams.get("code");
  const hash = request.nextUrl.searchParams.get("token_hash");
  const result = code ? await client.auth.exchangeCodeForSession(code)
    : hash ? await client.auth.verifyOtp({ token_hash: hash, type: "invite" }) : null;
  return NextResponse.redirect(new URL(result && !result.error ? "/VeyAI/mfa" : "/VeyAI/sign-in?notice=access", request.url), { headers: { "Cache-Control": "private, no-store", "Referrer-Policy": "no-referrer" } });
}
