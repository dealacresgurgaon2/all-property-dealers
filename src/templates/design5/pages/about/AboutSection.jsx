"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold mb-4">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Your Trusted Real Estate Partner
          </h2>

          <p className="text-black/70 max-w-3xl mx-auto text-lg">
            We connect people with properties that match their dreams, budget and lifestyle.
            Transparent deals, expert guidance and verified listings – all at one place.
          </p>
        </div>

        {/* ===== HIGHLIGHTS STRIP ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">

          {[
            { v: "10+", l: "Years Experience" },
            { v: "5000+", l: "Happy Clients" },
            { v: "2000+", l: "Properties Sold" },
            { v: "25+", l: "Cities Covered" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-8 text-center border border-red-100 hover:shadow-lg transition"
            >
              <h4 className="text-4xl font-bold text-red-600 mb-2">
                {item.v}
              </h4>
              <p className="text-black/70">{item.l}</p>
            </div>
          ))}

        </div>

        {/* ===== WHY CHOOSE US ===== */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-black mb-10 text-center">
            Why Choose Us
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: "Verified Dealers",
                desc: "Every dealer and listing is manually verified for authenticity."
              },
              {
                title: "Market Experts",
                desc: "Local property consultants with deep market knowledge."
              },
              {
                title: "Transparent Process",
                desc: "No hidden charges, no surprises – only clear communication."
              },
              {
                title: "Wide Coverage",
                desc: "Presence across major cities with thousands of listings."
              },
              {
                title: "Customer Support",
                desc: "Dedicated team to guide you at every step."
              },
              {
                title: "Legal Assistance",
                desc: "Complete help with documentation and paperwork."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-red-200 rounded-2xl hover:bg-red-50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl font-bold mb-4">
                  {i + 1}
                </div>

                <h4 className="text-xl font-semibold text-black mb-2">
                  {item.title}
                </h4>

                <p className="text-black/70 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ===== HOW IT WORKS ===== */}
        <div className="mb-24 bg-gray-50 rounded-3xl p-10">

          <h3 className="text-3xl font-bold text-black text-center mb-12">
            How We Work
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {[
              "Share Requirements",
              "Get Best Matches",
              "Schedule Visits",
              "Close the Deal"
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow border border-red-100"
              >
                <div className="text-5xl font-bold text-red-600/20 mb-2">
                  0{i + 1}
                </div>

                <h4 className="font-semibold text-black">
                  {step}
                </h4>
              </div>
            ))}

          </div>
        </div>

        {/* ===== VALUES SECTION ===== */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-black text-center mb-10">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: "Trust",
                desc: "We build relationships based on honesty and reliability."
              },
              {
                title: "Quality",
                desc: "Only the best and verified listings for our customers."
              },
              {
                title: "Commitment",
                desc: "We stay with you until the deal is successfully closed."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-red-200 rounded-2xl text-center"
              >
                <h4 className="text-xl font-semibold text-black mb-3">
                  {item.title}
                </h4>

                <p className="text-black/70">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ===== FINAL CTA ===== */}
        <div className="bg-red-600 rounded-3xl p-12 text-center text-white">

          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Find Your Dream Property
          </h3>

          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you want to buy, sell or rent – our experts are here to help you make the right decision.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:scale-105 transition"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}
