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
          bg-white
          rounded-2xl
          border border-indigo-200
          shadow-md
          hover:shadow-xl
          transition-all
          p-2
        "
      >
        <div className="flex items-center gap-3">

          {/* ICON - SAME AS BEFORE */}
          <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
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

          {/* INPUT AREA */}
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
              placeholder-gray-400
              text-gray-800
              px-2
            "
          />

          {/* SEARCH BUTTON - NEW STYLE */}
          <button
            onClick={() => onSearch(query)}
            className="
              px-6 py-3
              rounded-xl
              bg-gradient-to-r from-indigo-600 to-purple-600
              text-white
              font-semibold
              hover:opacity-90
              transition
              flex items-center gap-2
            "
          >
            Search

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

        {/* BOTTOM HINT STRIP */}
        {/* <div className="mt-2 text-xs text-gray-400 pl-1">
          Try: “Delhi”, “Gurgaon”, “Commercial Dealer”
        </div> */}

      </div>

    </div>
  );
}
