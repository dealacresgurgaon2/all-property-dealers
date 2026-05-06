import BlogDetail from "@/templates/design5/pages/blogs/[slug]/page";

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const formattedTitle = slug
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${formattedTitle} | Property Dealer India`,

    description:
      `Read complete details about ${formattedTitle}. Explore property insights, investment tips, and real estate market trends.`,

    keywords: [
      formattedTitle,
      "Property Blog",
      "Real Estate Blog",
      "Property Investment",
      "Real Estate News",
    ],

    alternates: {
      canonical:
        `https://www.propertydealerindelhi.com/blogs/${slug}`,
    },

    openGraph: {
      title:
        `${formattedTitle} | Property Dealer India`,

      description:
        `Explore detailed insights about ${formattedTitle}.`,

      url:
        `https://www.propertydealerindelhi.com/blogs/${slug}`,

      siteName: "Property Dealer India",

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
        `${formattedTitle} | Property Dealer India`,

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