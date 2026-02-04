"use client";

import Link from "next/link";

export default function DealerCard({ dealer }) {
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
          text-green-600
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
                 {dealer.city}
              </span>

              <span className="text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-md">
                ✓ Verified
              </span>
            </div>
          </div>
        </div>

        {/* ADDRESS CARD */}
        <div className="bg-green-50/50 border border-green-200 rounded-lg p-3 mb-3">
          <p className="text-sm text-gray-700 leading-snug line-clamp-2">
            {dealer.address}
          </p>
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

        {/* STATS ROW */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-center text-xs">
          <div className="bg-gray-50 p-2 rounded-md border">
            <p className="font-semibold text-green-700">24/7</p>
            <p className="text-gray-500">Support</p>
          </div>

          <div className="bg-gray-50 p-2 rounded-md border">
            <p className="font-semibold text-green-700">Top</p>
            <p className="text-gray-500">Dealer</p>
          </div>

          <div className="bg-gray-50 p-2 rounded-md border">
            <p className="font-semibold text-green-700">100%</p>
            <p className="text-gray-500">Trusted</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-auto">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/40 to-transparent mb-4" />

          <div className="flex gap-3">
            <a
              href={`/contact?dealer=${dealer.slug}`}
              className="
                flex-1 text-center py-2.5 rounded-lg
                bg-green-600 text-white text-sm font-semibold
                hover:bg-green-700 transition
                shadow
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
    </div>
  );
}
