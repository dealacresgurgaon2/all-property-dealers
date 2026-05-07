import HeroSection from "./HeroSection";
import PropertyGuideSection from "./PropertyGuideSection";

export const metadata = {
  title:
    "How It Works | Find Verified Property Dealer in Delhi Easily",

  description:
    "Learn how to connect with verified property dealers & real estate agents in Delhi. Simple steps to buy, sell or rent property across South Delhi, North Delhi, East, West & Central Delhi zones.",

  keywords: [
  "how to find property dealer in delhi",
  "verified property dealer delhi",
  "real estate agent delhi",
  "property broker delhi",
  "buy sell rent property delhi",
  "property consultant in delhi",
  "property dealing process delhi",
  "trusted real estate agent delhi",
  "property agent near me delhi",
  "south delhi property agent",
  "north delhi property dealer",
  "how to buy property in delhi",
  "rent flat in delhi agent"
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