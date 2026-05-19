"use client";

export default function HisarMarketOverview({
  pageContent,
}) {
  return (
    <section className="w-full px-4 py-7 bg-red-500">
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[32px]
          bg-red-500
          p-6
          md:p-10
          lg:p-14
          shadow-[0_20px_80px_rgba(239,68,68,0.45)]
          border
          border-white/10
          relative
          overflow-hidden
        "
      >

        {/* TOP BLUR */}
        <div
          className="
            absolute
            -top-24
            -right-24
            w-80
            h-80
            bg-white/10
            rounded-full
            blur-3xl
          "
        ></div>

        {/* BOTTOM BLUR */}
        <div
          className="
            absolute
            -bottom-24
            -left-24
            w-80
            h-80
            bg-white/10
            rounded-full
            blur-3xl
          "
        ></div>

        <div className="relative z-10">

          {/* LINE */}
          <div
            className="
              w-28
              h-1.5
              rounded-full
              bg-white/80
              mt-6
              mb-8
            "
          ></div>

          {/* CONTENT */}
          <p
            className="
              text-base
              md:text-lg
              lg:text-[19px]
              leading-9
              text-white
              font-medium
              tracking-wide
            "
          >
            {pageContent ||
              "No content available."}
          </p>

        </div>
      </div>
    </section>
  );
}