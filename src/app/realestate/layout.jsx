// app/delhi/layout.jsx

import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Top Property Dealers Near Me | Buy, Sell & Rent | Delhi NCR & Haryana",
  description:
    "Find verified property dealers near you in Delhi, Noida, Gurgaon & Haryana. Connect with trusted real estate agents for buying, selling & renting homes, plots & commercial properties.",
     keywords: [
  "property dealers near me" ,
  "real estate agents Delhi NCR", 
  "property dealers Haryana" ,
  "buy sell rent property India",
],
 alternates: {
    canonical:
      "https://www.realestateagentsnearme.in",
  },
};

export default function Layout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}