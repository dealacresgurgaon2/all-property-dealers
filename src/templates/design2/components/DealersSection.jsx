"use client";

import { useEffect, useState, useRef } from "react";

import { useDealers } from "@/context/propertydealercontext/DealerContext";

import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import Pagination from "./Pagination";

export default function DealersSection() {

  // context se paginated data le rahe hain
  const { dealers, loading, page, setPage, totalPages } = useDealers();

  const [filtered, setFiltered] = useState([]);

  const listTopRef = useRef(null);

  // jab bhi context se dealers update ho
  useEffect(() => {
    setFiltered(dealers);
  }, [dealers]);

  // 🔍 SEARCH LOGIC
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

  // smooth scroll to list
  const scrollToList = () => {
    requestAnimationFrame(() => {
      listTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  // loading state
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

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-black mb-8">
          Top <span className="text-[#d4af37]">Property Dealers</span>
        </h2>

        {/* 🔍 STICKY SEARCH BAR */}
        <div className="sticky top-[80px] z-40 pb-4">
          <DealerSearchBar onSearch={handleSearch} />
        </div>

        {/* SCROLL TARGET */}
        <div ref={listTopRef} className="scroll-mt-[260px]" />

        {/* DEALER CARDS – 2 PER ROW */}
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-gray-500">
            No dealers found for your search
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {filtered.map((dealer) => (
              <DealerCard key={dealer._id} dealer={dealer} />
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
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
    </section>
  );
}
