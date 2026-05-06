"use client";

import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-[#FFF8FA] via-white to-[#FFF3F7] overflow-hidden">

      {/* ===== HERO HEADER ===== */}
      <div className="bg-gradient-to-r from-[#76153C] via-[#5A0E24] to-[#8B1E4D] text-white py-12 relative overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              bg-white/10
              border border-white/20
              text-pink-100
              text-sm
              font-medium
              mb-6
            "
          >

            <div className="w-2 h-2 rounded-full bg-pink-300" />

            KNOW ABOUT US

          </div>

          <h1
            className="
              text-4xl md:text-4xl
              font-bold
              leading-tight
              mb-6
            "
          >

            We Don’t Sell Properties

            <span className="block text-pink-200 mt-2">
              We Build Trust
            </span>

          </h1>

          <p
            className="
              text-white/80
              max-w-2xl
              mx-auto
              text-lg
              leading-8
            "
          >

            A smart real estate platform connecting
            genuine buyers with verified dealers
            across India.

          </p>

        </div>

      </div>
      {/* BREADCRUMB */}
      <Breadcrumb
  className="
    max-w-6xl
    mx-auto
    px-3
    pt-6
    pb-2
  "
  items={[
    {
      label: "About Us",
    },
  ]}
/>
      {/* ===== PLATFORM HIGHLIGHTS ===== */}
      <div className="py-8">

        <div className="max-w-6xl mx-auto px-4">

          <div className=" mb-14">

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

              Platform Features

            </div>

            <h2
              className="
                text-3xl md:text-5xl
                font-bold
                text-[#2A0E18]
              "
            >

              Platform Highlights

            </h2>

            <p
              className="
                text-gray-600
                max-w-2xl
                
                mt-5
                leading-8
              "
            >

              Everything you need for a smooth,
              secure and smart real estate experience.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {[
              {
                title: "Verified Dealers Only",
                desc: "Every dealer on our platform goes through a strict verification process before onboarding."
              },
              {
                title: "Genuine Listings",
                desc: "Only verified and updated property information with zero fake listings."
              },
              {
                title: "Smart Matching",
                desc: "Advanced filters to connect buyers with the right dealer and property."
              },
              {
                title: "End-to-End Support",
                desc: "From inquiry to paperwork, we help throughout the journey."
              },
              {
                title: "Local Expertise",
                desc: "Experienced local dealers with deep market understanding."
              },
              {
                title: "Transparent Process",
                desc: "Clear communication with no hidden charges or surprises."
              }
            ].map((item, i) => (

              <div
                key={i}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border border-[#F3D9E3]
                  bg-white/90
                  backdrop-blur-xl
                  p-8
                  shadow-[0_10px_35px_rgba(118,21,60,0.08)]
                  hover:-translate-y-2
                  hover:shadow-[0_18px_45px_rgba(118,21,60,0.14)]
                  transition-all
                  duration-300
                "
              >

                {/* GLOW */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#76153C]/5 blur-3xl rounded-full" />

                <div className="relative z-10">

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#76153C]
                      to-[#5A0E24]
                      text-white
                      flex items-center justify-center
                      text-xl
                      font-bold
                      shadow-md
                      mb-6
                    "
                  >

                    0{i + 1}

                  </div>

                  <h4
                    className="
                      text-xl
                      font-bold
                      text-[#2A0E18]
                      mb-4
                    "
                  >

                    {item.title}

                  </h4>

                  <p
                    className="
                      text-gray-600
                      leading-8
                    "
                  >

                    {item.desc}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ===== WHAT WE DO ===== */}
      <div className="py-8 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-14">

            <div
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                border border-[#F3D9E3]
                bg-[#FFF8FA]
                text-[#76153C]
                text-sm
                font-medium
                shadow-sm
                mb-5
              "
            >

              <div className="w-2 h-2 rounded-full bg-[#76153C]" />

              Real Estate Services

            </div>

            <h2
              className="
                text-3xl md:text-5xl
                font-bold
                text-[#2A0E18]
              "
            >

              What We Really Do

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Connect buyers with verified dealers",
              "Provide genuine property listings",
              "Guide through documentation",
              "Support price negotiation",
              "Market analysis assistance",
              "Property visits coordination",
              "After-sale support",
              "Transparent transactions"
            ].map((text, i) => (

              <div
                key={i}
                className="
                  rounded-3xl
                  border border-[#F3D9E3]
                  bg-gradient-to-br
                  from-[#FFF8FA]
                  to-white
                  p-6
                  hover:bg-[#FFF0F5]
                  transition
                  shadow-sm
                "
              >

                <p className="text-gray-700 leading-7">

                  <span className="text-[#76153C] font-bold">
                    ✓
                  </span>{" "}

                  {text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ===== TRUST METRICS ===== */}
      <div className="bg-gradient-to-r from-[#76153C] via-[#5A0E24] to-[#8B1E4D] text-white py-8 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">

          <h2
            className="
              text-3xl md:text-5xl
              font-bold
              text-center
              mb-16
            "
          >

            Why Thousands Trust Us

          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            {[
              {
                number: "5000+",
                label: "Happy Customers"
              },
              {
                number: "2000+",
                label: "Successful Deals"
              },
              {
                number: "30+",
                label: "Cities Covered"
              }
            ].map((item, i) => (

              <div
                key={i}
                className="
                  rounded-[30px]
                  border border-white/10
                  bg-white/10
                  backdrop-blur-xl
                  p-10
                "
              >

                <h3 className="text-5xl font-bold text-white">

                  {item.number}

                </h3>

                <p className="mt-4 text-white/80 text-lg">

                  {item.label}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ===== WORK CULTURE ===== */}
      <div className="py-8">

        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-14">

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

              Work Ethics

            </div>

            <h2
              className="
                text-3xl md:text-5xl
                font-bold
                text-[#2A0E18]
              "
            >

              How We Work

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-7">

            {[
              {
                t: "Honesty First",
                d: "We never promote fake listings or misleading property deals."
              },
              {
                t: "Customer Above All",
                d: "Your requirements are always more important than commission."
              },
              {
                t: "Long Term Relations",
                d: "We focus on trust and relationships beyond one transaction."
              }
            ].map((item, i) => (

              <div
                key={i}
                className="
                  rounded-[30px]
                  border border-[#F3D9E3]
                  bg-white
                  p-8
                  shadow-[0_10px_35px_rgba(118,21,60,0.08)]
                "
              >

                <h4
                  className="
                    text-2xl
                    font-bold
                    mb-4
                    text-[#5A0E24]
                  "
                >

                  {item.t}

                </h4>

                <p className="text-gray-600 leading-8">

                  {item.d}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ===== CTA ===== */}
      <div className="py-8">

        <div className="max-w-5xl mx-auto px-4">

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              bg-gradient-to-r
              from-[#76153C]
              via-[#5A0E24]
              to-[#8B1E4D]
              text-white
              p-12 md:p-16
              text-center
              shadow-[0_20px_60px_rgba(118,21,60,0.22)]
            "
          >

            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full" />

            <div className="relative z-10">

              <h2
                className="
                  text-3xl md:text-5xl
                  font-bold
                  mb-5
                "
              >

                Ready to Start Your
                Property Journey?

              </h2>

              <p
                className="
                  text-white/80
                  max-w-2xl
                  mx-auto
                  leading-8
                  mb-10
                "
              >

                Connect with verified property dealers
                and discover the best property options
                tailored to your needs.

              </p>

              <div className="flex flex-wrap justify-center gap-4">

                <Link
                  href="/"
                  className="
                    px-8 py-4
                    rounded-2xl
                    bg-white
                    text-[#76153C]
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >

                  Explore Dealers

                </Link>

                <Link
                  href="/"
                  className="
                    px-8 py-4
                    rounded-2xl
                    border border-white/20
                    bg-white/10
                    text-white
                    font-semibold
                    hover:bg-white
                    hover:text-[#76153C]
                    transition
                  "
                >

                  Talk to Expert

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}