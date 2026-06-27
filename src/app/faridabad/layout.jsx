// app/delhi/layout.jsx

import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Property Dealer in Faridabad | Top Real Estate Agents & Brokers Faridabad",
  description:
    " Find trusted property dealers in Faridabad. Connect with top real estate agents, brokers & consultants in NIT, Neharpar, Ashoka Enclave & all sectors. Buy, sell or rent property now!",

    keywords: [
  "property dealer in faridabad",
  "property dealers in faridabad",
  "real estate agent in faridabad",
  "real estate agents in faridabad",
  "property consultant faridabad",
  "property broker faridabad",
  "property dealer faridabad",
  "real estate broker faridabad",
  "property agent faridabad",
  "buy property in faridabad",
  "sell property faridabad",
  "rent property faridabad",
  "best property dealer faridabad",
  "top property dealer faridabad",
  "property dealer near me faridabad",
  "NIT faridabad property dealer",
  "neharpar property dealer",
  "greater faridabad property dealer",
  "ashoka enclave property dealer",
  "residential property dealer faridabad",
  "commercial property dealer faridabad",
  "flat dealer faridabad",
  "plot dealer faridabad",
  "makaan dealer faridabad",
  "zameen dealer faridabad"
],
 alternates: {
    canonical:
      "https://www.propertydealerinfaridabad.com/",
  },

};

export default function Layout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}