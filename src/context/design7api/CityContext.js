import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("gurgaon");     // default
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  useEffect(() => {
    if (!city) return;

    setLoading(true);

    axios
      .get(`${API_BASE}/api/get/${city}/fallback`)
      .then((res) => {
        setDealers(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

  }, [city]);

  return (
    <CityContext.Provider
      value={{
        city,
        setCity,
        dealers,
        loading,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => useContext(CityContext);
