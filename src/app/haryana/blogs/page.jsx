import Blogs from "@/templates/design7/pages/blogs/page";

export const metadata = {
  title:
    "Real Estate Blogs & Property News | Property Dealer Haryana",

  description:
    "Read the latest real estate blogs, property investment tips, buying guides, market trends, and property news across Haryana and India.",

  keywords: [
    "Real Estate Blogs",
    "Property News Haryana",
    "Haryana Real Estate",
    "Property Investment Tips",
    "Real Estate Market Trends",
    "Buy Property Guide",
    "Sell Property Tips",
    "Property Dealer Blog",
    "Haryana Property News",
    "Property Updates India",
  ],

  alternates: {
    canonical:
      "https://www.propertydealersnearme.comblogs",
  },

  openGraph: {
    title:
      "Real Estate Blogs & Property News",

    description:
      "Explore the latest property blogs, investment tips, and real estate updates across Haryana.",

    url:
      "https://www.propertydealersnearme.com/blogs",

    siteName: "Property Dealer Haryana",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Real Estate Blogs Haryana",
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
      "Read latest property market updates and real estate blogs across Haryana.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Blogs />;
}