import ContactGurgaon from "./ContactGurgaon";

export const metadata = {
  title:
    " Contact Us | Property Dealer in Gurgaon | Real Estate Agent Gurugram",

  description:
    "Contact the best property dealers & real estate agents in Gurgaon. Get free expert consultation for buying, selling or renting property in Gurgaon. Enquire now!",

  keywords: [
  "contact property dealer gurgaon",
  "property dealer contact gurgaon",
  "real estate agent contact gurgaon",
  "property enquiry gurgaon",
  "buy property gurgaon contact",
  "sell property gurgaon",
  "rent property gurgaon contact",
  "property consultant contact gurgaon",
  "free property consultation gurgaon",
  "gurugram property enquiry"
],

  alternates: {
    canonical:
      "https://www.propertydealeringurgaon.com/contactus",
  },

  openGraph: {
    title:
      "Contact Property Dealer Gurgaon",

    description:
      "Connect with trusted property dealers and real estate consultants in Gurgaon.",

    url:
      "https://www.propertydealeringurgaon.com/contactus",

    siteName: "Property Dealer Gurgaon",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Property Dealer Gurgaon",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Property Dealer Gurgaon",

    description:
      "Get in touch with trusted real estate agents and consultants in Gurgaon.",

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
      <ContactGurgaon />
    </main>
  );
}