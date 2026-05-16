"use client";

export default function HisarMarketOverview() {
  return (
    <section className="w-full px-4 py-7 bg-[#FFF8E1]">
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[32px]
          bg-gradient-to-br
          from-[#d4af37]
          via-[#c89b2c]
          to-[#8B6B10]
          p-6
          md:p-10
          lg:p-14
          shadow-[0_20px_80px_rgba(212,175,55,0.35)]
          border
          border-[#f7e7b5]/30
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
            bg-[#fff6d6]/20
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
            About Faridabad Real Estate
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
           Faridabad is one of the most dynamic real estate markets in the National Capital Region (NCR), offering a compelling mix of affordability, connectivity, and infrastructure growth. Strategically located on the Delhi-Mathura highway (NH-48 and NH-58), Faridabad provides seamless access to Delhi, Noida, and Gurugram. The city is divided into two broad zones — Old Faridabad (NIT, Sectors 1–50) and Greater Faridabad / Neharpar (Sectors 55–90) — each catering to distinct buyer profiles. Old Faridabad is prized for its established infrastructure, mature residential colonies like Sainik Colony, Ashoka Enclave, and Jawahar Colony, and strong rental yields. Neharpar or Greater Faridabad, on the other hand, has emerged as the city's growth engine with modern high-rise apartments, wide roads, and new township developments along the Agra Canal. The Violet Line Metro (Delhi Metro) has significantly boosted property values in Badarpur, Mujesar, and adjacent areas. With property rates ranging from ₹25 lakh for affordable plots to over ₹2 crore for premium villas, Faridabad offers something for every budget. Government initiatives like the Smart City 
          </p>
        </div>
      </div>
    </section>
  );
}