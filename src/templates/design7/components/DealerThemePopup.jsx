"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function DealerThemePopup({ isOpen, onClose }) {
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
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-3 sm:px-4">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* MODAL BOX */}
      <div className="relative z-[10000] w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-indigo-200 
                      p-4 sm:p-6 
                      max-h-[95vh] overflow-y-auto">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-4 border-b border-indigo-200 pb-3">
          <h2 className="text-sm sm:text-base font-extrabold text-indigo-700 leading-snug pr-4">
            Contact Real Estate Expert for Best Deal
          </h2>

          <button
            onClick={onClose}
            className="text-indigo-700 text-xl sm:text-2xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full border border-indigo-200 rounded-xl p-3 text-gray-900 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-sm"
          />

          <input
            type="text"
            name="phone"
            inputMode="numeric"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className="w-full border border-indigo-200 rounded-xl p-3 text-gray-900 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-sm"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="w-full border border-indigo-200 rounded-xl p-3 text-gray-900 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-sm"
          />

          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="w-full border border-indigo-200 rounded-xl p-3 text-gray-900 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-sm"
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
            className="w-full border border-indigo-200 rounded-xl p-3 text-gray-900 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-sm resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white py-3 rounded-xl font-semibold 
                       hover:opacity-90 transition-all shadow-md 
                       disabled:opacity-60 text-sm"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <p className="text-[11px] text-gray-600 text-center mt-4">
          Your information is safe with us. We never share your details.
        </p>
      </div>
    </div>,
    document.body
  );
}