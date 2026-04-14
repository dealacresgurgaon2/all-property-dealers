"use client";

import Link from "next/link";
import { useCity } from "@/context/design7api/CityContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function Footer() {
  const { setCity, setDealers } = useCity();
  const router = useRouter();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const haryanaDistricts = [
    "Ambala","Bhiwani","Charkhi-Dadri","Faridabad","Fatehabad",
    "Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal",
    "Kurukshetra","Mahendergarh","Palwal","Panchkula",
    "Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar",
  ];

  const handleCityClick = async (district) => {
    const citySlug = district.toLowerCase();

    try {
      const res = await fetch(`${API_BASE}/api/get/city/${district}`);
      const data = await res.json();

      if (data.success) {
        setDealers(data.data);
        setCity(citySlug);
      }

      router.push(`/${citySlug}`);
    } catch (err) {
      console.log("City API Error:", err);
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 right-1/3 w-[600px] h-[600px] bg-purple-600/10 blur-3xl rounded-full" />

      {/* 🔥 7XL CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">

        {/* TOP BRAND */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Property Dealer Haryana
          </h2> */}

          {/* <div className="flex gap-3">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Verified Listings
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Trusted Dealers
            </span>
          </div> */}
        </div>

        {/* LOCATION SECTION */}
        <div className="w-full mb-12">
          <h4 className="text-lg font-semibold mb-6">
            Explore Property Dealers of Haryana Cities
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">

            {haryanaDistricts.map((district, index) => (
              <Link
                key={index}
                href={`/property-dealer-in-${district.toLowerCase()}`}
                onClick={() => handleCityClick(district)}
                className="
                  flex items-center gap-2
                  text-sm font-medium
                  text-white/80
                  hover:text-indigo-400
                  transition
                "
              >
                <span className="text-indigo-400">•</span>
                Property Dealer in {district}
              </Link>
            ))}

          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="">
          <p className="font-semibold mb-2">Disclaimer :</p>

          <p className="text-sm text-white/70 leading-6">
            {!showDisclaimer ? (
              <>
                ...
                <button
                  onClick={() => setShowDisclaimer(true)}
                  className="ml-2 text-indigo-400 hover:text-indigo-300 underline transition"
                >
                  Learn More
                </button>
              </>
            ) : (
              <>
                The property dealers listed on this platform are not employed,
                endorsed, or directly affiliated with us. Dealer information is
                aggregated from publicly available sources across the web.
                Users are advised to independently verify credentials,
                documents, and transaction details before proceeding. We act
                solely as a discovery and connection platform and shall not be
                held responsible for any disputes, losses, or issues arising
                from dealings with listed dealers.
                <button
                  onClick={() => setShowDisclaimer(false)}
                  className="ml-2 text-indigo-400 hover:text-indigo-300 underline transition"
                >
                  Show Less
                </button>
              </>
            )}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Property Dealer Haryana. All rights reserved.</p>

          <div className="mt-2">
                   <p>
  Designed by :{" "}
  <Link
    href="https://www.parcharmanch.com"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-white"
  >
    Parchar Manch
  </Link>
</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
