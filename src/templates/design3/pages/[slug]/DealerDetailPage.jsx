"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function DealerDetailPage() {
  const { slug } = useParams();

  const [openFaq, setOpenFaq] = useState(null);
  const searchParams = useSearchParams();
  const dealerName = searchParams.get("name") || "Business Name";
  const dealerCity = searchParams.get("city") || "Hisar";

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-[#f2e8e1] md:py-10 py-6">
      <div className="max-w-4xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10 border-b border-[#422c18]/20 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <span className="inline-block bg-[#422c18]/10 text-[#422c18] text-xs px-3 py-1 rounded-full mb-2">
                Verified Property Dealer
              </span>

              <h1 className="text-2xl md:text-3xl font-extrabold text-[#422c18] leading-tight">
                {dealerName} – Real Estate Partner in {dealerCity} - 125001
              </h1>

              <p className="text-base text-[#422c18]/70 mt-1">
                {dealerCity}, Haryana
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-[#422c18]/10 text-[#422c18] text-sm rounded-md border border-[#422c18]/20">
                ✔ Trusted & Verified
              </span>
            </div>

          </div>
        </div>

        {/* INTRO PARAGRAPH */}
        <p className="text-[#422c18]/80 leading-7 mb-6">
          Sometimes, property decisions don’t start with a plan. They start with a feeling.  
          A thought like, <b>“Maybe it’s time to buy something of our own.”</b>  
          Or <b>“We need a better place for business.”</b>  
          And suddenly, questions appear: where to look, whom to trust, what price is right.  
          It can feel noisy. Confusing. A little overwhelming.
        </p>

        <p className="text-[#422c18]/80 leading-7 mb-6">
          That’s where <b>{dealerName}</b> quietly fits in as a reliable  
          <b> real estate agent in {dealerCity}</b>, guiding buyers, sellers, and investors  
          through the property world with clarity and care.  
          No rushed talks. No forced deals. Just honest guidance, shaped around real needs.
        </p>

        <p className="text-[#422c18]/80 leading-7 mb-8">
          If you’re searching for the <b>best property dealer in {dealerCity}</b>,  
          someone who understands the city, the market, and the people, you're in the right place.
        </p>

        {/* ABOUT */}
        <h2 className="text-xl font-semibold text-[#422c18] mb-3">
          About {dealerName}
        </h2>

        <p className="text-[#422c18]/80 leading-7 mb-8">
          Every property journey is personal. Some clients are buying their first home.  
          Some are expanding a business. Some are investing for the future.  
          We understand that no two requirements are the same.
        </p>

        <p className="text-[#422c18]/80 leading-7 mb-8">
          As a professional <b>real estate agent in {dealerCity}</b>, the focus remains simple –  
          to make property dealing easy to understand, easy to trust, and easy to complete.  
          From small residential plots to large commercial spaces, every deal is handled with  
          patience, transparency, and market awareness.
        </p>

        <p className="text-[#422c18]/80 leading-7 mb-8">
          This isn’t just about property. It’s about <b>peace of mind.</b>
        </p>

        {/* MISSION */}
        <h2 className="text-xl font-semibold text-[#422c18] mb-3">
          Mission and Working Style
        </h2>

        <p className="text-[#422c18]/80 leading-7 mb-8">
          The mission is to help clients make informed real estate decisions  
          without stress or confusion. All aspects of property paperwork,  
          price negotiations, and legal checks are explained in plain language, step by step.
        </p>

        <p className="text-[#422c18]/80 leading-7 mb-8">
          Trust isn’t built in one meeting. It grows slowly through honest advice,  
          clear communication, and reliable service.  
          That’s what makes <b>{dealerName}</b> stand out as the  
          <b> best property dealer in {dealerCity}.</b>
        </p>

        {/* MARKET UNDERSTANDING */}
        <h2 className="text-xl font-semibold text-[#422c18] mb-3">
          Understanding the {dealerCity} Property Market
        </h2>

        <p className="text-[#422c18]/80 leading-7 mb-6">
          {dealerCity} is changing. New sectors are developing. Roads are expanding.  
          Property values are rising steadily. Opportunities exist, but only if you know where to look.
        </p>

        <ul className="list-disc pl-6 text-[#422c18]/80 leading-7 mb-8 space-y-2">
          <li><b>Residential plots in {dealerCity}</b> for home building or investment</li>
          <li><b>Commercial property for sale in {dealerCity}</b> for shops, offices, and showrooms</li>
          <li><b>Rental property in {dealerCity}</b> for families and professionals</li>
        </ul>

        {/* SERVICES */}
        <h2 className="text-xl font-semibold text-[#422c18] mb-3">
          Services Offered
        </h2>

        <ul className="list-disc pl-6 text-[#422c18]/80 leading-7 mb-8 space-y-2">
          <li>Buying and selling of residential plots in {dealerCity}</li>
          <li>Assistance in commercial property for sale in {dealerCity}</li>
          <li>Support for rental property in {dealerCity}</li>
          <li>Property site visits and verification</li>
          <li>Ownership and legal document checks</li>
          <li>Price negotiation guidance</li>
          <li>Registration and paperwork assistance</li>
        </ul>

        {/* WHY CHOOSE US */}
        <h2 className="text-xl font-semibold text-[#422c18] mb-3">
          Why Choose Us?
        </h2>

        <ul className="list-disc pl-6 text-[#422c18]/80 leading-7 mb-8 space-y-2">
          <li><b>Local Market Expertise</b> – Deep understanding of {dealerCity} real estate</li>
          <li><b>Personalized Guidance</b> – Solutions based on real needs</li>
          <li><b>Transparent Process</b> – No hidden costs</li>
          <li><b>Complete Support</b> – From inquiry to registration</li>
          <li><b>Client Satisfaction Focus</b></li>
        </ul>

        {/* HELP SECTION */}
        <h2 className="text-xl font-semibold text-[#422c18] mb-3">
          Helping You Make Confident Property Decisions
        </h2>

        <p className="text-[#422c18]/80 leading-7 mb-8">
          Many people delay property decisions simply because they feel unsure.  
          Is the price right? Is the location good? Are documents clear?  
          We help remove that uncertainty and guide you in the right direction.
        </p>

        {/* CONCLUSION */}
        <h2 className="text-xl font-semibold text-[#422c18] mb-3">
          Conclusion
        </h2>

        <p className="text-[#422c18]/80 leading-7 mb-10">
          Property decisions are big. Emotional. Financial. Personal.  
          Having the <b>best property dealer in {dealerCity}</b> beside you  
          turns uncertainty into clarity.  
          Your property journey deserves support that feels human, not mechanical.
        </p>

        {/* FAQ SECTION */}
        <h2 className="text-xl font-semibold text-[#422c18] mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Can a real estate agent help sell commercial property in Hisar?",
              a: "Yes. A professional real estate agent in Hisar can market and sell commercial spaces at the right value.",
            },
            {
              q: `Does ${dealerName} assist with rental properties?`,
              a: "Yes. Complete support is provided for residential and commercial rental needs.",
            },
            {
              q: `Can I find residential plots through ${dealerName}?`,
              a: "Absolutely. Residential plots in Hisar are a key specialization.",
            },
            {
              q: "Will my legal paperwork requirements also be solved?",
              a: "Yes. Property verification and documentation support are included.",
            },
            {
              q: "How do I start my property search?",
              a: "Simply contact us and share your requirements to receive guided property options.",
            },
          ].map((item, index) => (
            <div key={index} className="border-b border-[#422c18]/20 pb-2">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left font-medium text-[#422c18] flex justify-between"
              >
                {item.q}
                <span className="text-[#d4a373]">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>

              {openFaq === index && (
                <div className="mt-2 text-[#422c18]/80">
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
