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
    email:"",
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
        listings: Math.min(Math.round((targets.listings / steps) * step), targets.listings),
        cities: Math.min(Math.round((targets.cities / steps) * step), targets.cities),
        years: Math.min(Math.round((targets.years / steps) * step), targets.years),
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
  name: `${form.firstName} ${form.lastName}`, // ✅ FIX
  phone: form.phone,
  email: form.email,                          // ✅ IMPORTANT
  option: form.requirement,                   // ✅ FIX
  message: form.message,
  website,
})
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
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-black text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,70,229,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(236,72,153,0.25),transparent_50%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">

  {/* 👤 Man SVG Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 12c2.76 0 5-2.24 5-5S14.76 2 12 2 7 4.24 7 7s2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
  </svg>

  India’s Fastest Growing Estate Agent Listing Portal
</div>


            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
              Still Searching 
              <span className="block bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                 for the Perfect Property?
              </span>
            </h1>

            <p className="text-gray-300 max-w-lg">
              Stop scrolling through endless listings.
              Connect directly with trusted property dealers who know exactly what you need.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setPopupOpen(true)}
                className="px-7 py-3 rounded-lg border border-white/30 hover:bg-white hover:text-black transition">
                Contact Agent
              </button>
            </div>

            {/* <div className="grid grid-cols-3 gap-4 pt-6">
              <ModernStat value={`${counts.listings}+`} label="Listings" />
              <ModernStat value={`${counts.cities}+`} label="Cities" />
              <ModernStat value={`${counts.years}+`} label="Experience" />
            </div> */}
          </div>

          {/* RIGHT FORM - DESIGN SAME */}
          <div className="relative">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl" />

            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">

              <h3 className="text-xl font-bold mb-4 text-center">
                Quick Property Help
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full bg-white/90 text-black px-4 py-2 rounded-lg outline-none"
                    placeholder="First Name"
                  />

                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full bg-white/90 text-black px-4 py-2 rounded-lg outline-none"
                    placeholder="Last Name"
                  />
                </div>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                  className="w-full bg-white/90 text-black px-4 py-2 rounded-lg outline-none"
                  placeholder="Mobile Number"
                />
                <input
  type="email"
  name="email"
  required
  value={form.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full border border-white/40 bg-white rounded-md px-4 py-2 text-[#5E23DC] outline-none"
/>

                <select
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  className="w-full bg-white/90 text-black px-4 py-2 rounded-lg outline-none"
                >
                  <option value="">Select Requirement</option>
                  <option>Buy Property</option>
                  <option>Rent Property</option>
                  <option>Sell Property</option>
                </select>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-white/90 text-black px-4 py-2 rounded-lg outline-none"
                  placeholder="Describe your requirement..."
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold hover:scale-[1.03] transition disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Get Callback"}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      <DealerThemePopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  );
}

function ModernStat({ value, label }) {
  return (
    <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-center hover:scale-105 transition">
      <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 text-transparent bg-clip-text">
        {value}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}
