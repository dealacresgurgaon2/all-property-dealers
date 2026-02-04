"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function DealerDetailPage() {
  const { slug } = useParams();

  const [openFaq, setOpenFaq] = useState(null);
  const searchParams = useSearchParams();
  const dealerName = searchParams.get("name");
  const dealerCity = searchParams.get("city");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-4xl mx-auto px-4">

        {/* ================= PROFESSIONAL HEADER ================= */}
        <div className="mb-10 border-b border-gray-200 pb-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* LEFT SIDE */}
            <div>
              <span className="inline-block bg-[#ff7a1a]/10 text-[#ff7a1a] text-xs px-3 py-1 rounded-full mb-2">
                Verified Property Dealer
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
                {dealerName}
              </h1>

              <p className="text-base text-gray-500 mt-1">
                {dealerCity}, Haryana
              </p>
            </div>

            {/* RIGHT SIDE TAG */}
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-[#ff7a1a]/10 text-[#ff7a1a] text-sm rounded-md border border-[#ff7a1a]/20">
                ✔ Trusted & Verified
              </span>
            </div>

          </div>

        </div>

        {/* INTRODUCTION */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Introduction
        </h2>

        <p className="text-gray-600 leading-7 mb-8">
          Finding the right property can be a complex and time-consuming process. 
          Whether you are buying, selling, or renting, having a professional by your side 
          can make all the difference. {dealerName}, we specialize in guiding 
          clients through every step of their real estate journey in {dealerCity}. Our goal is to simplify 
          the process, ensure transparency, and help you make informed decisions.
        </p>

        {/* FEATURES */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Features of a Real Estate Agent and Their Benefits
        </h2>

        <p className="text-gray-600 leading-7 mb-8">
          A real estate agent serves as a bridge between property buyers and sellers. 
          Their in-depth knowledge of the local market, legal procedures, and negotiation strategies 
          provides significant advantages. Key features of a good agent include market expertise, 
          access to exclusive listings, strong communication skills, and legal knowledge. 
          Working with a trusted agent can save time, reduce stress, and often result in better 
          financial outcomes.
        </p>

        {/* THINGS TO CONSIDER */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Things to Consider Before Hiring an Estate Agent in {dealerCity}
        </h2>

        <p className="text-gray-600 leading-7 mb-8">
          Before choosing an estate agent in {dealerCity}, it’s important to evaluate a few key aspects. 
          Check their licensing and professional certifications, ask about their experience in the local market, 
          and look at recent client reviews or testimonials. It is also useful to compare commission rates and 
          understand the scope of services they offer.
        </p>

        {/* DOS AND DONTS */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Dos and Don’ts While Hiring a Real Estate Agent in {dealerCity}
        </h2>

        <p className="text-gray-600 leading-7 mb-8">
          Do ask for references and speak directly with past clients to understand their experiences. 
          Don’t rely solely on advertisements or promotional content. Don’t rush the decision—interview 
          multiple agents before making your final choice.
        </p>

        {/* TIPS */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Tips and Tricks Before Hiring a Property Agent in {dealerCity}
        </h2>

        <p className="text-gray-600 leading-7 mb-8">
          Always verify the agent’s credentials and cross-check their track record. 
          Be clear about your needs and budget from the beginning, and choose someone who listens carefully and provides honest guidance.
        </p>

        {/* WHY CHOOSE US */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Why Choose {dealerName}:
        </h2>

        <p className="text-gray-600 leading-7 mb-10">
          At {dealerName}, we combine local expertise with personalized service to offer unmatched 
          real estate solutions in {dealerCity}. We believe in building long-term relationships based on trust, integrity, 
          and results.
        </p>

        {/* FAQ SECTION */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "How do I know if a real estate agent is licensed?",
              a: "You can request the agent to provide their license or registration certificate issued by a government-approved authority.",
            },
            {
              q: `What are the typical commission charges in ${dealerCity}?`,
              a: "Commission rates vary but generally range between 1% to 2% depending on the property type.",
            },
            {
              q: "Can I work with more than one agent at the same time?",
              a: "Yes, unless you've signed an exclusive agreement with one agent.",
            },
            {
              q: `How long does it usually take to sell a property in ${dealerCity}?`,
              a: `It can take from a few weeks to a few months depending on market conditions.`,
            },
            {
              q: "Do agents help with legal documentation?",
              a: "Yes, most professional agents assist with documentation and registration.",
            },
            {
              q: "What if I’m not satisfied with my agent?",
              a: "You can discuss concerns or change the agent if no exclusive contract exists.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left font-medium text-gray-800 flex justify-between items-center"
              >
                {item.q}
                <span className="text-[#ff7a1a] text-lg font-bold">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>

              {openFaq === index && (
                <div className="mt-2 text-gray-600 leading-6">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
