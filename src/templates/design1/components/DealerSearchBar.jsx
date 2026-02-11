"use client";

import { useState } from "react";

export default function DealerSearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);

    // Call parent search function
    await onSearch(query);

    // Small delay for smooth UX
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="mb-8 max-w-[860px] mx-auto">
      <div
        className="
          group
          flex items-center
          bg-white
          border border-[#1e40af]/30
          rounded
          px-5
          py-3
          shadow-sm
          transition-all duration-300
          focus-within:border-[#1e40af]
          focus-within:shadow-lg
        "
      >
        {/* 📍 LOCATION ICON */}
        <span className="mr-4 text-[#1e40af] shrink-0 transition group-focus-within:scale-110">
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
            text-[#0b1f33]
            placeholder-gray-400
          "
          disabled={loading}
        />

        {/* 🔍 SEARCH BUTTON WITH LOADER */}
        <button
          onClick={handleSearch}
          disabled={loading}
          className={`
            ml-4
            px-4 py-2.5
            rounded-lg
            transition
            text-white
            flex items-center justify-center
            shadow-sm
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#1e40af] hover:bg-[#1d4ed8]"
            }
          `}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/60 border-t-white rounded-full animate-spin"></div>
          ) : (
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
          )}
        </button>
      </div>
    </div>
  );
}
