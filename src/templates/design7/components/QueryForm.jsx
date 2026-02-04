"use client";

import { useState } from "react";

export default function QueryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
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

  const inputWrapper =
    "flex items-center gap-3 bg-white border border-indigo-200 rounded-xl px-3 py-2 focus-within:border-indigo-600 transition";

  return (
    <div className="rounded-2xl shadow-xl border border-indigo-200 overflow-hidden bg-white">

      {/* TOP GRADIENT INFO BAR – SLIGHTLY BIGGER */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 p-4 text-white">
        <h3 className="text-lg font-bold">
          Talk to Property Expert
        </h3>

        <p className="text-sm opacity-90 mt-1">
          Get personalized assistance within minutes
        </p>

        <div className="flex gap-2 mt-3 text-xs">
          <span className="bg-white/20 px-3 py-1 rounded-full">Verified Agents</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">Quick Response</span>
        </div>
      </div>

      {/* FORM BODY – SLIGHTLY BIGGER */}
      <div className="p-5">

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <div className={inputWrapper}>
            <span>👤</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="flex-1 outline-none bg-transparent text-base text-gray-800"
            />
          </div>

          {/* PHONE */}
          <div className={inputWrapper}>
            <span>📞</span>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="flex-1 outline-none bg-transparent text-base text-gray-800"
            />
          </div>

          {/* LOOKING FOR */}
          <div className={inputWrapper}>
            <span>🏠</span>
            <select
              name="lookingFor"
              value={form.lookingFor}
              onChange={handleChange}
              className="flex-1 outline-none bg-transparent text-base text-gray-800"
            >
              <option value="">Looking For</option>
              <option>Buy Property</option>
              <option>Rent Property</option>
              <option>Sell Property</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="bg-white border border-indigo-200 rounded-xl p-3 focus-within:border-indigo-600 transition">
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe your requirement..."
              className="w-full outline-none bg-transparent resize-none text-base text-gray-800"
            />
          </div>

          {/* SUBMIT BUTTON – BIGGER */}
          <button
            type="submit"
            className="
              w-full py-3 rounded-xl
              bg-gradient-to-r from-indigo-600 to-purple-600
              text-white font-semibold
              hover:opacity-90 transition
            "
          >
            Get Free Consultation
          </button>

        </form>

      </div>
    </div>
  );
}
