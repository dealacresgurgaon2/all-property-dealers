"use client";

import { useState } from "react";
import Link from "next/link";
import GoldContactPopup from "./GoldContactPopup";

export default function DealerCard({ dealer }) {

  const [openPopup, setOpenPopup] = useState(false);

  const getInitials = (name = "") => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div className="bg-white border border-[#d4af37]/30 rounded-2xl shadow-lg hover:shadow-2xl transition p-4 md:p-5 relative overflow-hidden flex flex-col h-full">

      {/* ❤️ HEART ICON */}
      <button className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#d4af37]/40 bg-white flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="md:w-[18px] md:h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      </button>

      {/* HEADER */}
      <div className="flex gap-3 md:gap-4 mb-3">

        {/* AVATAR */}
        <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8964a] flex items-center justify-center font-bold text-black shadow-md text-sm md:text-base">
          {getInitials(dealer.name)}
        </div>

        {/* TEXT */}
        <div className="flex flex-col gap-1 min-w-0">

          {/* NAME */}
          <h3 className="text-base md:text-xl font-bold text-black leading-tight line-clamp-1">
            {dealer.name}
          </h3>

          {/* ADDRESS + ICON */}
          <div className="flex items-start gap-1 text-black mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              className="md:w-[14px] md:h-[14px] text-[#d4af37] mt-[2px] flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
              <circle cx="12" cy="11" r="2.5" />
            </svg>

            <p className="text-xs md:text-sm text-black/80 leading-snug line-clamp-2">
              {dealer.address}
            </p>
          </div>

          {/* CITY */}
          <p className="text-[11px] md:text-sm font-medium text-black/70">
            City : {dealer.city}{dealer.state && `, ${dealer.state}`}
          </p>

        </div>
      </div>

      {/* TAGS */}
      {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
        <div className="mb-5 md:mb-6 max-h-[46px] overflow-hidden flex flex-wrap gap-1.5">
          {dealer.tags.map((tag, index) => (
            <span
              key={index}
              className="text-[9px] md:text-[10px] px-2 py-0.5 rounded-full bg-[#d4af37]/15 text-black border border-[#d4af37]/30 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* BUTTONS */}
      <div className="mt-auto">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mb-3 md:mb-4" />

        <div className="flex gap-2 md:gap-3">

          <button
            onClick={() => setOpenPopup(true)}
            className="flex-1 text-center py-2 text-xs md:text-sm rounded-md bg-[#d4af37] text-black font-semibold hover:bg-[#c9a227] transition"
          >
            Contact
          </button>

          <Link
           href={`/dealer/${dealer.slug}`}
            className="flex-1 text-center py-2 text-xs md:text-sm rounded-md border border-[#d4af37] text-black font-semibold hover:bg-[#d4af37] transition"
          >
           View Details
          </Link>

        </div>
      </div>

      {/* POPUP */}
      <GoldContactPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />

    </div>
  );
}