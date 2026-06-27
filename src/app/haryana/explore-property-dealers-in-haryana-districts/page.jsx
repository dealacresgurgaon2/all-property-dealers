import HaryanaPage from "./HaryanaPage";

export const metadata = {
  title:
    "Property Dealers in Haryana | All Districts – Real Estate Agents 2025",

  description:
    "Explore verified property dealers across all 22 Haryana districts — Gurgaon, Faridabad, Rohtak, Panipat, Karnal, Ambala & more. Find HRERA-registered real estate agents near you.",

  keywords: [
    "property dealers Haryana",
    "real estate agents Haryana districts",
    "property dealer Gurgaon Faridabad Rohtak",
    "Haryana real estate 2025",
  ],

  alternates: {
    canonical:
      "https://www.propertydealersnearme.com/explore-property-dealers-in-haryana-districts",
  },

  openGraph: {
    title:
      "Property Dealers in Haryana | All Haryana Cities Property Dealers",

    description:
      "Explore verified property dealers and real estate agents across all Haryana cities.",

    url:
      "https://www.propertydealersnearme.com/explore-property-dealers-in-haryana-districts",

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