import { NextResponse } from "next/server";
import { DOMAIN_LAYOUT_MAP, DEFAULT_LAYOUT } from "./config/domainConfig";

export function middleware(request) {

  const hostname = request.headers.get("host");

  console.log("host =>",hostname);
  

  const layoutFolder =
    DOMAIN_LAYOUT_MAP[hostname] || DEFAULT_LAYOUT;

  const url = request.nextUrl.clone();

  // Ignore static files
  if (
    url.pathname.includes(".") ||
    url.pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  // Agar already correct path ho
  if (url.pathname.startsWith(`/${layoutFolder}`)) {
    return NextResponse.next();
  }

  // MAIN REWRITE
  url.pathname = `/${layoutFolder}${url.pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/:path*"],
};
