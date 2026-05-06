import About from "@/templates/design1/pages/about/page";

export const metadata = {
  title:
    "About Us | Trusted Property Dealers & Real Estate Experts",

  description:
    "Learn more about our trusted real estate platform offering property buying, selling, renting, and dealer services across Delhi, Gurgaon, Noida, and Haryana.",

  keywords: [
    "About Property Dealers",
    "Real Estate Company",
    "Property Consultants",
    "Trusted Property Dealers",
    "Real Estate Experts",
    "Delhi Property Dealers",
    "Gurgaon Property Consultants",
    "Noida Real Estate",
    "Haryana Property Dealers",
    "Buy Sell Rent Property",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerindelhi.com/about",
  },

  openGraph: {
    title:
      "About Us | Property Dealer India",

    description:
      "Know more about our trusted real estate services and expert property consultants.",

    url:
      "https://www.propertydealerindelhi.com/about",

    siteName: "Property Dealer India",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Property Dealer India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About Us | Property Dealer India",

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