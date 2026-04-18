export default function GurgaonHeroSection() {
  return (
    <section className="w-full bg-[#f8fafc] py-6 px-2 md:px-12">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-blue-600 leading-tight">
          Property Dealer in Gurgaon – Complete Guide to Find the Best Real Estate Agents, Buy, Sell & Invest in Gurgaon Property
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-blue-600 my-6 rounded-full"></div>

        {/* Intro */}
        <p className="text-black text-lg md:text-xl mb-6 font-medium">
          Introduction: Find the Best Property Dealer in Gurgaon Without Confusion
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          Finding a trusted property dealer in Gurgaon is very important if you are planning to buy property, sell property, or invest in real estate. Gurgaon, also known as Gurugram, is one of the fastest-growing real estate markets in India, and thousands of people search daily for the best property dealer in Gurgaon.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          However, the biggest problem is that there are many real estate agents in Gurgaon, and users often get confused about which one to trust.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          To solve this problem, platforms like PropertyDealerInGurgaon.com are designed to bring all property dealers in Gurgaon on one platform so that users can easily find, compare, and contact the right real estate agent in Gurgaon.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          Whether you want to buy property in Gurgaon, sell property in Gurgaon, invest in commercial property, or find rental property in Gurgaon, this guide will help you understand everything in simple language.
        </p>

        {/* MARKET */}
        <h2 className="text-xl md:text-2xl font-semibold text-blue-600">
          Understanding the Real Estate Market in Gurgaon
        </h2>

        <div className="w-16 h-1 bg-blue-600 my-4 rounded-full"></div>

        <p className="text-gray-700 text-lg mb-4">
          Gurgaon, officially known as Gurugram, is a major corporate and real estate hub. It is known for:
        </p>

        {/* Feature List */}
        <ul className="list-disc pl-6 text-gray-800 text-lg space-y-2 mb-6">
          <li>High-rise residential buildings</li>
          <li>Luxury apartments</li>
          <li>Corporate offices</li>
          <li>Commercial hubs</li>
        </ul>

        <p className="text-gray-700 text-lg mb-4">
          People are actively searching for:
        </p>

        {/* Search Keywords */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            "Property dealer in Gurgaon",
            "Best property dealer in Gurgaon",
            "Real estate agents in Gurgaon",
            "Flats in Gurgaon",
            "Plots in Gurgaon",
            "Commercial property in Gurgaon",
          ].map((item, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium border border-blue-200"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="text-gray-700 text-lg mb-4">
          Gurgaon is divided into different areas such as:
        </p>

        {/* Areas */}
        <ul className="list-disc pl-6 text-gray-800 text-lg space-y-2 mb-6">
          <li>DLF Phase 1, 2, 3, 4, 5</li>
          <li>Golf Course Road</li>
          <li>Sohna Road</li>
          <li>Sector 56, Sector 57, Sector 67, Sector 82, and many more</li>
        </ul>

        <p className="text-gray-700 text-lg">
          Each area has different property types and price ranges.
        </p>

      </div>
    </section>
  );
}