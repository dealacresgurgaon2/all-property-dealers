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
      {/* SOFT GRADIENT OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#422c18]/80
          via-[#422c18]/60
          to-[#422c18]/40
        "
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-[#f2e8e1]">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Find Your Dream Property <br />
              <span className="text-[#e6d6c7]">
                At Best Price
              </span>
            </h1>

            <p className="text-lg text-[#e6d6c7] mb-8 max-w-xl">
              We help you buy, sell and rent properties in prime locations.
              100% verified listings and trusted property dealers.
            </p>

            <div className="flex gap-4">
              <button
                className="
                  px-6 py-3
                  bg-[#f2e8e1]
                  text-[#422c18]
                  rounded-md
                  font-semibold
                  hover:opacity-90
                  transition
                "
              >
                Explore Properties
              </button>

              <button
                className="
                  px-6 py-3
                  border border-[#f2e8e1]
                  text-[#f2e8e1]
                  rounded-md
                  font-semibold
                  hover:bg-[#f2e8e1]
                  hover:text-[#422c18]
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
              bg-[#f2e8e1]/20
              backdrop-blur-xl
              border border-[#f2e8e1]/30
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
                text-[#f2e8e1]
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
                  border border-[#f2e8e1]/40
                  bg-[#422c18]/30
                  rounded-md
                  px-4 py-2
                  text-[#f2e8e1]
                  placeholder-[#e6d6c7]
                  outline-none
                "
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="
                  w-full
                  border border-[#f2e8e1]/40
                  bg-[#422c18]/30
                  rounded-md
                  px-4 py-2
                  text-[#f2e8e1]
                  placeholder-[#e6d6c7]
                  outline-none
                "
              />

              <select
                className="
                  w-full
                  border border-[#f2e8e1]/40
                  bg-[#422c18]/30
                  rounded-md
                  px-4 py-2
                  text-[#f2e8e1]
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
                  border border-[#f2e8e1]/40
                  bg-[#422c18]/30
                  rounded-md
                  px-4 py-2
                  text-[#f2e8e1]
                  placeholder-[#e6d6c7]
                  outline-none
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-[#f2e8e1]
                  text-[#422c18]
                  py-2.5
                  rounded-md
                  font-semibold
                  hover:opacity-90
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
