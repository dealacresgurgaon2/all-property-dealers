"use client";

import Link from "next/link";

export default function Navbar() {
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
          <span>Dealer</span>
        </Link>

        {/* RIGHT: NAV LINKS */}
        <nav className="flex items-center gap-8">
          
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

          <Link
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
          </Link>

        </nav>

      </div>
    </header>
  );
}
