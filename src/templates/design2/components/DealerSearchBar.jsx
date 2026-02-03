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
          relative
          flex items-center
          bg-white/90
          backdrop-blur-xl
          border border-[#d4af37]/40
          rounded-full
          px-6
          py-3
          shadow-xl
          focus-within:shadow-2xl
          focus-within:border-[#d4af37]
          transition
        "
      >
        {/* LEFT ICON */}
        <div className="mr-4 text-[#d4af37]">
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
          placeholder="Search dealers by name, city or location..."
          className="
            flex-1
            text-base md:text-lg
            outline-none
            bg-transparent
            placeholder-black/50
            text-black
          "
        />

        {/* SEARCH BUTTON */}
        <button
          onClick={() => onSearch(query)}
          className="
            ml-4
            w-11 h-11
            rounded-full
            bg-gradient-to-br from-[#d4af37] to-[#b8964a]
            text-black
            flex items-center justify-center
            shadow-lg
            hover:scale-105
            transition
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
