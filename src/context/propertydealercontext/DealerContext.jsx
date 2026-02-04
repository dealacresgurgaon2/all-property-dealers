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

//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const ITEMS_PER_PAGE = 70;

//   useEffect(() => {
//     async function fetchDealers() {
//       try {
//         setLoading(true);

//         const res = await axios.get(
//           `${API_BASE}/${STATIC_DOMAIN}?page=${page}&limit=${ITEMS_PER_PAGE}`
//         );

//         setDealers(res.data.data || []);
//         setTotalPages(res.data.totalPages || 1);

//       } catch (err) {
//         console.error("Dealer API error:", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchDealers();
//   }, [page]);

//   return (
//     <DealerContext.Provider
//       value={{
//         dealers,
//         loading,
//         page,
//         setPage,
//         totalPages,
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

const DealerContext = createContext(null);

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export function DealerProvider({ children }) {
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const ITEMS_PER_PAGE = 70;

  useEffect(() => {
    async function fetchDealers() {
      try {
        setLoading(true);

        // 🔥 AUTO DOMAIN DETECT
        let domain = window.location.hostname.replace("www.", "");

        // Local / Vercel preview handling
        if (
          domain.includes("vercel.app") ||
          domain === "localhost"
        ) {
          domain = "propertydealeringurgaon.com";   // default testing domain
        }

        console.log("Final Domain Used:", domain);

        // 🔥 MISSING PART – API CALL
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

    fetchDealers();
  }, [page]);

  return (
    <DealerContext.Provider
      value={{
        dealers,
        loading,
        page,
        setPage,
        totalPages,
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
