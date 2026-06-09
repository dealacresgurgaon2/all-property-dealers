"use client";

import { useParams } from "next/navigation";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useCity } from "@/context/design7api/CityContext";

import DealerCard from "@/templates/design8/components/DealerCard";

export default function DealersPage() {

  const params = useParams();

  const urlCity = params?.city;

  return (

    <CityDealers
      key={urlCity}
      urlCity={urlCity}
    />

  );

}

/* INNER COMPONENT */
function CityDealers({ urlCity }) {

  const {
    city,
    setCity,
    dealers,
    loading,
  } = useCity();

  const [ready, setReady] =
    useState(false);

  /* CITY CHANGE RESET */
  useEffect(() => {

    if (!urlCity) return;

    setReady(false);

    setCity(urlCity);

    const timer = setTimeout(() => {

      setReady(true);

    }, 300);

    return () =>
      clearTimeout(timer);

  }, [urlCity, setCity]);

  /* FINAL DEALERS */
  const finalDealers = useMemo(() => {

    if (!ready) return [];

    if (
      !dealers ||
      dealers.length === 0
    )
      return [];

    const normalizedUrlCity =
      urlCity?.toLowerCase();

    /* CITY DEALERS */
    const cityDealers =
      dealers.filter(
        (dealer) =>
          dealer.city &&
          dealer.city.toLowerCase() ===
            normalizedUrlCity
      );

    /* IF 20+ */
    if (cityDealers.length >= 20) {

      return cityDealers;

    }

    /* OTHER DEALERS */
    const otherDealers =
      dealers.filter(
        (dealer) =>
          !dealer.city ||
          dealer.city.toLowerCase() !==
            normalizedUrlCity
      );

    /* SEEDED RANDOM */
    function getSeededRandom(city) {

      let hash = 0;

      for (
        let i = 0;
        i < city.length;
        i++
      ) {

        hash =
          city.charCodeAt(i) +
          ((hash << 5) - hash);

      }

      return hash;

    }

    function seededShuffle(
      array,
      seed
    ) {

      let arr = [...array];

      let currentIndex =
        arr.length;

      while (currentIndex !== 0) {

        const randomIndex =
          Math.abs(
            seed % currentIndex
          );

        currentIndex--;

        [
          arr[currentIndex],
          arr[randomIndex],
        ] = [
          arr[randomIndex],
          arr[currentIndex],
        ];

        seed = seed >> 1;

      }

      return arr;

    }

    const seed =
      getSeededRandom(
        normalizedUrlCity
      );

    const shuffled =
      seededShuffle(
        otherDealers,
        seed
      );

    const needed =
      30 - cityDealers.length;

    const fallbackDealers =
      shuffled.slice(0, needed);

    return [
      ...cityDealers,
      ...fallbackDealers,
    ];

  }, [dealers, urlCity, ready]);

  /* LOADING */
  if (loading || !ready) {

    return (

      <div
        className="
          min-h-[70vh]
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
                capitalize
              "
            >

              Loading dealers for{" "}
              {urlCity}...

            </p>

            <p className="text-gray-500 text-sm mt-2">

              Fetching verified property dealers

            </p>

          </div>

        </div>

      </div>

    );

  }

  return (

    <section
      className="
        relative
        overflow-hidden
        min-h-screen
        py-16
        bg-gradient-to-br
        from-[#FFF8FA]
        via-white
        to-[#FFF3F7]
      "
    >

      {/* BG GLOW */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#76153C]/5 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#5A0E24]/5 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">

          {/* BADGE */}
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
              mb-6
              capitalize
            "
          >

            <div className="w-2 h-2 rounded-full bg-[#76153C]" />

            {urlCity} City

          </div>

          {/* TITLE */}
          <h2
            className="
              text-3xl md:text-5xl
              font-bold
              text-[#2A0E18]
              capitalize
              leading-tight
            "
          >

            {urlCity} Property Dealers

          </h2>

          {/* DESC */}
          <p
            className="
              text-gray-600
              mt-5
              max-w-2xl
              mx-auto
              leading-8
            "
          >

            Discover trusted property dealers,
            real estate consultants and verified
            agents available in {urlCity}.

          </p>

        </div>

        {/* COUNT */}
        <div className="flex justify-center mb-10">

          <div
            className="
              px-6 py-3
              rounded-2xl
              border border-[#F3D9E3]
              bg-white/90
              backdrop-blur-xl
              shadow-sm
            "
          >

            <p className="text-gray-600">

              Showing{" "}

              <span
                className="
                  font-bold
                  text-[#76153C]
                "
              >

                {finalDealers.length}

              </span>{" "}

              Verified Dealers

            </p>

          </div>

        </div>

        {/* EMPTY */}
        {finalDealers.length ===
          0 && (

          <div
            className="
              rounded-[36px]
              border border-[#F3D9E3]
              bg-white/90
              backdrop-blur-xl
              p-14
              text-center
              shadow-sm
            "
          >

            <div
              className="
                w-20 h-20
                rounded-[28px]
                bg-gradient-to-br
                from-[#76153C]
                to-[#5A0E24]
                text-white
                flex items-center justify-center
                text-4xl
                mx-auto
                mb-6
                shadow-md
              "
            >

              📍

            </div>

            <h3
              className="
                text-3xl
                font-bold
                text-[#2A0E18]
                mb-4
                capitalize
              "
            >

              No Dealers Found

            </h3>

            <p
              className="
                text-gray-600
                max-w-xl
                mx-auto
                leading-8
              "
            >

              Currently no dealers available in{" "}
              {urlCity}. Please check
              back later for updated listings.

            </p>

          </div>

        )}

        {/* GRID */}
        <div
          className="
            grid
            md:grid-cols-1
            lg:grid-cols-2
            gap-7
          "
        >

          {finalDealers.map(
            (dealer) => (

              <DealerCard
                key={dealer._id}
                dealer={dealer}
              />

            )
          )}

        </div>

      </div>

    </section>

  );

}