"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function ContactPopup({ isOpen, onClose, dealerName }) {
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
        <div className="flex justify-between items-center mb-5 border-b pb-3">
          <h2 className="text-xl font-extrabold text-[#0b1f33] tracking-wide">
            Contact {dealerName}
          </h2>

          <button
            onClick={onClose}
            className="text-[#1e40af] text-2xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="text-sm font-semibold text-gray-800 mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="
                w-full 
                border border-[#1e40af]/60
                rounded-xl 
                p-3 
                placeholder-gray-600
                text-gray-900
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#1e40af]
                focus:border-[#1e40af]
                transition
              "
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-semibold text-gray-800 mb-1 block">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="
                w-full 
                border border-[#1e40af]/60
                rounded-xl 
                p-3 
                placeholder-gray-600
                text-gray-900
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#1e40af]
                focus:border-[#1e40af]
                transition
              "
              onChange={handleChange}
              required
            />
          </div>

          {/* OPTION */}
          <div>
            <label className="text-sm font-semibold text-gray-800 mb-1 block">
              I Want To
            </label>
            <select
              name="option"
              className="
                w-full 
                border border-[#1e40af]/60
                rounded-xl 
                p-3 
                text-gray-900
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#1e40af]
                focus:border-[#1e40af]
                transition
              "
              onChange={handleChange}
            >
              <option>Buy Property</option>
              <option>Sell Property</option>
              <option>Rent Property</option>
             
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm font-semibold text-gray-800 mb-1 block">
              Message
            </label>
            <textarea
              name="description"
              placeholder="Describe your requirement..."
              className="
                w-full 
                border border-[#1e40af]/60
                rounded-xl 
                p-3 
                placeholder-gray-600
                text-gray-900
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#1e40af]
                focus:border-[#1e40af]
                transition
              "
              rows="4"
              onChange={handleChange}
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              w-full 
              bg-[#1e40af] 
              text-white 
              py-3 
              rounded-xl 
              font-semibold 
              hover:bg-[#1d4ed8] 
              transition-all 
              shadow-md 
              hover:shadow-lg
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
