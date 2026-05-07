import FaridabadHeroSection from "./FaridabadHeroSection";
import FaridabadSectionTwo from "./FaridabadSectionTwo";

export const metadata = {
  title:
    "How It Works | Find Verified Property Dealer in Faridabad Easily",

  description:
    " Learn how to connect with verified property dealers & real estate agents in Faridabad. Simple steps to buy, sell or rent property in Faridabad sectors, NIT, Neharpar & Greater Faridabad.",

  keywords: [
  "how to find property dealer in faridabad",
  "verified property dealer faridabad",
  "real estate agent faridabad",
  "property broker faridabad",
  "buy sell rent property faridabad",
  "property consultant in faridabad",
  "property dealing process faridabad",
  "trusted real estate agent faridabad",
  "property agent near me faridabad",
  "neharpar property dealer",
  "NIT faridabad real estate agent"
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