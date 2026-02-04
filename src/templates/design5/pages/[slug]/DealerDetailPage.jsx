"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function DealerDetailPage() {
  const { slug } = useParams();

  const [openFaq, setOpenFaq] = useState(null);
  const searchParams = useSearchParams();

  const dealerName = searchParams.get("name") || "Trusted Dealer";
  const dealerCity = searchParams.get("city") || "Your City";

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-4xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="mb-10 bg-white rounded-2xl p-6 border border-red-200 shadow-sm">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <span className="inline-block bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full mb-2 border border-red-300">
                Verified Property Dealer
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
                {dealerName}
              </h1>

              <p className="text-base text-black/70 mt-1">
                {dealerCity}, Haryana
              </p>
            </div>

            {/* <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-red-50 text-red-600 text-sm rounded-md border border-red-300">
                ✔ Trusted & Verified
              </span>
            </div> */}

          </div>
        </div>

        {/* INTRODUCTION */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Introduction
          </h2>

          <p className="text-black/80 leading-7">
            Finding the right property can be a complex and time-consuming process. 
            Whether you're buying, selling, or renting, having a professional by your side 
            can make all the difference. <b>{dealerName}</b> specializes in guiding 
            clients through every step of their real estate journey in {dealerCity}. 
            Our goal is to simplify the process, ensure transparency, and help you make informed decisions.
          </p>
        </div>

        {/* FEATURES */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Benefits of Working with a Professional Agent
          </h2>

          <p className="text-black/80 leading-7">
            A real estate agent serves as a bridge between property buyers and sellers. 
            Their in-depth knowledge of the local market, legal procedures, and negotiation strategies 
            provides significant advantages. A trusted agent can save time, reduce stress, and help you 
            achieve the best possible deal.
          </p>
        </div>

        {/* CONSIDERATIONS */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Things to Consider Before Hiring an Agent in {dealerCity}
          </h2>

          <p className="text-black/80 leading-7">
            Before choosing an estate agent in {dealerCity}, evaluate their licensing, experience, 
            client reviews, and market knowledge. Always compare commission structures and ensure the agent 
            understands neighborhood trends and property valuation.
          </p>
        </div>

        {/* DOS AND DONTS */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Dos and Don’ts While Hiring an Agent
          </h2>

          <p className="text-black/80 leading-7">
            Do ask for references and check past client experiences. Don’t rely only on advertisements. 
            Interview multiple agents and avoid those who promise unrealistic returns or act overly pushy.
          </p>
        </div>

        {/* WHY CHOOSE */}
        <div className="bg-red-50 rounded-2xl p-6 mb-10 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Why Choose {dealerName}?
          </h2>

          <p className="text-black/80 leading-7">
            At <b>{dealerName}</b>, we combine local expertise with personalized service to offer unmatched 
            real estate solutions in {dealerCity}. We believe in trust, integrity, and results-driven service. 
            Our mission is to help you find the right property with minimal hassle and maximum satisfaction.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-white rounded-2xl p-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How do I know if a real estate agent is licensed?",
                a: "You can request the agent to provide their license or registration certificate. Many regions allow you to verify credentials online through official portals."
              },
              {
                q: `What are the typical commission charges in ${dealerCity}?`,
                a: "Commission rates generally range between 1% to 2% for residential deals. Always clarify charges in advance."
              },
              {
                q: "Can I work with more than one agent at the same time?",
                a: "Yes, unless you have signed an exclusive agreement with one agent."
              },
              {
                q: `How long does it usually take to sell a property in ${dealerCity}?`,
                a: "It depends on location, pricing, and demand. Proper pricing can speed up the process."
              },
              {
                q: "Do agents help with legal documentation?",
                a: "Yes, most professional agents assist with paperwork and legal formalities."
              }
            ].map((item, index) => (
              <div key={index} className="border border-red-200 rounded-xl p-3">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left font-medium text-black flex justify-between items-center"
                >
                  <span>{item.q}</span>
                  <span className="text-red-600 font-bold text-xl">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="mt-2 text-black/80">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
