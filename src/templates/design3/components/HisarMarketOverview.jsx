"use client";

export default function HisarMarketOverview() {
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
          <h2
            className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-white
              leading-tight
            "
          >
            Hisar Real Estate Market Overview
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
              leading-9
              text-white/90
              font-medium
              tracking-wide
            "
          >
            Hisar, often called the "Steel City of Haryana," is one of the
            fastest-growing real estate markets in North India. Backed by strong
            industrial activity, excellent road and rail connectivity via NH-9,
            and the upcoming Hisar airport project, the city's property market
            has seen steady price appreciation over the past five years.

            Residential demand is highest in planned sectors such as Sector 13,
            14, 15, and Urban Estate Phase II, where plots and builder floors
            attract both end-users and investors.

            Premium localities like Model Town, Defence Colony, and Professor
            Colony command top prices and are always in demand among families
            seeking quality housing. On the commercial side, areas around Red
            Square Market, Green Square Market, and the Rajguru Market corridor
            remain the go-to zones for shop and office space.


            Affordable housing options exist in developing zones such as Shanti
            Nagar, Navdeep Colony, and Mirzapur Road. Working with the best real
            estate agent in Hisar or a seasoned property broker in Hisar is the
            smartest way to navigate this dynamic market and secure the right
            deal at the right price.
          </p>

        </div>

      </div>

    </section>

  );
}