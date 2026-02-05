import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import DealersSection from "../../components/DealersSection";
import Footer from "../../components/Footer";

export default function HomePage({domain}) {
    setTimeout(()=>{
        console.log("domain in home page",domain);
    },1000);
            console.log("domain in home page",domain);

    
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <DealersSection domain={domain} />
      {/* <Footer /> */}
    </>
  );
}
