import DealerPage from "@/templates/design8/pages/[slug]/page";
export async function generateMetadata({ params }) {

  const { slug } = await params;

  const formattedTitle = slug
    ?.split("-")
    ?.slice(0, -1)
    ?.join(" ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title:
      `${formattedTitle} | Best Property Dealer in Haryana`,

    description:
      `${formattedTitle} is a trusted property dealer and real estate agent in Haryana offering services for buying, selling, and renting residential & commercial properties. Connect with verified property consultants in Haryana today.`,

    keywords: [
      formattedTitle,
      `${formattedTitle} Property Dealer`,
      `${formattedTitle} Real Estate Agent`,
      "Property Dealer in Haryana",
      "Best Property Dealer Haryana",
      "Top Real Estate Agent Haryana",
      "Buy Property in Haryana",
      "Sell Property in Haryana",
      "Rent Property in Haryana",
      "Commercial Property Dealer Haryana",
      "Residential Property Dealer Haryana",
      "Property Consultant Haryana",
      "Real Estate Broker Haryana",
      "Luxury Property Haryana",
    ],

    alternates: {
      canonical:
        `https://www.realestateagentsnearme.in/estate-agent/${slug}`,
    },

    openGraph: {
      title:
        `${formattedTitle} | Best Property Dealer in Haryana`,

      description:
        `${formattedTitle} is a verified property dealer in Haryana for residential and commercial properties.`,

      url:
        `https://www.realestateagentsnearme.in/estate-agent/${slug}`,

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
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${formattedTitle} | Property Dealer Haryana`,

      description:
        `Find trusted property dealer and real estate consultant ${formattedTitle} in Haryana.`,

      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
export default function Page() {
  return <DealerPage />;
}
