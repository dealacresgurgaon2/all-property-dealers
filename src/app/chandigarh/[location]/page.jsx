"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useDealers } from "@/context/propertydealercontext/DealerContext";
import DealerCard from "@/templates/design4/components/DealerCard";
import Pagination from "@/templates/design4/components/Pagination";
import QueryForm from "@/templates/design4/components/QueryForm";

import { useState, useEffect } from "react";

export default function LocationDealersPage() {

  const params = useParams();
  const searchParams = useSearchParams();

  const location = searchParams.get("location");

  // ✅ slug
  const locationSlug = params?.location;

  // ✅ slug → readable
  const finalLocation = locationSlug
    ?.replace(/-/g, " ")
    ?.toLowerCase();

  const dealerContext = useDealers();

  if (!dealerContext) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Context Not Loaded
      </div>
    );
  }

  const { dealers, loading, setDomain2 } = dealerContext;

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentDomain = window.location.hostname.replace("www.", "");

      if (
        currentDomain === "propertydeler-gold-frontend-xkw9.vercel.app" ||
        currentDomain === "localhost"
      ) {
        setDomain2("propertydealerinchandigarh.com");
      } else {
        setDomain2(currentDomain);
      }
    }
  }, [setDomain2]);

  // ✅ normalize function (MOST IMPORTANT)
  const normalize = (str = "") =>
    str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const searchValue = normalize(location || finalLocation || "");

  // ✅ FINAL FILTER + RANKING
  const allDealers = Array.isArray(dealers)
  ? (() => {
      const scored = dealers.map((d) => {
        let score = 0;

        const address = normalize(d.address || "");
        const city = normalize(d.city || "");
        const name = normalize(d.name || "");

        if (address.includes(searchValue)) score += 5;
        if (city.includes(searchValue)) score += 3;
        if (name.includes(searchValue)) score += 2;

        return { ...d, score };
      });

      // ✅ matched (top)
      const matched = scored
        .filter((d) => d.score > 0)
        .sort((a, b) => b.score - a.score);

      // ✅ unmatched (random)
      const unmatched = scored.filter((d) => d.score === 0);

      const randomUnmatched = unmatched
        .sort(() => 0.5 - Math.random())
        .slice(0, 30);

      // ✅ FINAL COMBINE
      return [...matched, ...randomUnmatched];
    })()
  : [];

  // ✅ pagination
  const ITEMS_PER_PAGE = 20;
  const totalPages = Math.ceil(allDealers.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const visibleDealers = allDealers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ heading
  const formattedLocation = locationSlug
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec] py-12">

      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#8A244B]">
            Dealers in {formattedLocation}
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Showing trusted property dealers from this location
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-[#D02752] to-[#8A244B] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="md:col-span-2">

            {loading ? (

              <div className="flex items-center justify-center py-24 bg-white rounded-xl border border-[#f3c6d1] shadow-sm">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-[#D02752]/30 border-t-[#D02752] rounded-full animate-spin"></div>

                  <h2 className="text-base text-[#D02752] font-semibold">
                    Loading Dealers...
                  </h2>

                  <p className="text-sm text-gray-500">
                    Please wait while we fetch the data
                  </p>
                </div>
              </div>

            ) : allDealers.length === 0 ? (

              <div className="text-center text-[#D02752] py-14 font-semibold">
                No Dealers Found in {formattedLocation}
              </div>

            ) : (

              <>
                {/* CARDS */}
                <div className="grid grid-cols-1 gap-6">
                  {visibleDealers.map((dealer, index) => (
                    <div key={`${dealer._id}-${index}`}>
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

          {/* RIGHT */}
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