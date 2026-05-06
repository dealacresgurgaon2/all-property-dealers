import DealerPage from "@/templates/design2/pages/[slug]/page";

export const metadata = {
  title:
    "Property Dealers in Faridabad | Buy Sell Rent Properties",

  description:
    "Find top property dealers and real estate agents in Faridabad for buying, selling, and renting residential & commercial properties.",

  keywords: [
    "Property Dealers Faridabad",
    "Real Estate Faridabad",
    "Buy Property in Faridabad",
    "Sell Property in Faridabad",
    "Rent Property in Faridabad",
    "Commercial Property Faridabad",
    "Residential Property Faridabad",
    "Property Consultants Faridabad",
    "Real Estate Agents Faridabad",
    "Faridabad Property Dealers",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinfaridabad.com",
  },

  openGraph: {
    title:
      "Property Dealers in Faridabad",

    description:
      "Explore trusted property dealers and real estate agents in Faridabad.",

    url:
      "https://www.propertydealerinfaridabad.com",

    siteName: "Property Dealer Faridabad",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Property Dealers in Faridabad",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Property Dealers in Faridabad",

    description:
      "Find trusted real estate agents and property dealers in Faridabad.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page({ params }) {
  return <DealerPage params={params} />;
}