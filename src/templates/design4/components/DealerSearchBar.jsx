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
    <div className="mb-8 max-w-[860px] mx-auto">
      <div
        className="
          group
          flex items-center
          bg-white
          border border-gray-300
          rounded-xl
          px-5
          py-3
          shadow-sm
          transition-all duration-300
          focus-within:border-[#ff7a1a]
          focus-within:shadow-md
        "
      >
        {/* 📍 LOCATION ICON */}
        <span className="mr-4 text-[#ff7a1a] shrink-0 transition group-focus-within:scale-110">
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
        </span>

        {/* INPUT */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search dealers by name, city or area..."
          className="
            flex-1
            bg-transparent
            outline-none
            text-base md:text-lg
            text-gray-800
            placeholder-gray-400
          "
        />

        {/* 🔍 SEARCH BUTTON */}
        <button
          onClick={() => onSearch(query)}
          className="
            ml-4
            px-4 py-2.5
            rounded-lg
            bg-[#ff7a1a]
            hover:bg-[#ff6b00]
            transition
            text-white
            flex items-center justify-center
            shadow-sm
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
