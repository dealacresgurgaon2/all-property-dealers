"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function GreenContactPopup({ isOpen, onClose }) {
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

  if (!isOpen || !mounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone validation (only digits, max 10)
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
      // 🔥 API Ready
      // await fetch("/api/green-contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        option: "Buy Property",
        description: "",
      });

      onClose();
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-3">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* MODAL BOX (Height Reduced) */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-5 z-[10000]">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4 border-b border-green-500/30 pb-2">
          <h2 className="text-lg font-extrabold text-green-700 tracking-wide">
            Contact Form
          </h2>

          <button
            onClick={onClose}
            className="text-green-600 text-2xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full border border-green-500/40 rounded-xl p-2.5 text-black focus:outline-none focus:ring-2 focus:ring-green-500/60 transition text-sm"
          />

          <input
            type="text"
            name="phone"
            inputMode="numeric"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className="w-full border border-green-500/40 rounded-xl p-2.5 text-black focus:outline-none focus:ring-2 focus:ring-green-500/60 transition text-sm"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="w-full border border-green-500/40 rounded-xl p-2.5 text-black focus:outline-none focus:ring-2 focus:ring-green-500/60 transition text-sm"
          />

          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="w-full border border-green-500/40 rounded-xl p-2.5 text-black focus:outline-none focus:ring-2 focus:ring-green-500/60 transition text-sm"
          >
            <option>Buy Property</option>
            <option>Sell Property</option>
            <option>Rent Property</option>
          </select>

          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your requirement..."
            className="w-full border border-green-500/40 rounded-xl p-2.5 text-black focus:outline-none focus:ring-2 focus:ring-green-500/60 transition text-sm resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2.5 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md disabled:opacity-60 text-sm"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        <p className="text-[10px] text-gray-600 text-center mt-3">
          Your information is safe with us. We never share your details.
        </p>

      </div>
    </div>,
    document.body
  );
}
