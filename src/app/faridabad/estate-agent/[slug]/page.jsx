import DealerPage from "@/templates/design2/pages/[slug]/page";

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const formattedTitle = slug
    ?.split("-")
    ?.slice(0, -1)
    ?.join(" ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title:
      `${formattedTitle} | Best Property Dealer in Faridabad`,

    description:
      `${formattedTitle} is a trusted property dealer and real estate agent in Faridabad offering services for buying, selling, and renting residential & commercial properties. Connect with verified property consultants in Faridabad today.`,

    keywords: [
      formattedTitle,
      `${formattedTitle} Property Dealer`,
      `${formattedTitle} Real Estate Agent`,
      "Property Dealer in Faridabad",
      "Best Property Dealer Faridabad",
      "Top Real Estate Agent Faridabad",
      "Buy Property in Faridabad",
      "Sell Property in Faridabad",
      "Rent Property in Faridabad",
      "Commercial Property Dealer Faridabad",
      "Residential Property Dealer Faridabad",
      "Property Consultant Faridabad",
      "Real Estate Broker Faridabad",
      "Greater Faridabad Property Dealer",
      "Luxury Property Faridabad",
    ],

    alternates: {
      canonical:
        `https://www.propertydealerinfaridabad.com/faridabad/estate-agent/${slug}`,
    },

    openGraph: {
      title:
        `${formattedTitle} | Best Property Dealer in Faridabad`,

      description:
        `${formattedTitle} is a verified property dealer in Faridabad for residential and commercial properties.`,

      url:
        `https://www.propertydealerinfaridabad.com/faridabad/estate-agent/${slug}`,

      siteName: "Property Dealer Faridabad",

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
        `${formattedTitle} | Property Dealer Faridabad`,

      description:
        `Find trusted property dealer and real estate consultant ${formattedTitle} in Faridabad.`,

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