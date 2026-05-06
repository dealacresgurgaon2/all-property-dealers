import BlogDetail from "@/templates/design6/pages/blogs/[slug]/page";

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const formattedTitle = slug
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title:
      `${formattedTitle} | Property Dealer Noida`,

    description:
      `Read complete details about ${formattedTitle}. Explore property investment tips, Noida real estate insights, market trends, and buying & selling guides.`,

    keywords: [
      formattedTitle,
      "Property Blog",
      "Real Estate Blog",
      "Noida Property News",
      "Property Investment Tips",
      "Real Estate Market Trends",
      "Buy Property Guide",
      "Sell Property Tips",
      "Noida Real Estate",
      "Property Insights",
      "Property Updates India",
    ],

    alternates: {
      canonical:
        `https://www.propertydealerinnoida.com/blogs/${slug}`,
    },

    openGraph: {
      title:
        `${formattedTitle} | Property Dealer Noida`,

      description:
        `Explore detailed insights about ${formattedTitle} including property trends and investment tips.`,

      url:
        `https://www.propertydealerinnoida.com/blogs/${slug}`,

      siteName: "Property Dealer Noida",

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
        `${formattedTitle} | Property Dealer Noida`,

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