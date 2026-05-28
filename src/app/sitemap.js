
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
export const dynamic = "force-dynamic";
export default async function sitemap() {

  // ================= DOMAIN =================
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";

  // ✅ NORMALIZE HOST
  const normalizeHost = (host) => {
    return host
      .replace(/^https?:\/\//, "")
      .replace(/\/$/, "")
      .trim();
  };

  const cleanHost = normalizeHost(host);

  // ✅ CITY DETECT (SMART)
  const city =
    DOMAIN_LAYOUT_MAP[cleanHost] ||
    DOMAIN_LAYOUT_MAP[cleanHost.replace(/^www\./, "")] ||
    DOMAIN_LAYOUT_MAP[`www.${cleanHost}`] ||
    DEFAULT_LAYOUT;

  const baseUrl = `https://${cleanHost}`;

  // ================= STATIC =================
  const isHaryana =
  city === "haryana";

// ✅ Real Estate Single Design
const isRealEstate =
  city === "realestate";

let staticPages = [];

// ===================================
// ✅ HARYANA DESIGN
// ===================================

if (isHaryana) {

  staticPages = ["", "/about", "/contactus", "/blogs", "/all-property-dealer","/explore-property-dealers-in-delhi","/explore-property-dealers-in-haryana-districts","/property-dealer-in-noida","/property-dealer-in-central-delhi","/property-dealer-in-north-delhi","/property-dealer-in-south-delhi","/property-dealer-in-east-delhi","/property-dealer-in-west-delhi",
    "/property-dealer-in-hisar","/property-dealer-in-faridabad","/property-dealer-in-gurgaon",
    "/property-dealer-in-jind",
    "/property-dealer-in-karnal","/property-dealer-in-kurukshetra","/property-dealer-in-panchkula","/property-dealer-in-sonipat",
    "/property-dealer-in-rohtak",
    "/property-dealer-in-rewari","/property-dealer-in-yamunanagar",
  "/property-dealer-in-charkhi-dadri","/property-dealer-in-mahendragarh",
  "/property-dealer-in-bhiwani",
  "/property-dealer-in-palwal",
  "/property-dealer-in-kaithal",
  "/property-dealer-in-jhajjar",
  "/property-dealer-in-fatehabad",
  "/property-dealer-in-sirsa",
  "/property-dealer-in-panipat",
  "/property-dealer-in-kaithal",
  "/property-dealer-in-ambala",
"/property-dealer-in-hansi"]

// ===================================
// ✅ REAL ESTATE DESIGN
// ===================================

} else if (isRealEstate) {

  staticPages = ["", "/about", "/contactus", "/blogs", "/all-property-dealer","/explore-property-dealers-in-delhi","/explore-property-dealers-in-haryana-districts","/property-dealer-in-noida","/property-dealer-in-central-delhi","/property-dealer-in-north-delhi","/property-dealer-in-south-delhi","/property-dealer-in-east-delhi","/property-dealer-in-west-delhi",
    "/property-dealer-in-hisar","/property-dealer-in-faridabad","/property-dealer-in-gurgaon",
    "/property-dealer-in-jind",
    "/property-dealer-in-karnal","/property-dealer-in-kurukshetra","/property-dealer-in-panchkula","/property-dealer-in-sonipat",
    "/property-dealer-in-rohtak",
    "/property-dealer-in-rewari","/property-dealer-in-yamunanagar",
  "/property-dealer-in-charkhi-dadri","/property-dealer-in-mahendragarh",
  "/property-dealer-in-bhiwani",
  "/property-dealer-in-palwal",
  "/property-dealer-in-kaithal",
  "/property-dealer-in-jhajjar",
  "/property-dealer-in-fatehabad",
  "/property-dealer-in-sirsa",
  "/property-dealer-in-panipat",
  "/property-dealer-in-kaithal",
  "/property-dealer-in-ambala",
"/property-dealer-in-hansi"]

// ===================================
// ✅ NORMAL DESIGN
// ===================================

} else {

  staticPages = [

    "",
    "/about",
    "/contactus",
    "/blogs",
    "/how-it-works",

  ];

}
// ✅ API LOCATIONS
let apiLocationUrls = [];

// =====================================
// ✅ HARYANA + REAL ESTATE API URLS
// =====================================

if (
  isHaryana ||
  isRealEstate
) {

  try {

    const res = await fetch(
      "https://property-dealer-xa5g.onrender.com/api/area/sitemap-locations",
      {
        cache: "no-store",
      }
    );

    const data =
      await res.json();

    const allLocations =
      data?.data || {};

    Object.entries(
      allLocations
    ).forEach(
      ([cityName, slugs]) => {

        if (
          !Array.isArray(slugs)
        ) return;

        slugs.forEach(
          (slug) => {

            if (!slug) return;
apiLocationUrls.push({

  url: isHaryana

    // ✅ Haryana
    ? `${baseUrl}/${createSlug(
        cityName
      )}/property-dealer-in-${createSlug(
        slug
      )}`

    // ✅ Real Estate
    : `${baseUrl}/${createSlug(
        cityName
      )}/property-dealer-in-${createSlug(
        slug
      )}`,

  lastModified:
    new Date(),

});

          }
        );

      }
    );

  } catch (e) {

    console.error(
      "❌ Area API Error:",
      e?.message
    );

  }

}

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // ================= LOCATION =================
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

    zoneUrls = zones.map((zone) => ({
      url: `${baseUrl}/zone/${zone.slug}`,
      lastModified: new Date(),
    }));

    Object.values(delhiData).forEach((arr) => {
      if (!Array.isArray(arr)) return;

      arr.forEach((loc) => {
        if (!loc) return;

        locationUrls.push({
          url: `${baseUrl}/delhi/property-dealer-in-${createSlug(loc)}`,
          lastModified: new Date(),
        });
      });
    });

    zones.forEach((zone) => {

  const locArr =
    delhiData[zone.key] || [];

  if (
    !Array.isArray(locArr)
  ) return;

  locArr.forEach((loc) => {

    if (!loc) return;

    zoneLocationUrls.push({

      // ✅ zone at end
      url: `${baseUrl}/delhi/property-dealer-in-${createSlug(
        loc
      )}-${zone.slug}`,

      lastModified:
        new Date(),

    });

  });

});

  } else {
    const locations = LOCATION_MAP[city] || [];

    if (Array.isArray(locations)) {
      locationUrls = locations
        .filter(Boolean)
        .map((loc) => ({
          url: `${baseUrl}/${city}/property-dealer-in-${createSlug(loc)}`,
          lastModified: new Date(),
        }));
    }
  }

  // ================= DOMAIN FOR API =================
  const domainForApi =
    cleanHost === "localhost:3000"
      ? "www.propertydealerinhisar.com" // 🔥 local testing fix
      : cleanHost.startsWith("www.")
      ? cleanHost
      : `www.${cleanHost}`;
// ================= BLOG =================

let blogUrls = [];

try {

  const API_URL =
    `https://deal-acres-backend.onrender.com/newBlog/getSlugsByDomain/${domainForApi}`;

  console.log(
    "BLOG DOMAIN:",
    domainForApi
  );

  const res = await fetch(
    API_URL,
    {
      cache: "no-store",
    }
  );

  const data =
    await res.json();

  console.log(
    "BLOG API DATA:",
    data
  );

  blogUrls = (
    data?.data || []
  )
    .filter(Boolean)
    .map((item) => {

      const blogSlug =
        item?.slug ||
        item?.seoUrl ||
        item?.blogSlug ||
        item?.url ||
        item;

      if (
        !blogSlug ||
        blogSlug === "undefined"
      ) {
        return null;
      }

      return {
        url: `${baseUrl}/blogs/${encodeURIComponent(
          blogSlug
        )}`,
        lastModified:
          new Date(),
      };

    })
    .filter(Boolean);

} catch (e) {

  console.error(
    "❌ Blog API error:",
    e?.message
  );

}
  
// ================= DEALERS FINAL =================
let dealerUrls = [];

try {

  const isHaryanaDesign = city === "haryana";

  let apiUrl = "";

  if (isHaryanaDesign) {
    // ✅ Haryana → ALL DATA
    apiUrl = "https://property-dealer-xa5g.onrender.com/api/all-dealer-slugs?city=Haryana";
  } else {
    // ✅ Other → domain based
    apiUrl = `https://property-dealer-xa5g.onrender.com/api/slugs?domain=${domainForApi}`;
  }

  const res = await fetch(apiUrl, { cache: "no-store" });
  const data = await res.json();

  const formatCity = (c) =>
    c.toLowerCase().replace(/\s+/g, "-");

  dealerUrls = (data?.data || []).map((d) => ({
    url: isHaryanaDesign
      ? `${baseUrl}/estate-agent/${formatCity(d.city)}/${encodeURIComponent(d.slug)}`
      : `${baseUrl}/estate-agent/${encodeURIComponent(d.slug)}`,
    lastModified: new Date(),
  }));

} catch (e) {
  console.error("❌ Dealer Sitemap error:", e?.message);
}
  // ================= FINAL =================
  return [
    ...staticUrls,
    ...zoneUrls,
    ...locationUrls,
    ...zoneLocationUrls,
    ...apiLocationUrls,
    ...dealerUrls,
    ...blogUrls,

]
}