"use client";

import Link from "next/link";
import { useCity } from "@/context/design7api/CityContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function Footer() {

  const { setCity, setDealers } = useCity();

  const router = useRouter();

  const [showDisclaimer, setShowDisclaimer] =
    useState(false);

  const haryanaDistricts = [
    "Ambala",
    "Bhiwani",
    "Charkhi-Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurgaon",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendergarh",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar",
    "Hansi",
  ];

  const handleCityClick = async (district) => {

    const citySlug = district.toLowerCase();

    try {

      const res = await fetch(
        `${API_BASE}/api/get/city/${district}`
      );

      const data = await res.json();

      if (data.success) {

        setDealers(data.data);

        setCity(citySlug);

      }

      router.push(
        `/property-dealer-in-${district.toLowerCase()}`
      );

    } catch (err) {

      console.log("City API Error:", err);

    }

  };

  return (

    <footer
      className="
        relative
        overflow-hidden
        border-t border-[#F3D9E3]
        bg-gradient-to-br
        from-[#FFF8FA]
        via-white
        to-[#FFF3F7]
      "
    >

      {/* BG GLOW */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#76153C]/5 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5A0E24]/5 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">

        {/* TOP BRAND */}
        <div
          className="
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-8
            pb-10
            border-b border-[#F3D9E3]
          "
        >

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-3">

              <div
                className="
                  w-12 h-12
                  rounded-2xl
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

              <div>

                <h2 className="text-2xl font-bold text-[#2A0E18]">
                  Property Dealer Haryana
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Trusted Property Dealer Platform
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div
            className="
              flex flex-wrap gap-3
            "
          >

            <Link
              href="/about"
              className="
                px-4 h-11
                rounded-xl
                border border-[#F3D9E3]
                bg-white
                text-[#76153C]
                font-medium
                flex items-center
                hover:bg-[#FFF0F5]
                transition
              "
            >
              About
            </Link>

            <Link
              href="/blogs"
              className="
                px-4 h-11
                rounded-xl
                border border-[#F3D9E3]
                bg-white
                text-[#76153C]
                font-medium
                flex items-center
                hover:bg-[#FFF0F5]
                transition
              "
            >
              Blogs
            </Link>

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
                shadow-[0_10px_25px_rgba(118,21,60,0.18)]
                hover:opacity-90
                transition
              "
            >
              Contact Us
            </Link>

          </div>

        </div>

        {/* CITY LINKS */}
        <div className="py-12">

          <div className="mb-7">

            <div
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                border border-[#F3D9E3]
                bg-white
                text-[#76153C]
                text-sm
                font-medium
                shadow-sm
              "
            >

              <div className="w-2 h-2 rounded-full bg-[#76153C]" />

              Haryana Locations

            </div>

            <h3 className="mt-5 text-3xl font-bold text-[#2A0E18]">
              Explore Property Dealers by City
            </h3>

          </div>

          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
              gap-4
            "
          >

            {haryanaDistricts.map(
              (district, index) => (

                <Link
                  key={index}
                  href={`/property-dealer-in-${district.toLowerCase()}`}
                  onClick={() =>
                    handleCityClick(district)
                  }
                  className="
                    flex items-center gap-2
                    rounded-2xl
                    border border-[#F3D9E3]
                    bg-white/90
                    px-4 py-3
                    text-sm
                    font-medium
                    text-gray-700
                    hover:bg-[#FFF0F5]
                    hover:text-[#76153C]
                    transition
                    shadow-sm
                  "
                >

                  <div
                    className="
                      w-2 h-2
                      rounded-full
                      bg-[#76153C]
                    "
                  />

                  {district}

                </Link>

              )
            )}

          </div>

        </div>

        {/* DISCLAIMER */}
        <div
          className="
            rounded-[28px]
            border border-[#F3D9E3]
            bg-white/80
            backdrop-blur-xl
            p-6
            shadow-sm
          "
        >

          <h4 className="text-lg font-bold text-[#2A0E18] mb-3">
            Disclaimer
          </h4>

          <p className="text-sm text-gray-600 leading-7">

            {!showDisclaimer ? (

              <>

                Property dealer information is aggregated
                from publicly available sources across
                the web...

                <button
                  onClick={() =>
                    setShowDisclaimer(true)
                  }
                  className="
                    ml-2
                    text-[#76153C]
                    font-semibold
                    underline
                    hover:opacity-80
                    transition
                  "
                >

                  Learn More

                </button>

              </>

            ) : (

              <>

                The property dealers listed on this
                platform are not employed, endorsed,
                or directly affiliated with us.
                Users should independently verify
                credentials, documents and transaction
                details before proceeding. We act only
                as a discovery and connection platform
                and are not responsible for disputes,
                losses or issues arising from dealings
                with listed dealers.

                <button
                  onClick={() =>
                    setShowDisclaimer(false)
                  }
                  className="
                    ml-2
                    text-[#76153C]
                    font-semibold
                    underline
                    hover:opacity-80
                    transition
                  "
                >

                  Show Less

                </button>

              </>

            )}

          </p>

        </div>

        {/* DIVIDER */}
        <div
          className="
            my-10
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#EBCDD8]
            to-transparent
          "
        />

        {/* BOTTOM */}
        <div
          className="
            flex flex-col md:flex-row
            items-center
            justify-between
            gap-4
            text-sm
            text-gray-500
          "
        >

          <p>
            © {new Date().getFullYear()} Property Dealer Haryana.
            All rights reserved.
          </p>

          <p>

            Designed by :{" "}

            <Link
              href="https://www.parcharmanch.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[#76153C]
                font-semibold
                hover:underline
              "
            >

              Parchar Manch

            </Link>

          </p>

        </div>

      </div>

    </footer>

  );
}