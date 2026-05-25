"use client";

import axios from "axios";
import {
  MapPin,
  Navigation,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

export default function NearbyLocations({
  city,
  startIndex = 0,
}) {
  const [locations, setLocations] = useState([]);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (!city) return;

    fetchLocations();
  }, [city]);

  const fetchLocations = async () => {
    try {
      const res = await axios.get(
        `https://property-dealer-xa5g.onrender.com/api/area/locations/${city}`
      );

      console.log("API RESPONSE =>", res.data);

      setLocations(res.data.data || []);
    } catch (error) {
      console.log("LOCATION API ERROR =>", error);
    }
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  // 🔥 NEXT 10 LOCATIONS
  const visibleLocations = locations.slice(
    startIndex,
    startIndex + 10
  );

  // 🔥 AGAR LOCATIONS NHI HAI TO RENDER MAT KARO
  if (visibleLocations.length === 0) return null;

  return (
    <section className="w-full py-5">
      <div className="bg-indigo-600 border border-gray-200 rounded-[22px] p-5">
        <div className="bg-[#fafafa] border border-gray-200 rounded-2xl px-4 py-5">

          {/* HEADING */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-indigo-600" />
            </div>

            <h2 className="text-[18px] sm:text-[20px] font-bold text-[#222] capitalize">
              Nearby Locations In {city}
            </h2>
          </div>

          {/* MAIN ROW */}
          <div className="flex items-center gap-3">

            {/* BUTTON */}
            <button
              className="
                shrink-0
                flex items-center gap-2
                px-5 py-3
                rounded-xl
                bg-gradient-to-r from-indigo-600 to-purple-600
                text-white
                font-medium
                text-sm
                shadow-sm
                hover:opacity-90
                transition
              "
            >
              <Navigation className="w-4 h-4" />
              Use Precise Location
            </button>

            {/* LEFT */}
            <button
              onClick={scrollLeft}
              className="
                shrink-0
                w-11 h-11
                rounded-xl
                bg-white
                border border-gray-300
                flex items-center justify-center
                text-gray-700
                hover:bg-indigo-50
                hover:border-indigo-400
                hover:text-indigo-600
                transition
              "
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* SCROLLABLE */}
            <div
              ref={scrollRef}
              className="
                flex items-center gap-3
                overflow-x-auto
                scroll-smooth
                flex-1
                [-ms-overflow-style:none]
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
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
                    shrink-0
                    px-6 py-3
                    rounded-xl
                    bg-[#f5f5f5]
                    border border-gray-300
                    text-gray-700
                    text-sm
                    font-medium
                    hover:bg-indigo-50
                    hover:border-indigo-400
                    hover:text-indigo-600
                    transition-all duration-200
                    cursor-pointer
                  "
                >
                  {item.location}
                </button>
              ))}
            </div>

            {/* RIGHT */}
            <button
              onClick={scrollRight}
              className="
                shrink-0
                w-11 h-11
                rounded-xl
                bg-white
                border border-gray-300
                flex items-center justify-center
                text-gray-700
                hover:bg-indigo-50
                hover:border-indigo-400
                hover:text-indigo-600
                transition
              "
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}