"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CustomAlert from "./CustomAlert";

export default function ContactPopup({
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
          <div className="fixed inset-0 z-[9999] flex items-center justify-center px-3">

            {/* BACKDROP */}
            <div
              onClick={onClose}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* MODAL */}
            <div
              className="
                relative
                bg-white
                rounded-2xl
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                w-full
                max-w-md
                p-6
                z-[10000]
              "
            >

              {/* HEADER */}
              <div className="flex justify-between items-center mb-5 border-b pb-3">

                <h2 className="text-xl font-bold text-[#0b1f33]">
                  Contact {dealerName}
                </h2>

                <button
                  onClick={onClose}
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-gray-100
                    hover:bg-gray-200
                    flex
                    items-center
                    justify-center
                    transition
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
                    border border-[#1e40af]/40
                    rounded-xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:ring-2
                    focus:ring-[#1e40af]
                    outline-none
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
                    border border-[#1e40af]/40
                    rounded-xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:ring-2
                    focus:ring-[#1e40af]
                    outline-none
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
                    border border-[#1e40af]/40
                    rounded-xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:ring-2
                    focus:ring-[#1e40af]
                    outline-none
                  "
                />

                <select
                  name="option"
                  value={formData.option}
                  onChange={handleChange}
                  className="
                    w-full
                    border border-[#1e40af]/40
                    rounded-xl
                    p-3
                    text-sm
                    text-black
                    focus:ring-2
                    focus:ring-[#1e40af]
                    outline-none
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
                    border border-[#1e40af]/40
                    rounded-xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:ring-2
                    focus:ring-[#1e40af]
                    outline-none
                    resize-none
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    bg-[#1e40af]
                    text-white
                    py-3
                    rounded-xl
                    text-sm
                    font-semibold
                    hover:bg-[#1d4ed8]
                    transition
                    disabled:opacity-60
                  "
                >
                  {loading
                    ? "Submitting..."
                    : "Send Message"}
                </button>

              </form>

            </div>

          </div>,
          document.body
        )}

      {/* ALERT POPUP */}
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