"use client";

import { useState } from "react";
import CustomAlert from "./CustomAlert";

export default function QueryForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    option: "Buy Property",
    message: "",
  });
const [alertOpen, setAlertOpen] = useState(false);

const [alertData, setAlertData] = useState({
  type: "success",
  message: "",
});
  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone validation (only numbers + max 10)
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
          email: form.email,
          option: form.option,
          message: form.message,
          website,
        }),
      });

      const result = await res.json();

    if (result.success) {

  setAlertData({
    type: "success",
    message: "Query submitted successfully!",
  });

  setAlertOpen(true);

  setForm({
    name: "",
    phone: "",
    option: "Buy Property",
    message: "",
  });
      } else {
        setAlertData({
  type: "error",
  message: "Something went wrong. Please try again.",
});

setAlertOpen(true);
      }
    } catch (error) {
      console.log("Query form error:", error);
      alert("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
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
      <h2 className="text-xl font-bold text-[#5E23DC] mb-2">
        For Best Property Deals Contact Us
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        Our Real Estate experts will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#5E23DC]">
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
          <label className="block text-sm font-medium mb-1 text-[#5E23DC]">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone"
            inputMode="numeric"
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#5E23DC]">
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

        {/* Select */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#5E23DC]">
            Looking For
          </label>
          <select
            name="option"
            value={form.option}
            onChange={handleChange}
            className="
              w-full
              border border-[#5E23DC]
              bg-white
              rounded-md
              px-4 py-2
              text-[#5E23DC]
              outline-none
              focus:ring-1 focus:ring-[#5E23DC]
            "
          >
            <option value="Buy Property">Buy Property</option>
            <option value="Rent Property">Rent Property</option>
            <option value="Sell Property">Sell Property</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#5E23DC]">
            Message
          </label>
          <textarea
            name="message"
            rows="3"
            value={form.message}
            onChange={handleChange}
            placeholder="Write here your budget and location preference"
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
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
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>

      </form>
         
      <p className="text-xs text-gray-500 mt-3 text-center">
        🔒 Your details are safe with us. No spam.
      </p>

        <CustomAlert
  open={alertOpen}
  type={alertData.type}
  message={alertData.message}
  onClose={() => setAlertOpen(false)}
/>
    </div>
  );
}
