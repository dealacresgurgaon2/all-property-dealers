"use client";

import { useState } from "react";
import Link from "next/link";
import DealerThemePopup from "./DealerThemePopup";

export default function DealerCard({ dealer }) {
  const [popupOpen, setPopupOpen] = useState(false);

  const formatCity = (city = "") =>
    city.toLowerCase().replace(/\s+/g, "-");

  const getInitials = (name = "") => {
    const words = name.trim().split(" ");

    if (words.length === 1)
      return words[0].slice(0, 2).toUpperCase();

    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-[#F3D9E3]
        bg-gradient-to-br
        from-[#FFF8FA]
        via-[#FFFDFD]
        to-[#FFF2F6]
        shadow-[0_10px_35px_rgba(118,21,60,0.08)]
        hover:-translate-y-1
        hover:shadow-[0_15px_45px_rgba(118,21,60,0.14)]
        transition-all
        duration-300
      "
    >

      {/* SOFT GLOW */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#76153C]/5 blur-3xl rounded-full" />

      <div className="relative z-10 p-5">

        {/* PROFILE */}
        <div className="flex items-start gap-4">

          {/* AVATAR */}
          <div
            className="
              w-14 h-14
              min-w-[56px]
              rounded-2xl
              bg-gradient-to-br
              from-[#76153C]
              to-[#5A0E24]
              flex items-center justify-center
              text-white
              font-bold
              text-lg
              shadow-md
            "
          >
            {getInitials(dealer.name)}
          </div>

          {/* INFO */}
          <div className="flex-1 min-w-0">

            <h3 className="text-lg font-bold text-[#2A0E18] line-clamp-1">
              {dealer.name}
            </h3>

            <div className="flex items-start gap-2 mt-1 text-sm text-gray-600">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mt-[2px] text-[#76153C] shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>

              <p className="line-clamp-2">
                {dealer.address}
              </p>

            </div>

          </div>

        </div>

        {/* CITY */}
        <div
          className="
            mt-5
            rounded-2xl
            border border-[#F3D9E3]
            bg-white/70
            px-4 py-3
          "
        >

          <p className="text-sm text-gray-700 line-clamp-1">
            {dealer.city}
            {dealer.state && `, ${dealer.state}`}
          </p>

        </div>

        {/* TAGS */}
        {Array.isArray(dealer.tags) &&
          dealer.tags.length > 0 && (

            <div className="flex flex-wrap gap-2 mt-5">

              {dealer.tags.slice(0, 5).map((tag, i) => (

                <span
                  key={i}
                  className="
                    px-3 py-1
                    rounded-full
                    text-xs
                    font-medium
                    bg-[#FCE7EF]
                    border border-[#F8D4E1]
                    text-[#76153C]
                  "
                >
                  {tag}
                </span>

              ))}

            </div>

          )}

        {/* BUTTONS */}
        <div className="flex gap-3 mt-6">

          {/* CONTACT */}
          <button
            onClick={() => setPopupOpen(true)}
            className="
              flex-1
              h-11
              rounded-xl
              bg-gradient-to-r
              from-[#76153C]
              to-[#5A0E24]
              text-white
              font-semibold
              hover:opacity-90
              transition
            "
          >
            Contact
          </button>

          {/* VIEW DETAILS */}
          <Link
            href={`/estate-agent/${formatCity(dealer.city)}/${dealer.slug}`}
            className="
              flex-1
              h-11
              rounded-xl
              border border-[#E8C8D3]
              bg-white
              hover:bg-[#FFF5F8]
              transition
              text-[#76153C]
              font-semibold
              flex items-center justify-center pointer-events-none
            "
          >
            View Details
          </Link>

        </div>

      </div>

      <DealerThemePopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />

    </div>
  );
}