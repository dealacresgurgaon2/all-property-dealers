import Breadcrumb from "@/templates/design2/components/Breadcrumb";

export default function FaridabadHeroSection() {
  return (
    <section className="w-full bg-[#fafafa] py-6 px-2 md:px-12">
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <Breadcrumb />
        </div>
        
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-[#d4af37] leading-tight">
          Property Dealer in Faridabad – Complete Guide to Find the Best Real Estate Agents, Buy, Sell & Invest in Faridabad Property
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-[#d4af37] my-6 rounded-full"></div>

        {/* Intro */}
        <p className="text-black text-lg md:text-xl mb-6 font-medium">
          Introduction: Find the Best Property Dealer in Faridabad Easily
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          Finding a reliable property dealer in Faridabad is very important if you are planning to buy property, sell property, or invest in real estate. Faridabad is growing fast, and many people are searching daily for the best property dealer in Faridabad.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          However, the main problem is that there are many real estate agents in Faridabad, and users often get confused about which one to choose.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          To solve this problem, platforms like PropertyDealerInFaridabad.com are designed to bring all property dealers in Faridabad on one platform. This helps users find, compare, and contact the right real estate agent in Faridabad easily.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          Whether you want to buy property in Faridabad, sell property in Faridabad, or find rental property in Faridabad, this guide will help you understand everything step by step.
        </p>

        {/* MARKET */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#d4af37]">
          Understanding the Real Estate Market in Faridabad
        </h2>

        <div className="w-16 h-1 bg-[#d4af37] my-4 rounded-full"></div>

        <p className="text-gray-700 text-lg mb-4">
          Faridabad is one of the fastest-developing cities in the NCR region. It offers a mix of affordable housing, mid-range properties, and commercial opportunities.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          People are actively searching for:
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            "Property dealer in Faridabad",
            "Best property dealer in Faridabad",
            "Real estate agents in Faridabad",
            "Flats in Faridabad",
            "Plots in Faridabad",
            "Commercial property in Faridabad",
          ].map((item, index) => (
            <span
              key={index}
              className="bg-[#fff7e6] text-[#d4af37] px-4 py-2 rounded-full text-sm font-medium border border-[#f1d58a]"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="text-gray-700 text-lg mb-4">
          Faridabad is divided into different sectors like Sector 15, Sector 21, Sector 37, Sector 75, Sector 85, and many more. Each sector has different types of properties and price ranges.
        </p>

        <p className="text-gray-700 text-lg">
          Because of this variety, connecting with the right property dealer in Faridabad becomes very important.
        </p>

      </div>
    </section>
  );
}