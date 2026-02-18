"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function PurpleContactPopup({ isOpen, onClose, dealerName }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

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

    // Phone validation
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
          dealerName: dealerName || "N/A",
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message submitted successfully!");

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
      console.log("Purple popup error:", error);
      alert("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* MODAL */}
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

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="  w-full
    border border-[#5E23DC]/40
    rounded-lg
    p-2.5
    text-sm
    text-black
    placeholder-gray-500
    focus:outline-none
    focus:border-[#5E23DC]
    focus:ring-2
    focus:ring-[#5E23DC]/50"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone (10 digits)"
            inputMode="numeric"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-[#5E23DC]/40 rounded-lg p-2.5 text-sm text-black placeholder-gray-500 focus:ring-2 focus:ring-[#5E23DC]/60"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-[#5E23DC]/40 rounded-lg p-2.5 text-sm text-black placeholder-gray-500 focus:ring-2 focus:ring-[#5E23DC]/60"
          />

          <select
  name="option"
  value={formData.option}
  onChange={handleChange}
  className="w-full border border-[#5E23DC]/40 rounded-lg p-2.5 text-sm text-black bg-white focus:ring-2 focus:ring-[#5E23DC]/60"
>
  <option value="Buy Property" className="text-black">
    Buy Property
  </option>
  <option value="Sell Property" className="text-black">
    Sell Property
  </option>
  <option value="Rent Property" className="text-black">
    Rent Property
  </option>
</select>


          <textarea
            name="description"
            rows="3"
            placeholder="Describe your requirement..."
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-[#5E23DC]/40 rounded-lg p-2.5 text-sm text-black placeholder-gray-500 focus:ring-2 focus:ring-[#5E23DC]/60"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5E23DC] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#4b1db3] transition-all"
          >
            {loading ? "Submitting..." : "Send Message"}
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
