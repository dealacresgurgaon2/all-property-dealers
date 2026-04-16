"use client";

import { useRouter } from "next/navigation";
import { Building2 } from "lucide-react";

export default function HaryanaPage() {
  const router = useRouter();

  const districts = [
    "Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad",
    "Gurgaon","Hisar","Jhajjar","Jind","Kaithal",
    "Karnal","Kurukshetra","Mahendragarh","Palwal",
    "Panchkula","Panipat","Rewari","Rohtak","Sirsa",
    "Sonipat","Yamunanagar", "Hansi", "Charkhi Dadri"
  ];

  const createSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <section className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className=" mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-600">
            Select District in Haryana
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Explore property dealers district-wise across Haryana
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 mt-3  rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

          {districts.map((dist, i) => (
            <div
              key={i}
              onClick={() =>
                router.push(`/property-dealer-in-${createSlug(dist)}`)
              }
              className="
                group cursor-pointer
                bg-white
                rounded-2xl
                border border-indigo-300
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                p-5 flex items-center gap-4
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                hover:scale-[1.02]
              "
            >

              {/* ICON BOX */}
             {/* ICON BOX */}
<div
  className="
    relative
    w-12 h-12 flex items-center justify-center
    rounded-xl
    bg-gradient-to-br from-indigo-500 to-purple-600
    text-white
    shadow-[0_8px_25px_rgba(99,102,241,0.4)]
    group-hover:scale-110
    transition-all duration-300
  "
>

  {/* Glow Effect */}
  <div className="
    absolute inset-0 rounded-xl
    bg-gradient-to-br from-indigo-400 to-purple-500
    blur-md opacity-40
    group-hover:opacity-60
    transition
  "></div>

  {/* ICON */}
  <Building2 size={22} className="relative z-10" />

</div>

              {/* TEXT */}
              <div>
                <h3 className="text-gray-900 font-semibold text-sm leading-tight">
                  {dist}
                </h3>
                <p className="text-gray-500 text-xs">
                  Explore Dealers
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}