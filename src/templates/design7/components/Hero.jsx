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
    const duration = 2200;
    const steps = 60;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setCounts({
        listings: Math.min(Math.round((targets.listings / steps) * step), targets.listings),
        cities: Math.min(Math.round((targets.cities / steps) * step), targets.cities),
        years: Math.min(Math.round((targets.years / steps) * step), targets.years),
      });

      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-black text-white">

      {/* ===== UNIQUE BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,70,229,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(236,72,153,0.25),transparent_50%)]" />

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ===== LEFT CONTENT - TOTALLY NEW STYLE ===== */}
          <div className="space-y-6">

            <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              🚀 India’s Fastest Growing Property Portal
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
              Redefining  
              <span className="block bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                Real Estate Experience
              </span>
            </h1>

            <p className="text-gray-300 max-w-lg">
              Smart way to buy, sell and rent properties with 100% verified
              dealers and transparent process across India.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-7 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 font-semibold hover:scale-105 transition">
                Start Exploring
              </button>

              <button className="px-7 py-3 rounded-lg border border-white/30 hover:bg-white hover:text-black transition">
                Become Partner
              </button>
            </div>

            {/* ===== STATS CARDS ===== */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <ModernStat value={`${counts.listings}+`} label="Listings" />
              <ModernStat value={`${counts.cities}+`} label="Cities" />
              <ModernStat value={`${counts.years}+`} label="Experience" />
            </div>
          </div>

          {/* ===== RIGHT SIDE - FLOATING FORM DESIGN ===== */}
          <div className="relative">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl" />

            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">

              <h3 className="text-xl font-bold mb-4 text-center">
                Quick Property Help
              </h3>

              <form className="space-y-4">

                <div className="grid grid-cols-2 gap-3">
                  <input
                    className="w-full bg-white/90 text-black px-4 py-2 rounded-lg outline-none"
                    placeholder="First Name"
                  />

                  <input
                    className="w-full bg-white/90 text-black px-4 py-2 rounded-lg outline-none"
                    placeholder="Last Name"
                  />
                </div>

                <input
                  className="w-full bg-white/90 text-black px-4 py-2 rounded-lg outline-none"
                  placeholder="Mobile Number"
                />

                <select className="w-full bg-white/90 text-black px-4 py-2 rounded-lg outline-none">
                  <option>Select Requirement</option>
                  <option>Buy Property</option>
                  <option>Rent Property</option>
                  <option>Sell Property</option>
                </select>

                <textarea
                  rows={3}
                  className="w-full bg-white/90 text-black px-4 py-2 rounded-lg outline-none"
                  placeholder="Describe your requirement..."
                />

                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold hover:scale-[1.03] transition">
                  Get Callback
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ModernStat({ value, label }) {
  return (
    <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-center hover:scale-105 transition">
      <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 text-transparent bg-clip-text">
        {value}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}
