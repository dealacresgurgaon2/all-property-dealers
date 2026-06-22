"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CustomAlert from "./CustomAlert";

export default function ContactPopup({ isOpen, onClose }) {
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
  const [alertOpen, setAlertOpen] = useState(false);

  const [alertData, setAlertData] = useState({
    type: "success",
    message: "",
  });

if (!mounted) return null;

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
    setAlertData({
      type: "error",
      message: "Phone number must be 10 digits",
    });
    setAlertOpen(true);
    return;
  }

  setLoading(true);

  try {
    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email || "",
      option: formData.option,
      message: formData.description || "",
      dealerName: "Property Dealer In Delhi",
      website: window.location.origin,
    };

    console.log("Sending Payload:", payload);

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    console.log("API Response:", data);

    if (!res.ok) {
      throw new Error(data.error || "Submission failed");
    }

    setAlertData({
      type: "success",
      message: "Query submitted successfully!",
    });

    setAlertOpen(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      option: "Buy Property",
      description: "",
    });

  } catch (error) {
    console.error("Submit Error:", error);

    setAlertData({
      type: "error",
      message: error.message || "Something went wrong",
    });

    setAlertOpen(true);

  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center px-3 sm:px-4">

            {/* BACKDROP */}
            <div
              onClick={onClose}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* MODAL BOX */}
            <div
              className="
        relative z-[10000]
        w-full max-w-md
        bg-white rounded-2xl shadow-2xl
        border border-red-500/30
        p-4 sm:p-6
        max-h-[95vh] overflow-y-auto
      "
            >
              {/* HEADER */}
              <div className="flex justify-between items-start mb-4 border-b border-red-500/30 pb-3">
                <h2 className="text-base sm:text-lg font-extrabold text-black leading-snug pr-4">
                  Contact Form
                </h2>

                <button
                  onClick={onClose}
                  className="text-red-600 text-xl sm:text-2xl hover:scale-110 transition"
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
                  className="w-full border border-red-500/40 rounded-xl p-3 text-black 
                       focus:outline-none focus:ring-2 focus:ring-red-500/50 
                       transition text-sm"
                />

                <input
                  type="text"
                  name="phone"
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="w-full border border-red-500/40 rounded-xl p-3 text-black 
                       focus:outline-none focus:ring-2 focus:ring-red-500/50 
                       transition text-sm"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full border border-red-500/40 rounded-xl p-3 text-black 
                       focus:outline-none focus:ring-2 focus:ring-red-500/50 
                       transition text-sm"
                />

                <select
                  name="option"
                  value={formData.option}
                  onChange={handleChange}
                  className="w-full border border-red-500/40 rounded-xl p-3 text-black 
                       focus:outline-none focus:ring-2 focus:ring-red-500/50 
                       transition text-sm"
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
                  className="w-full border border-red-500/40 rounded-xl p-3 text-black 
                       focus:outline-none focus:ring-2 focus:ring-red-500/50 
                       transition text-sm resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold 
                       hover:bg-red-700 transition-all shadow-md 
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
        )}

      <CustomAlert
        open={alertOpen}
        type={alertData.type}
        message={alertData.message}
        onClose={() => {
          setAlertOpen(false);
          onClose();
        }}
      />
    </>

  );
}