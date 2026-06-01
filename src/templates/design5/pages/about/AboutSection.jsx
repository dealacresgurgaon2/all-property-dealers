"use client";

import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export default function AboutSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-4 px-2">
          <Breadcrumb/>
        </div>

        {/* ===== HEADER ===== */}
        <div className=" mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold mb-4">
            About Us
          </span>

          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Your Trusted Real Estate Partner
          </h1>

          <p className="text-black/70 max-w-7xl mx-auto text-lg">
            We help people find the right property dealers in Delhi. All in one place. Fast and simple. Transparent and trusted.
          </p>
        </div>

        {/* ===== HIGHLIGHTS STRIP ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {[
            { v: "10+", l: "Years of Experience" },
            { v: "5000+", l: "Happy Clients" },
            { v: "2000+", l: "Properties on Site" },
            { v: "25+", l: "Delhi Locations" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-8 text-center border border-red-100 hover:shadow-lg transition"
            >
              <h2 className="text-4xl font-bold text-red-600 mb-2">
                {item.v}
              </h2>
              <p className="text-black/70">{item.l}</p>
            </div>
          ))}
        </div>

        {/* ===== WHY CHOOSE US ===== */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-black mb-10 text-center">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Dealers",
                desc: "Every dealer is self-verified, so no cheating. Verified data. No fake listings."
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
                desc: "Properties across Delhi from thousands of dealers in all locations."
              },
              {
                title: "Customer Support",
                desc: "Expert team to guide you at every step. Help when you need it."
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

                <h2 className="text-xl font-semibold text-black mb-2">
                  {item.title}
                </h2>

                <p className="text-black/70 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== HOW WE WORK ===== */}
        <div className="mb-24 bg-gray-50 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            How We Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Share Requirement",
                desc: "Tell us what you're looking for"
              },
              {
                title: "Get Best Matches",
                desc: "See all dealers who have what you need"
              },
              {
                title: "Schedule Visits",
                desc: "Visit properties you like"
              },
              {
                title: "Close the Deal",
                desc: "Finalise with the dealer directly"
              }
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow border border-red-100"
              >
                <div className="text-5xl font-bold text-red-600/20 mb-2">
                  0{i + 1}
                </div>

                <h2 className="font-semibold text-black mb-2">
                  {step.title}
                </h2>

                <p className="text-black/70 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CORE VALUES ===== */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-black text-center mb-10">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Trust",
                desc: "We build relationships based on honesty and integrity."
              },
              {
                title: "Quality",
                desc: "Only the best and verified listings for all customers."
              },
              {
                title: "Commitment",
                desc: "We stay with you until the deal is successfully done."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-red-200 rounded-2xl text-center"
              >
                <h3 className="text-xl font-semibold text-black mb-3">
                  {item.title}
                </h3>

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
            Let's Find Your Dream Property
          </h3>

          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you want to buy, sell or rent – we connect you directly with trusted Delhi property dealers.
          </p>

          <Link
            href="/dealers"
            className="inline-block px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:scale-105 transition"
          >
            Browse Now
          </Link>
        </div>

      </div>
    </section>
  );
}
