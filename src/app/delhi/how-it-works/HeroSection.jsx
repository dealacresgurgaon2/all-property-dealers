import Breadcrumb from "@/templates/design5/components/Breadcrumb";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-8 px-4 md:px-12">
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-3">
          <Breadcrumb/>
        </div>
        
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight text-left">
          Property Dealer in Delhi – Complete Guide to Find the Best Real Estate Agents, Buy, Sell & Invest in Delhi Property
        </h1>

        {/* Red Divider */}
        <div className="w-24 h-1 bg-red-600 my-6 rounded-full"></div>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 text-left">
          Finding a trusted property dealer in Delhi is one of the most important steps when you want to buy, sell, or invest in property. Delhi is a large and complex real estate market, and thousands of people search daily for the best property dealer in Delhi.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          However, the biggest problem is that there are too many real estate agents in Delhi, and users often get confused about whom to trust.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          To solve this problem, platforms like PropertyDealerInDelhi.com are designed to bring all property dealers in Delhi on a single platform so that users can easily find, compare, and contact the right real estate agent in Delhi.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          Whether you want to buy property in Delhi, sell property in Delhi, invest in real estate, or find rental property in Delhi, this complete guide will help you understand everything in simple language.
        </p>

        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-10">
          Understanding the Real Estate Market in Delhi
        </h2>

        <div className="w-16 h-1 bg-red-600 my-4 rounded-full"></div>

        {/* Market Content */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Delhi is one of the largest and most active real estate markets in India. It includes different types of areas such as:
        </p>

        {/* List */}
        <ul className="text-gray-800 text-lg space-y-2 mb-8">
          <li>• Residential colonies</li>
          <li>• Commercial zones</li>
          <li>• Luxury areas</li>
          <li>• Affordable housing regions</li>
        </ul>

        <p className="text-gray-700 text-lg mb-4">
          People are actively searching for:
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "Property dealer in Delhi",
            "Best property dealer in Delhi",
            "Real estate agents in Delhi",
            "Flats in Delhi",
            "Plots in Delhi",
            "Commercial property in Delhi",
          ].map((item, index) => (
            <span
              key={index}
              className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium border border-red-200"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          Delhi has many well-known locations such as South Delhi, West Delhi, North Delhi, and East Delhi. Each area has different property types and price ranges.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Because of this diversity, choosing the right property dealer in Delhi becomes very important.
        </p>

      </div>
    </section>
  );
}