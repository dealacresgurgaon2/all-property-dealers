

import DealerDetailPage from "./DealerDetailPage";
import QueryForm from "../../components/QueryForm";
import FourBlogs from "../../components/FourBlogs";

export default async function BlogPage({ params }) {
  const resolvedParams = await params;   // ✅ FIX
  const slug = resolvedParams.slug;

  if (!slug) {
    return <div>Slug missing 😅</div>;
  }
  return (
    <main className="bg-[#fff0f4] py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* PAGE HEADER */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#D02752]">
            Dealer Profile & Details
          </h2>

          <p className="text-sm text-gray-600 mt-1">
            Verified information and complete details about trusted property dealer
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-[#D02752] to-[#8A244B] mt-3 rounded-full"></div>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE – DEALER DETAILS */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-[#f3c6d1] shadow-sm p-2">
              <DealerDetailPage slug={slug} />
            </div>
          </div>

          {/* RIGHT SIDE – STICKY QUERY FORM */}
          <div className="hidden lg:block">
            <div className="sticky top-[80px] space-y-6">

              {/* QUERY FORM CARD */}
              <div className="rounded-2xl shadow-lg">
                <QueryForm />
              </div>

              {/* SMALL INFO CARD */}
              <div className="bg-white rounded-2xl p-5 border border-[#f3c6d1]">
                <h4 className="font-semibold text-[#8A244B] mb-2">
                  Need Quick Help?
                </h4>

                <p className="text-sm text-gray-600 mb-3">
                  Our experts are available to assist you with property buying, selling and renting.
                </p>

                <div className="text-sm text-gray-700 space-y-1">
                  <p>📞 +91 98765 43210</p>
                  <p>✉ support@propertydealer.com</p>
                </div>

                <div className="mt-3 text-xs text-[#D02752] bg-[#fde6ec] px-3 py-2 rounded-lg border border-[#f3c6d1]">
                  ✓ 100% Verified & Trusted Platform
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