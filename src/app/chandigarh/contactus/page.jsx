"use client";

import Image from "next/image";
import QueryForm from "@/templates/design4/components/QueryForm";

export default function ContactChandigarh() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-12 overflow-hidden">

        {/* PREMIUM BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec]" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#D02752]/15 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">

          {/* TOP TEXT */}
          <div className=" mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-[#8A244B] mb-6 leading-tight">
              Connect With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D02752] to-[#8A244B]">
                Trusted
              </span>{" "}
              Property Dealers
              <br />
              in Chandigarh
            </h2>

            <p className="text-gray-600 max-w-2xl text-lg">
              Buy, sell or rent with confidence. Connect directly with verified
              dealers – fast, transparent & secure.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="relative group">

              {/* GLOW */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D02752] to-[#8A244B] rounded-3xl blur opacity-20 group-hover:opacity-40 transition"></div>

              <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-2xl group-hover:scale-[1.03] transition">

                <Image
                  src="/images/ghj.png"
                  alt="Chandigarh Property Dealers"
                  fill
                  className="object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* TEXT */}
                <div className="absolute bottom-10 left-10 text-white max-w-sm">
                  <h4 className="text-2xl font-semibold mb-3">
                    Premium Property Network – Chandigarh
                  </h4>

                  <p className="text-white/90 text-sm leading-6">
                    Verified dealers across all prime sectors. Transparent deals.
                    Direct communication. Zero confusion.
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div>
              <QueryForm />
            </div>

          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="relative w-full">

        {/* TOP BORDER */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#D02752] to-[#8A244B]" />

        <div className="w-full h-[620px] shadow-inner">
          <iframe
            src="https://www.google.com/maps?q=Chandigarh,India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chandigarh Location Map"
          ></iframe>
        </div>
      </section>
    </>
  );
}