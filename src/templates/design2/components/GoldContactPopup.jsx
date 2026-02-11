"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function GoldContactPopup({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* MODAL BOX */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[92%] max-w-lg p-7 z-[10000]">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-5 border-b border-[#d4af37]/40 pb-3">
          <h2 className="text-xl font-extrabold text-black tracking-wide">
            Contact Form
          </h2>

          <button
            onClick={onClose}
            className="text-[#d4af37] text-2xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-sm font-semibold text-black mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="
                w-full 
                border border-[#d4af37]/40
                rounded-xl 
                p-3 
                text-black
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#d4af37]/60
                transition
              "
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-black mb-1 block">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="
                w-full 
                border border-[#d4af37]/40
                rounded-xl 
                p-3 
                text-black
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#d4af37]/60
                transition
              "
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-black mb-1 block">
              I Want To
            </label>
            <select
              name="option"
              className="
                w-full 
                border border-[#d4af37]/40
                rounded-xl 
                p-3 
                text-black
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#d4af37]/60
                transition
              "
              onChange={handleChange}
            >
              <option>Buy Property</option>
              <option>Sell Property</option>
              <option>Rent Property</option>
             
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-black mb-1 block">
              Message
            </label>
            <textarea
              name="description"
              placeholder="Describe your requirement..."
              className="
                w-full 
                border border-[#d4af37]/40
                rounded-xl 
                p-3 
                text-black
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#d4af37]/60
                transition
              "
              rows="4"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="
              w-full 
              bg-[#d4af37] 
              text-black 
              py-3 
              rounded-xl 
              font-semibold 
              hover:bg-[#c9a227] 
              transition-all 
              shadow-md
            "
          >
            Send Message
          </button>

        </form>

        <p className="text-xs text-gray-600 text-center mt-4">
          Your information is safe with us. We never share your details.
        </p>

      </div>
    </div>,
    document.body
  );
}
