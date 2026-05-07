import About from "@/templates/design6/pages/about/page";

export const metadata = {
  title:
    "About Us | Property Dealer Directory in Noida | Real Estate Agents Noida",

  description:
    "We are Noida's leading property dealer directory connecting buyers, sellers & tenants with verified real estate agents, brokers & property consultants across all sectors & prime locations in Noida.",

  keywords: [
  "about property dealer noida",
  "property dealer directory noida",
  "real estate directory noida",
  "property consultant noida",
  "trusted property broker noida",
  "best property dealer in noida",
  "top real estate agents noida",
  "property agent noida",
  "real estate company noida",
  "noida expressway property directory",
  "luxury property consultant noida"
],

  alternates: {
    canonical:
      "https://www.propertydealerinnoida.com/about",
  },

  openGraph: {
    title:
      "About Us | Property Dealer Haryana",

    description:
      "Know more about our trusted real estate services and expert property consultants.",

    url:
      "https://www.propertydealerinnoida.com/about",

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