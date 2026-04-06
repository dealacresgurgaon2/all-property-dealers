"use client";

export default function CityButtonsFilter({ onCitySelect }) {

  const cities = [
    "South Delhi",
    "North Delhi",
    "East Delhi",
    "West Delhi",
    "Central Delhi",
  
  ];

  return (
    <div className="mt-6 ">

      <h4 className="text-sm font-semibold text-black mb-3">
        Explore Property Dealers by Zone
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">

        {cities.map((city, index) => (
          <button
            key={index}
            onClick={() => onCitySelect(city)}
            className="
              py-2 px-3
              text-sm font-semibold
              rounded-lg
              border border-red-300
              text-red-600
              hover:bg-red-50
              hover:border-red-500
              transition cursor-pointer
            "
          >
            <span className="text-black">Real Estate Agents</span> {city}
          </button>
        ))}

      </div>

      {/* <p className="text-xs text-gray-500 mt-3">
        Click a button to instantly filter dealers
      </p> */}

    </div>
  );
}
