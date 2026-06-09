"use client";

import DealerDetailPage from "./DealerDetailPage";
import QueryForm from "../../components/QueryForm";
import FourBlogs from "../../components/FourBlogs";
import Breadcrumb from "../../components/Breadcrumb";
export default function BlogPage() {
  return (
    <main className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
<div className="mb-5">
         <Breadcrumb/>
        </div>
        

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE – DEALER DETAILS */}
          <div className="lg:col-span-2">

            <div className=" rounded-3xl border border-indigo-200 shadow-sm p-3">
              <DealerDetailPage />
            </div>

          </div>

          {/* RIGHT SIDE – STICKY PANEL */}
          <div className="hidden lg:block">

            <div className="sticky top-[80px] space-y-6">

              {/* QUERY FORM CARD */}
              <div className="rounded-3xl shadow-lg border border-indigo-200">
                <QueryForm />
              </div>

              {/* SUPPORT CARD - NEW STYLE
              <div className="bg-white rounded-3xl p-5 border border-purple-200">

                <h4 className="font-semibold text-purple-700 mb-2">
                  Need Instant Assistance?
                </h4>

                <p className="text-sm text-gray-600 mb-4">
                  Our property experts are ready to help you with buying, selling or renting.
                </p>

                <div className="space-y-3 text-sm">

                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-indigo-600">📞</span>
                    +91 98765 43210
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-purple-600">✉</span>
                    support@propertydealer.com
                  </div>

                </div>

                <div className="mt-4 text-xs text-pink-700 bg-pink-50 px-3 py-2 rounded-xl border border-pink-200">
                  ✓ 100% Verified & Trusted Platform
                </div>

                <button className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition">
                  Request Callback
                </button>

              </div> */}

              {/* SMALL TRUST BADGES */}
              <div className="grid grid-cols-2 gap-3">

                <div className="bg-white border border-indigo-200 rounded-2xl p-3 text-center">
                  <p className="text-indigo-700 font-bold text-sm">Secure</p>
                  <p className="text-xs text-gray-500">Transactions</p>
                </div>

                <div className="bg-white border border-purple-200 rounded-2xl p-3 text-center">
                  <p className="text-purple-700 font-bold text-sm">Trusted</p>
                  <p className="text-xs text-gray-500">Dealers</p>
                </div>

              </div>

            </div>
          </div>

        </div>
         <div className="mt-8">
        <FourBlogs />
      </div>

      </div>
    </main>
  );
}
