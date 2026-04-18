"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useDealers } from "@/context/propertydealercontext/DealerContext";
import DealerCard from "@/templates/design4/components/DealerCard";
import Pagination from "@/templates/design4/components/Pagination";
import QueryForm from "@/templates/design4/components/QueryForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function LocationDealersPage() {



  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
const [error, setError] = useState(null);
const pathname = usePathname();

const slug = pathname.split("/").pop(); // sector-4-hisar

const location = slug
  ?.replace(/-/g, " ")
  ?.replace(/\b\w/g, (c) => c.toUpperCase());
  const ITEMS_PER_PAGE = 100;

  // =====================================================
  // ✅ API CALL
  // =====================================================
  useEffect(() => {
  if (typeof window === "undefined") return;

  const fetchDealers = async () => {
    try {
      setLoading(true);
      setError(null);

      const hostname = window.location.hostname;

      const domain =
        hostname === "localhost"
          ? "www.propertydealerinchandigarh.com"
          : hostname;

      const API_BASE = process.env.NEXT_PUBLIC_API_URL;

      // 🔥 CLEAN LOCATION
      const cleanLocation = location?.toLowerCase().trim();

      // 🔥 PARAMS BUILD
      const params = new URLSearchParams({
        page: page.toString(),
        limit: ITEMS_PER_PAGE.toString(),
      });

      if (cleanLocation) {
        params.append("search", cleanLocation); // 🔥 IMPORTANT
      }

      const url = `${API_BASE}/api/get/getDealers/${domain}?${params.toString()}`;

      console.log("API URL:", url);

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Failed to fetch dealers");
      }

      const data = await res.json();

      // ✅ DATA SET
      setDealers(data?.data || []);

      // 🔥 IMPORTANT FIX
      setTotalPages(data?.pagination?.totalPages ?? 1);

    } catch (err) {
      console.error("API ERROR:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  fetchDealers();

}, [page, location]);

  // =====================================================
  // FORMAT LOCATION
  // =====================================================
  const formattedLocation = location;

  // =====================================================
  // PAGE CHANGE
  // =====================================================
  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec] py-12">

      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold text-[#8A244B]">
            {formattedLocation}
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Showing trusted property dealers from this location
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-[#D02752] to-[#8A244B] mt-3 rounded-full"></div>
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

            ) : dealers.length === 0 ? (

              <div className="text-center text-[#D02752] py-14 font-semibold">
                No Dealers Found in {formattedLocation}
              </div>

            ) : (

              <>
                {/* CARDS */}
                <div className="grid grid-cols-1 gap-6">
                  {dealers.map((dealer, index) => (
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