"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function DealerDetailPage() {

  const API_BASE =
    process.env.NEXT_PUBLIC_API_URL;

  const params = useParams();

  const cityParam =
    params?.city;

  const slugParam =
    params?.slug;

  const [dealer, setDealer] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [openFaq, setOpenFaq] =
    useState(null);

  const toggleFaq = (index) => {

    setOpenFaq(
      openFaq === index
        ? null
        : index
    );

  };

  const formatCityForAPI = (
    city = ""
  ) => {

    return city
      .replace(/-/g, " ")
      .replace(
        /\b\w/g,
        (l) => l.toUpperCase()
      );

  };

  useEffect(() => {

    if (
      !cityParam ||
      !slugParam
    ) return;

    const fetchDealer =
      async () => {

        try {

          setLoading(true);

          const formattedCity =
            formatCityForAPI(
              cityParam
            );

          const res =
            await fetch(
              `${API_BASE}/api/get/city/${formattedCity}`
            );

          const data =
            await res.json();

          if (data.success) {

            const found =
              data.data.find(
                (d) =>
                  d.slug ===
                  slugParam
              );

            setDealer(
              found || null
            );

          }

        } catch (err) {

          console.log(
            "Dealer detail error:",
            err
          );

        } finally {

          setLoading(false);

        }

      };

    fetchDealer();

  }, [cityParam, slugParam]);

  /* LOADING */

  if (loading) {

    return (

      <div
        className="
          min-h-[60vh]
          flex
          items-center
          justify-center
          bg-gradient-to-br
          from-[#FFF8FA]
          via-white
          to-[#FFF3F7]
        "
      >

        <div
          className="
            px-6 py-4
            rounded-2xl
            bg-white
            border border-[#F3D9E3]
            text-[#76153C]
            font-semibold
            shadow-[0_10px_35px_rgba(118,21,60,0.08)]
          "
        >

          Loading dealer details...

        </div>

      </div>

    );

  }

  /* NO DEALER */

  if (!dealer) {

    return (

      <div
        className="
          min-h-[60vh]
          flex
          items-center
          justify-center
          bg-gradient-to-br
          from-[#FFF8FA]
          via-white
          to-[#FFF3F7]
        "
      >

        <div
          className="
            text-[#76153C]
            text-lg
            font-semibold
          "
        >

          Dealer not found

        </div>

      </div>

    );

  }

  const faqs = [
    {
      q: `What is the best way for a property broker to aid in the purchase or sale of properties in ${dealer.city}?`,
      a: `A professional real estate agent in ${dealer.city} helps at every step of the process.`
    },
    {
      q: `Does ${dealer.name} deal in commercial real estate in ${dealer.city}?`,
      a: `Yes, commercial properties including offices and shops are handled professionally.`
    },
    {
      q: `Are rental services available through ${dealer.name}?`,
      a: `Yes, rental assistance for residential and commercial properties is available.`
    },
    {
      q: `Is legal and documentation support provided?`,
      a: `Yes, title verification and registration support are provided.`
    }
  ];

  return (

    <section
      className="
        py-14
        bg-gradient-to-br
        from-[#FFF8FA]
        via-white
        to-[#FFF3F7]
      "
    >

      <div className="max-w-5xl px-4">

        {/* HEADER */}
        <div
          className="
            mb-10
            rounded-[34px]
            border border-[#F3D9E3]
            bg-white/95
            backdrop-blur-xl
            p-7
            shadow-[0_12px_40px_rgba(118,21,60,0.08)]
          "
        >

          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4 py-2
              rounded-full
              bg-[#FFF0F5]
              border border-[#F3D9E3]
              text-[#76153C]
              text-sm
              font-medium
              mb-5
            "
          >

            <div className="w-2 h-2 rounded-full bg-[#76153C]" />

            Trusted Property Dealer

          </div>

          {/* TITLE */}
          <h1
            className="
              text-3xl md:text-4xl
              font-bold
              text-[#2A0E18]
              leading-tight
            "
          >

            {dealer.name} -
            Trusted Property Dealer
            in {dealer.city}

          </h1>

          {/* LOCATION */}
          <p
            className="
              text-[#6B4A55]
              mt-3
              text-base
            "
          >

            {dealer.city}, Haryana

          </p>

        </div>

        {/* CONTENT */}
        <div
          className="
            rounded-[34px]
            border border-[#F3D9E3]
            bg-white/95
            backdrop-blur-xl
            p-8
            mb-8
            shadow-[0_12px_40px_rgba(118,21,60,0.08)]
            text-[#4B3A42]
            leading-8
            space-y-6
          "
        >

          <p>

            {dealer.city} is one of the
            fastest growing real estate
            markets in Haryana with
            increasing demand for
            residential and commercial
            properties.

          </p>

          <p>

            {dealer.name} provides
            professional real estate
            services including buying,
            selling, rental assistance
            and investment consultation.

          </p>

          {/* HEADING */}
          <h2
            className="
              text-2xl
              font-bold
              text-[#76153C]
              border-l-4
              border-[#76153C]
              pl-4
            "
          >

            About {dealer.name}

          </h2>

          <p>

            Professional real estate
            solutions are provided with
            transparency, market
            understanding and complete
            documentation support.

          </p>

          {/* LIST */}
          <ul
            className="
              list-disc
              pl-6
              space-y-2
              marker:text-[#76153C]
            "
          >

            <li>
              Residential property
              assistance
            </li>

            <li>
              Commercial property
              consultation
            </li>

            <li>
              Rental property services
            </li>

            <li>
              Legal documentation
              support
            </li>

            <li>
              Site visit coordination
            </li>

          </ul>

          {/* HEADING */}
          <h2
            className="
              text-2xl
              font-bold
              text-[#76153C]
              border-l-4
              border-[#76153C]
              pl-4
            "
          >

            Why Choose {dealer.name}?

          </h2>

          <ul
            className="
              list-disc
              pl-6
              space-y-2
              marker:text-[#76153C]
            "
          >

            <li>
              Transparent property
              dealings
            </li>

            <li>
              Local market knowledge
            </li>

            <li>
              Verified property options
            </li>

            <li>
              Professional support
            </li>

            <li>
              Complete transaction
              guidance
            </li>

          </ul>

        </div>

        {/* FAQ */}
        <div
          className="
            rounded-[34px]
            border border-[#F3D9E3]
            bg-white/95
            backdrop-blur-xl
            p-8
            shadow-[0_12px_40px_rgba(118,21,60,0.08)]
          "
        >

          {/* FAQ TITLE */}
          <h2
            className="
              text-2xl
              font-bold
              text-[#76153C]
              mb-7
            "
          >

            Frequently Asked Questions

          </h2>

          {faqs.map(
            (faq, index) => (

              <div
                key={index}
                className="
                  mb-4
                  overflow-hidden
                  rounded-2xl
                  border border-[#F3D9E3]
                "
              >

                {/* BUTTON */}
                <button
                  onClick={() =>
                    toggleFaq(
                      index
                    )
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    px-5 py-4
                    bg-[#FFF0F5]
                    hover:bg-[#FFE7F0]
                    transition
                    text-left
                  "
                >

                  <span
                    className="
                      font-semibold
                      text-[#76153C]
                    "
                  >

                    {faq.q}

                  </span>

                  <span
                    className="
                      text-2xl
                      font-bold
                      text-[#76153C]
                    "
                  >

                    {openFaq ===
                    index
                      ? "−"
                      : "+"}

                  </span>

                </button>

                {/* ANSWER */}
                {openFaq ===
                  index && (

                    <div
                      className="
                        px-5 py-4
                        bg-white
                        border-t border-[#F3D9E3]
                        text-[#4B3A42]
                        leading-7
                      "
                    >

                      {faq.a}

                    </div>

                  )}

              </div>

            )
          )}

        </div>

      </div>

    </section>

  );

}