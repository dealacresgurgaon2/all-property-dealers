"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        border-b border-[#F3D9E3]
        bg-white/80
        backdrop-blur-2xl
        shadow-[0_4px_20px_rgba(118,21,60,0.06)]
      "
    >

      {/* SOFT TOP LIGHT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF7FA] via-white to-[#FFF3F7] opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2"
          >

            <div
              className="
                w-10 h-10
                rounded-xl
                bg-gradient-to-br
                from-[#76153C]
                to-[#5A0E24]
                text-white
                flex items-center justify-center
                font-bold
                text-lg
                shadow-md
              "
            >
              DA
            </div>

            <div className="leading-tight">

              <h2 className="text-lg font-bold text-[#2A0E18]">
                Dealer Agency
              </h2>

              <p className="text-[11px] text-gray-500 -mt-[2px]">
                Trusted Property Platform
              </p>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">

            <NavLink href="/about" label="About" />

            <NavLink href="/blogs" label="Blogs" />

            {/* CONTACT BUTTON */}
            <Link
              href="/contactus"
              className="
                px-5 h-11
                rounded-xl
                bg-gradient-to-r
                from-[#76153C]
                to-[#5A0E24]
                text-white
                font-semibold
                flex items-center
                hover:opacity-90
                transition
                shadow-[0_6px_20px_rgba(118,21,60,0.18)]
              "
            >
              Contact Us
            </Link>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              w-11 h-11
              rounded-xl
              border border-[#EDD5DF]
              bg-[#FFF7FA]
              flex items-center justify-center
              text-[#76153C]
            "
          >

            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
                className="w-6 h-6"
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

      </div>

      {/* MOBILE MENU */}
      {open && (

        <div
          className="
            md:hidden
            border-t border-[#F3D9E3]
            bg-white
            shadow-xl
          "
        >

          <nav className="px-4 py-5 flex flex-col gap-3">

            <MobileLink
              href="/about"
              label="About"
              setOpen={setOpen}
            />

            <MobileLink
              href="/blogs"
              label="Blogs"
              setOpen={setOpen}
            />

            <Link
              href="/contactus"
              onClick={() => setOpen(false)}
              className="
                h-12
                rounded-xl
                bg-gradient-to-r
                from-[#76153C]
                to-[#5A0E24]
                text-white
                font-semibold
                flex items-center justify-center
                mt-2
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

/* DESKTOP NAV LINK */
function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="
        relative
        text-[15px]
        font-medium
        text-gray-700
        hover:text-[#76153C]
        transition
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-0
        after:bg-[#76153C]
        after:transition-all
        hover:after:w-full
      "
    >
      {label}
    </Link>
  );
}

/* MOBILE NAV LINK */
function MobileLink({ href, label, setOpen }) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="
        h-12
        rounded-xl
        border border-[#F5DDE6]
        bg-[#FFF8FA]
        px-4
        flex items-center
        text-[#76153C]
        font-medium
        hover:bg-[#FFF0F5]
        transition
      "
    >
      {label}
    </Link>
  );
}