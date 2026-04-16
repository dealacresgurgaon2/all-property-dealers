"use client";

import Image from "next/image";
import QueryForm from "@/templates/design3/components/QueryForm";

export default function ContactUsPage() {
  return (
    <section className="bg-white pt-10">

      <div className="max-w-7xl mx-auto px-4">

        {/* ===== PAGE HEADER ===== */}
        <div className=" mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Contact Us
          </h1>

          <p className="text-black/70 max-w-2xl  text-lg">
            Whether you want to buy, sell or rent – we connect you directly with trusted Hisar property dealers.
          </p>
        </div>

        {/* ===== FORM + IMAGE SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-stretch mb-24">

          {/* LEFT SIDE – FORM */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg border border-red-100 flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-black">
              Send Your Requirement
            </h3>
            <QueryForm />
          </div>

          {/* RIGHT SIDE – IMAGE MATCHING FORM HEIGHT */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group flex">

            <Image
              src="/images/ghj.png"
              alt="Hisar Property Dealers"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Floating Content Box */}
            <div className="absolute bottom-10 left-10 text-white max-w-sm">
              <h4 className="text-2xl font-bold mb-3">
                Trusted Hisar Property Network
              </h4>
              <p className="text-white/90 text-sm leading-6">
                Connect with verified property dealers across Hisar.
                Transparent process. No middlemen. No hidden charges.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* ===== FULL WIDTH MAP SECTION (HISAR) ===== */}
      <div className="w-full md:mt-10 mt-5">

        <div className=" mb-8">
          <h3 className="text-3xl font-bold text-black">
            Our Location
          </h3>
        </div>

        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps?q=Hisar,Haryana&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hisar Location Map"
          ></iframe>
        </div>

      </div>

    </section>
  );
}
