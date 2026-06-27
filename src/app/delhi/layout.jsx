// app/delhi/layout.jsx

import ClientLayout from "./ClientLayout";

export const metadata = {
  title:
    "Property Dealer in Delhi | Top Real Estate Agents & Brokers Delhi",

  description:
    "Find trusted property dealers in Delhi. Connect with top real estate agents, brokers & consultants across South Delhi, North Delhi, East, West & Central Delhi. Buy, sell or rent property now!",

  keywords: [
  "property dealer in delhi",
  "property dealers in delhi",
  "real estate agent in delhi",
  "real estate agents in delhi",
  "property consultant delhi",
  "property broker delhi",
  "property dealer delhi",
  "real estate broker delhi",
  "property agent delhi",
  "buy property in delhi",
  "sell property delhi",
  "rent property delhi",
  "best property dealer delhi",
  "top property dealer delhi",
  "property dealer near me delhi",
  "south delhi property dealer",
  "north delhi property dealer",
  "east delhi property dealer",
  "west delhi property dealer",
  "central delhi property dealer",
  "residential property dealer delhi",
  "commercial property dealer delhi",
  "flat dealer delhi",
  "plot dealer delhi",
  "apartment dealer delhi",
  "luxury property dealer delhi",
  "independent house dealer delhi",
  "property dealer in new delhi"
],

  alternates: {
    canonical: "https://www.propertydealerindelhi.com/",
  },

  openGraph: {
    title:
      "Top Property Dealers in Delhi",

    description:
      "Explore verified property dealers and real estate agents in Delhi.",

    url: "https://www.propertydealerindelhi.com/",

    siteName: "Property Dealer",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Property Dealers in Delhi",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Top Property Dealers in Delhi",

    description:
      "Find trusted real estate agents and property dealers in Delhi.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}