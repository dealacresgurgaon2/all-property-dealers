import GurgaonHeroSection from "./GurgaonHeroSection";
import GurgaonSectionTwo from "./GurgaonSectionTwo";

export const metadata = {
  title:
    "Top Property Dealers in Gurgaon | Buy Sell Rent Properties",

  description:
    "Find trusted property dealers and real estate agents in Gurgaon for buying, selling, and renting residential & commercial properties.",

  keywords: [
    "Property Dealers Gurgaon",
    "Real Estate Gurgaon",
    "Buy Property in Gurgaon",
    "Sell Property in Gurgaon",
    "Rent Property in Gurgaon",
    "Commercial Property Gurgaon",
    "Residential Property Gurgaon",
    "Property Consultants Gurgaon",
    "Luxury Property Gurgaon",
    "Real Estate Agents Gurgaon",
  ],

  alternates: {
    canonical:
      "https://www.propertydealeringurgaon.com",
  },

  openGraph: {
    title:
      "Top Property Dealers in Gurgaon",

    description:
      "Explore verified property dealers and real estate agents in Gurgaon.",

    url:
      "https://www.propertydealeringurgaon.com",

    siteName: "Property Dealer Gurgaon",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Property Dealers in Gurgaon",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Top Property Dealers in Gurgaon",

    description:
      "Find trusted real estate agents and property dealers in Gurgaon.",

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
      <GurgaonHeroSection />
      <GurgaonSectionTwo />
    </main>
  );
}