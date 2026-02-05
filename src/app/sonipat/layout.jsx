import Navbar from "@/templates/design4/components/Navbar";
import Footer from "@/templates/design4/components/Footer";

export default function Layout({ children }) {
  return (
    <>

      <Navbar />
      {children}
      <Footer />
     
    </>
  );
}
