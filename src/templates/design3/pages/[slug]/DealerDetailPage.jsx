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
    domain: "www.propertydealerinhisar.com", // ✅ static domain
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
    <section className="bg-white md:py-10 py-6">
      <div className="max-w-4xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10 border-b border-[#5E23DC]/20 pb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">
            {dealerName} – Real Estate Partner in {dealerCity} - 125001
          </h1>

          <p className="text-base text-gray-600 mt-2">
            {dealerCity}, Haryana
          </p>
        </div>

        {/* INTRO */}
        <p className="text-gray-700 leading-7 mb-6">
          Sometimes, property decisions don’t start with a plan. They start with a feeling.  
          A thought like, <b>“Maybe it’s time to buy something of our own.”</b>  
          Or <b>“We need a better place for business.”</b>  
          And suddenly, questions appear: where to look, whom to trust, what price is right.  
          It can feel noisy. Confusing. A little overwhelming.
        </p>

        <p className="text-gray-700 leading-7 mb-6">
          That’s where <b>{dealerName}</b> quietly fits in as a reliable  
          <b> real estate agent in {dealerCity}</b>, guiding buyers, sellers, and investors  
          through the property world with clarity and care.  
          No rushed talks. No forced deals. Just honest guidance, shaped around real needs.
        </p>

        <p className="text-gray-700 leading-7 mb-8">
          If you’re searching for the <b>best property dealer in {dealerCity}</b>,  
          someone who understands the city, the market, and the people, you're in the right place.
        </p>

        {/* ABOUT */}
        <h2 className="text-xl font-semibold text-black mb-3">
          About {dealerName}
        </h2>

        <p className="text-gray-700 leading-7 mb-6">
          Every property journey is personal. Some clients are buying their first home.  
          Some are expanding a business. Some are investing for the future.  
          We understand that no two requirements are the same.
        </p>

        <p className="text-gray-700 leading-7 mb-6">
          As a professional real estate agent in {dealerCity}, the focus remains simple –  
          to make property dealing easy to understand, easy to trust, and easy to complete.  
          From small residential plots to large commercial spaces, every deal is handled with  
          patience, transparency, and market awareness.
        </p>

        <p className="text-gray-700 leading-7 mb-8">
          This isn’t just about property. It’s about <b>peace of mind.</b>
        </p>

        {/* MISSION */}
        <h2 className="text-xl font-semibold text-black mb-3">
          Mission and Working Style
        </h2>

        <p className="text-gray-700 leading-7 mb-6">
          The mission is to help clients make informed real estate decisions  
          without stress or confusion. All aspects of property paperwork,  
          price negotiations, and legal checks are explained in plain language, step by step.
        </p>

        <p className="text-gray-700 leading-7 mb-8">
          Trust isn’t built in one meeting. It grows slowly through honest advice,  
          clear communication, and reliable service.  
          That’s what makes <b>{dealerName}</b> stand out as the  
          <b> best property dealer in {dealerCity}.</b>
        </p>

        {/* MARKET UNDERSTANDING */}
        <h2 className="text-xl font-semibold text-black mb-3">
          Understanding the {dealerCity} Property Market
        </h2>

        <p className="text-gray-700 leading-7 mb-6">
          {dealerCity} is changing. New sectors are developing. Roads are expanding.  
          Property values are rising steadily. Opportunities exist, but only if you know where to look.
        </p>

        <p className="text-gray-700 leading-7 mb-6">
          <b>{dealerName}</b> keeps a close eye on local trends, pricing patterns, and upcoming developments.  
          This market understanding helps clients choose the right:
        </p>

        <ul className="list-disc pl-6 text-gray-700 leading-7 mb-8 space-y-2">
          <li>Residential plots in {dealerCity} for home building or investment</li>
          <li>Commercial property for sale in {dealerCity} for shops, offices, and showrooms</li>
          <li>Rental property in {dealerCity} for families, students, and working professionals</li>
        </ul>

        {/* SERVICES */}
        <h2 className="text-xl font-semibold text-black mb-3">
          Services Offered
        </h2>

        <p className="text-gray-700 mb-4">
          Property needs don’t end at buying or selling. That’s why <b>{dealerName}</b> offers complete real estate support under one roof:
        </p>

        <ul className="list-disc pl-6 text-gray-700 leading-7 mb-8 space-y-2">
          <li>Buying and selling of residential plots in {dealerCity}</li>
          <li>Assistance in commercial property for sale in {dealerCity}</li>
          <li>Support for rental property in {dealerCity}</li>
          <li>Property site visits and verification</li>
          <li>Ownership and legal document checks</li>
          <li>Price negotiation guidance</li>
          <li>Registration and paperwork assistance</li>
        </ul>
        <p className="text-gray-700 mb-4">
