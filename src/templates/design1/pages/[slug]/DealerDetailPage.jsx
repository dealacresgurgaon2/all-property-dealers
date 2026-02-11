"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
export default function DealerDetailPage() {
  const { slug } = useParams();

  const [openFaq, setOpenFaq] = useState(null);
  const searchParams = useSearchParams();

  const dealerName = searchParams.get("name") || "Property Dealer";
  const dealerCity = searchParams.get("city") || "Gurgaon";

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

        {/* MARKET UNDERSTANDING */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Understanding the {dealerCity} Real Estate Market
        </h2>

        <p className="text-gray-700 leading-7 mb-8">
          {dealerCity}’s real estate market is driven by infrastructure projects, corporate expansion, and residential demand.  
          Property values vary significantly by sector, connectivity, and development status.
        </p>

        <p className="text-gray-700 leading-7 mb-8">
          {dealerName} closely monitors:
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
          <li>Sector-wise price movements</li>
          <li>Infrastructure developments</li>
          <li>Rental demand trends</li>
          <li>Commercial growth corridors</li>
          <li>Builder credibility and approvals</li>
        </ul>

        {/* SERVICES */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Services Offered
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
          <li>Buying and selling of residential property in {dealerCity}</li>
          <li>Assistance with commercial property for sale in {dealerCity}</li>
          <li>Support for rental property in {dealerCity}</li>
          <li>Property shortlisting and site visits</li>
          <li>Title verification and document checks</li>
          <li>Negotiation support</li>
          <li>Registration and legal coordination</li>
        </ul>

        {/* WHY CHOOSE */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Why Choose {dealerName}?
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
          <li>Local Market Expertise – In-depth knowledge of {dealerCity} real estate zones</li>
          <li>Transparent Process – Clear pricing and documentation guidance</li>
          <li>Client-Oriented Solutions – Property options based on individual needs</li>
          <li>Complete Transaction Support – Assistance from inquiry to registration</li>
          <li>Professional Conduct – Ethical practices and reliable communication</li>
        </ul>

        {/* SUPPORT */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Support for Confident Property Decisions
        </h2>

        <p className="text-gray-700 leading-7 mb-8">
          Real estate transactions involve significant financial and legal considerations.  
          {dealerName} provides structured guidance to help clients understand:
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
          <li>Market value</li>
          <li>Location suitability</li>
          <li>Legal documentation</li>
          <li>Long-term investment potential</li>
        </ul>

        {/* CONTACT */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Contact {dealerName}
        </h2>

        <p className="text-gray-700 leading-7 mb-10">
          For buying, selling, renting, or investing in {dealerCity} real estate, professional consultation is recommended.  
          {dealerName} offers reliable property assistance tailored to residential and commercial requirements.
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
