import ContactUsPage from "./ContactUsPage";

export const metadata = {
  title:
    "Contact Us | Property Dealer in Delhi | Real Estate Agent Delhi",

  description:
    "Contact the best property dealers & real estate agents in Delhi. Get free expert consultation for buying, selling or renting property across South, North, East, West & Central Delhi. Enquire now!",

  keywords: [
  "contact property dealer delhi",
  "property dealer contact delhi",
  "real estate agent contact delhi",
  "property enquiry delhi",
  "buy property delhi contact",
  "sell property delhi",
  "rent property delhi contact",
  "property consultant contact delhi",
  "free property consultation delhi",
  "south delhi property enquiry",
  "north delhi property contact",
  "commercial property enquiry delhi",
  "luxury property contact delhi"
],

  alternates: {
    canonical:
      "https://www.propertydealerindelhi.com/contact",
  },

  openGraph: {
    title:
      "Contact Property Dealer Delhi",

    description:
      "Connect with trusted property dealers and real estate consultants in Delhi.",

    url:
      "https://www.propertydealerindelhi.com/contact",

    siteName: "Property Dealer Delhi",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Property Dealer Delhi",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Property Dealer Delhi",

    description:
      "Get in touch with trusted real estate agents and consultants in Delhi.",

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
      <ContactUsPage />
    </main>
  );
}