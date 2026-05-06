import LocationDealersPage from "./LocationDealersPage";

export const metadata = {
  title:
    "Find Property Dealers by Location | Trusted Real Estate Agents",

  description:
    "Search trusted property dealers, builders, and real estate agents by location for buying, selling, and renting residential & commercial properties.",

  keywords: [
    "Property Dealers by Location",
    "Real Estate Agents Near Me",
    "Location Wise Property Dealers",
    "Property Consultants",
    "Buy Sell Rent Properties",
    "Residential Property Dealers",
    "Commercial Property Dealers",
    "Trusted Real Estate Agents",
    "Property Dealers India",
    "Find Property Dealers",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinfaridabad.com/location-dealers",
  },

  openGraph: {
    title:
      "Find Property Dealers by Location",

    description:
      "Explore verified property dealers and real estate agents near your location.",

    url:
      "https://www.propertydealerinfaridabad.com/location-dealers",

    siteName: "Property Dealer Faridabad",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Location Wise Property Dealers",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Find Property Dealers by Location",

    description:
      "Search trusted property dealers and real estate agents near you.",

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
      <LocationDealersPage />
    </main>
  );
}