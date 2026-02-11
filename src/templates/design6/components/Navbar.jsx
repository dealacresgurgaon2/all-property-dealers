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
        bg-white/90
        backdrop-blur-xl
        border-b border-green-500/30
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
          <span className="text-green-600">Property</span>
          <span>Dealer</span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="
              relative
              text-black/80
              font-medium
              transition
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0
              after:bg-green-600
              after:transition-all
              hover:text-black
              hover:after:w-full
            "
          >
            About
          </Link>

          <Link
            href="/blogs"
            className="
              relative
              text-black/80
              font-medium
              transition
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0
              after:bg-green-600
              after:transition-all
              hover:text-black
              hover:after:w-full
            "
          >
            Blog
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white border-t border-green-500/30">
          <div className="flex flex-col py-4 px-4 gap-4">

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-black/80 font-medium hover:text-green-600 transition"
            >
              About
            </Link>

            <Link
              href="/blogs"
              onClick={() => setOpen(false)}
              className="text-black/80 font-medium hover:text-green-600 transition"
            >
              Blog
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
