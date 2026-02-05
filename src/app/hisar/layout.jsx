import Navbar from "@/templates/design3/components/Navbar";
import Footer from "@/templates/design3/components/Footer";
import { BlogProvider } from "@/context/blogcontext/BlogContext";
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
