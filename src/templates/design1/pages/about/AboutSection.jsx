"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#f8fafc] py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#1e40af]/10 text-[#1e40af] text-sm font-semibold px-4 py-1 rounded-full mb-4">
            About Us
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1f33] leading-tight mb-4">
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
            <h3 className="text-2xl font-semibold text-[#0b1f33] mb-4">
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
                    border border-gray-200
                    rounded-xl
                    shadow-sm
                    p-5
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <h4 className="text-2xl font-bold text-[#1e40af]">
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
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-8 -left-6 bg-white border border-gray-200 rounded-xl shadow-lg p-6 max-w-xs">
              <h4 className="font-semibold text-[#0b1f33] mb-2">
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
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-[#0b1f33] text-center mb-12">
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
                  border border-gray-200
                  rounded-xl
                  shadow-sm
                  p-6
                  text-center
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div className="text-3xl font-bold text-[#1e40af]/20 mb-3">
                  {item.step}
                </div>
                <h4 className="font-semibold text-[#0b1f33]">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* ================= VALUES ================= */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-[#0b1f33] text-center mb-12">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Trust & Transparency",
                desc: "Honest communication and clear processes are at the heart of everything we do.",
              },
              {
                title: "Customer First",
                desc: "Our decisions are driven by what delivers the most value to our clients.",
              },
              {
                title: "Market Expertise",
                desc: "Deep local knowledge ensures smarter and safer property decisions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white
                  border border-gray-200
                  rounded-xl
                  shadow-sm
                  p-6
                  text-center
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <h4 className="text-lg font-semibold text-[#0b1f33] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-500 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-24 bg-[#1e40af] rounded-2xl p-10 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Looking to Buy, Sell, or Invest?
          </h3>

          <p className="text-white/80 mb-6">
            Talk to our property experts and make the right move with confidence.
          </p>

          
        </div>

      </div>
    </section>
  );
}
