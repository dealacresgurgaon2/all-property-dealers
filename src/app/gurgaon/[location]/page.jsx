"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useDealers } from "@/context/propertydealercontext/DealerContext";
import DealerCard from "@/templates/design1/components/DealerCard";
import Pagination from "@/templates/design1/components/Pagination";
import QueryForm from "@/templates/design1/components/QueryForm";

import { useState, useEffect } from "react";

export default function LocationDealersPage() {

  const params = useParams();
  const searchParams = useSearchParams();

  // 🔥 REAL LOCATION FROM QUERY PARAM
  const location = searchParams.get("location");

  const dealerContext = useDealers();

  if (!dealerContext) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Context Not Loaded
      </div>
    );
  }

  const {
    dealers,
    loading,
    setDomain2,
   applyLocationFilter
  } = dealerContext;

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentDomain = window.location.hostname.replace("www.", "");

      if (
        currentDomain === "propertydeler-gold-frontend.vercel.app" ||
        currentDomain === "localhost"
      ) {
        setDomain2("propertydealeringurgaon.com");
      } else {
        setDomain2(currentDomain);
      }
    }
  }, [setDomain2]);

  // 🔥 MOST IMPORTANT – LOCATION FILTER CALL
  useEffect(() => {
    if (location) {
      applyLocationFilter(location);
    }
  }, [location]);

  const formattedLocation = location
    ?.replace(/,/g, "")
    ?.replace(/\b\w/g, (c) => c.toUpperCase());

  const allDealers = Array.isArray(dealers) ? dealers : [];

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

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#1e40af]">
            Dealers in {formattedLocation}
          </h1>

          <p className="text-sm text-gray-600 mt-2">
            Showing trusted property dealers in this location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="md:col-span-2">

            {loading ? (

              <div className="flex items-center justify-center py-24 bg-[#1e40af]/5 rounded-xl border border-[#1e40af]/20">
                <div className="flex flex-col items-center gap-4">

                  <div className="w-12 h-12 border-4 border-[#1e40af]/30 border-t-[#1e40af] rounded-full animate-spin"></div>

                  <h2 className="text-base text-[#1e40af] font-semibold">
                    Loading Dealers...
                  </h2>

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
                    <div key={dealer._id}>
                      <DealerCard dealer={dealer} />
                    </div>
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
