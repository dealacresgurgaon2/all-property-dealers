import ContactFaridabad from "./ContactFaridabad";

export const metadata = {
  title:
    "Contact Property Dealers in Faridabad | Real Estate Support",

  description:
    "Get in touch with trusted property dealers and real estate experts in Faridabad for buying, selling, renting, and property consultation services.",

  keywords: [
    "Contact Property Dealers Faridabad",
    "Faridabad Real Estate Contact",
    "Property Consultants Faridabad",
    "Buy Property Faridabad",
    "Sell Property Faridabad",
    "Rent Property Faridabad",
    "Real Estate Support",
    "Faridabad Property Agents",
    "Commercial Property Faridabad",
    "Residential Property Faridabad",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinfaridabad.com/contact",
  },

  openGraph: {
    title:
      "Contact Property Dealers in Faridabad",

    description:
      "Connect with trusted property dealers and real estate consultants in Faridabad.",

    url:
      "https://www.propertydealerinfaridabad.com/contact",

    siteName: "Property Dealer Faridabad",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Property Dealers Faridabad",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Property Dealers in Faridabad",

    description:
      "Get in touch with trusted real estate agents in Faridabad.",

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
      <ContactFaridabad />
    </main>
  );
}