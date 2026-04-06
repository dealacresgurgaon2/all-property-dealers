"use client";

import { useEffect, useRef } from "react";

import { useDealers } from "@/context/propertydealercontext/DealerContext";

import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import QueryForm from "./QueryForm";
import Pagination from "./Pagination";

export default function DealersSection({ domain }) {

  const { dealers, loading, page, setPage, totalPages, setDomain, setSearch } = useDealers();

  const listTopRef = useRef(null);

  // ✅ DOMAIN SET
  useEffect(() => {
    if (domain && domain === "localhost") {
      setDomain("www.propertydealeringurgaon.com");
    } else {
      setDomain(domain);
    }
  }, [domain]);

  // ✅ SEARCH → DIRECT BACKEND
  const handleSearch = (query) => {
    setSearch(query.trim());   // 🔥 API hit karega
    setPage(1);
    scrollToList();
  };

  // ✅ SCROLL
  const scrollToList = () => {
    requestAnimationFrame(() => {
      const element = listTopRef.current;
      if (!element) return;

      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  };

  return (
    <section className="bg-[#f8fafc] py-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#0b1f33]">
            Real Estate Broker and Property consultants in Gurgaon
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2">

            {/* SEARCH BAR */}
            <div className="sticky top-[72px] z-30 pb-4">
              <DealerSearchBar onSearch={handleSearch} />
            </div>

            <div className="h-4" />
            <div ref={listTopRef} className="h-2" />

            {/* LOADING */}
            {loading ? (
              <div className="py-16 flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-600 rounded-full animate-spin"></div>
                <p className="text-blue-600 font-medium">
                  Loading Dealers...
                </p>
              </div>
            ) : dealers.length === 0 ? (

              <div className="py-16 text-center text-gray-500">
                No dealers found
              </div>

            ) : (

              <div className="space-y-4">
                {dealers.map((dealer) => (
                  <DealerCard key={dealer._id} dealer={dealer} />
                ))}
              </div>

            )}

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

          {/* RIGHT */}
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