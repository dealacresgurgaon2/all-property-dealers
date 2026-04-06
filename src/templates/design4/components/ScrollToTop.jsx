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

      setVisible(scrollY > 300);

      const footerThreshold = docHeight - windowHeight - 200;
      setNearFooter(scrollY >= footerThreshold);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      title="Back to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        shadow-xl
        transition-all duration-300

        hover:scale-110 hover:shadow-2xl
        active:scale-95
        cursor-pointer

        ${
          nearFooter
            ? "bg-white text-[#D02752] border border-[#D02752]"
            : "bg-gradient-to-r from-[#D02752] to-[#8A244B] text-white"
        }
      `}
    >
      <span className="text-lg font-bold">↑</span>
    </button>
  );
}