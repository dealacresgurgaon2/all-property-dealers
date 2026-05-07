import Blogs from "@/templates/design1/pages/blogs/page";

export const metadata = {
  title:
    "Property Dealer Blog Gurgaon | Real Estate Tips, News & Market Updates",

  description:
    "Read latest blogs on property dealing in Gurgaon. Get expert real estate tips, market updates, investment advice & area guides from top property consultants in Gurgaon.",

  keywords: [
  "property blog gurgaon",
  "real estate blog gurgaon",
  "property tips gurgaon",
  "real estate news gurgaon",
  "gurgaon property market",
  "property investment gurgaon",
  "property advice gurgaon",
  "DLF property news",
  "gurugram real estate updates",
  "buy sell property tips gurgaon"
],

  alternates: {
    canonical:
      "https://www.propertydealeringurgaon.com/blogs",
  },

  openGraph: {
    title:
      "Real Estate Blogs & Property News",

    description:
      "Explore the latest property blogs, investment tips, and real estate updates.",

    url:
      "https://www.propertydealeringurgaon.com/blogs",

    siteName: "Property Dealer Gurgaon",

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
  return <Blogs domain="www.propertydealeringurgaon.com" />;
}