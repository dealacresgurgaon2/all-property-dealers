// app/delhi/layout.jsx

import ClientLayout from "./ClientLayout";

export const metadata = {
  title:
    "Top Property Dealers in Delhi | Buy Sell Rent Properties",

  description:
    "Find trusted property dealers, real estate agents, builders, and property consultants in Delhi for buying, selling, and renting residential & commercial properties.",

  keywords: [
    "Property Dealers Delhi",
    "Real Estate Delhi",
    "Delhi Property Dealers",
    "Buy Property in Delhi",
    "Sell Property in Delhi",
    "Rent Property in Delhi",
    "Commercial Property Delhi",
    "Residential Property Delhi",
    "Builders in Delhi",
    "Real Estate Agents Delhi",
  ],

  alternates: {
    canonical: "https://yourdomain.com/delhi",
  },

  openGraph: {
    title:
      "Top Property Dealers in Delhi",

    description:
      "Explore verified property dealers and real estate agents in Delhi.",

    url: "https://yourdomain.com/delhi",

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