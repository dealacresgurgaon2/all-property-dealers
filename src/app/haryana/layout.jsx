// app/delhi/layout.jsx

import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Property Dealers Near Me | Buy, Sell & Rent – Delhi, Noida & Haryana",
  description:
    "India's fastest-growing property dealer directory. Find verified real estate agents near you in Delhi, Noida, Gurgaon & all Haryana cities for buying, selling & renting properties.",
     keywords: [
  "property dealers near me",
  "real estate agents near me",
  "property dealer India",
  "buy sell rent property Delhi Noida Haryana",
  
],
 alternates: {
    canonical:
      "https://www.propertydealersnearme.com/",
  },
};

export default function Layout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}