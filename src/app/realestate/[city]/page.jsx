"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCity } from "@/context/design7api/CityContext";
import DealerCard from "@/templates/design8/components/DealerCard";
import QueryForm from "@/templates/design8/components/QueryForm";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import Breadcrumb from "@/templates/design8/components/Breadcrumb";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function DealersPage() {

  const params = useParams();

  const rawCity = params?.city;

  const urlCity = cleanCitySlug(rawCity);

  return (
    <CityDealers
      key={urlCity}
      urlCity={urlCity}
    />
  );

}






const cleanCitySlug = (slug) => {

  if (!slug) return "";

  return slug
    .toLowerCase()
    .replace(/^property-dealer-in-/, "")
    .trim();

};

function CityDealers({ urlCity }) {

  const router = useRouter();

  const { setCity } = useCity();

  const [dealers, setDealers] =
    useState([]);

  const [allDealers, setAllDealers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [locations, setLocations] =
    useState([]);

  const [
    loadingLocations,
    setLoadingLocations,
  ] = useState(true);

  const [
    activeLocation,
    setActiveLocation,
  ] = useState(null);

  const [
    showAllLocations,
    setShowAllLocations,
  ] = useState(false);

  const [isMobile, setIsMobile] =
    useState(false);

  const [topDealers, setTopDealers] =
    useState([]);

  /* HELPERS */

  const getCityForDealersAPI = (
    city
  ) => {

    if (!city) return city;

    const map = {
      "central-delhi": "Central Delhi",
      "north-delhi": "North Delhi",
      "south-delhi": "South Delhi",
      "east-delhi": "East Delhi",
      "west-delhi": "West Delhi",
      gurugram: "gurgaon",
    };

    return (
      map[city.toLowerCase()] ||
      city
    );

  };

  const getCityForSearchAPI = (
    city
  ) => {

    if (!city) return city;

    const map = {
      "central-delhi": "Central Delhi",
      "north-delhi": "North Delhi",
      "south-delhi": "South Delhi",
      "east-delhi": "East Delhi",
      "west-delhi": "West Delhi",
      gurgaon: "gurugram",
    };

    return (
      map[city.toLowerCase()] ||
      city
    );

  };

  const scrollToDealers = () => {

    const section =
      document.getElementById(
        "dealers-section"
      );

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };

  /* FETCH DEALERS */

  useEffect(() => {

    if (!urlCity) return;

    const fetchDealers = async () => {

      try {

        setLoading(true);

        const mappedCity =
          getCityForDealersAPI(
            urlCity
          );

        const res = await fetch(
          `${API_BASE}/api/get/city/${mappedCity}`
        );

        const data = await res.json();

        const finalData =
          Array.isArray(data)
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

  /* FETCH LOCATIONS */

  useEffect(() => {

    if (!urlCity) return;

    const fetchLocations = async () => {

      try {

        setLoadingLocations(true);

        const mappedCity =
          getCityForSearchAPI(
            urlCity
          );

        const res = await fetch(
          `https://deal-acres-backend.onrender.com/api/searchByCity/${mappedCity}`
        );

        const data = await res.json();

        const finalLocations =
          Array.isArray(data)
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

  /* LOCATION FILTER */

  const handleLocationClick =
    async (locationName) => {

      try {

        setActiveLocation(
          locationName
        );

        setLoading(true);

        const mappedCity =
          getCityForDealersAPI(
            urlCity
          );

        const res = await fetch(
          `${API_BASE}/api/get/haryana-location-filter?city=${mappedCity}&location=${encodeURIComponent(
            locationName
          )}`
        );

        const data =
          await res.json();

        const filteredData =
          Array.isArray(data)
            ? data
            : Array.isArray(data.data)
              ? data.data
              : [];

        setTopDealers(
          filteredData
        );

        const remaining =
          allDealers.filter(
            (d) =>
              d.area !==
              locationName
          );

        setDealers(remaining);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

        setTimeout(
          scrollToDealers,
          150
        );

      }

    };

  const createSlug = (name) => {

    return name
      .toLowerCase()
      .replace(/,/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  };

  useEffect(() => {

    const checkScreen = () => {

      setIsMobile(
        window.innerWidth < 640
      );

    };

    checkScreen();

    window.addEventListener(
      "resize",
      checkScreen
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkScreen
      );

  }, []);
  const cityName = urlCity
  ?.replace(/-/g, " ")
  ?.replace(/\b\w/g, (c) =>
    c.toUpperCase()
  );

  const visibleLocations =
    !showAllLocations
      ? locations.slice(
        0,
        isMobile ? 20 : 30
      )
      : locations;

  return (

    <section
      className="
        min-h-screen
        py-12
        bg-gradient-to-br
        from-[#FFF8FA]
        via-white
        to-[#FFF3F7]
      "
    >

      <div
        id="dealers-section"
        className="
          max-w-7xl
          mx-auto
          px-4 sm:px-6
        "
      >

        {/* BREADCRUMB */}
<Breadcrumb
 className="
    max-w-7xl
    mx-auto
    md:px-0
    px-3
    py-5
  "
  items={[
  {
    label:
      "All Property Dealer",
    href:
      "/all-property-dealer",
  },

  ...( cityName
  ?.toLowerCase()
  ?.includes("delhi")

    ? [
        {
          label:
            "Explore Property Dealers In Delhi",
          href:
            "/explore-property-dealers-in-delhi",
        },
      ]

    : [
        "ambala",
        "bhiwani",
        "charkhi dadri",
        "faridabad",
        "fatehabad",
        "gurgaon",
        "hisar",
        "jhajjar",
        "jind",
        "kaithal",
        "karnal",
        "kurukshetra",
        "mahendragarh",
        "palwal",
        "panchkula",
        "panipat",
        "rewari",
        "rohtak",
        "sirsa",
        "sonipat",
        "yamunanagar",
        "hansi",
      ].includes(
        cityName?.toLowerCase()
      )

        ? [
            {
              label:
                "Explore Property Dealers In Haryana Districts",
              href:
                "/explore-property-dealers-in-haryana-districts",
            },
          ]

        : [] ),

  {
    label:
      `Property Dealer In ${cityName}`,
  },
]}
/>

        {/* HEADER */}
        <div className="mb-10">

          <h1
            className="
              text-3xl md:text-4xl
              font-bold
              text-[#2A0E18]
              capitalize
            "
          >

            Property Dealers in {urlCity}

          </h1>

          {activeLocation && (

            <p
              className="
                mt-4
                text-[#76153C]
                font-semibold
              "
            >

              Showing Real Estate Agents in{" "}
              {activeLocation}

            </p>

          )}

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {loading ? (

              <div
                className="
                  text-center
                  py-20
                  text-[#76153C]
                  font-semibold
                  rounded-3xl
                  border border-[#F3D9E3]
                  bg-white
                "
              >

                Loading dealers...

              </div>

            ) : (

              dealers.map((dealer) => (

                <DealerCard
                  key={dealer._id}
                  dealer={dealer}
                />

              ))

            )}

          </div>

          {/* RIGHT */}
          <div>

            <div className="sticky top-[80px]">

              <QueryForm />

            </div>

          </div>

        </div>

        {/* LOCATION SECTION */}
        <div
          id="locations-section"
          className="
            mt-20
            border-t border-[#F3D9E3]
            pt-10
          "
        >

          <h2
            className="
              text-xl
              font-semibold
              mb-8
              text-[#2A0E18]
              capitalize
            "
          >

            Search Real Agent in Local Area of {urlCity}

          </h2>

          {loadingLocations ? (

            <div className="text-[#76153C]">

              Loading locations...

            </div>

          ) : (

            <>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {visibleLocations.map((loc) => (

                  <li key={loc.slug}>

                    <button
                      onClick={() =>
                        router.push(
                          `/${urlCity}/property-dealer-in-${createSlug(
                            loc.location
                          )}`
                        )
                      }
                      className={`group w-full flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-300 ${
                        activeLocation ===
                          loc.location
                          ? "bg-gradient-to-r from-[#76153C] to-[#5A0E24] border-transparent text-white shadow-lg font-semibold"
                          : "bg-white border-[#F3D9E3] text-gray-700 hover:bg-[#FFF0F5] hover:border-[#76153C]"
                      }`}
                    >

                      {/* ICON */}
                      <MapPin
                        size={18}
                        className={`shrink-0 ${
                          activeLocation ===
                            loc.location
                            ? "text-white"
                            : "text-[#76153C]"
                        }`}
                      />

                      {/* TEXT */}
                      <span className="leading-tight">

                        Property Dealers in {loc.location}

                      </span>

                    </button>

                  </li>

                ))}

              </ul>

              {/* EXPLORE MORE */}
              {locations.length > 20 &&
                !showAllLocations && (

                  <div className="mt-4">

                    <span
                      onClick={() =>
                        setShowAllLocations(
                          true
                        )
                      }
                      className="
                        text-[#76153C]
                        cursor-pointer
                        text-sm
                        font-medium
                        hover:underline
                      "
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