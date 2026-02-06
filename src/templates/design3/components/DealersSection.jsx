"use client";

import { useEffect, useState, useRef } from "react";
import StickyBox from "react-sticky-box";

import { useDealers } from "@/context/propertydealercontext/DealerContext";

import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import Pagination from "./Pagination";
import QueryForm from "./QueryForm";

export default function DealersSection({ domain }) {

  const { dealers, loading, page, setPage, totalPages, setDomain } = useDealers();

  useEffect(() => {
    if (
      domain &&
      (domain == "propertydeler-gold-frontend-lp3d.vercel.app" ||
        domain == "localhost")
    )
      setDomain("propertydealerinhisar.com");
  }), [domain];

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

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-[#5E23DC] mb-8">
          Top Property Dealers
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-4">

            {/* 🔍 Sticky Search */}
            <StickyBox offsetTop={65}>
              <DealerSearchBar onSearch={handleSearch} />
            </StickyBox>

            <div ref={listTopRef} className="scroll-mt-[250px]" />

            {/* 🔥 LOADING ONLY IN DEALERS AREA */}
            {loading ? (

              <div className="flex items-center justify-center py-24 bg-[#5E23DC]/5 rounded-xl border border-[#5E23DC]/20">
                <div className="flex flex-col items-center gap-4">

                  <div className="w-12 h-12 border-4 border-[#5E23DC]/30 border-t-[#5E23DC] rounded-full animate-spin"></div>

                  <h2 className="text-base text-[#5E23DC] font-semibold">
                    Loading Dealers...
                  </h2>

                  <p className="text-sm text-gray-600">
                    Please wait while we fetch the content
                  </p>

                </div>
              </div>

            ) : filtered.length === 0 ? (

              <div className="py-16 text-center text-gray-600">
                No dealers found for your search
              </div>

            ) : (

              <>
                {/* DEALER CARDS */}
                {filtered.map((dealer) => (
                  <DealerCard key={dealer._id} dealer={dealer} />
                ))}

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
              </>
            )}

          </div>

          {/* RIGHT SECTION - ALWAYS VISIBLE */}
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
