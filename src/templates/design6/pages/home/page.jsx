import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import DealersSection from "../../components/DealersSection";
import Footer from "../../components/Footer";
import HisarMarketOverview from "../../components/HisarMarketOverview";
import NoidaFAQSection from "../../components/NoidaFAQSection";

export default function HomePage({domain}) {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <DealersSection domain={domain} />
      <HisarMarketOverview/>
      <NoidaFAQSection/>
      {/* <Footer /> */}
    </>
  );
}
