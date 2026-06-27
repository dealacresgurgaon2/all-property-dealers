import ContactNoida from "./ContactNoida";

export const metadata = {
  title:
    "Contact Us | Property Dealer in Noida | Real Estate Agent Noida",

  description:
    "Contact the best property dealers & real estate agents in Noida. Get free expert consultation for buying, selling or renting property across all Noida sectors. Call or enquire now!",

  keywords: [
  "contact property dealer noida",
  "property dealer contact noida",
  "real estate agent contact noida",
  "property enquiry noida",
  "buy property noida contact",
  "sell property noida",
  "rent property noida contact",
  "property consultant contact noida",
  "free property consultation noida",
  "noida expressway property enquiry",
  "sector 150 noida contact",
  "luxury property enquiry noida"
],

  alternates: {
    canonical:
      "https://www.propertydealerinnoida.com/contactus",
  },

  openGraph: {
    title:
      "Contact Property Dealer Noida",

    description:
      "Connect with trusted property dealers and real estate consultants in Noida.",

    url:
      "https://www.propertydealerinnoida.com/contactus",

    siteName: "Property Dealer Noida",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Property Dealer Noida",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Property Dealer Noida",

    description:
      "Get in touch with trusted real estate agents and consultants in Noida.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main>
      <ContactNoida />
    </main>
  );
}