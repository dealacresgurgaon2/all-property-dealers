"use client";

import Navbar from "@/templates/design5/components/Navbar";
import Footer from "@/templates/design5/components/Footer";
import { BlogProvider } from "@/context/blogcontext/BlogContext";
import { DealerProvider } from "@/context/propertydealercontext/DealerContext";
import ScrollToTop from "@/templates/design5/components/ScrollToTop";
import GlobalScrollFix from "@/templates/design5/components/GlobalScrollFix";
export default function Layout({ children }) {

  const domain = typeof window !== "undefined"
    ? window.location.hostname
    : "";

  return (
      <DealerProvider>
    <BlogProvider>
        <Navbar />
        <GlobalScrollFix />
        {children}
        <ScrollToTop />
        <Footer domain={domain} />
    </BlogProvider>
      </DealerProvider>
  );
}
