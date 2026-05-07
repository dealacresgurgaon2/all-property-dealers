import ContactHaryana from "./ContactHaryana";

export const metadata = {
  title:
    "Contact Property Dealers Haryana | Real Estate Support",

  description:
    "Get in touch with trusted property dealers and real estate experts in Haryana for buying, selling, renting, and property consultation services.",

  keywords: [
    "Contact Property Dealers Haryana",
    "Haryana Real Estate Contact",
    "Property Consultants Haryana",
    "Buy Property Haryana",
    "Sell Property Haryana",
    "Rent Property Haryana",
    "Real Estate Support",
    "Haryana Property Agents",
    "Commercial Property Haryana",
    "Residential Property Haryana",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinharyana.com/contact",
  },

  openGraph: {
    title:
      "Contact Property Dealers Haryana",

    description:
      "Connect with trusted property dealers and real estate consultants in Haryana.",

    url:
      "https://www.propertydealerinharyana.com/contact",

    siteName: "Property Dealer Haryana",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Property Dealers Haryana",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Property Dealers Haryana",

    description:
      "Get in touch with trusted real estate agents in Haryana.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <main>
      <ContactHaryana />
    </main>
  );
}