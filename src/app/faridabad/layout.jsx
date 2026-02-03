import Navbar from "@/templates/design2/components/Navbar";
import Footer from "@/templates/design2/components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
