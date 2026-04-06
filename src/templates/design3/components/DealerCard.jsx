"use client";

import { useState } from "react";
import Link from "next/link";
import PurpleContactPopup from "./PurpleContactPopup";

export default function DealerCard({ dealer }) {
  const [openPopup, setOpenPopup] = useState(false);

  const getInitials = (name = "") => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div
      className={`relative bg-white border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col md:flex-row
      ${
        dealer.subscription
          ? "border-[#5E23DC]"
          : "border-[#5E23DC]"
      }`}
    >
    

      {/* LEFT LOGO */}
      <div className="hidden md:flex w-32 bg-[#5E23DC] items-center justify-center text-white font-bold text-3xl">
        {getInitials(dealer.name)}
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 px-4 py-4 flex flex-col">

        {/* NAME + BADGES */}
        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">

          <h3 className="text-lg md:text-xl font-bold text-[#5E23DC]">
            {dealer.name}
          </h3>

          {/* Show only if subscription true */}
          {dealer.subscription && (
            <div className="flex items-center gap-2">

              <span className="
                flex items-center gap-1
                text-[12px]
                px-3 py-1
                rounded-full
                
                text-green-700
                font-semibold
                border border-green-300
                shadow-sm
              ">
                ✔ Verified
              </span>

             <span
  className="
    flex items-center gap-1
    text-[12px]
    px-3 py-1
    rounded-full
    text-yellow-700
    font-semibold
    border border-yellow-300
    shadow-sm
  "
>
  <span className="animate-pulse text-yellow-500 drop-shadow-[0_0_6px_rgba(234,179,8,0.8)]">
    ⭐
  </span>
  Trusted
</span>


            </div>
          )}
        </div>

        {/* ADDRESS */}
        <p className="text-xs text-gray-700 mb-1 flex items-start gap-2 leading-snug">
          <span className="mt-0.5 shrink-0 text-[#5E23DC]">
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

        {/* CITY */}
        <p className="text-xs font-semibold text-gray-800 mb-2">
          City : {dealer.city}, {dealer.city && `  ${dealer.state}`}
        </p>

        {/* TAGS */}
        {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2 ">
            {dealer.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[11px] px-2 py-0.5 rounded-full bg-[#5E23DC]/10 text-[#5E23DC] border border-[#5E23DC]/40 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex-1"></div>

        {/* BUTTONS */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#5E23DC]/20">

          <button
            onClick={() => setOpenPopup(true)}
            className="px-4 py-1.5 rounded-md bg-[#5E23DC] text-white text-sm font-semibold hover:bg-[#4b1cb3] transition"
          >
            Contact Us
          </button>

          <Link
            href={{
              pathname: `/dealer/${dealer.slug}`,
              query: {
                name: dealer.name,
                city: dealer.city,
              },
            }}
            className="px-4 py-1.5 rounded-md border border-[#5E23DC] text-[#5E23DC] text-sm font-semibold hover:bg-[#5E23DC] hover:text-white transition"
          >
            View Details
          </Link>

        </div>
      </div>

      {/* POPUP */}
      <PurpleContactPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </div>
  );
}
