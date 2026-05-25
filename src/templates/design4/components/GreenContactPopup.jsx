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
          message: "Expert will contact you soon!",
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
            "Something went wrong.",
        });

        setAlertOpen(true);

      }

    } catch (err) {

      console.log("Green popup error:", err);

      setAlertData({
        type: "error",
        message: "Server error. Please try again.",
      });

      setAlertOpen(true);

    } finally {

      setLoading(false);

    }

  };

  // 💎 PREMIUM INPUT STYLE
  const inputClass = `
    w-full rounded-xl p-3
    bg-white
    text-gray-800
    placeholder-gray-500
    border border-[#f3c6d1]
    focus:border-[#D02752]
    focus:ring-2 focus:ring-[#D02752]/40
    outline-none
    transition
    shadow-sm hover:shadow-md
  `;

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

            {/* MODAL */}
            <div className="relative z-[10000] w-full max-w-md">

              {/* PREMIUM GLOW BORDER */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D02752] to-[#8A244B] rounded-2xl blur opacity-40"></div>

              <div className="relative bg-white rounded-2xl shadow-2xl p-5 sm:p-6 max-h-[95vh] overflow-y-auto">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-4 border-b border-[#f3c6d1] pb-3">

                  <h2 className="text-lg font-extrabold text-[#8A244B]">
                    Get Premium Property Deals
                  </h2>

                  <button
                    onClick={onClose}
                    className="text-gray-500 text-xl hover:text-[#D02752] transition"
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
                    className={inputClass}
                  />

                  <input
                    type="text"
                    name="phone"
                    inputMode="numeric"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className={inputClass}
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className={inputClass}
                  />

                  <select
                    name="option"
                    value={formData.option}
                    onChange={handleChange}
                    className={inputClass}
                  >

                    <option>
                      Buy Property
                    </option>

                    <option>
                      Sell Property
                    </option>

                    <option>
                      Rent Property
                    </option>

                  </select>

                  <textarea
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us your requirement..."
                    className={`${inputClass} resize-none`}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full py-3 rounded-xl
                      bg-gradient-to-r from-[#D02752] to-[#8A244B]
                      text-white font-semibold
                      hover:scale-[1.03]
                      transition shadow-lg
                      disabled:opacity-60
                    "
                  >

                    {loading
                      ? "Processing..."
                      : "Get Free Consultation"}

                  </button>

                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  🔒 Your details are safe. No spam calls.
                </p>

              </div>

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