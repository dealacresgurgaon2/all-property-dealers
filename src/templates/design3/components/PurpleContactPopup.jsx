"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CustomAlert from "./CustomAlert";

export default function PurpleContactPopup({
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

  if (!mounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // PHONE VALIDATION
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
          dealerName: dealerName || "N/A",
          website,
        }),
      });

      const result = await res.json();

      console.log("POPUP RESULT =>", result);

      if (res.ok) {

        setAlertData({
          type: "success",
          message: "Message submitted successfully!",
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
          message:
            result?.error ||
            "Something went wrong. Please try again.",
        });

        setAlertOpen(true);
      }

    } catch (error) {

      console.log("Purple popup error:", error);

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
                z-[10000]
                bg-white
                rounded-3xl
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                w-full
                max-w-md
                max-h-[90vh]
                overflow-y-auto
                p-6
                border border-[#5E23DC]/20
              "
            >

              {/* HEADER */}
              <div className="flex justify-between items-center mb-5 border-b border-[#5E23DC]/20 pb-3">

                <h2 className="text-xl font-bold text-[#5E23DC]">
                  Contact Form
                </h2>

                <button
                  onClick={onClose}
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-[#5E23DC]/10
                    hover:bg-[#5E23DC]/20
                    text-[#5E23DC]
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
                    border border-[#5E23DC]/40
                    rounded-xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#5E23DC]/50
                  "
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone (10 digits)"
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    border border-[#5E23DC]/40
                    rounded-xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#5E23DC]/50
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
                    border border-[#5E23DC]/40
                    rounded-xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#5E23DC]/50
                  "
                />

                <select
                  name="option"
                  value={formData.option}
                  onChange={handleChange}
                  className="
                    w-full
                    border border-[#5E23DC]/40
                    rounded-xl
                    p-3
                    text-sm
                    text-black
                    bg-white
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#5E23DC]/50
                  "
                >
                  <option value="Buy Property">
                    Buy Property
                  </option>

                  <option value="Sell Property">
                    Sell Property
                  </option>

                  <option value="Rent Property">
                    Rent Property
                  </option>
                </select>

                <textarea
                  name="description"
                  rows="3"
                  placeholder="Describe your requirement..."
                  value={formData.description}
                  onChange={handleChange}
                  className="
                    w-full
                    border border-[#5E23DC]/40
                    rounded-xl
                    p-3
                    text-sm
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#5E23DC]/50
                    resize-none
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    bg-[#5E23DC]
                    text-white
                    py-3
                    rounded-xl
                    text-sm
                    font-semibold
                    hover:bg-[#4b1db3]
                    transition-all
                    disabled:opacity-60
                  "
                >
                  {loading
                    ? "Submitting..."
                    : "Send Message"}
                </button>

              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Your information is safe with us.
              </p>

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