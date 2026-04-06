"use client";

import { useEffect, useRef } from "react";
import StickyBox from "react-sticky-box";

import { useDealers } from "@/context/propertydealercontext/DealerContext";

import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import Pagination from "./Pagination";
import QueryForm from "./QueryForm";

export default function DealersSection({ domain }) {

  const { dealers, loading, page, setPage, totalPages, setDomain, setSearch, search } = useDealers();

  const listTopRef = useRef(null);

  // ✅ DOMAIN SET FIXED
  useEffect(() => {
    if (
      domain === "propertydeler-gold-frontend-lp3d.vercel.app" ||
      domain === "all-property-dealers.vercel.app" ||
      domain === "localhost"
    ) {
      setDomain("www.propertydealerinhisar.com");
    } else {
      setDomain(domain);
    }
  }, [domain, setDomain]);

  // ✅ SCROLL FUNCTION
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

  // ✅ SEARCH → API CALL
  const handleSearch = (query) => {
    const cleanQuery = query.trim(); 
    setSearch(cleanQuery); // 🔥 backend me jayega
    setPage(1);
    scrollToList();
  };

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-[#5E23DC] mb-8">
          Real Estate Broker and Property consultants in Hisar
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 space-y-4">

            {/* SEARCH BAR */}
            <div className="sticky top-[65px] z-30 pb-3">
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

            ) : dealers.length === 0 ? (

              <div className="py-16 text-center text-gray-600">
                No dealers found
              </div>

            ) : (

              <>
               {[...dealers]
  .sort((a, b) => {
    if (!search || search.trim() === "") {
      return (Number(b.subscription) || 0) - (Number(a.subscription) || 0);
    }
    return 0;
  })
  .map((dealer) => (
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

          {/* RIGHT SIDE */}
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