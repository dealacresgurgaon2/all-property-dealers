import HeroSection from "./HeroSection";
import PropertyGuideSection from "./PropertyGuideSection";

export const metadata = {
  title:
    "Best Property Dealers in Gurgaon | Buy Sell Rent Properties",

  description:
    "Find trusted property dealers in Gurgaon for buying, selling, and renting residential & commercial properties. Explore verified real estate agents and builders in Gurgaon.",

  keywords: [
    "Property Dealers Gurgaon",
    "Real Estate Gurgaon",
    "Buy Property in Gurgaon",
    "Sell Property in Gurgaon",
    "Rent Property in Gurgaon",
    "Commercial Property Gurgaon",
    "Residential Property Gurgaon",
    "Builders in Gurgaon",
    "Real Estate Agents Gurgaon",
    "Luxury Property Gurgaon",
  ],

  alternates: {
    canonical: "https://yourdomain.com/gurgaon",
  },

  openGraph: {
    title:
      "Best Property Dealers in Gurgaon",

    description:
      "Explore verified real estate agents and property dealers in Gurgaon.",

    url: "https://yourdomain.com/gurgaon",

    siteName: "Property Dealer",

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
      "Best Property Dealers in Gurgaon",

    description:
      "Find trusted property dealers and builders in Gurgaon.",

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
      <HeroSection />
      <PropertyGuideSection />
    </main>
  );
}