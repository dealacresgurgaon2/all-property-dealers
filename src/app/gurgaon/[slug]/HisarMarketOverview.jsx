"use client";

export default function HisarMarketOverview({
  pageContent,
}) {
  return (
    <section className="w-full px-4 py-7 bg-[#EFF6FF]">
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[32px]
          bg-gradient-to-br
          from-[#1e40af]
          via-[#1d4ed8]
          to-[#172554]
          p-6
          md:p-10
          lg:p-14
          shadow-[0_20px_80px_rgba(30,64,175,0.30)]
          border
          border-[#93c5fd]/20
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
            bg-white/20
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
            bg-[#bfdbfe]/20
            rounded-full
            blur-3xl
          "
        ></div>

        <div className="relative z-10">

          {/* OPTIONAL HEADING */}
          {/* 
          <h2
            className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-white
              leading-tight
            "
          >
            Real Estate Market Overview
          </h2> 
          */}

          {/* LINE */}
          <div
            className="
              w-28
              h-1.5
              rounded-full
              bg-white/90
              mt-2
              mb-8
            "
          ></div>

          {/* CONTENT */}
          <div
            className="
              text-base
              md:text-lg
              lg:text-[19px]
              leading-9
              text-white/95
              font-medium
              tracking-wide
            "
          >
            {pageContent ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: pageContent,
                }}
              />
            ) : (
              "No content available."
            )}
          </div>

        </div>
      </div>
    </section>
  );
}