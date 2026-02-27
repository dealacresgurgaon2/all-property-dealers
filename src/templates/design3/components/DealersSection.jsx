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

  const [filtered, setFiltered] = useState([]);
  const listTopRef = useRef(null);

  // ✅ DOMAIN SET
  useEffect(() => {
    if (
      domain &&
      (domain === "propertydeler-gold-frontend-lp3d.vercel.app" || "all-property-dealers.vercel.app" ||
        domain === "localhost")
    ) {
      setDomain("propertydealerinhisar.com");
    } else {
      setDomain(domain);
    }
  }, [domain, setDomain]);

  // ✅ SORT DEALERS WHEN DATA CHANGES (Premium on top)
  useEffect(() => {
    const sorted = [...dealers].sort(
      (a, b) => Number(b.subscription) - Number(a.subscription)
    );
    setFiltered(sorted);
  }, [dealers]);

  // ✅ SEARCH FUNCTION (Premium always stays on top)
  const handleSearch = (query) => {

    const q = query.toLowerCase().trim();

    if (!q) {
      const sorted = [...dealers].sort(
        (a, b) => Number(b.subscription) - Number(a.subscription)
      );
      setFiltered(sorted);
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

    const sortedMatched = [...matched].sort(
      (a, b) => Number(b.subscription) - Number(a.subscription)
    );

    setFiltered(sortedMatched);
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
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-[#5E23DC] mb-8">
          Real Estate Broker and Property consultants in Hisar
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 space-y-4">

  <div className="sticky top-[65px] z-30  pb-3">
  <DealerSearchBar onSearch={handleSearch} />
</div>

            <div ref={listTopRef} className="h-2" />

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

          {/* RIGHT SIDE FORM */}
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
