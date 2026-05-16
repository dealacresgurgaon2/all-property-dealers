"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question:
      "Who is the best property dealer in Faridabad?",
    answer:
      "PropertyDealerInFaridabad.com connects you with Faridabad's top-rated and verified property dealers who specialise in buying, selling, and renting residential and commercial properties across all sectors and colonies in Faridabad. Our registered real estate agents in Faridabad are RERA-aware, experienced, and committed to transparent dealings.",
  },
  {
    question:
      "What areas do your property brokers in Faridabad cover?",
    answer:
      "Our network of property brokers in Faridabad covers the entire city — from NIT Faridabad (Sectors 1–20), Old Faridabad sectors (21–50), colonies like Ashoka Enclave, Sainik Colony, Greenfield Colony, Jawahar Colony, and Charmwood Village, to all of Greater Faridabad / Neharpar (Sectors 55–90). Whether you need a property dealer in Sector 84 or a real estate agent in Neharpar, we have local experts ready to help.",
  },
  {
    question:
      "How do I find a reliable real estate agent in Faridabad?",
    answer:
      "You can browse our verified listings of real estate agents in Faridabad directly on this website. Each real estate broker in Faridabad on our platform is vetted for experience, locality expertise, and past transaction records. Simply fill in the free consultation form or call us directly to get matched with the right agent for your requirement.",
  },
  {
    question:
      "What types of properties can I buy or rent through your platform?",
    answer:
      "Through our platform, you can buy, sell, or rent a wide range of properties in Faridabad, including residential plots, independent houses, builder floors, 2BHK and 3BHK flats, high-rise apartments, commercial shops, and office spaces. Our real estate brokers in Faridabad handle both affordable housing and premium/luxury properties.",
  },
  {
    question:
      "Is it safe to buy property in Faridabad right now?",
    answer:
      "Yes, Faridabad is considered one of the safer bets in NCR for property investment. With improving metro connectivity (Violet Line), highway upgrades, Smart City projects, and rising demand in Greater Faridabad's Neharpar zone, property values have shown consistent appreciation. Our best real estate agents in Faridabad will guide you with accurate market data before you make a decision.",
  },
  {
    question:
      "What is the average property price in Faridabad?",
    answer:
      "Property prices in Faridabad vary by locality and type. Affordable residential plots in sectors like 84, 85, 86, and 87 (Greater Faridabad) start from around ₹20–30 lakh. Builder floors in established sectors like 15, 16, and 21 range from ₹50 lakh to ₹1.2 crore. Premium properties in Ashoka Enclave and Charmwood Village can go above ₹2 crore. Contact our property dealer in Faridabad to get the latest pricing for your preferred location.",
  },
  {
    question:
      "Do you charge any fee for connecting with a property broker in Faridabad?",
    answer:
      "Browsing our platform and submitting an enquiry is completely free for buyers, sellers, and tenants. The standard brokerage fee is as per market norms and is discussed transparently before any transaction. We believe in zero hidden charges — our property broker in Faridabad works with full disclosure at every step.",
  },
];

export default function FaridabadFaq() {
  const [openIndex, setOpenIndex] =
    useState(0);

  // FAQ SCHEMA
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
      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema
          ),
        }}
      />

      <section className="w-full bg-[#FFF8E1] py-6 px-4">
        <div className="max-w-7xl mx-auto">

          {/* TOP HEADING */}
          <div className=" mb-12">
            {/* <div className="flex justify-center mb-4">
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#d4af37]
                  to-[#8B6B10]
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <HelpCircle className="text-white w-8 h-8" />
              </div>
            </div> */}

            <h2
              className="
                text-2xl
                md:text-4xl
                font-extrabold
                text-[#5c4300]
                leading-tight
              "
            >
              Frequently Asked Questions
            </h2>

            <div
              className="
                w-32
                h-1.5
                bg-gradient-to-r
                from-[#d4af37]
                to-[#8B6B10]
                rounded-full
                
                mt-5
              "
            ></div>

            <p
              className="
                text-[#7b5a00]
                text-base
                md:text-lg
                mt-5
                max-w-3xl
                
                leading-8
                font-medium
              "
            >
              Get answers to the most common
              questions about property
              dealers, real estate agents,
              investment opportunities, and
              property prices in Faridabad.
            </p>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-2">
            {faqs.map(
              (faq, index) => {
                const isOpen =
                  openIndex === index;

                return (
                  <div
                    key={index}
                    className="
                      rounded-3xl
                      overflow-hidden
                      border
                      border-[#e7c96a]
                      bg-white/80
                      backdrop-blur-xl
                      shadow-[0_10px_40px_rgba(212,175,55,0.15)]
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
                        hover:bg-[#fff6d6]
                        transition-all
                        duration-300
                      "
                    >
                      <h3
                        className="
                          text-lg
                          md:text-xl
                          font-bold
                          text-[#4d3900]
                          leading-8
                        "
                      >
                        Q{index + 1}.{" "}
                        {faq.question}
                      </h3>

                      <div
                        className={`
                          min-w-[46px]
                          min-h-[46px]
                          rounded-full
                          flex
                          items-center
                          justify-center
                          bg-gradient-to-br
                          from-[#d4af37]
                          to-[#8B6B10]
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
                            text-[#6b5600]
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