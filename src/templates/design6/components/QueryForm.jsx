"use client";

import { useState } from "react";
import CustomAlert from "./CustomAlert";

export default function QueryForm() {
  const [loading, setLoading] = useState(false);

   const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    lookingFor: "",
  });
  const [alertOpen, setAlertOpen] = useState(false);

const [alertData, setAlertData] = useState({
  type: "success",
  message: "",
});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone validation (only digits, max 10)
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.phone.length !== 10) {
      setAlertData({
  type: "error",
  message: "Phone number must be 10 digits",
});

setAlertOpen(true);
      return;
    }

    if (!form.lookingFor) {
      setAlertData({
  type: "error",
  message: "Please select what you're looking for",
});

setAlertOpen(true);
      return;
    }

    setLoading(true);

    try {
      // 🔥 API Ready
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setAlertData({
  type: "success",
  message: "Query submitted successfully!",
});

setAlertOpen(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
        lookingFor: "",
      });

    } catch (error) {
         setAlertData({
  type: "success",
  message: "Something went wrong. Please try again.",
});
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg px-4 py-2.5 outline-none " +
    "bg-white text-black placeholder-black/50 " +
    "border border-green-500/40 " +
    "focus:border-green-600 focus:ring-1 focus:ring-green-600 transition";

  return (
    <div className="bg-white border border-green-500/30 rounded-2xl shadow-xl overflow-hidden">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-5">
        <h2 className="text-xl font-bold text-white">
          Get Best Property Deals
        </h2>

        <p className="text-sm text-white/90 mt-1">
          Fill the form and our expert will contact you shortly.
        </p>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              👤 Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={inputClass}
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              📞 Phone Number
            </label>
            <input
              type="text"
              name="phone"
              inputMode="numeric"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className={inputClass}
            />
          </div>

          {/* LOOKING FOR */}
          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              🏠 Looking For
            </label>
            <select
              name="lookingFor"
              value={form.lookingFor}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select option</option>
              <option>Buy Property</option>
              <option>Rent Property</option>
              <option>Sell Property</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              ✍ Requirement
            </label>
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="What kind of property are you looking for?"
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-3
              rounded-lg
              font-semibold
              text-white
              bg-green-600
              hover:bg-green-700
              transition-all
              shadow-lg
              hover:shadow-xl
              disabled:opacity-60
            "
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>

        {/* TRUST TEXT */}
        <p className="text-xs text-black/60 mt-4 text-center">
          🔒 Your details are safe with us. No spam.
        </p>
      </div>
        <CustomAlert
  open={alertOpen}
  type={alertData.type}
  message={alertData.message}
  onClose={() => setAlertOpen(false)}
/>
    </div>
  );
}
