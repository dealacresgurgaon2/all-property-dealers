import DealersPage from "./DealersPage";

export const metadata = {
  title:
    "Top Property Dealers in Haryana | Buy Sell Rent Properties",

  description:
    "Find trusted property dealers, builders, and real estate agents across Haryana for buying, selling, and renting residential & commercial properties.",

  keywords: [
    "Property Dealers Haryana",
    "Real Estate Haryana",
    "Buy Property in Haryana",
    "Sell Property in Haryana",
    "Rent Property in Haryana",
    "Commercial Property Haryana",
    "Residential Property Haryana",
    "Property Consultants Haryana",
    "Real Estate Agents Haryana",
    "Haryana Property Dealers",
  ],

  alternates: {
    canonical:
      "https://www.propertydealersnearme.com/",
  },

  openGraph: {
    title:
      "Top Property Dealers in Haryana",

    description:
      "Explore verified property dealers and real estate agents across Haryana.",

    url:
      "https://www.propertydealersnearme.com/",

    siteName: "Property Dealer Haryana",

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
      "Find trusted property dealers and real estate agents across Haryana.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <main>
      <DealersPage />
    </main>
  );
}