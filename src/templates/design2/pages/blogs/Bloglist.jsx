"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";

// 📅 Date formatter
const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {

  const { blogs, loading } = useBlogs();

  // ===== Loading UI =====
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf6f3]">

        <div className="flex flex-col items-center gap-4">

          {/* Animated Loader */}
          <div className="w-14 h-14 border-4 border-[#d4c2b5] border-t-[#422c18] rounded-full animate-spin"></div>

          <h2 className="text-lg text-[#422c18] font-semibold">
            Loading Blog...
          </h2>

          <p className="text-sm text-[#7a5c42]">
            Please wait while we fetch the content
          </p>

        </div>

      </div>
    );
  }

  // ===== Empty Blogs Case =====
  if (!blogs || blogs.length === 0) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-[#422c18] text-lg">
        No blogs available
      </div>
    );
  }

  return (
    <section className="px-4 lg:px-0 bg-white py-5">

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-[#422c18] mb-2">
          Latest Blogs
        </h1>
      </section>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">

        {blogs.map((post) => {

          // Handle title whether it's object or string
          const titleText =
            typeof post.title === "object"
              ? post.title?.rendered
              : post.title;

          return (
            <Link
              key={post._id}
              href={`/blogs/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#d4af37]/20 hover:shadow-2xl transition"
            >

              {/* IMAGE */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={post.heroImg}
                  alt={titleText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-black leading-snug mb-3 line-clamp-2">
                  {titleText}
                </h3>

                {/* FOOTER */}
                <div className="flex items-center justify-between text-sm text-black/60">
                  <span>{formatDate(post.date)}</span>

                  <span className="text-[#d4af37] font-medium group-hover:underline">
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
