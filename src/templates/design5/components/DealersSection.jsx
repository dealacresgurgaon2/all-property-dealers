"use client";

import { useEffect, useState, useRef } from "react";

import { useDealers } from "@/context/propertydealercontext/DealerContext";

import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import QueryForm from "./QueryForm";
import Pagination from "./Pagination";

export default function DealersSection({ domain }) {

  const { dealers, loading, page, setPage, totalPages, setDomain } = useDealers();

  useEffect(() => {
    setDomain("propertydealerindelhi.com");
    if (
      domain &&
      (domain == "propertydeler-gold-frontend-k2da.vercel.app" ||
        domain == "localhost")
    ) {
      setDomain("propertydealerindelhi.com");
    }
  }, [domain]);

  const [filtered, setFiltered] = useState([]);

  const listTopRef = useRef(null);

  useEffect(() => {
    setFiltered(dealers);
  }, [dealers]);

  // ============ 🔥 FINAL SEARCH LOGIC ============

  const handleSearch = (query) => {

    const q = query.toLowerCase().trim();

    if (!q) {
      setFiltered(dealers);
      setPage(1);
      scrollToList();
      return;
    }

    const words = q.split(/\s+/);

    // MATCHED DEALERS
    const matched = dealers.filter((d) => {
      const text = `
        ${d.name || ""}
        ${d.city || ""}
        ${d.address || ""}
      `.toLowerCase();

      return words.every((w) => text.includes(w));
    });

    // UNMATCHED DEALERS
    const unmatched = dealers.filter((d) => {
      const text = `
        ${d.name || ""}
        ${d.city || ""}
        ${d.address || ""}
      `.toLowerCase();

      return !words.every((w) => text.includes(w));
    });

    // 🔥 Matched on TOP
    let finalList = [...matched, ...unmatched];

    // 🔥 Guarantee MINIMUM 100 CARDS
    if (finalList.length < 100 && dealers.length > finalList.length) {

      const extraNeeded = 100 - finalList.length;

      const extra = dealers
        .filter(d => !finalList.includes(d))
        .slice(0, extraNeeded);

      finalList = [...finalList, ...extra];
    }

    setFiltered(finalList);

    setPage(1);
    scrollToList();
  };

  // ===============================================

  const scrollToList = () => {
    requestAnimationFrame(() => {
      const element = listTopRef.current;
      if (!element) return;

      const yOffset = -100;   // Fix first card hiding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Top Property Dealers
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Verified agents & trusted property consultants
          </p>

          <div className="w-16 h-1 bg-red-600 mt-3 rounded-full"></div>
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
            ) : filtered.length === 0 ? (
              <div className="py-20 text-center border border-dashed border-red-300 rounded-xl bg-white">
                <p className="text-red-600 font-medium">
                  No dealers found for your search
                </p>
                <p className="text-sm text-gray-500 mt-1">
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
