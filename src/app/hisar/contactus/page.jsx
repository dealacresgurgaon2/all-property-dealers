import ContactUsPage from "./ContactUsPage";

export const metadata = {
  title:
    "Contact Us | Trusted Property Dealers & Real Estate Experts",

  description:
    "Get in touch with trusted property dealers and real estate experts for buying, selling, renting, and property consultation services across India.",

  keywords: [
    "Contact Property Dealers",
    "Real Estate Contact",
    "Property Consultants",
    "Buy Property",
    "Sell Property",
    "Rent Property",
    "Real Estate Support",
    "Property Agents",
    "Commercial Property Dealers",
    "Residential Property Consultants",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinhisar.com/contact",
  },

  openGraph: {
    title:
      "Contact Us | Property Dealer Hisar",

    description:
      "Connect with trusted property dealers and real estate consultants.",

    url:
      "https://www.propertydealerinhisar.com/contact",

    siteName: "Property Dealer Hisar",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Property Dealer Hisar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Us | Property Dealer Hisar",

    description:
      "Get in touch with trusted real estate agents and property consultants.",

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
      <ContactUsPage />
    </main>
  );
}