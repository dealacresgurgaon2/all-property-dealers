"use client";
import { useState } from "react";
import PurpleContactPopup from "./PurpleContactPopup";
import CustomAlert from "./CustomAlert";

export default function Hero() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);

 const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  option: "Buy Property",
  message: "",
});
   const [alertOpen, setAlertOpen] = useState(false);

const [alertData, setAlertData] = useState({
  type: "success",
  message: "",
});
  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.phone.length !== 10) {
      setAlertData({
  type: "error",
  message: "Phone number must be 10 digits",
});

setAlertOpen(true);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify({
  name: form.name,
  phone: form.phone,
  email: form.email,
  option: form.option,
  message: form.message,
  website,
}),
      });

      const result = await res.json();

console.log("API RESULT =>", result);

if (res.ok) {

  setAlertData({
    type: "success",
    message: "Query submitted successfully!",
  });

  setAlertOpen(true);

  setForm({
  name: "",
  phone: "",
  email: "",
  option: "Buy Property",
  message: "",
});

} else {

  setAlertData({
    type: "error",
    message: "Something went wrong. Please try again.",
  });

  setAlertOpen(true);
}

setAlertOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center">

      {/* PURPLE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5E23DC]/90 via-[#5E23DC]/75 to-[#5E23DC]/60"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_420px] gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
              Find Best Property
              <span className="text-white/90">in Hisar</span>
            </h1>

            <p
              className="
    text-sm
    md:text-base
    
    text-white/80
    mb-8
    w-full
    max-3-none
    leading-8
  "
            >
              Looking for the best property dealer in Hisar? You have come to the right place. PropertyDealerInHisar.com is Hisar's most trusted online platform connecting buyers, sellers, and tenants with verified, experienced real estate professionals across every locality in the city. Whether you need a best real estate agent in Hisar to help you purchase your dream home, a reliable property broker in Hisar to get you the best price for your property, or a skilled real estate broker in Hisar to negotiate the perfect rental deal — our network has you covered. We connect you with top-rated property consultants in Defence Colony, Model Town, Urban Estate, Sector 13, Sector 14, Rajguru Market, and 40+ prime localities across Hisar. From residential plots and builder floors to commercial shops and industrial land, our registered agents handle all property types with full transparency. Get a free consultation today and make your next property deal the smartest one yet.
            </p>

            <button
              onClick={() => setPopupOpen(true)}
              className="px-6 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-[#5E23DC] transition"
            >
              Contact Agent
            </button>
          </div>

          {/* RIGHT GLASS FORM */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-5 md:p-6 max-w-sm ml-auto w-full">

            <h2 className="text-lg font-bold mb-4 text-white text-center">
              Get Free Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-white/40 bg-white rounded-md px-4 py-2 text-[#5E23DC] placeholder-[#5E23DC] outline-none"
              />
               <input
  type="email"
  name="email"
  required
  value={form.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full border border-white/40 bg-white rounded-md px-4 py-2 text-[#5E23DC] placeholder-[#5E23DC] outline-none"
/>
              <input
                type="text"
                name="phone"
                required
                inputMode="numeric"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-white/40 bg-white rounded-md px-4 py-2 text-[#5E23DC] placeholder-[#5E23DC] outline-none"
              />

              <select
                name="option"
                value={form.option}
                onChange={handleChange}
                className="w-full border border-white/40 bg-white rounded-md px-4 py-2 text-[#5E23DC] outline-none"
              >
                <option value="Buy Property">Buy Property</option>
                <option value="Rent Property">Rent Property</option>
                <option value="Sell Property">Sell Property</option>
              </select>

              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-white/40 bg-white rounded-md px-4 py-2 text-[#5E23DC] placeholder-[#5E23DC] outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-[#5E23DC] py-2.5 rounded-md font-semibold hover:bg-white/90 transition"
              >
                {loading ? "Submitting..." : "Submit Query"}
              </button>

            </form>
          </div>

        </div>
      </div>

      <PurpleContactPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
        <CustomAlert
        open={alertOpen}
        type={alertData.type}
        message={alertData.message}
        onClose={() => setAlertOpen(false)}
      />
    </section>
  );
}