Everything is explained simply. Everything was handled smoothly.        </p>

        {/* WHY CHOOSE US */}
        <h2 className="text-xl font-semibold text-black mb-3">
          Why Choose Us?
        </h2>

        <ul className="list-disc pl-6 text-gray-700 leading-7 mb-8 space-y-2">
          <li><b>Local Market Expertise</b> – Deep understanding of {dealerCity} real estate zones</li>
          <li><b>Personalized Guidance</b> – Every client receives solutions based on real needs</li>
          <li><b>Transparent Process</b> – No hidden costs. No unclear terms.</li>
          <li><b>Complete Support</b> – From first inquiry to final registration</li>
          <li><b>Client Satisfaction Focus</b> – Because long-term trust matters more than quick deals</li>
        </ul>
        <p className="text-gray-700 mb-4">
This is how a true real estate agent in Hisar should work: steady, honest, reliable.        </p>

        {/* HELP SECTION */}
        <h2 className="text-xl font-semibold text-black mb-3">
          Helping You Make Confident Property Decisions
        </h2>

        <p className="text-gray-700 leading-7 mb-8">
          Many people delay property decisions simply because they feel unsure.  
          Is the price right? Is the location good? Are documents clear?  
We help remove that uncertainty. Every property option is explained. Every risk is checked. Every opportunity is explored. So clients move forward with confidence, not guesswork.        </p>
          <p className="text-gray-700 mb-4">
That’s the quiet difference a professional best property dealer in Hisar brings.        </p>
              <h2 className="text-xl font-semibold text-black mb-3">
         Connect With {dealerName}
        </h2>
        <p className="text-gray-700 mb-4">
If you’re planning to buy, sell, rent, or invest in property, a simple conversation can change everything.        </p>
        <p className="text-gray-700 mb-4">
Reach out to us and explore genuine real estate opportunities in Hisar with clarity and comfort. Whether it’s a home, a business space, or an investment plot,  the right guidance is now within reach.        </p>
        {/* CONCLUSION */}
        <h2 className="text-xl font-semibold text-black mb-3">
          Conclusion
        </h2>

        <p className="text-gray-700 leading-7 mb-10">
          Property decisions are big. Emotional. Financial. Personal.  
          Having the <b>best property dealer in {dealerCity}</b> beside you  
          turns uncertainty into clarity.  
          <b> {dealerName}</b> stands for honest guidance, market understanding, and smooth real estate experiences. Whether you’re buying a home, leasing a shop, or investing in land, your property journey deserves support that feels human, not mechanical.

        </p>
        <p className="text-gray-700 mb-4">
And it all begins with one simple step, reaching out.        </p>

        {/* FAQ SECTION */}
        {/* FAQ SECTION */}
<h2 className="text-xl font-semibold text-black mb-4">
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
      a: "Yes. Complete support is provided to provide services for residential and commercial needs.",
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
      a: "Simply contact us and share your requirements, and receive guided property options.",
    },
  ].map((item, index) => (
    <div
      key={index}
      className={`rounded-lg transition-all duration-300 ${
        openFaq === index
          ? "border border-[#5E23DC]/40 bg-[#F3EFFF]"
          : "border-b border-[#5E23DC]/20"
      }`}
    >
      <button
        onClick={() => toggleFaq(index)}
        className="w-full text-left font-medium text-black flex justify-between items-center p-3"
      >
        <span>{item.q}</span>

        <span className="text-[#5E23DC] font-bold text-lg">
          {openFaq === index ? "−" : "+"}
        </span>
      </button>

      {openFaq === index && (
        <div className="px-4 pb-4">
          <div className="bg-white border border-[#5E23DC]/20 rounded-md p-4 text-gray-700 shadow-sm">
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
