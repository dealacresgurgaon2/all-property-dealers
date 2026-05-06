"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import DealerCard from "@/templates/design8/components/DealerCard";
import QueryForm from "@/templates/design8/components/QueryForm";
import Breadcrumb from "@/templates/design8/components/Breadcrumb";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function LocationPage() {

  const params = useParams();

  const rawCity = params.city;

  const rawLocation = params.location;

  /* CLEAN CITY */
  const city = rawCity
    ?.toLowerCase()
    .replace("property-dealer-in-", "")
    .trim();

  /* DELHI FIX */
  const getMappedCity = (city) => {

    const map = {
      delhi: "Delhi",
      "south-delhi": "South Delhi",
      "north-delhi": "North Delhi",
      "east-delhi": "East Delhi",
      "west-delhi": "West Delhi",
      "central-delhi": "Central Delhi",
    };

    return (
      map[city.toLowerCase()] ||
      city
    );

  };

  /* LOCATION FIX */
  const formatLocation = (slug) => {

    if (!slug) return "";

    return slug
      .split("-hisar")[0]
      .replace(/-/g, " ")
      .replace(
        /\b\w/g,
        (c) => c.toUpperCase()
      );

  };

  const location =
    formatLocation(rawLocation);

  const mappedCity =
    getMappedCity(city);

  const [topDealers, setTopDealers] =
    useState([]);

  const [allDealers, setAllDealers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    if (!mappedCity || !location)
      return;

    const fetchData = async () => {

      try {

        setLoading(true);

        /* TOP LOCATION */
        const res1 = await fetch(
          `${API_BASE}/api/get/haryana-location-filter?city=${mappedCity}&location=${encodeURIComponent(
            location
          )}`
        );

        const data1 =
          await res1.json();

        setTopDealers(
          data1?.data || []
        );

        /* ALL CITY */
        const res2 = await fetch(
          `${API_BASE}/api/get/city/${mappedCity}`
        );

        const data2 =
          await res2.json();

        setAllDealers(
          data2?.data || []
        );

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

    fetchData();

  }, [mappedCity, location]);

  /* LOADING */
  if (loading) {

    return (

      <section
        className="
          min-h-screen
          flex items-center justify-center
          bg-gradient-to-br
          from-[#FFF8FA]
          via-white
          to-[#FFF3F7]
        "
      >

        <div className="flex flex-col items-center">

          {/* SPINNER */}
          <div className="relative">

            <div
              className="
                w-16 h-16
                rounded-full
                border-[4px]
                border-[#F3D9E3]
              "
            />

            <div
              className="
                absolute top-0 left-0
                w-16 h-16
                rounded-full
                border-[4px]
                border-[#76153C]
                border-t-transparent
                animate-spin
              "
            />

          </div>

          {/* TEXT */}
          <div className="text-center mt-5">

            <p
              className="
                text-[#76153C]
                font-bold
                text-lg
              "
            >

              Fetching Best Dealers...

            </p>

            <p className="text-sm text-gray-500 mt-2">

              Please wait while we load verified dealers

            </p>

          </div>

        </div>

      </section>

    );

  }

  return (

    <section
      className="
        relative
        overflow-hidden
        min-h-screen
        py-12
        bg-gradient-to-br
        from-[#FFF8FA]
        via-white
        to-[#FFF3F7]
      "
    >

      {/* BG GLOW */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#76153C]/5 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#5A0E24]/5 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* BREADCRUMB */}
       <Breadcrumb
        className="
           max-w-7xl
           mx-auto
           md:px-0
           px-3
           py-5
         "
         items={[
           {
             label:
               "All Property Dealer",
             href:
               "/all-property-dealer",
           },
           {
             label:
               "Explore Property Dealers In Haryana Districts",
             href:
               "/explore-property-dealers-in-haryana-districts",
           },
           
         
         ]}
       />

        {/* HERO */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border border-[#F3D9E3]
            bg-gradient-to-br
            from-[#FFF8FA]
            via-white
            to-[#FFF3F7]
            p-7 md:p-10
            shadow-[0_10px_40px_rgba(118,21,60,0.08)]
            mb-10
          "
        >

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-52 h-52 bg-[#76153C]/5 blur-3xl rounded-full" />

          <div className="relative z-10">

            {/* BADGE */}
            <div
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-[#FCE7EF]
                text-[#76153C]
                text-sm
                font-semibold
                mb-5
              "
            >

              <div className="w-2 h-2 rounded-full bg-[#76153C]" />

              Verified Property Dealers

            </div>

            {/* TITLE */}
            <h1
              className="
                text-3xl md:text-5xl
                font-bold
                text-[#2A0E18]
                capitalize
                leading-tight
              "
            >

              Property Dealers in {location}

            </h1>

            {/* DESC */}
            <p
              className="
                mt-5
                text-gray-600
                text-lg
                leading-8
                max-w-3xl
              "
            >

              Explore trusted real estate agents,
              property consultants and verified
              dealers in {location}, {mappedCity}.

            </p>

          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-7">

            {/* TOP TITLE */}
            <div
              className="
                flex items-center gap-3
                mb-2
              "
            >

              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#76153C]
                  to-[#5A0E24]
                  text-white
                  flex items-center justify-center
                  text-xl
                  shadow-md
                "
              >

                📍

              </div>

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-[#2A0E18]
                  "
                >

                  Dealers in {location}

                </h2>

                <p className="text-gray-500 text-sm mt-1">

                  Top verified property dealers

                </p>

              </div>

            </div>

            {/* TOP DEALERS */}
            {topDealers.length > 0 ? (

              topDealers.map((d) => (

                <DealerCard
                  key={d._id}
                  dealer={d}
                />

              ))

            ) : (

              <div
                className="
                  rounded-[30px]
                  border border-[#F3D9E3]
                  bg-white
                  p-10
                  text-center
                  shadow-sm
                "
              >

                <p className="text-gray-500">

                  No dealers found in this location

                </p>

              </div>

            )}

            {/* ALL DEALERS TITLE */}
            <div
              className="
                flex items-center gap-3
                pt-8
              "
            >

              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#76153C]
                  to-[#5A0E24]
                  text-white
                  flex items-center justify-center
                  text-xl
                  shadow-md
                "
              >

                🏙️

              </div>

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-[#2A0E18]
                  "
                >

                  All Dealers in {mappedCity}

                </h2>

                <p className="text-gray-500 text-sm mt-1">

                  Explore all available city dealers

                </p>

              </div>

            </div>

            {/* ALL DEALERS */}
            {allDealers.length > 0 ? (

              allDealers.map((d) => (

                <DealerCard
                  key={d._id}
                  dealer={d}
                />

              ))

            ) : (

              <div
                className="
                  rounded-[30px]
                  border border-[#F3D9E3]
                  bg-white
                  p-10
                  text-center
                  shadow-sm
                "
              >

                <p className="text-gray-500">

                  No dealers found in this city

                </p>

              </div>

            )}

          </div>

          {/* RIGHT */}
          <div className="hidden lg:block">

            <div className="sticky top-24">

              <div
                className="
                  rounded-[32px]
                  border border-[#F3D9E3]
                  bg-white/90
                  backdrop-blur-xl
                  overflow-hidden
                  shadow-[0_10px_40px_rgba(118,21,60,0.08)]
                "
              >

                <QueryForm />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}