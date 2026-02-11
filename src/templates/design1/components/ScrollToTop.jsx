"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop({ children }) {

  const pathname = usePathname();

  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  // 🔥 THIS IS MAIN FIX FOR REFRESH / BACK ISSUE
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      const footerThreshold = docHeight - windowHeight - 200;

      if (scrollY >= footerThreshold) {
        setNearFooter(true);
      } else {
        setNearFooter(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {children}

      {visible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed
            bottom-6
            right-6
            z-50
            w-12 h-12
            rounded-full
            flex items-center justify-center
            shadow-xl
            hover:scale-110
            transition-all
            duration-300

            ${
              nearFooter
                ? "bg-white text-[#1e40af] border border-[#1e40af]"
                : "bg-[#1e40af] text-white"
            }
          `}
          title="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
