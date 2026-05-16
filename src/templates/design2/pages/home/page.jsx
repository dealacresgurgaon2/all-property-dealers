import Hero from "../../components/Hero";
import DealersSection from "../../components/DealersSection";
import HisarMarketOverview from "../../components/HisarMarketOverview";
import FaridabadFaq from "../../components/FaridabadFaq";
export default function HomePage({domain}) {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <DealersSection domain={domain} />
      <HisarMarketOverview/>
      <FaridabadFaq/>
      {/* <Footer /> */}
    </>
  );
}
