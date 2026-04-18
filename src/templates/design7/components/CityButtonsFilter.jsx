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
    <div className="mt-8">

      <h4 className="text-lg font-bold text-gray-800 mb-6">
        Quick City Filters
      </h4>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">

        {cities.map((city, index) => (
          <Link
            key={index}
href={`/property-dealer-in-${city.toLowerCase()}`}     
       className="
              group relative
              flex items-center justify-between
              p-4
              rounded-2xl
              bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-400
              hover:from-pink-600 hover:via-indigo-700 hover:to-purple-700
              transition-all duration-300
              shadow-sm hover:shadow-lg
              cursor-pointer
            "
          >
            <span className="text-sm font-semibold text-white leading-snug">
              Real Estate Agents {city}
            </span>

            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/ico.png"
                alt="agent"
                fill
                className="object-contain group-hover:scale-110 transition"
              />
            </div>
          </Link>
        ))}

      </div>

      {/* VIEW ALL */}
      <div className="flex justify-end mt-4">
        <Link
          href="/all-property-dealer"
          className="flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:underline group"
        >
          View All
          <span className="transform group-hover:translate-x-1 transition">
            →
          </span>
        </Link>
      </div>

    </div>
  );
}