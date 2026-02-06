"use client";

import { useState } from "react";

export default function QueryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Query submitted! (API later connect kar denge)");
  };

  const inputClass = `
    w-full
    border border-[#5E23DC]
    rounded-md
    px-3 py-2
    outline-none
    bg-white
    text-[#5E23DC]
    placeholder-gray-500
    focus:border-[#5E23DC]
    focus:ring-1 focus:ring-[#5E23DC]
  `;

  return (
    <div
      className="
        bg-white
        border border-[#5E23DC]
        rounded-xl
        shadow-md
        p-6
      "
    >
      <h3
        className="
          text-xl font-bold
          text-[#5E23DC]
          mb-2
        "
      >
        Get Best Property Deals
      </h3>

      <p
        className="
          text-sm
          text-gray-600
          mb-4
        "
      >
        Fill the form and our expert will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label
            className="
              block text-sm font-medium mb-1
              text-[#5E23DC]
            "
          >
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

        {/* Phone */}
        <div>
          <label
            className="
              block text-sm font-medium mb-1
              text-[#5E23DC]
            "
          >
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

        {/* Select */}
        <select
          className="
            w-full
            border border-[#5E23DC]
            bg-white
            rounded-md
            px-4 py-2
            text-[#5E23DC]
            outline-none
          "
        >
          <option>Looking for</option>
          <option>Buy Property</option>
          <option>Rent Property</option>
          <option>Sell Property</option>
        </select>

        {/* Message */}
        <div>
          <label
            className="
              block text-sm font-medium mb-1
              text-[#5E23DC]
            "
          >
            Requirement
          </label>
          <textarea
            name="message"
            rows="3"
            value={form.message}
            onChange={handleChange}
            placeholder="What kind of property are you looking for?"
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full
            bg-[#5E23DC]
            text-white
            py-3
            rounded-lg
            font-semibold
            hover:bg-[#5E23DC]/90
            transition
            shadow-md
          "
        >
          Submit Enquiry
        </button>

      </form>

      {/* Trust text */}
      <p
        className="
          text-xs
          text-gray-500
          mt-3
          text-center
        "
      >
        🔒 Your details are safe with us. No spam.
      </p>
    </div>
  );
}
