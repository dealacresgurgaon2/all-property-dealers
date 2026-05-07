import Blogs from "@/templates/design3/pages/blogs/page";

export const metadata = {
  title:
    "Property Dealer Blog Hisar | Real Estate Tips & News Hisar",

  description:
    "Read latest blogs on property dealing in Hisar. Get expert real estate tips, market updates & advice from top property consultants & agents in Hisar.",

  keywords: [
  "property blog hisar",
  "real estate blog hisar",
  "property tips hisar",
  "real estate news hisar",
  "property market hisar",
  "property advice hisar",
  "property consultant blog hisar",
  "buy sell property tips hisar"
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