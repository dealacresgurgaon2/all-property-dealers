"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [counts, setCounts] = useState({
    listings: 0,
    cities: 0,
    years: 0,
  });

  useEffect(() => {
    const targets = { listings: 5000, cities: 25, years: 10 };
    const duration = 2000; // 2 sec (slow & premium)
    const steps = 60;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setCounts({
        listings: Math.min(
          Math.round((targets.listings / steps) * step),
          targets.listings
        ),
        cities: Math.min(
          Math.round((targets.cities / steps) * step),
          targets.cities
        ),
        years: Math.min(
          Math.round((targets.years / steps) * step),
          targets.years
        ),
      });

      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/you.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-[#b8964a]/35 to-black/75" />

      {/* LIGHT BLOBS */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#d4af37]/15 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 blur-3xl rounded-full" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm animate-text-up">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              Trusted • Verified • Premium
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 animate-text-up-delay-1">
              Find Your{" "}
              <span className="relative text-[#d4af37]">
                Dream Property
                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
              </span>
              <br />
              At Best Price
            </h1>

            <p className="text-lg text-white/85 mb-8 max-w-xl animate-text-up-delay-2">
              Buy, sell & rent luxury properties in prime locations.
              100% verified listings with trusted property dealers.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap mb-8 animate-text-up-delay-3">
              <button className="px-6 py-3 bg-[#d4af37] text-black rounded-md font-semibold shadow-lg hover:-translate-y-1 transition">
                Explore Properties
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-black transition">
                Contact Agent
              </button>
            </div>

            {/* 🔢 ANIMATED STATS */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <Stat value={`${counts.listings.toLocaleString()}+`} label="Verified Listings" />
              <Stat value={`${counts.cities}+`} label="Cities Covered" />
              <Stat value={`${counts.years}+`} label="Years Experience" />
            </div>
          </div>

          {/* RIGHT FORM (UNCHANGED) */}
          <div className="bg-white/15 backdrop-blur-xl border border-[#d4af37]/40 rounded-2xl shadow-2xl p-5 md:p-6 max-w-sm ml-auto w-full">
            <h3 className="text-lg font-bold mb-4 text-white text-center">
              Get Free Consultation
            </h3>
            <form className="space-y-3">
              <input className="w-full bg-white rounded-md px-4 py-2 text-black border border-[#d4af37]/30" placeholder="Your Name" />
              <input className="w-full bg-white rounded-md px-4 py-2 text-black border border-[#d4af37]/30" placeholder="Phone Number" />
              <select className="w-full bg-white rounded-md px-4 py-2 text-black border border-[#d4af37]/30">
                <option>Looking for</option>
                <option>Buy Property</option>
                <option>Rent Property</option>
                <option>Sell Property</option>
              </select>
              <textarea rows={3} className="w-full bg-white rounded-md px-4 py-2 text-black border border-[#d4af37]/30" placeholder="Your Message" />
              <button className="w-full bg-[#d4af37] text-black py-2.5 rounded-md font-semibold hover:bg-[#c9a227] transition">
                Submit Query
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

/* 🔹 SMALL STAT COMPONENT */
function Stat({ value, label }) {
  return (
    <div className="bg-white/15 backdrop-blur border border-white/20 rounded-xl p-3 text-center">
      <div className="text-xl font-bold text-[#d4af37]">{value}</div>
      <div className="text-xs text-white/80">{label}</div>
    </div>
  );
}
