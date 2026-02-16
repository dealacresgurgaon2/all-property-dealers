"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useDealers } from "@/context/propertydealercontext/DealerContext";
import DealerCard from "@/templates/design3/components/DealerCard";
import Pagination from "@/templates/design3/components/Pagination";
import QueryForm from "@/templates/design3/components/QueryForm";
import { useState, useEffect } from "react";

export default function LocationDealersPage() {

  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  const { dealers, loading, applyLocationFilter } = useDealers();

  const [page, setPage] = useState(1);

  // 🔥 APPLY LOCATION FILTER (Context Handles API)
  useEffect(() => {
    if (location) {
      applyLocationFilter(location);
    }
  }, [location, applyLocationFilter]);

  // FORMAT LOCATION FOR HEADING
  const formattedLocation = location
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (c) => c.toUpperCase());

  const allDealers = Array.isArray(dealers) ? dealers : [];

  // PAGINATION
  const ITEMS_PER_PAGE = 30;
  const totalPages = Math.ceil(allDealers.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const visibleDealers = allDealers.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#5E23DC]">
            Dealers in {formattedLocation}
          </h1>

          <p className="text-sm text-gray-600 mt-2">
            Showing trusted property dealers from this location
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="md:col-span-2">

            {loading ? (

              <div className="flex items-center justify-center py-24 bg-[#5E23DC]/5 rounded-xl border border-[#5E23DC]/20">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-[#5E23DC]/30 border-t-[#5E23DC] rounded-full animate-spin"></div>
                  <h2 className="text-base text-[#5E23DC] font-semibold">
                    Loading Dealers...
                  </h2>
                  <p className="text-sm text-gray-600">
                    Please wait while we fetch the data
                  </p>
                </div>
              </div>

            ) : allDealers.length === 0 ? (

              <div className="text-center text-red-600 py-14 font-semibold">
                No Dealers Found in {formattedLocation}
              </div>

            ) : (

              <>
                <div className="grid grid-cols-1 gap-6">
                  {visibleDealers.map((dealer) => (
                    <DealerCard
                      key={dealer._id}
                      dealer={dealer}
                    />
                  ))}
                </div>

                <div className="mt-10 flex justify-center">
                  <Pagination
                    page={page}
                    setPage={handlePageChange}
                    totalPages={totalPages}
                  />
                </div>
              </>
            )}

          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              <QueryForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
