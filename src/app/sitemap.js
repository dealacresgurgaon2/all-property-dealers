// import { headers } from "next/headers";

// export default async function sitemap() {

//   let host = "localhost:3000";

//   try {
//     const headersList = await headers();
//     host = headersList.get("host") || host;
//   } catch {}

//   let cleanHost = host.trim();

//   // 🔥 LOCAL ONLY (production me auto ho jayega)
//   if (cleanHost.includes("localhost")) {
//     cleanHost = "www.propertydealeringurgaon.com";
//   }

//   const baseUrl = `https://${cleanHost}`;

//   // ================= STATIC =================
//   const staticPages = ["", "/about", "/contact", "/blog"];

//   const staticUrls = staticPages.map((path) => ({
//     url: `${baseUrl}${path}`,
//     lastModified: new Date(),
//   }));


//   // ================= DEALER =================
//   let dealerUrls = [];

//   try {
//     const res = await fetch(
//       `http://localhost:5000/api/slugs?domain=${cleanHost}`
//     );

//     const data = await res.json();

//     dealerUrls = (data?.data || [])
//   .filter((d) => d.slug)
//   .map((d) => ({
//     url: `${baseUrl}/dealer/${encodeURIComponent(d.slug)}`,
//     lastModified: new Date(),
//   }));

//   } catch (e) {
//     console.log("Dealer API error:", e);
//   }

//   // ✅ FINAL RETURN (ONLY ARRAY)
//   return [
//     ...staticUrls,
//     ...dealerUrls,
//   ];
// }
import { headers } from "next/headers";
import { DOMAIN_LAYOUT_MAP, DEFAULT_LAYOUT } from "@/config/domainConfig";
import { LOCATION_MAP } from "@/data/location";

// 🔥 SLUG FUNCTION
const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default async function sitemap() {

  // ================= DOMAIN =================
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";

  const cleanHost = host.trim();

  // 🔥 DOMAIN → CITY
  const city = DOMAIN_LAYOUT_MAP[cleanHost] || DEFAULT_LAYOUT;

  const baseUrl = `https://${cleanHost}`;

  // ================= STATIC =================
  const staticPages = ["", "/about", "/contact", "/blog"];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));


  // ================= LOCATION (DYNAMIC) =================
  const locations = LOCATION_MAP[city] || [];

  const locationUrls = locations.map((loc) => {
    const slug = createSlug(loc);

    return {
      url: `${baseUrl}/${city}/${slug}`,
      lastModified: new Date(),
    };
  });


  // ================= DEALERS =================
  let dealerUrls = [];

  try {
    const res = await fetch(
      `http://localhost:5000/api/slugs?domain=${cleanHost}`
    );

    const data = await res.json();

    dealerUrls = (data?.data || [])
      .filter((d) => d.slug)
      .map((d) => ({
        url: `${baseUrl}/${city}/dealer/${encodeURIComponent(d.slug)}`,
        lastModified: new Date(),
      }));

  } catch (e) {
    console.log("Dealer API error:", e);
  }


  // ================= FINAL =================
  return [
    ...staticUrls,
    ...locationUrls,
    ...dealerUrls,
  ];
}