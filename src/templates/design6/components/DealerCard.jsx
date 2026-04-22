"use client";

import { useState } from "react";
import Link from "next/link";
import GreenContactPopup from "./GreenContactPopup";   // 👈 ONLY NEW IMPORT

export default function DealerCard({ dealer }) {

  const [openPopup, setOpenPopup] = useState(false);   // 👈 ONLY NEW STATE

  const getInitials = (name = "") => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-500/20 overflow-hidden group">

      {/* TOP GREEN ACCENT BAR */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-700"></div>

      {/* SAVE BUTTON */}
      <button
        className="
          absolute top-4 right-4
          w-9 h-9
          rounded-full
          border border-green-500/40
          bg-white
          flex items-center justify-center
          
          hover:bg-green-600
          hover:text-white
          transition-all
          z-10
        "
        title="Save dealer"
      >
       ❤
      </button>

      <div className="p-5 flex flex-col h-full">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-4">

          <div
            className="
              w-14 h-14 rounded-xl
              bg-gradient-to-br from-green-500 to-green-700
              flex items-center justify-center
              font-bold text-white text-lg
              shadow-md
              group-hover:scale-105
              transition-all
            "
          >
            {getInitials(dealer.name)}
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              {dealer.name}
            </h3>

            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
              <span className="flex items-center gap-1">
                 {dealer.address}
              </span>
            </div>
          </div>
        </div>

        {/* ADDRESS CARD */}
      <div className="bg-green-50/50 border border-green-200 rounded-lg p-3 mb-3">
  <div className="flex items-center gap-2">

    {/* Location SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-green-600 flex-shrink-0"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-4.418 0-8 3.582-8 8 0 5.25 8 11.5 8 11.5s8-6.25 8-11.5c0-4.418-3.582-8-8-8zm0 11a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>

    {/* Location Text */}
    <p className="text-sm text-gray-700 leading-snug line-clamp-2">
      {dealer.city}
      {dealer.state && `, ${dealer.state}`}
    </p>

  </div>
</div>


        {/* TAGS */}
        {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
          <div className="mb-4 max-h-[60px] overflow-hidden flex flex-wrap gap-2">
            {dealer.tags.map((tag, index) => (
              <span
                key={index}
                className="
                  text-[11px]
                  px-2.5 py-1
                  rounded-full
                  bg-green-100
                  text-green-800
                  border border-green-300
                  whitespace-nowrap
                  hover:bg-green-600
                  hover:text-white
                  transition
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* BUTTONS */}
        <div className="mt-auto">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/40 to-transparent mb-4" />

          <div className="flex gap-3">

            {/* 👇 ONLY THIS PART CHANGED */}
            <button
              onClick={() => setOpenPopup(true)}
              className="
                flex-1 text-center py-2.5 rounded-lg
                bg-green-600 text-white text-sm font-semibold
                hover:bg-green-700 transition
                shadow
              "
            >
              Contact Now
            </button>

            <Link
             href={`/estate-agent/${dealer.slug}`}
              className="
                flex-1 text-center py-2.5 rounded-lg
                border border-green-600 text-green-700 text-sm font-semibold
                hover:bg-green-600 hover:text-white transition
              "
            >
              View Details
            </Link>
          </div>
        </div>

      </div>

      {/* 👇 ONLY NEW ADDITION AT BOTTOM */}
      <GreenContactPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />

    </div>
  );
}
