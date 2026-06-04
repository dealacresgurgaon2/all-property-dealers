import ZonePage from "./ZonePage";

export async function generateMetadata({ params }) {
  const { zone } = await params;

  const zoneName = zone
    ?.split("-")
    .map(
      (item) =>
        item.charAt(0).toUpperCase() +
        item.slice(1)
    )
    .join(" ");

  const title = `Top Property Dealers in ${zoneName} | Buy, Sell & Rent Properties`;

  const description = `Find trusted property dealers, real estate agents, builders, and consultants in ${zoneName}. Explore residential and commercial properties for sale, rent, and investment opportunities.`;

  const canonicalUrl = `https://www.propertydealerindelhi.com/zone/${zone}`;

  return {
    title,
    description,

    keywords: [
      `${zoneName} Property Dealers`,
      `${zoneName} Real Estate Agents`,
      `Property Dealers in ${zoneName}`,
      `Buy Property in ${zoneName}`,
      `Sell Property in ${zoneName}`,
      `Rent Property in ${zoneName}`,
      `${zoneName} Commercial Property`,
      `${zoneName} Residential Property`,
      `${zoneName} Property Consultant`,
      `${zoneName} Property Broker`,
      `${zoneName} Real Estate`,
      `${zoneName} Builders`,
      `${zoneName} Investment Property`,
      `${zoneName} Luxury Property`,
      `${zoneName} Property Market`,
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Property Dealer In Delhi",
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: "https://www.propertydealerindelhi.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Property Dealers in ${zoneName}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        "https://www.propertydealerindelhi.com/og-image.jpg",
      ],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
export default async function Page({ params }) {
  const { zone } = await params;
  return (
    <main>
      <ZonePage zone={zone} />
    </main>
  );
}