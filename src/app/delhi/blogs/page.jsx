import Blogs from "@/templates/design5/pages/blogs/page";

export const metadata = {
  title:
    " Property Dealer Blog Delhi | Real Estate Tips, News & Market Updates",

  description:
    "Read latest blogs on property dealing in Delhi. Get expert real estate tips, market updates, investment advice & zone-wise locality guides from top property consultants & agents in Delhi.",

  keywords: [
  "property blog delhi",
  "real estate blog delhi",
  "property tips delhi",
  "real estate news delhi",
  "delhi property market",
  "property investment delhi",
  "property advice delhi",
  "south delhi real estate news",
  "north delhi property guide",
  "buy sell property tips delhi",
  "luxury property delhi guide",
  "delhi property market update 2025",
  "property rates delhi",
  "commercial property delhi blog"
],

  alternates: {
    canonical: "https://www.propertydealerindelhi.com/blogs",
  },

  openGraph: {
    title:
      "Real Estate Blogs & Property News",

    description:
      "Explore the latest property blogs, investment tips, and real estate market updates.",

    url: "https://www.propertydealerindelhi.com/blogs",

    siteName: "Property Dealer India",

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
  return <Blogs domain="www.propertydealerindelhi.com" />;
}