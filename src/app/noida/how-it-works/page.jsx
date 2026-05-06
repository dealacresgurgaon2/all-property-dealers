import NoidaHeroSection from "./NoidaHeroSection";
import NoidaSectionTwo from "./NoidaSectionTwo";

export const metadata = {
  title:
    "Top Property Dealers in Noida | Buy Sell Rent Properties",

  description:
    "Find trusted property dealers and real estate agents in Noida for buying, selling, and renting residential & commercial properties.",

  keywords: [
    "Property Dealers Noida",
    "Real Estate Noida",
    "Buy Property in Noida",
    "Sell Property in Noida",
    "Rent Property in Noida",
    "Commercial Property Noida",
    "Residential Property Noida",
    "Property Consultants Noida",
    "Luxury Property Noida",
    "Real Estate Agents Noida",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinnoida.com",
  },

  openGraph: {
    title:
      "Top Property Dealers in Noida",

    description:
      "Explore verified property dealers and real estate agents in Noida.",

    url:
      "https://www.propertydealerinnoida.com",

    siteName: "Property Dealer Noida",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Property Dealers in Noida",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Top Property Dealers in Noida",

    description:
      "Find trusted real estate agents and property dealers in Noida.",

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
      <NoidaHeroSection />
      <NoidaSectionTwo />
    </main>
  );
}