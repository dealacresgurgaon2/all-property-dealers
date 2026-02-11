import Navbar from "@/templates/design2/components/Navbar";
import Footer from "@/templates/design2/components/Footer";
import { BlogProvider } from "@/context/blogcontext/BlogContext";
import { DealerProvider } from "@/context/propertydealercontext/DealerContext";
import ScrollToTop from "@/templates/design2/components/ScrollToTop";
import GlobalScrollFix from "@/templates/design2/components/GlobalScrollFix";
export default function Layout({ children }) {
  const domain = typeof window !== "undefined"
    ? window.location.hostname
    : "";
  return (
    <>
    <BlogProvider>
      <Navbar />
      <GlobalScrollFix />
      {children}
       <ScrollToTop />
      <Footer  domain={domain}/>
      </BlogProvider>
    </>
  );
}
