"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#faf6ec] py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* ======= HERO STYLE INTRO ======= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

          {/* LEFT IMAGE FIRST */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/images/ghj.png"
                alt="Real Estate Office"
                fill
                className="object-cover"
              />
            </div>

            {/* FLOATING EXPERIENCE BOX */}
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-[#d4af37]/30">
              <h2 className="text-3xl font-bold text-[#d4af37]">10+</h2>
              <p className="text-sm text-black/70">Years of Excellence</p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="inline-block bg-[#d4af37]/10 text-[#b8964a] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Who We Are
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              Every Property Dealer in <br />
              <span className="text-[#d4af37]"> Faridabad - One Website</span>
            </h1>

            <p className="text-black/70 leading-8 mb-6 text-lg">
             Tired of searching for property dealers everywhere? We've listed all Faridabad property dealers in one place.
            </p>

            <p className="text-black/70 leading-8 mb-8 text-lg">
              Now you can easily browse properties, compare options, and contact dealers directly. No running around. No confusion. Everything simple.
            </p>

          </div>
        </div>

        {/* ======= FEATURE STRIP ======= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

          {[
            {
              title: "All Dealers Listed",
              desc: "Every property dealer in Faridabad - all in one directory"
            },
            {
              title: "Direct Contact",
              desc: "Call or WhatsApp dealers directly. No middleman charges"
            },
            {
              title: "Save Time",
              desc: "Compare all properties at once instead of visiting multiple offices"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-3xl shadow-xl border border-[#d4af37]/20 hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 bg-[#d4af37]/20 rounded-xl flex items-center justify-center mb-4 text-[#d4af37] text-2xl">
                ✓
              </div>

              <h3 className="text-xl font-semibold mb-3 text-black">
                {item.title}
              </h3>

              <p className="text-black/70 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* ======= PROCESS SECTION ======= */}
        <div className="mb-24">

          <div className="text-center mb-16">
            <span className="inline-block bg-[#d4af37]/10 text-[#b8964a] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              How We Help
            </span>

            <h3 className="text-3xl font-bold text-black">
             Simple. Fast. Trusted.
            </h3>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">

            {[
              "Find Dealers Easily",
              "See All Properties",
              "Compare & Choose",
              "Contact Directly"
            ].map((step, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl shadow-lg p-6 text-center border border-[#d4af37]/20"
              >
                <div className="text-6xl font-extrabold text-[#d4af37]/20 mb-2">
                  0{i + 1}
                </div>

                <h4 className="font-semibold text-black">
                  {step}
                </h4>
              </div>
            ))}

          </div>
        </div>

        {/* ======= STATS COUNTER STYLE ======= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">

          {[
            { v: "5000+", l: "People Found Property" },
            { v: "2000+", l: "Listed Properties" },
            { v: "50+", l: "Registered Dealers" },
            { v: "25+", l: "Faridabad Areas Covered" }
          ].map((s, i) => (
            <div
              key={i}
              className="text-center bg-white p-8 rounded-3xl shadow-lg border border-[#d4af37]/20"
            >
              <h4 className="text-4xl font-bold text-[#d4af37] mb-2">
                {s.v}
              </h4>
              <p className="text-black/70">{s.l}</p>
            </div>
          ))}

        </div>

        {/* ======= VALUES REIMAGINED ======= */}
        <div className="mb-24">

          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-black">
              What Drives Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: "Real Dealers Only",
                desc: "We list only genuine, verified property dealers"
              },
              {
                title: "Help Everyone",
                desc: "Whether buying, selling, or renting - we help all"
              },
              {
                title: "Local Knowledge",
                desc: "All dealers know Faridabad market deeply"
              }
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-lg border border-[#d4af37]/20 text-center"
              >
                <h4 className="text-xl font-semibold mb-3 text-black">
                  {v.title}
                </h4>

                <p className="text-black/70 leading-7">
                  {v.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ======= FINAL CTA ======= */}
        <div className="bg-black rounded-[40px] p-12 text-center text-white shadow-2xl">

          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Property in Faridabad?
          </h3>

          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
           Browse all dealers and properties in one place. Start your search now!
          </p>

          

        </div>

      </div>
    </section>
  );
}
