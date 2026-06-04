"use client";

import { useEffect, useState } from "react";
import GoldContactPopup from "./GoldContactPopup";
import CustomAlert from "./CustomAlert";

export default function Hero() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [counts, setCounts] = useState({
    listings: 0,
    cities: 0,
    years: 0,
  });
   const [alertOpen, setAlertOpen] = useState(false);

const [alertData, setAlertData] = useState({
  type: "success",
  message: "",
});
  useEffect(() => {
    const targets = { listings:1000 , cities: 25, years: 20 };
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

  return (
    <section
      className="relative w-full min-h-[82vh] flex items-center overflow-hidden py-4"
      style={{
        backgroundImage: "url('/images/you.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY (ONLY HERO AREA) */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* BLOBS */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#d4af37]/20 blur-3xl rounded-full z-0" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 blur-3xl rounded-full z-0" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_420px] gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="text-white">
            {/* <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              Trusted
            </span> */}

            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              Find Your{" "}
              <span className="text-[#d4af37]">Dream Property</span>
             
              At Best Price <span className="text-[#d4af37]">With Us</span>
            </h1>

            <p className="text-lg text-white/85 mb-8 max-3-xl">
              Looking for the best property dealer in Faridabad to buy, sell, or rent your dream home? You have come to the right place. We are a team of experienced and certified real estate agents in Faridabad, offering end-to-end property solutions across all major sectors, colonies, and localities. Whether you need a trusted property broker in Faridabad for residential plots, independent floors, builder floors, or commercial spaces, our verified network of real estate brokers in Faridabad ensures a smooth and transparent transaction every time. We specialise in NIT Faridabad, Neharpar Greater Faridabad, Ashoka Enclave, Sainik Colony, Sector 15, 16, 21, and all Sectors 70–90 in Greater Faridabad. As the most reliable real estate broker in Faridabad, we help you get the best market price with zero hidden charges. Thousands of satisfied buyers, sellers, and tenants trust us for honest advice, local expertise, and quick closings. Connect with Faridabad's most recommended property dealers today — your property journey starts here.
            </p>

            <button
              onClick={() => setPopupOpen(true)}
              className="px-6 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Agent
            </button>

            {/* STATS */}
            {/* <div className="grid grid-cols-3 gap-4 max-w-md mt-10">
              <Stat value={`${counts.listings.toLocaleString()}+`} label=" Listings" />
              
              <Stat value={`${counts.years}+`} label="Years Experience" />
            </div> */}
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/15 backdrop-blur-xl border border-[#d4af37]/40 rounded-2xl shadow-2xl p-5 md:p-6 max-w-sm ml-auto w-full">
            <h2 className="text-lg font-bold mb-4 text-white text-center">
              Get Free Consultation
            </h2>
            <HeroForm
  setAlertOpen={setAlertOpen}
  setAlertData={setAlertData}
/>
          </div>

        </div>
      </div>

      <GoldContactPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
      <CustomAlert
  open={alertOpen}
  type={alertData.type}
  message={alertData.message}
  onClose={() => setAlertOpen(false)}
/>
    </section>
  );
}

/* FORM */
function HeroForm({
  setAlertOpen,
  setAlertData,
}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    lookingFor: "",
    message: "",
  });

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
      setAlertData({
  type: "error",
  message: "Phone number must be 10 digits",
});

setAlertOpen(true);
      return;
    }

    setLoading(true);

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
      lookingFor: "",
      message: "",
    });

    setLoading(false);
  };

  const inputClass =
    "w-full bg-white rounded-md px-4 py-2 text-black border border-[#d4af37]/30 focus:ring-2 focus:ring-[#d4af37]/60 outline-none text-sm transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your Name" className={inputClass} />
      <input type="text" name="phone" inputMode="numeric" required value={form.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
      <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Email Address" className={inputClass} />
      <select name="lookingFor" required value={form.lookingFor} onChange={handleChange} className={inputClass}>
        <option value="">Looking for</option>
        <option>Buy Property</option>
        <option>Rent Property</option>
        <option>Sell Property</option>
      </select>
      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Your Message" className={`${inputClass} resize-none`} />
      <button type="submit" disabled={loading} className="w-full bg-[#d4af37] text-black py-2.5 rounded-md font-semibold hover:bg-[#c9a227] transition disabled:opacity-60">
        {loading ? "Submitting..." : "Submit Query"}
      </button>
    </form>
  );
}
   
/* STAT */
function Stat({ value, label }) {
  return (
    <div className="bg-white/15 backdrop-blur border border-white/20 rounded-xl p-3 text-center">
      <div className="text-xl font-bold text-[#d4af37]">{value}</div>
      <div className="text-xs text-white/80">{label}</div>
    </div>
  );
}
