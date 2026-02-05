"use client";

import { useEffect, useState, useRef } from "react";

import { useDealers } from "@/context/propertydealercontext/DealerContext";

// ---- PATHS FIXED HERE ----
import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import QueryForm from "./QueryForm";
import Pagination from "./Pagination";
// --------------------------

export default function DealersSection({domain}) {
 
  

  const { dealers, loading, page, setPage, totalPages,setDomain } = useDealers();

  useEffect(()=>{
    if(domain && (domain== "propertydeler-gold-frontend.vercel.app"|| domain=="localhost"))
      setDomain("propertydealeringurgaon.com")
    
  }),[domain]

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
      <div className="py-24 text-center text-[#1e40af] font-medium">
        Loading property dealers…
      </div>
    );
  }

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

            <div ref={listTopRef} className="scroll-mt-[140px]" />

            {filtered.length === 0 ? (
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
