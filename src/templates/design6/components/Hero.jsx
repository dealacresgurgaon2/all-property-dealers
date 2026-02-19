"use client";

import { useEffect, useState } from "react";
import GreenContactPopup from "./GreenContactPopup";

export default function Hero() {
  const [counts, setCounts] = useState({
    listings: 0,
    cities: 0,
    years: 0,
  });

  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    lookingFor: "",
    message: "",
  });

  useEffect(() => {
    const targets = { listings: 500, cities: 25, years: 20 };
    const duration = 2000;
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
      alert("Phone number must be 10 digits");
      return;
    }

    if (!form.lookingFor) {
      alert("Please select what you're looking for");
      return;
    }

    setLoading(true);

    try {
      // 🔥 API Ready
      // await fetch("/api/query", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Query submitted successfully!");

      setForm({
        name: "",
        phone: "",
        lookingFor: "",
        message: "",
      });

    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-black">
      
      <div className="absolute inset-0 bg-gradient-to-b from-green-700/40 via-green-600/40 to-black/80" />
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-500/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 blur-3xl rounded-full" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* ===== LEFT SIDE - WORKING FORM (DESIGN SAME) ===== */}
          <div className="bg-white/15 backdrop-blur-xl border border-green-500/40 rounded-2xl shadow-2xl p-5 md:p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4 text-white text-center">
              Get Free Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white rounded-md px-4 py-2 text-black border border-green-300"
                placeholder="Your Name"
              />

              <input
                type="text"
                name="phone"
                inputMode="numeric"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-white rounded-md px-4 py-2 text-black border border-green-300"
                placeholder="Phone Number"
              />

              <select
                name="lookingFor"
                value={form.lookingFor}
                onChange={handleChange}
                className="w-full bg-white rounded-md px-4 py-2 text-black border border-green-300"
              >
                <option value="">Looking for</option>
                <option>Buy Property</option>
                <option>Rent Property</option>
                <option>Sell Property</option>
              </select>

              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white rounded-md px-4 py-2 text-black border border-green-300"
                placeholder="Your Message"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-2.5 rounded-md font-semibold hover:bg-green-700 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Query"}
              </button>

            </form>
          </div>

          {/* ===== RIGHT SIDE CONTENT ===== */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Trusted • Premium
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Find Your{" "}
              <span className="relative text-green-400">
                Dream Property
                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-80" />
              </span>
              <br />
              At Best Price
            </h1>

            <p className="text-lg text-white/85 mb-8 max-w-xl">
              Buy, sell & rent premium properties in prime locations.
              Real Estate Agents listings with trusted property dealers.
            </p>

            <div className="flex gap-4 flex-wrap mb-8">
              <button
                className="px-6 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-green-700 transition"
                onClick={() => setPopupOpen(true)}
              >
                Contact Agent
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              <Stat value={`${counts.listings.toLocaleString()}+`} label=" Listings" />
             
              <Stat value={`${counts.years}+`} label="Years Experience" />
            </div>
          </div>

        </div>
      </div>

      <GreenContactPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-white/15 backdrop-blur border border-white/20 rounded-xl p-3 text-center">
      <div className="text-xl font-bold text-green-400">{value}</div>
      <div className="text-xs text-white/80">{label}</div>
    </div>
  );
}
