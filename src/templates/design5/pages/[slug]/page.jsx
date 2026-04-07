

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
    <main className="bg-[#faf8f2] py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE – DEALER DETAILS */}
          <div className="lg:col-span-2">
            <DealerDetailPage slug={slug}/>
          </div>

          {/* RIGHT SIDE – STICKY QUERY FORM */}
          <div className="hidden lg:block">
            <div className="sticky top-[80px]">
              <QueryForm />
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
