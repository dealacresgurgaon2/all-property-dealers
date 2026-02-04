"use client";

import { useState } from "react";

export default function QueryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    lookingFor: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Query submitted! (API later connect kar denge)");
  };

  const inputClass =
    "w-full rounded-lg px-4 py-2.5 outline-none " +
    "bg-white text-black placeholder-black/50 " +
    "border border-green-500/40 " +
    "focus:border-green-600 focus:ring-1 focus:ring-green-600 transition";

  return (
    <div className="bg-white border border-green-500/30 rounded-2xl shadow-xl overflow-hidden">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-5">
        <h3 className="text-xl font-bold text-white">
          Get Best Property Deals
        </h3>

        <p className="text-sm text-white/90 mt-1">
          Fill the form and our expert will contact you shortly.
        </p>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium mb-1 text-black">
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
            <label className="block text-sm font-medium mb-1 text-black">
              📞 Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className={inputClass}
            />
          </div>

          {/* LOOKING FOR */}
          <div>
            <label className="block text-sm font-medium mb-1 text-black">
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
            <label className="block text-sm font-medium mb-1 text-black">
              ✍ Requirement
            </label>
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="What kind of property are you looking for?"
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-lg
              font-semibold
              text-white
              bg-green-600
              hover:bg-green-700
              transition-all
              shadow-lg
              hover:shadow-xl
            "
          >
            Submit Enquiry
          </button>
        </form>

        {/* TRUST TEXT */}
        <p className="text-xs text-black/60 mt-4 text-center">
          🔒 Your details are safe with us. No spam.
        </p>
      </div>
    </div>
  );
}
