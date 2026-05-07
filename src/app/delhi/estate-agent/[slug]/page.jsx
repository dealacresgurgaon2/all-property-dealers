import DealerPage from "@/templates/design5/pages/[slug]/page";

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const formattedTitle = slug
    ?.split("-")
    ?.slice(0, -1)
    ?.join(" ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title:
      `${formattedTitle} | Best Property Dealer in Delhi`,

    description:
      `${formattedTitle} is a trusted property dealer and real estate agent in Delhi offering services for buying, selling, and renting residential & commercial properties. Connect with verified property consultants in Delhi today.`,

    keywords: [
      formattedTitle,
      `${formattedTitle} Property Dealer`,
      `${formattedTitle} Real Estate Agent`,
      "Property Dealer in Delhi",
      "Best Property Dealer Delhi",
      "Top Real Estate Agent Delhi",
      "Buy Property in Delhi",
      "Sell Property in Delhi",
      "Rent Property in Delhi",
      "Commercial Property Dealer Delhi",
      "Residential Property Dealer Delhi",
      "Property Consultant Delhi",
      "Real Estate Broker Delhi",
      "Luxury Property Delhi",
      "Property Dealer New Delhi",
    ],

    alternates: {
      canonical:
        `https://www.propertydealerindelhi.com/delhi/estate-agent/${slug}`,
    },

    openGraph: {
      title:
        `${formattedTitle} | Best Property Dealer in Delhi`,

      description:
        `${formattedTitle} is a verified property dealer in Delhi for residential and commercial properties.`,

      url:
        `https://www.propertydealerindelhi.com/delhi/estate-agent/${slug}`,

      siteName: "Property Dealer Delhi",

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
        `${formattedTitle} | Property Dealer Delhi`,

      description:
        `Find trusted property dealer and real estate consultant ${formattedTitle} in Delhi.`,

      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page({ params }) {
  return <DealerPage params={params} />;
}