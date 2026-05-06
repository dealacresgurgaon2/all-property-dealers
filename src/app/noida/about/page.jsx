import About from "@/templates/design6/pages/about/page";

export const metadata = {
  title:
    "About Us | Trusted Property Dealers & Real Estate Experts",

  description:
    "Learn more about our trusted real estate platform offering property buying, selling, renting, and dealer services across Haryana and India.",

  keywords: [
    "About Property Dealers",
    "Real Estate Company",
    "Property Consultants",
    "Trusted Property Dealers",
    "Real Estate Experts",
    "Haryana Property Dealers",
    "Property Buying Services",
    "Property Selling Services",
    "Commercial Property Consultants",
    "Residential Property Experts",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinharyana.com/about",
  },

  openGraph: {
    title:
      "About Us | Property Dealer Haryana",

    description:
      "Know more about our trusted real estate services and expert property consultants.",

    url:
      "https://www.propertydealerinharyana.com/about",

    siteName: "Property Dealer Haryana",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Property Dealer Haryana",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About Us | Property Dealer Haryana",

    description:
      "Learn more about our property dealer platform and real estate services.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <About />;
}