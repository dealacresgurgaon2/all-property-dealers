"use client";

import { useEffect, useState } from "react";
import DealerThemePopup from "./DealerThemePopup";

export default function Hero() {
  const [counts, setCounts] = useState({
    listings: 0,
    cities: 0,
    years: 0,
  });

  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });

  useEffect(() => {
    const targets = { listings: 5000, cities: 25, years: 10 };
    const duration = 2200;
    const steps = 60;
    let step = 0;

    const interval = setInterval(() => {
      step++;

      setCounts({
        listings: Math.min(
          Math.round((targets.listings / steps) * step),
          targets.listings
        ),
        cities: Math.min(
          Math.round((targets.cities / steps) * step),
          targets.cities
        ),
        years: Math.min(
          Math.round((targets.years / steps) * step),
          targets.years
        ),
      });

      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.phone.length !== 10) {
      alert("Mobile number must be 10 digits");
      return;
    }

    if (!form.requirement) {
      alert("Please select requirement");
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
          name: `${form.firstName} ${form.lastName}`,
          phone: form.phone,
          email: form.email,
          option: form.requirement,
          message: form.message,
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        alert("Your enquiry has been submitted!");

        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          requirement: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Hero form error:", error);
      alert("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
 <section className="relative min-h-[70vh] overflow-hidden bg-[#12060C] text-white">

  {/* PREMIUM BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#14070D] via-[#1B0813] to-[#12060C]" />

  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#76153C]/15 blur-[120px] rounded-full" />

  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5A0E24]/15 blur-[120px] rounded-full" />

  <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 py-5">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE */}
      <div className="max-w-lg">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-sm text-gray-300 mb-5">

          <div className="w-2 h-2 rounded-full bg-pink-300" />

          Trusted Property Platform

        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-[1.15]">

          Find Your

          <span className="block mt-2 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-300 text-transparent bg-clip-text">

            Dream Property

          </span>

        </h1>

        <p className="mt-5 text-gray-300 text-[16px] leading-7">

          Buy, rent or sell properties with verified dealers
          across top cities in India.

        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-7">

          <button className="px-7 h-12 rounded-xl bg-gradient-to-r from-[#76153C] to-[#5A0E24] font-semibold hover:opacity-90 transition">

            Contact Agent

          </button>

          <button className="px-7 h-12 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">

            Explore

          </button>

        </div>

        {/* STATS */}
        {/* <div className="flex gap-4 mt-10">

          <ModernStat value="5000+" label="Listings" />

          <ModernStat value="25+" label="Cities" />

          <ModernStat value="10+" label="Years" />

        </div> */}

      </div>

      {/* RIGHT FORM */}
      <div className="flex justify-center lg:justify-end">

        <div className="w-full max-w-[500px] rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-3 shadow-[0_10px_60px_rgba(0,0,0,0.35)]">

          <div className="mb-4">

            <h3 className="text-3xl font-bold text-center">
              Quick Property Help
            </h3>

            <p className="text-gray-400 text-sm text-center mt-2">
              Fill the form to get instant callback.
            </p>

          </div>

          <form className="space-y-3">

            <div className="grid grid-cols-2 gap-4">

              <input
                placeholder="First Name"
                className="h-12 rounded-xl bg-white px-4 text-black outline-none"
              />

              <input
                placeholder="Last Name"
                className="h-12 rounded-xl bg-white px-4 text-black outline-none"
              />

            </div>

            <input
              placeholder="Mobile Number"
              className="w-full h-12 rounded-xl bg-white px-4 text-black outline-none"
            />

            <input
              placeholder="Email Address"
              className="w-full h-12 rounded-xl bg-white px-4 text-black outline-none"
            />

            <select className="w-full h-12 rounded-xl bg-white px-4 text-black outline-none">

              <option>Select Requirement</option>

            </select>

            <textarea
              rows={3}
              placeholder="Describe requirement..."
              className="w-full rounded-xl bg-white px-4 py-3 text-black outline-none resize-none"
            />

            <button className="w-full h-12 rounded-xl bg-gradient-to-r from-[#76153C] to-[#5A0E24] font-semibold hover:opacity-90 transition cursor-pointer">

              Get Callback

            </button>

          </form>

        </div>

      </div>

    </div>

  </div>

</section>
  )}
function ModernStat({ value, label }) {
  return (
    <div className="min-w-[110px] rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center">

      <div className="text-3xl font-bold bg-gradient-to-r from-pink-200 to-pink-400 text-transparent bg-clip-text">
        {value}
      </div>

      <div className="text-sm text-gray-400 mt-1">
        {label}
      </div>

    </div>
  );
}