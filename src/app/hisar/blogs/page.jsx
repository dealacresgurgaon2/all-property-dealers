import Blogs from "@/templates/design3/pages/blogs/page";

export const metadata = {
  title:
    "Real Estate Blogs & Property News | Property Dealer Hisar",

  description:
    "Read the latest real estate blogs, property investment tips, buying guides, market trends, and property news in Hisar and across India.",

  keywords: [
    "Real Estate Blogs",
    "Property News",
    "Hisar Property News",
    "Property Investment Tips",
    "Real Estate Market Trends",
    "Buy Property Guide",
    "Sell Property Tips",
    "Hisar Real Estate",
    "Property Dealer Blog",
    "Property Updates India",
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinhisar.com/blogs",
  },

  openGraph: {
    title:
      "Real Estate Blogs & Property News",

    description:
      "Explore the latest property blogs, investment tips, and real estate updates.",

    url:
      "https://www.propertydealerinhisar.com/blogs",

    siteName: "Property Dealer Hisar",

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
  return <Blogs domain="www.propertydealerinhisar.com" />;
}