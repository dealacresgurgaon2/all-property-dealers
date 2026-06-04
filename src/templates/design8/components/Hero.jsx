"use client";

import { useEffect, useState } from "react";
import CustomAlert from "./CustomAlert";

export default function Hero() {

  const [counts, setCounts] = useState({
    listings: 0,
    cities: 0,
    years: 0,
  });

  const [loading, setLoading] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);

  const [alertData, setAlertData] = useState({
    type: "success",
    message: "",
  });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });

  useEffect(() => {

    const targets = {
      listings: 5000,
      cities: 25,
      years: 10,
    };

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

      if (step >= steps) {
        clearInterval(interval);
      }

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

    setForm({
      ...form,
      [name]: value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (form.phone.length !== 10) {

      setAlertData({
        type: "error",
        message: "Mobile number must be 10 digits",
      });

      setAlertOpen(true);

      return;
    }

    if (!form.requirement) {

      setAlertData({
        type: "error",
        message: "Please select requirement",
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
          name: `${form.firstName} ${form.lastName}`,
          phone: form.phone,
          email: form.email,
          option: form.requirement,
          message: form.message,
          website,
        }),
      });

      const result = await res.json();

      console.log("HERO RESULT =>", result);

      if (res.ok) {

        setAlertData({
          type: "success",
          message: "Your enquiry has been submitted!",
        });

        setAlertOpen(true);

        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          requirement: "",
          message: "",
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

    } catch (error) {

      console.log("Hero form error:", error);

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

              <h1 className="text-3xl md:text-5xl font-bold leading-[1.15]">

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
              {/* <div className="flex gap-4 mt-7">

                <button className="px-7 h-12 rounded-xl bg-gradient-to-r from-[#76153C] to-[#5A0E24] font-semibold hover:opacity-90 transition">

                  Contact Agent

                </button>

                <button className="px-7 h-12 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">

                  Explore

                </button>

              </div> */}

              {/* STATS */}
              {/* <div className="flex gap-4 mt-10 flex-wrap">

                <ModernStat
                  value={`${counts.listings}+`}
                  label="Listings"
                />

                <ModernStat
                  value={`${counts.cities}+`}
                  label="Cities"
                />

                <ModernStat
                  value={`${counts.years}+`}
                  label="Years"
                />

              </div> */}

            </div>

            {/* RIGHT FORM */}
            <div className="flex justify-center lg:justify-end">

              <div className="w-full max-w-[500px] rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-4 shadow-[0_10px_60px_rgba(0,0,0,0.35)]">

                <div className="mb-4">

                  <h3 className="text-3xl font-bold text-center">
                    Quick Property Help
                  </h3>

                  <p className="text-gray-400 text-sm text-center mt-2">
                    Fill the form to get instant callback.
                  </p>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >

                  <div className="grid grid-cols-2 gap-4">

                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="h-12 rounded-xl bg-white px-4 text-black outline-none"
                    />

                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="h-12 rounded-xl bg-white px-4 text-black outline-none"
                    />

                  </div>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full h-12 rounded-xl bg-white px-4 text-black outline-none"
                  />

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full h-12 rounded-xl bg-white px-4 text-black outline-none"
                  />

                  <select
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    className="w-full h-12 rounded-xl bg-white px-4 text-black outline-none"
                  >

                    <option value="">
                      Select Requirement
                    </option>

                    <option value="Buy Property">
                      Buy Property
                    </option>

                    <option value="Sell Property">
                      Sell Property
                    </option>

                    <option value="Rent Property">
                      Rent Property
                    </option>

                  </select>

                  <textarea
                    rows={3}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe requirement..."
                    className="w-full rounded-xl bg-white px-4 py-3 text-black outline-none resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-[#76153C] to-[#5A0E24] font-semibold hover:opacity-90 transition cursor-pointer disabled:opacity-60"
                  >

                    {loading
                      ? "Submitting..."
                      : "Get Callback"}

                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ALERT */}
      <CustomAlert
        open={alertOpen}
        type={alertData.type}
        message={alertData.message}
        onClose={() => {
          setAlertOpen(false);
        }}
      />

    </>

  );

}

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