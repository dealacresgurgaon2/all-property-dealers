"use client";

import { useRouter } from "next/navigation";
import QueryForm from "@/templates/design7/components/QueryForm";
import { Building2 } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/templates/design7/components/Breadcrumb";

export default function DelhiPage() {
  const router = useRouter();

  const zones = [
    "Central Delhi",
    "North Delhi",
    "South Delhi",
    "East Delhi",
    "West Delhi",
  ];

  const createSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="bg-white min-h-screen">

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="py-4 px-2">
          <Breadcrumb/>
        </div>
         <div className="mb-6 ">
        </div>
        <div className="mb-6 ">
          <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-600">
            Explore Property Dealers in Delhi
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Choose your preferred area to find trusted property dealers
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 mt-3 rounded-full"></div>
        </div>
        {/* 🔥 TOP SECTION (IMAGE + FORM) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">

          {/* LEFT IMAGE */}
          <div className="w-full overflow-hidden rounded-2xl shadow-md group">
            <img
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200"
              alt="property"
              className="
      w-full h-[400px] 
      object-contain
      transition-transform duration-500
      group-hover:scale-105
    "
            />
          </div>

          {/* RIGHT FORM */}
          <div className="">
            <QueryForm />
          </div>

        </div>




        {/* 🔥 GRID (5 COLUMN) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {zones.map((zone, i) => (
            <Link
  href={`/property-dealer-in-${createSlug(zone)}`}
  key={i}
  className="
    group cursor-pointer
    p-6 rounded-2xl
    bg-white
    border border-gray-100
    shadow-sm
    hover:shadow-xl
    transition-all duration-300
    flex flex-col justify-between
    text-center
  "
>

  {/* ICON CENTER */}
  <div className="flex justify-center mb-4">
    <div
      className="
        w-14 h-14 flex items-center justify-center
        rounded-full
        bg-gradient-to-br from-indigo-100 to-purple-100
        text-indigo-600
        group-hover:scale-110 transition
      "
    >
      <Building2 size={26} />
    </div>
  </div>

  {/* TITLE */}
  <h3 className="text-lg font-bold text-gray-800 mb-2">
    {zone}
  </h3>

  {/* DESC */}
  <p className="text-sm text-gray-500 mb-5">
    Find trusted property dealers & agents
  </p>

  {/* BUTTON */}
  <div
    className="
      w-full py-2.5 rounded-full
      bg-gradient-to-r from-indigo-600 to-purple-600
      text-white text-sm font-semibold
      shadow-md hover:shadow-lg
      transition
    "
  >
    Explore →
  </div>

</Link>
          ))}

        </div>

      </div>
    </div>
  );
}