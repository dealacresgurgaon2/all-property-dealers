"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {

  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-[#111111] to-[#0a0a0a] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4 tracking-wide">
              Property <span className="text-white"> Dealer Delhi</span>
            </h3>
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

          {/* DELHI ZONES */}
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

        {/* DISCLAIMER */}
        <div className="mt-14 border-t border-red-600/20 pt-6">
          <p className="font-semibold mb-2">
            Disclaimer :
          </p>

          <p className="text-white/60 text-sm leading-6 max-w-4xl">
            {!showDisclaimer ? (
              <>
                ...
                <span
                  onClick={() => setShowDisclaimer(true)}
                  className="ml-2 text-red-500 cursor-pointer hover:underline"
                >
                  Learn More
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
                  className="ml-2 text-red-500 cursor-pointer hover:underline"
                >
                  Show Less
                </span>
              </>
            )}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-4">

          <div>
            © {new Date().getFullYear()} Property Dealer Delhi. All rights reserved.
          </div>

          <div>
                    <p>
  Designed by :{" "}
  <Link
    href="https://www.parcharmanch.com"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-white"
  >
    Parchar Manch
  </Link>
</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
