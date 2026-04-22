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

  useEffect(() => {
    if (typeof window !== "undefined") {
      let hostname = window.location.hostname;

      if (hostname === "localhost") {
        hostname = "www.propertydealerinchandigarh.com";
      }

      setDomain(hostname);
    }
  }, [setDomain]);

  // ===== LOADING =====
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-10 h-10 border-4 border-[#D02752]/30 border-t-[#D02752] rounded-full animate-spin"></div>
      </div>
    );
  }

  // ===== EMPTY =====
  if (!blogs.length) {
    return (
      <section className="relative px-4 py-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec]" />

        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#8A244B] mb-6">
            Latest Chandigarh Blogs
          </h2>

          <p className="text-center text-gray-500">
            No blogs available right now
          </p>
        </div>
      </section>
    );
  }

  // 🔥 SORT LATEST FIRST (IMPORTANT FIX)
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b?.date || b?.Date) - new Date(a?.date || a?.Date)
  );

  // 🔥 TAKE TOP 4 AFTER SORT
  const fourBlogs = sortedBlogs.slice(0, 4);

  return (
    <section className="relative px-4 py-12">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec]" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#D02752]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8A244B]">
            Latest Property Blogs in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D02752] to-[#8A244B]">
              Chandigarh
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#D02752] to-[#8A244B] mt-3 rounded-full"></div>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {fourBlogs.map((post, i) => {

            // ✅ SAFE TITLE
            const titleText =
              typeof post?.title === "object"
                ? post?.title?.rendered
                : post?.title || post?.Title || "Untitled Blog";

            // ✅ SAFE IMAGE (IMPORTANT FIX)
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
                className="group relative bg-white border border-[#f3c6d1] rounded-2xl p-3 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#D02752]/5 to-[#8A244B]/5" />

                {/* IMAGE */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-3">
                  <Image
                    src={imageUrl}
                    alt={titleText}
                    fill
                     unoptimized 
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#D02752] transition line-clamp-2">
                  {titleText}
                </h3>

                {/* DATE */}
                <p className="text-sm text-[#D02752] mt-2 font-medium">
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