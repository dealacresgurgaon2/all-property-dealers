import HisarMarketOverview from "./HisarMarketOverview";
import LocationDealersPage from "./LocationDealersPage";

// ✅ GET SEO DATA

async function getDealerMeta(
  slug
) {
  try {
    const res =
      await fetch(
        `http://localhost:5000/api/add/get-dealer-meta/${slug}`,
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

// ✅ CLEAN SLUG FUNCTION

function cleanSlug(slug) {
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

  // ✅ CLEAN SLUG

  const apiSlug =
    cleanSlug(slug);

  // ✅ NOW CONSOLE OK

  console.log(
    "apiSlug =>",
    apiSlug
  );

  // ✅ FORMATTED LOCATION

  const formattedLocation =
    apiSlug
      ?.replace(/-/g, " ")
      ?.replace(
        /\b\w/g,
        (char) =>
          char.toUpperCase()
      );

  // ✅ API CALL

  const seoData =
    await getDealerMeta(
      apiSlug
    );

  // ✅ FALLBACK META

  const fallbackTitle =
    `${formattedLocation} | Buy Sell Rent Properties`;

  const fallbackDescription =
    `Find trusted property dealers, builders, and real estate agents in ${formattedLocation} for buying, selling, and renting residential & commercial properties.`;

  return {
    title:
      seoData?.metaTitle ||
      fallbackTitle,

    description:
      seoData?.metaDescription ||
      fallbackDescription,

    alternates: {
      canonical:
        `https://www.propertydealerinhisar.com/location-dealers/${slug}`,
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

  // ✅ CLEAN SLUG

  const apiSlug =
    cleanSlug(slug);

  // ✅ API CALL

  const seoData =
    await getDealerMeta(
      apiSlug
    );

  return (
    <main>
      <LocationDealersPage
       
      />
      <HisarMarketOverview  pageContent={
          seoData?.pageContent
        }/>
    </main>
  );
}