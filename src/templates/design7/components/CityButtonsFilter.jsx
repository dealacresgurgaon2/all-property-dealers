"use client";

import Image from "next/image";

export default function CityButtonsFilter({ onCitySelect }) {

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
    <div className="mt-8">

      <h4 className="text-lg font-bold text-gray-800 mb-6">
        Quick City Filters
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">

        {cities.map((city, index) => (
          <button
            key={index}
            onClick={() => onCitySelect(city)}
            className="
              group relative
              flex items-center justify-between
              p-4
              rounded-2xl
              bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600
              hover:from-pink-600 hover:via-indigo-700 hover:to-purple-700
              transition-all duration-300
              shadow-sm hover:shadow-lg
            "
          >

            {/* TEXT */}
            <span className="text-sm font-semibold text-white leading-snug">
              Real Estate Agents {city}
            </span>

            {/* ICON */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/icon.jpeg"
                alt="agent"
                fill
                className="object-contain group-hover:scale-110 transition"
              />
            </div>

          </button>
        ))}

      </div>

    </div>
  );
}