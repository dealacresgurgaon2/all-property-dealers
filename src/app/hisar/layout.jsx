// app/delhi/layout.jsx

import ClientLayout from "./ClientLayout";

export const metadata = {
  title:
    "Property Dealer in Hisar | Top Real Estate Agents & Brokers Hisar",

  description:
    "Find trusted property dealers in Hisar. Connect with top real estate agents, property consultants & brokers in Hisar for buy, sell & rent. Free consultation available!",

  keywords: [
    "property dealer in hisar",
    "property dealers in hisar",
    "real estate agent in hisar",
    "real estate agents in hisar",
    "property consultant hisar",
    "property broker hisar",
    "property dealer hisar",
    "real estate broker hisar",
    "property agents in hisar",
    "buy property in hisar",
    "sell property hisar",
    "rent property hisar",
    "best property dealer hisar",
    "top property dealer hisar",
    "property dealer near me hisar",
    "plot dealer hisar",
    "makaan dealer hisar",
    "zameen dealer hisar",
    "commercial property dealer hisar",
    "residential property dealer hisar"
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinhisar.com",
  },
};

export default function Layout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}