
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DealerContext = createContext(null);

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export function DealerProvider({ children }) {

  const [domain, setDomain] = useState(null);
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");

  const ITEMS_PER_PAGE = 100;

  async function fetchDealers() {
    if (!domain) return;

    try {
      setLoading(true);

      const cleanSearch = search
        .replace(/property dealer in/i, "")
        .trim();

      const params = new URLSearchParams({
        page: page.toString(),
        limit: ITEMS_PER_PAGE.toString(),
      });

      if (cleanSearch) {
        params.append("search", cleanSearch);
      }

      const url = `${API_BASE}/api/get/getDealers/${domain}?${params.toString()}`;

      const res = await axios.get(url);

      // ✅ CORRECT DATA SET
      setDealers(res?.data?.data || []);

      // 🔥 MAIN FIX (IMPORTANT)
      setTotalPages(res?.data?.pagination?.totalPages ?? 1);

    } catch (err) {
      console.error("Dealer API error:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDealers();
  }, [domain, page, search]);

  return (
    <DealerContext.Provider
      value={{
        dealers,
        loading,
        page,
        setPage,
        totalPages,
        setDomain,
        search,
        setSearch,
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