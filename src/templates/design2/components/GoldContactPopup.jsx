"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CustomAlert from "./CustomAlert";

export default function GoldContactPopup({
  isOpen,
  onClose,
  dealerName,
}) {

  const [mounted, setMounted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);

  const [alertData, setAlertData] = useState({
    type: "success",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    option: "Buy Property",
    description: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  if (!mounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;

      if (value.length > 10) return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
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

        setAlertData({
          type: "success",
          message: "Your inquiry has been submitted successfully!",
        });

        setAlertOpen(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          option: "Buy Property",
          description: "",
        });

      } else {

        setAlertData({
          type: "error",
          message: "Something went wrong. Please try again.",
        });

        setAlertOpen(true);
      }

    } catch (error) {

      console.log("Popup form error:", error);

      setAlertData({
        type: "error",
        message: "Server error. Please try later.",
      });

      setAlertOpen(true);

    } finally {

      setLoading(false);
    }
  };

  return (
    <>

      {/* MAIN POPUP */}
      {isOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center px-3 sm:px-4">

            {/* BACKDROP */}
            <div
              onClick={onClose}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* MODAL */}
            <div
              className="
                relative
                z-[10000]
                w-full
                max-w-md
                rounded-3xl
                bg-white
                border border-[#d4af37]/30
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                p-6
                sm:p-7
                max-h-[95vh]
                overflow-y-auto
              "
            >

              {/* HEADER */}
              <div className="flex justify-between items-center mb-5 border-b border-[#d4af37]/30 pb-4">

                <h2 className="text-xl sm:text-2xl font-bold text-black">
                  Contact {dealerName}
                </h2>

                <button
                  onClick={onClose}
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-[#d4af37]/10
                    hover:bg-[#d4af37]/20
                    text-[#d4af37]
                    flex
                    items-center
                    justify-center
                    transition
                    text-xl
                  "
                >
                  ✕
                </button>

              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    border border-[#d4af37]/40
                    rounded-2xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#d4af37]/50
                    transition
                  "
                />

                <input
                  type="text"
                  name="phone"
                  inputMode="numeric"
                  placeholder="Phone (10 digits)"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    border border-[#d4af37]/40
                    rounded-2xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#d4af37]/50
                    transition
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    border border-[#d4af37]/40
                    rounded-2xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#d4af37]/50
                    transition
                  "
                />

                <select
                  name="option"
                  value={formData.option}
                  onChange={handleChange}
                  className="
                    w-full
                    border border-[#d4af37]/40
                    rounded-2xl
                    p-3
                    text-sm
                    text-black
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#d4af37]/50
                    transition
                  "
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
                  className="
                    w-full
                    border border-[#d4af37]/40
                    rounded-2xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#d4af37]/50
                    transition
                    resize-none
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    bg-[#d4af37]
                    hover:bg-[#c9a227]
                    text-black
                    py-3.5
                    rounded-2xl
                    font-bold
                    text-sm
                    transition-all
                    duration-300
                    shadow-lg
                    disabled:opacity-60
                  "
                >
                  {loading
                    ? "Submitting..."
                    : "Send Message"}
                </button>

              </form>

              <p className="text-xs text-gray-500 text-center mt-5 leading-6">
                Your information is safe with us.
                We never share your details.
              </p>

            </div>

          </div>,
          document.body
        )}

      {/* ALERT */}
      <CustomAlert
        open={alertOpen}
        type={alertData.type}
        message={alertData.message}
        onClose={() => {

          setAlertOpen(false);

          if (alertData.type === "success") {
            onClose();
          }
        }}
      />

    </>
  );
}