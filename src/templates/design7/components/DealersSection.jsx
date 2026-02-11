"use client";

import { useEffect, useState, useRef } from "react";

import DealerCard from "./DealerCard";
import DealerSearchBar from "./DealerSearchBar";
import QueryForm from "./QueryForm";
import Pagination from "./Pagination";
import CityDropdown from "./CityDropdown";
import CityButtonsFilter from "./CityButtonsFilter";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
export default function DealersSection() {

  const [dealers, setDealers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [selectedCity, setSelectedCity] = useState("");

  const listTopRef = useRef(null);

  // ======== MAIN API CALL ========
  useEffect(() => {

    const fetchDealers = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_BASE}/api/get/state/Haryana?page=${page}&limit=10`
        );

        const data = await res.json();

        if (data.success) {
          setDealers(data.data);
          setFiltered(data.data);
          setTotalPages(data.totalPages || 1);
        }

        setLoading(false);

      } catch (err) {
        console.log("Error fetching dealers:", err);
        setLoading(false);
      }
    };

    fetchDealers();

  }, [page]);
  // ==============================


  useEffect(() => {
    applyFilters();
  }, [dealers, selectedCity]);


  // ============ 🔥 UPDATED FILTER LOGIC ============

  const applyFilters = () => {

    let result = [...dealers];

    if (selectedCity) {
      result = result.filter(
        (d) => d.city?.toLowerCase() === selectedCity.toLowerCase()
      );
    }

    // 🔥 Guarantee minimum 100 cards
    if (result.length < 100 && dealers.length > result.length) {

      const extraNeeded = 100 - result.length;

      const extra = dealers
        .filter(d => !result.includes(d))
        .slice(0, extraNeeded);

      result = [...result, ...extra];
    }

    setFiltered(result);
  };

  // ===============================================


  const handleCityFilter = (city) => {
    setSelectedCity(city);
    setPage(1);
    scrollToList();
  };


  // ============ 🔥 UPDATED SEARCH LOGIC ============

  const handleSearch = (query) => {

    const q = query.toLowerCase().trim();

    if (!q) {
      applyFilters();
      setPage(1);
      scrollToList();
      return;
    }

    const words = q.split(/\s+/);

    // MATCHED DEALERS
    const matched = dealers.filter((d) => {
      const text = `
        ${d.name || ""}
        ${d.city || ""}
        ${d.address || ""}
      `.toLowerCase();

      return words.every((w) => text.includes(w));
    });

    // UNMATCHED DEALERS
    const unmatched = dealers.filter((d) => {
      const text = `
        ${d.name || ""}
        ${d.city || ""}
        ${d.address || ""}
      `.toLowerCase();

      return !words.every((w) => text.includes(w));
    });

    // City filter ke sath combine
    let finalResult = selectedCity
      ? matched.filter(
          (d) => d.city?.toLowerCase() === selectedCity.toLowerCase()
        )
      : matched;

    // 🔥 Matched on TOP
    finalResult = [...finalResult, ...unmatched];

    // 🔥 Guarantee MINIMUM 100 CARDS
    if (finalResult.length < 100 && dealers.length > finalResult.length) {

      const extraNeeded = 100 - finalResult.length;

      const extra = dealers
        .filter(d => !finalResult.includes(d))
        .slice(0, extraNeeded);

      finalResult = [...finalResult, ...extra];
    }

    setFiltered(finalResult);

    setPage(1);
    scrollToList();
  };

  // ===============================================


  const scrollToList = () => {
    requestAnimationFrame(() => {
      const element = listTopRef.current;
      if (!element) return;

      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  };

  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Haryana Property Dealers
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Verified agents & trusted property consultants
          </p>

          <div className="w-16 h-1 bg-indigo-600 mt-3 rounded-full"></div>
        </div>

        <div className="mb-10">
          <CityButtonsFilter onCitySelect={handleCityFilter}/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">

            <div className="sticky top-[72px] z-30 pb-4">
              <DealerSearchBar onSearch={handleSearch} />
            </div>

            <div className="h-4" />

            <div ref={listTopRef} className="h-2" />

            {loading ? (
              <div className="py-20 text-center border border-dashed border-indigo-300 rounded-xl bg-white">
                <div className="inline-block px-6 py-3 rounded-lg bg-indigo-100 text-indigo-600 font-medium">
                  Loading property dealers…
                </div>
              </div>

            ) : filtered.length === 0 ? (

              <div className="py-20 text-center border border-dashed border-indigo-300 rounded-xl bg-white">
                <p className="text-indigo-600 font-medium">
                  No dealers found
                </p>
              </div>

            ) : (

              <div className="space-y-5">
                {filtered.map((dealer) => (
                  <DealerCard key={dealer._id} dealer={dealer} />
                ))}
              </div>
            )}

            {!loading && totalPages > 1 && (
              <div className="mt-6">
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  setPage={(p) => {
                    setPage(p);
                    scrollToList();
                  }}
                />
              </div>
            )}

          </div>

          <div className="space-y-6">
            <div className="sticky top-[72px]">
              <QueryForm />
              <CityDropdown onCitySelect={handleCityFilter} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
