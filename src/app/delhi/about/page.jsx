import About from "@/templates/design5/pages/about/page";

export const metadata = {
  title:
    "About Us | Trusted Property Dealers & Real Estate Experts",

  description:
    "Learn about Property Dealer India, a trusted platform for buying, selling, and renting residential & commercial properties across Delhi, Gurgaon, Noida, Faridabad, and Haryana.",

  keywords: [
    "About Property Dealer",
    "Real Estate Company",
    "Property Dealers India",
    "Trusted Property Consultants",
    "Real Estate Experts",
    "Delhi Property Dealers",
    "Gurgaon Property Consultants",
    "Noida Real Estate",
    "Faridabad Property Agents",
    "Haryana Property Dealers",
  ],

  alternates: {
    canonical: "https://www.propertydealerindelhi.com/about",
  },

  openGraph: {
    title:
      "About Us | Property Dealer India",

    description:
      "Know more about our trusted real estate services and property experts.",

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
      "Learn more about our real estate platform and services.",

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