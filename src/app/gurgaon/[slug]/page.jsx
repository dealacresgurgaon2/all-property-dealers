import HisarMarketOverview from "./HisarMarketOverview";
import LocationDealersPage from "./LocationDealersPage";

// ✅ GET SEO DATA

async function getDealerMeta(
  slug
) {
  try {
    const res =
      await fetch(
        `https://all-property-dealer-backend.onrender.com/api/add/get-dealer-meta/${slug}`,
        {
          cache: "no-store",
        }
      );

    if (!res.ok)
      return null;

    const data =
      await res.json();

    return (
      data?.data || null
    );
  } catch (error) {
    console.log(error);
    return null;
  }
}

// ✅ CLEAN LOCATION FUNCTION

function cleanLocation(
  slug
) {
  return slug
    ?.replace(
      "-property-dealer-in",
      ""
    )
    ?.replace(
      "property-dealer-in-",
      ""
    )
    ?.replace(
      "property-dealer-in",
      ""
    )
    ?.trim();
}

export async function generateMetadata({
  params,
}) {

  // ✅ RECEIVE PARAMS

  const { slug } =
    await params;

  // ✅ CLEAN LOCATION

  const apiLocation =
    cleanLocation(
      slug
    );

  // ✅ FORMATTED LOCATION

  const formattedLocation =
    apiLocation
      ?.replace(/-/g, " ")
      ?.replace(
        /\b\w/g,
        (char) =>
          char.toUpperCase()
      );

  // ✅ API CALL

  const seoData =
    await getDealerMeta(
      apiLocation
    );

  // ✅ FALLBACK META

  const fallbackTitle =
    `${formattedLocation} | Buy Sell Rent Properties`;

  const fallbackDescription =
    `Find trusted property dealers, builders, and real estate agents in ${formattedLocation} for buying, selling, and renting residential & commercial properties.`;
const fallbackKeywords = [
  `Property Dealer in ${formattedLocation}`,
  `Best Property Dealer in ${formattedLocation}`,
  `Real Estate Agent in ${formattedLocation}`,
  `Property Consultant in ${formattedLocation}`,
  `Property Broker in ${formattedLocation}`,
  `Buy Property in ${formattedLocation}`,
  `Sell Property in ${formattedLocation}`,
  `Rent Property in ${formattedLocation}`,
  `${formattedLocation} Property Dealer`,
  `${formattedLocation} Real Estate`,
  "Property Dealer in Gurgaon",
  "Real Estate Gurgaon",
];
  return {
    title:
      seoData?.metaTitle ||
      fallbackTitle,

    description:
      seoData?.metaDescription ||
      fallbackDescription,
  keywords:
    seoData?.metaKeywords || fallbackKeywords ,
    alternates: {
      canonical:
        `https://www.propertydealeringurgaon.com/${slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page(
  { params }
) {

  // ✅ RECEIVE PARAMS

  const { slug } =
    await params;

  // ✅ CLEAN LOCATION

  const apiLocation =
    cleanLocation(
     slug
    );

  // ✅ API CALL

  const seoData =
    await getDealerMeta(
      apiLocation
    );

  return (
    <main>
      <LocationDealersPage />

      <HisarMarketOverview
        pageContent={
          seoData?.pageContent
        }
      />
    </main>
  );
}