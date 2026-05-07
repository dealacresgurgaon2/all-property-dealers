import LocationDealersPage from "./LocationDealersPage";

export const metadata = {
  title:
    "Find Property Dealers by Location | Gurgaon Real Estate Experts",

  description:
    "Search trusted property dealers, builders, and real estate agents by location in Gurgaon for buying, selling, and renting residential & commercial properties.",

  keywords: [
    "Property Dealers Gurgaon",
    "Location Wise Property Dealers",
    "Real Estate Agents Gurgaon",
    "Property Consultants Gurgaon",
    "Buy Property Gurgaon",
    "Sell Property Gurgaon",
    "Rent Property Gurgaon",
    "Commercial Property Gurgaon",
    "Residential Property Gurgaon",
    "Trusted Property Dealers",
  ],

  alternates: {
    canonical:
      "https://www.propertydealeringurgaon.com/location-dealers",
  },

  openGraph: {
    title:
      "Find Property Dealers by Location",

    description:
      "Explore verified property dealers and real estate agents across Gurgaon locations.",

    url:
      "https://www.propertydealeringurgaon.com/location-dealers",

    siteName: "Property Dealer Gurgaon",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Location Wise Property Dealers Gurgaon",
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
      "Search trusted property dealers and real estate agents in Gurgaon.",

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