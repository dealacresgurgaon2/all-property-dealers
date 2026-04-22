import DealerDetailPage from "./DealerDetailPage";
import QueryForm from "../../components/QueryForm";
import FourBlogs from "../../components/FourBlogs";
import Breadcrumb from "../../components/Breadcrumb";

export default async function BlogPage({ params }) {
  const resolvedParams = await params;   // ✅ FIX
  const slug = resolvedParams.slug;

  if (!slug) {
    return <div>Slug missing 😅</div>;
  }

  return (
    <main className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
       <div className="py-5">
        <Breadcrumb/> 
       </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2 border rounded-xl p-4">
            <DealerDetailPage slug={slug} />
          </div>

          {/* RIGHT */}
            <div className="lg:col-span-1">
            <div className="sticky top-[80px]">
              <QueryForm />
            </div>
          </div>

        </div>

        <FourBlogs />

      </div>
    </main>
  );
}