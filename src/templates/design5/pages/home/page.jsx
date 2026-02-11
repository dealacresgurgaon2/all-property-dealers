import Hero from "../../components/Hero";
import DealersSection from "../../components/DealersSection";


export default function HomePage({domain}) {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <DealersSection domain={domain} />
      {/* <Footer /> */}
    </>
  );
}
