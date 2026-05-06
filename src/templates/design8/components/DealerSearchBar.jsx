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
          overflow-hidden
          rounded-3xl
          border border-[#F3D9E3]
          bg-gradient-to-br
          from-[#FFF8FA]
          via-white
          to-[#FFF3F7]
          shadow-[0_10px_35px_rgba(118,21,60,0.08)]
          hover:shadow-[0_15px_45px_rgba(118,21,60,0.12)]
          transition-all
          duration-300
          p-2
        "
      >

        {/* SOFT GLOW */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#76153C]/5 blur-3xl rounded-full" />

        <div className="relative z-10 flex items-center gap-2 sm:gap-3">

          {/* ICON */}
          <div
            className="
              w-12 h-12
              rounded-2xl
              bg-gradient-to-br
              from-[#76153C]
              to-[#5A0E24]
              text-white
              flex items-center justify-center
              shadow-md
              shrink-0
            "
          >

            <svg
              className="w-5 h-5"
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
            placeholder="Search dealers, city, location..."
            className="
              flex-1
              min-w-0
              bg-transparent
              outline-none
              text-gray-800
              placeholder-gray-400
              text-sm sm:text-base
              px-1
            "
          />

          {/* BUTTON */}
          <button
            onClick={() => onSearch(query)}
            className="
              h-12
              px-5 sm:px-6
              rounded-2xl
              bg-gradient-to-r
              from-[#76153C]
              to-[#5A0E24]
              text-white
              text-sm sm:text-base
              font-semibold
              hover:opacity-90
              transition
              flex items-center gap-2
              shadow-[0_8px_20px_rgba(118,21,60,0.18)]
              whitespace-nowrap
            "
          >

            Search

            <svg
              className="w-4 h-4"
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