import Navbar from "@/templates/design5/components/Navbar";
import Footer from "@/templates/design5/components/Footer";

export default function Layout({ children }) {
  return (
    <>

      <Navbar />
      {children}
      <Footer />
     
    </>
  );
}
