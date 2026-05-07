import LocationDealersPage from "./LocationDealersPage";

export async function generateMetadata({ params }) {

  const { location } = await params;

  const formattedLocation = location
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title:
      `${formattedLocation} | Buy Sell Rent Properties`,

    description:
      `Find trusted property dealers, builders, and real estate agents in ${formattedLocation} for buying, selling, and renting residential & commercial properties.`,

    keywords: [
      `${formattedLocation}`,
      `Real Estate ${formattedLocation}`,
      `Buy Property in ${formattedLocation}`,
      `Sell Property in ${formattedLocation}`,
      `Rent Property in ${formattedLocation}`,
      `Commercial Property ${formattedLocation}`,
      `Residential Property ${formattedLocation}`,
      `Property Consultants ${formattedLocation}`,
      `Real Estate Agents ${formattedLocation}`,
    ],

    alternates: {
      canonical:
        `https://www.propertydealerindelhi.com/location-dealers/${location}`,
    },

    openGraph: {
      title:
        `${formattedLocation} | Buy Sell Rent Properties`,

      description:
        `Explore verified property dealers and real estate agents in ${formattedLocation}.`,

      url:
        `https://www.propertydealerindelhi.com/location-dealers/${location}`,

      siteName: "Property Dealer India",

      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: formattedLocation,
        },
      ],

      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${formattedLocation} | Buy Sell Rent Properties`,

      description:
        `Find trusted property dealers and real estate agents in ${formattedLocation}.`,

      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page() {
  return (
    <main>
      <LocationDealersPage />
    </main>
  );
}