import About from "@/templates/design8/pages/about/page";
export const metadata = {
  title:
    "About Us | India's Trusted Real Estate Agent Directory",

  description:
    "About /about	About Us | India's Trusted Real Estate Agent Directory	Learn about Real Estate Agents Near Me — India's curated directory of RERA-registered, verified property dealers across Delhi NCR, Noida, Gurgaon & all Haryana cities. Your trusted guide.	about real estate agents near me, verified property dealers India, RERA registered agents Delhi Haryana",

  keywords: [
  "about real estate agents near me",
  "verified property dealers India",
  "RERA registered agents Delhi Haryana",

],

  alternates: {
    canonical:
      "https://www.realestateagentsnearme.in/about",
  },

  openGraph: {
    title:
      "About Us | Property Dealer India",

    description:
      "Know more about our trusted real estate services and expert property consultants.",

    url:
      "https://www.realestateagentsnearme.in/about",

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
