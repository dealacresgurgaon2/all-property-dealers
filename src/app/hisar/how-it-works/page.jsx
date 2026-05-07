import HisarHeroSection from "./HisarHeroSection";
import HisarSectionTwo from "./HisarSectionTwo";

export const metadata = {
  title:
    "Top Property Dealers in Hisar | Buy Sell Rent Properties",

  description:
    "Find trusted property dealers and real estate agents in Hisar for buying, selling, and renting residential & commercial properties.",

  keywords: [
    "Property Dealers Hisar",
    "Real Estate Hisar",
    "Buy Property in Hisar",
    "Sell Property in Hisar",
    "Rent Property in Hisar",
    "Commercial Property Hisar",
    "Residential Property Hisar",
    "Property Consultants Hisar",
    "Luxury Property Hisar",
    "Real Estate Agents Hisar",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinhisar.com",
  },

 openGraph: {
    title:
      "Top Property Dealers in Hisar",

    description:
      "Explore verified property dealers and real estate agents in Hisar.",

    url:
      "https://www.propertydealerinhisar.com",

    siteName: "Property Dealer Hisar",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Property Dealers in Hisar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Top Property Dealers in Hisar",

    description:
      "Find trusted real estate agents and property dealers in Hisar.",

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
      <HisarHeroSection />
      <HisarSectionTwo />
    </main>
  );
}