"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="
              inline-block
              bg-[#ff7a1a]
              text-white
              text-sm font-semibold
              px-4 py-1
              rounded-full
              mb-4
            "
          >
            About Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
            Your Trusted Partner in Real Estate Solutions
          </h2>

          <p className="text-gray-500 text-lg">
            We help people make confident property decisions through local
            expertise, verified listings, and transparent processes.
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>

            <p className="text-gray-600 leading-8 mb-6">
              We are a professional real estate platform focused on connecting
              buyers, sellers, and investors with the right opportunities.
              Our strength lies in local market knowledge, verified data,
              and a client-first mindset.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Whether it’s residential or commercial property, we ensure every
              transaction is secure, transparent, and value-driven — from first
              consultation to final closure.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "5K+", label: "Happy Clients" },
                { value: "2K+", label: "Properties Closed" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-white
                    rounded-xl
                    shadow-md
                    p-5
                    border border-gray-100
                  "
                >
                  <h4 className="text-2xl font-bold text-[#ff7a1a]">
                    {item.value}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="relative w-full h-[460px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/ghj.png"
                alt="About Real Estate"
                fill
                className="object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-[#ff7a1a]/20"></div>
            </div>

            {/* FLOATING CARD */}
            <div
              className="
                absolute
                bottom-4
                left-4
                bg-white/90
                backdrop-blur-md
                rounded-xl
                shadow-xl
                p-6
                max-w-xs
                border border-gray-200
              "
            >
              <h4 className="font-semibold text-gray-800 mb-2">
                Why Choose Us?
              </h4>

              <ul className="text-sm text-gray-600 space-y-2">
                <li>✔ Verified & genuine listings</li>
                <li>✔ Local property experts</li>
                <li>✔ Transparent pricing</li>
                <li>✔ End-to-end assistance</li>
              </ul>
            </div>
          </div>

        </div>

        {/* ================= HOW WE WORK ================= */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-12">
            How We Work
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Understand Requirement" },
              { step: "02", title: "Shortlist Best Options" },
              { step: "03", title: "Site Visits & Guidance" },
              { step: "04", title: "Deal Closure Support" },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white
                  rounded-xl
                  shadow-md
                  p-6
                  text-center
                  border border-gray-100
                "
              >
                <div className="text-3xl font-bold text-[#ff7a1a] mb-3">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-800">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div
          className="
            mt-20
            bg-[#ff7a1a]
            rounded-2xl
            p-10
            text-center
            text-white
            shadow-lg
          "
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Looking to Buy, Sell, or Invest?
          </h3>

          <p className="opacity-90 mb-6">
            Talk to our property experts and make the right move with confidence.
          </p>
        </div>

      </div>
    </section>
  );
}
