"use client";
import { useState } from "react";
import PurpleContactPopup from "./PurpleContactPopup";

export default function Hero() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    option: "Buy Property",
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
      alert("Phone number must be 10 digits");
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
          option: form.option,
          message: form.message,
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        alert("Your enquiry has been submitted!");

        setForm({
          name: "",
          phone: "",
          option: "Buy Property",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Hero form error:", error);
      alert("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center">

      {/* PURPLE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5E23DC]/90 via-[#5E23DC]/75 to-[#5E23DC]/60"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
              Find Your Dream Property <br />
              <span className="text-white/90">At Best Price</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-xl">
              We help you buy, sell and rent properties in prime locations.
              Real Estate Agents listings and trusted property dealers.
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

            <h3 className="text-lg font-bold mb-4 text-white text-center">
              Get Free Consultation
            </h3>

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
    </section>
  );
}
