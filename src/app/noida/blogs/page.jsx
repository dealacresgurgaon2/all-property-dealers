import Blogs from "@/templates/design6/pages/blogs/page";

export const metadata = {
  title:
    "Property Dealer Blog Noida | Real Estate Tips, News & Market Updates",

  description:
    "Read latest blogs on property dealing in Noida. Get expert real estate tips, market updates, investment advice & sector-wise guides from top property consultants & agents in Noida.",

  keywords: [
  "property blog noida",
  "real estate blog noida",
  "property tips noida",
  "real estate news noida",
  "noida property market",
  "property investment noida",
  "property advice noida",
  "noida expressway real estate news",
  "sector 150 noida property guide",
  "buy sell property tips noida",
  "luxury apartment noida guide",
  "noida property market update 2025"
],

  alternates: {
    canonical:
      "https://www.propertydealerinnoida.com/blogs",
  },

  openGraph: {
    title:
      "Real Estate Blogs & Property News",

    description:
      "Explore the latest property blogs, investment tips, and real estate updates.",

    url:
      "https://www.propertydealerinnoida.com/blogs",

    siteName: "Property Dealer Noida",

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
  return <Blogs domain="www.propertydealerinnoida.com" />;
}