// app/delhi/layout.jsx

import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Property Dealer in Gurgaon | Top Real Estate Agents & Brokers Gurgaon",
  description:
    "Find trusted property dealers in Gurgaon. Connect with top real estate agents, brokers & consultants in DLF, Sohna Road, Golf Course Road & all sectors. Buy, sell or rent now!",
     keywords: [
  "property dealer in gurgaon",
  "property dealers in gurgaon",
  "real estate agent in gurgaon",
  "real estate agents in gurgaon",
  "property consultant gurgaon",
  "property broker gurgaon",
  "property dealer gurgaon",
  "real estate broker gurgaon",
  "property agent gurgaon",
  "buy property in gurgaon",
  "sell property gurgaon",
  "rent property gurgaon",
  "best property dealer gurgaon",
  "top property dealer gurgaon",
  "property dealer near me gurgaon",
  "property dealer in gurugram",
  "real estate agent gurugram",
  "property consultant gurugram",
  "DLF property dealer gurgaon",
  "Golf Course Road property dealer",
  "Sohna Road property dealer gurgaon",
  "residential property dealer gurgaon",
  "commercial property dealer gurgaon",
  "flat dealer gurgaon",
  "plot dealer gurgaon",
  "apartment dealer gurgaon"
],
 alternates: {
    canonical:
      "https://www.propertydealeringurgaon.com",
  },
};

export default function Layout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}