"use client";

import { useSearchParams } from "next/navigation";
import DealerCard from "@/templates/design3/components/DealerCard";
import Pagination from "@/templates/design3/components/Pagination";
import QueryForm from "@/templates/design3/components/QueryForm";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/templates/design1/components/Breadcrumb";
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
          ? "www.propertydealerinhisar.com"
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
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-5">
       <div className="py-5">
        <Breadcrumb/>
       </div>
        {/* HEADER */}
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold text-[#5E23DC]">
            {formattedLocation}
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Showing trusted property dealers from this location
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="md:col-span-2">

            {loading ? (

  <div className="flex items-center justify-center py-24">
    <div className="flex flex-col items-center gap-4">

      {/* 🔄 Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-[#5E23DC] rounded-full animate-spin"></div>

      <p className="text-[#5E23DC] font-semibold">
        Loading Dealers...
      </p>

    </div>
  </div>

) : error ? (

  <div className="text-center py-16">
    <p className="text-red-600 font-semibold">{error}</p>

    <button
      onClick={() => window.location.reload()}
      className="mt-4 px-6 py-2 bg-[#5E23DC] text-white rounded-lg"
    >
      Retry
    </button>
  </div>

) : dealers.length === 0 ? (

  <div className="text-center text-gray-600 py-14 font-semibold">
    No Dealers Found in {formattedLocation}
  </div>

) : (

  <>
    <div className="grid grid-cols-1 gap-6">
      {dealers.map((dealer) => (
        <DealerCard key={dealer._id} dealer={dealer} />
      ))}
    </div>

    {totalPages > 1 && (
      <div className="mt-10 flex justify-center">
        <Pagination
          page={page}
          setPage={handlePageChange}
          totalPages={totalPages}
        />
      </div>
    )}
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