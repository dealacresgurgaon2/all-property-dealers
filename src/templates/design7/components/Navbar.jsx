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
        bg-white/80
        backdrop-blur-xl
        border-b border-indigo-200/50
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
          <span className="text-indigo-600">Property</span>
          <span> Dealer Haryana</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/about"
            className="
              relative
              text-gray-700
              font-medium
              transition
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0
              after:bg-indigo-600
              after:transition-all
              hover:text-black
              hover:after:w-full
            "
          >
            About
          </Link>

          {/* <Link
            href="/blogs"
            className="
              relative
              text-gray-700
              font-medium
              transition
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0
              after:bg-indigo-600
              after:transition-all
              hover:text-black
              hover:after:w-full
            "
          >
            Blog
          </Link> */}

          {/* ===== CONTACT BUTTON ===== */}
          <Link
            href="/contactus"
            className="
              ml-4
              px-5 py-2
              bg-indigo-600
              text-white
              rounded-lg
              font-semibold
              hover:bg-indigo-700
              transition
              shadow-sm
            "
          >
            Contact Us
          </Link>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-indigo-200 shadow-md">
          <nav className="flex flex-col py-4 px-4 gap-4">

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="
                text-gray-700
                font-medium
                py-2 px-3
                rounded-lg
                hover:bg-indigo-50
                hover:text-indigo-700
                transition
              "
            >
              About
            </Link>

            <Link
              href="/blogs"
              onClick={() => setOpen(false)}
              className="
                text-gray-700
                font-medium
                py-2 px-3
                rounded-lg
                hover:bg-indigo-50
                hover:text-indigo-700
                transition
              "
            >
              Blog
            </Link>

            {/* ===== CONTACT MOBILE ===== */}
            <Link
              href="/contactus"
              onClick={() => setOpen(false)}
              className="
                py-2 px-3
                bg-indigo-600
                text-white
                font-semibold
                rounded-lg
                text-center
                hover:bg-indigo-700
                transition
              "
            >
              Contact Us
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}
