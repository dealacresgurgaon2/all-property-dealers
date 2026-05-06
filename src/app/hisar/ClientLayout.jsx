"use client";

import Navbar from "@/templates/design3/components/Navbar";
import Footer from "@/templates/design3/components/Footer";
import { BlogProvider } from "@/context/blogcontext/BlogContext";
import { DealerProvider } from "@/context/propertydealercontext/DealerContext";
import ScrollToTop from "@/templates/design3/components/ScrollToTop";
import GlobalScrollFix from "@/templates/design3/components/GlobalScrollFix";
import { SearchProvider } from "@/context/SearchContext/SearchContext";
export default function Layout({ children }) {

  const domain = typeof window !== "undefined"
    ? window.location.hostname
    : "";

  return (
      <DealerProvider>
    <BlogProvider>
      <SearchProvider>
        <Navbar />
        <GlobalScrollFix />
        {children}
        <ScrollToTop />
        <Footer domain={domain} />
        </SearchProvider>
    </BlogProvider>
      </DealerProvider>
  );
}
