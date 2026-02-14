"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCity } from "@/context/design7api/CityContext";

import DealerCard from "@/templates/design7/components/DealerCard";
import QueryForm from "@/templates/design7/components/QueryForm";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
export default function DealersPage() {
  const params = useParams();
  const urlCity = params?.city;

  return <CityDealers key={urlCity} urlCity={urlCity} />;
}

function CityDealers({ urlCity }) {

  const { setCity } = useCity();

  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===== MAIN API CALL =====
  useEffect(() => {
    if (!urlCity) return;

    const fetchDealers = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_BASE}/api/get/city/${urlCity}`
        );

        const data = await res.json();

        if (data.success) {
          setDealers(data.data);
        } else {
          setDealers([]);
        }

        setCity(urlCity);

        setLoading(false);

      } catch (err) {
        console.log("City dealers error:", err);
        setLoading(false);
      }
    };

    fetchDealers();

  }, [urlCity, setCity]);
  // =========================

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="px-6 py-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-medium">
          Loading dealers for {urlCity}...
        </div>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-10 text-center">

          <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-5 py-2 rounded-full mb-4 border border-indigo-200 capitalize">
            {urlCity} City
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-3 capitalize">
            Property Dealers in {urlCity}
          </h2>

          <p className="text-gray-500">
            Showing all available dealers for your city
          </p>

        </div>

        {dealers.length === 0 && (
          <div className="text-center text-gray-600">
            No dealers found in {urlCity}
          </div>
        )}

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE – DEALER CARDS */}
          <div className="lg:col-span-2 space-y-5">

            {dealers.map((dealer) => (
              <DealerCard key={dealer._id} dealer={dealer} />
            ))}

          </div>

          {/* RIGHT SIDE – STICKY QUERY FORM */}
          <div className="w-full">

            <div className="sticky top-[80px]">
              <QueryForm />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
