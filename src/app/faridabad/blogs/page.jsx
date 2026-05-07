import Blogs from "@/templates/design2/pages/blogs/page";

export const metadata = {
  title:
    "Real Estate Blogs & Property News | Property Dealer Faridabad",

  description:
    "Read the latest real estate blogs, property investment tips, buying guides, market trends, and property news in Faridabad and across India.",

  keywords: [
    "Real Estate Blogs",
    "Property News",
    "Faridabad Property News",
    "Property Investment Tips",
    "Real Estate Market Trends",
    "Buy Property Guide",
    "Sell Property Tips",
    "Faridabad Real Estate",
    "Property Dealer Blog",
    "Property Updates India",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinfaridabad.com/blogs",
  },

  openGraph: {
    title:
      "Real Estate Blogs & Property News",

    description:
      "Explore the latest property blogs, investment tips, and real estate updates.",

    url:
      "https://www.propertydealerinfaridabad.com/blogs",

    siteName: "Property Dealer Faridabad",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Real Estate Blogs",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Real Estate Blogs & Property News",

    description:
      "Read latest property market updates and real estate blogs.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Blogs domain="www.propertydealerinfaridabad.com" />;
}