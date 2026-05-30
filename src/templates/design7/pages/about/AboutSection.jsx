"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-slate-50">

      {/* ===== HERO STYLE HEADER – SAME HERO COLORS ===== */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-28">       
        <div className="max-w-6xl mx-auto px-4 text-center">

          <p className="text-indigo-200 font-semibold tracking-widest mb-3">
            KNOW ABOUT US
          </p>

          <h1 className="text-2xl md:text-4xl font-extrabold mb-6">
            We Don’t Sell Properties  
            <span className="block text-indigo-200">We Build Trust</span>
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto">
            A smart real estate platform connecting genuine buyers with verified dealers across India.
          </p>

        </div>
      </div>

      {/* ===== NEW REPLACEMENT SECTION ===== */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-bold text-center mb-4 text-indigo-700">
            Platform Highlights
          </h2>

          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
            Everything you need for a smooth, secure and smart real estate experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Verified Dealers Only",
                desc: "Every dealer on our platform goes through a strict verification process before onboarding."
              },
              {
                title: "Genuine Listings",
                desc: "No fake properties – only real and updated property information."
              },
              {
                title: "Smart Matching",
                desc: "Advanced filters to connect you with the right dealer and property."
              },
              {
                title: "End-to-End Support",
                desc: "From inquiry to documentation, we assist at every step."
              },
              {
                title: "Local Expertise",
                desc: "Dealers with deep knowledge of local markets and pricing."
              },
              {
                title: "Transparent Process",
                desc: "Clear communication with no hidden costs or surprises."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-indigo-200 rounded-2xl hover:bg-indigo-50 transition bg-slate-50"
              >
                <h4 className="text-xl font-semibold text-purple-700 mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ===== WHAT WE DO ===== */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-bold text-center mb-4 text-indigo-700">
            What We Really Do
          </h2>

          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
            End-to-end real estate support powered by technology and trusted professionals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Connect buyers with verified dealers",
              "Provide genuine property listings",
              "Guide through documentation",
              "Support price negotiation",
              "Market analysis assistance",
              "Property visits coordination",
              "After-sale support",
              "Transparent transactions"
            ].map((text, i) => (
              <div
                key={i}
                className="p-6 border border-purple-200 rounded-xl hover:bg-indigo-50 transition bg-white"
              >
                <p className="text-gray-700">
                  ✓ {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ===== TRUST METRICS – HERO COLOR BASED ===== */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-bold text-center mb-12">
            Why Thousands Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-white">5000+</h3>
              <p className="mt-2 text-white/80">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-white">2000+</h3>
              <p className="mt-2 text-white/80">Successful Deals</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-white">30+</h3>
              <p className="mt-2 text-white/80">Cities Covered</p>
            </div>

          </div>

        </div>
      </div>

      {/* ===== WORK CULTURE ===== */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-bold mb-10 text-center text-indigo-700">
            How We Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                t: "Honesty First",
                d: "We never promote fake listings or misleading deals."
              },
              {
                t: "Customer Above All",
                d: "Your requirement is more important than our commission."
              },
              {
                t: "Long Term Relations",
                d: "We aim to serve you for years, not just one deal."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-indigo-200">
                <h4 className="text-xl font-semibold mb-3 text-purple-700">
                  {item.t}
                </h4>
                <p className="text-gray-600">
                  {item.d}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ===== FINAL CTA – EXACT HERO COLORS ===== */}
      <div className="py-24">
        <div className="max-w-5xl mx-auto px-4">

          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-3xl p-12 text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Property Journey?
            </h2>

            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Connect with verified property dealers and find the best options tailored to your needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:scale-105 transition"
              >
                Explore Dealers
              </Link>

              <Link
                href="/"
                className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-700 transition"
              >
                Talk to Expert
              </Link>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
