import GurgaonHeroSection from "./GurgaonHeroSection";
import GurgaonSectionTwo from "./GurgaonSectionTwo";

export const metadata = {
  title:
    "How It Works | Find Verified Property Dealer in Gurgaon Easily",

  description:
    "Learn how to connect with verified property dealers & real estate agents in Gurgaon. Simple steps to buy, sell or rent property in Gurgaon sectors, DLF & Sohna Road areas.",

  keywords: [
  "how to find property dealer in gurgaon",
  "verified property dealer gurgaon",
  "real estate agent gurgaon",
  "property broker gurgaon",
  "buy sell rent property gurgaon",
  "property consultant in gurgaon",
  "property dealing process gurgaon",
  "trusted real estate agent gurgaon",
  "property agent near me gurgaon",
  "gurugram property dealer"
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