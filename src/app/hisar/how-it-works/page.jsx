import HisarHeroSection from "./HisarHeroSection";
import HisarSectionTwo from "./HisarSectionTwo";

export const metadata = {
  title:
    "How It Works | Find Best Property Dealer in Hisar Easily",

  description:
    "Learn how to connect with verified property dealers & real estate agents in Hisar. Simple steps to buy, sell or rent property in Hisar through trusted brokers & consultants.",

  keywords: [
  "how to find property dealer in hisar",
  "real estate agent hisar",
  "property broker hisar",
  "buy sell rent property hisar",
  "property consultant in hisar",
  "verified property dealers hisar",
  "property dealing process hisar",
  "best real estate agent hisar",
  "property agent near me hisar"
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