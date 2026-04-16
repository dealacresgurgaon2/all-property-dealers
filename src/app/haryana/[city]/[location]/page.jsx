"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DealerCard from "@/templates/design7/components/DealerCard";
import QueryForm from "@/templates/design7/components/QueryForm";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function LocationPage() {
  const params = useParams();

  const rawCity = params.city;
  const rawLocation = params.location;

  // 🔥 CLEAN CITY
  const city = rawCity
    ?.toLowerCase()
    .replace("property-dealer-in-", "")
    .trim();

  // 🔥 DELHI FIX
  const getMappedCity = (city) => {
    const map = {
      delhi: "Delhi",
      "south-delhi": "South Delhi",
      "north-delhi": "North Delhi",
      "east-delhi": "East Delhi",
      "west-delhi": "West Delhi",
      "central-delhi": "Central Delhi",
    };
    return map[city.toLowerCase()] || city;
  };

  // 🔥 LOCATION FIX
  const formatLocation = (slug) => {
    if (!slug) return "";

    return slug
      .split("-hisar")[0]
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const location = formatLocation(rawLocation);
  const mappedCity = getMappedCity(city);

  const [topDealers, setTopDealers] = useState([]);
  const [allDealers, setAllDealers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mappedCity || !location) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        // 🔥 TOP LOCATION
       const res1 = await fetch(
  `${API_BASE}/api/get/haryana-location-filter?city=${mappedCity}&location=${encodeURIComponent(location)}`
);
        const data1 = await res1.json();
        setTopDealers(data1?.data || []);

        // 🔥 ALL CITY
        const res2 = await fetch(
          `${API_BASE}/api/get/city/${mappedCity}`
        );
        const data2 = await res2.json();
        setAllDealers(data2?.data || []);

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [mappedCity, location]);

 if (loading) {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      
      <div className="flex flex-col items-center">

        {/* Spinner */}
        <div className="relative">
          <div className="w-14 h-14 border-4 border-gray-200 rounded-full"></div>
          <div className="w-14 h-14 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>

        {/* Text */}
        <p className="mt-4 text-gray-700 font-semibold">
          Fetching Best Dealers...
        </p>

      </div>

    </section>
  );
}

  return (
    <section className="bg-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 capitalize text-gray-900">
          Property Dealer in {location}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* TOP DEALERS */}
            {topDealers.length > 0 ? (
              topDealers.map((d) => (
                <DealerCard key={d._id} dealer={d} />
              ))
            ) : (
              <p className="text-gray-500">
                No dealers found in this location
              </p>
            )}

            {/* ALL CITY */}
            <h2 className="text-xl font-bold mt-10 text-black">
              All Dealers in {mappedCity}
            </h2>

            {allDealers.length > 0 ? (
              allDealers.map((d) => (
                <DealerCard key={d._id} dealer={d} />
              ))
            ) : (
              <p className="text-gray-500">
                No dealers found in this city
              </p>
            )}
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="hidden lg:block">
  <div className="sticky top-24">
    <QueryForm />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}