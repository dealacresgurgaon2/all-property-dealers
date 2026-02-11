"use client";

import Link from "next/link";

export default function Footer() {
  const noidaSectors = [
    "Sector 62 Noida",
    "Sector 150 Noida",
    "Sector 50 Noida",
    "Sector 73 Noida",
    "Sector 52 Noida",
    "Sector 76 Noida",
    "Sector 137 Noida",
    "Sector 128 Noida",
    "Sector 75 Noida",
    "Sector 51 Noida",
    "Sector 107 Noida",
    "Sector 144 Noida",
    "Sector 45 Noida",
    "Sector 100 Noida",
    "Sector 34 Noida",
    "Sector 145 Noida",
    "Sector 78 Noida",
    "Sector 104 Noida",
    "Sector 63 Noida",
    "Sector 15 Noida",
    "Sector 151 Noida",
    "Sector 15A Noida",
    "Sector 93 Noida",
    "Jal Vayu Vihar",
    "Sector 143 Noida",
    "Sector 47 Noida",
    "Sector 120 Noida",
    "Sector 41 Noida",
    "Sector 70 Noida",
    "Sector 46 Noida",
    "Sector 82 Noida",
    "Sector 99 Noida",
    "Sector 74 Noida",
    "Sector 79 Noida",
    "Sector 168 Noida",
    "Sector 134 Noida",
    "Sector 63A Noida",
    "Sector 22 Noida",
    "Sector 118 Noida",
    "Sector 27 Noida",
    "Sector 25 Noida",
    "Sector 94 Noida",
    "Sector 39 Noida",
    "Sector 121 Noida",
    "Sector 112 Noida",
    "Sector 92 Noida",
    "Sector 133 Noida",
    "Sector 77 Noida",
    "Sector 142 Noida",
    "Sector 30 Noida",
    "Sector 36 Noida",
    "Sector 29 Noida",
    "Sector 119 Noida",
    "Sector 116 Noida",
    "Sector 117 Noida",
    "Sector 31 Noida",
    "Sector 56 Noida",
    "Sector 55 Noida",
    "Sector 131 Noida",
  ];

  const sortedNoida = [
    ...noidaSectors.filter(loc => loc.toLowerCase().includes("sector")),
    ...noidaSectors.filter(loc => !loc.toLowerCase().includes("sector"))
  ];

  const footerLocations = sortedNoida.slice(0, 21);
  const topLocations = sortedNoida.slice(21);

  return (
    <>
      {/* UPPER LOCATIONS SECTION – WHITE BG */}
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
                  href={`/noida/${slug}`}
                  title={`Property Dealer in ${loc}`}
                  className="
                    text-black
                    hover:text-green-600
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
      <footer className="relative bg-[#0b120e] text-white overflow-hidden">

        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-600/10 blur-3xl rounded-full" />

        <div className="relative z-10 w-full px-6 py-16">

          {/* LEFT RIGHT ALIGNMENT SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* LEFT SIDE – BRANDING */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-green-500 mb-3">
                PropertyDealer
              </h3>

              <p className="text-white/70 leading-7 mb-6">
                Your trusted real estate partner for buying, selling and investing in premium properties across top cities.
              </p>
            </div>

            {/* RIGHT SIDE – 21 LOCATIONS */}
            <div className="lg:col-span-3">

              <h4 className="text-xl font-semibold mb-6 text-green-500">
                Popular Locations in Noida
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
                            href={`/noida/${slug}`}
                            title={`Property Dealer in ${loc}`}
                            className="
                              text-white/80
                              hover:text-green-500
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

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-green-600/40 to-transparent" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} PropertyDealer. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-green-500 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-500 transition">
                Terms of Service
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
