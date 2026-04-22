
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
  const isHaryana = city === "haryana";

const staticPages = isHaryana
  ? ["", "/about", "/contactus", "/blogs", "/all-property-dealer","/explore-property-dealers-in-delhi","/explore-property-dealers-in-haryana-districts","/property-dealer-in-noida"]
  : ["", "/about", "/contactus", "/blogs","/how-it-works"];

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
      const locArr = delhiData[zone.key] || [];

      if (!Array.isArray(locArr)) return;

      locArr.forEach((loc) => {
        if (!loc) return;

        zoneLocationUrls.push({
          url: `${baseUrl}/zone/${zone.slug}/${createSlug(loc)}`,
          lastModified: new Date(),
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
      ? "www.propertydealerinnoida.com" // 🔥 local testing fix
      : cleanHost.startsWith("www.")
      ? cleanHost
      : `www.${cleanHost}`;

  // // ================= BLOG =================
  let blogUrls = [];

try {

  const isHaryanaDesign = city === "haryana";

  // ✅ Haryana me fixed domain use hoga
  const blogDomain = isHaryanaDesign
    ? "www.propertyforsalenearme.in"
    : domainForApi;

  const API_URL = `https://deal-acres-backend.onrender.com/newBlog/getSlugsByDomain/${blogDomain}`;

  console.log("BLOG DOMAIN:", blogDomain);

  const res = await fetch(API_URL, { cache: "no-store" });
  const data = await res.json();

  blogUrls = (data?.data || []).map((slug) => ({
    url: `${baseUrl}/blogs/${encodeURIComponent(slug)}`,
    lastModified: new Date(),
  }));

} catch (e) {
  console.error("❌ Blog API error:", e?.message);
}
//======================haryana============
const haryanaCities = [
  "ambala","bhiwani","charkhi-dadri","faridabad","fatehabad",
  "gurgaon","hisar","jhajjar","jind","kaithal","karnal",
  "kurukshetra","mahendergarh","palwal","panchkula",
  "panipat","rewari","rohtak","sirsa","sonipat","yamunanagar","hansi"
];

if (city === "haryana") {

  locationUrls = [];

  // ✅ 1. City URLs (UPDATED)
  haryanaCities.forEach((c) => {
    locationUrls.push({
      url: `${baseUrl}/property-dealer-in-${c}`,   // 🔥 FIX: city path
      lastModified: new Date(),
    });
  });

  // ✅ 2. Location URLs (UPDATED)
  Object.entries(LOCATION_MAP).forEach(([cityName, locations]) => {

    if (!haryanaCities.includes(cityName)) return;

    if (Array.isArray(locations)) {
      locations.forEach((loc) => {
        if (!loc) return;

        locationUrls.push({
          // 🔥 FIX: city + location
          url: `${baseUrl}/${cityName}/property-dealer-in-${createSlug(loc)}`,
          lastModified: new Date(),
        });
      });
    }

  });

} else {

  const locations = LOCATION_MAP[city] || [];

  if (Array.isArray(locations)) {
    locationUrls = locations.map((loc) => ({
      url: `${baseUrl}/${city}/property-dealer-in-${createSlug(loc)}`,
      lastModified: new Date(),
    }));
  }

}
// ================= DEALERS FINAL =================
let dealerUrls = [];

try {

  const isHaryanaDesign = city === "haryana";

  let apiUrl = "";

  if (isHaryanaDesign) {
    // ✅ Haryana → ALL DATA
    apiUrl = "https://propertydealerbackend.onrender.com/api/all-dealer-slugs?city=Haryana";
  } else {
    // ✅ Other → domain based
    apiUrl = `https://propertydealerbackend.onrender.com/api/slugs?domain=${domainForApi}`;
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
    ...dealerUrls,
    ...blogUrls,

]
}