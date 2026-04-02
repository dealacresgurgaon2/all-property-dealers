"use client";

import { useEffect, useState, useRef } from "react";
import { useDealers } from "@/context/propertydealercontext/DealerContext";

import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import QueryForm from "./QueryForm";
import Pagination from "./Pagination";

export default function DealersSection({ domain }) {

  const { dealers, loading, page, setPage, totalPages, setDomain, setSearch, search } = useDealers();

  const listTopRef = useRef(null);

  // ✅ DOMAIN SET FIXED
  useEffect(() => {
    if (
      domain === "propertydeler-gold-frontend-lp3d.vercel.app" ||
      domain === "all-property-dealers.vercel.app" ||
      domain === "localhost"
    ) {
      setDomain("www.propertydealerinnoida.com");
    } else {
      setDomain(domain);
    }
  }, [domain, setDomain]);

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

  // ✅ SEARCH → API CALL
  const handleSearch = (query) => {
    const cleanQuery = query.trim(); 
    setSearch(cleanQuery); // 🔥 backend me jayega
    setPage(1);
    scrollToList();
  };

  // ================= RENDER =================

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Real Estate Broker and Property consultants in Noida
          </h2>

          {/* <p className="text-sm text-gray-500 mt-2">
            Verified agents & trusted property consultants
          </p> */}

          <div className="w-16 h-1 bg-green-600 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            {/* Sticky Search */}
            <div className="sticky top-[72px] z-30 pb-4 ">
              <DealerSearchBar onSearch={handleSearch} />
            </div>

            <div className="h-4" />

            <div ref={listTopRef} className="h-2" />

            {/* DEALER CARDS */}
            <div className="space-y-5 min-h-[300px]">

              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm text-gray-500 mt-4">
                    Loading property dealers...
                  </p>
                </div>

              ) : dealers.length === 0 ? (

                <div className="py-20 text-center border border-dashed border-green-300 rounded-xl bg-white">
                  <p className="text-green-600 font-medium">
                    No dealers found for your search
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Try different keywords or city name
                  </p>
                </div>

              ) : (

               dealers.map((dealer) => (
                  <DealerCard key={dealer._id} dealer={dealer} />
                ))

              )}

            </div>

            {/* PAGINATION */}
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

          {/* RIGHT SIDE */}
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
