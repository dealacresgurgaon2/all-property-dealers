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
      <div className="relative bg-white rounded-2xl shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f1c3cf] overflow-hidden group">

  {/* TOP LINE */}
  <div className="absolute top-0 left-0 w-full h-[2px] md:h-1 bg-gradient-to-r from-[#D02752] to-[#8A244B]" />

  <div className="p-4 md:p-5 flex flex-col h-full relative z-10">

    {/* HEADER */}
    <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">

      {/* AVATAR */}
      <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#D02752] to-[#8A244B] flex items-center justify-center font-bold text-white text-sm md:text-lg shadow-md">
        {getInitials(dealer.name)}
      </div>

      {/* TEXT */}
      <div className="flex-1">
        <h3 className="text-sm md:text-lg font-bold text-[#8A244B] leading-snug line-clamp-2">
          {dealer.name}
        </h3>

        <div className="flex items-start gap-1 mt-1">
  <svg
    className="w-3.5 h-3.5 text-[#D02752] mt-[2px] flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.25c-4.418 0-8 3.582-8 8 0 5.25 8 11.5 8 11.5s8-6.25 8-11.5c0-4.418-3.582-8-8-8zm0 11a3 3 0 100-6 3 3 0 000 6z" />
  </svg>

  <p className="text-xs text-gray-500 line-clamp-2">
    {dealer.address}
  </p>
</div>
      </div>
    </div>

    {/* LOCATION */}
    <div className="bg-[#fde6ec] border border-[#f3c6d1] rounded-lg p-2 md:p-3 mb-3">
      <div className="flex items-center gap-2">

        {/* <svg className="w-4 h-4 md:w-5 md:h-5 text-[#D02752]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.25c-4.418 0-8 3.582-8 8 0 5.25 8 11.5 8 11.5s8-6.25 8-11.5c0-4.418-3.582-8-8-8zm0 11a3 3 0 100-6 3 3 0 000 6z" />
        </svg> */}

        <p className="text-xs md:text-sm text-gray-700">
          {dealer.city}
        </p>

      </div>
    </div>

    {/* TAGS */}
    {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
      <div className="mb-3 md:mb-4 flex flex-wrap gap-1.5 md:gap-2">
        {dealer.tags.map((tag, index) => (
          <span
            key={index}
            className="text-[10px] md:text-[11px] px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-[#fde6ec] text-[#D02752] border border-[#f3c6d1]"
          >
            {tag}
          </span>
        ))}
      </div>
    )}

    {/* BUTTONS */}
    <div className="mt-auto">
      <div className="flex gap-2 md:gap-3">

        <button
          onClick={() => setOpenPopup(true)}
          className="flex-1 text-center py-2 md:py-2.5 rounded-lg bg-gradient-to-r from-[#D02752] to-[#8A244B] text-white text-xs md:text-sm font-semibold"
        >
          Contact
        </button>

        <Link
          href={`/estate-agent/${dealer.slug}`}
          className="flex-1 text-center py-2 md:py-2.5 rounded-lg border border-[#D02752] text-[#D02752] text-xs md:text-sm font-semibold"
        >
          Details
        </Link>

      </div>
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