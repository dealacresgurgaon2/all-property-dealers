"use client";

import Link from "next/link";

export default function BreadcrumbWrapper({
  items = [],
  className = "",
}) {

  return (

    <div className={className}>

      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border border-[#F3D9E3]
          bg-white/90
          backdrop-blur-xl
          px-5 py-4
          shadow-[0_10px_35px_rgba(118,21,60,0.08)]
        "
      >

        {/* BG GLOW */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#76153C]/5 blur-3xl rounded-full" />

        {/* CONTENT */}
        <div className="relative z-10">

          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">

            {/* HOME */}
            <Link
              href="/"
              className="
                text-[#6B4A55]
                hover:text-[#76153C]
                transition
                hover:underline
              "
            >
              Home
            </Link>

            {/* ITEMS */}
            {items.map((item, index) => {

              const isLast =
                index === items.length - 1;

              return (

                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <span className="text-[#B08A96]">
                    ›
                  </span>

                  {isLast ? (

                    <span
                      className="
                        font-semibold
                        text-[#2A0E18]
                      "
                    >
                      {item.label}
                    </span>

                  ) : (

                    <Link
                      href={item.href}
                      className="
                        text-[#6B4A55]
                        hover:text-[#76153C]
                        transition
                        hover:underline
                      "
                    >
                      {item.label}
                    </Link>

                  )}

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </div>

  );

}