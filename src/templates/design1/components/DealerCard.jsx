"use client";

import { useState } from "react";
import Link from "next/link";
import ContactPopup from "./ContactPopup";

export default function DealerCard({ dealer }) {
  const [liked, setLiked] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

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
        rounded-xl
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1 sm:hover:-translate-y-2
        hover:shadow-xl
        hover:border-[#1e40af]/40
      "
    >
      {/* Hover ring */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 ring-2 ring-[#1e40af]/20" />

      {/* Like Button */}
      <button
        onClick={() => setLiked(!liked)}
        aria-label="Add to favourites"
        className={`absolute top-3 right-3 z-20 transition-all duration-300 ${
          liked ? "scale-110" : "scale-100"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill={liked ? "#ef4444" : "none"}
          stroke={liked ? "#ef4444" : "#64748b"}
          strokeWidth="1.8"
          className="drop-shadow-sm hover:scale-110 transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z"
          />
        </svg>
      </button>

      <div className="flex gap-3 sm:gap-4 p-4 relative z-10">

        {/* Avatar */}
        <div className="flex-shrink-0">
          <div
            className="
              bg-gradient-to-br from-[#1e40af] to-[#1d4ed8]
              text-white
              font-bold
              text-lg sm:text-xl
              rounded-lg
              px-4 py-3 sm:px-5 sm:py-4
              min-w-[60px] sm:min-w-[72px]
              flex items-center justify-center
              transition-transform duration-300
              group-hover:scale-105
              shadow-md
            "
          >
            {getInitials(dealer.name)}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">

          <h3 className="text-sm sm:text-base font-bold text-[#0b1f33]">
            {dealer.name}
          </h3>

          {/* Address */}
          <p className="text-xs text-gray-600 mt-1 flex items-start gap-2 leading-snug">
            <span className="mt-0.5 text-[#1e40af] shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
            <span className="line-clamp-2">{dealer.address}</span>
          </p>

          <p className="text-xs text-black mt-1">
            {dealer.city}
            {dealer.state && `, ${dealer.state}`}
          </p>

          {/* Tags */}
          {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {dealer.tags.slice(0, 5).map((tag, index) => (
                <span
                  key={index}
                  className="
                    text-[11px] sm:text-[13px]
                    px-2 py-0.5
                    rounded-full
                    bg-[#1e40af]/10
                    text-[#1e40af]
                    transition
                    group-hover:bg-[#1e40af]/20
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-2 sm:gap-3 mt-4 pt-3 border-t border-gray-200">

            <button
              onClick={() => setOpenPopup(true)}
              className="
                flex-1
                py-2
                bg-[#1e40af]
                text-white
                text-[11px] sm:text-xs
                rounded-md
                font-semibold
                hover:bg-[#1d4ed8]
                transition
              "
            >
              Contact us
            </button>

            <Link
              href={{
                pathname: `dealer/adv-dse`,
                query: {
                  name: dealer.name,
                  city: dealer.city,
                },
              }}
              className="
                flex-1
                py-2
                border border-[#1e40af]
                text-[#1e40af]
                text-[11px] sm:text-xs
                rounded-md
                font-semibold
                hover:bg-[#1e40af]
                hover:text-white
                transition
                text-center
              "
            >
              View Details
            </Link>

          </div>
        </div>
      </div>

      {/* Popup */}
      <ContactPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
        dealerName={dealer.name}
      />
    </div>
  );
}