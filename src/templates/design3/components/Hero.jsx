"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center"
      // style={{
      //   backgroundImage: "url('/images/ghj.png')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* PURPLE GRADIENT OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#5E23DC]/90
          via-[#5E23DC]/75
          to-[#5E23DC]/60
        "
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Find Your Dream Property <br />
              <span className="text-white/90">
                At Best Price
              </span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-xl">
              We help you buy, sell and rent properties in prime locations.
              100% verified listings and trusted property dealers.
            </p>

            <div className="flex gap-4">
              <button
                className="
                  px-6 py-3
                  bg-white
                  text-[#5E23DC]
                  rounded-md
                  font-semibold
                  hover:bg-white/60
                  transition
                "
              >
                Explore Properties
              </button>

              <button
                className="
                  px-6 py-3
                  border border-white
                  text-white
                  rounded-md
                  font-semibold
                  hover:bg-white
                  hover:text-[#5E23DC]
                  transition
                "
              >
                Contact Agent
              </button>
            </div>
          </div>

          {/* RIGHT GLASS FORM */}
          <div
            className="
              bg-white/20
              backdrop-blur-xl
              border border-white/30
              rounded-2xl
              shadow-2xl
              p-5 md:p-6
              max-w-sm
              ml-auto
              w-full
            "
          >
            <h3
              className="
                text-lg font-bold mb-4
                text-white
                text-center
              "
            >
              Get Free Consultation
            </h3>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  border border-white/40
                  bg-white
                  rounded-md
                  px-4 py-2
                  text-[#5E23DC]
                  placeholder-[#5E23DC]
                  outline-none
                "
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="
                  w-full
                  border border-white/40
                  bg-white
                  rounded-md
                  px-4 py-2
                  text-[#5E23DC]
                  placeholder-[#5E23DC]
                  outline-none
                "
              />

              <select
                className="
                  w-full
                  border border-white/40
                  bg-white
                  rounded-md
                  px-4 py-2
                  text-[#5E23DC]
                  outline-none
                "
              >
                <option>Looking for</option>
                <option>Buy Property</option>
                <option>Rent Property</option>
                <option>Sell Property</option>
              </select>

              <textarea
                rows={3}
                placeholder="Your Message"
                className="
                  w-full
                  border border-white/40
                  bg-white
                  rounded-md
                  px-4 py-2
                  text-[#5E23DC]
                  placeholder-[#5E23DC]
                  outline-none
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-white
                  text-[#5E23DC]
                  py-2.5
                  rounded-md
                  font-semibold
                  hover:bg-white/90
                  transition
                "
              >
                Submit Query
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
