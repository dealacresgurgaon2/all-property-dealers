import LocationDealersPage from "./LocationDealersPage";

export const metadata = {
  title:
    "Top Property Dealers by Location | Buy Sell Rent Properties",

  description:
    "Find trusted property dealers, builders, and real estate agents by location for buying, selling, and renting residential & commercial properties.",

  keywords: [
    "Property Dealers",
    "Property Dealers Near Me",
    "Real Estate Agents",
    "Location Wise Property Dealers",
    "Buy Property",
    "Sell Property",
    "Rent Property",
    "Commercial Property Dealers",
    "Residential Property Dealers",
    "Real Estate Consultants",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerindelhi.com/location-dealers",
  },

  openGraph: {
    title:
      "Top Property Dealers by Location",

    description:
      "Explore verified property dealers and real estate agents near your location.",

    url:
      "https://www.propertydealerindelhi.com/location-dealers",

    siteName: "Property Dealer India",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Property Dealers by Location",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Top Property Dealers by Location",

    description:
      "Find trusted property dealers and real estate agents near you.",

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