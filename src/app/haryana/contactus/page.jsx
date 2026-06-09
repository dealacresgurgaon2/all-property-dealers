import ContactHaryana from "./ContactHaryana";

export const metadata = {
  title:
    "Contact Us | Talk to Verified Property Dealers – Delhi NCR & Haryana",

  description:
    "Reach our property experts for instant help with buying, selling or renting in Delhi, Noida & Haryana. Free consultation from verified, HRERA-registered real estate agents.",

  keywords: [
    "contact property dealer",
    "free property consultation Haryana",
    "free property consultation Haryana",
    "property expert callback",
  ],

  alternates: {
    canonical:
      "https://www.propertydealernearme.com/contact",
  },

  openGraph: {
    title:
      "Contact Property Dealers Haryana",

    description:
      "Connect with trusted property dealers and real estate consultants in Haryana.",

    url:
      "https://www.propertydealernearme.com/contact",

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