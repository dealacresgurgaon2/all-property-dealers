"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function DealerDetailPage({ slug }) {
  const [dealer, setDealer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (!slug) {
      setError("Slug missing ❌");
      setLoading(false);
      return;
    }

    setLoading(true);

    axios.get(`http://localhost:5000/api/dealer-basic/${slug}`, {
  headers: {
    domain: "www.propertydealerinnoida.com", // ✅ static domain
  },
})
      .then((res) => {
        setDealer(res.data.data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Dealer data load nahi ho paaya ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  // 🔄 LOADING UI
  if (loading) {
    return (
      <div className="p-6 text-center animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
        <p className="mt-4 text-gray-500 text-sm">Loading dealer details...</p>
      </div>
    );
  }

  // ❌ ERROR UI
  if (error) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500 font-semibold">{error}</p>

        <button
          onClick={() => window.location.reload()}
          className="mt-3 px-4 py-2 bg-[#5E23DC] text-white rounded-md"
        >
          Retry
        </button>
      </div>
    );
  }

  // ❌ SAFETY
  if (!dealer) {
    return <div className="text-center p-6">No Dealer Found</div>;
  }

  // ✅ DATA
  const dealerName = dealer.name;
  const dealerCity = dealer.city;

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
          <p className="text-black/80 leading-7">
            As an experienced property dealer in Noida, the approach includes:
          </p>

          <ul className="mt-4 list-disc pl-6 text-black/80 space-y-2">
            <li>Understanding client objectives</li>
            <li>Shortlisting suitable properties</li>
            <li>Providing price and location analysis</li>
            <li>Ensuring clear ownership and documentation</li>
          </ul>
           <p className="text-black/80 leading-7">
            Each transaction is handled with professionalism, accuracy, and attention to detail.
          </p>
        </div>

        {/* WORK APPROACH */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-green-200">
          <h2 className="text-xl font-semibold text-black mb-3">
            Work Approach and Objectives
          </h2>
           <p className="text-black/80 leading-7">
The objective is to simplify real estate decision-making by providing factual information and practical insights. All aspects of the transaction — pricing, location advantages, legal documentation, and timelines — are communicated clearly.          </p>

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
           <p className="text-black/80 leading-7">
This method reduces risks and ensures smoother transactions.          </p>
        </div>

        {/* MARKET UNDERSTANDING */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-green-200">
          <h2 className="text-xl font-semibold text-black mb-3">
            Understanding the {dealerCity} Property Market
          </h2>

          <p className="text-black/80 leading-7">
            {dealerCity}’s real estate growth is driven by planned development, corporate presence,  
            expressway connectivity, and expanding residential demand.Property values vary based on sector planning, infrastructure access, and project approvals.

          </p>
            <p className="text-black/80 leading-7">
 {dealerName} actively tracks:          </p>

          <ul className="mt-4 list-disc pl-6 text-black/80 space-y-2">
            <li>Sector-wise property rates</li>
            <li>Infrastructure and metro expansions</li>
            <li>Rental demand across residential hubs</li>
            <li>Commercial growth areas and IT corridors</li>
            <li>Builder track records and legal approvals</li>
          </ul>
           <p className="text-black/80 leading-7">
This market understanding helps clients choose the right:          </p>
           <ul className="mt-4 list-disc pl-6 text-black/80 space-y-2 font-bold">
            <li>Residential property in Noida</li>
            <li>Commercial property for sale in Noida</li>
            <li>Rental property in Noida</li>
            
          </ul>
           <p className="text-black/80 leading-7">
Recommendations are data-based and location-specific. </p>
        </div>

        {/* SERVICES OFFERED */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-green-200">
          <h2 className="text-xl font-semibold text-black mb-3">
            Services Offered
          </h2>
              <p className="text-black/80 leading-7 mt-3">
 {dealerName}provides comprehensive real estate services in Noida, including:         </p>
          <ul className="list-disc pl-6 text-black/80 space-y-2">
            <li>Buying and selling of residential property in {dealerCity}</li>
            <li>Assistance with commercial property sales {dealerCity}</li>
            <li>Residential and commercial rentals {dealerCity}</li>
            <li>Property shortlisting and site visits {dealerCity}</li>
            <li>Title verification and document checks {dealerCity}</li>
            <li>Price negotiation assistance {dealerCity}</li>
            <li>Registration and legal coordination {dealerCity}</li>
          </ul>
           <p className="text-black/80 leading-7">
All services are delivered with a focus on transparency and compliance.          </p>
        </div>

        {/* WHY CHOOSE */}
<div className=" rounded-2xl p-6 mb-10 border border-green-200">
  <h2 className="text-xl font-semibold text-black mb-4">
    Why Choose {dealerName}?
  </h2>

  <p className="text-black/80 leading-7">
    Selecting the right property dealer plays a critical role in real estate outcomes.
    <b> {dealerName}</b> offers:
  </p>

  <ul className="mt-4 list-disc pl-6 text-black/80 space-y-3">
    <li>
      <b>Local Market Knowledge –</b> Detailed understanding of {dealerCity} sectors and developments
    </li>

    <li>
      <b>Transparent Transactions –</b> Clear pricing and documentation processes
    </li>

    <li>
      <b>Client-Focused Solutions –</b> Property options aligned with individual needs
    </li>

    <li>
      <b>Complete Support –</b> Assistance from initial inquiry to registration
    </li>

    <li>
      <b>Professional Ethics –</b> Reliable communication and responsible practices
    </li>
  </ul>

  <p className="text-black/80 leading-7 mt-4">
    These strengths position <b>{dealerName}</b> as a dependable property dealer in {dealerCity}.
  </p>
</div>
{/* ASSISTING CONFIDENT PROPERTY DECISIONS */}
<div className="bg-white rounded-2xl p-6 mt-6 border border-green-200">
  <h2 className="text-xl font-semibold text-black mb-4">
    Assisting Confident Property Decisions
  </h2>

  <p className="text-black/80 leading-7">
    Property transactions involve financial, legal, and long-term considerations.
    Clients often seek clarity on:
  </p>

  <ul className="mt-4 list-disc pl-6 text-black/80 space-y-3">
    <li>Market valuation</li>
    <li>Location suitability</li>
    <li>Legal documentation</li>
    <li>Investment potential</li>
  </ul>

  <p className="text-black/80 leading-7 mt-4">
    <b>{dealerName}</b> provides structured guidance to help clients make
    informed and confident decisions.
  </p>
</div>

{/* CONTACT SECTION */}
<div className="bg-white rounded-2xl p-6 mt-6 border border-green-200">
  <h2 className="text-xl font-semibold text-black mb-4">
    Contact {dealerName}
  </h2>

  <p className="text-black/80 leading-7">
    Whether you are planning to buy, sell, rent, or invest in {dealerCity} real estate,
    professional guidance can simplify the process.
  </p>

  <p className="text-black/80 leading-7 mt-3">
    Connect with <b>{dealerName}</b> to discuss your requirements and receive
    suitable property options based on verified market insights.
  </p>
</div>

{/* CONCLUSION */}
<div className="bg-green-50 rounded-2xl p-6 mt-6 border border-green-200">
  <h2 className="text-xl font-semibold text-black mb-4">
    Conclusion
  </h2>

  <p className="text-black/80 leading-7">
    {dealerCity}’s real estate market offers diverse opportunities across
    residential, commercial, and rental segments. Navigating these
    opportunities effectively requires local knowledge and professional handling.
  </p>

  <p className="text-black/80 leading-7 mt-3">
    With transparent processes, market expertise, and complete transaction
    support, <b>{dealerName}</b> serves as a reliable real estate agent in
    {dealerCity} for property buyers, sellers, and investors.
  </p>
</div>



        {/* FAQ SECTION */}
        <div className="bg-white rounded-2xl p-6 border border-green-200 mt-4">
  <h2 className="text-xl font-semibold text-black mb-4">
    Frequently Asked Questions
  </h2>

  <div className="space-y-4">
    {[
      {
        q: "Can a property dealer help sell commercial property in Noida?",
        a: " Yes. A professional property dealer in Noida assists with valuation, marketing, and transaction execution."
      },
      {
        q: `Does ${dealerName} provide rental property services?`,
        a: "Yes. Both residential and commercial rental property in Noida are handled"
      },
      {
        q: `Can I find residential property through ${dealerName}`,
        a: " Yes. Residential property in Noida is a core service."
      },
      {
        q: " Is legal and documentation support included?",
        a: "Yes. Title verification, documentation checks, and registration support are provided."
      }
      ,
      {
        q: "How can I begin my property search?",
        a: ` You can contact ${dealerName} and share your property requirements to receive guided options.`
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
