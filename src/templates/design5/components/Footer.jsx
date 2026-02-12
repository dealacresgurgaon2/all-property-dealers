"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f0f0f] text-white overflow-hidden">

      {/* RED GLOW */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-3">
              PropertyDealer
            </h3>

            <p className="text-white/70 leading-7 mb-6">
              Your trusted real estate partner for buying, selling and
              investing in premium properties across top cities.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <a className="social-btn" href="#">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z"/>
                </svg>
              </a>

              <a className="social-btn" href="#">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.59 8.59 0 01-2.72 1.04 4.25 4.25 0 00-7.25 3.88A12.07 12.07 0 013 4.9a4.24 4.24 0 001.31 5.67 4.2 4.2 0 01-1.93-.54v.06a4.25 4.25 0 003.41 4.17 4.3 4.3 0 01-1.92.07 4.26 4.26 0 003.97 2.96A8.53 8.53 0 012 19.54 12.04 12.04 0 008.29 21c7.55 0 11.68-6.26 11.68-11.69 0-.18 0-.35-.01-.53A8.36 8.36 0 0022.46 6z"/>
                </svg>
              </a>

              <a className="social-btn" href="#">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.51 4.51 0 0012 7.5zm0 7.3A2.8 2.8 0 1114.8 12 2.8 2.8 0 0112 14.8zM17.5 6a1 1 0 11-1-1 1 1 0 011 1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/" className="hover:text-red-600">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-600">About Us</Link></li>
              <li><Link href="/dealers" className="hover:text-red-600">Dealers</Link></li>
              <li><Link href="/blogs" className="hover:text-red-600">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-red-600">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3 text-white/70">
              <li>Buy Property</li>
              <li>Sell Property</li>
              <li>Rent Property</li>
              <li>Investment Advisory</li>
              <li>Legal Assistance</li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>

            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <LocationIcon />
                Haryana – Multiple Cities
              </li>

              <li className="flex items-center gap-3">
                <PhoneIcon />
                +91 98765 43210
              </li>

              <li className="flex items-center gap-3">
                <MailIcon />
                support@propertydealer.com
              </li>
            </ul>

            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs">
              🔒 100% Verified Listings
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

        {/* BOTTOM BAR */}
        <div className="text-center items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} PropertyDealer. All rights reserved.</p>

          <div className="">
             <Link 
  href="https://www.parcharmanch.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  Designed by Parchar Manch
</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          background: #e63946;
          color: white;
        }
      `}</style>
    </footer>
  );
}

/* ================= SVG ICONS ================= */

function LocationIcon() {
  return (
    <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"/>
      <circle cx="12" cy="11" r="2.5"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 013.09 4.18 2 2 0 015.11 2h3a2 2 0 012 1.72c.13.81.3 1.6.51 2.36a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.72-1.08a2 2 0 012.11-.45c.76.21 1.55.38 2.36.51A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6"/>
    </svg>
  );
}
