"use client";

import { useEffect, useState, useRef } from "react";

import { useDealers } from "@/context/propertydealercontext/DealerContext";

// ---- PATHS FIXED HERE ----
import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import QueryForm from "./QueryForm";
import Pagination from "./Pagination";
// --------------------------

export default function DealersSection() {

  const { dealers, loading, page, setPage, totalPages } = useDealers();

  const [filtered, setFiltered] = useState([]);

  const listTopRef = useRef(null);

  useEffect(() => {
    setFiltered(dealers);
  }, [dealers]);

  const handleSearch = (query) => {
    const q = query.toLowerCase().trim();

    if (!q) {
      setFiltered(dealers);
      setPage(1);
      scrollToList();
      return;
    }

    const words = q.split(/\s+/);

    const matched = dealers.filter((d) => {
      const text = `
        ${d.name || ""}
        ${d.city || ""}
        ${d.address || ""}
      `.toLowerCase();

      return words.every((w) => text.includes(w));
    });

    setFiltered(matched);
    setPage(1);
    scrollToList();
  };

  const scrollToList = () => {
    requestAnimationFrame(() => {
      listTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  if (loading) {
    return (
      <div className="py-28 text-center">
        <div className="inline-block px-6 py-3 rounded-lg bg-[#ff7a1a]/10 text-[#ff7a1a] font-medium">
          Loading property dealers…
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Top Property Dealers
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Verified agents & trusted property consultants
          </p>

          <div className="w-16 h-1 bg-[#ff7a1a] mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2">

            {/* SEARCH BAR */}
            <div className="sticky top-[72px] z-30 pb-4 ">
              <DealerSearchBar onSearch={handleSearch} />
            </div>

            <div className="h-4" />

            <div ref={listTopRef} className="scroll-mt-[140px]" />

            {/* EMPTY STATE */}
            {filtered.length === 0 ? (
              <div className="py-20 text-center border border-dashed border-gray-300 rounded-xl bg-white">
                <p className="text-gray-500 font-medium">
                  No dealers found for your search
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Try different keywords or city name
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {filtered.map((dealer) => (
                  <DealerCard key={dealer._id} dealer={dealer} />
                ))}
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
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

          {/* RIGHT SIDEBAR */}
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
