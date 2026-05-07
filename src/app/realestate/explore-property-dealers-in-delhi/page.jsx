"use client";

import { useRouter } from "next/navigation";

import QueryForm from "@/templates/design8/components/QueryForm";
import Breadcrumb from "@/templates/design8/components/Breadcrumb";
import { Building2 } from "lucide-react";

export default function DelhiPage() {

  const router = useRouter();

  const zones = [
    "Central Delhi",
    "North Delhi",
    "South Delhi",
    "East Delhi",
    "West Delhi",
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
    px-4
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
        "Explore Property Dealers In Delhi",
    },
  ]}
/>
      {/* BG GLOW */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#76153C]/5 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#5A0E24]/5 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-14">

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

            Delhi Real Estate Network

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

            in Delhi

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

            Find trusted property dealers,
            verified agents and real estate
            consultants across all Delhi zones.

          </p>

        </div>

        {/* TOP SECTION */}
        <div
          className="
            grid
            md:grid-cols-2
            gap-10
            items-center
            mb-16
          "
        >

          {/* LEFT IMAGE */}
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[40px]
              border border-[#F3D9E3]
              shadow-[0_20px_60px_rgba(118,21,60,0.16)]
            "
          >

            <div className="relative w-full h-[480px]">

              <img
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200"
                alt="Delhi Property Dealers"
                className="
                  w-full h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            </div>

            {/* CONTENT */}
            <div
              className="
                absolute
                bottom-0 left-0
                p-8
                text-white
              "
            >

              <div
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  rounded-full
                  bg-white/10
                  border border-white/20
                  backdrop-blur-xl
                  text-sm
                  font-medium
                  mb-5
                "
              >

                <div className="w-2 h-2 rounded-full bg-white" />

                Delhi Premium Dealers

              </div>

              <h3
                className="
                  text-3xl
                  font-bold
                  mb-4
                "
              >

                Verified Real Estate Network

              </h3>

              <p
                className="
                  text-white/85
                  max-w-md
                  leading-7
                "
              >

                Discover trusted property experts
                and verified dealers across Delhi.

              </p>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div>

            <div
              className="
                rounded-[36px]
                border border-[#F3D9E3]
                bg-white/90
                backdrop-blur-xl
                overflow-hidden
                shadow-[0_20px_60px_rgba(118,21,60,0.10)]
              "
            >

              <QueryForm />

            </div>

          </div>

        </div>

        {/* ZONE HEADER */}
        <div className="mb-10">

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
              mb-5
            "
          >

            <div className="w-2 h-2 rounded-full bg-[#76153C]" />

            Delhi Zones

          </div>

          <h2
            className="
              text-3xl md:text-4xl
              font-bold
              text-[#2A0E18]
            "
          >

            Choose Your Preferred Area

          </h2>

        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-7
          "
        >

          {zones.map((zone, i) => (

            <div
              key={i}
              onClick={() =>
                router.push(
                  `/property-dealer-in-${createSlug(
                    zone
                  )}`
                )
              }
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border border-[#F3D9E3]
                bg-white/90
                backdrop-blur-xl
                p-7
                shadow-[0_10px_35px_rgba(118,21,60,0.08)]
                hover:-translate-y-3
                hover:shadow-[0_20px_50px_rgba(118,21,60,0.16)]
                transition-all
                duration-500
                text-center
                cursor-pointer
              "
            >

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#76153C]/5 blur-3xl rounded-full" />

              <div className="relative z-10">

                {/* ICON */}
                <div className="flex justify-center mb-6">

                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#76153C]
                      to-[#5A0E24]
                      text-white
                      flex items-center justify-center
                      shadow-md
                      group-hover:scale-110
                      transition-transform
                    "
                  >

                    <Building2 size={28} />

                  </div>

                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-xl
                    font-bold
                    text-[#2A0E18]
                    mb-3
                  "
                >

                  {zone}

                </h3>

                {/* DESC */}
                <p
                  className="
                    text-gray-600
                    leading-7
                    mb-7
                    text-sm
                  "
                >

                  Find trusted property dealers
                  and verified agents.

                </p>

                {/* BUTTON */}
                <button
                  onClick={(e) => {

                    e.stopPropagation();

                    router.push(
                      `/property-dealer-in-${createSlug(
                        zone
                      )}`
                    );

                  }}
                  className="
                    w-full
                    h-12
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#76153C]
                    to-[#5A0E24]
                    text-white
                    font-semibold
                    shadow-[0_10px_25px_rgba(118,21,60,0.18)]
                    group-hover:scale-[1.02]
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >

                  Explore →

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}