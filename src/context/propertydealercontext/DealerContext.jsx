


// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const DealerContext = createContext(null);

// const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// // 🔥 STATIC DOMAIN
// const STATIC_DOMAIN = "propertydealeringurgaon.com";

// export function DealerProvider({ children }) {
//   const [dealers, setDealers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [domain, setDomain] = useState(null);

//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const ITEMS_PER_PAGE = 100;

  
//     async function fetchDealers() {
//       try {
//         setLoading(true);
          
//         const res = await axios.get(
//           `${API_BASE}/api/get/getAllData/${domain}?page=${page}&limit=${ITEMS_PER_PAGE}`
//         );

//         setDealers(res.data.data || []);
//         setTotalPages(res.data.totalPages || 1);

//       } catch (err) {
//         console.error("Dealer API error:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     useEffect(() => {
      
        
//      if(domain)   
//     fetchDealers();
//   }, [page,domain]);

//   return (
//     <DealerContext.Provider
//       value={{
//         dealers,
//         loading,
//         page,
//         setPage,
//         totalPages,
//         setDomain
//       }}
//     >
//       {children}
//     </DealerContext.Provider>
//   );
// }

// export const useDealers = () => {
//   const ctx = useContext(DealerContext);
//   if (!ctx) {
//     throw new Error("useDealers must be used inside DealerProvider");
//   }
//   return ctx;
// };

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";   // 👈 NEW IMPORT

const DealerContext = createContext(null);

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export function DealerProvider({ children }) {

  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [domain, setDomain] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [selectedLocation, setSelectedLocation] = useState(null);

  const pathname = usePathname();    // 👈 NEW

  const ITEMS_PER_PAGE = 100;

  // ======== NORMAL HOME PAGE FETCH =========
  async function fetchDealers() {
    try {
      setLoading(true);

      if (!domain) return;

      let url = `${API_BASE}/api/get/getAllData/${domain}?page=${page}&limit=${ITEMS_PER_PAGE}`;

      const res = await axios.get(url);

      setDealers(res.data.data || []);
      setTotalPages(res.data.totalPages || 1);

    } catch (err) {
      console.error("Dealer API error:", err);
    } finally {
      setLoading(false);
    }
  }

  // ======== LOCATION PAGE API =========
  async function fetchDealersByLocationAPI(location) {
    try {
      setLoading(true);

      if (!domain) return;

      const url = `${API_BASE}/api/get/locationDealers?domain=${domain}&location=${encodeURIComponent(location)}`;

      const res = await axios.get(url);

      setDealers(res.data.data || []);
      setTotalPages(1);

    } catch (err) {
      console.error("Location Dealer API error:", err);
    } finally {
      setLoading(false);
    }
  }

  // 👉 FUNCTION CALLED FROM LOCATION PAGES
  const fetchDealersByLocation = (location) => {
    setSelectedLocation(location);
    setPage(1);
  };

  // 👉 FUNCTION – MANUAL RESET (already used in home page)
  const clearLocationFilter = () => {
    setSelectedLocation(null);
    setPage(1);
  };

  // ============================================================
  // 🔥 UNIVERSAL AUTO RESET LOGIC – MULTI DOMAIN + MULTI CITY
  // ============================================================
  useEffect(() => {

    const segments = pathname.split("/").filter(Boolean);

    // Agar URL me sirf domain ya sirf city ho -> HOME PAGE
    if (segments.length < 2) {
      setSelectedLocation(null);
    }

  }, [pathname]);
  // ============================================================


  // ======== MAIN EFFECT LOGIC =========
  useEffect(() => {

    

    if (!domain) return;

    // HOME PAGE CASE
    if (!selectedLocation) {
      
      fetchDealers();
      return;
    }

    // LOCATION PAGE CASE
    
    fetchDealersByLocationAPI(selectedLocation);

  }, [page, domain, selectedLocation]);


  return (
    <DealerContext.Provider
      value={{
        dealers,
        loading,
        page,
        setPage,
        totalPages,
        setDomain,
        fetchDealersByLocation,
        clearLocationFilter,
        selectedLocation,
      }}
    >
      {children}
    </DealerContext.Provider>
  );
}

export const useDealers = () => {
  const ctx = useContext(DealerContext);
  if (!ctx) {
    throw new Error("useDealers must be used inside DealerProvider");
  }
  return ctx;
};
