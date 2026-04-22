"use client";

import Navbar from "@/templates/design1/components/Navbar";
import Footer from "@/templates/design1/components/Footer";
import { BlogProvider } from "@/context/blogcontext/BlogContext";
import { DealerProvider } from "@/context/propertydealercontext/DealerContext";
import ScrollToTop from "@/templates/design1/components/ScrollToTop";
export default function Layout({ children }) {

  const domain =
    typeof window !== "undefined"
      ? window.location.hostname
      : "";

  return (
    <DealerProvider>
      <BlogProvider>
        <Navbar />

        <ScrollToTop>
          {children}
        </ScrollToTop>

        <Footer domain={domain} />

      </BlogProvider>
    </DealerProvider>
  );
}
