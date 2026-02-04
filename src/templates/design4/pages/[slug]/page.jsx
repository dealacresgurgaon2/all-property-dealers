"use client";

import DealerDetailPage from "./DealerDetailPage";
import QueryForm from "../../components/QueryForm";

export default function BlogPage() {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT SIDE – DEALER DETAILS */}
          <div className="lg:col-span-2">
            <DealerDetailPage />
          </div>

          {/* RIGHT SIDE – STICKY QUERY FORM */}
          <div className="hidden lg:block">
            <div className="sticky top-[80px]">
              <QueryForm />
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
