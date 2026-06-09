import ContactHaryana from "./ContactHaryana";

export const metadata = {
  title:
    "Contact Us | Get Free Property Consultation – Delhi NCR & Haryana",

  description:
    "Contact our property experts for free consultation on buying, selling or renting in Delhi, Noida, Gurgaon & Haryana. Get instant callback from verified real estate agents near you.",

  keywords: [
    "contact property dealer",
    "free property consultation Delhi",
    "real estate agent callback Haryana",
    "property help Noida",
    "Sell Property Haryana",
    "Rent Property Haryana",
    "Real Estate Support",
    "Haryana Property Agents",
    "Commercial Property Haryana",
    "Residential Property Haryana",
  ],

  alternates: {
    canonical:
      "https://www.realestateagentsnearme.in/contactus",
  },

  openGraph: {
    title:
      "Contact Property Dealers Haryana",

    description:
      "Connect with trusted property dealers and real estate consultants in Haryana.",

    url:
      "https://www.realestateagentsnearme.in/contactus",

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