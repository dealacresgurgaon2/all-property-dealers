import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [domain2, setDomain2] = useState(null);

  // 🔥 DOMAIN FIX
  const getDomain = () => {
    if (typeof window !== "undefined") {
      const host = window.location.hostname;

      // ✅ LOCALHOST FIX
      if (host === "localhost") {
        return "www.propertydealerinhisar.com";
      }

      return host;
    }
    return "";
  };

  const searchDealers = async (query) => {
    try {
      setLoading(true);

      const domain = getDomain(); // 🔥 dynamic

      const res = await fetch(
        `http://localhost:5000/api/search?q=${query}&domain=${domain}`
      );

      const data = await res.json();

      if (data.success) {
        setResults(data.data);
      }

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        results,
        loading,
        searchDealers
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// custom hook
export const useSearch = () => useContext(SearchContext);