import DealerPage from "@/templates/design1/pages/[slug]/page";

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const formattedTitle = slug
    ?.split("-")
    ?.slice(0, -1)
    ?.join(" ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title:
      `${formattedTitle} | Best Property Dealer in Gurgaon`,

    description:
      `${formattedTitle} is a trusted property dealer and real estate agent in Gurgaon offering services for buying, selling, and renting residential & commercial properties. Connect with verified property consultants in Gurgaon today.`,

    keywords: [
      formattedTitle,
      `${formattedTitle} Property Dealer`,
      `${formattedTitle} Real Estate Agent`,
      "Property Dealer in Gurgaon",
      "Best Property Dealer Gurgaon",
      "Top Real Estate Agent Gurgaon",
      "Buy Property in Gurgaon",
      "Sell Property in Gurgaon",
      "Rent Property in Gurgaon",
      "Commercial Property Dealer Gurgaon",
      "Residential Property Dealer Gurgaon",
      "Property Consultant Gurgaon",
      "Real Estate Broker Gurgaon",
      "Luxury Property Gurgaon",
      "Property Dealer Gurugram",
    ],

    alternates: {
      canonical:
        `https://www.propertydealeringurgaon.com/gurgaon/estate-agent/${slug}`,
    },

    openGraph: {
      title:
        `${formattedTitle} | Best Property Dealer in Gurgaon`,

      description:
        `${formattedTitle} is a verified property dealer in Gurgaon for residential and commercial properties.`,

      url:
        `https://www.propertydealeringurgaon.com/gurgaon/estate-agent/${slug}`,

      siteName: "Property Dealer Gurgaon",

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
        `${formattedTitle} | Property Dealer Gurgaon`,

      description:
        `Find trusted property dealer and real estate consultant ${formattedTitle} in Gurgaon.`,

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