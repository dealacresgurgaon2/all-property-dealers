import About from "@/templates/design2/pages/about/page";

export const metadata = {
  title:
    "About Us | Property Dealer Directory in Faridabad | Real Estate Agents Faridabad",

  description:
    "We are Faridabad's leading property dealer directory connecting buyers, sellers & tenants with verified real estate agents, brokers & consultants across all sectors, NIT, Neharpar & Greater Faridabad.",

  keywords: [
  "about property dealer faridabad",
  "property dealer directory faridabad",
  "real estate directory faridabad",
  "property consultant faridabad",
  "trusted property broker faridabad",
  "best property dealer in faridabad",
  "top real estate agents faridabad",
  "property agent faridabad",
  "real estate company faridabad",
  "greater faridabad property directory"
],

  alternates: {
    canonical:
      "https://www.propertydealerinfaridabad.com/about",
  },

  openGraph: {
    title:
      "About Us | Property Dealer India",

    description:
      "Know more about our trusted real estate services and expert property consultants.",

    url:
      "https://www.propertydealerinfaridabad.com/about",

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