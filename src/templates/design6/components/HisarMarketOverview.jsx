"use client";

export default function HisarMarketOverview() {
  return (
    <section className="w-full px-4 py-7 bg-[#ECFDF5]">
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[32px]
          bg-gradient-to-br
          from-[#16A34A]
          via-[#15803D]
          to-[#14532D]
          p-6
          md:p-10
          lg:p-14
          shadow-[0_20px_80px_rgba(22,163,74,0.35)]
          border
          border-[#86efac]/20
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
            bg-[#bbf7d0]/20
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
            Noida Real Estate Market Overview
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
            Noida Real Estate Market Overview — Why Invest in Noida Today?
            Noida (New Okhla Industrial Development Authority) has firmly
            established itself as one of the most dynamic and investor-friendly
            real estate markets in the National Capital Region. Spanning over
            200+ planned sectors, Noida offers a diverse range of residential,
            commercial, and industrial properties catering to every budget and
            lifestyle preference. The city's well-planned infrastructure —
            including 8-lane expressways, a rapidly expanding metro network,
            world-class IT parks, and reputed educational and healthcare
            institutions — makes it a preferred destination for both homebuyers
            and investors.

            The Noida-Greater Noida Expressway corridor, in particular, has
            emerged as the NCR's most sought-after luxury residential belt, with
            premium developments by top builders such as Godrej, Tata Housing,
            ATS, Max Estates, and Mahagun offering international-standard
            amenities. Property prices across Noida sectors have shown a
            consistent upward trajectory of 8-12% annually over the last three
            years, driven by strong end-user demand, limited new supply in
            established sectors, and infrastructure-led catalysts like the
            upcoming Jewar International Airport.

            For buyers seeking affordable housing, sectors in the Noida
            Extension and mid-sectors along the Aqua Metro Line offer excellent
            value-for-money options with strong rental demand from corporate
            tenants. Our best property dealers in Noida provide expert,
            data-backed advisory to help you navigate this vibrant market and
            make the smartest possible investment decision. Whether you are a
            first-time buyer, seasoned investor, or NRI client, Noida's real
            estate market in 2026 offers unprecedented opportunities that our
            expert real estate brokers in Noida are best positioned to help you
            capitalise on.
          </p>
        </div>
      </div>
    </section>
  );
}