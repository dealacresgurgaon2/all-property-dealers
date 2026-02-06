import Navbar from "@/templates/design2/components/Navbar";
import Footer from "@/templates/design2/components/Footer";
import { BlogProvider } from "@/context/blogcontext/BlogContext";
import { DealerProvider } from "@/context/propertydealercontext/DealerContext";
export default function Layout({ children }) {
  return (
    <>
    <BlogProvider>
      <Navbar />
      {children}
      <Footer />
      </BlogProvider>
    </>
  );
}
