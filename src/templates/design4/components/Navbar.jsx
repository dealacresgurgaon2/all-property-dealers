"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
        w-full sticky top-0 z-50
        bg-[#0f172a]/70
        backdrop-blur-lg
        border-b border-[#ff7a1a]/30
      "
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          Property<span className="text-[#ff7a1a]">Dealer</span>
        </Link>

        {/* RIGHT: NAV LINKS */}
        <nav className="flex items-center gap-8">
          <Link
            href="/about"
            className="text-white/80 font-medium hover:text-[#ff7a1a] transition"
          >
            About
          </Link>

          <Link
            href="/blogs"
            className="text-white/80 font-medium hover:text-[#ff7a1a] transition"
          >
            Blog
          </Link>
        </nav>

      </div>
    </header>
  );
}
