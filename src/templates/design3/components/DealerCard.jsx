"use client";

import Link from "next/link";

export default function DealerCard({ dealer }) {
  // 2-letter logo from name
  const getInitials = (name = "") => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div
      className="
        bg-[#f2e8e1]
        border border-[#422c18]
        rounded-xl
        shadow-sm hover:shadow-md
        transition
        overflow-hidden
        flex
      "
    >
      {/* LEFT LOGO */}
      <div
        className="
          w-32
          bg-[#422c18]
          flex items-center justify-center
          text-[#f2e8e1]
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
            text-xl font-bold mb-1
            text-[#422c18]
          "
        >
          {dealer.name}
        </h3>

        {/* Address */}
        <p
          className="
            text-xs
            text-[#5a3c26]
            mb-1
            flex items-start gap-2
            leading-snug
          "
        >
          <span className="mt-0.5 shrink-0 text-[#422c18]">
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
        <p
          className="
            text-xs
            text-[#7a5c42]
            mb-2
          "
        >
          {dealer.city}
        </p>

        {/* TAGS */}
        {Array.isArray(dealer.tags) && dealer.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {dealer.tags.map((tag, index) => (
              <span
                key={index}
                className="
                  text-[10px]
                  px-2 py-0.5
                  rounded-full
                  bg-[#422c18]
                  text-[#f2e8e1]
                  border border-[#5a3c26]
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* BUTTONS */}
        <div
          className="
            flex items-center justify-between
            pt-2 mt-2
            border-t border-[#422c18]
          "
        >
          {/* Contact */}
          <a
            href={`/contact?dealer=${dealer.slug}`}
            className="
              px-3 py-1.5
              rounded-md
              bg-[#422c18]
              text-[#f2e8e1]
              text-sm
              font-semibold
              hover:opacity-90
              transition
            "
          >
            Contact Us
          </a>

          {/* View Details */}
          <Link
            href={{
              pathname: `/adv-dse`,
              query: {
                name: dealer.name,
                city: dealer.city,
              },
            }}
            className="
              px-3 py-1.5
              rounded-md
              border border-[#422c18]
              text-[#422c18]
              text-sm
              font-semibold
              hover:bg-[#422c18]
              hover:text-[#f2e8e1]
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
