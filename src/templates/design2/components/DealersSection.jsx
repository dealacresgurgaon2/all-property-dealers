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

  useEffect(() => {
    if (domain && domain === "localhost") {
      setDomain("propertydealerinfaridabad.com");
    } else {
      setDomain(domain);
    }
  }, [domain, setDomain]);

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

    const unmatched = dealers.filter((d) => {
      const text = `
        ${d.name || ""}
        ${d.city || ""}
        ${d.address || ""}
      `.toLowerCase();

      return !words.every((w) => text.includes(w));
    });

    let finalList = [...matched, ...unmatched];

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

  const scrollToList = () => {
    requestAnimationFrame(() => {
      listTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <section className="bg-[#fafafa] py-12">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-black mb-8">
          Top <span className="text-[#d4af37]">Property Broker in Faridabad</span>
        </h2>

        <div ref={listTopRef} className="scroll-mt-[260px]" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">

            <div className="sticky top-[80px] z-40 pb-4 ">
              <DealerSearchBar onSearch={handleSearch} />
            </div>

            {/* 🔥 PROPER SPINNER LOADING */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24">
                <div className="w-14 h-14 border-4 border-gray-300 border-t-[#d4af37] rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600 font-medium">
                  Loading Dealers...
                </p>
              </div>
            ) : filtered.length === 0 ? (
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
