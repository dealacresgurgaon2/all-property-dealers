import BlogPage from "@/templates/design3/pages/[slug]/page";

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const formattedTitle = slug
    ?.split("-")
    ?.slice(0, -1)
    ?.join(" ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title:
      `${formattedTitle} | Best Property Dealer in Hisar`,

    description:
      `${formattedTitle} is a trusted property dealer and real estate agent in Hisar offering services for buying, selling, and renting residential & commercial properties. Connect with verified property consultants in Hisar today.`,

    keywords: [
      formattedTitle,
      `${formattedTitle} Property Dealer`,
      `${formattedTitle} Real Estate Agent`,
      "Property Dealer in Hisar",
      "Best Property Dealer Hisar",
      "Top Real Estate Agent Hisar",
      "Buy Property in Hisar",
      "Sell Property in Hisar",
      "Rent Property in Hisar",
      "Commercial Property Dealer Hisar",
      "Residential Property Dealer Hisar",
      "Property Consultant Hisar",
      "Real Estate Broker Hisar",
      "Luxury Property Hisar",
    ],

    alternates: {
      canonical:
        `https://www.propertydealerinhisar.com/estate-agent/${slug}`,
    },

    openGraph: {
      title:
        `${formattedTitle} | Best Property Dealer in Hisar`,

      description:
        `${formattedTitle} is a verified property dealer in Hisar for residential and commercial properties.`,

      url:
        `https://www.propertydealerinhisar.com/estate-agent/${slug}`,

      siteName: "Property Dealer Hisar",

      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: formattedTitle,
        },
      ],

      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${formattedTitle} | Property Dealer Hisar`,

      description:
        `Find trusted property dealer and real estate consultant ${formattedTitle} in Hisar.`,

      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page({ params }) {
  return <BlogPage params={params} />;
}