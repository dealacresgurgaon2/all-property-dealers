import Blogs from "@/templates/design5/pages/blogs/page";

export const metadata = {
  title:
    "Real Estate Blogs & Property News | Property Dealer India",

  description:
    "Read the latest real estate blogs, property investment tips, market trends, buying guides, and property news across Delhi, Gurgaon, Noida, Faridabad, and Haryana.",

  keywords: [
    "Real Estate Blogs",
    "Property News",
    "Property Investment Tips",
    "Real Estate Market Trends",
    "Buy Property Guide",
    "Property Dealer Blog",
    "Delhi Property News",
    "Gurgaon Real Estate",
    "Noida Property Market",
    "Haryana Property Updates",
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