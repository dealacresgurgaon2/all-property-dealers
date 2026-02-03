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
    <div className="mb-8 max-w-[830px]">
      <div
        className="
          flex items-center
          bg-[#f2e8e1]
          border-2 border-[#422c18]
          rounded-lg
          px-6
          py-2
          shadow-md
          focus-within:border-[#422c18]
          focus-within:shadow-lg
          transition
        "
      >
        {/* 📍 LEFT LOCATION ICON */}
        <svg
          className="
            w-6 h-6
            text-[#422c18]
            mr-4 shrink-0
          "
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

        {/* INPUT */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search property dealers by name, city or area..."
          className="
            flex-1
            text-lg
            outline-none
            bg-transparent
            placeholder-[#7a5c42]
            text-[#422c18]
          "
        />

        {/* 🔍 SEARCH BUTTON */}
        <button
          onClick={() => onSearch(query)}
          className="
            ml-4
            p-3
            rounded-xl
            bg-[#422c18]
            hover:bg-[#5a3c26]
            transition
            text-[#f2e8e1]
            flex items-center justify-center
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
