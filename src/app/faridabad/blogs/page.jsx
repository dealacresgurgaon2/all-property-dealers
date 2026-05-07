import Blogs from "@/templates/design2/pages/blogs/page";

export const metadata = {
  title:
    "Property Dealer Blog Faridabad | Real Estate Tips, News & Market Updates",

  description:
    "Read latest blogs on property dealing in Faridabad. Get expert real estate tips, market updates, investment advice & locality guides for NIT, Neharpar, Sectors & Greater Faridabad.",

  keywords: [
  "property blog faridabad",
  "real estate blog faridabad",
  "property tips faridabad",
  "real estate news faridabad",
  "faridabad property market",
  "property investment faridabad",
  "property advice faridabad",
  "neharpar property news",
  "greater faridabad real estate updates",
  "buy sell property tips faridabad",
  "NIT faridabad property guide"
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