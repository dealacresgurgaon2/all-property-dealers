import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import DealersSection from "../../components/DealersSection";
import Footer from "../../components/Footer";
import Abc from "../../components/Abc";
import CityCards from "../../components/CityCards";
import PropertyGuideIntro from "../../components/PropertyGuideIntro";
import PropertyFAQ from "../../components/PropertyFAQ";
export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <CityCards/>
      <DealersSection />
      <PropertyGuideIntro/>
      <PropertyFAQ/>
      {/* <Abc/> */}
      {/* <Footer /> */}
    </>
  );
}
