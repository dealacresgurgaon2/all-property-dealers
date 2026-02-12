"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";


export default function Footer() {

 const segment = useSelectedLayoutSegment();
const hideLocations = segment === "about";



  const locations = ["Sector 70, Neharpar, Faridabad", "Sector 86, Faridabad", "Ashoka Enclave, Faridabad", "Sector 82, Faridabad", "Sector 21C, Faridabad", "Sector 83, Faridabad", "Sector 21A, Faridabad", "Sector 80, Faridabad", "Ashoka Enclave Part 1, Faridabad", "Sector 81, Faridabad", "Sector 75, Faridabad", "Neharpar, Greater Faridabad", "Sector 21D, Faridabad", "Sector 76, Faridabad", "Sector 78, Faridabad", "Sainik Colony, Faridabad", "Sector 49, Faridabad", "Sector 77, Faridabad", "Sector 85, Faridabad", "Sector 88, Faridabad", "Mujesar, Faridabad", "Sector 72, Faridabad", "Sector 79, Faridabad", "Sector 9, Faridabad", "Nav Durga Vihar, Dayal Bagh Colony, Faridabad", "Charmwood Village, Faridabad", "Ashoka Enclave Part 3, Faridabad", "Sector 87, Faridabad", "Inder Colony, Sector 31, Faridabad", "Sector 84, Faridabad", "Sector 21B, Faridabad", "Sector 28, Faridabad", "New Industrial Township, Faridabad", "Dabua Colony, Faridabad", "Greenfield Colony, Faridabad", "Sector 11, Faridabad", "Sector 55, Faridabad", "Sector 3, Faridabad", "Sector 6, Faridabad", "Sector 37, Faridabad", "Jawahar Colony, Faridabad", "Sector 45, Faridabad", "Sector 31, Faridabad", "Lakkarpur, Faridabad", "Sector 22, Faridabad", "Gurukul Basti, Faridabad", "HBH Colony, Sector 28, Faridabad", "Sector 16, Faridabad", "Jalvayu Vihar, Atmadpur Village, Faridabad", "Sector 44, Faridabad", "Sector 17, Faridabad", "Sector 38, Faridabad", "Sector 27, Faridabad", "Sector 10, Faridabad", "Sector 15, Faridabad", "NIT 2, Faridabad", "NIT 5, Faridabad", "NIT 1, Faridabad", "NIT 3, Faridabad", "Sector 29, Faridabad", "Sector 46, Faridabad", "Sector 5, Faridabad", "Sector 14, Faridabad", "Sector 7, Faridabad", "Sector 64, Faridabad", "Sector 2, Faridabad", "Sector 18, Faridabad", "Sector 19, Faridabad", "Sector 30, Faridabad", "Springfield Colony, Faridabad", "Sector 4, Faridabad", "Sector 62, Faridabad", "Dayal Bagh Colony, Faridabad", "Sector 27D, Faridabad", "Sector 39, Faridabad", "Aitmadpur, Sector 33, Faridabad", "Sector 74, Faridabad", "Sector 32, Faridabad", "Sector 8, Faridabad", "Green Field Colony, Faridabad", "Mewla Maharajpur, Sector 46, Faridabad"];

  const sortedLocations = [
    ...locations.filter(loc => loc.toLowerCase().includes("sector")),
    ...locations.filter(loc => !loc.toLowerCase().includes("sector"))
  ];

  const footerLocations = sortedLocations.slice(0, 21);
  const topLocations = sortedLocations.slice(21);

  return (
    <>
      {/* UPPER LOCATIONS SECTION – WHITE BG AS REQUESTED */}
      {!hideLocations && (
        <section className="bg-white py-10">
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
                    title={`Property Dealer in ${loc}`}
                    className="
                      text-black
                      hover:text-[#d4af37]
                      transition
                      text-sm
                      whitespace-nowrap
                      truncate
                    "
                  >
                    Property Dealer in {loc}
                  </Link>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* MAIN FOOTER – SAME AS BEFORE */}
      <footer className="relative bg-[#0f0f0f] text-white w-full overflow-hidden">

        <div className="relative z-10 px-6 md:px-10 py-14">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            <div>
              <h3 className="text-3xl font-bold text-[#d4af37] mb-4">
                PropertyDealer
              </h3>

              <p className="text-white/70 leading-7">
                Explore the best properties in Faridabad.
                Trusted platform for buying, selling and renting homes,
                plots and commercial spaces.
              </p>
            </div>

            <div className="lg:col-span-3">

              <h4 className="text-xl font-semibold text-[#d4af37] mb-5">
                Popular Locations in Faridabad
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">

                {(() => {
                  const columns = [];
                  const perColumn = 7;

                  for (let i = 0; i < footerLocations.length; i += perColumn) {
                    columns.push(footerLocations.slice(i, i + perColumn));
                  }

                  return columns.map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-2">

                      {column.map((loc, index) => {

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
                            title={`Property Dealer in ${loc}`}
                            className="
                              text-white/80
                              hover:text-[#d4af37]
                              transition
                              text-sm
                              whitespace-nowrap
                              truncate
                            "
                          >
                            Property Dealer in {loc}
                          </Link>
                        );
                      })}

                    </div>
                  ));
                })()}

              </div>

            </div>

          </div>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

          <div className="text-center justify-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} PropertyDealer. All rights reserved.</p>

            <div>
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
