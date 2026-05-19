// components/DelhiRealEstateFAQ.jsx

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DelhiRealEstateFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
  {
    question: "How do I find the best property dealer in Delhi?",
    answer:
      "Finding the best property dealer in Delhi starts with choosing a verified and experienced professional who has deep knowledge of your preferred locality. PropertyDealerInDelhi.com helps users connect with trusted real estate agents and property brokers across South, North, East, West, and Central Delhi. You can browse locality-wise dealer listings, explore agent profiles, and request a free consultation based on your property requirement. Always verify the dealer’s RERA registration, local experience, and past transaction history before making any real estate decision.",
  },

  {
    question:
      "What is the difference between a property dealer, real estate agent, and property broker in Delhi?",
    answer:
      "In Delhi’s real estate market, these terms are often used interchangeably, but there are small differences. A property dealer usually operates within a specific locality and assists in property buying, selling, and rental transactions. A real estate agent is generally a licensed professional registered under RERA who legally represents buyers or sellers during transactions. A property broker may handle larger-scale deals including commercial real estate across multiple areas. On PropertyDealerInDelhi.com, all listed professionals are verified intermediaries helping clients transact safely and transparently.",
  },

  {
    question:
      "What are the best localities to buy property in Delhi in 2026?",
    answer:
      "The best localities to buy property in Delhi in 2026 depend on your investment goals and budget. Premium locations such as Greater Kailash, Defence Colony, Hauz Khas, and Vasant Vihar remain highly desirable for luxury buyers. Mid-budget investors often prefer Dwarka, Rohini, and Pitampura due to excellent infrastructure and metro connectivity. Affordable housing and rental demand are strong in East Delhi localities like Mayur Vihar, Preet Vihar, and Kondli. Commercial investors also continue to prefer Central Delhi areas such as Karol Bagh and Patel Nagar.",
  },

  {
    question: "How much does a property broker charge in Delhi?",
    answer:
      "In Delhi, property brokers generally charge a brokerage fee between 1% and 2% of the total transaction value for buying or selling property. For rental transactions, the standard brokerage is usually equal to one month’s rent, though this may vary depending on the property type and locality. Some brokers may split rental brokerage between landlord and tenant. It is always advisable to confirm brokerage terms in writing before finalizing any property transaction.",
  },

  {
    question:
      "Is it safe to buy property in Delhi through an online property dealer directory?",
    answer:
      "Yes, using a verified online property dealer directory such as PropertyDealerInDelhi.com is considered a safe and convenient way to connect with trusted real estate professionals. The platform lists experienced property dealers and brokers with local expertise and transparent business practices. However, buyers should still verify property ownership documents, check project RERA registration, confirm there are no legal disputes, and consult a qualified property lawyer before making payments or signing agreements.",
  },

  {
    question: "What documents are required to buy a property in Delhi?",
    answer:
      "To purchase property in Delhi, buyers generally require documents such as the Sale Deed, Agreement to Sell, Title Deed history, Encumbrance Certificate, latest Property Tax receipts, approved building plans, completion certificate, and NOC from the housing society or RWA if applicable. Buyers and sellers must also provide Aadhaar Card, PAN Card, and registration-related documents. Your property dealer or legal advisor can assist in verifying and preparing all required paperwork before the final transaction.",
  },

  {
    question:
      "How does PropertyDealerInDelhi.com help me find a property dealer near me?",
    answer:
      "PropertyDealerInDelhi.com provides a locality-specific property dealer directory covering more than 200 neighborhoods across Delhi. Users can browse dealers based on zones including South, North, East, West, and Central Delhi. By selecting a locality page and submitting a free consultation request with contact details and property requirements, users can quickly connect with verified real estate agents and brokers operating nearby. The platform helps simplify the process of finding experienced property professionals in your target location.",
  },
];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-5 px-4 bg-red-50">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          {/* <span className="inline-block bg-red-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
            Delhi Real Estate FAQs
          </span> */}

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-6 leading-tight">
            Delhi Real Estate Market Overview
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Explore frequently asked questions about Delhi’s real estate market,
            investment opportunities, rental trends, and premium property locations.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-red-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-7 py-6 cursor-pointer"
              >
                <div className="flex items-center gap-5">

                  {/* ICON */}
                  <div className="min-w-[55px] h-[55px] rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold shadow-md">
                    ?
                  </div>

                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  className={`w-7 h-7 text-red-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ANSWER */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-7 pb-7 pl-[95px]">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
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