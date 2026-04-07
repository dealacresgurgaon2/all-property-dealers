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

   let locationUrls = [];
  let zoneUrls = [];
  let zoneLocationUrls = [];

  if (city === "delhi") {
    const delhiData = LOCATION_MAP.delhi || {};

    const zones = [
      { key: "central", slug: "central-delhi" },
      { key: "north", slug: "north-delhi" },
      { key: "south", slug: "south-delhi" },
      { key: "east", slug: "east-delhi" },
      { key: "west", slug: "west-delhi" },
    ];

    // 🔥 ZONES
    zoneUrls = zones.map((zone) => ({
      url: `${baseUrl}/zone/${zone.slug}`,
      lastModified: new Date(),
    }));

    // 🔥 LOCATIONS
    Object.values(delhiData).forEach((arr) => {
      if (!Array.isArray(arr)) return;

      arr.forEach((loc) => {
        if (!loc) return;

        const slug = createSlug(loc);

        locationUrls.push({
          url: `${baseUrl}/delhi/${slug}`,
          lastModified: new Date(),
        });
      });
    });

    // 🔥 ZONE + LOCATION
    zones.forEach((zone) => {
      const locArr = delhiData[zone.key] || [];

      if (!Array.isArray(locArr)) return;

      locArr.forEach((loc) => {
        if (!loc) return;

        const slug = createSlug(loc);

        zoneLocationUrls.push({
          url: `${baseUrl}/zone/${zone.slug}/${slug}`,
          lastModified: new Date(),
        });
      });
    });

  } else {
    const locations = LOCATION_MAP[city] || [];

    if (Array.isArray(locations)) {
      locationUrls = locations
        .filter((loc) => loc)
        .map((loc) => ({
          url: `${baseUrl}/${city}/${createSlug(loc)}`,
          lastModified: new Date(),
        }));
    }
  }


  // ================= DEALERS =================
  let dealerUrls = [];

  try {
    const res = await fetch(
      `https://propertydealerbackend.onrender.com/api/slugs?domain=${cleanHost}`
    );

    const data = await res.json();

    dealerUrls = (data?.data || [])
      .filter((d) => d.slug)
      .map((d) => ({
        url: `${baseUrl}/dealer/${encodeURIComponent(d.slug)}`,
        lastModified: new Date(),
      }));

  } catch (e) {
    console.log("Dealer API error:", e);
  }
  // ================= BLOG =================
let blogUrls = [];

try {
  // 🔥 DOMAIN AUTO (IMPORTANT)
  const domain = cleanHost.startsWith("www.")
    ? cleanHost
    : `www.${cleanHost}`;

  const API_URL = `https://deal-acres-backend.onrender.com/newBlog/getSlugsByDomain/${domain}`;

  console.log("BLOG API:", API_URL);

  const res = await fetch(API_URL, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  blogUrls = (data?.data || []).map((slug) => ({
    url: `${baseUrl}/blog/${encodeURIComponent(slug)}`,
    lastModified: new Date(),
  }));

} catch (e) {
  console.log("Blog API error:", e);
}



  // ================= FINAL =================
  return [
  ...staticUrls,
  ...zoneUrls,
  ...locationUrls,
  ...zoneLocationUrls,
  ...dealerUrls,
  ...blogUrls,
];
}