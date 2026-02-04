"use client";

import { useState } from "react";
import Link from "next/link";

export default function DealerCard({ dealer }) {
  const [liked, setLiked] = useState(false);

  const getInitials = (name = "") => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div
      className="
        group relative
        bg-white
        border border-gray-200
        rounded-2xl
        overflow-hidden
        shadow-sm
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-[#ff7a1a]/40
      "
    >
      {/* TOP HEADER GRADIENT BAR */}
      <div className="h-10 bg-gradient-to-r from-[#ff7a1a] to-[#ff9d4d] flex items-center px-4">
        <span className="text-white text-xs font-semibold tracking-wide">
        
        </span>
      </div>

      {/* ❤️ HEART BUTTON */}
      <button
        onClick={() => setLiked(!liked)}
        className={`
          absolute top-3 right-3 z-20
          transition-all duration-300
          bg-white rounded-full p-1.5 shadow
          ${liked ? "scale-110" : "scale-100"}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={liked ? "#ef4444" : "none"}
          stroke={liked ? "#ef4444" : "#64748b"}
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z"
          />
        </svg>
      </button>

      {/* MAIN CONTENT */}
      <div className="p-5 flex gap-4">
        {/* LOGO BOX */}
        <div className="flex-shrink-0">
          <div
            className="
              bg-gradient-to-br from-[#ff7a1a] to-[#ff9d4d]
              text-white
              font-bold text-xl
              rounded-xl
              w-[76px] h-[76px]
              flex items-center justify-center
              transition-transform duration-300
              group-hover:scale-110
              shadow-lg
            "
          >
            {getInitials(dealer.name)}
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="flex-1 flex flex-col">

          <h3 className="text-lg font-bold text-gray-800 leading-tight">
            {dealer.name}
          </h3>

          {/* LOCATION */}
          <div className="mt-2 flex items-start gap-2">
            <span className="text-[#ff7a1a] mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
                />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
            </span>

            <span className="text-sm text-gray-600 line-clamp-2">
              {dealer.address}
            </span>
          </div>

          <p className="text-xs text-gray-500 mt-1">
             {dealer.city}
          </p>

          {/* TAG BADGES */}
          {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {dealer.tags.map((tag, index) => (
                <span
                  key={index}
                  className="
                    text-[11px]
                    px-2.5 py-1
                    rounded-full
                    bg-[#ff7a1a]/10
                    text-[#ff7a1a]
                    font-medium
                    transition
                    group-hover:bg-[#ff7a1a]/20
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* FOOTER ACTIONS */}
          <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">

            <a
              href={`/contact?dealer=${dealer.slug}`}
              className="
                px-4 py-2
                bg-[#ff7a1a]
                text-white
                text-xs
                rounded-lg
                font-semibold
                hover:bg-[#ff6b00]
                transition
                shadow-sm
              "
            >
              Contact Now
            </a>

            <Link
              href={{
                pathname: `/adv-dse`,
                query: {
                  name: dealer.name,
                  city: dealer.city,
                },
              }}
              className="
                px-4 py-2
                border border-[#ff7a1a]
                text-[#ff7a1a]
                text-xs
                rounded-lg
                font-semibold
                hover:bg-[#ff7a1a]
                hover:text-white
                transition
              "
            >
              View Profile →
            </Link>

          </div>

        </div>
      </div>

      {/* SUBTLE HOVER GLOW */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl ring-2 ring-[#ff7a1a]/20" />

    </div>
  );
}
