"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {

  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const noidaSectors = [
    "Sector 62 Noida","Sector 150 Noida","Sector 50 Noida","Sector 73 Noida",
    "Sector 52 Noida","Sector 76 Noida","Sector 137 Noida","Sector 128 Noida",
    "Sector 75 Noida","Sector 51 Noida","Sector 107 Noida","Sector 144 Noida",
    "Sector 45 Noida","Sector 100 Noida","Sector 34 Noida","Sector 145 Noida",
    "Sector 78 Noida","Sector 104 Noida","Sector 63 Noida","Sector 15 Noida",
    "Sector 151 Noida","Sector 15A Noida","Sector 93 Noida","Jal Vayu Vihar",
    "Sector 143 Noida","Sector 47 Noida","Sector 120 Noida","Sector 41 Noida",
    "Sector 70 Noida","Sector 46 Noida","Sector 82 Noida","Sector 99 Noida",
    "Sector 74 Noida","Sector 79 Noida","Sector 168 Noida","Sector 134 Noida",
    "Sector 63A Noida","Sector 22 Noida","Sector 118 Noida","Sector 27 Noida",
    "Sector 25 Noida","Sector 94 Noida","Sector 39 Noida","Sector 121 Noida",
    "Sector 112 Noida","Sector 92 Noida","Sector 133 Noida","Sector 77 Noida",
    "Sector 142 Noida","Sector 30 Noida","Sector 36 Noida","Sector 29 Noida",
    "Sector 119 Noida","Sector 116 Noida","Sector 117 Noida","Sector 31 Noida",
    "Sector 56 Noida","Sector 55 Noida","Sector 131 Noida"
  ];

  const sortedNoida = [
    ...noidaSectors.filter(loc => loc.toLowerCase().includes("sector")),
    ...noidaSectors.filter(loc => !loc.toLowerCase().includes("sector"))
  ];

  const footerLocations = sortedNoida.slice(0, 21);
  const topLocations = sortedNoida.slice(21);

  return (
    <>
      {/* UPPER LOCATIONS SECTION */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">

          <h3 className="text-xl font-bold text-black mb-6">
            Property Dealers Across Noida
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {topLocations.map((loc, index) => {

              const slug = loc
                .toLowerCase()
                .replaceAll(",", "")
                .replaceAll("/", "")
                .replaceAll("  ", " ")
                .trim()
                .replaceAll(" ", "-");

              return (
                <Link
                  key={index}
                  href={`/noida/${slug}?location=${encodeURIComponent(loc)}`}
                  className="text-black hover:text-green-600 transition text-sm truncate"
                >
                  Property Dealer in {loc}
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* MAIN FOOTER */}
      <footer className="relative bg-[#0b120e] text-white overflow-hidden">

        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-600/10 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* BRAND ONLY */}
            <div>
              <h3 className="text-2xl font-bold text-green-500">
                PropertyDealer
              </h3>
            </div>

            {/* POPULAR LOCATIONS */}
            <div className="lg:col-span-3">

              <h4 className="text-xl font-semibold mb-6 text-green-500">
                Popular Locations in Noida
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                {footerLocations.map((loc, index) => {

                  const slug = loc
                    .toLowerCase()
                    .replaceAll(",", "")
                    .replaceAll("/", "")
                    .replaceAll("  ", " ")
                    .trim()
                    .replaceAll(" ", "-");

                  return (
                    <Link
                      key={index}
                      href={`/noida/${slug}?location=${encodeURIComponent(loc)}`}
                      className="text-white/80 hover:text-green-500 transition text-sm truncate"
                    >
                      Property Dealer in {loc}
                    </Link>
                  );
                })}
              </div>

            </div>

          </div>

          {/* DISCLAIMER */}
          <div className="">
            <p className="font-semibold mb-2">
              Disclaimer :
            </p>

            <p className="text-white/60 text-sm leading-6 max-w-4xl">
              {!showDisclaimer ? (
                <>
                  The property dealers listed on this platform are not employed,
                  endorsed, or directly affiliated with us...
                  <span
                    onClick={() => setShowDisclaimer(true)}
                    className="ml-2 text-green-500 cursor-pointer hover:underline"
                  >
                    Read More
                  </span>
                </>
              ) : (
                <>
                  The property dealers listed on this platform are not employed,
                  endorsed, or directly affiliated with us. Dealer information is
                  aggregated from publicly available sources across the web.
                  Users are advised to independently verify credentials,
                  documents, and transaction details before proceeding.
                  We act solely as a discovery and connection platform and shall
                  not be held responsible for any disputes, losses, or issues
                  arising from dealings with listed dealers.
                  <span
                    onClick={() => setShowDisclaimer(false)}
                    className="ml-2 text-green-500 cursor-pointer hover:underline"
                  >
                    Show Less
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-green-600/40 to-transparent" />

          {/* COPYRIGHT */}
          <div className="text-center text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} PropertyDealer. All rights reserved.
            </p>

            <div className="mt-2">
              <Link
                href="https://www.parcharmanch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Designed by Parchar Manch
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
