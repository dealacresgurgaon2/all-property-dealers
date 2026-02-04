"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== HERO HEADER ===== */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-4">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Building Trust in Real Estate
          </h2>

          <p className="text-black/70 max-w-3xl mx-auto text-lg">
            We help people find homes, offices and investments with confidence,
            transparency and expert guidance.
          </p>
        </div>

        {/* ===== FEATURE STATS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">

          {[
            { v: "10+", l: "Years Experience" },
            { v: "5000+", l: "Happy Clients" },
            { v: "2000+", l: "Properties Sold" },
            { v: "25+", l: "Cities Covered" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center border border-green-200 hover:shadow-xl transition"
            >
              <h4 className="text-4xl font-bold text-green-700 mb-2">
                {item.v}
              </h4>
              <p className="text-black/70">{item.l}</p>
            </div>
          ))}

        </div>

        {/* ===== ABOUT CONTENT BLOCK ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">

          <div>
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              Who We Are
            </h3>

            <p className="text-black/80 leading-7 mb-4">
              PropertyDealer is a modern real estate platform that connects buyers, sellers and agents in one seamless ecosystem. Our mission is to simplify property transactions and make them secure and hassle-free.
            </p>

            <p className="text-black/80 leading-7">
              With verified dealers, genuine listings and professional support, we ensure every customer gets the best real estate experience.
            </p>
          </div>

          <div className="bg-green-50 p-10 rounded-3xl border border-green-200">
            <h4 className="text-2xl font-bold text-green-700 mb-4">
              Our Mission
            </h4>

            <p className="text-black/80 leading-7">
              To become India’s most trusted real estate platform by delivering transparent deals, expert guidance and reliable property solutions for every customer.
            </p>
          </div>

        </div>

        {/* ===== WHY CHOOSE US ===== */}
        <div className="mb-24">

          <h3 className="text-3xl font-bold text-black mb-10 text-center">
            Why People Choose Us
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: "Verified Dealers",
                desc: "All dealers and listings are carefully verified for authenticity."
              },
              {
                title: "Expert Guidance",
                desc: "Professional consultants help you make the right decisions."
              },
              {
                title: "Transparent Deals",
                desc: "No hidden charges, only honest and clear transactions."
              },
              {
                title: "Huge Network",
                desc: "Thousands of listings across multiple cities."
              },
              {
                title: "24/7 Support",
                desc: "Dedicated assistance at every step of your journey."
              },
              {
                title: "Legal Help",
                desc: "Support with documentation and paperwork."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-green-200 rounded-2xl bg-white hover:bg-green-50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xl font-bold mb-4">
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

        {/* ===== PROCESS FLOW ===== */}
        <div className="mb-24 bg-white rounded-3xl p-10 border border-green-200">

          <h3 className="text-3xl font-bold text-black text-center mb-12">
            Our Simple Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {[
              "Share Requirements",
              "Get Verified Options",
              "Visit Properties",
              "Close Hassle-Free Deal"
            ].map((step, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 text-center border border-green-200"
              >
                <div className="text-5xl font-bold text-green-600/20 mb-2">
                  0{i + 1}
                </div>

                <h4 className="font-semibold text-black">
                  {step}
                </h4>
              </div>
            ))}

          </div>
        </div>

        {/* ===== CORE VALUES ===== */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-black text-center mb-10">
            Our Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: "Trust",
                desc: "Strong relationships built on honesty and reliability."
              },
              {
                title: "Quality",
                desc: "Only verified and premium property listings."
              },
              {
                title: "Commitment",
                desc: "We support you until the deal is completed."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-green-200 rounded-2xl text-center"
              >
                <h4 className="text-xl font-semibold text-green-700 mb-3">
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
        <div className="bg-green-600 rounded-3xl p-12 text-center text-white">

          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h3>

          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our experts are here to guide you through every step of buying, selling or renting a property.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:scale-105 transition"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}
