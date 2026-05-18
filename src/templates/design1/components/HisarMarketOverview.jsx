"use client";

export default function HisarMarketOverview() {
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
          shadow-[0_20px_80px_rgba(30,64,175,0.35)]
          border
          border-[#93c5fd]/30
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
          {/* HEADING */}
          <h2
            className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-white
              leading-tight
            "
          >
            Gurgaon Real Estate Market Overview
          </h2>

          {/* LINE */}
          <div
            className="
              w-28
              h-1.5
              rounded-full
              bg-white/90
              mt-6
              mb-8
            "
          ></div>

          {/* CONTENT */}
          <p
            className="
              text-base
              md:text-lg
              lg:text-[14px]
              leading-9
              text-white/95
              font-medium
              tracking-wide
            "
          >
          Gurgaon (officially Gurugram) has firmly established itself as one of India's most dynamic and high-value real estate markets. As the millennium city of Haryana, Gurgaon attracts massive residential and commercial investment driven by its robust IT/ITES sector, proximity to Indira Gandhi International Airport, and world-class infrastructure. The city is divided into distinct real estate corridors — Golf Course Road and DLF Phases command premium prices for ultra-luxury housing; the Dwarka Expressway corridor (Sectors 99–114) is witnessing unprecedented growth with luxury and mid-segment gated communities; Sohna Road offers a balanced mix of residential societies and commercial hubs; while New Gurgaon and Manesar present affordable investment opportunities with strong future appreciation potential. Average property prices in Gurgaon range from ₹4,000 per sq ft in emerging sectors to over ₹35,000 per sq ft on Golf Course Road, making it a market suited for every budget. Working with the best property dealer in Gurgaon, best real estate agent in Gurgaon, or an experienced property broker in Gurgaon ensures you navigate this complex market with confidence, legal clarity and the best possible deal — whether you are buying, selling, or renting.
          </p>
        </div>
      </div>
    </section>
  );
}