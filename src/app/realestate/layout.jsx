"use client";

import Navbar from "@/templates/design8/components/Navbar";
import Footer from "@/templates/design8/components/Footer";
import { CityProvider } from "@/context/design7api/CityContext";
import ScrollToTop from "@/templates/design8/components/ScrollToTop";
import GlobalScrollFix from "@/templates/design8/components/GlobalScrollFix";
import { BlogProvider } from "@/context/design7api/blogcontext";
export default function Layout({ children }) {
  return (
    <CityProvider>
      <BlogProvider>
      <Navbar />
      <GlobalScrollFix />
      {children}
      <ScrollToTop />
      <Footer />
      </BlogProvider>
    </CityProvider>
  );
}

