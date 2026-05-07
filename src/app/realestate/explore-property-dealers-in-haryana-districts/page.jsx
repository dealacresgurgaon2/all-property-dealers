"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

import { Building2 } from "lucide-react";
import Breadcrumb from "@/templates/design8/components/Breadcrumb";
export default function HaryanaPage() {
const params = useParams();

const citySlug = params?.city || "";

const cityName = citySlug
  .replace(/-/g, " ")
  .replace(/\b\w/g, (c) =>
    c.toUpperCase()
  );

  const router = useRouter();

  const districts = [
    "Ambala",
    "Bhiwani",
    "Charkhi Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurgaon",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar",
    "Hansi",
    "Charkhi Dadri",
  ];

  const createSlug = (name) => {

    return name
      .toLowerCase()
      .replace(/\s+/g, "-");

  };

  return (

    <section
      className="
        relative
        overflow-hidden
        min-h-screen
        py-8
        bg-gradient-to-br
        from-[#FFF8FA]
        via-white
        to-[#FFF3F7]
      "
    >
      {/* BREADCRUMB */}
<Breadcrumb
 className="
    max-w-7xl
    mx-auto
    md:px-0
    px-3
    py-5
  "
  items={[
    {
      label:
        "All Property Dealer",
      href:
        "/all-property-dealer",
    },
    {
      label:
        "Explore Property Dealers In Haryana Districts",
      href:
        "/explore-property-dealers-in-haryana-districts",
    },
    
  
  ]}
/>

      {/* BG GLOW */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#76153C]/5 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#5A0E24]/5 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className=" mb-14">

          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              border border-[#F3D9E3]
              bg-white
              text-[#76153C]
              text-sm
              font-medium
              shadow-sm
              mb-6
            "
          >

            <div className="w-2 h-2 rounded-full bg-[#76153C]" />

            Haryana Real Estate Network

          </div>

          {/* TITLE */}
          <h1
            className="
              text-3xl md:text-5xl
              font-bold
              text-[#2A0E18]
              leading-tight
            "
          >

            Explore Property Dealers
            <br />

            in Haryana Districts

          </h1>

          {/* DESC */}
          <p
            className="
              text-gray-600
              max-w-2xl
              
              mt-5
              leading-8
            "
          >

            Discover trusted property dealers,
            verified real estate agents and
            consultants district-wise across Haryana.

          </p>

        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-7
          "
        >

          {districts.map((dist, i) => (

            <div
              key={i}
              onClick={() =>
                router.push(
                  `/property-dealer-in-${createSlug(
                    dist
                  )}`
                )
              }
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border border-[#F3D9E3]
                bg-white/90
                backdrop-blur-xl
                p-6
                shadow-[0_10px_35px_rgba(118,21,60,0.08)]
                hover:-translate-y-3
                hover:shadow-[0_20px_50px_rgba(118,21,60,0.16)]
                transition-all
                duration-500
                cursor-pointer
              "
            >

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#76153C]/5 blur-3xl rounded-full" />

              <div className="relative z-10 flex items-center gap-5">

                {/* ICON */}
                <div
                  className="
                    relative
                    w-14 h-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#76153C]
                    to-[#5A0E24]
                    text-white
                    flex items-center justify-center
                    shrink-0
                    shadow-[0_10px_25px_rgba(118,21,60,0.22)]
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  "
                >

                  {/* INNER GLOW */}
                  <div
                    className="
                      absolute inset-0
                      rounded-2xl
                      bg-white/10
                      blur-md
                    "
                  />

                  <Building2
                    size={24}
                    className="relative z-10"
                  />

                </div>

                {/* TEXT */}
                <div>

                  <h3
                    className="
                      text-[#2A0E18]
                      font-bold
                      text-base
                      leading-7
                    "
                  >

                    Real Estate Agent {dist}

                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      mt-1
                    "
                  >

                    Explore verified dealers

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}