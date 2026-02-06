"use client";

import Navbar from "@/templates/design3/components/Navbar";
import Footer from "@/templates/design3/components/Footer";
import { BlogProvider } from "@/context/blogcontext/BlogContext";
import { DealerProvider } from "@/context/propertydealercontext/DealerContext";
import ScrollToTop from "@/templates/design3/components/ScrollToTop";

export default function Layout({ children }) {

  const domain = typeof window !== "undefined"
    ? window.location.hostname
    : "";

  return (
      <DealerProvider>
    <BlogProvider>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer domain={domain} />
    </BlogProvider>
      </DealerProvider>
  );
}
