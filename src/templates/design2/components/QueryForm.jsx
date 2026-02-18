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

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Query submitted successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
        lookingFor: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg px-4 py-3 outline-none " +
    "bg-white text-black placeholder-black/50 " +
    "border border-[#d4af37]/40 " +
    "focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/60 transition text-sm";

  return (
    <div className="bg-white border border-[#d4af37]/30 rounded-xl shadow-xl p-4">

      {/* HEADING */}
      <h3 className="text-lg font-bold text-black mb-1">
        Get <span className="text-[#d4af37]">Best Property Deals</span>
      </h3>

      <p className="text-xs text-black/70 mb-4">
        Fill the form and our expert will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">

        <div>
          <label className="block text-xs font-semibold mb-1 text-black">
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

        <div>
          <label className="block text-xs font-semibold mb-1 text-black">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            inputMode="numeric"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter 10 digit phone"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-black">
            Email Address
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

        <div>
          <label className="block text-xs font-semibold mb-1 text-black">
            Looking For
          </label>
          <select
            name="lookingFor"
            value={form.lookingFor}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Select option</option>
            <option>Buy Property</option>
            <option>Rent Property</option>
            <option>Sell Property</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-black">
            Requirement
          </label>
          <textarea
            name="message"
            rows="2"
            value={form.message}
            onChange={handleChange}
            placeholder="What kind of property are you looking for?"
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            py-2.5
            rounded-lg
            font-semibold
            text-sm
            text-black
            bg-gradient-to-r from-[#d4af37] to-[#b8964a]
            hover:from-[#c9a227] hover:to-[#a9872f]
            transition-all
            shadow-md
            disabled:opacity-60
          "
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>

      </form>

      <p className="text-[10px] text-black/60 mt-3 text-center">
        🔒 Your details are safe with us. No spam.
      </p>

    </div>
  );
}
