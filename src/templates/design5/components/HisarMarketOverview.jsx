"use client";

export default function HisarMarketOverview() {
  return (

    <section className="w-full px-4 py-7 bg-white">

      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[32px]
          bg-gradient-to-br
            from-red-600
          via-red-500
          to-red-400
          p-6
          md:p-10
          lg:p-14
          shadow-[0_25px_100px_rgba(220,38,38,0.55)]
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
          <h2
            className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-white
              leading-tight
            "
          >
            Delhi Real Estate Market Overview
          </h2>

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
              leading-7
              text-white/90
              font-medium
              tracking-wide
            "
          >
           Delhi Real Estate Market Overview  Delhi’s real estate market is one of the most dynamic and sought-after property markets in India, driven by its status as the national capital, robust infrastructure development, and consistently high demand from residential and commercial buyers alike. With over 32 million residents and a growing influx of professionals, students, and migrants, Delhi offers an unparalleled range of property options — from affordable DDA flats in planned sub-cities like Rohini and Dwarka to ultra-luxury independent bungalows in South Delhi’s elite colonies such as Golf Links, Jor Bagh, and Vasant Vihar.  South Delhi continues to command the highest property rates in the city, with localities like Greater Kailash, Defence Colony, and Hauz Khas seeing consistent appreciation driven by premium demand and limited supply. West Delhi, anchored by Dwarka’s massive township, attracts mid-segment buyers and investors looking for value with good connectivity via the Blue Line Metro and NH-48. North Delhi localities like Rohini and Pitampura offer affordable housing backed by strong Metro connectivity. East Delhi localities such as Preet Vihar, Mayur Vihar, and Vasundhara Enclave are increasingly popular due to relatively lower prices and improving social infrastructure.  Key real estate trends shaping Delhi in 2025–2026 include rising demand for builder floors, a resurgence of commercial property investment post-pandemic, increasing NRI interest in premium South Delhi properties, and growing appetite for rental yields in Metro-connected localities. The DDA housing scheme continues to be a major driver of affordable housing supply. Working with the best property dealer in Delhi or a reliable real estate broker ensures you navigate this complex market with expert guidance, getting the best value whether you are buying, selling, or investing.
          </p>

        </div>

      </div>

    </section>

  );
}