import Hero from "../../components/Hero";
import DealersSection from "../../components/DealersSection";
import HisarMarketOverview from "../../components/HisarMarketOverview";
import GurgaonFaqSection from "../../components/GurgaonFaqSection";
export default function HomePage({domain}) {
    
  return (
    
    <>
      {/* <Navbar /> */}
      <Hero />
      <DealersSection  domain ={domain}/>
      <HisarMarketOverview/>
      <GurgaonFaqSection/>
      {/* <Footer /> */}
    </>
  );
}
