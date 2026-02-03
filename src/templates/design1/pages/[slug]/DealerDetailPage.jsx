"use client";

import { useState } from "react";
import { useParams ,useSearchParams  } from "next/navigation";

export default function DealerDetailPage() {
  const { slug } = useParams();

  const [openFaq, setOpenFaq] = useState(null);
const searchParams = useSearchParams();
const dealerName = searchParams.get("name");
const dealerCity = searchParams.get("city");
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">

        {/* ================= PROFESSIONAL HEADER ================= */}
        <div className="mb-10 border-b border-gray-200 pb-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* LEFT SIDE */}
            <div>
              <span className="inline-block bg-[#1e40af]/10 text-[#1e40af] text-xs px-3 py-1 rounded-full mb-2">
                Verified Property Dealer
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1f33] leading-tight">
                 {dealerName}
              </h1>

              <p className="text-base text-gray-500 mt-1">
                 {dealerCity} Haryana
              </p>
            </div>

            {/* RIGHT SIDE TAG */}
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-green-50 text-green-700 text-sm rounded-md border border-green-200">
                ✔ Trusted & Verified
              </span>
            </div>

          </div>

          {/* QUICK INFO BAR */}
          

        </div>

        {/* INTRODUCTION */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Introduction
        </h2>

        <p className="text-gray-700 leading-7 mb-8">
          Finding the right property can be a complex and time-consuming process. 
          Whether you're buying, selling, or renting, having a professional by your side 
          can make all the difference. {dealerName} , we specialize in guiding 
          clients through every step of their real estate journey in {dealerCity} . Our goal is to simplify 
          the process, ensure transparency, and help you make informed decisions.
        </p>

        {/* FEATURES */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Features of a Real Estate Agent and Their Benefits
        </h2>

        <p className="text-gray-700 leading-7 mb-8">
          A real estate agent serves as a bridge between property buyers and sellers. 
          Their in-depth knowledge of the local market, legal procedures, and negotiation strategies 
          provides significant advantages. Key features of a good agent include market expertise, 
          access to exclusive listings, strong communication skills, and legal knowledge. 
          Working with a trusted agent can save time, reduce stress, and often result in better 
          financial outcomes, whether you're buying or selling.
        </p>

        {/* THINGS TO CONSIDER */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Things to Consider Before Hiring an Estate Agent in {dealerCity}
        </h2>

        <p className="text-gray-700 leading-7 mb-8">
          Before choosing an estate agent in {dealerCity} , it’s important to evaluate a few key aspects. 
          Check their licensing and professional certifications, ask about their experience in the local market, 
          and look at recent client reviews or testimonials. It's also useful to compare commission rates and 
          understand the scope of services they offer. Ensure the agent has a strong grasp of neighborhood trends 
          and can provide a realistic valuation of the property.
        </p>

        {/* DOS AND DONTS */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Dos and Don’ts While Hiring a Real Estate Agent in {dealerCity}
        </h2>

        <p className="text-gray-700 leading-7 mb-8">
          Do ask for references and speak directly with past clients to understand their experiences. 
          Do ensure the agent has a strong local network and up-to-date knowledge of current listings 
          and market trends. Don’t rely solely on advertisements or promotional content. Don’t rush the decision—interview 
          multiple agents before making your final choice. Avoid agents who are overly pushy or promise unrealistic returns.
        </p>

        {/* TIPS */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Tips and Tricks Before Hiring a Property Agent in {dealerCity}
        </h2>

        <p className="text-gray-700 leading-7 mb-8">
          Always verify the agent’s credentials and cross-check their track record. 
          Look for agents who specialize in the type of property you are interested in—residential, commercial, rental, etc. 
          Be clear about your needs and budget from the beginning, and choose someone who listens carefully and provides honest guidance. 
          Ask about the marketing strategies they use for listings and how they handle negotiations. Lastly, ensure all agreements are documented properly.
        </p>

        {/* WHY CHOOSE US */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-3">
          Why Choose {dealerName}:
        </h2>

        <p className="text-gray-700 leading-7 mb-10">
          At {dealerName} , we combine local expertise with personalized service to offer unmatched 
          real estate solutions in Ambala . We believe in building long-term relationships based on trust, integrity, 
          and results. Our team is committed to helping you find the right property or buyer with minimal hassle and maximum satisfaction. 
          With a client-first approach and a deep understanding of the market, we aim to be your go-to property partner in {dealerCity} .
        </p>

        {/* FAQ SECTION */}
        <h2 className="text-xl font-semibold text-[#0b1f33] mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
  {[
    {
      q: "How do I know if a real estate agent is licensed?",
      a: "You can request the agent to provide their license or registration certificate, typically issued by a government-approved real estate authority. In many regions, agents must be registered with a regulatory body. You can also verify their credentials online if the licensing organization maintains a public directory.",
    },
    {
      q: `What are the typical commission charges in ${dealerCity}?`,
      a: "Commission rates vary based on the type of transaction and local market norms. In most cases, residential property sales incur a commission of 1% to 2% of the sale value. Commercial deals may have slightly higher rates. It's important to clarify the commission structure in advance, including whether it covers taxes and additional charges.",
    },
    {
      q: "Can I work with more than one agent at the same time?",
      a: "Yes, unless you've signed an exclusive agreement with one agent, you're free to work with multiple agents. However, doing so may lead to confusion or duplicate listings. If you choose this route, ensure all agents are aware of your preferences and there’s no legal or communication overlap.",
    },
    {
      q: `How long does it usually take to sell a property in ${dealerCity}?`,
      a: `The selling timeline depends on several factors such as location, pricing, demand, and property condition. In ${dealerCity}, it typically takes anywhere from a few weeks to several months to sell a property. Proper valuation, staging, marketing, and working with an experienced agent can help accelerate the process.`,
    },
    {
      q: "Do agents help with legal documentation and registration?",
      a: "Yes, many professional real estate agents offer assistance with legal formalities such as drafting sale agreements, verifying documents, coordinating with legal advisors, and supporting the property registration process. It's best to confirm the scope of services in advance, as not all agents include legal support in their offerings.",
    },
    {
      q: "What should I do if I’m not satisfied with my current agent?",
      a: "If you're dissatisfied, first try discussing your concerns openly—misunderstandings can often be resolved with communication. If the issue continues and you're not bound by an exclusive agreement, you're free to end the relationship. Always review the terms of any agreement beforehand to understand your rights and the termination process.",
    },
  ].map((item, index) => (
    <div key={index} className="border-b border-gray-200 pb-2">
      <button
        onClick={() => toggleFaq(index)}
        className="w-full text-left font-medium text-[#0b1f33] flex justify-between"
      >
        {item.q}
        <span className="text-[#1e40af]">
          {openFaq === index ? "−" : "+"}
        </span>
      </button>

      {openFaq === index && (
        <div className="mt-2 text-gray-700">
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
