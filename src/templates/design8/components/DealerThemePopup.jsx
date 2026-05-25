"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CustomAlert from "./CustomAlert";

export default function DealerThemePopup({
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

      console.log("DEALER POPUP RESULT =>", result);

      if (res.ok) {

        setAlertData({
          type: "success",
          message: "Message Sent Successfully!",
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

      console.log(err);

      setAlertData({
        type: "error",
        message: "Server error. Please try again.",
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

          <div
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center
              px-4
            "
          >

            {/* BACKDROP */}
            <div
              onClick={onClose}
              className="
                absolute inset-0
                bg-black/40
                backdrop-blur-sm
              "
            />

            {/* MODAL */}
            <div
              className="
                relative z-[10000]
                w-full max-w-md
                overflow-hidden
                rounded-[24px]
                border border-[#F3D9E3]
                bg-gradient-to-br
                from-[#FFF8FA]
                via-white
                to-[#FFF3F7]
                shadow-[0_10px_35px_rgba(118,21,60,0.14)]
                max-h-[90vh]
                overflow-y-auto
              "
            >

              {/* TOP GLOW */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#76153C]/5 blur-3xl rounded-full" />

              {/* HEADER */}
              <div
                className="
                  relative
                  px-5 pt-5 pb-4
                  border-b border-[#F3D9E3]
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

                <div className="flex items-start justify-between gap-3">

                  <div>

                    <h2
                      className="
                        text-xl
                        font-bold
                        text-[#2A0E18]
                        leading-tight
                      "
                    >

                      Contact Real Estate Expert

                    </h2>

                    <p className="text-sm text-gray-600 mt-1 leading-5">

                      Get personalized property assistance
                      from trusted consultants.

                    </p>

                  </div>

                  {/* CLOSE */}
                  <button
                    onClick={onClose}
                    className="
                      w-9 h-9
                      rounded-lg
                      border border-[#F3D9E3]
                      bg-white
                      text-[#76153C]
                      flex items-center justify-center
                      hover:bg-[#FFF0F5]
                      transition
                      shrink-0
                    "
                  >

                    ✕

                  </button>

                </div>

              </div>

              {/* FORM */}
              <div className="relative z-10 p-5">

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >

                  {/* NAME */}
                  <InputBox>

                    <span className="text-sm">👤</span>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name"
                      className={inputClass}
                    />

                  </InputBox>

                  {/* PHONE */}
                  <InputBox>

                    <span className="text-sm">📞</span>

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

                  </InputBox>

                  {/* EMAIL */}
                  <InputBox>

                    <span className="text-sm">📧</span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className={inputClass}
                    />

                  </InputBox>

                  {/* SELECT */}
                  <InputBox>

                    <span className="text-sm">🏠</span>

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

                  </InputBox>

                  {/* TEXTAREA */}
                  <div
                    className="
                      rounded-xl
                      border border-[#F3D9E3]
                      bg-white
                      p-3
                      focus-within:border-[#76153C]
                      focus-within:shadow-[0_0_0_3px_rgba(118,21,60,0.08)]
                      transition
                    "
                  >

                    <textarea
                      name="description"
                      rows="3"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe your requirement..."
                      className="
                        w-full
                        resize-none
                        bg-transparent
                        outline-none
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
                      w-full h-11
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
                      ? "Sending..."
                      : "Send Message"}

                  </button>

                </form>

                {/* FOOTER TEXT */}
                <p
                  className="
                    text-[11px]
                    text-gray-500
                    text-center
                    mt-4
                    leading-5
                  "
                >

                  Your information is safe with us.
                  We never share your details.

                </p>

              </div>

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

/* INPUT WRAPPER */
function InputBox({ children }) {

  return (

    <div
      className="
        flex items-center gap-3
        h-11
        rounded-xl
        border border-[#F3D9E3]
        bg-white
        px-4
        focus-within:border-[#76153C]
        focus-within:shadow-[0_0_0_3px_rgba(118,21,60,0.08)]
        transition
      "
    >

      {children}

    </div>

  );

}

const inputClass = `
  flex-1
  bg-transparent
  outline-none
  text-sm
  text-gray-800
  placeholder-gray-400
`;