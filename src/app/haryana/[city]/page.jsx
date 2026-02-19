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
  const [allDealers, setAllDealers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [locations, setLocations] = useState([]);
  const [loadingLocations, setLoadingLocations] = useState(true);

  const [activeLocation, setActiveLocation] = useState(null);
  const [showAllLocations, setShowAllLocations] = useState(false);
const [isMobile, setIsMobile] = useState(false);

  // ================= Helpers =================

  const getCityForDealersAPI = (city) => {
    if (!city) return city;
    const lower = city.toLowerCase().trim();
    if (lower === "gurugram") return "gurgaon";
    return lower;
  };

  const getCityForSearchAPI = (city) => {
    if (!city) return city;
    const lower = city.toLowerCase().trim();
    if (lower === "gurgaon") return "gurugram";
    return lower;
  };

  const scrollToDealers = () => {
    const section = document.getElementById("dealers-section");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ================= Fetch Dealers =================

  useEffect(() => {
    if (!urlCity) return;

    const fetchDealers = async () => {
      try {
        setLoading(true);
        const mappedCity = getCityForDealersAPI(urlCity);

        const res = await fetch(`${API_BASE}/api/get/city/${mappedCity}`);
        const data = await res.json();

        const finalData = Array.isArray(data)
          ? data
          : Array.isArray(data.data)
          ? data.data
          : [];

        setDealers(finalData);
        setAllDealers(finalData);
        setCity(urlCity);
      } catch (err) {
        
        setDealers([]);
        setAllDealers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDealers();
  }, [urlCity, setCity]);

  // ================= Fetch Locations =================

  useEffect(() => {
    if (!urlCity) return;

    const fetchLocations = async () => {
      try {
        setLoadingLocations(true);

        const mappedCity = getCityForSearchAPI(urlCity);

        const res = await fetch(
          `https://deal-acres-backend.onrender.com/api/searchByCity/${mappedCity}`
        );

        const data = await res.json();

        const finalLocations = Array.isArray(data)
          ? data
          : Array.isArray(data.data)
          ? data.data
          : [];

        setLocations(finalLocations);
      } catch (error) {
        
        setLocations([]);
      } finally {
        setLoadingLocations(false);
      }
    };

    fetchLocations();
  }, [urlCity]);

  // ================= Location Filter =================

  const handleLocationClick = async (locationName) => {
    try {
      setActiveLocation(locationName);
      setLoading(true);

      const mappedCity = getCityForDealersAPI(urlCity);

      const res = await fetch(
        `${API_BASE}/api/get/haryana-location-filter?city=${mappedCity}&location=${encodeURIComponent(locationName)}`
      );

      const data = await res.json();

      const filteredData = Array.isArray(data)
        ? data
        : Array.isArray(data.data)
        ? data.data
        : [];

      if (filteredData.length === 0 && allDealers.length > 0) {
        const shuffled = [...allDealers].sort(() => 0.5 - Math.random());
        setDealers(shuffled.slice(0, 30));
      } else {
        setDealers(filteredData);
      }
    } catch (error) {
      console.log("Location filter error:", error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        scrollToDealers();
      }, 150);
    }
  };
  useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth < 640);
  };

  checkScreen();
  window.addEventListener("resize", checkScreen);

  return () => window.removeEventListener("resize", checkScreen);
}, []);


  // ================= Mobile Only Limit =================

 const visibleLocations =
  isMobile && !showAllLocations
    ? locations.slice(0, 20)
    : locations;



  return (
    <section className="bg-slate-50 min-h-screen py-12">
      <div id="dealers-section" className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 capitalize">
            Top Real Estate Broker in {urlCity}
          </h1>

          {activeLocation && (
            <p className="mt-4 text-indigo-600 font-semibold">
              Showing Real Estate Agents in {activeLocation}
            </p>
          )}
        </div>

        {/* DEALERS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-6">
            {loading ? (
              <div className="text-center py-20 text-indigo-600 font-semibold">
                Loading dealers...
              </div>
            ) : (
              dealers.map((dealer) => (
                <DealerCard key={dealer._id} dealer={dealer} />
              ))
            )}
          </div>

          <div>
            <div className="sticky top-[80px]">
              <QueryForm />
            </div>
          </div>
        </div>

        {/* LOCATION SECTION */}
        <div className="mt-20 border-t pt-10">
          <h2 className="text-xl font-semibold mb-8 text-black capitalize">
            Search Real Agent in Local Area of {urlCity}
          </h2>

          {loadingLocations ? (
            <div className="text-gray-500">Loading locations...</div>
          ) : (
            <>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4">
                {visibleLocations.map((loc) => (
                  <li key={loc.slug}>
                    <button
                      onClick={() => handleLocationClick(loc.location)}
                      className={`text-base transition-colors duration-200 ${
                        activeLocation === loc.location
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-700 hover:text-indigo-600"
                      }`}
                    >
                      Property Dealer in {loc.location}
                    </button>
                  </li>
                ))}
              </ul>

              {/* 🔥 Read More Text (Mobile Only) */}
              {isMobile && locations.length > 20 && !showAllLocations && (

                <div className="mt-4 sm:hidden">
                  <span
                    onClick={() => setShowAllLocations(true)}
                    className="text-indigo-600 cursor-pointer text-sm font-medium hover:underline"
                  >
                    Explore More
                  </span>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </section>
  );
}
