"use client";

import Image from "next/image";
import QueryForm from "@/templates/design2/components/QueryForm";

export default function ContactFaridabad() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">

        {/* Decorative Blur */}
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">

          {/* ===== TOP CENTER CONTENT ===== */}
          <div className=" mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Connect With <span className="text-[#b8964a]">Trusted</span> Property Dealers
              <br />
              in Faridabad
            </h2>

            <p className="text-gray-600 max-w-2xl  text-lg">
              Buy, sell or rent with confidence. We connect you directly with verified
              property dealers across Faridabad – fast, transparent and secure.
            </p>
          </div>

          {/* ===== IMAGE + FORM SECTION ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT – IMAGE (Premium Card Style) */}
            <div className="relative group">

              <div className="relative w-full h-[580px] rounded-3xl overflow-hidden shadow-2xl transition duration-500 group-hover:scale-[1.02]">

                <Image
                  src="/images/ghj.png"
                  alt="Faridabad Property Dealers"
                  fill
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Floating Text */}
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-2xl font-semibold mb-2">
                    Your Property Journey Starts Here
                  </h4>
                  <p className="text-white/90 text-sm max-w-xs">
                    Direct access to verified local dealers. No confusion. No middlemen.
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT – FLOATING FORM */}
            <div className="b">

              {/* Top Accent Line */}
              <div ></div>

              

              <QueryForm />

            </div>

          </div>

        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="w-full">
        <div className="w-full h-[500px] shadow-inner">
          <iframe
            src="https://www.google.com/maps?q=Faridabad,Haryana&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Faridabad Location Map"
          ></iframe>
        </div>
      </section>
    </>
  );
}
