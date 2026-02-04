"use client";

import Navbar from "@/templates/design7/components/Navbar";
import Footer from "@/templates/design7/components/Footer";
import { CityProvider } from "@/context/design7api/CityContext";
import ScrollToTop from "@/templates/design7/components/ScrollToTop";

export default function Layout({ children }) {
  return (
    <CityProvider>
      <Navbar />
      
      {children}
      <ScrollToTop />
      <Footer />
    </CityProvider>
  );
}

