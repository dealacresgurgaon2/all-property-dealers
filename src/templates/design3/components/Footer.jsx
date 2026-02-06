"use client";

import Link from "next/link";

export default function Footer() {

  const hisarLocations = [
  "Sector 1-4, Hisar",
  "Sector 9-11, Hisar",
  "Sector 13, Hisar",
  "Sector 14, Hisar",
  "Sector 15, Hisar",
  "Sector 16-17, Hisar",
  "Sector 21 P, Hisar",
  "Sector 33, Hisar",
  "12 Quarter Road, Hisar",
  "Adarsh Nagar, Hisar",
  "Aggarwal Colony, Hisar",
  "Aggersain Chowk, Hisar",
  "Anaj Mandi, Hisar",
  "Auto Market, Hisar",
  "Azad Nagar, Hisar",
  "Bagla Road, Hisar",
  "Balsamand Road, Hisar",
  "Bank Colony, Hisar",
  "Bhagat Singh Market, Hisar",
  "Bhamashah Nagar, Hisar",
  "Camp Chowk, Hisar",
  "Camry Road, Hisar",
  "Cantt, Hisar",
  "Dabra Chowk, Hisar",
  "Defence Colony, Hisar",
  "Dogran Mohalla, Hisar",
  "Ganesh Market, Hisar",
  "Global Space, Hisar",
  "Green Park, Hisar",
  "Green Square Market, Hisar",
  "Housing Board Colony sector-14, Hisar",
  "Industrial Area sector 27-28, Hisar",
  "Krishna Nagar, Hisar",
  "Lajpat Nagar, Hisar",
  "Loha Mandi, Hisar",
  "Mahavir Colony, Hisar",
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
    <footer className="relative bg-[#422c18] text-[#f2e8e1] overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#f2e8e1]/10 blur-3xl rounded-full" />

      <div className="relative z-10 w-full px-5 md:px-12 py-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* BRAND SECTION */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-2 tracking-wide">
              Property<span className="text-[#d4a373]">Dealer</span>
            </h3>

            <p className="text-[#f2e8e1]/80 leading-6 text-sm mb-5">
              Your trusted real estate partner for buying, selling and
              investing in premium properties across top cities.
            </p>

            <div className="flex gap-3">
              <SocialIcon><FacebookIcon /></SocialIcon>
              <SocialIcon><TwitterIcon /></SocialIcon>
              <SocialIcon><InstagramIcon /></SocialIcon>
            </div>
          </div>

          {/* HISAR LOCATIONS - PERFECT GRID */}
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
              {hisarLocations
                
                .map((location, index) => {

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
                        text-[#f2e8e1]/80
                        hover:text-[#d4a373]
                        transition-all
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
        <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#f2e8e1]/20 to-transparent" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#f2e8e1]/70">

          <p>
            © {new Date().getFullYear()} PropertyDealer. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[#d4a373] transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-[#d4a373] transition">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

/* SOCIAL WRAPPER */
function SocialIcon({ children }) {
  return (
    <span className="w-8 h-8 rounded-full border border-[#f2e8e1]/30 flex items-center justify-center text-[#f2e8e1] transition-all duration-300 hover:bg-[#d4a373] hover:text-[#422c18] cursor-pointer">
      {children}
    </span>
  );
}

/* SOCIAL ICONS */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.59 8.59 0 01-2.72 1.04 4.25 4.25 0 00-7.25 3.88A12.07 12.07 0 013 4.9a4.24 4.24 0 001.31 5.67 4.2 4.2 0 01-1.93-.54v.06a4.25 4.25 0 003.41 4.17 4.3 4.3 0 01-1.92.07 4.26 4.26 0 003.97 2.96A8.53 8.53 0 012 19.54 12.04 12.04 0 008.29 21c7.55 0 11.68-6.26 11.68-11.69 0-.18 0-.35-.01-.53A8.36 8.36 0 0022.46 6z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10z"/>
    </svg>
  );
}
