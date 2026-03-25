"use client";

import { useEffect, useState, useRef } from "react";
import { useDealers } from "@/context/propertydealercontext/DealerContext";

import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import QueryForm from "./QueryForm";
import Pagination from "./Pagination";

export default function DealersSection({ domain }) {
  const { dealers, loading, page, setPage, totalPages, setDomain } =
    useDealers();

  useEffect(() => {
    if (domain && domain === "localhost") {
      setDomain("propertydealerinchandigarh.com");
    } else {
      setDomain(domain);
    }
  }, [domain, setDomain]);

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
        .filter((d) => !finalList.includes(d))
        .slice(0, extraNeeded);

      finalList = [...finalList, ...extra];
    }

    setFiltered(finalList);
    setPage(1);
    scrollToList();
  };

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

  return (
    <section className="bg-[#fff0f4] py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#8A244B]">
            Real Estate Broker and Property consultants in Chandigarh
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#D02752] to-[#8A244B] mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            <div className="sticky top-[72px] z-30 pb-4">
              <DealerSearchBar onSearch={handleSearch} />
            </div>

            <div className="h-4" />
            <div ref={listTopRef} className="h-2" />

            {/* DEALER CARDS */}
            <div className="space-y-5 min-h-[300px]">

              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-4 border-[#D02752] border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm text-gray-500 mt-4">
                    Loading property dealers...
                  </p>
                </div>

              ) : filtered.length === 0 ? (

                <div className="py-20 text-center border border-dashed border-[#f3c6d1] rounded-xl bg-white">
                  <p className="text-[#D02752] font-medium">
                    No dealers found for your search
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Try different keywords or city name
                  </p>
                </div>

              ) : (

                filtered.map((dealer) => (
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