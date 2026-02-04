"use client";

import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useCity } from "@/context/design7api/CityContext";

import DealerCard from "@/templates/design7/components/DealerCard";

export default function DealersPage() {
  const params = useParams();
  const urlCity = params?.city;

  return <CityDealers key={urlCity} urlCity={urlCity} />;
}

// 🔥 INNER COMPONENT – FORCE REMOUNT ON CITY CHANGE
function CityDealers({ urlCity }) {

  const { city, setCity, dealers, loading } = useCity();

  const [ready, setReady] = useState(false);

  // CITY CHANGE RESET LOGIC
  useEffect(() => {
    if (!urlCity) return;

    setReady(false);

    setCity(urlCity);

    const timer = setTimeout(() => {
      setReady(true);
    }, 300);

    return () => clearTimeout(timer);

  }, [urlCity, setCity]);

  const finalDealers = useMemo(() => {

    if (!ready) return [];

    if (!dealers || dealers.length === 0) return [];

    const normalizedUrlCity = urlCity?.toLowerCase();

    // CITY DEALERS FILTER
    const cityDealers = dealers.filter(
      (dealer) =>
        dealer.city &&
        dealer.city.toLowerCase() === normalizedUrlCity
    );

    // AGAR 20 YA USSE ZYADA HAIN – SIRF WAHI DIKHAO
    if (cityDealers.length >= 20) {
      return cityDealers;
    }

    // BAAKI DEALERS (FALLBACK KE LIYE)
    const otherDealers = dealers.filter(
      (dealer) =>
        !dealer.city ||
        dealer.city.toLowerCase() !== normalizedUrlCity
    );

    // -------- STABLE RANDOM LOGIC START --------

    function getSeededRandom(city) {
      let hash = 0;
      for (let i = 0; i < city.length; i++) {
        hash = city.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    }

    function seededShuffle(array, seed) {
      let arr = [...array];
      let currentIndex = arr.length;

      while (currentIndex !== 0) {
        const randomIndex = Math.abs(seed % currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [
          arr[randomIndex],
          arr[currentIndex],
        ];

        seed = seed >> 1;
      }

      return arr;
    }

    const seed = getSeededRandom(normalizedUrlCity);

    const shuffled = seededShuffle(otherDealers, seed);

    // -------- STABLE RANDOM LOGIC END --------

    const needed = 30 - cityDealers.length;

    const fallbackDealers = shuffled.slice(0, needed);

    return [...cityDealers, ...fallbackDealers];

  }, [dealers, urlCity, ready]);

  // STRONG LOADING STATE
  if (loading || !ready) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="px-6 py-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-medium">
          Loading dealers for {urlCity}...
        </div>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10 text-center">

          <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-5 py-2 rounded-full mb-4 border border-indigo-200 capitalize">
            {urlCity} City
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-3 capitalize">
            {urlCity} Property Dealers
          </h2>

          <p className="text-gray-500">
            Showing best available dealers for your city
          </p>

        </div>

        {/* INFO BAR */}
        {/* <div className="mb-8 flex justify-center">
          <div className="px-6 py-3 rounded-xl bg-white border border-indigo-200 shadow-sm">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-bold text-indigo-700">
                {finalDealers.length}
              </span>{" "}
              dealers
            </p>
          </div>
        </div> */}

        {finalDealers.length === 0 && (
          <div className="text-center text-gray-600">
            No dealers found in {urlCity}
          </div>
        )}

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">

          {finalDealers.map((dealer) => (
            <DealerCard key={dealer._id} dealer={dealer} />
          ))}

        </div>

      </div>

    </section>
  );
}
