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

  return (
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

          {/* HISAR LOCATIONS */}
          <div className="md:col-span-9 w-full">

            <h4 className="font-semibold text-base mb-4">
              Hisar Real Estate Locations By Search
            </h4>

            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-5
                lg:grid-cols-5
                gap-x-6
                gap-y-3
                text-[13px]
                w-full
              "
            >
              {hisarLocations.map((location, index) => {

                const slug = location
                  .toLowerCase()
                  .replace(/,/g, "")
                  .replace(/\s+/g, "-");

                return (
                  <Link
                    key={index}
                    href={`/hisar/${slug}`}
                    title={location}
                    className="
                      text-white/80
                      hover:text-white
                      transition-colors
                      duration-200

                      whitespace-nowrap
                      overflow-hidden
                      text-ellipsis
                      truncate
                    "
                  >
                    {location}
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70">

          <p>
            © {new Date().getFullYear()} PropertyDealer. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
