
"use client";

import Link from "next/link";
import { useState } from "react";
import { locations } from "@/templates/design7/data/locations";
export default function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showAllNoida, setShowAllNoida] = useState(false);
const haryanaDistricts = locations.haryana;
const delhiZone = locations.delhi;
const noidaLocations = locations.noida;
const visibleNoida = showAllNoida
  ? noidaLocations
  : noidaLocations.slice(0, 12);

const createSlug = (name) =>
  name
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 right-1/3 w-[600px] h-[600px] bg-purple-600/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">

        {/* LOCATION SECTION */}
        <div className="w-full mb-12">
          <h4 className="text-lg font-semibold mb-6">
            Explore Property Dealers of Haryana Cities
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">

            {haryanaDistricts.map((district, index) => (
              <Link
                key={index}
                href={`https://www.dealacres.com/${district.toLowerCase()}/property-dealer`}
                target="_blank"
                rel="noopener noreferrer"
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
        {/* <div className="w-full mb-12">
          <h4 className="text-lg font-semibold mb-6">
            Explore Property Dealers of Delhi NCR Cities
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">

            {delhiZone.map((district, index) => (
              <Link
                key={index}
               href={`https://www.dealacres.com/${createSlug(district)}/property-dealer`}
                target="_blank"
                rel="noopener noreferrer"
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
        </div> */}
  {/* <div className="w-full mb-12">
  <h4 className="text-lg font-semibold mb-6">
    Explore Property Dealers of Noida City
  </h4>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">

  {(showAllNoida ? noidaLocations : noidaLocations.slice(0, 11)).map(
    (district, index) => (
      <Link
        key={index}
        href={`https://www.dealacres.com/${createSlug(district)}/property-dealer`}
        target="_blank"
        rel="noopener noreferrer"
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
    )
  )}

  {!showAllNoida && noidaLocations.length > 11 && (
    <button
      onClick={() => setShowAllNoida(true)}
      className="
        flex items-center gap-2
        text-sm font-semibold
        text-indigo-400
        hover:text-indigo-300
        cursor-pointer
        transition
      "
    >
      <span className="text-indigo-400">•</span>
      Read More →
    </button>
  )}

  {showAllNoida && (
    <button
      onClick={() => setShowAllNoida(false)}
      className="
        flex items-center gap-2
        text-sm font-semibold
        text-indigo-400
        hover:text-indigo-300
        cursor-pointer
        transition
      "
    >
      <span className="text-indigo-400">•</span>
      Show Less ←
    </button>
  )}

</div>

</div> */}

        {/* DISCLAIMER */}
        <div>
          <p className="font-semibold mb-2">Disclaimer :</p>

          <p className="text-sm text-white/70 leading-6">
            {!showDisclaimer ? (
              <>
                ...
                <button
                  onClick={() => setShowDisclaimer(true)}
                  className="ml-2 text-indigo-400 hover:text-indigo-300 underline transition cursor-pointer"
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
                  className="ml-2 text-indigo-400 hover:text-indigo-300 underline transition cursor-pointer"
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

          <p>
            © {new Date().getFullYear()} Property Dealer Near Me. All rights reserved.
          </p>

          <div className="grid grid-cols-5 gap-1">

            <Link href="/" className="footerBtn hover:text-indigo-500">
              Home
            </Link>

            <Link href="/about" className="footerBtn hover:text-indigo-500">
              About
            </Link>

            <Link href="/blogs" className="footerBtn hover:text-indigo-500">
              Blog
            </Link>

            <Link href="/how-it-works" className="footerBtn hover:text-indigo-500">
              How It Works
            </Link>

          </div>

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