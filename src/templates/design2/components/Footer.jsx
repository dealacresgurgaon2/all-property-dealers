"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

export default function Footer() {

  const segment = useSelectedLayoutSegment();
  const hideLocations = segment === "about";
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const locations = [
    "Sector 70, Neharpar, Faridabad","Sector 86, Faridabad","Ashoka Enclave, Faridabad",
    "Sector 82, Faridabad","Sector 21C, Faridabad","Sector 83, Faridabad",
    "Sector 21A, Faridabad","Sector 80, Faridabad","Ashoka Enclave Part 1, Faridabad",
    "Sector 81, Faridabad","Sector 75, Faridabad","Neharpar, Greater Faridabad",
    "Sector 21D, Faridabad","Sector 76, Faridabad","Sector 78, Faridabad",
    "Sainik Colony, Faridabad","Sector 49, Faridabad","Sector 77, Faridabad",
    "Sector 85, Faridabad","Sector 88, Faridabad","Mujesar, Faridabad",
    "Sector 72, Faridabad","Sector 79, Faridabad","Sector 9, Faridabad",
    "Nav Durga Vihar, Dayal Bagh Colony, Faridabad","Charmwood Village, Faridabad",
    "Ashoka Enclave Part 3, Faridabad","Sector 87, Faridabad",
    "Inder Colony, Sector 31, Faridabad","Sector 84, Faridabad",
    "Sector 21B, Faridabad","Sector 28, Faridabad",
    "New Industrial Township, Faridabad","Dabua Colony, Faridabad",
    "Greenfield Colony, Faridabad","Sector 11, Faridabad",
    "Sector 55, Faridabad","Sector 3, Faridabad","Sector 6, Faridabad",
    "Sector 37, Faridabad","Jawahar Colony, Faridabad",
    "Sector 45, Faridabad","Sector 31, Faridabad","Lakkarpur, Faridabad",
    "Sector 22, Faridabad","Gurukul Basti, Faridabad",
    "HBH Colony, Sector 28, Faridabad","Sector 16, Faridabad",
    "Jalvayu Vihar, Atmadpur Village, Faridabad","Sector 44, Faridabad",
    "Sector 17, Faridabad","Sector 38, Faridabad","Sector 27, Faridabad",
    "Sector 10, Faridabad","Sector 15, Faridabad","NIT 2, Faridabad",
    "NIT 5, Faridabad","NIT 1, Faridabad","NIT 3, Faridabad",
    "Sector 29, Faridabad","Sector 46, Faridabad","Sector 5, Faridabad",
    "Sector 14, Faridabad","Sector 7, Faridabad","Sector 64, Faridabad",
    "Sector 2, Faridabad","Sector 18, Faridabad","Sector 19, Faridabad",
    "Sector 30, Faridabad","Springfield Colony, Faridabad",
    "Sector 4, Faridabad","Sector 62, Faridabad",
    "Dayal Bagh Colony, Faridabad","Sector 27D, Faridabad",
    "Sector 39, Faridabad","Aitmadpur, Sector 33, Faridabad",
    "Sector 74, Faridabad","Sector 32, Faridabad","Sector 8, Faridabad",
    "Green Field Colony, Faridabad",
    "Mewla Maharajpur, Sector 46, Faridabad"
  ];

  const sortedLocations = [
    ...locations.filter(loc => loc.toLowerCase().includes("sector")),
    ...locations.filter(loc => !loc.toLowerCase().includes("sector"))
  ];

  const footerLocations = sortedLocations.slice(0, 21);
  const topLocations = sortedLocations.slice(21);

  return (
    <>
      {/* TOP WHITE LOCATION SECTION */}
      {!hideLocations && (
        <section className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-4">

            <h3 className="text-xl font-bold text-black mb-6">
              Property Dealers Across Faridabad
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
                    href={`/faridabad/${slug}?location=${encodeURIComponent(loc)}`}
                    className="text-black hover:text-[#d4af37] transition text-sm truncate"
                  >
                    Property Dealer in {loc}
                  </Link>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* MAIN FOOTER */}
      <footer className="bg-[#0f0f0f] text-white w-full">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* LEFT BRAND ONLY */}
            <div>
              <h3 className="text-3xl font-bold text-[#d4af37]">
                PropertyDealer
              </h3>
            </div>

            {/* RIGHT LOCATIONS */}
            <div className="lg:col-span-3">
              <h4 className="text-xl font-semibold text-[#d4af37] mb-6">
                Popular Locations in Faridabad
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-8">
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
                      href={`/faridabad/${slug}?location=${encodeURIComponent(loc)}`}
                      className="text-white/80 hover:text-[#d4af37] transition text-sm truncate"
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
            <p className="font-semibold mb-2 text-white">
              Disclaimer :
            </p>

            <p className="text-white/60 text-sm leading-6 max-w-4xl">
              {!showDisclaimer ? (
                <>
                  The property dealers listed on this platform are not employed,...
                  <span
                    onClick={() => setShowDisclaimer(true)}
                    className="ml-2 text-[#d4af37] cursor-pointer hover:underline"
                  >
                    Read More
                  </span>
                </>
              ) : (
                <>
                  The property dealers listed on this platform are not employed, endorsed, or directly affiliated with us. Dealer information is aggregated from publicly available sources across the web. Users are advised to independently verify credentials, documents, and transaction details before proceeding. We act solely as a discovery and connection platform and shall not be held responsible for any disputes, losses, or issues arising from dealings with listed dealers.
                  <span
                    onClick={() => setShowDisclaimer(false)}
                    className="ml-2 text-[#d4af37] cursor-pointer hover:underline"
                  >
                    Show Less
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

          {/* COPYRIGHT */}
          <div className="text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} PropertyDealer. All rights reserved.</p>

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
