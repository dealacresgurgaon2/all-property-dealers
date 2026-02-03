import Navbar from "@/templates/design3/components/Navbar";
import Footer from "@/templates/design3/components/Footer";

export default function Layout({ children }) {
  return (
    <>

      <Navbar />
      {children}
      <Footer />
     
    </>
  );
}
