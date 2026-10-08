import { NextResponse, type NextRequest } from "next/server";
import { isVeyaiPrivatePath } from "@/lib/veyai/config";
import { staffProxy } from "@/lib/supabase/proxy";
import {
  HOLDING_COOKIE,
  isHoldingPublicPath,
  isHoldingUnlocked,
} from "@/lib/holding-gate";

export async function proxy(request: NextRequest) {
  if (isVeyaiPrivatePath(request.nextUrl.pathname)) return staffProxy(request);
  const unlocked = await isHoldingUnlocked(request.cookies.get(HOLDING_COOKIE)?.value);
  if (unlocked || isHoldingPublicPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const home = request.nextUrl.clone();
  home.pathname = "/";
  home.search = "";
  return NextResponse.redirect(home);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|brand/|vascurra/).*)",
  ],
};
