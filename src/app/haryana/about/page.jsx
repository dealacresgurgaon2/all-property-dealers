import About from "@/templates/design7/pages/about/page";
export const metadata = {
  title:
    "About PropertyDealersNearMe | India's Trusted Real Estate Directory",

  description:
    "We connect buyers, sellers & renters with 5,000+ verified property dealers across 30+ cities in Delhi, Noida, Gurgaon & Haryana. Smart matching. Transparent process. Zero hidden fees.",

  keywords: [
  "about property dealers near me",
  "verified property dealers India",
  "trusted real estate agent directory",
  "property platform India",
  
],

  alternates: {
    canonical:
      "https://www.propertydealersnearme.com/about",
  },

  openGraph: {
    title:
      "About Us | Property Dealer India",

    description:
      "Know more about our trusted real estate services and expert property consultants.",

    url:
      "https://www.propertydealersnearme.com/about",

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
