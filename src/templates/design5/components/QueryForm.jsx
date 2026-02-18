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
      alert("Phone number must be 10 digits");
      return;
    }

    if (!form.lookingFor) {
      alert("Please select what you're looking for");
      return;
    }

    setLoading(true);

    try {
      // 🔥 API Ready
      // await fetch("/api/query", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

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
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-md px-4 py-2 outline-none " +
    "bg-white text-black placeholder-black/50 " +
    "border border-red-500/40 " +
    "focus:border-red-600 focus:ring-1 focus:ring-red-600";

  return (
    <div className="bg-white border border-red-500/30 rounded-2xl shadow-xl p-6">
      
      {/* HEADING */}
      <h3 className="text-xl font-bold text-black mb-2">
        Get <span className="text-red-600">Best Property Deals</span>
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
          disabled={loading}
          className="
            w-full
            py-3
            rounded-lg
            font-semibold
            text-white
            bg-red-600
            hover:bg-red-700
            transition
            shadow-lg
            disabled:opacity-60
          "
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>

      {/* TRUST TEXT */}
      <p className="text-xs text-black/60 mt-4 text-center">
        🔒 Your details are safe with us. No spam.
      </p>
    </div>
  );
}
