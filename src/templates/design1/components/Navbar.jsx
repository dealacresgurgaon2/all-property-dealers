"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#0b1f33]/50 backdrop-blur border-b border-[#1e40af]/40">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          Property<span className="text-[#38bdf8]">Dealer</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-white/80 font-medium hover:text-[#38bdf8] transition"
          >
            About
          </Link>

          <Link
            href="/blogs"
            className="text-white/80 font-medium hover:text-[#38bdf8] transition"
          >
            Blog
          </Link>
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0b1f33] border-t border-[#1e40af]/40">
          <div className="flex flex-col py-4">

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-white/80 hover:bg-[#1e40af]/20 hover:text-[#38bdf8] transition"
            >
              About
            </Link>

            <Link
              href="/blogs"
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-white/80 hover:bg-[#1e40af]/20 hover:text-[#38bdf8] transition"
            >
              Blog
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}
