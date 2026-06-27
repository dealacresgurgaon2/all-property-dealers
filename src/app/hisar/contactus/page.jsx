import ContactUsPage from "./ContactUsPage";

export const metadata = {
  title:
    "Contact Us | Property Dealer in Hisar | Real Estate Agent Hisar",

  description:
    "Contact the best property dealers & real estate agents in Hisar. Get free consultation for buying, selling or renting property in Hisar. Call or enquire now!",

  keywords: [
  "contact property dealer hisar",
  "property dealer contact hisar",
  "real estate agent contact hisar",
  "property enquiry hisar",
  "buy property hisar contact",
  "sell property hisar contact",
  "rent property hisar contact",
  "property consultant contact hisar",
  "free property consultation hisar"
],

  alternates: {
    canonical:
      "https://www.propertydealerinhisar.com/contactus",
  },

  openGraph: {
    title:
      "Contact Us | Property Dealer Hisar",

    description:
      "Connect with trusted property dealers and real estate consultants.",

    url:
      "https://www.propertydealerinhisar.com/contactus",

    siteName: "Property Dealer Hisar",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Property Dealer Hisar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Us | Property Dealer Hisar",

    description:
      "Get in touch with trusted real estate agents and property consultants.",

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