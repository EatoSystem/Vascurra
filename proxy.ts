import { NextResponse, type NextRequest } from "next/server";
import {
  HOLDING_COOKIE,
  HOLDING_COOKIE_VALUE,
  isHoldingPublicPath,
} from "@/lib/holding-public";

export function proxy(request: NextRequest) {
  const unlocked =
    request.cookies.get(HOLDING_COOKIE)?.value === HOLDING_COOKIE_VALUE;
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
