
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
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* PAGE HEADER */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600">
            Dealer Profile & Details
          </h2>

          <p className="text-sm text-black/70 mt-1">
            Verified information and complete details about trusted property dealer
          </p>

          <div className="w-16 h-1 bg-green-600 mt-3 rounded-full"></div>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE – DEALER DETAILS */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-green-200 shadow-sm p-2">
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
              <div className="bg-white rounded-2xl p-5 border border-green-200">
                <h4 className="font-semibold text-green-700 mb-2">
                  Need Quick Help?
                </h4>

                <p className="text-sm text-black/70 mb-3">
                  Our experts are available to assist you with property buying, selling and renting.
                </p>

                <div className="text-sm text-black/80 space-y-1">
                  <p>📞 +91 98765 43210</p>
                  <p>✉ support@propertydealer.com</p>
                </div>

                <div className="mt-3 text-xs text-green-700 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
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
