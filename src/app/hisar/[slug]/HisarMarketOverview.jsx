"use client";

export default function HisarMarketOverview({
  pageContent,
}) {
  return (
    <section className="w-full px-4 py-7 bg-[#EEF1FF]">
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[32px]
          bg-gradient-to-br
          from-[#5E23DC]
          via-[#4D2FB2]
          to-[#0E21A0]
          p-6
          md:p-10
          lg:p-14
          shadow-[0_20px_80px_rgba(94,35,220,0.35)]
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
            bg-[#ffffff10]
            rounded-full
            blur-3xl
          "
        ></div>

        <div className="relative z-10">

          {/* HEADING */}
          {/* <h2
            className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-white
              leading-tight
            "
          >
            Real Estate Market Overview
          </h2> */}

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
              text-white/90
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