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

    return () =>
      window.removeEventListener(
        "scroll",
        toggleVisibility
      );

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
      title="Back to top"
      className="
        group
        fixed
        bottom-6
        right-6
        z-50

        w-14 h-14
        rounded-2xl

        bg-gradient-to-br
        from-[#76153C]
        to-[#5A0E24]

        text-white

        flex items-center justify-center

        shadow-[0_10px_30px_rgba(118,21,60,0.28)]

        hover:scale-110
        hover:shadow-[0_15px_40px_rgba(118,21,60,0.38)]

        transition-all
        duration-300
      "
    >

      {/* SOFT GLOW */}
      <div
        className="
          absolute inset-0
          rounded-2xl
          bg-white/10
          opacity-0
          group-hover:opacity-100
          transition
        "
      />

      {/* ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="
          relative z-10
          w-6 h-6
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 15l7-7 7 7"
        />

      </svg>

    </button>

  );
}