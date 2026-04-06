"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#f3c6d1] shadow-md">

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D02752] to-[#8A244B]">
            Property
          </span>
          <span className="text-[#8A244B]">Dealer Chandigarh</span>
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/about"
            className="relative text-gray-700 font-medium hover:text-[#D02752] transition group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#D02752] to-[#8A244B] transition-all group-hover:w-full"></span>
          </Link>

          <Link
            href="/blogs"
            className="relative text-gray-700 font-medium hover:text-[#D02752] transition group"
          >
            Blog
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#D02752] to-[#8A244B] transition-all group-hover:w-full"></span>
          </Link>

          {/* CTA */}
          <Link
            href="/contactus"
            className="ml-4 px-5 py-2 bg-gradient-to-r from-[#D02752] to-[#8A244B] text-white rounded-lg font-semibold hover:scale-[1.05] transition shadow-lg"
          >
            Contact Us
          </Link>

        </nav>

        {/* MOBILE BTN */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#8A244B]"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#f3c6d1] shadow-xl">

          <div className="flex flex-col py-4 px-4 gap-4">

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-[#D02752] transition"
            >
              About
            </Link>

            <Link
              href="/blogs"
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-[#D02752] transition"
            >
              Blog
            </Link>

            <Link
              href="/contactus"
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-gradient-to-r from-[#D02752] to-[#8A244B] text-white rounded-lg font-semibold text-center shadow-md"
            >
              Contact Us
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}