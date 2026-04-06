"use client";

import { useEffect, useState, useRef } from "react";
import { useDealers } from "@/context/propertydealercontext/DealerContext";

import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import QueryForm from "./QueryForm";
import Pagination from "./Pagination";
import CityButtonsFilter from "./CityButtonsFilter";

export default function DealersSection({ domain }) {

  const { dealers, loading, page, setPage, totalPages, setDomain, setSearch, search } = useDealers();

  const listTopRef = useRef(null);

  // ✅ DOMAIN SET FIXED
  useEffect(() => {
  if (typeof window === "undefined") return;

  const hostname = window.location.hostname;

  let finalDomain = hostname;

  if (
    hostname === "localhost" ||
    hostname.includes("vercel.app")
  ) {
    finalDomain = "www.propertydealerindelhi.com";
  }

  setDomain(finalDomain);

}, []); // ❌ domain dependency hata di

  // ✅ SCROLL FUNCTION
  const scrollToList = () => {
    requestAnimationFrame(() => {
      const element = listTopRef.current;
      if (!element) return;

      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  };
 const handleCityFilter = (city) => {
  setSearch(`city:${city.toLowerCase()}`); // 🔥 tag based search
  setPage(1);
  scrollToList();
};

  // ✅ SEARCH → API CALL
  const handleSearch = (query) => {
    const cleanQuery = query.trim(); 
    setSearch(cleanQuery); // 🔥 backend me jayega
    setPage(1);
    scrollToList();
  };

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Real Estate Broker and Property consultants in Delhi
          </h2>

          {/* <p className="text-sm text-gray-500 mt-2">
            Verified agents & trusted property consultants
          </p> */}

          <div className="w-16 h-1 bg-red-600 mt-3 rounded-full"></div>

          <div className="mt-6">
            <CityButtonsFilter onCitySelect={handleCityFilter} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">

            <div className="sticky top-[72px] z-30 pb-4">
              <DealerSearchBar onSearch={handleSearch} />
            </div>

            <div className="h-4" />
            <div ref={listTopRef} className="h-2" />

            {loading ? (
              <div className="py-20 text-center border border-dashed border-red-300 rounded-xl bg-white">
                <div className="inline-block px-6 py-3 rounded-lg bg-red-100 text-red-600 font-medium">
                  Loading property dealers…
                </div>
              </div>

            ) : dealers.length === 0 ? (

              <div className="py-20 text-center border border-dashed border-red-300 rounded-xl bg-white">
                <p className="text-red-600 font-medium">
                  No dealers found
                </p>
              </div>

            ) : (

              <div className="space-y-5 -mt-10">
                {dealers.map((dealer) => (
                  <DealerCard key={dealer._id} dealer={dealer} />
                ))}
              </div>
            )}

            {!loading && totalPages > 1 && (
              <div className="mt-6">
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  setPage={(p) => {
                    setPage(p);
                    scrollToList();
                  }}
                />
              </div>
            )}

          </div>

          <div className="space-y-6">
            <div className="sticky top-[72px]">
              <QueryForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
