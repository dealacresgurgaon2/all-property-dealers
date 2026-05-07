import About from "@/templates/design5/pages/about/page";

export const metadata = {
  title:
    "About Us | Property Dealer Directory in Delhi | Real Estate Agents Delhi",

  description:
    "We are Delhi's leading property dealer directory connecting buyers, sellers & tenants with verified real estate agents, brokers & consultants across all zones of Delhi including South, North, East, West & Central.",

  keywords: [
  "about property dealer delhi",
  "property dealer directory delhi",
  "real estate directory delhi",
  "property consultant delhi",
  "trusted property broker delhi",
  "best property dealer in delhi",
  "top real estate agents delhi",
  "property agent delhi",
  "real estate company delhi",
  "south delhi property directory",
  "north delhi property directory",
  "delhi property listing directory"
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