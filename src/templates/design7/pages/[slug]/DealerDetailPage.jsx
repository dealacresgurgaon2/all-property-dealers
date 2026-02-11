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
        <div className="text-gray-600">
          Dealer not found
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER CARD */}

        <div className="mb-10 bg-white rounded-3xl p-6 border border-blue-200 shadow-sm">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
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

            {/* <div>
              <a
                href={`/contact?dealer=${dealer.slug}`}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition"
              >
                Contact Now
              </a>
            </div> */}

          </div>
        </div>

        {/* MAIN CONTENT */}

        <div className="bg-white rounded-3xl p-7 mb-6 border border-gray-200 space-y-6 text-gray-700 leading-7">

          <p>
            <b className="text-blue-700">{dealer.city}</b> has been recognised as one of the fastest-growing real estate markets in Haryana. Due to its proximity to Delhi, along with improved roads and rail connectivity, the growth of industrial activities, and planned residential developments, <b>{dealer.city}</b> offers strong opportunities for business owners, homebuyers, and property investors.
          </p>

          <p>
            <b className="text-blue-700">{dealer.name}</b> is a reputable and trustworthy property dealer located in <b>{dealer.city}</b>, that provides professional real estate services tailored for landlords, buyers, sellers, tenants, and investors.
          </p>

          <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
            About {dealer.name}
          </h2>

          <p>
            It is a complete estate consulting firm located in <b>{dealer.city}</b> that specialises in commercial, residential, and rental properties.
          </p>

          <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
            <li>Understanding the precise requirements and budget of customers</li>
            <li>Market research by area and price analysis</li>
            <li>Verified and legal clear properties</li>
            <li>Registration and documentation assistance</li>
            <li>Ethical practices and long-term trust</li>
          </ul>

          <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
            Understanding the {dealer.city} Property Market
          </h2>

          <p>
            The real estate market of <b>{dealer.city}</b> is having good investment opportunities and prices for properties vary according to location and infrastructure.
          </p>

          <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
            <li>Area-wise price trends</li>
            <li>Highway and infrastructure developments</li>
            <li>Commercial and residential rental demand</li>
            <li>Ownership documents and approvals</li>
          </ul>

          <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
            Services Offered
          </h2>

          <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
            <li>Selling and buying residential property</li>
            <li>Commercial property assistance</li>
            <li>Rental property services</li>
            <li>Document verification and legal help</li>
            <li>Negotiation support</li>
          </ul>

          <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
            Why Choose {dealer.name}?
          </h2>

          <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
            <li>Local Market Experience</li>
            <li>Transparent Procedure</li>
            <li>Client-focused solutions</li>
            <li>Complete Assistance</li>
            <li>Professional Ethics</li>
          </ul>

          <h2 className="text-2xl font-bold text-indigo-700 border-l-4 border-indigo-500 pl-3">
            Contact {dealer.name}
          </h2>

          <p>
            If you're looking to sell, buy or rent property in <b>{dealer.city}</b>, expert assistance can speed up the process and minimise risk.
          </p>

        </div>

        {/* FAQ SECTION */}

        <div className="bg-white rounded-3xl p-7 border border-gray-200">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
            Frequently Asked Questions (FAQs)
          </h2>

          {[
            {
              q: `What is the best way a property broker can help in ${dealer.city}?`,
              a: `A professional real estate agent in ${dealer.city} helps at every step including property search, site visits, negotiation, and documentation.`
            },
            {
              q: `Does ${dealer.name} deal in commercial properties?`,
              a: `Yes, ${dealer.name} offers complete support for commercial properties in ${dealer.city}.`
            },
            {
              q: `Are rental services available?`,
              a: `Yes, both residential and commercial rental services are provided in ${dealer.city}.`
            },
            {
              q: `Is legal documentation support provided?`,
              a: `Yes, full legal and documentation support is provided for secure transactions.`
            },
            {
              q: `How can I start property search in ${dealer.city}?`,
              a: `Simply contact ${dealer.name} with your requirements and you will be guided step-by-step.`
            }
          ].map((faq, index) => (
            <div key={index} className="border border-blue-200 rounded-xl mb-3 overflow-hidden">

              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-5 py-4 font-semibold bg-blue-50 text-blue-800 hover:bg-blue-100 transition"
              >
                {faq.q}
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
