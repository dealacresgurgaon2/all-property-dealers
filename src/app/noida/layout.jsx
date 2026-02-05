import Navbar from "@/templates/design6/components/Navbar";
import Footer from "@/templates/design6/components/Footer";

export default function Layout({ children }) {
  return (
    <>

      <Navbar />
      {children}
      <Footer />
     
    </>
  );
}
