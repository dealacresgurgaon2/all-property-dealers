"use client";

import Link from "next/link";

export default function Footer() {

  const locations = [ "Sector 86, Gurgaon", "Sector 92, Gurgaon", "Sector 37D, Gurgaon", "Sector 82, Gurgaon", "Sector 81, Gurgaon", "Sector 91, Gurgaon", "Sector 77, Gurgaon", "Sector 85, Gurgaon", "Sector 109, Gurgaon", "Sector 50, Gurgaon", "Sector 67, Gurgaon", "Sector 42, Gurgaon", "Sector 39, Gurgaon", "South City 1, Gurgaon", "Sector 110, Gurgaon", "Sector 114, Gurgaon", "Sector 56, Gurgaon", "Sector 57, Gurgaon", "Sector 53, Gurgaon", "Sector 55, Gurgaon", "Palam Vihar, Gurgaon", "Sector 105, Gurgaon", "Sector 63A, Gurgaon", "DLF Phase 1, Gurgaon", "Sector 23, Gurgaon", "Sector 41, Gurgaon", "Sector 8, Gurgaon", "Sector 65, Gurgaon", "Sushant Lok Phase 2, Gurgaon", "Ashok Vihar, Gurgaon", "Sector 102, Gurgaon", "Chandan Vihar, Gurgaon", "Sector 30, Gurgaon", "Sector 108, Gurgaon", "Sector 43, Gurgaon", "Sadar Bazar, Gurgaon", "Ashok Vihar Phase 2, Gurgaon", "Sector 33, Gurgaon", "Sector 63, Gurgaon", "Sector 7, Gurgaon", "Sector 14, Gurgaon", "Sector 3, Gurgaon", "Sector 99, Gurgaon", "Sector 111, Gurgaon", "Sector 112, Gurgaon", "Sector 88, Gurgaon", "DLF Phase 3, Gurgaon", "Sector 51, Gurgaon", "Sector 10A, Gurgaon", "Sector 76, Gurgaon", "Sector 95, Gurgaon", "DLF Phase 2, Gurgaon", "Manesar, Gurgaon", "Sector 80, Gurgaon", "Sector 25, Gurgaon", "Sector 68, Gurgaon", "Sector 103, Gurgaon", "DLF Phase 5, Gurgaon", "Sector 1, Gurgaon", "Sector 19, Gurgaon", "Sector 78, Gurgaon", "Sector 49, Gurgaon", "Sector 48, Gurgaon", "Sector 66, Gurgaon", "Sector 93, Gurgaon", "Sector 11, Gurgaon", "Sector 107, Gurgaon", "Sector 69, Gurgaon", "Golf Course Road, Gurgaon", "Udyog Vihar, Gurgaon", "Sector 58, Gurgaon", "Sector 28, Gurgaon", "Palam Vihar Extension, Gurgaon", "Sector 61, Gurgaon", "Sector 67A, Gurgaon", "Sushant Lok Phase 1, Gurgaon", "New Palam Vihar, Gurgaon", "Rajendra Park, Gurgaon", "Sector 83, Gurgaon", "Sector 84, Gurgaon", "Sector 89, Gurgaon", "DLF Phase 4, Gurgaon", "Sector 90, Gurgaon", "Sector 2, Gurgaon", "Sector 59, Gurgaon", "Sector 60, Gurgaon", "Sector 26, Gurgaon", "Sector 45, Gurgaon", "South City 2, Gurgaon", "Sector 94, Gurgaon", "Sector 6, Gurgaon", "Sector 62, Gurgaon", "Sector 54, Gurgaon", "Sector 31, Gurgaon", "Sector 113, Gurgaon", "Sector 87, Gurgaon", "Sushant Lok Phase 3, Gurgaon", "Sector 38, Gurgaon", "Sector 106, Gurgaon", "New Gurgaon, Gurgaon", "MG Road, Gurgaon", "Civil Lines, Gurgaon", "Sohna Road, Gurgaon", "Sector 47, Gurgaon", "Sector 46, Gurgaon", "Sector 3A, Gurgaon" ];

  const sortedLocations = [
    ...locations.filter(loc => loc.toLowerCase().includes("sector")),
    ...locations.filter(loc => !loc.toLowerCase().includes("sector"))
  ];

  // 👉 BOTTOM FOOTER: ONLY 21 LOCATIONS
  const footerLocations = sortedLocations.slice(0, 21);

  // 👉 UPPER SECTION: REST OF LOCATIONS (WITHOUT FOOTER ONES)
  const topLocations = sortedLocations.slice(21);

  return (
    <>
      {/* UPPER LOCATIONS SECTION – 4 COLUMNS */}
      <section className="bg-[#f8fafc] py-10">
        <div className="max-w-7xl mx-auto px-4">

          <h3 className="text-xl font-bold text-[#0b1f33] mb-6">
            Property Dealers Across Gurgaon
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {topLocations.map((loc, index) => {

              const slug = loc
                .toLowerCase()
                .replaceAll(",", "")
                .replaceAll("  ", " ")
                .trim()
                .replaceAll(" ", "-");

              return (
                <Link
                  key={index}
                  href={`/gurgaon/${slug}`}
                  title={`Property Dealer in ${loc}`}
                  className="
                    text-[#1e40af]
                    hover:text-[#0b1f33]
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

      {/* MAIN FOOTER */}
      <footer className="relative bg-[#0b1f33] text-white overflow-hidden w-full">

        <div className="relative z-10 px-6 md:px-10 py-16">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Property<span className="text-[#38bdf8]">Dealer</span>
              </h3>

              <p className="text-white/70 leading-7 mb-6">
                Your trusted real estate partner for buying, selling and
                investing in premium properties across top cities.
              </p>
            </div>

            <div className="lg:col-span-3">

              <h4 className="text-xl font-semibold text-[#38bdf8] mb-5">
                Popular Locations in Gurgaon
              </h4>

              {/* BOTTOM FOOTER – ONLY 21 LOCATIONS IN 3 COLUMNS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">

                {(() => {
                  const columns = [];
                  const perColumn = 7; // 3 columns × 7 = 21

                  for (let i = 0; i < footerLocations.length; i += perColumn) {
                    columns.push(footerLocations.slice(i, i + perColumn));
                  }

                  return columns.map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-2">

                      {column.map((loc, index) => {

                        const slug = loc
                          .toLowerCase()
                          .replaceAll(",", "")
                          .replaceAll("  ", " ")
                          .trim()
                          .replaceAll(" ", "-");

                        return (
                          <Link
                            key={index}
                            href={`/gurgaon/${slug}`}
                            title={`Property Dealer in ${loc}`}
                            className="
                              text-white/80
                              hover:text-[#38bdf8]
                              transition
                              text-sm
                              leading-snug
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

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#1e40af]/50 to-transparent" />

          <div className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} PropertyDealer. All rights reserved.
          </div>

        </div>
      </footer>
    </>
  );
}
