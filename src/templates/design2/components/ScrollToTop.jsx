"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {

  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Show button after 300px scroll
      if (scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // 🔥 FOOTER DETECTION LOGIC
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

  if (!visible) return null;

  return (
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
            ? "bg-white text-[#d4af37] border border-[#d4af37]"
            : "bg-[#d4af37] text-white"
        }
      `}
      title="Back to top"
    >
      ↑
    </button>
  );
}
