"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question:
      "What makes PropertyDealerInGurgaon.com different from other property portals?",
    answer:
      "Unlike generic property portals that list thousands of unverified listings, PropertyDealerInGurgaon.com focuses exclusively on connecting you with the best property dealers in Gurgaon who are local experts in their specific sectors and localities. Every real estate agent in Gurgaon listed here is known for transparent dealings, in-depth market knowledge, and end-to-end support — from property search to registration.",
  },
  {
    question:
      "Can I find a property broker in Gurgaon for both residential and commercial properties?",
    answer:
      "Yes, absolutely. Our network includes property brokers in Gurgaon who specialise in residential properties (flats, villas, plots, builder floors) as well as commercial properties (offices, retail spaces, warehouses). Whether you are a home buyer, investor, or business owner, you will find the right real estate broker in Gurgaon through our platform.",
  },
  {
    question:
      "Is it free to contact a property dealer or real estate agent in Gurgaon on this platform?",
    answer:
      "Yes, connecting with any property dealer in Gurgaon through our website is completely free for buyers, sellers, and tenants. Simply fill out the enquiry form with your requirement details and our expert team or the respective real estate agent will contact you promptly.",
  },
  {
    question:
      "Which are the best areas to buy property in Gurgaon right now?",
    answer:
      "Based on current market trends, the most in-demand areas for property investment in Gurgaon include Dwarka Expressway (Sectors 99–113), Golf Course Extension Road (Sectors 55–68), Sohna Road, DLF Phases 1–5, and New Gurgaon (Sectors 79–95). Each of these micro-markets has specific advantages in terms of price appreciation, infrastructure, and rental demand. Our best real estate agents in Gurgaon can help you identify the right locality based on your budget and goals.",
  },
  {
    question:
      "How do I sell my property quickly in Gurgaon at the best price?",
    answer:
      "Connect with our verified property brokers in Gurgaon who conduct a thorough Comparative Market Analysis (CMA) of your property, suggest the right listing price, market your property to qualified buyers, and negotiate on your behalf to ensure you achieve the best possible price in minimum time. Start by submitting your property details on our website.",
  },
  {
    question:
      "Are property dealers in Gurgaon RERA registered?",
    answer:
      "RERA (Real Estate Regulatory Authority) registration is mandatory for all property agents dealing in under-construction projects in Haryana. We strongly recommend working with RERA-compliant real estate brokers in Gurgaon for complete legal protection and transparency. Enquire about your preferred dealer's RERA number before proceeding with any transaction.",
  },
  {
    question:
      "Can I find property dealers sector-wise or locality-wise on this platform?",
    answer:
      "Yes! Our platform is specifically designed to help you find a property dealer in Gurgaon by specific locality or sector — from Sector 1 to Sector 114, DLF Phases, Sohna Road, Golf Course Road, Palam Vihar, Manesar and more. Simply browse the locality pages or use our contact form to mention your preferred area.",
  },
];

export default function GurgaonFaqSection() {
  const [openIndex, setOpenIndex] =
    useState(0);

  // ✅ FAQ SCHEMA
  const faqSchema = {
    "@context":
      "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* ✅ FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema
          ),
        }}
      />

      <section className="w-full bg-[#EFF6FF] py-5 px-4">
        <div className="max-w-6xl mx-auto">

          {/* TOP SECTION */}
          <div className="text-center mb-14">

            <div className="flex justify-center mb-5">
              <div
                className="
                  w-20
                  h-20
                  rounded-3xl
                  bg-gradient-to-br
                  from-[#1e40af]
                  via-[#2563eb]
                  to-[#172554]
                  flex
                  items-center
                  justify-center
                  shadow-[0_15px_40px_rgba(30,64,175,0.35)]
                "
              >
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2
              className="
                text-2xl
                md:text-4xl
                font-extrabold
                text-[#172554]
                leading-tight
              "
            >
              Gurgaon Real Estate FAQs
            </h2>

            <div
              className="
                w-36
                h-1.5
                rounded-full
                mx-auto
                mt-5
                bg-gradient-to-r
                from-[#1e40af]
                to-[#2563eb]
              "
            ></div>

            <p
              className="
                text-[#334155]
                text-base
                md:text-lg
                leading-8
                mt-6
                max-w-3xl
                mx-auto
                font-medium
              "
            >
              Find answers to the most common questions about
              property dealers, real estate investment, RERA,
              buying, selling, renting, and Gurgaon property
              market trends.
            </p>

          </div>

          {/* FAQ LIST */}
          <div className="space-y-6">
            {faqs.map(
              (faq, index) => {
                const isOpen =
                  openIndex === index;

                return (
                  <div
                    key={index}
                    className="
                      rounded-[28px]
                      overflow-hidden
                      border
                      border-[#bfdbfe]
                      bg-white
                      shadow-[0_12px_40px_rgba(30,64,175,0.10)]
                      transition-all
                      duration-300
                    "
                  >

                    {/* QUESTION */}
                    <button
                      onClick={() =>
                        setOpenIndex(
                          isOpen
                            ? null
                            : index
                        )
                      }
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        gap-4
                        text-left
                        px-6
                        md:px-8
                        py-6
                        hover:bg-[#f8fbff]
                        transition-all
                        duration-300
                      "
                    >
                      <h3
                        className="
                          text-lg
                          md:text-xl
                          font-bold
                          text-[#172554]
                          leading-8
                        "
                      >
                        Q{index + 1}.{" "}
                        {faq.question}
                      </h3>

                      <div
                        className={`
                          min-w-[48px]
                          min-h-[48px]
                          rounded-full
                          flex
                          items-center
                          justify-center
                          bg-gradient-to-br
                          from-[#1e40af]
                          via-[#2563eb]
                          to-[#172554]
                          text-white
                          shadow-lg
                          transition-transform
                          duration-300
                          ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    {/* ANSWER */}
                    <div
                      className={`
                        grid
                        transition-all
                        duration-500
                        ease-in-out
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">

                        <div
                          className="
                            px-6
                            md:px-8
                            pb-7
                            text-[#334155]
                            text-base
                            md:text-lg
                            leading-9
                            font-medium
                          "
                        >
                          {faq.answer}
                        </div>

                      </div>
                    </div>

                  </div>
                );
              }
            )}
          </div>

        </div>
      </section>
    </>
  );
}