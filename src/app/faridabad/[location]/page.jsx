"use client";

import { useParams, useSearchParams } from "next/navigation";
import DealerCard from "@/templates/design2/components/DealerCard";
import Pagination from "@/templates/design2/components/Pagination";
import QueryForm from "@/templates/design2/components/QueryForm";
import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function LocationDealersPage() {

  const params = useParams();
  const searchParams = useSearchParams();

  const location = searchParams.get("location");

  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const ITEMS_PER_PAGE = 70;

  // ✅ DOMAIN DETECT
  const getDomain = () => {
    if (typeof window === "undefined") return "";

    const host = window.location.hostname

    if (host === "localhost" || host.includes("vercel")) {
      return "www.propertydealerinfaridabad.com";
    }

    return host;
  };

  // 🔥 API CALL
  const fetchDealers = async () => {
    try {
      setLoading(true);
      setError("");

      const domain = getDomain();

      const params = new URLSearchParams({
        page: page.toString(),
        limit: ITEMS_PER_PAGE.toString(),
      });

      if (location) {
        params.append("search", location);
      }

      const url = `${API_BASE}/api/get/getDealers/${domain}?${params.toString()}`;

   

      const res = await axios.get(url);

      setDealers(res?.data?.data || []);
      setTotalPages(res?.data?.pagination?.totalPages ?? 1);

    } catch (err) {
     ;

      setError(
        err?.response?.status === 403
          ? "Access denied. Please try again later."
          : "Something went wrong. Please refresh the page."
      );

    } finally {
      setLoading(false);
    }
  };

  // 🔁 CALL
  useEffect(() => {
    fetchDealers();
  }, [page, location]);

  // 🔁 PAGE CHANGE
  const handlePageChange = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const locationSlug = params?.location;

  const formattedLocation = locationSlug
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen bg-white py-12">

      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-black">
            Dealers in {formattedLocation}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="md:col-span-2">

            {/* 🔄 LOADING */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-24">
                <div className="w-14 h-14 border-4 border-gray-300 border-t-[#d4af37] rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600 font-medium">
                  Loading Dealers...
                </p>
              </div>
            )}

            {/* ❌ ERROR */}
            {!loading && error && (
              <div className="text-center py-16 text-red-600 font-semibold">
                {error}
              </div>
            )}

            {/* ❌ NO DATA */}
            {!loading && !error && dealers.length === 0 && (
              <div className="text-center py-16 text-gray-500">
                No Dealers Found
              </div>
            )}

            {/* ✅ DATA */}
            {!loading && !error && dealers.length > 0 && (
              <>
                <div className="space-y-6">
                  {dealers.map((dealer) => (
                    <DealerCard key={dealer._id} dealer={dealer} />
                  ))}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="mt-10 flex justify-center">
                    <Pagination
                      page={page}
                      totalPages={totalPages}
                      setPage={handlePageChange}
                    />
                  </div>
                )}
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