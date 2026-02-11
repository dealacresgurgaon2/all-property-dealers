"use client";

import Link from "next/link";
import { useCity } from "@/context/design7api/CityContext";
import { usePathname, useRouter } from "next/navigation";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
export default function Footer() {

  const { setCity, setDealers } = useCity();   // 👈 ADD setDealers

  const pathname = usePathname();
  const router = useRouter();

  

  const haryanaDistricts = [
    "Ambala",
    "Bhiwani",
    "Charkhi Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurgaon",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar",
  ];

  // 🔥 UPDATED FUNCTION
  const handleCityClick = async (district) => {

    const citySlug = district.toLowerCase();

    try {
      const res = await fetch(`${API_BASE}/api/get/city/${district}`);

      const data = await res.json();

      if (data.success) {
        // 🔥 MAIN IMPORTANT PART
        setDealers(data.data);     // context me dealers store
        setCity(citySlug);         // selected city store
      }

      router.push(`/${citySlug}`);

    } catch (err) {
      console.log("City API Error:", err);
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">

      <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 right-1/3 w-[600px] h-[600px] bg-purple-600/10 blur-3xl rounded-full" />

      <div className="relative z-10  w-full px-6 py-16">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">

          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            PropertyDealer
          </h2>

          <div className="flex gap-3">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Verified Listings
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Trusted Dealers
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">

          <div>
            <h4 className="text-lg font-semibold mb-4">About Platform</h4>

            <p className="text-white/70 text-sm leading-6">
              Smart platform to connect buyers and sellers with verified
              property dealers across India. Simplifying real estate search
              with trust and transparency.
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="text-lg font-semibold mb-6">
              Explore Dealers by Haryana Cities
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

              {haryanaDistricts.map((district, index) => {

                const citySlug = district.toLowerCase();

                return (
                  <Link
                    key={index}

                    href={`/${citySlug}`}

                    onClick={() => handleCityClick(district)}

                    className="
                      flex items-center gap-2
                      text-base font-medium
                      text-white/80
                      hover:text-indigo-400
                      transition
                      py-1
                    "
                  >
                    <span className="text-indigo-400">•</span>

                    {/* 🔥 MAIN TEXT CHANGE HERE */}
                    Property Dealer in {district}

                  </Link>
                );
              })}

            </div>
          </div>

        </div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">

          <p>© {new Date().getFullYear()} PropertyDealer. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-indigo-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-400">Terms of Service</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
