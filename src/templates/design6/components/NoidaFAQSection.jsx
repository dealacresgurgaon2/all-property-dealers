"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "How do I find the best property dealer in Noida for my requirements?",
    answer:
      "Finding the best property dealer in Noida is easy with our platform. Simply browse our verified directory of real estate agents and brokers in Noida filtered by locality, property type, and budget. Each listed dealer is verified and rated by actual clients. You can also submit your requirement via our enquiry form and our team will connect you with the most suitable property consultant for your needs — whether you are buying, selling, or renting.",
  },
  {
    question:
      "What is the difference between a property broker and a real estate agent in Noida?",
    answer:
      "In the Indian real estate context, a property broker in Noida and a real estate agent in Noida typically perform the same function — they facilitate property transactions between buyers and sellers or landlords and tenants. A broker may operate an independent firm and employ agents, while an agent may work under a broker. Both are regulated under RERA (Real Estate Regulatory Authority) when working on RERA-registered projects. Our platform lists both verified brokers and agents to give you the widest choice.",
  },
  {
    question:
      "Which are the best sectors in Noida to buy property in 2026?",
    answer:
      "The best sectors in Noida for property investment in 2026 include Sector 150, 128, 144, and 145 on the Noida Expressway for premium and luxury buyers; Sectors 62, 63, and 75 for mid-segment buyers seeking IT hub proximity; and Sectors 50, 51, and 52 near the Aqua Metro Line for connectivity-focused buyers. For maximum capital appreciation, sectors in the Jewar Airport corridor — Sectors 151, 168, and Greater Noida West — are attracting significant investor interest in 2026.",
  },
  {
    question:
      "What documents should I check before buying property in Noida?",
    answer:
      "Before buying property in Noida, ensure you verify: (1) RERA registration certificate, (2) Title deed and ownership history, (3) Encumbrance certificate, (4) Building plan approval from the Noida Authority, (5) Completion/Occupancy certificate for ready-to-move properties, (6) Allotment letter and builder-buyer agreement, and (7) Latest property tax receipts. Our expert real estate brokers in Noida provide comprehensive legal due diligence support to ensure every document is verified before you make your purchase.",
  },
  {
    question:
      "How much brokerage does a property dealer in Noida typically charge?",
    answer:
      "Brokerage charges for property transactions in Noida typically range from 1% to 2% of the total transaction value for buying or selling residential properties. For rental agreements, the brokerage is usually equivalent to one month's rent, split between the landlord and the tenant. Commercial property brokerage may vary based on deal size and complexity. We always recommend clarifying brokerage terms upfront with your property broker in Noida before proceeding with any transaction to ensure complete transparency.",
  },
  {
    question: "Can I buy property in Noida as an NRI?",
    answer:
      "Yes, Non-Resident Indians (NRIs) can purchase residential and commercial properties in Noida under the provisions of FEMA (Foreign Exchange Management Act) and RBI guidelines. NRIs can buy apartments, villas, and commercial properties but generally cannot purchase agricultural land or plantation properties. Our best real estate agents in Noida have dedicated NRI advisory services that cover property identification, legal due diligence, fund remittance procedures, and power of attorney arrangements to ensure a seamless buying experience from abroad.",
  },
  {
    question:
      "How do I verify if a property dealer in Noida is genuine?",
    answer:
      "To verify a property dealer in Noida, check their RERA registration on the UP RERA portal (up-rera.in), ask for references from past clients, verify their office address and business registration, and check online reviews and ratings. On our platform, all listed real estate agents and brokers in Noida are pre-verified, rated, and reviewed by actual clients, giving you confidence in choosing the right professional. We recommend always meeting the dealer in person before committing to any transaction.",
  },
];

export default function NoidaFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
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
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="w-full bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#bbf7d0] py-5 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            {/* <span className="inline-block px-5 py-2 rounded-full bg-green-100 border border-green-300 text-green-700 text-sm font-semibold tracking-wide shadow-sm">
              Frequently Asked Questions
            </span> */}

            <h2 className="text-2xl md:text-4xl font-bold text-green-900 mt-5 leading-tight">
              Property Dealer in Noida – FAQs
            </h2>

            <p className="text-green-800 mt-5 text-base md:text-lg max-w-3xl mx-auto leading-8">
              Find answers to the most common questions related to buying,
              selling, renting, brokerage charges, legal documents, and choosing
              the best real estate agents in Noida.
            </p>
          </div>

          {/* FAQ Cards */}
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-green-600 shadow-[0_15px_50px_rgba(22,163,74,0.18)]"
                      : "bg-white/80 border-green-100 hover:border-green-300 hover:bg-white"
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-5 px-6 md:px-8 py-6 text-left"
                  >
                    <h3
                      className={`text-base md:text-lg font-semibold leading-7 transition-all ${
                        isOpen
                          ? "text-green-900"
                          : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    <div
                      className={`min-w-[48px] min-h-[48px] rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-green-600 text-white rotate-180"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      <ChevronDown size={22} />
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-7 text-[15px] md:text-base leading-8 text-gray-700">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Badge */}
          {/* <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-3 bg-white border border-green-200 rounded-full px-6 py-3 shadow-md">
              <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse" />

              <p className="text-green-800 text-sm md:text-base font-medium">
                Verified Property Dealers • Trusted Advisors • RERA Guidance
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}