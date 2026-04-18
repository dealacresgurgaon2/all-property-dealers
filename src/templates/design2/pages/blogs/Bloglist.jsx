"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";

// 📅 Date formatter
const formatDate = (date) => {
  if (!date) return "N/A";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {

  const { blogs = [], listLoading, listError } = useBlogs();

  // ✅ SORT LATEST FIRST
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b?.date || b?.Date) - new Date(a?.date || a?.Date)
  );

  // ===== LOADING =====
  if (listLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf6f3]">
        <div className="flex flex-col items-center gap-4">

          {/* 🔥 GOLD SPINNER */}
          <div className="w-14 h-14 border-4 border-[#d4af37]/30 border-t-[#d4af37] rounded-full animate-spin"></div>

          <h2 className="text-lg text-[#422c18] font-semibold">
            Loading Blog...
          </h2>

          <p className="text-sm text-[#6b4f2a]">
            Please wait while we fetch the content
          </p>

        </div>
      </div>
    );
  }

  // ===== ERROR =====
  if (listError) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-red-600 text-lg">
        {listError || "Something went wrong while loading blogs"}
      </div>
    );
  }

  // ===== EMPTY =====
  if (!sortedBlogs.length) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-[#422c18] text-lg">
        No blogs available
      </div>
    );
  }

  return (
    <section className="px-4 lg:px-0 bg-gradient-to-b from-[#faf6f3] to-white py-6">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-[#422c18] mb-2">
          Latest Blogs
        </h1>
      </section>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">

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

          // ✅ CATEGORY FIX (ALL CASES HANDLE)
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
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4af37]/30 hover:shadow-xl hover:border-[#d4af37]/60 transition duration-300 hover:-translate-y-1"
            >

              {/* IMAGE */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={titleText}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* 🔥 CATEGORY BADGE */}
                {category && (
                  <div className="mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#d4af37]/20 text-gray-900 border border-[#d4af37]/40">
                      {category}
                    </span>
                  </div>
                )}

                {/* TITLE */}
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 line-clamp-2 group-hover:text-[#422c18]  transition">
                  {titleText}
                </h3>

                {/* FOOTER */}
                <div className="flex items-center justify-between text-sm">

                  <span className="text-[#7a5c42] font-medium">
                    {formatDate(post?.date || post?.Date)}
                  </span>

                  <span className="text-[#d4af37] font-semibold group-hover:underline">
                    Read More →
                  </span>

                </div>

              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}