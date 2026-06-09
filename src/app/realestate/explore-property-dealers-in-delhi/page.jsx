import DelhiPage from "./DelhiPage";

export const metadata = {
  title:
    "Property Dealers in Delhi | Trusted Real Estate Agents Near You",

  description:
    "Find top-rated, RERA-verified property dealers in Delhi for buying, selling & renting flats, plots & commercial spaces. Expert real estate agents across all Delhi localities.",

  keywords: [
    "property dealers Delhi",
    "real estate agents Delhi",
    "property consultants Delhi",
    "buy sell rent Delhi",
    "Rent Property in Delhi",
    "Commercial Property Delhi",
    "Residential Property Delhi",
    "Property Consultants Delhi",
    "Real Estate Agents Delhi",
  ],

  alternates: {
    canonical:
      "https://www.realestateagentsnearme.in/explore-property-dealers-in-delhi",
  },

  openGraph: {
    title:
      "Property Dealers in Delhi | Buy Sell Rent Properties",

    description:
      "Explore verified property dealers and real estate agents in Delhi.",

    url:
      "https://www.realestateagentsnearme.in",

    siteName:
      "Property Dealer Delhi",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Delhi Property Dealers",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Property Dealers in Delhi | Buy Sell Rent Properties",

    description:
      "Find trusted property dealers and real estate agents in Delhi.",

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
      <DelhiPage />
    </main>
  );
}