"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        w-full
        sticky top-0 z-50
        bg-white/90
        backdrop-blur-xl
        border-b border-red-500/30
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
          <span className="text-red-600">Property</span>
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
              after:bg-red-600
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
              after:bg-red-600
              after:transition-all
              hover:text-black
              hover:after:w-full
            "
          >
            Blog
          </Link>

        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black focus:outline-none"
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
        <div className="md:hidden bg-white border-t border-red-500/20">
          <div className="flex flex-col py-2">

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="
                px-4 py-3
                text-black/80
                hover:bg-red-50
                hover:text-black
                transition
              "
            >
              About
            </Link>

            <Link
              href="/blogs"
              onClick={() => setOpen(false)}
              className="
                px-4 py-3
                text-black/80
                hover:bg-red-50
                hover:text-black
                transition
              "
            >
              Blog
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}
