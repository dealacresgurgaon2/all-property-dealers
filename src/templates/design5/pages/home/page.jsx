import Hero from "../../components/Hero";
import DealersSection from "../../components/DealersSection";


export default function HomePage({domain}) {
  return (
    <>
      
      <Hero />
      <DealersSection domain={domain} />
    </>
  );
}
