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

    axios.get(`https://property-dealer-xa5g.onrender.com/api/dealer-basic/${slug}`, {
  headers: {
    domain: "www.propertydealeringurgaon.com", // ✅ static domain
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
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0b1f33] leading-tight">
            {dealerName} – Professional Property Dealer in {dealerCity}
          </h1>

          <p className="text-base text-gray-500 mt-2">
             {dealerCity}, Haryana
          </p>
        </div>

        {/* INTRODUCTION */}
        <p className="text-gray-700 leading-7 mb-6">
          {dealerCity} is one of India’s fastest-growing real estate markets, offering a wide range of residential, commercial, and investment opportunities.  
          With rapid infrastructure development, expanding business hubs, and growing residential demand, navigating the property market requires accurate information and local expertise.
        </p>

        <p className="text-gray-700 leading-7 mb-8">
          <strong>{dealerName}</strong> is a professional property dealer in {dealerCity}, providing structured real estate services to buyers, sellers, landlords, tenants, and investors.  
          The focus is on delivering reliable market insights, transparent processes, and end-to-end property assistance.
        </p>

        <p className="text-gray-700 leading-7 mb-8">
          If you are searching for a dependable real estate agent in {dealerCity} who understands market trends, pricing, and legal requirements,  
          {dealerName} offers informed guidance at every stage of the transaction.
        </p>

        {/* ABOUT */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          About {dealerName}
        </h2>

        <p className="text-gray-700 leading-7 mb-8">
          {dealerName} operates as a full-service real estate consultancy in {dealerCity}, catering to diverse property requirements.  
          Services are designed for individuals purchasing homes, businesses seeking commercial spaces, and investors looking for long-term returns.
        </p>

        <p className="text-gray-700 leading-7 mb-8">
          As an experienced property dealer in {dealerCity}, the approach is based on:
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
          <li>Market research</li>
          <li>Clear communication</li>
          <li>Legal and documentation accuracy</li>
          <li>Client-specific property solutions</li>
        </ul>

        {/* OBJECTIVE */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Objective and Work Approach
        </h2>

        <p className="text-gray-700 leading-7 mb-8">
          The primary objective is to help clients make informed real estate decisions using verified data and practical market understanding.  
          All property-related aspects—pricing, location advantages, documentation, and future potential—are explained clearly.
        </p>

        <p className="text-gray-700 leading-7 mb-8">
          As a trusted real estate agent in {dealerCity}, the work approach includes:
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
          <li>Requirement analysis</li>
          <li>Shortlisting suitable properties</li>
          <li>Assisting with negotiations</li>
          <li>Coordinating documentation and registration</li>
        </ul>
        <p className="text-gray-700 leading-7 mb-8" >This structured process helps reduce risks and improves decision-making accuracy.</p>

        {/* MARKET UNDERSTANDING */}
        {/* MARKET UNDERSTANDING */}
<h2 className="text-xl font-semibold text-[#0b1f33] mb-3 mt-10">
  Understanding the {dealerCity} Real Estate Market
</h2>

<p className="text-gray-700 leading-7 mb-6">
  {dealerCity}’s real estate market is driven by infrastructure projects,
  corporate expansion, and increasing residential demand. Property values
  vary significantly based on sector planning, connectivity, and development status.
</p>

<p className="text-gray-700 leading-7 mb-4">
  <strong>{dealerName}</strong> closely monitors:
</p>

<ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
  <li>Sector-wise price movements</li>
  <li>Infrastructure developments</li>
  <li>Rental demand trends</li>
  <li>Commercial growth corridors</li>
  <li>Builder credibility and legal approvals</li>
</ul>

<p className="text-gray-700 leading-7 mb-4">
  This local market knowledge helps clients identify suitable options for:
</p>

<ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
  <li>Residential property in {dealerCity}</li>
  <li>Commercial property for sale in {dealerCity}</li>
  <li>Rental property in {dealerCity}</li>
</ul>

<p className="text-gray-700 leading-7 mb-10">
  All recommendations are based on data-backed analysis rather than speculation.
</p>


        {/* SERVICES OFFERED */}
<h2 className="text-xl font-semibold text-[#0b1f33] mb-3 mt-10">
  Services Offered
</h2>

<p className="text-gray-700 leading-7 mb-6">
  <strong>{dealerName}</strong> provides comprehensive real estate services in {dealerCity}, including:
</p>

<ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
  <li>Buying and selling of residential property in {dealerCity}</li>
  <li>Assistance with commercial property for sale in {dealerCity}</li>
  <li>Support for rental property in {dealerCity}</li>
  <li>Property shortlisting and coordinated site visits</li>
  <li>Title verification and documentation checks</li>
  <li>Negotiation support</li>
  <li>Registration and legal coordination</li>
</ul>

<p className="text-gray-700 leading-7 mb-10">
  Each service is delivered with a strong focus on compliance, clarity, and operational efficiency.
</p>


        {/* WHY CHOOSE */}
<h2 className="text-xl font-semibold text-[#0b1f33] mb-3 mt-10">
  Why Choose {dealerName}?
</h2>

<p className="text-gray-700 leading-7 mb-6">
  Choosing the right property dealer is essential for smooth and secure transactions.
  <strong> {dealerName}</strong> offers:
</p>

<ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
  <li><strong>Local Market Expertise –</strong> In-depth knowledge of {dealerCity}’s real estate zones</li>
  <li><strong>Transparent Process –</strong> Clear pricing and documentation guidance</li>
  <li><strong>Client-Oriented Solutions –</strong> Property options based on individual needs</li>
  <li><strong>Complete Transaction Support –</strong> Assistance from inquiry to registration</li>
  <li><strong>Professional Conduct –</strong> Ethical practices and reliable communication</li>
</ul>

<p className="text-gray-700 leading-7 mb-10">
  These factors position <strong>{dealerName}</strong> as a reliable property dealer in {dealerCity}.
</p>

{/* SUPPORT SECTION */}
<h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
  Support for Confident Property Decisions
</h2>

<p className="text-gray-700 leading-7 mb-6">
  Real estate transactions involve significant financial and legal considerations.
  Clients often require clarity on:
</p>

<ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
  <li>Market value</li>
  <li>Location suitability</li>
  <li>Legal documentation</li>
  <li>Long-term investment potential</li>
</ul>

<p className="text-gray-700 leading-7 mb-10">
  <strong>{dealerName}</strong> provides structured guidance to address these concerns,
  helping clients proceed with confidence and accuracy.
</p>

{/* CONTACT SECTION */}
<h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
  Contact {dealerName}
</h2>

<p className="text-gray-700 leading-7 mb-10">
  For buying, selling, renting, or investing in {dealerCity} real estate,
  professional consultation is recommended. <strong>{dealerName}</strong> offers
  reliable property assistance tailored to both residential and commercial requirements.
  Clients can connect to discuss their needs and receive relevant property options
  supported by verified market insights.
</p>

{/* CONCLUSION */}
<h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
  Conclusion
</h2>

<p className="text-gray-700 leading-7 mb-6">
  {dealerCity}’s real estate market offers strong opportunities, but successful
  outcomes depend on accurate information and professional handling.
</p>

<p className="text-gray-700 leading-7 mb-12">
  With transparent processes, strong market knowledge, and end-to-end transaction
  support, <strong>{dealerName}</strong> serves as a dependable real estate agent in
  {dealerCity} for residential, commercial, and rental property requirements.
</p>


        {/* FAQ SECTION */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-4">
  Frequently Asked Questions
</h2>

<div className="space-y-4">
  {[
    {
      q: "Can a property dealer help sell commercial property in Gurgaon?",
      a: "Yes. A professional property dealer in Gurgaon assists with valuation, marketing, and transaction execution."
    },
    {
      q: "Does the dealer handle rental properties?",
      a: "Yes. Services are available for both residential and commercial rental property in Gurgaon."
    },
    {
      q: "Are residential properties available through this dealer?",
      a: "Yes. Residential property in Gurgaon is a core service offering."
    },
    {
      q: "Is legal and documentation support provided?",
      a: "Yes. Title verification, documentation checks, and registration assistance are included."
    },
    {
      q: "How can I start my property search?",
      a: "Clients can contact us and share their requirements for guided property options."
    }
  ].map((item, index) => (
    <div
      key={index}
      className={`transition-all duration-300 rounded-lg ${
        openFaq === index
          ? "border border-[#1e40af]/40 bg-[#f0f5ff]"
          : "border-b border-gray-200"
      }`}
    >
      <button
        onClick={() => toggleFaq(index)}
        className="w-full text-left font-medium text-[#0b1f33] flex justify-between items-center p-3"
      >
        <span>{item.q}</span>

        <span className="text-[#1e40af] font-bold text-lg">
          {openFaq === index ? "−" : "+"}
        </span>
      </button>

      {openFaq === index && (
        <div className="px-4 pb-4">
          <div className="bg-white border border-[#1e40af]/30 rounded-md p-4 text-gray-700 shadow-sm">
            {item.a}
          </div>
        </div>
      )}
    </div>
  ))}
</div>


      </div>
      
    </section>
  );
}
