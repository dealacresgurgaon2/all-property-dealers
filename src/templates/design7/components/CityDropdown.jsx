"use client";

import { useState } from "react";

export default function CityDropdown({ onCitySelect }) {

  const [selectedCity, setSelectedCity] = useState("");

  const cities = [
    "Ambala","Bhiwani","Charkhi-Dadri","Faridabad","Fatehabad",
    "Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal",
    "Kurukshetra","Mahendergarh","Palwal","Panchkula",
    "Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar",
  ];

  const handleChange = (e) => {
    const city = e.target.value;

    setSelectedCity(city);

    // parent ko city bhej do
    onCitySelect(city);
  };

  return (
    <div className="mt-6 bg-white p-4 rounded-xl border border-indigo-200 shadow-sm">

      <h4 className="text-sm font-semibold text-indigo-700 mb-2">
        Browse Dealers by City
      </h4>

      <select
        value={selectedCity}
        onChange={handleChange}
        className="
          w-full
          px-4 py-2.5
          rounded-lg
          border border-indigo-300
          text-gray-700
          outline-none
          focus:border-indigo-600
          transition
        "
      >
        <option value="">Select City</option>

        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      <p className="text-xs text-gray-500 mt-2">
        Select a city to filter available property dealers
      </p>

    </div>
  );
}
