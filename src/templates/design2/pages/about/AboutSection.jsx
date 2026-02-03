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
              <h4 className="text-3xl font-bold text-[#d4af37]">10+</h4>
              <p className="text-sm text-black/70">Years of Excellence</p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="inline-block bg-[#d4af37]/10 text-[#b8964a] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              Building Trust in <br />
              <span className="text-[#d4af37]">Every Property Deal</span>
            </h2>

            <p className="text-black/70 leading-8 mb-6 text-lg">
              We are more than a property platform. We are a bridge between dreams and reality, connecting buyers, sellers and investors with confidence and clarity.
            </p>

            <p className="text-black/70 leading-8 mb-8 text-lg">
              Our mission is simple – to make real estate transparent, hassle-free and rewarding for everyone involved.
            </p>

          </div>
        </div>

        {/* ======= FEATURE STRIP ======= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

          {[
            {
              title: "Verified Listings",
              desc: "Every property is carefully checked and validated before listing."
            },
            {
              title: "Local Experts",
              desc: "Work with professionals who truly understand your city."
            },
            {
              title: "End to End Support",
              desc: "From inquiry to paperwork – we handle it all."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-3xl shadow-xl border border-[#d4af37]/20 hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 bg-[#d4af37]/20 rounded-xl flex items-center justify-center mb-4 text-[#d4af37] text-2xl">
                ✓
              </div>

              <h4 className="text-xl font-semibold mb-3 text-black">
                {item.title}
              </h4>

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
              Our Process
            </span>

            <h3 className="text-3xl font-bold text-black">
              Simple. Transparent. Effective.
            </h3>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">

            {[
              "Understand Needs",
              "Find Best Matches",
              "Property Visits",
              "Smooth Closure"
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
            { v: "5000+", l: "Happy Clients" },
            { v: "2000+", l: "Deals Closed" },
            { v: "50+", l: "Expert Agents" },
            { v: "25+", l: "Cities Served" }
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
                title: "Integrity",
                desc: "We believe in honest advice and transparent dealings."
              },
              {
                title: "Customer First",
                desc: "Your satisfaction is our highest priority."
              },
              {
                title: "Expert Knowledge",
                desc: "Deep market understanding for better decisions."
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
            Ready to Find Your Perfect Property?
          </h3>

          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let our experienced team guide you toward the best real estate opportunities tailored to your needs.
          </p>

          

        </div>

      </div>
    </section>
  );
}
