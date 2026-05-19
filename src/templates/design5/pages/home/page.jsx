import Hero from "../../components/Hero";
import DealersSection from "../../components/DealersSection";
import HisarMarketOverview from "../../components/HisarMarketOverview";
import DelhiRealEstateFAQ from "../../components/DelhiRealEstateFAQ";


export default function HomePage({domain}) {
  return (
    <>
      
      <Hero />
      <DealersSection domain={domain} />
      <HisarMarketOverview/>
      <DelhiRealEstateFAQ/>
    </>
  );
}
