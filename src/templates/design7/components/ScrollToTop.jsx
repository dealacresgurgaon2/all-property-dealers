"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
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
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-12 h-12
        rounded-full
        bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
        text-white
        flex items-center justify-center
        shadow-xl
        hover:scale-110
        transition-all
        duration-300
      "
      title="Back to top"
    >
      ↑
    </button>
  );
}
