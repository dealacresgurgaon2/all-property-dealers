"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";
import Breadcrumb from "../../components/Breadcrumb";

const formatDate = (date) => {
  if (!date) return "N/A";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {
  const { blogs = [], listloading, listerror, domain } = useBlogs();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [blogs]);

  const filteredBlogs = domain
    ? blogs.filter((b) => b?.domain === domain)
    : blogs;

  const sortedBlogs = [...filteredBlogs].sort(
    (a, b) => new Date(b?.date || b?.Date) - new Date(a?.date || a?.Date)
  );

  // 🔄 LOADER
  if (loading || listloading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec]" />

        <div className="relative flex flex-col items-center gap-4">
          <div className="w-14 h-14 border-4 border-[#D02752]/30 border-t-[#D02752] rounded-full animate-spin"></div>
          <h2 className="text-lg text-[#D02752] font-semibold">
            Loading Blogs...
          </h2>
          <p className="text-sm text-gray-500">
            Please wait while we fetch content
          </p>
        </div>
      </div>
    );
  }

  // ❌ ERROR
  if (listerror) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-red-500 text-lg">
        {listerror || "Something went wrong"}
      </div>
    );
  }

  // 🚫 EMPTY
  if (!sortedBlogs.length) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-[#8A244B] mb-3">
          🚀 Blogs Coming Soon
        </h2>
        <p className="text-gray-500 max-w-md">
          We’re working on bringing you amazing real estate insights.
        </p>
      </div>
    );
  }

  return (
    <section className="relative py-16 overflow-hidden">

      {/* PREMIUM BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec]" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#D02752]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div>
            <Breadcrumb/>
          </div>
          <span className="inline-block bg-[#fde6ec] text-[#D02752] text-sm font-semibold px-5 py-2 rounded-full mb-4">
            Knowledge Hub
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-[#8A244B] mb-3">
            Latest Real Estate Insights
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Guides, tips & expert insights to help you make smarter decisions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {sortedBlogs.map((post, i) => {
            const titleText =
              typeof post?.title === "object"
                ? post?.title?.rendered
                : post?.title || post?.Title || "Untitled Blog";

            const imageUrl =
              post?.heroImg ||
              post?.HeroImg?.url ||
              "/placeholder.jpg";

            const slug = post?.slug || post?.Slug;

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
                className="group relative bg-white border border-[#f3c6d1] rounded-2xl shadow-md p-4 hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden"
              >

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#D02752]/5 to-[#8A244B]/5" />

                {/* IMAGE */}
                <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={imageUrl}
                    alt={titleText}
                    unoptimized
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* CATEGORY */}
                {category && (
                  <div className="mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#fde6ec] text-[#D02752] border border-[#f3c6d1]">
                      {category}
                    </span>
                  </div>
                )}

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#D02752] transition">
                  {titleText}
                </h3>

                {/* DATE */}
                <p className="text-sm text-gray-500">
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