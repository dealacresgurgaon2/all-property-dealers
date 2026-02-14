"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#111111] to-[#0a0a0a] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-extrabold text-red-500 mb-4 tracking-wide">
              Property <span className="text-white">Dealer</span>
            </h3>

            <p className="text-white/60 leading-7 text-sm max-w-sm">
              Trusted & verified property dealers across Delhi.
              Buy, sell & invest with complete confidence.
            </p>

            
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-red-600/40 pb-2 inline-block">
              Quick Links
            </h4>

            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <Link href="/" className="hover:text-red-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-red-500 transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ZONES */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-red-600/40 pb-2 inline-block">
              Delhi Zones
            </h4>

            <div className="grid grid-cols-2 gap-3 text-sm">

              {[
                { name: "Central Delhi", slug: "central-delhi" },
                { name: "North Delhi", slug: "north-delhi" },
                { name: "South Delhi", slug: "south-delhi" },
                { name: "East Delhi", slug: "east-delhi" },
                { name: "West Delhi", slug: "west-delhi" },
              ].map((zone) => (
                <Link
                  key={zone.slug}
                  href={`/zone/${zone.slug}`}
                  className="bg-[#1a1a1a] border border-red-600/30 hover:bg-red-600 hover:text-white py-2 px-4 rounded-md text-center transition-all duration-300"
                >
                  {zone.name}
                </Link>
              ))}

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/50 gap-4">

          <div>
            © {new Date().getFullYear()} PropertyDealer. All rights reserved.
          </div>

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
  );
}
