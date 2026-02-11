"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function DealerDetailPage() {
  const { slug } = useParams();

  const [openFaq, setOpenFaq] = useState(null);
  const searchParams = useSearchParams();

  const dealerName = searchParams.get("name") || "Trusted Dealer";
  const dealerCity = searchParams.get("city") || "Noida";

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-4xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="mb-10 bg-white rounded-2xl p-6 border border-green-200 shadow-sm">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              {/* <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-2 border border-green-300">
                Verified Property Dealer
              </span> */}

              <h1 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">
                {dealerName} – Trusted Property Dealer in {dealerCity}
              </h1>

              <p className="text-base text-black/70 mt-1">
                {dealerCity},Uttar Pradesh
              </p>
            </div>

            {/* <div className="flex gap-3">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition">
                Contact Now
              </button>
            </div> */}

          </div>
        </div>

        {/* INTRODUCTION SECTION */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-green-200">
          <p className="text-black/80 leading-7">
            {dealerCity} has emerged as one of the most structured and rapidly developing real estate markets in North India.  
            With planned sectors, strong infrastructure, metro connectivity, and proximity to Delhi,  
            the city offers significant opportunities for residential living, commercial expansion, and real estate investment.
          </p>

          <p className="text-black/80 leading-7 mt-4">
            <b>{dealerName}</b> is a professional property dealer in {dealerCity}, providing end-to-end real estate services  
            to buyers, sellers, landlords, tenants, and investors. The focus is on transparent transactions,  
            accurate market guidance, and legally compliant property dealings.
          </p>

          <p className="text-black/80 leading-7 mt-4">
            If you are looking for a reliable real estate agent in {dealerCity} who understands local sectors,  
            pricing trends, and future growth potential, <b>{dealerName}</b> offers structured and dependable support.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-green-200">
          <h2 className="text-xl font-semibold text-black mb-3">
            About {dealerName}
          </h2>

          <p className="text-black/80 leading-7">
            {dealerName} operates as a full-service real estate consultancy in {dealerCity}, assisting clients  
            across residential, commercial, and rental segments. The firm works with individuals, families,  
            business owners, and investors to deliver property solutions aligned with specific requirements.
          </p>

          <ul className="mt-4 list-disc pl-6 text-black/80 space-y-2">
            <li>Understanding client objectives</li>
            <li>Shortlisting suitable properties</li>
            <li>Providing price and location analysis</li>
            <li>Ensuring clear ownership and documentation</li>
          </ul>
        </div>

        {/* WORK APPROACH */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-green-200">
          <h2 className="text-xl font-semibold text-black mb-3">
            Work Approach and Objectives
          </h2>

          <p className="text-black/80 leading-7">
            As a trusted real estate agent in {dealerCity}, {dealerName} follows a structured process:
          </p>

          <ul className="mt-4 list-disc pl-6 text-black/80 space-y-2">
            <li>Requirement assessment</li>
            <li>Property shortlisting</li>
            <li>Site visit coordination</li>
            <li>Price negotiation support</li>
            <li>Documentation and registration assistance</li>
          </ul>
        </div>

        {/* MARKET UNDERSTANDING */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-green-200">
          <h2 className="text-xl font-semibold text-black mb-3">
            Understanding the {dealerCity} Property Market
          </h2>

          <p className="text-black/80 leading-7">
            {dealerCity}’s real estate growth is driven by planned development, corporate presence,  
            expressway connectivity, and expanding residential demand.
          </p>

          <ul className="mt-4 list-disc pl-6 text-black/80 space-y-2">
            <li>Sector-wise property rates</li>
            <li>Infrastructure and metro expansions</li>
            <li>Rental demand across residential hubs</li>
            <li>Commercial growth areas and IT corridors</li>
            <li>Builder track records and legal approvals</li>
          </ul>
        </div>

        {/* SERVICES OFFERED */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-green-200">
          <h2 className="text-xl font-semibold text-black mb-3">
            Services Offered
          </h2>

          <ul className="list-disc pl-6 text-black/80 space-y-2">
            <li>Buying and selling of residential property in {dealerCity}</li>
            <li>Assistance with commercial property sales</li>
            <li>Residential and commercial rentals</li>
            <li>Property shortlisting and site visits</li>
            <li>Title verification and document checks</li>
            <li>Price negotiation assistance</li>
            <li>Registration and legal coordination</li>
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div className="bg-green-50 rounded-2xl p-6 mb-10 border border-green-200">
          <h2 className="text-xl font-semibold text-black mb-3">
            Why Choose {dealerName}?
          </h2>

          <ul className="list-disc pl-6 text-black/80 space-y-2">
            <li>Local Market Knowledge</li>
            <li>Transparent Transactions</li>
            <li>Client-Focused Solutions</li>
            <li>Complete Support from start to end</li>
            <li>Professional Ethics</li>
          </ul>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-white rounded-2xl p-6 border border-green-200">
  <h2 className="text-xl font-semibold text-black mb-4">
    Frequently Asked Questions
  </h2>

  <div className="space-y-4">
    {[
      {
        q: "Can a property dealer help sell commercial property?",
        a: "Yes. A professional property dealer assists with valuation, marketing, and transaction execution."
      },
      {
        q: `Does ${dealerName} provide rental property services?`,
        a: "Yes. Both residential and commercial rental services are provided."
      },
      {
        q: "Is legal and documentation support included?",
        a: "Yes. Title verification, documentation checks, and registration support are provided."
      },
      {
        q: "How can I begin my property search?",
        a: `You can contact ${dealerName} and share your requirements to receive guided options.`
      }
    ].map((item, index) => (
      <div
        key={index}
        className={`transition-all duration-300 rounded-xl ${
          openFaq === index
            ? "border border-green-400 bg-green-50"
            : "border border-green-200 bg-white"
        }`}
      >
        <button
          onClick={() => toggleFaq(index)}
          className="w-full text-left font-medium text-black flex justify-between items-center p-4"
        >
          <span>{item.q}</span>

          <span className="text-green-600 font-bold text-xl">
            {openFaq === index ? "−" : "+"}
          </span>
        </button>

        {openFaq === index && (
          <div className="px-4 pb-4">
            <div className="bg-white border border-green-300 rounded-lg p-4 text-black/80 shadow-sm">
              {item.a}
            </div>
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
