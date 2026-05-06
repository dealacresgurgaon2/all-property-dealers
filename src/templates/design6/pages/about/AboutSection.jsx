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

          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Building Trust in Real Estate
          </h1>

          <p className="text-black/70 max-w-3xl mx-auto text-lg">
            We help people find honest, reliable and experienced real estate dealers. Transparency and expert guidance.
          </p>
        </div>

        {/* ===== FEATURE STATS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">

          {[
            { v: "10+", l: "Years Experience" },
            { v: "5000+", l: "Happy Users" },
            { v: "2000+", l: "Properties Listed" },
            { v: "25+", l: "Noida Locations" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center border border-green-200 hover:shadow-xl transition"
            >
              <h2 className="text-4xl font-bold text-green-700 mb-2">
                {item.v}
              </h2>
              <p className="text-black/70">{item.l}</p>
            </div>
          ))}

        </div>

        {/* ===== ABOUT CONTENT BLOCK ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">

          {/* Left Box */}
          <div>
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              Who We Are
            </h3>

            <p className="text-black/80 leading-7 mb-4">
              Finding property in Noida can be really stressful. So many dealers, so many options — it gets confusing fast.
            </p>

            <p className="text-black/80 leading-7 mb-4">
              We created this directory to make it simple. Every property dealer in Noida is listed here in one place. You can browse all properties, compare prices, and contact dealers directly.
            </p>

            <p className="text-black/80 leading-7">
              No more calling 20 people. No more confusion. Just find what you need and call the dealer.
            </p>
          </div>

          {/* Right Box */}
          <div className="bg-green-50 p-10 rounded-3xl border border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Our Mission
            </h3>

            <p className="text-black/80 leading-7 mb-4">
              To become India's most trusted real estate platform by delivering transparency, accuracy, and genuine property solutions.
            </p>

            <p className="text-black/80 leading-7">
              We connect people with verified dealers so you can find the right property without any stress or confusion.
            </p>
          </div>

        </div>

        {/* ===== WHY PEOPLE CHOOSE US ===== */}
        <div className="mb-24">

          <h3 className="text-3xl font-bold text-black mb-10 text-center">
            Why People Choose Us
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: "Verified Dealers",
                desc: "We display all verified real estate dealers with complete transparency."
              },
              {
                title: "Budget Compliance",
                desc: "Find properties completely that suit your budget right away-no wasted time."
              },
              {
                title: "Transparent Deals",
                desc: "No hidden charges, only honest and clear real estate dealings."
              },
              {
                title: "People Network",
                desc: "Thousands of satisfied families chose homes through our platform."
              },
              {
                title: "24/7 Support",
                desc: "Get expert assistance at any time. Help is just a call or chat away."
              },
              {
                title: "Legal Help",
                desc: "Expert with documentation and paperwork guidance."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-green-200 rounded-2xl bg-white hover:bg-green-50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xl font-bold mb-4">
                  ✓
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

        {/* ===== OUR SIMPLE PROCESS ===== */}
        <div className="mb-24 bg-white rounded-3xl p-10 border border-green-200">

          <h3 className="text-3xl font-bold text-black text-center mb-12">
            Our Simple Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {[
              {
                title: "Share Requirements",
                desc: "Tell us what property you're looking for"
              },
              {
                title: "See Verified Listings",
                desc: "Browse all properties from trusted Noida dealers"
              },
              {
                title: "Visit Properties",
                desc: "Shortlist and visit properties that you like"
              },
              {
                title: "Close Your Deal",
                desc: "Connect with dealer and complete your property deal"
              }
            ].map((step, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 text-center border border-green-200"
              >
                <div className="text-5xl font-bold text-green-600/20 mb-2">
                  0{i + 1}
                </div>

                <h3 className="font-semibold text-black mb-2">
                  {step.title}
                </h3>

                <p className="text-black/70 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ===== OUR VALUES ===== */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-black text-center mb-10">
            Our Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: "Honesty",
                desc: "Being transparent and true to honesty with all transactions."
              },
              {
                title: "Integrity",
                desc: "We uphold professional conduct through ethical practices."
              },
              {
                title: "Commitment",
                desc: "We support you in getting best deal, dedicated guidance."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-green-200 rounded-2xl text-center"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-3">
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
        <div className="bg-green-600 rounded-3xl p-12 text-center text-white">

          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h3>

          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Explore verified properties across Noida. Connect directly with trusted dealers.
          </p>

          <Link
            href="/"
            className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:scale-105 transition"
          >
            Browse Dealers
          </Link>

        </div>

      </div>
    </section>
  );
}
