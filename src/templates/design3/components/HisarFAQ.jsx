"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I find the best property dealer in Hisar?",
    answer:
      "The easiest way is to use PropertyDealerInHisar.com, where you can browse verified, experienced property dealers across all Hisar localities — from Model Town and Defence Colony to Sector 13 and Urban Estate. Each listed dealer has been reviewed for reliability so you deal with confidence. You can also submit a free query and our team will match you with the right real estate agent in Hisar based on your exact requirement.",
  },

  {
    question:
      "What is the difference between a property dealer, a real estate agent, and a property broker in Hisar?",
    answer:
      "In everyday usage these terms overlap, but there are subtle differences. A property dealer in Hisar typically facilitates transactions for plots, homes, and commercial spaces in a local area. A real estate agent in Hisar is a licensed professional who represents buyers or sellers. A property broker in Hisar or real estate broker in Hisar often operates at a larger scale, managing multiple agents and handling bigger portfolios. On our platform you will find all three types of professionals to match your specific need.",
  },

  {
    question:
      "What types of properties can I buy or rent through this platform?",
    answer:
      "Our network of property dealers in Hisar covers a wide range — residential plots, independent houses, builder floors, flats, agricultural land, commercial shops, showrooms, office spaces, and industrial plots. Whether you are looking to buy your first home, invest in a plot, or rent a commercial space near Red Square Market or Sector 14, our brokers in Hisar can help you find the right property at the right price.",
  },

  {
    question: "Is it safe to buy property in Hisar right now?",
    answer:
      "Yes. Hisar's real estate market is growing steadily driven by infrastructure projects like the Hisar international airport, improved road connectivity on NH-9, and a strong industrial base. Property prices in key localities have seen consistent appreciation. However, as with any market, always verify ownership documents, check RERA registration, and work with a trusted real estate agent in Hisar or a qualified property broker in Hisar to avoid fraudulent transactions.",
  },

  {
    question:
      "Which areas in Hisar are best for residential investment?",
    answer:
      "The best residential investment zones in Hisar include Sector 13, Sector 14, Sector 15, Model Town, Defence Colony, Urban Estate Phase II, and Professor Colony for premium housing. For budget-friendly options, Navdeep Colony, Shanti Nagar, and Mirzapur Road offer great value. Our property brokers in Hisar can provide area-specific advice and current price trends before you make any decision.",
  },

  {
    question:
      "How much does a property dealer or real estate agent in Hisar charge?",
    answer:
      "The standard brokerage fee charged by a property dealer or real estate broker in Hisar is typically 1% to 2% of the total deal value for sale transactions, and one month's rent for rental agreements. This may vary slightly by agent and property type. At PropertyDealerInHisar.com, your initial consultation is completely free — you only pay if a deal is successfully completed.",
  },

  {
    question:
      "How do I get started with PropertyDealerInHisar.com?",
    answer:
      "Getting started is simple. Visit our website, choose whether you want to buy, sell, or rent a property, and submit your contact details along with a brief message about your requirement. One of our verified real estate agents or property brokers in Hisar will reach out to you promptly. You can also browse locality-specific dealer listings — from Tosham Road to Lajpat Nagar — and contact the right expert directly for your area.",
  },
];

export default function HisarFAQ() {

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {

    setActiveIndex(activeIndex === index ? null : index);

  };

  return (

    <section className="w-full bg-[#EEF1FF] px-4 py-5">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className=" mb-14">

          <h2
            className="
              text-2xl
              md:text-4xl
              font-extrabold
              text-[#0E21A0]
              leading-tight
            "
          >
            Frequently Asked Questions
          </h2>

          <div
            className="
              w-28
              h-1.5
              rounded-full
              bg-gradient-to-r
              from-[#5E23DC]
              to-[#0E21A0]
              
              mt-5
            "
          ></div>

          <p
            className="
              text-gray-600
              text-base
              md:text-lg
              mt-6
              max-w-3xl
              
            "
          >
            Everything you need to know about property dealers,
            brokers, investments, rentals, and real estate services in Hisar.
          </p>

        </div>

        {/* FAQ */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                shadow-md
                border
                border-[#E5E7FF]
                overflow-hidden
                transition-all
                duration-300
              "
            >

              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  text-left
                  px-6
                  py-5
                  md:px-8
                  md:py-6
                "
              >

                <h3
                  className="
                    text-base
                    md:text-xl
                    font-bold
                    text-[#111827]
                    pr-4
                  "
                >
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`
                    min-w-[24px]
                    transition-transform
                    duration-300
                    text-[#5E23DC]
                    ${
                      activeIndex === index
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>

              {/* ANSWER */}
              <div
                className={`
                  grid
                  transition-all
                  duration-300
                  ease-in-out
                  ${
                    activeIndex === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }
                `}
              >

                <div className="overflow-hidden">

                  <div
                    className="
                      px-6
                      pb-6
                      md:px-8
                      md:pb-8
                      text-gray-900
                      leading-8
                      text-base
                      
                    "
                  >
                    {faq.answer}
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}