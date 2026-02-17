


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

// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { usePathname } from "next/navigation";   // 👈 NEW IMPORT

// const DealerContext = createContext(null);

// const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// export function DealerProvider({ children }) {

//   const [dealers, setDealers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [domain, setDomain] = useState(null);

//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const [selectedLocation, setSelectedLocation] = useState(null);

//   const pathname = usePathname();    // 👈 NEW

//   const ITEMS_PER_PAGE = 100;

//   // ======== NORMAL HOME PAGE FETCH =========
//   async function fetchDealers() {
//     try {
//       setLoading(true);

//       if (!domain) return;

//       let url = `${API_BASE}/api/get/getAllData/${domain}?page=${page}&limit=${ITEMS_PER_PAGE}`;

//       const res = await axios.get(url);

//       setDealers(res.data.data || []);
//       setTotalPages(res.data.totalPages || 1);

//     } catch (err) {
//       console.error("Dealer API error:", err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // ======== LOCATION PAGE API =========
//   async function fetchDealersByLocationAPI(location) {
//     try {
//       setLoading(true);

//       if (!domain) return;

//       const url = `${API_BASE}/api/get/locationDealers?domain=${domain}&location=${encodeURIComponent(location)}`;

//       const res = await axios.get(url);

//       setDealers(res.data.data || []);
//       setTotalPages(1);

//     } catch (err) {
//       console.error("Location Dealer API error:", err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // 👉 FUNCTION CALLED FROM LOCATION PAGES
//   const fetchDealersByLocation = (location) => {
//     setSelectedLocation(location);
//     setPage(1);
//   };

//   // 👉 FUNCTION – MANUAL RESET (already used in home page)
//   const clearLocationFilter = () => {
//     setSelectedLocation(null);
//     setPage(1);
//   };

//   // ============================================================
//   // 🔥 UNIVERSAL AUTO RESET LOGIC – MULTI DOMAIN + MULTI CITY
//   // ============================================================
//   useEffect(() => {

//     const segments = pathname.split("/").filter(Boolean);

//     // Agar URL me sirf domain ya sirf city ho -> HOME PAGE
//     if (segments.length < 2) {
//       setSelectedLocation(null);
//     }

//   }, [pathname]);
//   // ============================================================


//   // ======== MAIN EFFECT LOGIC =========
//   useEffect(() => {

    

//     if (!domain) return;

//     // HOME PAGE CASE
//     if (!selectedLocation) {
      
//       fetchDealers();
//       return;
//     }

//     // LOCATION PAGE CASE
    
//     fetchDealersByLocationAPI(selectedLocation);

//   }, [page, domain, selectedLocation]);


//   return (
//     <DealerContext.Provider
//       value={{
//         dealers,
//         loading,
//         page,
//         setPage,
//         totalPages,
//         setDomain,
//         fetchDealersByLocation,
//         clearLocationFilter,
//         selectedLocation,
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
import { usePathname } from "next/navigation";

const DealerContext = createContext(null);
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export function DealerProvider({ children }) {

  // ================= STATES =================
  const [domain, setDomain] = useState(null);
  const [domain2, setDomain2] = useState(null);

  const [homeDealers, setHomeDealers] = useState([]);
  const [locationDealers, setLocationDealers] = useState([]);

  const [homeLoading, setHomeLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [selectedLocation, setSelectedLocation] = useState(null);

  const pathname = usePathname();
  const ITEMS_PER_PAGE = 100;

  // ==================================================
  // HOME API
  // ==================================================
  async function fetchHomeDealers() {
    if (!domain) return;

    try {
      setHomeLoading(true);

      const url = `${API_BASE}/api/get/getAllData/${domain}?page=${page}&limit=${ITEMS_PER_PAGE}`;

      const res = await axios.get(url);

      setHomeDealers([...(res.data.data || [])]); // force new reference
      setTotalPages(res.data.totalPages || 1);

    } catch (err) {
      console.error("Home Dealer API error:", err);
    } finally {
      setHomeLoading(false);
    }
  }

  // ==================================================
  // LOCATION API
  // ==================================================
  async function fetchLocationDealers(location) {
    if (!domain2 || !location) return;

    try {
      setLocationLoading(true);

      const url = `${API_BASE}/api/get/locationDealers?domain=${domain2}&location=${encodeURIComponent(location)}`;

      const res = await axios.get(url);

      // Important: new reference every time
      setLocationDealers([...(res.data.data || [])]);
      setTotalPages(1);

    } catch (err) {
      console.error("Location Dealer API error:", err);
    } finally {
      setLocationLoading(false);
    }
  }

  // ==================================================
  // LOCATION EFFECT (Separated)
  // ==================================================
  useEffect(() => {
    if (selectedLocation && domain2) {
      fetchLocationDealers(selectedLocation);
    }
  }, [selectedLocation, domain2]);

  // ==================================================
  // HOME EFFECT (Separated)
  // ==================================================
  useEffect(() => {
    if (!selectedLocation && domain) {
      fetchHomeDealers();
    }
  }, [domain, page]);

  // ==================================================
  // AUTO RESET
  // ==================================================
  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length < 2) {
      setSelectedLocation(null);
    }
  }, [pathname]);

  // ==================================================
  // FILTER FUNCTIONS
  // ==================================================
  const applyLocationFilter = (location) => {
    setSelectedLocation(location);
    setPage(1);
  };

  const clearLocationFilter = () => {
    setSelectedLocation(null);
    setPage(1);
  };

  // ==================================================
  // SELECT ACTIVE DATA
  // ==================================================
  const dealers = selectedLocation ? locationDealers : homeDealers;
  const loading = selectedLocation ? locationLoading : homeLoading;

  return (
    <DealerContext.Provider
      value={{
        dealers,
        loading,
        page,
        setPage,
        totalPages,
        setDomain,
        setDomain2,
        applyLocationFilter,
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
