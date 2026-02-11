"use client";

import { useParams } from "next/navigation";
import { useDealers } from "@/context/propertydealercontext/DealerContext";
import DealerCard from "@/templates/design6/components/DealerCard";
import Pagination from "@/templates/design6/components/Pagination";
import QueryForm from "@/templates/design6/components/QueryForm";

import { useState, useEffect } from "react";

export default function LocationDealersPage() {

  const params = useParams();

  const dealerContext = useDealers();

  if (!dealerContext) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Context Not Loaded
      </div>
    );
  }

  const { dealers, loading, setDomain } = dealerContext;

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentDomain = window.location.hostname.replace("www.", "");

      if (
        currentDomain === "propertydeler-gold-frontend-xkw9.vercel.app" ||
        currentDomain === "localhost"
      ) {
        setDomain("propertydealerinnoida.com");
      } else {
        setDomain(currentDomain);
      }
    }
  }, [setDomain]);

  const locationSlug = params?.location;

  const formattedLocation = locationSlug
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (c) => c.toUpperCase());

  const allDealers = Array.isArray(dealers) ? dealers : [];

  const hisarDealers = allDealers.filter(
    (dealer) => dealer.city === "Noida"
  );

  const ITEMS_PER_PAGE = 20;

  const totalPages = Math.ceil(hisarDealers.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const visibleDealers = hisarDealers.slice(startIndex, endIndex);

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
          <h1 className="text-3xl font-bold text-green-700">
            Dealers in {formattedLocation}
          </h1>

          <p className="text-sm text-gray-600 mt-2">
            Showing trusted property dealers from Hisar region
          </p>
        </div>

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT SIDE - DEALER LIST */}
          <div className="md:col-span-2">

            {loading ? (

              // LOADER ONLY FOR DEALERS AREA
              <div className="flex items-center justify-center py-24 bg-green-700/5 rounded-xl border border-green-700/20">
                <div className="flex flex-col items-center gap-4">

                  <div className="w-12 h-12 border-4 border-green-700/30 border-t-green-700 rounded-full animate-spin"></div>

                  <h2 className="text-base text-green-700 font-semibold">
                    Loading Dealers...
                  </h2>

                  <p className="text-sm text-gray-600">
                    Please wait while we fetch the data
                  </p>

                </div>
              </div>

            ) : hisarDealers.length === 0 ? (

              <div className="text-center text-red-600 py-14 font-semibold">
                No Dealers Found in Hisar
              </div>

            ) : (

              <>
                {/* DEALER CARDS */}
                <div className="grid grid-cols-1 gap-6">
                  {visibleDealers.map((dealer) => (
                    <div
                      key={dealer._id}
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

          {/* RIGHT SIDE - QUERY FORM (ALWAYS VISIBLE) */}
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
