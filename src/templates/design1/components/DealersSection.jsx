"use client";

import { useEffect, useState, useRef } from "react";

import { useDealers } from "@/context/propertydealercontext/DealerContext";

import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import QueryForm from "./QueryForm";
import Pagination from "./Pagination";

export default function DealersSection({ domain }) {

  const { dealers, loading, page, setPage, totalPages, setDomain } = useDealers();

  const [filtered, setFiltered] = useState([]);

  const listTopRef = useRef(null);
  const isMounted = useRef(false);

  // DOMAIN SET LOGIC (AS IT IS)
 useEffect(() => {
    if (domain && domain === "localhost") {
      setDomain("propertydealeringurgaon.com");
    } else {
      setDomain(domain);
    }
  }, [domain, setDomain]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    setFiltered(dealers);
  }, [dealers]);

  // =============== 🔥 FINAL SEARCH LOGIC ===============

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

    // 🔥 Matched on TOP, others below
    let finalList = [...matched, ...unmatched];

    // 🔥 Guarantee minimum 100 cards
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

  // =============== 🔥 SCROLL FIXED LOGIC ===============

  const scrollToList = () => {
    if (!isMounted.current) return;

    requestAnimationFrame(() => {
      const element = listTopRef.current;
      if (!element) return;

      const yOffset = -100;   // Offset for sticky search bar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  };

  // ======================================================

  return (
    <section className="bg-[#f8fafc] py-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-[#0b1f33]">
            Top Property Dealers
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Verified agents & trusted property consultants
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">

            <div className="sticky top-[72px] z-30 pb-4">
              <DealerSearchBar onSearch={handleSearch} />
            </div>

            <div className="h-4" />

            {/* 🔥 Scroll Target with Height Fix */}
            <div ref={listTopRef} className="h-2" />

            {loading ? (
              <div className="py-16 flex flex-col items-center gap-4">

                <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-600 rounded-full animate-spin"></div>

                <p className="text-blue-600 font-medium">
                  Loading Dealers...
                </p>

              </div>

            ) : filtered.length === 0 ? (

              <div className="py-16 text-center text-gray-500">
                No dealers found for your search
              </div>

            ) : (

              <div className="space-y-4">
                {filtered.map((dealer) => (
                  <DealerCard key={dealer._id} dealer={dealer} />
                ))}
              </div>

            )}

            {!loading && totalPages > 1 && (
              <Pagination
                page={page}
                totalPages={totalPages}
                setPage={(p) => {
                  setPage(p);
                  scrollToList();
                }}
              />
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
