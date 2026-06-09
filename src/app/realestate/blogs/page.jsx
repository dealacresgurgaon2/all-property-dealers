import Blogs from "@/templates/design8/pages/blogs/page";
export const metadata = {
  title:
    "Real Estate Blog | Property Tips, Market Trends & Buying Guides India",

  description:
    "Read expert blogs on buying, selling & renting property in India. Explore market trends, legal guides, investment advice for Delhi NCR, Noida, Gurgaon & Haryana real estate in 2025–26.",

  keywords: [
    "real estate blog India",
    "property tips Delhi NCR",
    "home buying guide Haryana",
    "property investment advice 2025",
    
  ],

  alternates: {
    canonical:
      "https://www.realestateagentsnearme.in/blogs",
  },

  openGraph: {
    title:
      "Real Estate Blogs & Property News",

    description:
      "Explore the latest property blogs, investment tips, and real estate updates across Haryana.",

    url:
      "https://www.realestateagentsnearme.in/blogs",

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
