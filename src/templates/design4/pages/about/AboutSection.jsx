"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* PREMIUM BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec]" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#D02752]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-[#fde6ec] text-[#D02752] font-semibold mb-4">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8A244B] mb-4">
            Building Trust in Real Estate
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Helping you connect with trusted property dealers with full transparency and expert guidance.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {[
            { v: "10+", l: "Years Experience" },
            { v: "5000+", l: "Happy Users" },
            { v: "2000+", l: "Properties Listed" },
            { v: "25+", l: "Locations Covered" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center border border-[#f3c6d1] shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <h4 className="text-4xl font-bold text-[#D02752] mb-2">
                {item.v}
              </h4>
              <p className="text-gray-500">{item.l}</p>
            </div>
          ))}
        </div>

        {/* ABOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">

          <div>
            <h3 className="text-3xl font-bold text-[#8A244B] mb-4">
              Who We Are
            </h3>

            <p className="text-gray-700 leading-7 mb-4">
              Finding property can be overwhelming with so many options and dealers.
            </p>

            <p className="text-gray-700 leading-7 mb-4">
              Our platform simplifies everything by listing trusted dealers and verified properties.
            </p>

            <p className="text-gray-700 leading-7">
              Compare, choose, and connect directly — without confusion.
            </p>
          </div>

          <div className="relative group">

            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D02752] to-[#8A244B] rounded-3xl blur opacity-20 group-hover:opacity-40 transition" />

            <div className="relative bg-[#fde6ec] p-10 rounded-3xl border border-[#f3c6d1]">
              <h4 className="text-2xl font-bold text-[#D02752] mb-4">
                Our Mission
              </h4>

              <p className="text-gray-700 leading-7 mb-4">
                To become India’s most trusted real estate platform with transparency.
              </p>

              <p className="text-gray-700 leading-7">
                We connect buyers with verified dealers for stress-free decisions.
              </p>
            </div>

          </div>

        </div>

        {/* WHY US */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-[#8A244B] mb-10 text-center">
            Why People Choose Us
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Verified Dealers", desc: "100% verified professionals." },
              { title: "Budget Friendly", desc: "Properties for every budget." },
              { title: "Transparent Deals", desc: "No hidden charges." },
              { title: "Strong Network", desc: "Thousands of happy users." },
              { title: "24/7 Support", desc: "Always available to help." },
              { title: "Legal Help", desc: "Full documentation support." }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-[#f3c6d1] rounded-2xl bg-white hover:bg-[#fde6ec] hover:-translate-y-1 transition shadow-sm hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-[#fde6ec] text-[#D02752] flex items-center justify-center text-xl font-bold mb-4">
                  ✓
                </div>

                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS */}
        <div className="mb-24 relative group">

          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D02752] to-[#8A244B] rounded-3xl blur opacity-20 group-hover:opacity-40 transition" />

          <div className="relative bg-white rounded-3xl p-10 border border-[#f3c6d1] shadow-lg">

            <h3 className="text-3xl font-bold text-[#8A244B] text-center mb-12">
              Our Simple Process
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Share Needs", desc: "Tell your requirement" },
                { title: "Browse Listings", desc: "Explore properties" },
                { title: "Visit Sites", desc: "Shortlist & visit" },
                { title: "Close Deal", desc: "Finalize property" }
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-[#fde6ec] rounded-xl p-6 text-center border border-[#f3c6d1]"
                >
                  <div className="text-5xl font-bold text-[#D02752]/20 mb-2">
                    0{i + 1}
                  </div>

                  <h4 className="font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* VALUES */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-[#8A244B] text-center mb-10">
            Our Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Honesty", desc: "We believe in transparency." },
              { title: "Integrity", desc: "Ethical practices." },
              { title: "Commitment", desc: "Dedicated to results." }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-[#f3c6d1] rounded-2xl text-center shadow-sm hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold text-[#D02752] mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl p-12 text-center text-white overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#D02752] to-[#8A244B]" />
          <div className="absolute inset-0 opacity-20 bg-white blur-2xl" />

          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Dream Property?
            </h3>

            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Explore verified properties and connect with trusted dealers.
            </p>

            <Link
              href="/"
              className="inline-block px-8 py-3 bg-white text-[#D02752] font-semibold rounded-lg hover:scale-105 transition shadow-md"
            >
              Browse Dealers
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}