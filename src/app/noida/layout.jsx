// app/delhi/layout.jsx

import ClientLayout from "./ClientLayout";

export const metadata = {
  title:
    "Property Dealer in Noida | Top Real Estate Agents & Brokers Noida",

  description:
    "Find trusted property dealers in Noida. Connect with top real estate agents, brokers & consultants across all Noida sectors, Expressway & Jal Vayu Vihar. Buy, sell or rent property now!",

  keywords: [
    "property dealer in noida",
    "property dealers in noida",
    "real estate agent in noida",
    "real estate agents in noida",
    "property consultant noida",
    "property broker noida",
    "property dealer noida",
    "real estate broker noida",
    "property agent noida",
    "buy property in noida",
    "sell property noida",
    "rent property noida",
    "best property dealer noida",
    "top property dealer noida",
    "property dealer near me noida",
    "noida expressway property dealer",
    "sector 150 noida property dealer",
    "sector 62 noida property dealer",
    "sector 137 noida property dealer",
    "jal vayu vihar property dealer",
    "residential property dealer noida",
    "commercial property dealer noida",
    "flat dealer noida",
    "plot dealer noida",
    "apartment dealer noida",
    "luxury property dealer noida",
    "property dealer in greater noida",
    "new noida property dealer"
  ],

  alternates: {
    canonical:
      "https://www.propertydealerinnoida.com",
  },
};

export default function Layout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}