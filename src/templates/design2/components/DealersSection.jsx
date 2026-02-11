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
    if (
      domain &&
      (domain === "propertydeler-gold-frontend-9wvp.vercel.app" ||
        domain === "localhost")
    ) {
      setDomain("propertydealerinfaridabad.com");
    }
  }, [domain]);

  const [filtered, setFiltered] = useState([]);

  const listTopRef = useRef(null);

  useEffect(() => {
    setFiltered(dealers);
  }, [dealers]);

  // =========== 🔥 FINAL UPDATED SEARCH LOGIC ===========

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

  // ======================================================

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
      <div className="py-24 text-center text-black/70 text-lg">
        Loading dealers…
      </div>
    );
  }

  return (
    <section className="bg-[#fafafa] py-10">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-black mb-8">
          Top <span className="text-[#d4af37]">Property Dealers</span>
        </h2>

        <div ref={listTopRef} className="scroll-mt-[260px]" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">

            <div className="sticky top-[80px] z-40 pb-4">
              <DealerSearchBar onSearch={handleSearch} />
            </div>

            {filtered.length === 0 ? (
              <div className="py-16 text-center text-gray-500">
                No dealers found for your search
              </div>
            ) : (
              <div className="space-y-6">
                {filtered.map((dealer) => (
                  <DealerCard key={dealer._id} dealer={dealer} />
                ))}
              </div>
            )}

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

          <div className="hidden lg:block">
            <div className="sticky top-[120px]">
              <QueryForm />
            </div>
          </div>

        </div>

        <div className="lg:hidden mt-10">
          <QueryForm />
        </div>

      </div>
    </section>
  );
}
