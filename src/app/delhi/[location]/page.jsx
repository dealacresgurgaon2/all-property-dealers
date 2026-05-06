import LocationDealersPage from "./LocationDealersPage";

export const metadata = {
  title:
    "Find Property Dealers by Location | Trusted Real Estate Agents",

  description:
    "Search trusted property dealers, real estate agents, and builders by location. Explore verified residential and commercial property consultants near you.",

  keywords: [
    "Property Dealers by Location",
    "Real Estate Agents Near Me",
    "Find Property Dealers",
    "Location Wise Property Dealers",
    "Property Consultants",
    "Residential Property Agents",
    "Commercial Property Dealers",
    "Trusted Real Estate Agents",
    "Buy Sell Rent Properties",
    "Local Property Dealers",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerindelhi.com/location-dealers",
  },

  openGraph: {
    title:
      "Find Property Dealers by Location",

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