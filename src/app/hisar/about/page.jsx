import About from "@/templates/design3/pages/about/page";

export const metadata = {
  title:
    "About Us | Property Dealer Directory in Hisar | Real Estate Agents Hisar",

  description:
    "We are Hisar's leading property dealer directory connecting buyers, sellers & tenants with the best real estate agents, brokers & property consultants across all areas of Hisar.",

  keywords: [
  "about property dealer hisar",
  "property dealer directory hisar",
  "real estate directory hisar",
  "property consultant hisar",
  "trusted property broker hisar",
  "property agent hisar",
  "best property dealer in hisar",
  "top real estate agents hisar"
],

  alternates: {
    canonical:
      "https://www.propertydealerinhisar.com/about",
  },

  openGraph: {
    title:
      "About Us | Property Dealer India",

    description:
      "Know more about our trusted real estate services and expert property consultants.",

    url:
      "https://www.propertydealerinhisar.com/about",

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