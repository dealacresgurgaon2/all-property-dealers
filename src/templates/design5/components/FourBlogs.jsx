"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../context/blogcontext/BlogContext";
import { useEffect } from "react";

const formatDate = (date) => {
  if (!date) return "N/A";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function FourBlogs() {
  const { blogs = [], loading, setDomain } = useBlogs();

  // 👉 Domain auto detect
  useEffect(() => {
    if (typeof window !== "undefined") {
      let hostname = window.location.hostname;

      if (hostname === "localhost") {
        hostname = "www.propertydealerindelhi.com";
      }

      setDomain(hostname);
    }
  }, [setDomain]);

  // ===== LOADING =====
  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="w-10 h-10 border-4 border-red-600/30 border-t-red-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  // ===== EMPTY =====
  if (!blogs.length) {
    return (
      <section className="px-4 py-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-red-600 mb-6">
            Latest Blogs
          </h2>

          <p className="text-center text-gray-600">
            No blogs available for this domain
          </p>
        </div>
      </section>
    );
  }

  // 🔥 SORT (LATEST FIRST)
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b?.date || b?.Date) - new Date(a?.date || a?.Date)
  );

  // 🔥 TAKE TOP 4
  const fourBlogs = sortedBlogs.slice(0, 4);

  return (
    <section className="px-4 py-8 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl font-bold text-red-600 mb-6">
          Latest Blogs
        </h2>

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

            return (
              <Link
                key={post?._id || slug || i}
                href={`/blogs/${slug}`}
                className="group bg-white border rounded-xl p-3 shadow-sm hover:-translate-y-2 transition-all"
              >

                {/* IMAGE */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={imageUrl}
                    alt={titleText}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-base font-semibold text-red-600 group-hover:text-red-600 transition line-clamp-2">
                  {titleText}
                </h3>

                {/* DATE */}
                <p className="text-sm text-blue-600 mt-1">
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