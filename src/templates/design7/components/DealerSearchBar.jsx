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
    <div className="mb-10 max-w-[900px] mx-auto px-3">

      <div
        className="
          relative
          bg-white
          rounded-2xl
          border border-indigo-200
          shadow-md
          hover:shadow-xl
          transition-all
          p-2 sm:p-3
          overflow-hidden
        "
      >
        <div className="flex items-center gap-2 sm:gap-3">

          {/* ICON */}
          <div className="p-2 sm:p-3 rounded-xl bg-indigo-50 text-indigo-600">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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
            placeholder="Search dealers..."
            className="
              flex-1
              min-w-0
              text-sm sm:text-base md:text-lg
              outline-none
              bg-transparent
              placeholder-gray-400
              text-gray-800
              px-1
            "
          />

          {/* BUTTON */}
          <button
            onClick={() => onSearch(query)}
            className="
              px-3 sm:px-6
              py-2 sm:py-3
              rounded-xl
              bg-gradient-to-r from-indigo-600 to-purple-600
              text-white
              text-xs sm:text-base
              font-semibold
              hover:opacity-90
              transition
              flex items-center gap-1 sm:gap-2
              whitespace-nowrap
            "
          >
            Search
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
    </div>
  );
}