"use client";

import { useState } from "react";
import Link from "next/link";
import ContactPopup from "./ContactPopup";   // 👈 ONLY NEW IMPORT

export default function DealerCard({ dealer }) {

  const [openPopup, setOpenPopup] = useState(false);   // 👈 ONLY NEW STATE

  const getInitials = (name = "") => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div
      className="
        bg-white
        border border-red-500/30
        rounded-2xl
        shadow-lg hover:shadow-2xl
        transition
        p-5
        relative
        overflow-hidden
        flex flex-col
        
      "
    >
      {/* ❤️ HEART ICON */}
      <button
        className="
          absolute top-4 right-4
          w-9 h-9
          rounded-full
          border border-red-500/40
          bg-white
          flex items-center justify-center
          text-red-600
          hover:bg-red-600
          hover:text-white
          transition
          z-10
        "
        title="Save dealer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
          />
        </svg>
      </button>

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center font-bold text-white shadow-md">
          {getInitials(dealer.name)}
        </div>

        <div>
          <h3 className="text-lg font-bold text-black leading-tight">
            {dealer.name}
          </h3>
          <p className="text-xs text-black/60">
            {dealer.address}
            {/* {dealer.state && `, ${dealer.state}`} */}
          </p>
          <p
        className="
          text-xs
          text-black
          mb-1
          flex items-start gap-2
          leading-snug mt-2
        "
      >
        <span className="mt-0.5 shrink-0 text-red-600">
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
        <span className="line-clamp-2">{dealer.city}</span>
      </p>
        </div>
      </div>

      {/* ADDRESS */}
      

      {/* TAGS */}
      {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
        <div className="mb-4 max-h-[44px] overflow-hidden flex flex-wrap gap-1.5">
          {dealer.tags.map((tag, index) => (
            <span
              key={index}
              className="
                text-[10px]
                px-2 py-0.5
                rounded-full
                bg-red-500/15
                text-black
                border border-red-500/30
                whitespace-nowrap
              "
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* BUTTONS FIXED AT BOTTOM */}
      <div className="mt-auto">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent mb-4" />

        <div className="flex gap-3">

          {/* 👇 ONLY THIS PART CHANGED */}
          <button
            onClick={() => setOpenPopup(true)}
            className="
              flex-1 text-center py-2 rounded-md
              bg-red-600 text-white text-sm font-semibold
              hover:bg-red-700 transition
            "
          >
            Contact
          </button>

          <Link
            href={`/dealer/${dealer.slug}`}
            className="
              flex-1 text-center py-2 rounded-md
              border border-red-600 text-black text-sm font-semibold
              hover:bg-red-600 hover:text-white transition
            "
          >
            View Details
          </Link>
        </div>
      </div>

      {/* 👇 ONLY NEW ADDITION AT BOTTOM */}
      <ContactPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
        dealerName={dealer.name}
      />

    </div>
  );
}
