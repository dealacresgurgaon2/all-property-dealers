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

    axios.get(`https://propertydealerbackend.onrender.com/api/dealer-basic/${slug}`, {
  headers: {
    domain: "www.propertydealerindelhi.com", // ✅ static domain
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
    <section className=" py-8">
      <div className="max-w-4xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="mb-10 bg-white rounded-2xl p-6 border border-red-200 shadow-sm">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              {/* <span className="inline-block bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full mb-2 border border-red-300">
                Verified Property Dealer
              </span> */}

              <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
                {dealerName} – Professional Property Dealer in {dealerCity}
              </h1>

              <p className="text-base text-black/70 mt-1">
                {dealerCity}, India
              </p>
            </div>

          </div>
        </div>

        {/* INTRODUCTION */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Introduction
          </h2>

          <p className="text-black/80 leading-7">
            {dealerCity} is still one of India's largest real estate markets that offers numerous opportunities in the commercial, residential, and rental segments. The city has established neighbourhoods, growing infrastructure, and constant demand. Delhi continues to attract home buyers as well as investors, companies, and homebuyers. 
            {dealerCity} is an experienced property agent and professional property dealer in Delhi offering organised real estate services to sellers, buyers, landlords, tenants and investors. The primary focus is on clear deals, market-driven direction and legally compliant property transactions.
          </p>

          <p className="text-black/80 leading-7 mt-3">
            <b>{dealerName}</b> is an experienced property agent and professional property dealer in {dealerCity} offering organised real estate services to sellers, buyers, landlords, tenants and investors.  
            The primary focus is on clear deals, market-driven direction and legally compliant property transactions.
          </p>

          <p className="text-black/80 leading-7 mt-3">
            If you're in search of an honest realtor in {dealerCity} with local market expertise and expert knowledge, <b>{dealerName}</b> offers reliable support throughout the entire procedure of buying or selling a property.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            About {dealerName}
          </h2>

          <p className="text-black/80 leading-7">
            <b>{dealerName}</b> is an all-inclusive real estate consulting firm located in {dealerCity}, providing commercial, residential, and rental property services.  
            Services are geared towards family members, individual entrepreneurs, business owners, and investors looking for precise information and expert handling.
          </p>

          <p className="text-black/80 leading-7 mt-3">
            As a seasoned real estate agent in {dealerCity}, the strategy is founded on:
          </p>

          <ul className="list-disc ml-6 mt-3 text-black/80">
            <li>A clear understanding of the client's requirements</li>
            <li>Sector-specific market analysis</li>
            <li>Verified property shortlisting</li>
            <li>Accurate documentation compliance</li>
            <li>Ethical and transparent transactions</li>
          </ul>
          <p className="text-black/80 leading-7">
            Every transaction is dealt with care and ethical business procedures
          </p>
        </div>

        {/* WORK APPROACH */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Work Approach and Objectives
          </h2>

          <p className="text-black/80 leading-7">
            The aim is to facilitate the process of making real estate decisions by providing specific, factual and practical guidelines.  
            Every aspect of property transactions, including price, benefits of location, as well as legal documents and timeframes, is clearly communicated.
          </p>

          <p className="text-black/80 leading-7 mt-3">
            As a reputable property agent located in {dealerCity}, <b>{dealerName}</b> follows a standardised workflow:
          </p>

          <ul className="list-disc ml-6 mt-3 text-black/80">
            <li>Assessment of requirements</li>
            <li>Shortlisting of properties</li>
            <li>Site visit coordination</li>
            <li>Support for negotiation</li>
            <li>Registration and documentation assistance</li>
          </ul>

          <p className="text-black/80 leading-7 mt-3">
            This process assures transparency and minimises the risk associated with transactions.
          </p>
        </div>

        {/* MARKET UNDERSTANDING */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Understanding the {dealerCity} Property Market
          </h2>

          <p className="text-black/80 leading-7">
            The real estate market in {dealerCity} has a variety of properties, prices and demand differing across different areas.  
            Values of properties are influenced by connectivity infrastructure, neighbourhood development and the legal approvals.
          </p>

          <p className="text-black/80 leading-7 mt-3">
            <b>{dealerName}</b> continuously monitors:
          </p>

          <ul className="list-disc ml-6 mt-3 text-black/80">
            <li>Price trends based on area</li>
            <li>Developments in connectivity and infrastructure</li>
            <li>Demand for commercial and residential rental</li>
            <li>Supply and market availability</li>
            <li>Ownership documentation and approvals</li>
          </ul>
          <p className="text-black/80 leading-7">
            This market knowledge helps inform decision-making to:
          </p>
          
          <ul className="list-disc ml-6 mt-3 text-black/80">
            <li>Residential property for sale in Delhi</li>
            <li>Commercial property available for sale in Delhi</li>
            <li>Rent property in Delhi</li>
          </ul>
          <p className="text-black/80 leading-7">
            Recommendations are based on data and are location-specific.
          </p>
        </div>

        {/* SERVICES */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Services Offered in {dealerCity}
          </h2>
            <p className="text-black/80 leading-7">
           They provide a variety of services in Delhi. The services include:
          </p>
          <ul className="list-disc ml-6 text-black/80">
            <li>Residential property in {dealerCity}</li>
            <li>Assistance with commercial properties</li>
            <li>Commercial and residential rental property</li>
            <li>Visits to the property and property selection</li>
            <li>Checking the title and documentation</li>
            <li>Assistance in negotiations</li>
            <li>Legal coordination and registration</li>
          </ul>
          <p className="text-black/80 leading-7">
            Every service is provided in a transparent manner and with professional accountability.
          </p>
        </div>

        {/* WHY CHOOSE */}
        <div className="bg-red-50 rounded-2xl p-6 mb-10 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Why Choose {dealerName}?
          </h2>
           <p className="text-black/80 leading-7">
            Selecting the right property broker is crucial in a market as complicated as Delhi.  They offer:
          </p>
          <ul className="list-disc ml-6 text-black/80">
            <li>Local Market Experience - Understanding of Delhi's micro-markets and zones {dealerCity}</li>
            <li>Transparent Procedures - Easy pricing and document guidance</li>
            <li>Solution-focused for Clients - Property options that are aligned with the objectives of the client</li>
            <li>End-to-End Assistance - From enquiry to registration</li>
            <li>Professional Ethics: Reliable Communication and practices that are compliant</li>
          </ul>
            <p className="text-black/80 leading-7">
           These strengths make them a reliable agent for property in Delhi.
          </p>
        </div>
        {/* INFORMED PROPERTY DECISIONS */}
<div className="bg-white rounded-2xl p-7 mb-7 border border-red-200 shadow-sm">
  <h2 className="text-xl font-semibold text-red-600 mb-4">
    Supporting Informed Property Decisions
  </h2>

  <p className="text-black leading-7">
    Real estate transactions involve important legal and financial considerations.
    Clients often require clarity regarding:
  </p>

  <ul className="list-disc ml-6 mt-4 text-black space-y-2">
    <li>Market valuation</li>
    <li>Location suitability</li>
    <li>Legal documentation</li>
    <li>Investment value and long-term usability</li>
  </ul>

  <p className="text-black leading-7 mt-4">
    <b>{dealerName}</b> provides structured guidance to help clients evaluate
    their options and move forward with confidence.
  </p>
</div>

{/* CONTACT SECTION */}
<div className="bg-white rounded-2xl p-7 mb-7 border border-red-200 shadow-sm">
  <h2 className="text-xl font-semibold text-red-600 mb-4">
    Contact {dealerName}
  </h2>

  <p className="text-black leading-7">
    Whether you are selling, buying, or investing in property in {dealerCity},
    expert guidance can reduce uncertainty and improve results.
  </p>

  <p className="text-black leading-7 mt-3">
    Contact <b>{dealerName}</b> to discuss your requirements and receive
    property options based on verified market insight.
  </p>
</div>

{/* CONCLUSION */}
<div className="bg-white rounded-2xl p-7 mb-10 border border-red-200 shadow-sm">
  <h2 className="text-xl font-semibold text-red-600 mb-4">
    Conclusion
  </h2>

  <p className="text-black leading-7">
    The real estate market in {dealerCity} offers security and opportunities
    across commercial, residential, and rental sectors.
  </p>

  <p className="text-black leading-7 mt-3">
    Successfully navigating this market requires local expertise and a
    professional approach.
  </p>

  <p className="text-black leading-7 mt-3">
    With strong market knowledge, transparent processes, and complete
    transaction support, <b>{dealerName}</b> serves as a reliable property
    consultant for property owners, buyers, and investors.
  </p>
</div>


        {/* FAQ SECTION */}
        {/* FAQ SECTION */}
<div className="bg-white rounded-2xl p-6 border border-red-200">
  <h2 className="text-xl font-semibold text-red-600 mb-4">
    Frequently Asked Questions
  </h2>

  <div className="space-y-4">
    {[
      {
        q: `Can a property broker assist in selling commercial properties in ${dealerCity}?`,
        a: "Yes. A professional property broker helps with valuation, marketing and execution of transactions."
      },
      {
        q: `Can ${dealerName} offer rentals of properties in ${dealerCity}?`,
        a: "Yes. Residential and commercial rental properties are handled."
      },
      {
        q: `Do I have access to residential property via ${dealerName}?`,
        a: "Yes. Residential properties are a core service."
      },
      {
        q: "Does legal and document support include?",
        a: "Yes. Documentation checks, title verification, and registration assistance are provided."
      },
      {
        q: "How do I start my search for a house?",
        a: "You can contact us and discuss your requirements to get guided property options."
      }
    ].map((item, index) => (
      <div
        key={index}
        className={`border rounded-xl transition-all duration-300 ${
          openFaq === index
            ? "border-red-400 bg-red-50"
            : "border-red-200 bg-white"
        }`}
      >
        <button
          onClick={() => toggleFaq(index)}
          className="w-full text-left font-medium text-black flex justify-between items-center p-4"
        >
          <span>{item.q}</span>

          <span
            className={`font-bold text-xl transition-all ${
              openFaq === index ? "text-red-700" : "text-red-600"
            }`}
          >
            {openFaq === index ? "−" : "+"}
          </span>
        </button>

        {openFaq === index && (
          <div className="px-4 pb-4">
            <div className="bg-white border border-red-200 rounded-lg p-4 text-black/80 shadow-sm">
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
