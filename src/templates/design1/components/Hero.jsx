"use client";

import { useState } from "react";
import ContactPopup from "./ContactPopup";
import CustomAlert from "./CustomAlert";

export default function Hero() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: "",
    message: "",
  }); const [alertOpen, setAlertOpen] = useState(false);

  const [alertData, setAlertData] = useState({
    type: "success",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone validation (only digits, max 10)
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

if (!form.requirement) {
setAlertData({
type: "error",
message: "Please select what you're looking for",
});
setAlertOpen(true);
return;
}

setLoading(true);

try {
const payload = {
name: form.name,
phone: form.phone,
option: form.requirement,
message: form.message,
dealerName: "Property Dealer In Gurgaon",
website: window.location.origin,
};

console.log("Sending Payload:", payload);

const res = await fetch("/api/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

const responseText = await res.text();

console.log("Status:", res.status);
console.log("Raw Response:", responseText);

let data = {};

try {
  data = JSON.parse(responseText);
} catch (err) {
  console.log("Response is not JSON");
}

if (!res.ok) {
  throw new Error(data?.error || responseText || "Submission failed");
}

setAlertData({
  type: "success",
  message: "Query submitted successfully!",
});

setAlertOpen(true);

setForm({
  name: "",
  phone: "",
  requirement: "",
  message: "",
});

} catch (error) {
console.error("Submit Error:", error);

setAlertData({
  type: "error",
  message: error.message || "Something went wrong",
});

setAlertOpen(true);

} finally {
setLoading(false);
}
};

  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center"
      style={{
        backgroundImage: "url('/images/ghj.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK BLUE OVERLAY */}
      <div className="absolute inset-0 bg-[#0b1f33]/50"></div>

      {/* SOFT BLUE GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/30 via-transparent to-[#38bdf8]/20"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_420px] gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-5">
              Smart & Trusted
              <span className="text-[#38bdf8]">Property Solutions</span>
            </h1>

            <p className="text-base md:text-lg text-white/75 mb-7 max-3-xl">
              Looking for the best property dealer in Gurgaon who understands your needs and delivers results you can trust? You've come to the right place. PropertyDealerInGurgaon.com is your gateway to the most reliable real estate agents in Gurgaon, verified property brokers, and experienced real estate consultants across every sector, colony and commercial zone in Gurugram. Whether you are planning to buy your dream home, sell an existing property at the best market price, or rent a residential or commercial space, our network of top-rated property brokers in Gurgaon covers every micro-market — from Golf Course Road and DLF Phases to Sohna Road, Dwarka Expressway, MG Road, Palam Vihar and New Gurgaon. Every real estate broker in Gurgaon on our platform is vetted for transparency, local expertise, and professional conduct. We make property transactions simpler, faster, and fully stress-free. Connect with the best real estate agent in Gurgaon today and take the first step towards your property goals.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setPopupOpen(true)}
                className="px-7 py-3 border border-[#38bdf8]/60 text-[#38bdf8] rounded-md font-semibold hover:bg-[#38bdf8] hover:text-[#0b1f33] transition"
              >
                Talk to Expert
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="max-w-sm ml-auto w-full bg-white rounded shadow-xl p-5">
            <h2 className="text-lg font-semibold text-[#0b1f33] text-center">
              Get Expert Advice
            </h2>
            <p className="text-xs text-gray-500 text-center mb-4">
              We will contact you shortly
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm text-[#0b1f33] placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af]"
              />

              <input
                type="text"
                name="phone"
                inputMode="numeric"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm text-[#0b1f33] placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af]"
              />

              <select
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm text-[#0b1f33] outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af]"
              >
                <option value="">Looking For</option>
                <option>Buy Property</option>
                <option>Rent Property</option>
                <option>Sell Property</option>
              </select>

              <textarea
                name="message"
                rows={2}
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm text-[#0b1f33] placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1e40af] text-white py-2.5 rounded-md text-sm font-semibold hover:bg-[#1d4ed8] transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Request Callback"}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* POPUP */}
      <ContactPopup
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
