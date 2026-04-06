"use client";

import { useState } from "react";

export default function QueryForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    lookingFor: "",
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
      alert("Phone number must be 10 digits");
      return;
    }

    if (!form.lookingFor) {
      alert("Please select what you're looking for");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Expert will contact you!");

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
        lookingFor: "",
      });

    } catch (error) {
      alert("Something went wrong. Please try again.");
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
          <h3 className="text-xl font-bold text-white">
            Get Premium Property Deals
          </h3>

          <p className="text-sm text-white/90 mt-1">
            Connect with verified property experts instantly
          </p>
        </div>

        {/* FORM */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
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
              <label className="block text-sm font-medium mb-1 text-gray-700">
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
    </div>
  );
}