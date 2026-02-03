"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
        w-full sticky top-0 z-50
        bg-[#f2e8e1]
        backdrop-blur
        border-b border-[#422c18]
      "
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#422c18]"
        >
          PropertyDealer
        </Link>

        {/* RIGHT: NAV LINKS */}
        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className="
              text-[#422c18]
              font-medium
              hover:underline
              underline-offset-4
              transition
            "
          >
            About
          </Link>

          <Link
            href="/blogs"
            className="
              text-[#422c18]
              font-medium
              hover:underline
              underline-offset-4
              transition
            "
          >
            Blog
          </Link>
        </nav>

      </div>
    </header>
  );
}
