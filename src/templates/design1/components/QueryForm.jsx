"use client";

import { useState } from "react";

export default function QueryForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: "",
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
      alert("Phone number must be 10 digits");
      return;
    }

    if (!form.requirement) {
      alert("Please select what you're looking for");
      return;
    }

    setLoading(true);

    try {
      // 🔥 Future API Ready
      // await fetch("/api/query", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      await new Promise((resolve) => setTimeout(resolve, 1000)); // demo delay

      alert("Query submitted successfully!");

      // Reset form
      setForm({
        name: "",
        phone: "",
        requirement: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-sm " +
    "outline-none bg-white text-[#0b1f33] placeholder-gray-400 " +
    "focus:border-[#1e40af] focus:ring-2 focus:ring-[#1e40af]/30";

  return (
    <div className="bg-white border border-gray-200 rounded shadow-lg p-6">

      {/* HEADER */}
      <h2 className="text-lg font-bold text-[#0b1f33]">
        Get Best Property Deals
      </h2>
      <p className="text-sm text-gray-500 mb-5">
        Fill the form & our expert will contact you shortly
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* NAME */}
        <div>
          <label className="block text-xs font-semibold mb-1 text-gray-600">
            Full Name
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
          <label className="block text-xs font-semibold mb-1 text-gray-600">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            inputMode="numeric"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter mobile number"
            className={inputClass}
          />
        </div>

        {/* REQUIREMENT */}
        <div>
          <label className="block text-xs font-semibold mb-1 text-gray-600">
            Looking For
          </label>
          <select
            name="requirement"
            value={form.requirement}
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
          <label className="block text-xs font-semibold mb-1 text-gray-600">
            Requirement Details
          </label>
          <textarea
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us what kind of property you are looking for"
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            bg-[#1e40af]
            text-white
            py-2.5
            rounded-md
            text-sm
            font-semibold
            hover:bg-[#1d4ed8]
            transition
            shadow-md
            disabled:opacity-60
          "
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>

      {/* TRUST NOTE */}
      <p className="text-xs text-gray-400 mt-4 text-center">
        🔒 Your details are safe with us. No spam.
      </p>
    </div>
  );
}
