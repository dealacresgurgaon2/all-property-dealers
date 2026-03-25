"use client";

import { useState } from "react";

export default function DealerSearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(query);
    }
  };

  return (
    <div className="mb-10 max-w-[900px] mx-auto">

      <div
        className="
          relative flex items-center
          bg-white
          border border-[#f3c6d1]
          rounded-full
          px-6 py-3
          shadow-lg
          focus-within:shadow-2xl
          focus-within:border-[#D02752]
          transition-all duration-300
          group
        "
      >

        {/* GLOW EFFECT */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D02752]/10 to-[#8A244B]/10 opacity-0 group-focus-within:opacity-100 transition pointer-events-none"></div>

        {/* ICON */}
        <div className="mr-4 text-[#D02752]">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
            />
            <circle cx="12" cy="11" r="2.5" />
          </svg>
        </div>

        {/* INPUT */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search dealers, sectors or locations..."
          className="
            flex-1
            text-base md:text-lg
            outline-none
            bg-transparent
            placeholder-gray-400
            text-gray-800
          "
        />

        {/* BUTTON */}
        <button
          onClick={() => onSearch(query)}
          className="
            ml-4
            w-11 h-11
            rounded-full
            bg-gradient-to-r from-[#D02752] to-[#8A244B]
            text-white
            flex items-center justify-center
            shadow-lg
            hover:scale-110
            hover:shadow-xl
            transition-all duration-300
          "
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
              strokeLinecap="round"
            />
          </svg>
        </button>

      </div>

    </div>
  );
}