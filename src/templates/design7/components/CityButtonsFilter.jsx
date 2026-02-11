"use client";

export default function CityButtonsFilter({ onCitySelect }) {

  const cities = [
    "Hisar",
    "Gurgaon",
    "Faridabad",
    "Sonipat"
  ];

  return (
    <div className="mt-6 bg-white p-4 rounded-xl border border-indigo-200 shadow-sm">

      <h4 className="text-sm font-semibold text-indigo-700 mb-3">
        Quick City Filters
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

        {cities.map((city, index) => (
          <button
            key={index}
            onClick={() => onCitySelect(city)}
            className="
              py-2 px-3
              text-sm font-semibold
              rounded-lg
              border border-indigo-300
              text-indigo-700
              hover:bg-indigo-50
              hover:border-indigo-500
              transition
            "
          >
            Real Estate in {city}
          </button>
        ))}

      </div>

      <p className="text-xs text-gray-500 mt-3">
        Click a button to instantly filter dealers
      </p>

    </div>
  );
}
