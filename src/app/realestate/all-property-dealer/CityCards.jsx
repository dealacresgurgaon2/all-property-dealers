"use client";

import { useRouter } from "next/navigation";
import Breadcrumb from "@/templates/design8/components/Breadcrumb";
export default function CityCards() {

  const router = useRouter();

  const cities = [
    {
      name: "Delhi",
      link: "/explore-property-dealers-in-delhi",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200",
    },
    {
      name: "Noida",
      link: "/noida",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    },
    {
      name: "Haryana",
      link: "/explore-property-dealers-in-haryana-districts",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1200",
    },
  ];

  return (

    <div className="max-w-6xl mx-auto px-4 py-8">
{/* BREADCRUMB */}
<Breadcrumb
  className="
    max-w-6xl
    mx-auto
    md:px-0
    px-3
    py-5
  "
  items={[
    {
      label: "All Property Dealer",
      href: "/all-property-dealer",
    },
  
  ]}
/>
      {/* HEADING */}
      <h1
        className="
          text-3xl
          font-bold
          mb-10
          text-[#2A0E18]
        "
      >

        All Property Dealers

      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {cities.map((city, index) => (

          <div
            key={index}
            onClick={() => {

              if (city.name === "Delhi") {

                router.push(
                  "/explore-property-dealers-in-delhi"
                );

              } else if (
                city.name === "Haryana"
              ) {

                router.push(
                  "/explore-property-dealers-in-haryana-districts"
                );

              } else {

                router.push(
                  `/property-dealer-in-${city.name.toLowerCase()}`
                );

              }

            }}
            className="
              group
              cursor-pointer
              rounded-[32px]
              bg-white/95
              border border-[#F3D9E3]
              shadow-[0_10px_35px_rgba(118,21,60,0.08)]
              hover:shadow-[0_18px_45px_rgba(118,21,60,0.16)]
              transition-all
              duration-500
              transform
              hover:-translate-y-3
              hover:scale-[1.02]
              relative
              overflow-visible
            "
          >

            {/* IMAGE */}
            <div className="h-52 overflow-hidden rounded-t-[32px]">

              <img
                src={city.image}
                alt={city.name}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-500
                "
              />

            </div>

            {/* LABEL */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-20">

              <span
                className="
                  px-5 py-1.5
                  text-xs
                  font-semibold
                  rounded-full
                  bg-gradient-to-r
                  from-[#76153C]
                  to-[#5A0E24]
                  text-white
                  shadow-xl
                  border-2 border-white
                "
              >

                {city.name}

              </span>

            </div>

            {/* CONTENT */}
            <div className="p-6 pt-12 text-center">

              <h3
                className="
                  text-xl
                  font-bold
                  text-[#2A0E18]
                  mb-2
                "
              >

                Explore {city.name}

              </h3>

              <p
                className="
                  text-sm
                  text-[#6B4A55]
                  mb-5
                  leading-7
                "
              >

                Find top property dealers,
                real estate agents &
                trusted consultants

              </p>

              {/* BUTTON */}
              <button
                className="
                  px-6 py-2.5
                  rounded-full
                  bg-gradient-to-r
                  from-[#76153C]
                  to-[#5A0E24]
                  text-white
                  text-sm
                  font-semibold
                  shadow-[0_10px_25px_rgba(118,21,60,0.18)]
                  hover:shadow-[0_14px_35px_rgba(118,21,60,0.24)]
                  transition
                  cursor-pointer
                "
              >

                Explore Now →

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}