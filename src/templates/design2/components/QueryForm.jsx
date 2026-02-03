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
    "w-full rounded-md px-4 py-2 outline-none " +
    "bg-white text-black placeholder-black/50 " +
    "border border-[#d4af37]/40 " +
    "focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]";

  return (
    <div className="bg-white border border-[#d4af37]/30 rounded-2xl shadow-xl p-6">
      
      {/* HEADING */}
      <h3 className="text-xl font-bold text-black mb-2">
        Get <span className="text-[#d4af37]">Best Property Deals</span>
      </h3>

      <p className="text-sm text-black/70 mb-5">
        Fill the form and our expert will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* NAME */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Your Name
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
            Phone Number
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

        {/* LOOKING FOR (SAME FIELD, JUST BINDED NOW) */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Looking For
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
            Requirement
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
            text-black
            bg-gradient-to-r from-[#d4af37] to-[#b8964a]
            hover:from-[#c9a227] hover:to-[#a9872f]
            transition
            shadow-lg
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
  );
}
