"use client";
import { useParams } from "next/navigation";
import DealerDetailPage from "./DealerDetailPage";

import QueryForm from "../../components/QueryForm";

import FourBlogs from "../../components/FourBlogs";

import Breadcrumb from "../../components/Breadcrumb";

export default function BlogPage() {
const params = useParams();

const cityName = params?.city
  ?.replace(/-/g, " ")
  ?.replace(/\b\w/g, (c) =>
    c.toUpperCase()
  );

const slugParts =
  params?.slug?.split("-") || [];

// REMOVE ID
slugParts.pop();

// REMOVE CITY
if (
  slugParts[
    slugParts.length - 1
  ]?.toLowerCase() ===
  params?.city?.toLowerCase()
) {
  slugParts.pop();
}

const dealerName = slugParts
  .join(" ")
  .replace(/\b\w/g, (c) =>
    c.toUpperCase()
  );
  return (

    <main
      className="
        py-12
        bg-gradient-to-br
        from-[#FFF8FA]
        via-white
        to-[#FFF3F7]
      "
    >
      <Breadcrumb
      className="
    max-w-7xl
    mx-auto
    px-3
    pt-6
    pb-2
  "
  items={[
    {
      label:
        "All Property Dealer",
      href:
        "/all-property-dealer",
    },
    ...( cityName
  ?.toLowerCase()
  ?.includes("delhi")

    ? [
        {
          label:
            "Explore Property Dealers In Delhi",
          href:
            "/explore-property-dealers-in-delhi",
        },
      ]

    : [
        "ambala",
        "bhiwani",
        "charkhi dadri",
        "faridabad",
        "fatehabad",
        "gurgaon",
        "hisar",
        "jhajjar",
        "jind",
        "kaithal",
        "karnal",
        "kurukshetra",
        "mahendragarh",
        "palwal",
        "panchkula",
        "panipat",
        "rewari",
        "rohtak",
        "sirsa",
        "sonipat",
        "yamunanagar",
        "hansi",
      ].includes(
        cityName?.toLowerCase()
      )

        ? [
            {
              label:
                "Explore Property Dealers In Haryana Districts",
              href:
                "/explore-property-dealers-in-haryana-districts",
            },
          ]

        : [] ),


  

    {
      label:
        `Property Dealer In ${cityName}`,
      href:
        `/property-dealer-in-${params?.city}`,
    },

    {
      label:
        dealerName ||
        "Dealer Details",
    },
  ]}
/>

      <div className="max-w-7xl mx-auto px-4">

     

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
          "
        >

          {/* LEFT */}
          <div className="lg:col-span-2">

            <div
              className="
                rounded-[34px]
                border border-[#F3D9E3]
                bg-white/95
                backdrop-blur-xl
                shadow-[0_12px_40px_rgba(118,21,60,0.08)]
                p-3
              "
            >

              <DealerDetailPage />

            </div>

          </div>

          {/* RIGHT */}
          <div className="hidden lg:block">

            <div
              className="
                sticky
                top-[80px]
                space-y-6
              "
            >

              {/* QUERY FORM */}
              <div
                className="
                  rounded-[34px]
                  border border-[#F3D9E3]
                  bg-white/95
                  backdrop-blur-xl
                  shadow-[0_12px_40px_rgba(118,21,60,0.08)]
                  overflow-hidden
                "
              >

                <QueryForm />

              </div>

              {/* TRUST BADGES */}
              <div className="grid grid-cols-2 gap-3">

                {/* SECURE */}
                <div
                  className="
                    rounded-2xl
                    border border-[#F3D9E3]
                    bg-white/95
                    backdrop-blur-xl
                    p-4
                    text-center
                    shadow-[0_8px_25px_rgba(118,21,60,0.06)]
                  "
                >

                  <p
                    className="
                      text-[#76153C]
                      font-bold
                      text-sm
                    "
                  >

                    Secure

                  </p>

                  <p
                    className="
                      text-xs
                      text-[#6B4A55]
                      mt-1
                    "
                  >

                    Transactions

                  </p>

                </div>

                {/* TRUSTED */}
                <div
                  className="
                    rounded-2xl
                    border border-[#F3D9E3]
                    bg-white/95
                    backdrop-blur-xl
                    p-4
                    text-center
                    shadow-[0_8px_25px_rgba(118,21,60,0.06)]
                  "
                >

                  <p
                    className="
                      text-[#76153C]
                      font-bold
                      text-sm
                    "
                  >

                    Trusted

                  </p>

                  <p
                    className="
                      text-xs
                      text-[#6B4A55]
                      mt-1
                    "
                  >

                    Dealers

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BLOGS */}
        <div className="mt-10">

          <FourBlogs />

        </div>

      </div>

    </main>

  );

}