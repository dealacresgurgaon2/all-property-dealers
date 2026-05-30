// import { NextResponse } from "next/server";
// import {
//   DOMAIN_LAYOUT_MAP,
//   DEFAULT_LAYOUT,
// } from "./config/domainConfig";

// let cachedPaths = null;

// // 🔥 GET SITEMAP PATHS
// async function getSitemapPaths(request) {

//   if (cachedPaths) {
//     return cachedPaths;
//   }

//   try {

//     const res = await fetch(
//       `${request.nextUrl.origin}/sitemap.xml`
//     );

//     const xml = await res.text();

//     const matches = [
//       ...xml.matchAll(
//         /<loc>(.*?)<\/loc>/g
//       ),
//     ];

//     cachedPaths = matches
//       .map((m) => {

//         try {

//           const loc = m[1]?.trim();

//           // invalid skip
//           if (
//             !loc ||
//             loc.includes("undefined") ||
//             !loc.startsWith("http")
//           ) {
//             return null;
//           }

//           const url = new URL(loc);

//           return (
//             url.pathname.replace(
//               /\/$/,
//               ""
//             ) || "/"
//           );

//         } catch (err) {

//           console.log(
//             "Invalid URL:",
//             m[1]
//           );

//           return null;
//         }

//       })
//       .filter(Boolean);

//     return cachedPaths;

//   } catch (err) {

//     console.log(
//       "Sitemap Fetch Error:",
//       err
//     );

//     return [];
//   }
// }

// // 🔥 MAIN MIDDLEWARE
// export async function middleware(request) {

//   const hostname =
//     request.headers.get("host");

//   const layoutFolder =
//     DOMAIN_LAYOUT_MAP[hostname] ||
//     DEFAULT_LAYOUT;

//   const url =
//     request.nextUrl.clone();

//   const pathname =
//     url.pathname.replace(/\/$/, "") ||
//     "/";

//   // 🔥 IGNORE STATIC FILES
//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/api") ||
//     pathname.includes(".")
//   ) {
//     return NextResponse.next();
//   }

//   // 🔥 HOMEPAGE ALLOW
//   if (pathname === "/") {

//     url.pathname = `/${layoutFolder}`;

//     return NextResponse.rewrite(url);
//   }

//   // 🔥 CHECK VALID URL FROM SITEMAP
//   const paths =
//     await getSitemapPaths(request);

//   const exists =
//     paths.includes(pathname);

//   // ❌ INVALID URL
//   if (!exists) {

//     return NextResponse.redirect(
//       new URL("/", request.url)
//     );

//     // Better SEO:
//     // return NextResponse.rewrite(
//     //   new URL("/404", request.url)
//     // );
//   }

//   // 🔥 ALREADY REWRITTEN
//   if (
//     pathname.startsWith(
//       `/${layoutFolder}`
//     )
//   ) {
//     return NextResponse.next();
//   }

//   // 🔥 REWRITE TO LAYOUT
//   url.pathname =
//     `/${layoutFolder}${pathname}`;

//   return NextResponse.rewrite(url);
// }

// export const config = {
//   matcher: ["/:path*"],
// };


// // import { NextResponse } from "next/server";
// // import { DOMAIN_LAYOUT_MAP, DEFAULT_LAYOUT } from "./config/domainConfig";

// // export function middleware(request) {

// //   const hostname = request.headers.get("host");

// //   // console.log("host =>",hostname);
  

// //   const layoutFolder =
// //     DOMAIN_LAYOUT_MAP[hostname] || DEFAULT_LAYOUT;
// //   const url = request.nextUrl.clone();

// //   if (
// //     url.pathname.includes(".") ||
// //     url.pathname.startsWith("/_next")
// //   ) {
// //     return NextResponse.next();
// //   }

// //   // Agar already correct path ho
// //   if (url.pathname.startsWith(`/${layoutFolder}`)) {
// //     return NextResponse.next();
// //   }

// //   // MAIN REWRITE
// //   url.pathname = `/${layoutFolder}${url.pathname}`;

// //   return NextResponse.rewrite(url);
// // }

// // export const config = {
// //   matcher: ["/:path*"],
// // };



import { NextResponse } from "next/server";
import {
  DOMAIN_LAYOUT_MAP,
  DEFAULT_LAYOUT,
} from "./config/domainConfig";

// ✅ DOMAIN WISE CACHE
let sitemapCache = {};

// ✅ GET ALL SITEMAP PATHS
async function getSitemapPaths(request) {
  const host =
    request.headers.get("host") || "";

  const now = Date.now();

  if (
    sitemapCache[host] &&
    now - sitemapCache[host].time <
      60 * 60 * 1000
  ) {
    return sitemapCache[host].paths;
  }

  try {
    const sitemapUrl =
      `${request.nextUrl.origin}/sitemap.xml`;

    const res = await fetch(
      sitemapUrl,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return [];
    }

    const xml = await res.text();

    const matches = [
      ...xml.matchAll(
        /<loc>(.*?)<\/loc>/g
      ),
    ];

    const paths = matches
      .map((m) => {
        try {
          const url = new URL(
            m[1].trim()
          );

          return (
            url.pathname.replace(
              /\/$/,
              ""
            ) || "/"
          );
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    sitemapCache[host] = {
      paths,
      time: now,
    };

    return paths;
  } catch {
    return [];
  }
}

// ✅ MAIN MIDDLEWARE
export async function middleware(
  request
) {
  const hostname =
    request.headers.get("host") ||
    "";

  const layoutFolder =
    DOMAIN_LAYOUT_MAP[hostname] ||
    DOMAIN_LAYOUT_MAP[
      hostname.replace(/^www\./, "")
    ] ||
    DEFAULT_LAYOUT;

  const url =
    request.nextUrl.clone();

  const pathname =
    url.pathname.replace(/\/$/, "") ||
    "/";
     // 👇 YAHAN LAGAO
  console.log(
    "HOST:",
    hostname
  );

  console.log(
    "LAYOUT:",
    layoutFolder
  );

  console.log(
    "PATH:",
    pathname
  );

  // ✅ Ignore Static Files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // ✅ Homepage
  if (pathname === "/") {
    url.pathname = `/${layoutFolder}`;
    

    return NextResponse.rewrite(url);
  }

  // ✅ Check Sitemap URL Exists
// ✅ Check Sitemap URL Exists
const paths = await getSitemapPaths(request);

if (paths.length > 0) {
 const cleanPath =
  pathname.replace(/\/$/, "") || "/";

const exists = paths.some(
  (p) =>
    (p.replace(/\/$/, "") || "/") ===
    cleanPath
);

  console.log("CHECK PATH:", pathname);
  console.log("EXISTS:", exists);

  if (!exists) {
    console.log(
      "REDIRECTING HOME:",
      pathname
    );

    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }
}

  // ✅ Already Rewritten
  if (
    pathname.startsWith(
      `/${layoutFolder}`
    )
  ) {
    return NextResponse.next();
  }

  // ✅ Rewrite Valid URL
  url.pathname =
    `/${layoutFolder}${pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/:path*"],
};