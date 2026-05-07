import BlogDetail from "@/templates/design7/pages/blogs/[slug]/page";

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const formattedTitle = slug
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title:
      `${formattedTitle} | Property Dealer Haryana`,

    description:
      `Read complete details about ${formattedTitle}. Explore property investment tips, Haryana real estate insights, market trends, and buying & selling guides.`,

    keywords: [
      formattedTitle,
      "Property Blog",
      "Real Estate Blog",
      "Haryana Property News",
      "Property Investment Tips",
      "Real Estate Market Trends",
      "Buy Property Guide",
      "Sell Property Tips",
      "Haryana Real Estate",
      "Property Insights",
      "Property Updates India",
    ],

    alternates: {
      canonical:
        `https://www.propertydealerinharyana.com/blogs/${slug}`,
    },

    openGraph: {
      title:
        `${formattedTitle} | Property Dealer Haryana`,

      description:
        `Explore detailed insights about ${formattedTitle} including property trends and investment tips.`,

      url:
        `https://www.propertydealerinharyana.com/blogs/${slug}`,

      siteName: "Property Dealer Haryana",

      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: formattedTitle,
        },
      ],

      locale: "en_IN",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${formattedTitle} | Property Dealer Haryana`,

      description:
        `Read complete details about ${formattedTitle}.`,

      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page() {
  return <BlogDetail />;
}