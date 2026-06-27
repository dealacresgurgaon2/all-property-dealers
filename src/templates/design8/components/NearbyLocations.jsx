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
  const getCityForSearchAPI = (city) => {
  if (!city) return "";

  const lowerCity = city.toLowerCase().trim();

 

  return lowerCity.replace(/-/g, " ");
};
const fetchLocations = async () => {
  try {
    const mappedCity = getCityForSearchAPI(city);
    const res = await axios.get(
      `https://all-property-dealer-backend.onrender.com/api/area/locations/${encodeURIComponent(mappedCity)}`
    );

      setLocations(res.data.data || []);
    } catch (error) {
      console.log("LOCATION API ERROR =>", error);
    }
  };

  // 🔥 SHOW LOCATIONS
  const visibleLocations = locations.slice(
    startIndex,
    startIndex + 12
  );

  if (visibleLocations.length === 0) return null;

  return (
    <section className="w-full py-5">
      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border border-[#F3D9E3]
          bg-gradient-to-br
          from-[#FFF8FA]
          via-[#FFFDFD]
          to-[#FFF2F6]
          shadow-[0_12px_35px_rgba(118,21,60,0.08)]
        "
      >
        {/* BLUR EFFECT */}
        <div className="absolute top-0 right-0 w-52 h-52 bg-[#F8DDE8]/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-[#FFEAF1]/40 blur-3xl rounded-full" />

        <div className="relative z-10 p-5 sm:p-6">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

            <div className="flex items-center gap-2">

              <div
                className="
                  w-14 h-14
                  rounded-3xl
                  bg-gradient-to-br
                  from-[#76153C]
                  to-[#5A0E24]
                  flex items-center justify-center
                  shadow-[0_10px_25px_rgba(118,21,60,0.22)]
                "
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>

              <div>
                <h2
                  className="
                    text-[16px]
                    sm:text-[18px]
                    font-bold
                    text-[#2A0E18]
                    capitalize
                    leading-tight
                  "
                >
                  Nearby Locations In {city}
                </h2>

                <p className="text-sm text-[#8B5A6B] mt-1">
                  Explore nearby property dealer locations
                </p>
              </div>

            </div>

            {/* BUTTON */}
            <button
              className="
                flex items-center justify-center gap-2
                px-5 py-3
                rounded-2xl
                bg-gradient-to-r
                from-[#76153C]
                to-[#5A0E24]
                text-white
                font-medium
                text-sm
                shadow-[0_8px_20px_rgba(118,21,60,0.18)]
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
          <div className="flex flex-wrap gap-3">

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
                  flex items-center gap-2
                  px-5 py-1
                  rounded-2xl
                  border border-[#F3D9E3]
                  bg-white/90
                  backdrop-blur-sm
                  hover:bg-white
                  hover:border-[#DFAFBE]
                  hover:-translate-y-1
                  hover:scale-[1.02]
                  hover:shadow-[0_10px_25px_rgba(118,21,60,0.10)]
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
                    from-[#FFF5F8]
                    to-[#FFF0F4]
                  "
                />

                {/* ICON */}
                <div
                  className="
                    relative z-10
                    w-6 h-6
                    rounded-xl
                    bg-[#FFF1F5]
                    flex items-center justify-center
                    group-hover:bg-gradient-to-br
                    group-hover:from-[#76153C]
                    group-hover:to-[#5A0E24]
                    transition-all duration-300
                  "
                >
                  <MapPin
                    className="
                      w-4 h-4
                      text-[#76153C]
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
                      font-semibold
                      text-[#3A1020]
                      capitalize
                      whitespace-nowrap
                      group-hover:text-[#76153C]
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