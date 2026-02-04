import Navbar from "@/templates/design1/components/Navbar";
import Footer from "@/templates/design1/components/Footer";

export default function Layout({ children }) {
    
  return (
    <>

      <Navbar />
      {children}
      <Footer />
     
    </>
  );
}
