"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useDealers } from "@/context/propertydealercontext/DealerContext";
import DealerCard from "@/templates/design3/components/DealerCard";
import Pagination from "@/templates/design3/components/Pagination";
import QueryForm from "@/templates/design3/components/QueryForm";

import { useState, useEffect } from "react";

export default function LocationDealersPage() {

  const params = useParams();
  const searchParams = useSearchParams();

  // REAL LOCATION FROM QUERY PARAM
  const location = searchParams.get("location");

  const dealerContext = useDealers();

  if (!dealerContext) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Context Not Loaded
      </div>
    );
  }

  const { dealers, loading, setDomain, fetchDealersByLocation } = dealerContext;

  const [page, setPage] = useState(1);

  // SET DOMAIN LOGIC
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentDomain = window.location.hostname.replace("www.", "");

      if (
        currentDomain === "propertydeler-gold-frontend-lp3d.vercel.app" ||
        currentDomain === "localhost"
      ) {
        setDomain("propertydealerinhisar.com");
      } else {
        setDomain(currentDomain);
      }
    }
  }, [setDomain]);

  // CALL LOCATION API
  useEffect(() => {
    if (location) {
      fetchDealersByLocation(location);
    }
  }, [location]);

  // FORMAT LOCATION NAME FOR HEADING
  const formattedLocation = location
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (c) => c.toUpperCase());

  // ALL DEALERS DIRECTLY FROM BACKEND (NO EXTRA FILTER)
  const allDealers = Array.isArray(dealers) ? dealers : [];

  // PAGINATION LOGIC
  const ITEMS_PER_PAGE = 30;

  const totalPages = Math.ceil(allDealers.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const visibleDealers = allDealers.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setPage(newPage);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
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

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT SIDE - DEALER LIST */}
          <div className="md:col-span-2">

            {loading ? (

              // LOADER
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
                {/* DEALER CARDS */}
                <div className="grid grid-cols-1 gap-6">
                  {visibleDealers.map((dealer, index) => (
                    <div
                      key={`${dealer._id}-${index}`}
                      className="transition-all duration-200"
                    >
                      <DealerCard dealer={dealer} />
                    </div>
                  ))}
                </div>

                {/* PAGINATION */}
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

          {/* RIGHT SIDE - QUERY FORM */}
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
