import About from "@/templates/design1/pages/about/page";

export const metadata = {
  title:
    "About Us | Property Dealer Directory in Gurgaon | Real Estate Agents Gurugram",

  description:
    "We are Gurgaon's leading property dealer directory connecting buyers, sellers & tenants with verified real estate agents, brokers & consultants across all sectors & localities in Gurgaon.",

  keywords: [
  "about property dealer gurgaon",
  "property dealer directory gurgaon",
  "real estate directory gurgaon",
  "property consultant gurgaon",
  "trusted property broker gurgaon",
  "best property dealer in gurgaon",
  "top real estate agents gurgaon",
  "property agent gurugram",
  "real estate company gurgaon"
],

  alternates: {
    canonical:
      "https://www.propertydealeringurgaon.com/about",
  },

  openGraph: {
    title:
      "About Us | Property Dealer India",

    description:
      "Know more about our trusted real estate services and expert property consultants.",

    url:
      "https://www.propertydealeringurgaon.com/about",

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