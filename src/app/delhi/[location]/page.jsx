"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import DealerCard from "@/templates/design5/components/DealerCard";
import QueryForm from "@/templates/design5/components/QueryForm";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function AreaDealersPage() {
  const params = useParams();
  const areaSlug = params?.location;

  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatAreaName = (slug) => {
    if (!slug) return "";
    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }; 

  const formattedArea = formatAreaName(areaSlug);

  useEffect(() => {
    if (!areaSlug) return;

    const fetchDealers = async () => {
      try {
        setLoading(true);

        const API_URL = `${API_BASE}/api/get/properties/${encodeURIComponent(areaSlug)}`;

        const res = await fetch(API_URL);
        const data = await res.json();

        if (data.success) {
          setDealers(data.data);
        } else {
          setDealers([]);
        }
      } catch (err) {
        console.log("Area dealers error:", err);
        setDealers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDealers();
  }, [areaSlug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="px-6 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 font-medium">
          Loading dealers for {areaSlug}...
        </div>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <span className="inline-block bg-red-50 text-red-700 text-sm font-semibold px-5 py-2 rounded-full mb-4 border border-red-200 capitalize">
            {formattedArea} City
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-600 via-red-600 to-red-600 text-transparent bg-clip-text mb-3 capitalize">
            Property Dealers in {formattedArea}
          </h2>

          <p className="text-gray-500">
            Showing all available dealers for your city
          </p>
        </div>

        {/* FLEX LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE */}
          <div className="flex-1 space-y-6">
            {dealers.map((dealer, index) => (
              <DealerCard key={dealer._id + index} dealer={dealer} />
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[350px] shrink-0">
            <div className="sticky top-24">
              <QueryForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
