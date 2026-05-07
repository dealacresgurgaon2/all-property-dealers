"use client";

import { useEffect, useState } from "react";
import GreenContactPopup from "./GreenContactPopup";

export default function Hero() {
  const [counts, setCounts] = useState({ listings: 0, cities: 0, years: 0 });
  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", phone: "", lookingFor: "", message: "" });

  useEffect(() => {
    const targets = { listings: 500, cities: 25, years: 20 };
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setCounts({
        listings: Math.min(Math.round((targets.listings / 60) * step), targets.listings),
        cities: Math.min(Math.round((targets.cities / 60) * step), targets.cities),
        years: Math.min(Math.round((targets.years / 60) * step), targets.years),
      });
      if (step >= 60) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && (!/^\d*$/.test(value) || value.length > 10)) return;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.phone.length !== 10) return alert("Enter valid 10 digit phone");
    if (!form.lookingFor) return alert("Select requirement");

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);

    alert("Expert will contact you!");
    setForm({ name: "", phone: "", lookingFor: "", message: "" });
  };

  return (
    <section className="relative w-full min-h-[80vh] py-3 flex items-center overflow-hidden bg-white">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec]" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#D02752]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-[#8A244B]/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* FORM CARD */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D02752] to-[#8A244B] rounded-2xl blur opacity-30 group-hover:opacity-60 transition" />

          <div className="relative bg-white border border-[#f3c6d1] rounded-2xl p-6 shadow-2xl">
            <p className="text-xl font-bold text-[#8A244B] text-center mb-5">
              Premium Property Experts
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-white text-black border border-[#e7a7b7] focus:ring-2 focus:ring-[#D02752] outline-none placeholder-gray-500" />

              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-lg bg-white text-black border border-[#e7a7b7] focus:ring-2 focus:ring-[#D02752] outline-none placeholder-gray-500" />

              <select name="lookingFor" value={form.lookingFor} onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white text-black border border-[#e7a7b7] focus:ring-2 focus:ring-[#D02752]">
                <option value="">Select Requirement</option>
                <option>Buy</option>
                <option>Rent</option>
                <option>Sell</option>
              </select>

              <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                placeholder="Tell us your requirement"
                className="w-full px-4 py-2 rounded-lg bg-white text-black border border-[#e7a7b7] focus:ring-2 focus:ring-[#D02752]" />

              <button disabled={loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D02752] to-[#8A244B] text-white font-semibold hover:scale-[1.03] transition shadow-lg">
                {loading ? "Processing..." : "Get Premium Deals"}
              </button>

            </form>
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-gray-800 space-y-6">

          <span className="inline-block px-4 py-1 rounded-full text-sm bg-[#fde6ec] text-[#D02752] font-medium">
            Luxury Real Estate
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Own Premium Property in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D02752] to-[#8A244B]">
              Chandigarh
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg">
            Discover luxury flats, commercial spaces & high-return investments.
            Trusted experts helping you close deals faster.
          </p>

          <button onClick={() => setPopupOpen(true)}
            className="px-6 py-3 rounded-lg bg-[#D02752] text-white font-semibold hover:bg-[#8A244B] transition shadow-md">
            Talk to Expert
          </button>

          {/* STATS */}
          <div className="flex gap-6 pt-4">
            <Stat value={`${counts.listings}+`} label="Listings" />
            <Stat value={`${counts.years}+`} label="Years" />
          </div>

        </div>
      </div>

      <GreenContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-[#D02752]">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}