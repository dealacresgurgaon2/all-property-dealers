import ZonePage from "./ZonePage";

export const metadata = {
  title:
    "Top Property Dealers in Haryana | Buy Sell Rent Properties",

  description:
    "Find trusted property dealers, real estate agents, and builders across Haryana for buying, selling, and renting residential & commercial properties.",

  keywords: [
    "Property Dealers Haryana",
    "Real Estate Haryana",
    "Buy Property in Haryana",
    "Sell Property in Haryana",
    "Rent Property in Haryana",
    "Commercial Property Haryana",
    "Residential Property Haryana",
    "Builders in Haryana",
    "Real Estate Agents Haryana",
    "Luxury Property Haryana",
  ],

  alternates: {
    canonical: "https://yourdomain.com/haryana",
  },

  openGraph: {
    title:
      "Top Property Dealers in Haryana",

    description:
      "Explore verified property dealers and real estate agents across Haryana.",

    url: "https://yourdomain.com/haryana",

    siteName: "Property Dealer",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Property Dealers in Haryana",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Top Property Dealers in Haryana",

    description:
      "Find trusted real estate agents and property dealers across Haryana.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main>
      <ZonePage />
    </main>
  );
}