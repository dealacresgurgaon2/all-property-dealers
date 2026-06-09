import DelhiPage from "./DelhiPage";

export const metadata = {
  title:
    "Property Dealers in Delhi | Explore by Zone – Buy, Sell & Rent",

  description:
    "Find top-rated property dealers in Delhi by zone — Central, North, South, East & West Delhi. Verified real estate agents for buying, selling & renting flats, plots & commercial spaces.",

  keywords: [
    "property dealers Delhi",
    "real estate agents Delhi",
    "buy sell rent Delhi",
    "property dealer Central North South East West Delhi",
   
  ],

  alternates: {
    canonical:
      "https://www.propertydealernearme.com/explore-property-dealers-in-delhi",
  },

  openGraph: {
    title:
      "Property Dealers in Delhi | Buy Sell Rent Properties",

    description:
      "Explore verified property dealers and real estate agents in Delhi.",

    url:
      "https://www.propertydealernearme.com",

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