"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[75vh] flex items-center"
      style={{
        backgroundImage: "url('/images/ghj.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* MAIN DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#0b1f33]/70"></div>

      {/* SUBTLE GRADIENT GLOW - WHITE TONE */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ======= LEFT SIDE – FORM (NOW LEFT) ======= */}
          <div
            className="
              max-w-sm
              mr-auto
              w-full
              bg-white
              rounded-xl
              shadow-2xl
              p-6
              border-t-4
              border-[#ff7a1a]
            "
          >
            <h3 className="text-lg font-bold text-[#0b1f33] text-center">
              Get Expert Advice
            </h3>

            <p className="text-sm text-gray-500 text-center mb-5">
              Fill details and our team will contact you soon
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full
                  border border-gray-300
                  rounded-md
                  px-4 py-2.5
                  text-sm
                  text-[#0b1f33]
                  placeholder-gray-500
                  outline-none
                  focus:ring-2
                  focus:ring-[#ff7a1a]
                  focus:border-[#ff7a1a]
                  transition
                "
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="
                  w-full
                  border border-gray-300
                  rounded-md
                  px-4 py-2.5
                  text-sm
                  text-[#0b1f33]
                  placeholder-gray-500
                  outline-none
                  focus:ring-2
                  focus:ring-[#ff7a1a]
                  focus:border-[#ff7a1a]
                  transition
                "
              />

              <select
                className="
                  w-full
                  border border-gray-300
                  rounded-md
                  px-4 py-2.5
                  text-sm
                  text-[#0b1f33]
                  outline-none
                  focus:ring-2
                  focus:ring-[#ff7a1a]
                  focus:border-[#ff7a1a]
                  transition
                "
              >
                <option value="">Looking For</option>
                <option>Buy Property</option>
                <option>Rent Property</option>
                <option>Sell Property</option>
              </select>

              <textarea
                rows={2}
                placeholder="Your Message"
                className="
                  w-full
                  border border-gray-300
                  rounded-md
                  px-4 py-2.5
                  text-sm
                  text-[#0b1f33]
                  placeholder-gray-500
                  outline-none
                  focus:ring-2
                  focus:ring-[#ff7a1a]
                  focus:border-[#ff7a1a]
                  transition
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-[#ff7a1a]
                  text-white
                  py-3
                  rounded-md
                  text-sm
                  font-semibold
                  hover:bg-[#ff6b00]
                  transition
                  shadow-md
                "
              >
                Request Callback
              </button>
            </form>
          </div>

          {/* ======= RIGHT SIDE – CONTENT (NOW RIGHT) ======= */}
          <div className="text-white md:pl-10">
            <span className="inline-block text-sm text-[#ff7a1a] font-semibold mb-3 tracking-wider">
              TRUSTED REAL ESTATE PARTNER
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Smart & Reliable <br />
              <span className="text-white">
                Property Solutions
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Verified listings, expert consultants and transparent deals
              for buying, selling and renting properties across prime locations.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                className="
                  px-7 py-3
                  bg-[#ff7a1a]
                  text-white
                  rounded-md
                  font-semibold
                  hover:bg-[#ff6b00]
                  transition
                  shadow-lg
                "
              >
                Explore Properties
              </button>

              <button
                className="
                  px-7 py-3
                  border border-white/70
                  text-white
                  rounded-md
                  font-semibold
                  hover:bg-white
                  hover:text-[#0b1f33]
                  transition
                "
              >
                Talk to Expert
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
