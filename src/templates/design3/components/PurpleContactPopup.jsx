"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function PurpleContactPopup({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "Buy Property",
    description: "",
  });

  if (!isOpen || !mounted) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* SMALL MODAL */}
      <div
        className="
          relative 
          bg-white 
          rounded-xl 
          shadow-xl 
          w-full 
          max-w-md
          max-h-[85vh] 
          overflow-y-auto
          p-5
          z-[10000]
        "
      >

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4 border-b border-[#5E23DC]/30 pb-2">
          <h2 className="text-base font-bold text-[#5E23DC]">
            Contact Form
          </h2>

          <button
            onClick={onClose}
            className="text-[#5E23DC] text-xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">

          <div>
            <label className="text-xs font-semibold text-black mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-[#5E23DC]/40 rounded-lg p-2.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#5E23DC]/60"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-black mb-1 block">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-[#5E23DC]/40 rounded-lg p-2.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#5E23DC]/60"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-black mb-1 block">
              I Want To
            </label>
            <select
              name="option"
              className="w-full border border-[#5E23DC]/40 rounded-lg p-2.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#5E23DC]/60"
              onChange={handleChange}
            >
              <option>Buy Property</option>
              <option>Sell Property</option>
              <option>Rent Property</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-black mb-1 block">
              Message
            </label>
            <textarea
              name="description"
              rows="3"
              placeholder="Describe your requirement..."
              className="w-full border border-[#5E23DC]/40 rounded-lg p-2.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#5E23DC]/60"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#5E23DC] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#4b1db3] transition-all"
          >
            Send Message
          </button>

        </form>

        <p className="text-[11px] text-gray-600 text-center mt-3">
          Your information is safe with us.
        </p>

      </div>
    </div>,
    document.body
  );
}
