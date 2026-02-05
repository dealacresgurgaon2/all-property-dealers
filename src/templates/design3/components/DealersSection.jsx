"use client";

import { useEffect, useState, useRef } from "react";
import StickyBox from "react-sticky-box";

import { useDealers } from "@/context/propertydealercontext/DealerContext";

import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import Pagination from "./Pagination";
import QueryForm from "./QueryForm";

export default function DealersSection({domain}) {

  // backend-paginated data context se
  const { dealers, loading, page, setPage, totalPages,setDomain } = useDealers();
  useEffect(()=>{
    if(domain && (domain== "propertydeler-gold-frontend-lp3d.vercel.app" || domain=="localhost"))
      setDomain("propertydealerinhisar.com")
    
  }),[domain]

  const [filtered, setFiltered] = useState([]);

  const listTopRef = useRef(null);

  // 🔁 sync context data
  useEffect(() => {
    setFiltered(dealers);
  }, [dealers]);

  // 🔍 Search Logic
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
      <div className="py-20 text-center text-[#422c18]">
        Loading…
      </div>
    );
  }

  return (
    <section className="bg-[#f2e8e1] py-8">
      <div className="max-w-7xl mx-auto px-4">

        <h2
          className="
            text-3xl
            font-bold
            text-[#422c18]
            mb-8
          "
        >
          Top Property Dealers
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-4">

            {/* 🔍 Sticky Search */}
            <StickyBox offsetTop={65}>
              <DealerSearchBar onSearch={handleSearch} />
            </StickyBox>

            <div ref={listTopRef} className="scroll-mt-[250px]" />

            {/* DEALER CARDS */}
            {filtered.length === 0 ? (
              <div className="py-16 text-center text-[#7a5c42]">
                No dealers found for your search
              </div>
            ) : (
              filtered.map((dealer) => (
                <DealerCard key={dealer._id} dealer={dealer} />
              ))
            )}

            {/* PAGINATION (Backend Driven) */}
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

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="sticky top-[65px]">
              <QueryForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
