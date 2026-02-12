"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        w-full
        sticky top-0 z-50
        bg-white/85
        backdrop-blur-xl
        border-b border-[#d4af37]/30
        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <Link
          href="/"
          className="
            text-2xl font-bold
            text-black
            tracking-wide
            flex items-center gap-2
          "
        >
          <span className="text-[#d4af37]">Property</span>
          <span>Dealer</span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/about"
            className="relative text-black/80 font-medium hover:text-black"
          >
            About
          </Link>

          <Link
            href="/blogs"
            className="relative text-black/80 font-medium hover:text-black"
          >
            Blog
          </Link>

          {/* ===== CONTACT BUTTON ===== */}
          <Link
            href="/contactus"
            className="
              ml-4
              px-5 py-2
              rounded-lg
              bg-[#d4af37]
              text-black
              font-semibold
              hover:bg-[#c39b2f]
              transition
              shadow-md
            "
          >
            Contact
          </Link>

        </nav>

        {/* ===== MOBILE TOGGLE BUTTON ===== */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl font-bold text-black"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#d4af37]/30 shadow-md">
          <nav className="flex flex-col p-4 gap-4">

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-black/80 font-medium hover:text-black transition"
            >
              About
            </Link>

            <Link
              href="/blogs"
              onClick={() => setOpen(false)}
              className="text-black/80 font-medium hover:text-black transition"
            >
              Blog
            </Link>

            <Link
              href="/contactus"
              onClick={() => setOpen(false)}
              className="
                px-4 py-2
                bg-[#d4af37]
                text-black
                font-semibold
                rounded-lg
                text-center
              "
            >
              Contact
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}
