"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function DealerDetailPage() {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  const params = useParams();

  const cityParam = params?.city;
  const slugParam = params?.slug;

  const [dealer, setDealer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (!cityParam || !slugParam) return;

    const fetchDealer = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_BASE}/api/get/city/${cityParam}`
        );

        const data = await res.json();

        if (data.success) {
          const found = data.data.find(
            (d) => d.slug === slugParam
          );

          setDealer(found || null);
        }

        setLoading(false);
      } catch (err) {
        console.log("Dealer detail error:", err);
        setLoading(false);
      }
    };

    fetchDealer();
  }, [cityParam, slugParam]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="px-6 py-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-medium">
          Loading dealer details...
        </div>
      </div>
    );
  }

  if (!dealer) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-gray-600">Dealer not found</div>
      </div>
    );
  }

  const faqs = [
    {
      q: `What is the best way for a property broker to aid in the purchase or sale of properties in ${dealer.city}?`,
      a: `A professional real estate agent in ${dealer.city} helps at every step of the process. This includes analysing your needs, recommending suitable properties, providing area-wise pricing insights, arranging site visits, and assisting in negotiations. For sellers, correct pricing, property marketing and buyer coordination are handled to ensure smooth and legally secure transactions.`
    },
    {
      q: `Does ${dealer.name} deal in commercial real estate in ${dealer.city}?`,
      a: `Yes, ${dealer.name} offers full assistance for commercial properties including shops, offices, industrial plots, warehouses and commercial buildings in ${dealer.city}. Legal approvals, location suitability and business viability are carefully evaluated.`
    },
    {
      q: `Are rental services available through ${dealer.name}?`,
      a: `Yes, both residential and commercial rental properties in ${dealer.city} are handled. Services include tenant matching, rent negotiation, agreement drafting and smooth possession coordination.`
    },
    {
      q: `Are residential properties like plots, builder floors and homes available?`,
      a: `Yes, ${dealer.name} provides a wide range of residential properties including plots, independent houses, builder floors and apartments in ${dealer.city}. Options are shortlisted based on budget, location and long-term plans.`
    },
    {
      q: `Is legal and documentation support provided?`,
      a: `Yes, legal verification is an important part of the process. This includes title verification, ownership checks, agreement review and registration coordination to ensure safe transactions.`
    },
    {
      q: `How does ${dealer.name} ensure transparency in property transactions?`,
      a: `Transparency is maintained through verified property details, clear pricing guidance, documented procedures and open communication about fees and timelines.`
    },
    {
      q: `How can I start my property search in ${dealer.city}?`,
      a: `Simply contact ${dealer.name}, share your budget and requirements, and suitable properties will be shortlisted. The complete process will be explained step-by-step.`
    }
  ];

  return (
    <section className="bg-gray-50 py-14 flex justify-start">
      <div className="max-w-5xl px-4">

        {/* HEADER */}
        <div className="mb-10 bg-white rounded-3xl p-6 border border-blue-200 shadow-sm">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-2 border border-blue-200">
            Verified Property Dealer
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            {dealer.name} - Trusted Property Dealer in {dealer.city}
          </h1>

          <p className="text-base text-gray-600 mt-1">
            {dealer.city}, Haryana
          </p>
        </div>

        {/* MAIN CONTENT */}
       {/* MAIN CONTENT */}

<div className="bg-white rounded-3xl p-7 mb-6 border border-gray-200 space-y-6 text-gray-700 leading-8">

  <p>
    {dealer.city} has been recognised as one of the fastest-growing real estate markets in Haryana. 
    Due to its proximity to Delhi, along with improved roads and rail connectivity, the growth of industrial activities, 
    and planned residential developments, {dealer.city} offers strong opportunities for business owners, homebuyers, and property investors. 
    The demand for residential plots of land, commercial space, builder floors and rental properties continues to increase in steady increments.
  </p>

  <p>
    {dealer.name} is a reputable and trustworthy property dealer located in {dealer.city}, 
    that provides professional real estate services tailored for landlords, buyers, sellers, tenants, and investors. 
    The emphasis is on authentic property choices, transparent communications, and legally safe transactions. 
    Each transaction is conducted with care, sensitivity and a practical understanding of the market.
  </p>

  <p>
    If you're searching for a trustworthy and experienced real estate agent in {dealer.city} who knows local market trends, 
    local pricing and requirements for documentation, {dealer.name} provides all-inclusive guidance from beginning to completion.
  </p>

  <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
    About {dealer.name}
  </h2>

  <p>
    It is a complete estate consulting firm located in {dealer.city} that specialises in commercial, residential, and rental properties. 
    Services are designed to meet the needs of working professionals, family entrepreneurs, business owners, and investors 
    who require transparent information and seamless execution.
  </p>

  <p>
    As a reputable realtor in {dealer.city}, the working method is built on:
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
    <li>Understanding the precise requirements and budget of customers</li>
    <li>Market research by area and price analysis</li>
    <li>Checklisting verified and legally clear properties</li>
    <li>Correct registration and documentation assistance</li>
    <li>Ethical practices and long-term trust of the client at the heart of each transaction</li>
  </ul>

  <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
    Work Approach and Goals
  </h2>

  <p>
    The primary goal is to make real estate decisions easier and eliminate confusion from the selling, buying, or renting process. 
    Important information such as the cost of property, benefits of location and legal status, timeframes, and future possibilities 
    are clarified before taking the next step.
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
    <li>Budget discussion and evaluation</li>
    <li>Property shortlisting based upon requirements</li>
    <li>Planning and coordination of visits to the site</li>
    <li>Negotiation assistance</li>
    <li>Agreement, documentation, and registration assistance</li>
  </ul>

  <p>
    This step-by-step approach guarantees transparency in the system and minimises risk.
  </p>

  <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
    Understanding the {dealer.city} Property Market
  </h2>

  <p>
    The real estate market of {dealer.city} has good investment opportunities and property prices vary according 
    to location, connectivity, infrastructure and legal approvals.
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
    <li>Area-wise price trends</li>
    <li>Highway and infrastructure developments</li>
    <li>Commercial and residential rental demand</li>
    <li>New inventory and available inventory</li>
    <li>Ownership documents and approvals</li>
  </ul>

  <p>
    This approach, based on data, lets clients select:
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
    <li>Residential property available for purchase in {dealer.city}</li>
    <li>Commercial property to be sold in {dealer.city}</li>
    <li>Commercial and residential rental property for rent in {dealer.city}</li>
  </ul>

  <p>
    All recommendations are based on practicality and specific to the location.
  </p>

  <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
    Services Offered
  </h2>

  <p>
    These services are available within {dealer.city}:
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
    <li>Selling and buying residential property</li>
    <li>Commercial assistance to property</li>
    <li>Commercial and residential rental</li>
    <li>Property visits as well as support for selection</li>
    <li>Checking the validity of document titles and title verification</li>
    <li>Negotiation assistance</li>
    <li>Legal registration and coordination</li>
  </ul>

  <p>
    Each service is offered with transparency, accountability, and professional responsibility.
  </p>

  <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
    Why Choose {dealer.name}?
  </h2>

  <p>
    Selecting the best real estate agent in {dealer.city} will make a huge difference.
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
    <li>Local Market Experience – A solid understanding of {dealer.city}'s industries and growth zones</li>
    <li>Transparent Procedure – Straight pricing, honest advice and clear documentation</li>
    <li>Client-focused solutions – Options matched to actual demands</li>
    <li>Complete Assistance – From initial inquiry until final registration</li>
    <li>Professional Ethics – Reliable communication and legal compliance</li>
  </ul>

  <p>
    These attributes make {dealer.name} an experienced realtor in {dealer.city}.
  </p>

  <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
    Helping Clients Make Informed Decisions
  </h2>

  <p>
    Transactions in property involve legal, financial and long-term considerations. Customers often want clarity regarding:
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
    <li>Valuation of property</li>
    <li>Location suitability</li>
    <li>Legal documentation</li>
    <li>Returns on investment or personal use value</li>
  </ul>

  <p>
    A structured guideline is provided so clients can proceed with confidence and security.
  </p>

  <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
    Contact {dealer.name}
  </h2>

  <p>
    If you're looking to sell, buy, rent or invest in {dealer.city} property, expert assistance can speed up the process and minimise risk.
  </p>

  <p>
    Contact {dealer.name} to discuss your needs and explore the best property options based on real market information.
  </p>

  <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
    Conclusion
  </h2>

  <p>
    The real estate market in {dealer.city} has great potential in the commercial, residential and rental sectors. 
    To maximise opportunities, local knowledge and a professional approach are crucial.
  </p>

  <p>
    With a deep understanding of the market, clear processes, transparent procedures, and complete transactional support system, 
    {dealer.name} serves as a reliable real estate expert in {dealer.city} for sellers, buyers and investors.
  </p>

</div>


        {/* FAQ SECTION */}
        <div className="bg-white rounded-3xl p-7 border border-gray-200 text-left">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
            Frequently Asked Questions (FAQs)
          </h2>

         {faqs.map((faq, index) => (
  <div
    key={index}
    className="border border-blue-200 rounded-xl mb-3 overflow-hidden"
  >
    <button
      onClick={() => toggleFaq(index)}
      className="w-full flex items-center justify-between px-5 py-4 font-semibold bg-blue-50 text-blue-800 hover:bg-blue-100 transition"
    >
      <span>{faq.q}</span>

      <span className="text-2xl font-bold transition-transform duration-300">
        {openFaq === index ? "−" : "+"}
      </span>
    </button>

    {openFaq === index && (
      <div className="px-5 py-4 text-gray-700 bg-white border-t border-blue-200">
        {faq.a}
      </div>
    )}
  </div>
))}

        </div>

      </div>
    </section>
  );
}
