"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useCity } from "@/context/design7api/CityContext";

export default function DealerDetailPage() {

  const params = useParams();

  const cityParam = params?.city;
  const slugParam = params?.slug;

  const { dealers, loading } = useCity();

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // 🔥 FIND CURRENT DEALER FROM CONTEXT DATA
  const dealer = dealers?.find(
    (d) => d.slug === slugParam && d.city?.toLowerCase() === cityParam?.toLowerCase()
  );

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="px-6 py-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-medium">
          Loading dealer details...
        </div>
      </div>
    );
  }

  if (!dealer) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="text-gray-600">
          Dealer not found
        </div>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-4xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10 bg-white rounded-3xl p-6 border border-indigo-200 shadow-sm">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <span className="inline-block bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full mb-2 border border-indigo-200">
                Verified Property Dealer
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text leading-tight">
                {dealer.name}
              </h1>

              <p className="text-base text-gray-600 mt-1">
                 {dealer.city}, Haryana
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={`/contact?dealer=${dealer.slug}`}
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-sm hover:opacity-90 transition"
              >
                Contact Now
              </a>
            </div>

          </div>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-2xl border border-indigo-200 text-center">
            <p className="text-indigo-700 font-bold text-lg">10+</p>
            <p className="text-xs text-gray-500">Years Experience</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-purple-200 text-center">
            <p className="text-purple-700 font-bold text-lg">500+</p>
            <p className="text-xs text-gray-500">Happy Clients</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-pink-200 text-center">
            <p className="text-pink-700 font-bold text-lg">100%</p>
            <p className="text-xs text-gray-500">Trusted Service</p>
          </div>
        </div>

        {/* ABOUT DEALER */}
        <div className="bg-white rounded-3xl p-6 mb-6 border border-indigo-200">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">
            About {dealer.name}
          </h2>

          <p className="text-gray-700 leading-7">
            <b>{dealer.name}</b> is one of the most trusted and reliable property dealers in <b>{dealer.city}</b>, Haryana.  
            We help buyers and sellers connect smoothly and complete real estate deals with full transparency.

            Our team ensures that every customer gets proper guidance, best market prices, and genuine property options.
          </p>

          {dealer.address && (
            <p className="text-gray-700 leading-7 mt-3">
              <b>Office Address:</b> {dealer.address}
            </p>
          )}
        </div>

        {/* SERVICES */}
        <div className="bg-white rounded-3xl p-6 mb-6 border border-purple-200">
          <h2 className="text-xl font-semibold text-purple-700 mb-3">
            Services Offered
          </h2>

          <ul className="text-gray-700 leading-7 list-disc pl-5 space-y-2">
            <li>Residential & Commercial Property Buying</li>
            <li>Property Selling and Renting Support</li>
            <li>Legal Documentation Assistance</li>
            <li>Property Site Visits</li>
            <li>Price Negotiation</li>
            <li>Investment Consultation</li>
          </ul>
        </div>

        {/* TAGS */}
        {dealer.tags && dealer.tags.length > 0 && (
          <div className="bg-white rounded-3xl p-6 mb-6 border border-pink-200">
            <h2 className="text-xl font-semibold text-pink-700 mb-3">
              Expertise Areas
            </h2>

            <div className="flex flex-wrap gap-2">
              {dealer.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* WHY CHOOSE */}
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-6 mb-10 border border-indigo-200">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">
            Why Choose {dealer.name}?
          </h2>

          <p className="text-gray-700 leading-7">
            {dealer.name} provides transparent and honest real estate services in {dealer.city}.  
            We focus on customer satisfaction and help clients make the best property decisions with complete peace of mind.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-white rounded-3xl p-6 border border-indigo-200">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How can I contact this dealer?",
                a: "You can click on the Contact Now button above to get in touch directly with the dealer."
              },
              {
                q: `Does ${dealer.name} handle property documentation?`,
                a: "Yes, full assistance is provided for paperwork, agreements, and legal formalities."
              },
              {
                q: `Which areas in ${dealer.city} do you serve?`,
                a: dealer.name + " deals in all major localities of " + dealer.city + " and nearby regions."
              },
              {
                q: "Are the property listings verified?",
                a: "Yes, all property listings are genuine and verified before being shown to clients."
              }
            ].map((item, index) => (
              <div key={index} className="border border-indigo-200 rounded-xl">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left font-medium text-gray-800 flex justify-between items-center p-4"
                >
                  <span>{item.q}</span>
                  <span className="text-indigo-600 font-bold text-xl">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-4 pb-4 text-gray-700">
                    {item.a}
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
