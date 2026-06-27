import ContactFaridabad from "./ContactFaridabad";

export const metadata = {
  title:
    "Contact Us | Property Dealer in Faridabad | Real Estate Agent Faridabad",

  description:
    "Contact the best property dealers & real estate agents in Faridabad. Get free expert consultation for buying, selling or renting property in Faridabad. Call or enquire now!",

  keywords: [
  "contact property dealer faridabad",
  "property dealer contact faridabad",
  "real estate agent contact faridabad",
  "property enquiry faridabad",
  "buy property faridabad contact",
  "sell property faridabad",
  "rent property faridabad contact",
  "property consultant contact faridabad",
  "free property consultation faridabad",
  "greater faridabad property enquiry",
  "neharpar property contact"
],

  alternates: {
    canonical:
      "https://www.propertydealerinfaridabad.com/contactus",
  },

  openGraph: {
    title:
      "Contact Property Dealers in Faridabad",

    description:
      "Connect with trusted property dealers and real estate consultants in Faridabad.",

    url:
      "https://www.propertydealerinfaridabad.com/contactus",

    siteName: "Property Dealer Faridabad",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Property Dealers Faridabad",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Property Dealers in Faridabad",

    description:
      "Get in touch with trusted real estate agents in Faridabad.",

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
      <ContactFaridabad />
    </main>
  );
}