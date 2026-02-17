"use client";

import Link from "next/link";

export default function Footer() {

  const hisarLocations = [
    "Sector 1-4, Hisar",
    "12 Quarter Road, Hisar",
    "Adarsh Nagar, Hisar",
    "Aggarwal Colony, Hisar",
    "Aggersain Chowk, Hisar",
    "Sector 9-11, Hisar",
    "Anaj Mandi, Hisar",
    "Auto Market, Hisar",
    "Azad Nagar, Hisar",
    "Bagla Road, Hisar",
    "Sector 13, Hisar",
    "Balsamand Road, Hisar",
    "Bank Colony, Hisar",
    "Bhagat Singh Market, Hisar",
    "Bhamashah Nagar, Hisar",
    "Sector 14, Hisar",
    "Camp Chowk, Hisar",
    "Camry Road, Hisar",
    "Cantt, Hisar",
    "Dabra Chowk, Hisar",
    "Sector 15, Hisar",
    "Defence Colony, Hisar",
    "Dogran Mohalla, Hisar",
    "Ganesh Market, Hisar",
    "Global Space, Hisar",
    "Sector 16-17, Hisar",
    "Green Park, Hisar",
    "Green Square Market, Hisar",
    "Housing Board Colony sector-14, Hisar",
    "Industrial Area sector 27-28, Hisar",
    "Sector 21 P, Hisar",
    "Krishna Nagar, Hisar",
    "Lajpat Nagar, Hisar",
    "Loha Mandi, Hisar",
    "Mahavir Colony, Hisar",
    "Sector 33, Hisar",
    "Malik Chowk, Hisar",
    "MC Colony, Hisar",
    "Mil Gate Road, Hisar",
    "Mirzapur Road, Hisar",
    "Model Town, Hisar",
    "Moti Bazar, Hisar",
    "Navdeep Colony, Hisar",
    "Neelkanth Complex, Hisar",
    "Nirankari Bhawan Road, Hisar",
    "Parijat Chowk, Hisar",
    "Patel Nagar, Hisar",
    "PLA, Hisar",
    "Professor Colony, Hisar",
    "Pushpa Complex, Hisar",
    "Railway Station Road, Hisar",
    "Raipur Road, Hisar",
    "Rajeev Nagar, Hisar",
    "Rajgarh Road, Hisar",
    "Rajguru Market, Hisar",
    "Red Square Market, Hisar",
    "Shanti Nagar, Hisar",
    "Shastri Nagar, Hisar",
    "Sirsa Road, Hisar",
    "Tosham Road, Hisar",
    "Urban Estate II, Hisar"
  ];

  // Bottom footer: only 21 locations
  const footerLocations = hisarLocations.slice(0, 21);

  // Upper section: remaining locations
  const topLocations = hisarLocations.slice(21);

  return (
    <>
      {/* UPPER LOCATIONS SECTION – WHITE BG */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">

          <h3 className="text-xl font-bold text-[#5E23DC] mb-6">
            Property Dealers Across Hisar
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {topLocations.map((loc, index) => {

              const slug = loc
                .toLowerCase()
                .replace(/,/g, "")
                .replace(/\s+/g, "-");

              return (
                <Link
                  key={index}
                  href={`/hisar/${slug}?location=${encodeURIComponent(loc)} `}
                  title={`Property Dealer in ${loc}`}
                  className="
                    text-black
                    hover:text-[#5E23DC]
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

      {/* MAIN FOOTER SECTION */}
      <footer className="relative bg-[#5E23DC] text-white overflow-hidden">

        {/* Background Glow Effect */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-white/10 blur-3xl rounded-full" />

        <div className="relative z-10 w-full px-5 md:px-12 py-10">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* BRAND SECTION */}
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-2 tracking-wide">
                Property<span className="text-white/80">Dealer</span>
              </h3>

              <p className="text-white/80 leading-6 text-sm mb-5">
                Your trusted real estate partner for buying, selling and
                investing in premium properties across top cities.
              </p>
            </div>

            {/* HISAR LOCATIONS – ONLY 21 LOCATIONS */}
            <div className="md:col-span-9 w-full">

              <h4 className="font-semibold text-base mb-4">
                Popular Locations in Hisar
              </h4>

              {/* 3 COLUMN FOOTER */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-[13px] w-full">

                {(() => {
                  const columns = [];
                  const perColumn = 7; // 3 × 7 = 21

                  for (let i = 0; i < footerLocations.length; i += perColumn) {
                    columns.push(footerLocations.slice(i, i + perColumn));
                  }

                  return columns.map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-2">

                      {column.map((loc, index) => {

                        const slug = loc
                          .toLowerCase()
                          .replace(/,/g, "")
                          .replace(/\s+/g, "-");

                        return (
                          <Link
                            key={index}
                             href={`/hisar/${slug}?location=${encodeURIComponent(loc)} `}
                            title={`Property Dealer in ${loc}`}
                            className="
                              text-white/80
                              hover:text-white
                              transition-colors
                              duration-200
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

          {/* DIVIDER */}
          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* BOTTOM BAR */}
          <div className="text-center justify-center text-sm  text-white/70">

            <p>
              © {new Date().getFullYear()} PropertyDealer. All rights reserved.
            </p>

            <div className="">
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
