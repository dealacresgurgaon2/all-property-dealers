"use client";

import Link from "next/link";

export default function DealerCard({ dealer }) {
  const getInitials = (name = "") => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div
      className="
        bg-white
        border border-[#d4af37]/30
        rounded-2xl
        shadow-lg hover:shadow-2xl
        transition
        p-5
        relative
        overflow-hidden
        flex flex-col
        h-full
      "
    >
      {/* ❤️ HEART ICON (SVG ONLY) */}
      <button
        className="
          absolute top-4 right-4
          w-9 h-9
          rounded-full
          border border-[#d4af37]/40
          bg-white
          flex items-center justify-center
          text-[#d4af37]
          hover:bg-[#d4af37]
          hover:text-black
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
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8964a] flex items-center justify-center font-bold text-black shadow-md">
          {getInitials(dealer.name)}
        </div>

        <div>
          <h3 className="text-lg font-bold text-black leading-tight">
            {dealer.name}
          </h3>
          <p className="text-xs text-black/60">{dealer.city}</p>
        </div>
      </div>

      {/* ADDRESS */}
      <p className="text-sm text-black/70 leading-snug line-clamp-2 mb-3">
        {dealer.address}
      </p>

      {/* TAGS – FIXED AREA */}
      {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
        <div className="mb-4 max-h-[44px] overflow-hidden flex flex-wrap gap-1.5">
          {dealer.tags.map((tag, index) => (
            <span
              key={index}
              className="
                text-[10px]
                px-2 py-0.5
                rounded-full
                bg-[#d4af37]/15
                text-black
                border border-[#d4af37]/30
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
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mb-4" />

        <div className="flex gap-3">
          <a
            href={`/contact?dealer=${dealer.slug}`}
            className="flex-1 text-center py-2 rounded-md bg-[#d4af37] text-black text-sm font-semibold hover:bg-[#c9a227] transition"
          >
            Contact
          </a>

          <Link
             href={{
    pathname: `/dealers/${dealer.slug}`,
    query: {
      name: dealer.name,
      city: dealer.city,
    },
  }}
            className="flex-1 text-center py-2 rounded-md border border-[#d4af37] text-black text-sm font-semibold hover:bg-[#d4af37] transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
