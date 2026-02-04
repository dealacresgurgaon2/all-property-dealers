import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import DealersSection from "../../components/DealersSection";
import Footer from "../../components/Footer";

export default function HomePage({domain}) {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <DealersSection  domain ={domain}/>
      {/* <Footer /> */}
    </>
  );
}
