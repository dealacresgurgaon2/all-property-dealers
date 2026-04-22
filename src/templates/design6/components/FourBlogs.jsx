"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../context/blogcontext/BlogContext";
import { useEffect } from "react";

// 📅 Date formatter
const formatDate = (date) => {
  if (!date) return "N/A";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function FourBlogs() {
  const { blogs = [], loading, setDomain } = useBlogs();

  // ✅ DOMAIN FIX
  useEffect(() => {
    if (typeof window !== "undefined") {
      let hostname = window.location.hostname;

      if (hostname === "localhost") {
        hostname = "www.propertydealerinnoida.com";
      }

      setDomain(hostname);
    }
  }, [setDomain]);

  // ===== LOADING =====
  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="w-10 h-10 border-4 border-green-600/30 border-t-green-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  // ===== EMPTY =====
  if (!blogs.length) {
    return (
      <section className="px-4 py-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          No blogs available
        </div>
      </section>
    );
  }

  // 🔥 SORT (same as BlogList)
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b?.date || b?.Date) - new Date(a?.date || a?.Date)
  );

  // 🔥 TAKE TOP 4 AFTER SORT
  const fourBlogs = sortedBlogs.slice(0, 4);

  return (
    <section className="px-4 py-10 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-green-700">
            Latest Blogs
          </h2>

          <Link
            href="/blogs"
            className="text-sm text-green-700 font-semibold hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {fourBlogs.map((post, i) => {

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
                className="group bg-white border border-green-700/20 rounded-xl p-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >

                {/* IMAGE */}
                <div className="relative w-full h-44 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={imageUrl}
                    alt={titleText}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* CATEGORY */}
                {category && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {category}
                  </span>
                )}

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-green-800 mt-2 line-clamp-2 group-hover:text-green-600">
                  {titleText}
                </h3>

                {/* DATE */}
                <p className="text-xs text-gray-500 mt-1">
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