"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CustomAlert from "./CustomAlert";

export default function GreenContactPopup({
  isOpen,
  onClose,
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
          website,
        }),
      });

      const result = await res.json();

      console.log("GREEN POPUP RESULT =>", result);

      if (res.ok) {

        setAlertData({
          type: "success",
          message: "Message sent successfully!",
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

    } catch (err) {

      console.log("Green popup error:", err);

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
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* MODAL BOX */}
            <div
              className="
                relative
                z-[10000]
                w-full
                max-w-md
                bg-white
                rounded-3xl
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                border border-green-500/20
                p-5 sm:p-6
                max-h-[95vh]
                overflow-y-auto
              "
            >

              {/* HEADER */}
              <div className="flex justify-between items-start mb-5 border-b border-green-500/20 pb-3">

                <h2 className="text-lg sm:text-xl font-bold text-green-700 pr-4">
                  Contact Form
                </h2>

                <button
                  onClick={onClose}
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-green-100
                    hover:bg-green-200
                    text-green-700
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="
                    w-full
                    border border-green-500/40
                    rounded-2xl
                    p-3
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-500/50
                    transition
                    text-sm
                  "
                />

                <input
                  type="text"
                  name="phone"
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="
                    w-full
                    border border-green-500/40
                    rounded-2xl
                    p-3
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-500/50
                    transition
                    text-sm
                  "
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="
                    w-full
                    border border-green-500/40
                    rounded-2xl
                    p-3
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-500/50
                    transition
                    text-sm
                  "
                />

                <select
                  name="option"
                  value={formData.option}
                  onChange={handleChange}
                  className="
                    w-full
                    border border-green-500/40
                    rounded-2xl
                    p-3
                    text-black
                    bg-white
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-500/50
                    transition
                    text-sm
                  "
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
                  className="
                    w-full
                    border border-green-500/40
                    rounded-2xl
                    p-3
                    text-black
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-500/50
                    transition
                    text-sm
                    resize-none
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    bg-green-600
                    text-white
                    py-3
                    rounded-2xl
                    font-semibold
                    hover:bg-green-700
                    transition-all
                    shadow-lg
                    disabled:opacity-60
                    text-sm
                  "
                >
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </button>

              </form>

              <p className="text-xs text-gray-500 text-center mt-4 leading-6">
                Your information is safe with us.
                We never share your details.
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