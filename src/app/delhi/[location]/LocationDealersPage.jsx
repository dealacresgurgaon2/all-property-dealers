"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import DealerCard from "@/templates/design5/components/DealerCard";
import QueryForm from "@/templates/design5/components/QueryForm";
import Breadcrumb from "@/templates/design5/components/Breadcrumb";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function LocationDealersPage() {

  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  const pathname = usePathname();

  const slug = pathname.split("/").pop();

  const location = slug
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (c) => c.toUpperCase());

  const ITEMS_PER_PAGE = 100;

  // ✅ API CALL
  useEffect(() => {
    if (typeof window === "undefined") return;

    const fetchDealers = async () => {
      try {
        setLoading(true);
        setError(null);

        const hostname = window.location.hostname;

        const domain =
          hostname === "localhost"
            ? "www.propertydealerindelhi.com"
            : hostname;

        const cleanLocation = location?.toLowerCase().trim();

        const params = new URLSearchParams({
          page: page.toString(),
          limit: ITEMS_PER_PAGE.toString(),
        });

        if (cleanLocation) {
          params.append("search", cleanLocation);
        }

        const url = `${API_BASE}/api/get/getDealers/${domain}?${params.toString()}`;

        const res = await fetch(url);

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        setDealers(data?.data || []);
        setTotalPages(data?.pagination?.totalPages ?? 1);

      } catch (err) {
        console.error(err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchDealers();

  }, [page, location]);

  const formattedLocation = location;

  // ✅ LOADING
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="px-6 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 font-medium">
          Loading dealers for {formattedLocation}...
        </div>
      </div>
    );
  }

  // ✅ ERROR
  if (error) {
    return (
      <div className="text-center py-20 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <section className="bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-5">
            <Breadcrumb/>
          </div>
        {/* HEADER */}
        <div className="mb-10 ">
          {/* <span className="inline-block bg-red-50 text-red-700 text-sm font-semibold px-5 py-2 rounded-full mb-4 border border-red-200 capitalize">
            {formattedLocation}
          </span> */}

          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 capitalize text-black">
           {formattedLocation}
          </h1>

          <p className="text-gray-500">
            Showing all available dealers
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT */}
          <div className="flex-1 space-y-6">
            {dealers.length === 0 ? (
              <p className="text-center text-gray-500">
                No dealers found
              </p>
            ) : (
              dealers.map((dealer, index) => (
                <DealerCard key={dealer._id + index} dealer={dealer} />
              ))
            )}
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[350px]">
            <div className="sticky top-24">
              <QueryForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}