"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";
import Breadcrumb from "../../components/Breadcrumb";

// 📅 Date formatter
const formatDate = (date) => {
  if (!date) return "N/A";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {
  const { blogs = [], page, setPage, totalPages, listloading, listerror } = useBlogs();

  // ✅ SORT LATEST FIRST
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b?.date || b?.Date) - new Date(a?.date || a?.Date)
  );

  // ===== LOADING =====
  if (listloading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">

          <div className="w-14 h-14 border-4 border-green-700/30 border-t-green-700 rounded-full animate-spin"></div>

          <h2 className="text-lg text-green-700 font-semibold">
            Loading Blog...
          </h2>

          <p className="text-sm text-gray-600">
            Please wait while we fetch the content
          </p>

        </div>
      </div>
    );
  }

  // ===== ERROR =====
  if (listerror) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-red-600 text-lg">
        {listerror || "Something went wrong"}
      </div>
    );
  }

  // ===== EMPTY =====
  if (!sortedBlogs.length) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-gray-700 text-lg">
        No blogs available
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-5">
          <Breadcrumb/>
        </div>
        {/* HEADER */}
        <div className=" mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-5 py-2 rounded-full mb-4">
            Knowledge Hub
          </span>

          <h1 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Latest Real Estate Insights
          </h1>

          <p className="text-black/70 max-w-2xl ">
            Tips, guides and expert articles to help you make smarter real estate decisions.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {sortedBlogs.map((post, i) => {

            // ✅ SAFE TITLE
            const titleText =
              typeof post?.title === "object"
                ? post?.title?.rendered
                : post?.title || post?.Title || "Untitled Blog";

            // ✅ SAFE IMAGE
            const imageUrl =
              post?.heroImg ||
              post?.HeroImg?.url ||
              "/placeholder.jpg";

            // ✅ SAFE SLUG
            const slug = post?.slug || post?.Slug;

            // ✅ CATEGORY
            const category =
              typeof post?.category === "string"
                ? post.category
                : typeof post?.Category === "string"
                ? post.Category
                : Array.isArray(post?.categories)
                ? post.categories[0]?.name || post.categories[0]
                : post?.categories || null;

            return (
              <Link
                key={post?._id || slug || i}
                href={`/blogs/${slug}`}
                className="group bg-white border border-green-700/20 rounded-xl shadow-sm p-4 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >

                {/* IMAGE */}
                <div className="relative w-full h-56 rounded-md overflow-hidden mb-4">
                  <Image
                    src={imageUrl}
                    alt={titleText}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* 🔥 CATEGORY */}
                {category && (
                  <div className="mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                      {category}
                    </span>
                  </div>
                )}

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-green-800 mb-2 line-clamp-2 group-hover:text-green-700">
                  {titleText}
                </h3>

                {/* DATE */}
                <p className="text-sm text-gray-600">
                  {formatDate(post?.date || post?.Date)}
                </p>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}