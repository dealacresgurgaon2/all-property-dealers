import DealersPage from "./DealersPage";

export async function generateMetadata({ params }) {

  const { city } = await params;

  console.log("CITY:", city);
 

  const formattedLocation = city
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${formattedLocation} | Best Real Estate Agents Near You`,


    description: `Find trusted property dealers, builders, and real estate agents in ${formattedLocation}, Haryana for buying, selling, and renting residential & commercial properties.`,

    keywords: [
      `${formattedLocation}`,
      `Property Dealers ${formattedLocation}`,
      `Real Estate ${formattedLocation}`,
      `Buy Property in ${formattedLocation}`,
      `Sell Property in ${formattedLocation}`,
      `Rent Property in ${formattedLocation}`,
      `Commercial Property ${formattedLocation}`,
      `Residential Property ${formattedLocation}`,
      `Property Consultants ${formattedLocation}`,
      `Real Estate Agents ${formattedLocation}`,
      "Haryana Property Dealers",
    ],

    alternates: {
      canonical: `https://www.realestateagentsnearme.in/${city}`,
    },

    openGraph: {
      title: `${formattedLocation} | Buy Sell Rent Properties`,

      description: `Explore verified property dealers and real estate agents in ${formattedLocation}, Haryana.`,

      url: `https://www.realestateagentsnearme.in/${city}`,

      siteName: "Property Dealer Haryana",

      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Property Dealers in ${formattedLocation}`,
        },
      ],

      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: `${formattedLocation} | Buy Sell Rent Properties`,

      description: `Find trusted property dealers and real estate agents in ${formattedLocation}, Haryana.`,

      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function HomePage() {
  return (
    <main>
      <DealersPage />
    </main>
  );
}