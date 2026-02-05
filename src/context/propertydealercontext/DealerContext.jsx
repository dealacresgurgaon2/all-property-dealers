// // "use client";

// // import { createContext, useContext, useEffect, useState } from "react";
// // import axios from "axios";

// // const DealerContext = createContext(null);

// // const API_BASE = "http://localhost:5000/api/get";

// // export function DealerProvider({ children }) {
// //   const [dealers, setDealers] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     async function fetchDealers() {
// //       try {
// //         // 🔥 auto domain detect
// //         let domain = window.location.hostname.replace("www.", "");

// //         const res = await axios.get(`${API_BASE}/${domain}`);

// //         setDealers(res.data.data || []);
// //       } catch (err) {
// //         console.error("Dealer API error:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchDealers();
// //   }, []);

// //   return (
// //     <DealerContext.Provider value={{ dealers, loading }}>
// //       {children}
// //     </DealerContext.Provider>
// //   );
// // }

//  // custom hook
// // export const useDealers = () => useContext(DealerContext);


"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DealerContext = createContext(null);

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// 🔥 STATIC DOMAIN
const STATIC_DOMAIN = "propertydealeringurgaon.com";

export function DealerProvider({ children }) {
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [domain, setDomain] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const ITEMS_PER_PAGE = 70;

  
    async function fetchDealers() {
      try {
        setLoading(true);

        const res = await axios.get(
          `${API_BASE}/${domain}?page=${page}&limit=${ITEMS_PER_PAGE}`
        );

        setDealers(res.data.data || []);
        setTotalPages(res.data.totalPages || 1);

      } catch (err) {
        console.error("Dealer API error:", err);
      } finally {
        setLoading(false);
      }
    }
    useEffect(() => {
      
        console.log("dskjdf",domain);
     if(domain)   
    fetchDealers();
  }, [page,domain]);

  return (
    <DealerContext.Provider
      value={{
        dealers,
        loading,
        page,
        setPage,
        totalPages,
        setDomain
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



























// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// import {
//   DOMAIN_LAYOUT_MAP,
//   CITY_DOMAIN_MAP,
//   DEFAULT_LAYOUT
// } from "../../config/domainConfig";


// const DealerContext = createContext(null);

// const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// export function DealerProvider({ children }) {

//   const [dealers, setDealers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [domain, setDomain] = useState("");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const ITEMS_PER_PAGE = 70;

//   // 🔥 HOSTNAME SE CITY -> DOMAIN NIKALO
//   useEffect(() => {

//     if (typeof window !== "undefined") {

//       const hostname = window.location.host;

//       // 1. Hostname se city nikali
//       const city =
//         DOMAIN_LAYOUT_MAP[hostname] || DEFAULT_LAYOUT;

//       // 2. City se actual API domain nikala
//       const mappedDomain =
//         CITY_DOMAIN_MAP[city];

//       setDomain(mappedDomain);
//     }

//   }, []);

//   useEffect(() => {

//     async function fetchDealers() {
//       try {
//         setLoading(true);

//         const res = await axios.get(
//           `${API_BASE}/${domain}?page=${page}&limit=${ITEMS_PER_PAGE}`
//         );

//         setDealers(res.data.data || []);
//         setTotalPages(res.data.totalPages || 1);

//       } catch (err) {
//         console.error("Dealer API error:", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     // Jab tak domain na mile – API call mat karo
//     if (domain) {
//       fetchDealers();
//     }

//   }, [page, domain]);

//   return (
//     <DealerContext.Provider
//       value={{
//         dealers,
//         loading,
//         page,
//         setPage,
//         totalPages,
//         domain
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
