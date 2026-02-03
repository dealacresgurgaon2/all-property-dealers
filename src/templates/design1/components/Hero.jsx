"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center"
      style={{
        backgroundImage: "url('/images/ghj.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK BLUE OVERLAY */}
      <div className="absolute inset-0 bg-[#0b1f33]/50"></div>

      {/* SOFT BLUE GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/30 via-transparent to-[#38bdf8]/20"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Smart & Trusted <br />
              <span className="text-[#38bdf8]">Property Solutions</span>
            </h1>

            <p className="text-base md:text-lg text-white/75 mb-7 max-w-xl">
              Verified listings, expert consultants and transparent deals
              for buying, selling and renting properties.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="px-7 py-3 bg-[#1e40af] text-white rounded-md font-semibold hover:bg-[#1d4ed8] transition">
                Explore Properties
              </button>

              <button className="px-7 py-3 border border-[#38bdf8]/60 text-[#38bdf8] rounded-md font-semibold hover:bg-[#38bdf8] hover:text-[#0b1f33] transition">
                Talk to Expert
              </button>
            </div>
          </div>

          {/* RIGHT FORM – FINAL */}
          <div className="max-w-sm ml-auto w-full bg-white rounded shadow-xl p-5">
            <h3 className="text-lg font-semibold text-[#0b1f33] text-center">
              Get Expert Advice
            </h3>
            <p className="text-xs text-gray-500 text-center mb-4">
              We will contact you shortly
            </p>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm text-[#0b1f33] placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af]"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm text-[#0b1f33] placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af]"
              />

              <select
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm text-[#0b1f33] outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af]"
              >
                <option value="">Looking For</option>
                <option>Buy Property</option>
                <option>Rent Property</option>
                <option>Sell Property</option>
              </select>

              <textarea
                rows={2}
                placeholder="Your Message"
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm text-[#0b1f33] placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af]"
              />

              <button
                type="submit"
                className="w-full bg-[#1e40af] text-white py-2.5 rounded-md text-sm font-semibold hover:bg-[#1d4ed8] transition"
              >
                Request Callback
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
