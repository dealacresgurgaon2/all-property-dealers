"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          w-full sticky top-0 z-40
          bg-white
          border-b border-[#5E23DC]
        "
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* LEFT: LOGO */}
          <Link
            href="/"
            className="text-2xl font-bold text-[#5E23DC]"
          >
            PropertyDealer
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/about"
              className="text-[#5E23DC] font-medium hover:underline underline-offset-4 transition"
            >
              About
            </Link>

            <Link
              href="/blogs"
              className="text-[#5E23DC] font-medium hover:underline underline-offset-4 transition"
            >
              Blog
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#5E23DC]"
          >
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
          </button>

        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`
          fixed inset-0 bg-black/40 z-40
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* DRAWER */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[270px]
          bg-white
          shadow-2xl
          z-50
          transform
          transition-transform
          duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#5E23DC]">

          <h3 className="text-lg font-bold text-[#5E23DC]">
            Menu
          </h3>

          <button
            onClick={() => setOpen(false)}
            className="text-[#5E23DC]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col p-4 gap-2">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-[#5E23DC] font-medium border-b border-[#5E23DC]/30 pb-3 pt-2"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-[#5E23DC] font-medium border-b border-[#5E23DC]/30 pb-3 pt-2"
          >
            About
          </Link>

          <Link
            href="/blogs"
            onClick={() => setOpen(false)}
            className="text-[#5E23DC] font-medium border-b border-[#5E23DC]/30 pb-3 pt-2"
          >
            Blog
          </Link>

        </nav>

      </div>
    </>
  );
}
