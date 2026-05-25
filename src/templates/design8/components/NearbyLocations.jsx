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

  const visibleLocations = locations.slice(
    startIndex,
    startIndex + 10
  );

  if (visibleLocations.length === 0) return null;

  return (

    <section className="w-full py-5">

      <div
        className="
          rounded-[28px]
          border border-[#F3D9E3]
          bg-gradient-to-br
          from-[#FFF8FA]
          via-[#FFFDFD]
          to-[#FFF2F6]
          shadow-[0_10px_35px_rgba(118,21,60,0.08)]
          overflow-hidden
        "
      >

        <div className="p-5">

          {/* HEADING */}
          <div className="flex items-center gap-3 mb-5">

            <div
              className="
                w-11 h-11
                rounded-2xl
                bg-gradient-to-br
                from-[#76153C]
                to-[#5A0E24]
                flex items-center justify-center
                shadow-md
              "
            >

              <MapPin className="w-5 h-5 text-white" />

            </div>

            <h2
              className="
                text-[18px]
                sm:text-[22px]
                font-bold
                text-[#2A0E18]
                capitalize
              "
            >
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
                rounded-2xl
                bg-gradient-to-r
                from-[#76153C]
                to-[#5A0E24]
                text-white
                font-medium
                text-sm
                shadow-[0_8px_20px_rgba(118,21,60,0.18)]
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
                rounded-2xl
                bg-white
                border border-[#F3D9E3]
                flex items-center justify-center
                text-[#76153C]
                hover:bg-[#FFF5F8]
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
                    rounded-2xl
                    bg-white
                    border border-[#F3D9E3]
                    text-[#76153C]
                    text-sm
                    font-medium
                    hover:bg-[#FFF5F8]
                    hover:border-[#E8C8D3]
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
                rounded-2xl
                bg-white
                border border-[#F3D9E3]
                flex items-center justify-center
                text-[#76153C]
                hover:bg-[#FFF5F8]
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