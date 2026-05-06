"use client";

import Image from "next/image";
import Link from "next/link";

export default function CityButtonsFilter() {

  const cities = [
    "Faridabad",
    "Gurgaon",
    "Sonipat",
    "Hisar",
    "Panipat",
    "Rohtak",
    "Karnal",
    "Ambala",
  ];

  return (

    <div className="mt-10">

      {/* TOP */}
      <div className="flex items-center justify-between mb-6">

        <div>

          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              border border-[#F3D9E3]
              bg-white
              text-[#76153C]
              text-sm
              font-medium
              shadow-sm
              mb-4
            "
          >

            <div className="w-2 h-2 rounded-full bg-[#76153C]" />

            Popular Cities

          </div>

          <h4
            className="
              text-2xl md:text-3xl
              font-bold
              text-[#2A0E18]
            "
          >

            Quick City Filters

          </h4>

        </div>

      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        "
      >

        {cities.map((city, index) => (

          <Link
            key={index}
            href={`/property-dealer-in-${city.toLowerCase()}`}
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border border-[#F3D9E3]
              bg-gradient-to-br
              from-[#FFF8FA]
              via-white
              to-[#FFF3F7]
              p-5
              shadow-[0_10px_35px_rgba(118,21,60,0.08)]
              hover:-translate-y-2
              hover:shadow-[0_18px_45px_rgba(118,21,60,0.14)]
              transition-all
              duration-300
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute top-0 right-0
                w-32 h-32
                bg-[#76153C]/5
                blur-3xl
                rounded-full
              "
            />

            <div className="relative z-10">

              {/* ICON */}
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#76153C]
                  to-[#5A0E24]
                  flex items-center justify-center
                  shadow-md
                  mb-5
                "
              >

                <div className="relative w-7 h-7">

                  <Image
                    src="/ico.png"
                    alt="agent"
                    fill
                    className="
                      object-contain
                      group-hover:scale-110
                      transition-transform
                      duration-300
                    "
                  />

                </div>

              </div>

              {/* TEXT */}
              <h5
                className="
                  text-lg
                  font-bold
                  text-[#2A0E18]
                  leading-7
                  group-hover:text-[#76153C]
                  transition
                "
              >

                Property Dealers in {city}

              </h5>

              <p
                className="
                  text-sm
                  text-gray-500
                  mt-2
                  leading-6
                "
              >

                Trusted real estate agents and
                consultants in {city}.

              </p>

              {/* BUTTON */}
              <div
                className="
                  mt-5
                  inline-flex items-center gap-2
                  text-[#76153C]
                  font-semibold
                  text-sm
                "
              >

                Explore Now

                <span
                  className="
                    group-hover:translate-x-1
                    transition
                  "
                >
                  →
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* VIEW ALL */}
      <div className="flex justify-center mt-8">

        <Link
          href="/all-property-dealer"
          className="
            h-12
            px-6
            rounded-2xl
            bg-gradient-to-r
            from-[#76153C]
            to-[#5A0E24]
            text-white
            font-semibold
            flex items-center gap-2
            shadow-[0_10px_25px_rgba(118,21,60,0.18)]
            hover:opacity-90
            transition
          "
        >

          View All Cities

          <span
            className="
              group-hover:translate-x-1
              transition
            "
          >
            →
          </span>

        </Link>

      </div>

    </div>

  );
}