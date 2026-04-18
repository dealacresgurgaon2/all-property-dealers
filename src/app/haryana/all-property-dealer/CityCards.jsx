"use client";

import { useRouter } from "next/navigation";

export default function CityCards() {
  const router = useRouter();

  const cities = [
    {
      name: "Delhi",
      link: "/explore-property-dealers-in-delhi",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200",
    },
    {
      name: "Noida",
      link: "/noida",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    },
    {
      name: "Haryana",
      link: "/explore-property-dealers-in-haryana-districts",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1200",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Choose Your Location
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

       {cities.map((city, index) => (
  <div
    key={index}
    onClick={() => {
  if (city.name === "Delhi") {
    router.push("/explore-property-dealers-in-delhi");
  } else if (city.name === "Haryana") {
    router.push("/explore-property-dealers-in-haryana-districts");
  } else {
    router.push(`/property-dealer-in-${city.name.toLowerCase()}`);
  }
}}
            className="
              group cursor-pointer
              rounded-3xl
              bg-white
              shadow-md
              hover:shadow-2xl
              transition-all duration-500
              transform hover:-translate-y-3 hover:scale-[1.02]
              relative
              overflow-visible
            "
          >

            {/* 🔥 IMAGE */}
            <div className="h-52 overflow-hidden rounded-t-3xl">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* 🔥 LABEL (PERFECT BORDER OVERLAP) */}
           {/* 🔥 LABEL (CARD TOP BORDER PE) */}
<div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-20">
  <span className="
    px-5 py-1.5 text-xs font-semibold
    rounded-full
    bg-green-600
    text-white
    shadow-xl
    border-2 border-white
  ">
    {city.name}
  </span>
</div>
            {/* 🔥 CONTENT */}
            <div className="p-6 pt-12 text-center">

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Explore {city.name}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                Find top property dealers, real estate agents & trusted consultants
              </p>

              <button className="
                px-6 py-2 rounded-full
                bg-gradient-to-r from-indigo-600 to-purple-600
                text-white text-sm font-semibold
                shadow-md hover:shadow-lg transition cursor-pointer
              ">
                Explore Now →
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}