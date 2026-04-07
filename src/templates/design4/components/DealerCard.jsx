"use client";

import { useState } from "react";
import Link from "next/link";
import GreenContactPopup from "./GreenContactPopup";

export default function DealerCard({ dealer }) {
  const [openPopup, setOpenPopup] = useState(false);

  const getInitials = (name = "") => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f1c3cf] overflow-hidden group hover:-translate-y-1">

      {/* TOP PREMIUM ACCENT */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D02752] to-[#8A244B]" />

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#D02752]/5 to-[#8A244B]/5 pointer-events-none" />

      {/* SAVE */}
      {/* <button
        className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#e7a7b7] bg-white flex items-center justify-center hover:bg-gradient-to-r hover:from-[#D02752] hover:to-[#8A244B] hover:text-white transition-all z-10 shadow-sm"
        title="Save dealer"
      >
        ❤
      </button> */}

      <div className="p-5 flex flex-col h-full relative z-10">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-4">

          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D02752] to-[#8A244B] flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:scale-105 transition-all">
            {getInitials(dealer.name)}
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#8A244B] leading-tight">
              {dealer.name}
            </h3>

            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
              {dealer.address}
            </p>
          </div>
        </div>

        {/* LOCATION */}
        <div className="bg-[#fde6ec] border border-[#f3c6d1] rounded-lg p-3 mb-3">
          <div className="flex items-center gap-2">

            <svg
              className="w-5 h-5 text-[#D02752]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.25c-4.418 0-8 3.582-8 8 0 5.25 8 11.5 8 11.5s8-6.25 8-11.5c0-4.418-3.582-8-8-8zm0 11a3 3 0 100-6 3 3 0 000 6z" />
            </svg>

            <p className="text-sm text-gray-700">
              {dealer.city}
              {dealer.state && `, ${dealer.state}`}
            </p>

          </div>
        </div>

        {/* TAGS */}
        {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {dealer.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[11px] px-2.5 py-1 rounded-full bg-[#fde6ec] text-[#D02752] border border-[#f3c6d1] hover:bg-gradient-to-r hover:from-[#D02752] hover:to-[#8A244B] hover:text-white transition"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* BUTTONS */}
        <div className="mt-auto">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D02752]/40 to-transparent mb-4" />

          <div className="flex gap-3">

            <button
              onClick={() => setOpenPopup(true)}
              className="flex-1 text-center py-2.5 rounded-lg bg-gradient-to-r from-[#D02752] to-[#8A244B] text-white text-sm font-semibold hover:scale-[1.04] transition shadow-lg"
            >
              Contact Now
            </button>

            <Link
             href={`/dealer/${dealer.slug}`}
              className="flex-1 text-center py-2.5 rounded-lg border border-[#D02752] text-[#D02752] text-sm font-semibold hover:bg-gradient-to-r hover:from-[#D02752] hover:to-[#8A244B] hover:text-white transition"
            >
              View Details
            </Link>

          </div>
        </div>

      </div>

      <GreenContactPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />

    </div>
  );
}