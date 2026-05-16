import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import DealersSection from "../../components/DealersSection";
import Footer from "../../components/Footer";
import HisarMarketOverview from "../../components/HisarMarketOverview";
import HisarFAQ from "../../components/HisarFAQ";

export default function HomePage({domain}) {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <DealersSection domain={domain} />
      <HisarMarketOverview/>
      <HisarFAQ/>
      {/* <Footer /> */}
    </>
  );
}
