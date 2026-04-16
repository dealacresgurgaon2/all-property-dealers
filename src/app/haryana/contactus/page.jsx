"use client";

import Image from "next/image";
import QueryForm from "@/templates/design7/components/QueryForm";

export default function ContactHaryana() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-8 overflow-hidden">

        {/* Premium Decorative Blur */}
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-green-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">

          {/* ===== TOP CENTER CONTENT ===== */}
          <div className=" mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Connect With <span className="text-indigo-600">Trusted</span> Property Dealers
              <br />
              in Haryana
            </h2>

            <p className="text-gray-600 max-w-2xl  text-lg">
              Buy, sell or rent with confidence. We connect you directly with verified
              property dealers across Haryana – fast, transparent and secure.
            </p>
          </div>

          {/* ===== IMAGE + FORM SECTION ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

            {/* LEFT – IMAGE */}
            <div className="relative group">
              <div className="relative w-full h-[540px] rounded-3xl overflow-hidden shadow-2xl transition duration-500 group-hover:scale-[1.03]">

                <Image
                  src="/images/ghj.png"
                  alt="Haryana Property Dealers"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                <div className="absolute bottom-10 left-10 text-white max-w-sm">
                  <h4 className="text-2xl font-semibold mb-3">
                    Premium Property Network – Haryana
                  </h4>
                  <p className="text-white/90 text-sm leading-6">
                    Verified dealers across major cities of Haryana.
                    Transparent deals. Direct communication. Zero confusion.
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT – FORM */}
            <div>
              <QueryForm />
            </div>

          </div>

        </div>
      </section>

      {/* ================= MAP SECTION (HARYANA) ================= */}
      <section className="w-full">
        <div className="w-full h-[620px] shadow-inner">
          <iframe
            src="https://www.google.com/maps?q=Haryana,India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Haryana Location Map"
          ></iframe>
        </div>
      </section>
    </>
  );
}
