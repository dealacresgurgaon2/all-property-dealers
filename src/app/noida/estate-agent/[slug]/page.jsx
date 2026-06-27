import DealerPage from "@/templates/design6/pages/[slug]/page";

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const formattedTitle = slug
    ?.split("-")
    ?.slice(0, -1)
    ?.join(" ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title:
      `${formattedTitle} | Best Property Dealer in Noida`,

    description:
      `${formattedTitle} is a trusted property dealer and real estate agent in Noida offering services for buying, selling, and renting residential & commercial properties. Connect with verified property consultants in Noida today.`,

    keywords: [
      formattedTitle,
      `${formattedTitle} Property Dealer`,
      `${formattedTitle} Real Estate Agent`,
      "Property Dealer in Noida",
      "Best Property Dealer Noida",
      "Top Real Estate Agent Noida",
      "Buy Property in Noida",
      "Sell Property in Noida",
      "Rent Property in Noida",
      "Commercial Property Dealer Noida",
      "Residential Property Dealer Noida",
      "Property Consultant Noida",
      "Real Estate Broker Noida",
      "Luxury Property Noida",
      "Greater Noida Property Dealer",
    ],

    alternates: {
      canonical:
        `https://www.propertydealerinnoida.com/estate-agent/${slug}`,
    },

    openGraph: {
      title:
        `${formattedTitle} | Best Property Dealer in Noida`,

      description:
        `${formattedTitle} is a verified property dealer in Noida for residential and commercial properties.`,

      url:
        `https://www.propertydealerinnoida.com/estate-agent/${slug}`,

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
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${formattedTitle} | Property Dealer Noida`,

      description:
        `Find trusted property dealer and real estate consultant ${formattedTitle} in Noida.`,

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