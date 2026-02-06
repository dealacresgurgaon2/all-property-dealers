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
        border border-[#5E23DC]
        rounded-xl
        shadow-sm hover:shadow-md
        transition
        overflow-hidden
        flex flex-col md:flex-row
      "
    >
      {/* ===== LOGO - ONLY FOR DESKTOP ===== */}
      <div
        className="
          hidden md:flex
          w-32
          bg-[#5E23DC]
          items-center justify-center
          text-white
          font-bold text-3xl
        "
      >
        {getInitials(dealer.name)}
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 px-4 py-3 flex flex-col">
        {/* Name */}
        <h3
          className="
            text-lg md:text-xl font-bold mb-1
            text-[#5E23DC]
          "
        >
          {dealer.name}
        </h3>

        {/* Address */}
        <p
          className="
            text-xs
            text-gray-700
            mb-1
            flex items-start gap-2
            leading-snug
          "
        >
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

        {/* City */}
        <p className="text-xs font-semibold text-gray-800 mb-2">
          {dealer.city} {dealer.state && `, ${dealer.state}`}
        </p>

        {/* TAGS */}
        {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {dealer.tags.map((tag, index) => (
              <span
                key={index}
                className="
                  text-[12px]
                  px-2 py-0.5
                  rounded-full
                  bg-[#5E23DC]/10
                  text-[#5E23DC]
                  border border-[#5E23DC]/40
                  font-semibold
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex-1"></div>

        {/* BUTTONS - LEFT & RIGHT */}
        <div
          className="
            flex items-center justify-between
            pt-2 mt-2
            border-t border-[#5E23DC]/30
          "
        >
          <a
            href={`/contact?dealer=${dealer.slug}`}
            className="
              px-4 py-1.5
              rounded-md
              bg-[#5E23DC]
              text-white
              text-sm
              font-semibold
              hover:bg-[#5E23DC]/90
              transition
            "
          >
            Contact Us
          </a>

          <Link
            href={{
              pathname: `dealer/adv-dse`,
              query: {
                name: dealer.name,
                city: dealer.city,
              },
            }}
            className="
              px-4 py-1.5
              rounded-md
              border border-[#5E23DC]
              text-[#5E23DC]
              text-sm
              font-semibold
              hover:bg-[#5E23DC]
              hover:text-white
              transition
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
