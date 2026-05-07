"use client";

import Image from "next/image";
import QueryForm from "@/templates/design8/components/QueryForm";
import Breadcrumb from "@/templates/design8/components/Breadcrumb";
export default function ContactHaryana() {

  return (

    <>

      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative
          overflow-hidden
          py-6
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
    px-4
    py-5
  "
  items={[
    {
      label:
        "Contact Us",
    },
  ]}
/>
        {/* BG GLOW */}
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#76153C]/10 rounded-full blur-[120px]" />

        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-[#5A0E24]/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">

          {/* TOP CONTENT */}
          <div className="mb-10 ">

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

              Trusted Property Consultation

            </div>

            {/* TITLE */}
            <h2
              className="
                text-3xl md:text-5xl
                font-bold
                text-[#2A0E18]
                leading-tight
              "
            >

              Connect With{" "}

              <span className="text-[#76153C]">
                Trusted
              </span>{" "}

              Property Dealers
              <br />

              in Haryana

            </h2>

            {/* DESC */}
            <p
              className="
                text-gray-600
                max-w-3xl
                
                mt-6
                text-lg
                leading-8
              "
            >

              Buy, sell or rent with confidence.
              Connect directly with verified
              property dealers across Haryana
              through a fast, transparent and
              secure platform.

            </p>

          </div>

          {/* IMAGE + FORM */}
          <div
            className="
              grid
              grid-cols-1 md:grid-cols-2
              gap-12 lg:gap-20
              items-center
            "
          >

            {/* LEFT IMAGE */}
            <div className="group">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[40px]
                  border border-[#F3D9E3]
                  shadow-[0_20px_60px_rgba(118,21,60,0.16)]
                "
              >

                {/* IMAGE */}
                <div className="relative w-full h-[560px]">

                  <Image
                    src="/images/ghj.png"
                    alt="Haryana Property Dealers"
                    fill
                    className="
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-700
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                </div>

                {/* CONTENT */}
                <div
                  className="
                    absolute
                    bottom-0 left-0
                    p-8 md:p-10
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
                      text-sm
                      font-medium
                      backdrop-blur-xl
                      mb-5
                    "
                  >

                    <div className="w-2 h-2 rounded-full bg-white" />

                    Premium Dealer Network

                  </div>

                  <h4
                    className="
                      text-2xl md:text-3xl
                      font-bold
                      mb-4
                    "
                  >

                    Haryana Property Experts

                  </h4>

                  <p
                    className="
                      text-white/85
                      leading-7
                      max-w-md
                    "
                  >

                    Verified property dealers across
                    major Haryana cities with transparent
                    communication and trusted deals.

                  </p>

                </div>

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

        </div>

      </section>

      {/* ================= MAP SECTION ================= */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#FFF8FA]
          via-white
          to-[#FFF3F7]
          pb-16
        "
      >

        <div className="max-w-7xl mx-auto px-4">

          {/* TITLE */}
          <div className="text-center mb-10">

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

              Haryana Coverage

            </div>

            <h3
              className="
                text-3xl md:text-5xl
                font-bold
                text-[#2A0E18]
              "
            >

              Property Network Across Haryana

            </h3>

            <p
              className="
                text-gray-600
                max-w-2xl
                mx-auto
                mt-5
                leading-8
              "
            >

              Explore trusted real estate consultants
              and verified property dealers throughout Haryana.

            </p>

          </div>

          {/* MAP */}
          <div
            className="
              overflow-hidden
              rounded-[40px]
              border border-[#F3D9E3]
              bg-white
              shadow-[0_20px_60px_rgba(118,21,60,0.12)]
            "
          >

            <div className="w-full h-[620px]">

              <iframe
                src="https://www.google.com/maps?q=Haryana,India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Haryana Location Map"
              />

            </div>

          </div>

        </div>

      </section>

    </>

  );
}