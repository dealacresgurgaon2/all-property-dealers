


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

  const ITEMS_PER_PAGE = 100;

  
    async function fetchDealers() {
      try {
        setLoading(true);
          
        const res = await axios.get(
          `${API_BASE}/api/get/getAllData/${domain}?page=${page}&limit=${ITEMS_PER_PAGE}`
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



























