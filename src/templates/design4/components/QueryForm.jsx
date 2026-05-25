"use client";

import { useState } from "react";
import CustomAlert from "./CustomAlert";

export default function QueryForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    lookingFor: "",
  });
  const [alertOpen, setAlertOpen] = useState(false);

  const [alertData, setAlertData] = useState({
    type: "success",
    message: "",
  });

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

    if (!form.lookingFor) {

      setAlertData({
        type: "error",
        message: "Please select what you're looking for",
      });

      setAlertOpen(true);

      return;
    }

    setLoading(true);

    try {

      const website =
        typeof window !== "undefined"
          ? window.location.hostname.replace("www.", "")
          : "";

      const res = await fetch("/api/submit", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          option: form.lookingFor,
          message: form.message,
          website,
        }),

      });

      const result = await res.json();

      console.log("QUERY FORM RESULT =>", result);

      if (res.ok) {

        setAlertData({
          type: "success",
          message: "Expert will contact you soon!",
        });

        setAlertOpen(true);

        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
          lookingFor: "",
        });

      } else {

        setAlertData({
          type: "error",
          message:
            result?.error ||
            "Something went wrong. Please try again.",
        });

        setAlertOpen(true);

      }

    } catch (error) {

      console.log("Query form error:", error);

      setAlertData({
        type: "error",
        message: "Server error. Please try again.",
      });

      setAlertOpen(true);

    } finally {

      setLoading(false);

    }

  };

  // 💎 PREMIUM INPUT STYLE
  const inputClass =
    "w-full rounded-xl px-4 py-3 outline-none " +
    "bg-white text-gray-800 placeholder-gray-400 " +
    "border border-[#f3c6d1] " +
    "focus:border-[#D02752] focus:ring-2 focus:ring-[#D02752]/40 transition shadow-sm";

  return (
    <div className="relative">

      {/* GLOW BORDER */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D02752] to-[#8A244B] rounded-2xl blur opacity-30"></div>

      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-[#D02752] to-[#8A244B] px-6 py-5">
          <h2 className="text-xl font-bold text-white">
            Get Premium Property Deals
          </h2>

          <p className="text-sm text-white/90 mt-1">
            Connect with verified property experts instantly
          </p>
        </div>

        {/* FORM */}
        <div className="p-3">
          <form onSubmit={handleSubmit} className="space-y-1">

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                👤 Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={inputClass}
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                📞 Phone Number
              </label>
              <input
                type="text"
                name="phone"
                inputMode="numeric"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                📧 Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={inputClass}
              />
            </div>

            {/* LOOKING FOR */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                🏠 Looking For
              </label>
              <select
                name="lookingFor"
                value={form.lookingFor}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select option</option>
                <option>Buy Property</option>
                <option>Rent Property</option>
                <option>Sell Property</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                ✍ Requirement
              </label>
              <textarea
                name="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us your requirement..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-[#D02752] to-[#8A244B]
                hover:scale-[1.03] transition shadow-lg
                disabled:opacity-60
              "
            >
              {loading ? "Processing..." : "Get Free Consultation"}
            </button>

          </form>

          {/* TRUST */}
          <p className="text-xs text-gray-500 mt-4 text-center">
            🔒 Your details are safe. No spam calls.
          </p>
        </div>

      </div>
      <CustomAlert
        open={alertOpen}
        type={alertData.type}
        message={alertData.message}
        onClose={() => setAlertOpen(false)}
      />
    </div>
  );
}