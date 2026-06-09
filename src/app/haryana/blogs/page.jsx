import Blogs from "@/templates/design7/pages/blogs/page";

export const metadata = {
  title:
    "Real Estate Blog | Property Tips, Market Trends & Investment Guides India",

  description:
    "Explore expert blogs on buying, selling & renting property across Delhi, Noida, Gurgaon & Haryana. Get property investment tips, legal guides & market trends for 2025–26.",

  keywords: [
    "real estate blog India",
    "property tips Haryana",
    "home buying guide Delhi NCR",
    "property investment 2025",
    "property market trends",
  ],

  alternates: {
    canonical:
      "https://www.propertydealersnearme.com/blogs",
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