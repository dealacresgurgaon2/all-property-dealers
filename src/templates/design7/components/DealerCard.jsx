"use client";

import { useState } from "react";
import Link from "next/link";
import DealerThemePopup from "./DealerThemePopup";

export default function DealerCard({ dealer }) {

  const [popupOpen, setPopupOpen] = useState(false);

  const getInitials = (name = "") => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg border border-indigo-200 hover:scale-[1.01] transition duration-300">

      {/* LEFT COLOR BAR - HERO THEME MATCH */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-l-2xl"></div>

      <div className="p-5 pl-6">

        {/* TOP PROFILE ROW */}
        <div className="flex items-center justify-between mb-3">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg">
              {getInitials(dealer.name)}
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                {dealer.name}
              </h3>

              <p className="text-sm text-gray-500 flex items-center gap-1">

                {/* LOCATION ICON */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg> */}

                 {dealer.address}
              </p>
            </div>
          </div>

        </div>

        {/* ADDRESS ROW */}
        <div className="flex gap-2 text-sm text-gray-700 bg-indigo-50/40 p-3 rounded-lg border border-indigo-200 mb-3">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-purple-600"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
          </svg>

          <p className="line-clamp-2">
            {dealer.city}{dealer.state && `, ${dealer.state}`}
          </p>
        </div>

        {/* TAGS AS PILLS */}
        {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
            {dealer.tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] px-3 py-1 bg-purple-50 border border-purple-200 rounded-full text-purple-700 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* BOTTOM ACTION BAR */}
        <div className="flex items-center gap-3">

          {/* CONTACT BUTTON – POPUP TRIGGER */}
          <button
            onClick={() => setPopupOpen(true)}
            className="flex-1 py-2.5 text-center text-sm font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition"
          >
            Contact
          </button>

          <Link
            href={{
              pathname: `/${dealer.city}/${dealer.slug}`,
            }}
            className="flex-1 py-2.5 text-center text-sm font-semibold rounded-lg border border-indigo-600 text-indigo-700 hover:bg-indigo-50 transition"
          >
            View Details
          </Link>

        </div>

      </div>

      {/* POPUP COMPONENT CALL */}
      <DealerThemePopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />

    </div>
  );
}
