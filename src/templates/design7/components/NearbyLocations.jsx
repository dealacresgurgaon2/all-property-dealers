"use client";

import axios from "axios";
import { MapPin, Navigation } from "lucide-react";
import { useEffect, useState } from "react";

export default function NearbyLocations({
  city,
  startIndex = 0,
}) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (!city) return;

    fetchLocations();
  }, [city]);

  const fetchLocations = async () => {
    try {
      const res = await axios.get(
        `https://all-property-dealer-backend.onrender.com/api/area/locations/${city}`
      );

      setLocations(res.data.data || []);
    } catch (error) {
      console.log("LOCATION API ERROR =>", error);
    }
  };

  // 🔥 SHOW 12 LOCATIONS
  const visibleLocations = locations.slice(
    startIndex,
    startIndex + 12
  );

  if (visibleLocations.length === 0) return null;

  return (
    <section className="w-full py-6">
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border border-[#E8EAFD]
          bg-gradient-to-br
          from-[#EEF2FF]
          via-[#FFFFFF]
          to-[#F7F5FF]
          shadow-[0_15px_40px_rgba(79,70,229,0.10)]
        "
      >
        {/* TOP BLUR */}
        <div className="absolute top-0 right-0 w-52 h-52 bg-indigo-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-purple-200/30 blur-3xl rounded-full" />

        <div className="relative z-10 p-5 sm:p-7">
          
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-7">
            
            <div className="flex items-center gap-4">
              
              <div
                className="
                  w-14 h-14
                  rounded-3xl
                  bg-gradient-to-br
                  from-indigo-600
                  to-purple-600
                  flex items-center justify-center
                  shadow-[0_10px_25px_rgba(79,70,229,0.25)]
                "
              >
                <MapPin className="w-7 h-7 text-white" />
              </div>

              <div>
                <h2
                  className="
                    text-[18px]
                    sm:text-[18px]
                    font-black
                    text-gray-900
                    capitalize
                    leading-tight
                  "
                >
                  Nearby Locations In {city}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Explore top nearby property dealer areas
                </p>
              </div>
            </div>

            {/* LOCATION BUTTON */}
            <button
              className="
                flex items-center justify-center gap-1
                px-6 py-2
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                text-white
                font-semibold
                text-sm
                shadow-[0_10px_25px_rgba(79,70,229,0.22)]
                hover:scale-[1.03]
                active:scale-[0.98]
                transition-all duration-300
              "
            >
              <Navigation className="w-4 h-4" />
              Use Precise Location
            </button>
          </div>

          {/* LOCATION LIST */}
          <div className="flex flex-wrap gap-2">
            {visibleLocations.map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  window.open(
                    `https://www.dealacres.com/${city.toLowerCase()}/property-dealer`,
                    "_blank"
                  )
                }
                className="
group
relative
overflow-hidden
flex items-center gap-1
px-5 py-2
rounded-2xl
border border-[#E4E7FF]
bg-white/90
backdrop-blur-sm
hover:bg-white
hover:border-indigo-400
hover:-translate-y-1
hover:scale-[1.02]
hover:shadow-[0_12px_30px_rgba(79,70,229,0.14)]
transition-all duration-300
cursor-pointer
"
              >
                {/* HOVER BG */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition duration-300
                    bg-gradient-to-r
                    from-indigo-50
                    to-purple-50
                  "
                />

                {/* ICON */}
                <div
                  className="
                    relative z-10
                    w-5 h-5
                    rounded-xl
                    bg-indigo-100
                    flex items-center justify-center
                    group-hover:bg-gradient-to-br
                    group-hover:from-indigo-600
                    group-hover:to-purple-600
                    transition-all duration-300
                  "
                >
                  <MapPin
                    className="
                      w-5 h-5
                      text-indigo-600
                      group-hover:text-white
                      transition-all duration-300
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="relative z-10">
                  <h3
                    className="
                      text-sm
                      font-bold
                      text-gray-800
                      capitalize
                      whitespace-nowrap
                      group-hover:text-indigo-700
                      transition
                    "
                  >
                    {item.location}
                  </h3>

               
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}