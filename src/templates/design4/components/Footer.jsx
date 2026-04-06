"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllMobileLocations, setShowAllMobileLocations] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const locations = [
  "New Chandigarh",
  "Eco City 1",
  "Sector 49 Chandigarh",
  "Sector 40 Chandigarh",
  "Sector 38 Chandigarh",
  "Sector 22 Chandigarh",
  "Sector 48 Chandigarh",
  "Sector 45 Chandigarh",
  "Sector 8 Chandigarh",
  "Sector 63 Chandigarh",
  "Sector 51 Chandigarh",
  "Sector 18 Chandigarh",
  "Sector 21 Chandigarh",
  "Sector 11 Chandigarh",
  "Sector 47 Chandigarh",
  "Sector 41 Chandigarh",
  "Sector 35 Chandigarh",
  "Sector 36 Chandigarh",
  "Sector 50 Chandigarh",
  "Sector 19 Chandigarh",
  "Sector 52 Chandigarh",
  "Sector 33 Chandigarh",
  "Sector 32 Chandigarh",
  "Sector 39 Chandigarh",
  "Sector 42 Chandigarh",
  "Sector 16 Chandigarh",
  "Sector 10 Chandigarh",
  "Sector 17 Chandigarh",
  "Sector 27 Chandigarh",
  "Sector 15 Chandigarh",
  "Sector 29 Chandigarh",
  "Sector 46 Chandigarh",
  "Sector 55 Chandigarh",
  "Sector 56 Chandigarh",
  "Sector 23 Chandigarh",
  "Sector 44 Chandigarh",
  "Sector 43 Chandigarh",
  "Sector 20 Chandigarh"
];

  const footerLocations = locations.slice(0, 12);
  const topLocations = locations.slice(12);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {/* TOP LOCATIONS */}
      <section className="relative py-10 overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec]" />
        <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-[#D02752]/10 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4">

          <h3 className="text-xl font-bold text-[#8A244B] mb-6">
            Property Dealers in Chandigarh Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {(isMobile && !showAllMobileLocations
              ? topLocations.slice(0, 12)
              : topLocations
            ).map((loc, index) => {

              const slug = loc.toLowerCase().replaceAll(" ", "-");

              return (
                <Link
                  key={index}
                  href={`/chandigarh/${slug}`}
                  className="text-gray-700 hover:text-[#D02752] transition text-sm truncate hover:translate-x-1"
                >
                  Property Dealer in {loc}
                </Link>
              );
            })}
          </div>

          {isMobile && !showAllMobileLocations && topLocations.length > 12 && (
            <div className="mt-4">
              <span
                onClick={() => setShowAllMobileLocations(true)}
                className="text-[#D02752] cursor-pointer hover:underline text-sm font-medium"
              >
                Know More →
              </span>
            </div>
          )}

        </div>
      </section>

      {/* MAIN FOOTER */}
      <footer className="relative bg-gradient-to-br from-[#D02752] to-[#8A244B] text-white overflow-hidden">

        {/* GLOW */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-black/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* BRAND */}
            <div>
              <h3 className="text-2xl font-bold tracking-wide">
                Property Dealer Chandigarh
              </h3>
              <p className="text-white/80 text-sm mt-3">
                Trusted platform to connect with verified property dealers.
              </p>
            </div>

            {/* LOCATIONS */}
            <div className="lg:col-span-3">
              <h4 className="text-xl font-semibold mb-6">
                Popular Property Locations
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                {footerLocations.map((loc, index) => {

                  const slug = loc.toLowerCase().replaceAll(" ", "-");

                  return (
                    <Link
                      key={index}
                      href={`/chandigarh/${slug}`}
                      className="text-white/80 hover:text-white transition text-sm hover:translate-x-1"
                    >
                      Property Dealer in {loc}
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>

          {/* DISCLAIMER */}
          <div className="mt-10">
            <p className="font-semibold mb-2 text-white">Disclaimer :</p>

            <p className="text-white/80 text-sm leading-6 max-w-4xl">
              {!showDisclaimer ? (
                <>
                  This platform connects users with property dealers.
                  We do not directly deal in transactions.
                  <span
                    onClick={() => setShowDisclaimer(true)}
                    className="ml-2 underline cursor-pointer hover:text-white"
                  >
                    Learn More
                  </span>
                </>
              ) : (
                <>
                  All dealer info is publicly available.
                  Users must verify before decisions.
                  We are not responsible for disputes.
                  <span
                    onClick={() => setShowDisclaimer(false)}
                    className="ml-2 underline cursor-pointer hover:text-white"
                  >
                    Show Less
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* COPYRIGHT */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <p>
              © {new Date().getFullYear()} Property Dealer Chandigarh. All rights reserved.
            </p>

            <div className="mt-2 md:mt-0">
              <p>
                Designed by{" "}
                <Link
                  href="https://www.parcharmanch.com"
                  target="_blank"
                  className="underline hover:text-white"
                >
                  Parchar Manch
                </Link>
              </p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}