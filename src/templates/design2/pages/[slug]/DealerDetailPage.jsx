"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function DealerDetailPage() {

  const { slug } = useParams();
  const searchParams = useSearchParams();

  const dealerName = searchParams.get("name") || "";
  const dealerCity = searchParams.get("city") || "";

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-[#faf8f2] py-12">
      <div className="max-w-4xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="mb-10 border-b border-[#d4af37]/40 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#d4af37] leading-tight">
                {dealerName} – Your Trusted Real Estate Partner in {dealerCity}
              </h1>

              <p className="text-base text-[#d4af37]/80 mt-1">
                {dealerCity}, Haryana
              </p>
            </div>

          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}

        <p className="text-[#5f4e22] leading-7 mb-6">
          Sometimes, property decisions don’t start with a plan. They start with a feeling.  
          A thought like, “Maybe it’s time to buy our own home” or “We need a better location for our business.”  
          And suddenly, questions arise: where should I look, whom can I trust, what’s the right price?  
          It can feel noisy, confusing… a little overwhelming.
        </p>

        <p className="text-[#5f4e22] leading-7 mb-6">
          That’s where <strong>{dealerName}</strong> steps in — a reliable real estate agent in {dealerCity},  
          guiding buyers, sellers, and investors with clarity and care.  
          No rushed talks. No forced deals. Just honest advice, shaped around your real needs.
        </p>

        <p className="text-[#5f4e22] leading-7 mb-8">
          If you’re searching for the <strong>best property dealer in {dealerCity}</strong>,  
          someone who truly understands the city, the market, and its people – you’re in the right place.
        </p>

        {/* ABOUT */}
        <h2 className="text-xl font-semibold text-[#d4af37] mb-3">
          About {dealerName}
        </h2>

        <p className="text-[#5f4e22] leading-7 mb-6">
          Every property journey is personal. Some clients are buying their first home.  
          Some are expanding a business. Some are investing for the future.  
          {dealerName} knows that no two requirements are the same.
        </p>

        <p className="text-[#5f4e22] leading-7 mb-8">
          As a professional real estate agent in {dealerCity}, the mission is simple:  
          make property dealings easy to understand, easy to trust, and easy to complete.  
          From small residential plots to large commercial spaces, every deal is handled with  
          patience, transparency, and awareness of the market.
        </p>

        {/* MISSION */}
        <h2 className="text-xl font-semibold text-[#d4af37] mb-3">
          Our Mission and Working Style
        </h2>

        <p className="text-[#5f4e22] leading-7 mb-8">
          Our mission is to help clients make informed real estate decisions without stress or confusion.  
          Every step paperwork, price negotiations, and legal checks is explained in simple, clear language.
          Trust isn’t built in a single meeting; it grows slowly through honest advice, transparent communication,  
          and consistent service. That’s why {dealerName} stands out as the best property dealer in {dealerCity}.
        </p>

        {/* MARKET UNDERSTANDING */}
        <h2 className="text-xl font-semibold text-[#d4af37] mb-3">
          Understanding the {dealerCity} Market
        </h2>

        <p className="text-[#5f4e22] leading-7 mb-4">
          {dealerCity} is evolving fast. New sectors are being developed, roads are expanding,  
          and property values are steadily increasing. Opportunities exist but only if you know where to look.
        </p>

        <ul className="list-disc pl-6 text-[#5f4e22] leading-7 mb-8 space-y-2">
          <li>Residential plots in {dealerCity} – perfect for building a home or investing.</li>
          <li>Commercial property for sale in {dealerCity} – offices, shops, and showrooms.</li>
          <li>Rental property in {dealerCity} – homes for families, students, and professionals.</li>
        </ul>

        {/* SERVICES */}
        <h2 className="text-xl font-semibold text-[#d4af37] mb-3">
          Services Offered
        </h2>

        <ul className="list-disc pl-6 text-[#5f4e22] leading-7 mb-8 space-y-2">
          <li>Buying and selling residential plots in {dealerCity}</li>
          <li>Assistance with commercial property for sale in {dealerCity}</li>
          <li>Support for rental property in {dealerCity}</li>
          <li>Property site visits and verification</li>
          <li>Ownership and legal document checks</li>
          <li>Price negotiation guidance</li>
          <li>Registration and paperwork assistance</li>
        </ul>

        {/* WHY CHOOSE */}
        <h2 className="text-xl font-semibold text-[#d4af37] mb-3">
          Why Choose {dealerName}?
        </h2>

        <ul className="list-disc pl-6 text-[#5f4e22] leading-7 mb-8 space-y-2">
          <li>Local Market Expertise – Deep understanding of {dealerCity} real estate zones.</li>
          <li>Personalized Guidance – Solutions designed around your actual needs.</li>
          <li>Transparent Process – No hidden costs, no unclear terms.</li>
          <li>Complete Support – From the first inquiry to final registration.</li>
          <li>Client Satisfaction Focus – Long-term trust over quick deals.</li>
        </ul>

        {/* CONFIDENCE SECTION */}
        <h2 className="text-xl font-semibold text-[#d4af37] mb-3">
          Helping You Make Confident Property Decisions
        </h2>

        <p className="text-[#5f4e22] leading-7 mb-8">
          Many people delay property decisions simply because they feel unsure:  
          Is the price right? Is the location ideal? Are the documents clear?  
          We remove that uncertainty. Every property option is explained.  
          Every risk is checked. Every opportunity is explored. Clients can move forward confidently.
        </p>

        {/* LEGAL SUPPORT */}
        <h2 className="text-xl font-semibold text-[#d4af37] mb-3">
          Property Verification and Legal Support
        </h2>

        <p className="text-[#5f4e22] leading-7 mb-8">
          Paperwork can be stressful. Our team handles ownership verification,  
          legal document checks, and registration assistance to ensure every transaction  
          is safe, secure, and worry-free.
        </p>

        {/* CONCLUSION */}
        <h2 className="text-xl font-semibold text-[#d4af37] mb-3">
          Conclusion
        </h2>

        <p className="text-[#5f4e22] leading-7 mb-10">
          Property decisions are big, emotional, financial, and personal.  
          Having the best property dealer in {dealerCity} beside you turns uncertainty into clarity.  
          {dealerName} represents honesty, market insight, and seamless real estate experiences.
        </p>

        {/* FAQ */}
       <h2 className="text-xl font-semibold text-[#d4af37] mb-4">
  Frequently Asked Questions
</h2>

<div className="space-y-4">
  {[
    {
      q: `Can a real estate agent help sell commercial property in ${dealerCity}?`,
      a: "Yes. A professional agent can market and sell commercial spaces at the right value."
    },
    {
      q: `Does ${dealerName} assist with rental properties?`,
      a: "Absolutely. Complete support is offered for both residential and commercial rentals."
    },
    {
      q: `Can I find residential plots through ${dealerName}?`,
      a: `Yes. Residential plots in ${dealerCity} are a key specialization.`
    },
    {
      q: "Will my legal paperwork requirements be handled?",
      a: "Yes. Property verification and documentation support are included."
    },
    {
      q: "How do I start my property search?",
      a: "Simply contact us and share your requirements to receive guided property options."
    }
  ].map((item, index) => (
    <div
      key={index}
      className={`transition-all duration-300 rounded-lg ${
        openFaq === index
          ? "border border-[#d4af37]/60 bg-[#fff8e6]"
          : "border-b border-[#d4af37]/40"
      }`}
    >
      <button
        onClick={() => toggleFaq(index)}
        className="w-full text-left font-medium text-[#d4af37] flex justify-between items-center p-3"
      >
        <span>{item.q}</span>

        <span className="text-xl font-bold">
          {openFaq === index ? "−" : "+"}
        </span>
      </button>

      {openFaq === index && (
        <div className="px-4 pb-4">
          <div className="bg-white border border-[#d4af37]/50 rounded-md p-4 text-[#5f4e22] shadow-sm">
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
