"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function DealerDetailPage() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);
  const searchParams = useSearchParams();

  const dealerName = searchParams.get("name") || "Trusted Dealer";
  const dealerCity = searchParams.get("city") || "Chandigarh";

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const card =
    "bg-white rounded-2xl p-6 border border-[#f3c6d1] shadow-md";

  return (
    <section className="relative py-14 overflow-hidden">

      {/* PREMIUM BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec]" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#D02752]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 space-y-6">

        {/* HEADER */}
        <div className={card}>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#8A244B]">
            {dealerName} – Trusted Property Dealer in {dealerCity}
          </h1>

          <p className="text-gray-500 mt-2">
            {dealerCity}, India
          </p>
        </div>

        {/* INTRO */}
        <div className={card}>
          <p className="text-gray-700 leading-7">
            {dealerCity} is one of the fastest-growing real estate markets with
            excellent infrastructure, connectivity, and investment potential.
          </p>

          <p className="text-gray-700 mt-4">
            <b className="text-[#D02752]">{dealerName}</b> provides reliable real estate services in {dealerCity},
            helping buyers, sellers, and investors make confident decisions.
          </p>
        </div>

        {/* ABOUT */}
        <div className={card}>
          <h2 className="text-xl font-semibold mb-3 text-[#8A244B]">
            About {dealerName}
          </h2>

          <p className="text-gray-700">
            {dealerName} offers complete property consultancy including residential,
            commercial, and rental services with a transparent and client-focused approach.
          </p>

          <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-2">
            <li>Requirement understanding</li>
            <li>Property shortlisting</li>
            <li>Market analysis</li>
            <li>Documentation support</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className={card}>
          <h2 className="text-xl font-semibold mb-3 text-[#8A244B]">
            Services Offered
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Buy & Sell Property in {dealerCity}</li>
            <li>Rental Services</li>
            <li>Commercial Property Deals</li>
            <li>Legal & Documentation Help</li>
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div className={card}>
          <h2 className="text-xl font-semibold mb-3 text-[#8A244B]">
            Why Choose {dealerName}?
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Local market expertise</li>
            <li>Transparent pricing</li>
            <li>End-to-end support</li>
            <li>Professional approach</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="relative rounded-2xl p-6 text-white overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#D02752] to-[#8A244B]" />
          <div className="absolute inset-0 opacity-20 bg-white blur-2xl" />

          <div className="relative">
            <h2 className="text-xl font-semibold mb-2">
              Contact {dealerName}
            </h2>

            <p className="text-white/90">
              Get expert advice and best property deals in {dealerCity}.
            </p>

            <button className="mt-4 px-5 py-2 rounded-lg bg-white text-[#D02752] font-semibold hover:scale-105 transition shadow-md">
              Contact Now
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className={card}>
          <h2 className="text-xl font-semibold mb-4 text-[#8A244B]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {[
              {
                q: "Can a dealer help in buying property?",
                a: "Yes, they assist with complete property transactions."
              },
              {
                q: "Do they provide rental services?",
                a: "Yes, both residential and commercial rentals."
              },
              {
                q: "Is documentation support available?",
                a: "Yes, full legal and documentation assistance."
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border transition ${
                  openFaq === index
                    ? "border-[#D02752] bg-[#fde6ec]"
                    : "border-[#f3c6d1]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 flex justify-between items-center text-gray-800"
                >
                  {item.q}
                  <span className="text-[#D02752] text-xl font-bold">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-4 pb-4 text-gray-600">
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