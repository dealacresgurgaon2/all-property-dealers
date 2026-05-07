import DelhiPage from "./DelhiPage";

export async function generateMetadata({ params }) {

  const { zone } = await params;

  const formattedZone = zone
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title:
      `${formattedZone} | Buy Sell Rent Properties`,

    description:
      `Find trusted property dealers, builders, and real estate agents in ${formattedZone}, Delhi for buying, selling, and renting residential & commercial properties.`,

    keywords: [
      formattedZone,
      `Property Dealers ${formattedZone}`,
      `Real Estate ${formattedZone}`,
      `Buy Property in ${formattedZone}`,
      `Sell Property in ${formattedZone}`,
      `Rent Property in ${formattedZone}`,
      `Commercial Property ${formattedZone}`,
      `Residential Property ${formattedZone}`,
      `Property Consultants ${formattedZone}`,
      `Real Estate Agents ${formattedZone}`,
      "Delhi Property Dealers",
    ],

    alternates: {
      canonical:
        `https://www.propertydealerindelhi.com/${zone}`,
    },

    openGraph: {
      title:
        `${formattedZone} | Buy Sell Rent Properties`,

      description:
        `Explore verified property dealers and real estate agents in ${formattedZone}, Delhi.`,

      url:
        `https://www.propertydealerindelhi.com/${zone}`,

      siteName: "Property Dealer Delhi",

      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: formattedZone,
        },
      ],

      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${formattedZone} | Buy Sell Rent Properties`,

      description:
        `Find trusted property dealers and real estate agents in ${formattedZone}, Delhi.`,

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
      <DelhiPage />
    </main>
  );
}