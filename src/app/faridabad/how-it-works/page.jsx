import FaridabadHeroSection from "./FaridabadHeroSection";
import FaridabadSectionTwo from "./FaridabadSectionTwo";

export const metadata = {
  title:
    "Top Property Dealers in Faridabad | Buy, Sell & Rent Properties",

  description:
    "Find trusted property dealers in Faridabad for buying, selling, and renting residential & commercial properties. Explore verified real estate agents near you.",

  keywords: [
    "Property Dealers Faridabad",
    "Real Estate Faridabad",
    "Buy Property in Faridabad",
    "Sell Property in Faridabad",
    "Rent Property in Faridabad",
    "Faridabad Property Agents",
    "Commercial Property Faridabad",
    "Residential Property Faridabad",
  ],

  alternates: {
    canonical: "https://yourdomain.com/faridabad",
  },

  openGraph: {
    title:
      "Top Property Dealers in Faridabad",

    description:
      "Explore verified property dealers and real estate agents in Faridabad.",

    url: "https://yourdomain.com/faridabad",

    siteName: "Property Dealer",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faridabad Property Dealers",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Top Property Dealers in Faridabad",

    description:
      "Find verified real estate agents in Faridabad.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <main>
      <FaridabadHeroSection />
      <FaridabadSectionTwo />
    </main>
  );
}