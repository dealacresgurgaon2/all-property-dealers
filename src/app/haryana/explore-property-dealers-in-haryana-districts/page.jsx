import HaryanaPage from "./HaryanaPage";

export const metadata = {
  title:
    "Property Dealers in Haryana | All Haryana Cities Property Dealers",

  description:
    "Find trusted property dealers, builders, and real estate agents across all Haryana cities including Gurgaon, Faridabad, Hisar, Karnal, Rohtak, Panipat, Sonipat, Panchkula, Ambala, and more.",

  keywords: [
    "Property Dealers Haryana",
    "Real Estate Haryana",
    "Property Dealers in Gurgaon",
    "Property Dealers in Faridabad",
    "Property Dealers in Hisar",
    "Property Dealers in Karnal",
    "Property Dealers in Rohtak",
    "Property Dealers in Panipat",
    "Property Dealers in Sonipat",
    "Property Dealers in Panchkula",
    "Property Dealers in Ambala",
    "Buy Property in Haryana",
    "Sell Property in Haryana",
    "Rent Property in Haryana",
    "Haryana Real Estate Agents",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinharyana.com/explore-property-dealers-in-haryana-districts",
  },

  openGraph: {
    title:
      "Property Dealers in Haryana | All Haryana Cities Property Dealers",

    description:
      "Explore verified property dealers and real estate agents across all Haryana cities.",

    url:
      "https://www.propertydealerinharyana.com",

    siteName:
      "Property Dealer Haryana",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Haryana Property Dealers",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Property Dealers in Haryana | All Haryana Cities Property Dealers",

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
      <HaryanaPage />
    </main>
  );
}