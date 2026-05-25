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

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

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
      await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          option: form.lookingFor,
          message: form.message,
          website,
        }),
      });

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

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

setAlertOpen(true);

    } finally {

      setLoading(false);

    }
  };

  const inputStyle = `
    flex items-center gap-3
    h-11
    rounded-xl
    border border-[#F3D9E3]
    bg-white
    px-4
    transition
    focus-within:border-[#76153C]
    focus-within:shadow-[0_0_0_3px_rgba(118,21,60,0.08)]
  `;

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[24px]
        border border-[#F3D9E3]
        bg-gradient-to-br
        from-[#FFF8FA]
        via-white
        to-[#FFF3F7]
        shadow-[0_6px_25px_rgba(118,21,60,0.08)]
      "
    >

      {/* TOP LIGHT */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#76153C]/5 blur-3xl rounded-full" />

      {/* HEADER */}
      <div
        className="
          relative
          px-5 pt-5 pb-4
          border-b border-[#F5DCE6]
        "
      >

        <div
          className="
            inline-flex items-center gap-2
            px-3 py-1
            rounded-full
            bg-[#FCE7EF]
            text-[#76153C]
            text-[11px]
            font-semibold
            mb-3
          "
        >

          <div className="w-2 h-2 rounded-full bg-[#76153C]" />

          Property Consultation

        </div>

        <h3 className="text-xl font-bold text-[#2A0E18]">
          Talk to Property Expert
        </h3>

        <p className="text-sm text-gray-600 mt-1 leading-5">
          Get quick assistance from trusted property consultants.
        </p>

      </div>

      {/* FORM */}
      <div className="relative z-10 p-5">

        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >

          {/* NAME */}
          <div className={inputStyle}>

            <span className="text-base">👤</span>

            <input
              type="text"
              name="name"
              required
              value={form.name || ""}
              onChange={handleChange}
              placeholder="Your Name"
              className="
                flex-1
                bg-transparent
                outline-none
                text-sm
                text-gray-800
                placeholder-gray-400
              "
            />

          </div>

          {/* PHONE */}
          <div className={inputStyle}>

            <span className="text-base">📞</span>

            <input
              type="text"
              name="phone"
              inputMode="numeric"
              required
              value={form.phone || ""}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="
                flex-1
                bg-transparent
                outline-none
                text-sm
                text-gray-800
                placeholder-gray-400
              "
            />

          </div>

          {/* EMAIL */}
          <div className={inputStyle}>

            <span className="text-base">📧</span>

            <input
              type="email"
              name="email"
              required
              value={form.email || ""}
              onChange={handleChange}
              placeholder="Email Address"
              className="
                flex-1
                bg-transparent
                outline-none
                text-sm
                text-gray-800
                placeholder-gray-400
              "
            />

          </div>

          {/* SELECT */}
          <div className={inputStyle}>

            <span className="text-base">🏠</span>

            <select
              name="lookingFor"
              value={form.lookingFor || ""}
              onChange={handleChange}
              className="
                flex-1
                bg-transparent
                outline-none
                text-sm
                text-gray-700
              "
            >

              <option value="">
                Looking For
              </option>

              <option>
                Buy Property
              </option>

              <option>
                Rent Property
              </option>

              <option>
                Sell Property
              </option>

            </select>

          </div>

          {/* MESSAGE */}
          <div
            className="
              rounded-xl
              border border-[#F3D9E3]
              bg-white
              p-3
              transition
              focus-within:border-[#76153C]
              focus-within:shadow-[0_0_0_3px_rgba(118,21,60,0.08)]
            "
          >

            <textarea
              name="message"
              rows="3"
              value={form.message || ""}
              onChange={handleChange}
              placeholder="Describe your requirement..."
              className="
                w-full
                bg-transparent
                outline-none
                resize-none
                text-sm
                text-gray-800
                placeholder-gray-400
              "
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              h-11
              rounded-xl
              bg-gradient-to-r
              from-[#76153C]
              to-[#5A0E24]
              text-white
              font-semibold
              text-sm
              hover:opacity-90
              transition
              shadow-[0_8px_20px_rgba(118,21,60,0.18)]
              disabled:opacity-60
            "
          >

            {loading
              ? "Submitting..."
              : "Get Free Consultation"}

          </button>

        </form>

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