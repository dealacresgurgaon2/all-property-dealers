"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function ContactPopup({ isOpen, onClose, dealerName }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    option: "Buy Property",
    description: "",
  });

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  if (!isOpen || !mounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Phone number must be 10 digits");
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
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          option: formData.option,
          message: formData.description,
          dealerName,
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        alert("Your inquiry has been submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          option: "Buy Property",
          description: "",
        });
        onClose();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Popup form error:", error);
      alert("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-3">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* MODAL */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 z-[10000]">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-lg font-bold text-[#0b1f33]">
            Contact {dealerName}
          </h2>

          <button
            onClick={onClose}
            className="text-[#1e40af] text-xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-[#1e40af]/60 rounded-lg p-2.5 text-sm text-black placeholder-gray-500 focus:ring-2 focus:ring-[#1e40af]"
          />

          <input
            type="text"
            name="phone"
            inputMode="numeric"
            placeholder="Phone (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-[#1e40af]/60 rounded-lg p-2.5 text-sm text-black placeholder-gray-500 focus:ring-2 focus:ring-[#1e40af]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-[#1e40af]/60 rounded-lg p-2.5 text-sm text-black placeholder-gray-500 focus:ring-2 focus:ring-[#1e40af]"
          />

          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="w-full border border-[#1e40af]/60 rounded-lg p-2.5 text-sm text-black focus:ring-2 focus:ring-[#1e40af]"
          >
            <option>Buy Property</option>
            <option>Sell Property</option>
            <option>Rent Property</option>
          </select>

          <textarea
            name="description"
            rows="3"
            placeholder="Describe your requirement..."
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-[#1e40af]/60 rounded-lg p-2.5 text-sm text-black placeholder-gray-500 focus:ring-2 focus:ring-[#1e40af]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1e40af] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1d4ed8] transition"
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>

        </form>

      </div>
    </div>,
    document.body
  );
}
