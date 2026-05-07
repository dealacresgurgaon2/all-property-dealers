import NoidaHeroSection from "./NoidaHeroSection";
import NoidaSectionTwo from "./NoidaSectionTwo";

export const metadata = {
  title:
    "How It Works | Find Verified Property Dealer in Noida Easily",

  description:
    "Learn how to connect with verified property dealers & real estate agents in Noida. Simple steps to buy, sell or rent property across all Noida sectors & Expressway areas through trusted brokers.",

  keywords: [
  "how to find property dealer in noida",
  "verified property dealer noida",
  "real estate agent noida",
  "property broker noida",
  "buy sell rent property noida",
  "property consultant in noida",
  "property dealing process noida",
  "trusted real estate agent noida",
  "property agent near me noida",
  "noida expressway property agent",
  "sector 150 noida property dealer",
  "how to buy property in noida"
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