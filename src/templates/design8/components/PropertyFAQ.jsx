"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PropertyFAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "How do I find a reliable property dealer near me in Delhi, Noida, or Haryana?",
      answer:
        "Finding a reliable property dealer near you in Delhi, Noida, or Haryana starts with checking three things: their RERA registration number, their local market experience, and their client reviews. On Real Estate Agents Near Me, every listed dealer has a profile with their specialisation — whether it is residential flats, commercial shops, agricultural land, or builder floors. You can filter by city (Gurgaon, Faridabad, Panipat, Rohtak, Karnal, and more), by requirement type (buy, sell, rent), and by property category. We recommend shortlisting two to three agents, calling each one, and asking about recent transactions they have completed in your target locality. A genuine local agent will immediately quote you accurate circle rates, current market prices per square yard, and builder reputations — without needing to check and get back to you. Always ask for references from past clients. Our platform makes this easier by showing you agent ratings and reviews from real property buyers and sellers in your area.",
    },
    {
      question:   "What is the difference between a property dealer, real estate agent, and property consultant?",
      answer:
        "In India, these three terms are often used interchangeably, but there are subtle differences that matter. A property dealer (also called a property broker) is typically a local professional who facilitates buying, selling, and renting transactions and earns a brokerage fee — usually 1% to 2% of the transaction value. A real estate agent is a broader term that can include both independent brokers and agency-affiliated professionals who may also offer listing services and marketing for sellers. A property consultant, on the other hand, is typically a more senior expert who advises clients on investment strategy, market trends, legal due diligence, and portfolio diversification — often charging a consulting fee rather than a pure brokerage commission. In cities like Gurgaon, Noida, and Delhi, many professionals now play all three roles. When choosing someone from our directory, look at their profile description to understand their area of specialisation and what services they offer beyond just transaction facilitation.",
    },
    {
      question:  "Is it mandatory for property dealers in Haryana and Delhi to be RERA registered?",
      answer:
        "Yes. Under the Real Estate (Regulation and Development) Act, 2016 (RERA), all real estate agents who assist in buying or selling properties in projects that are RERA-registered must themselves be registered as agents with the respective state RERA authority. In Haryana, this is managed by HRERA (Haryana Real Estate Regulatory Authority), which has two benches — one for Gurugram and one for Panchkula. In Delhi, the Delhi RERA governs this. In Uttar Pradesh (covering Noida and Greater Noida), it is UP RERA. RERA registration protects you as a buyer or seller — a registered agent is legally accountable, cannot misrepresent property details, and must maintain transparency about their fees. Always ask your agent for their RERA registration number and verify it on the official state RERA portal. While some agents operating only in resale or rental markets may not require RERA registration, choosing a RERA-registered dealer is always the safer and more professional choice, especially for high-value transactions.",
    },
    {
      question: "How much brokerage or commission do property dealers charge in Delhi NCR and Haryana?",
      answer:
        "Property dealer brokerage in Delhi NCR and Haryana typically ranges from 1% to 2% of the total transaction value for purchase and sale transactions. For example, on a ₹60 lakh flat purchase in Gurgaon or Noida, you might pay between ₹60,000 to ₹1,20,000 as brokerage. For rental transactions, the standard brokerage is usually one month's rent — split between the landlord and tenant, or paid by one party depending on the negotiation. In premium localities like Golf Course Road Gurgaon, South Delhi, or Sector 150 Noida, some agents charge slightly higher fees due to the complexity and value of transactions. Importantly, brokerage is always negotiable — do not hesitate to discuss the fee structure upfront before signing any agreement. Some dealers listed on our platform also offer fixed-fee consulting packages for investors. Always insist on a written brokerage agreement to avoid disputes later.",
    },
    {
      question: "What documents should I verify before buying a property in Haryana or Delhi?",
      answer:
        "Document verification is the single most important step in any property purchase. A good property dealer in Haryana or Delhi will guide you through all of them, but here is what you must independently verify. For a resale flat or independent house: Sale deed (chain of ownership), Encumbrance certificate (to check for any loans or liens), Property tax receipts (last 3–5 years), Society NOC (if applicable), Occupation Certificate, and Approved building plan. For under-construction properties: check the RERA registration of the project, land title clearance, environmental and fire NOCs, and the builder's track record of delivery. For properties in Haryana, additionally verify the CLU (Change of Land Use) and DTCP/DGTCP approvals. For agricultural land, confirm if conversion to residential or commercial use is legally permitted. Our partnered agents can connect you with experienced property lawyers for due diligence — do not skip this step no matter how attractive the deal looks.",
    },
    {
      question: "Which are the best localities to buy a flat or plot in Haryana right now?",
      answer:
        "Haryana's real estate market has several high-growth investment corridors in 2025–26. Gurgaon (Gurugram) continues to be the premium destination — with Golf Course Extension Road, Dwarka Expressway, and New Gurugram (sectors 81–95) seeing strong demand from IT professionals and NRI investors. Faridabad is excellent for affordable residential options with good connectivity to South Delhi. Sonipat and Rohtak are emerging corridors, especially due to the KMP Expressway and the Western Peripheral Expressway. Karnal and Panipat are ideal for plotted development and commercial investment due to their strategic location on the Delhi–Chandigarh highway. Panchkula and Zirakpur (though bordering Punjab) attract buyers looking for quality construction near Chandigarh at lower prices than the city proper. Our property dealers across all these cities can give you hyper-local insights into which sectors, colonies, and builder projects are genuinely worth your investment rupee.",
    },
    {
      question: "How does the home buying process work in India for a first-time buyer?",
      answer:
        "As a first-time homebuyer in Delhi, Noida, or Haryana, the process can feel overwhelming — but breaking it into clear steps makes it manageable. Step 1: Define your budget — including the down payment (typically 10–20% of property value), registration charges (5–7% in most states), and stamp duty. Step 2: Choose the right locality based on your workplace, schools, and lifestyle needs. Step 3: Connect with a verified local property dealer from our directory who specialises in your target area and property type. Step 4: Shortlist properties and do physical site visits — never finalise from photos alone. Step 5: Legal due diligence — hire a property lawyer to verify title documents, approvals, and encumbrances. Step 6: Token amount and agreement to sell — once satisfied, pay a token (typically 1–2% of property value) and sign an ATS. Step 7: Home loan processing if applicable — your bank will conduct its own legal and technical verification. Step 8: Sale deed registration at the local Sub-Registrar office. A seasoned property dealer from our platform can hand-hold you through every step, making the process smooth and legally watertight.",
    },
    {
      question: "Can I sell my property fast without a broker? Why should I hire a property dealer?",
      answer:
        "Technically, yes — you can list your property on online portals and attempt a direct sale. But in practice, properties sold through experienced local property dealers sell faster, at better prices, and with fewer legal complications. Here is why: a local property dealer in your area already has a database of active buyers looking for exactly what you are selling. They know how to price your property correctly — not too high (which causes it to stagnate) and not too low (which leaves money on the table). They handle buyer negotiations, site visit logistics, and legal paperwork — saving you enormous time. They also screen buyers for financial seriousness, ensuring you do not waste months entertaining window shoppers. For sellers in Delhi NCR and Haryana, a good property dealer can often close a deal 2–3 months faster than a self-managed sale. The brokerage you pay is almost always recovered through better pricing and faster closure. Connect with a top-rated property dealer for your city from our directory and get a free property valuation to start.",
    },
    {
      question: "How do I rent out my flat or commercial property in Noida or Delhi NCR?",
      answer:
        "Renting out your property in Noida, Delhi, or Gurgaon involves more than just finding a tenant. A reliable property dealer for rentals will help you with: setting the right monthly rent based on current market comparables in your exact society or sector; screening tenant backgrounds (employment, previous rental history, identity verification); drafting a legally sound rent agreement (usually 11 months, notarised or registered); collecting security deposit documentation; and managing any initial repair or furnishing negotiations. In Noida and Delhi NCR, rental demand is especially strong in sectors close to major office parks, metro stations, and top schools — a local dealer will know exactly which tenant profile is likely for your property. For commercial rentals (shops, offices, warehouses), the process is more complex and involves MSME or corporate tenants who require longer lock-in periods and detailed lease deeds. Our platform has dedicated property dealers specialising in rental management across all major cities in Delhi NCR and Haryana.",
    },
    {
      question: "Is investing in real estate in Haryana or Noida good in 2025–26?",
      answer:
        "Real estate investment in Haryana and Noida continues to be one of the most resilient and rewarding asset classes in India, especially when you invest in the right micro-markets with the guidance of an experienced property consultant. Gurgaon has seen consistent capital appreciation of 8–15% annually in premium sectors over the last three years, driven by strong IT and multinational office demand. Noida and Greater Noida (especially sectors along the Noida–Greater Noida Expressway and around Jewar Airport) are witnessing rapid infrastructure development that is pushing up property values significantly. In Haryana, emerging corridors along the KMP Expressway, Dwarka Expressway extension, and the Delhi–Amritsar–Katra Expressway offer early-mover advantages for plotted and township investments. That said, not every location or project delivers equal returns. Factors like builder credibility, RERA compliance, proximity to infrastructure, and possession timelines matter enormously. Connect with a seasoned property investment advisor from our directory for a personalised, locality-specific consultation before committing your capital.",
    },
  ];

  return (
    <section className="py-6 bg-[#12060C] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#14070D] via-[#1B0813] to-[#12060C]" />

      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#76153C]/15 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5A0E24]/15 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#76153C]/20 text-pink-300 text-sm font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-2xl md:text-4xl font-bold text-white">
            Property Dealer FAQs
          </h2>

          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Get answers to the most common questions about buying, selling,
            renting, and investing in real estate.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <h3 className="text-white font-semibold text-lg">
                  {faq.question}
                </h3>

                <ChevronDown
                  size={22}
                  className={`text-pink-300 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-5 pb-5 text-gray-300 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}