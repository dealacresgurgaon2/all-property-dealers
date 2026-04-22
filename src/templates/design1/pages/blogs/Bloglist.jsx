"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";

const formatDate = (date) => {
  if (!date) return "N/A";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {
  const { blogs = [], listLoading} = useBlogs();

  // ✅ SORT LATEST FIRST
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b?.date) - new Date(a?.date)
  );

  if (listLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">

          <div className="w-14 h-14 border-4 border-blue-700/30 border-t-[#1e40af] rounded-full animate-spin"></div>

          <h2 className="text-lg text-[#1e40af] font-semibold">
            Loading Blog...
          </h2>

          <p className="text-sm text-gray-600">
            Please wait while we fetch the content
          </p>

        </div>
      </div>
    );
  }

  return (
    <section className="px-4 py-8 bg-[#f8fafc]">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-[#1e40af] mb-2">
          Latest Blogs
        </h1>
        <p className="text-blue-700">
          Read our latest insights on property & real estate.
        </p>
      </section>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">

        {sortedBlogs.map((post) => {

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

  // ✅ CATEGORY HANDLE
  const category =
    post?.category ||
    post?.Category ||
    post?.categories?.[0]?.name ||
    "Real Estate";

  return (
    <Link
      key={post?._id || slug}
      href={`/blogs/${slug}`}
      className="group bg-white border rounded-xl p-3 shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
    >

      {/* IMAGE */}
      <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
        <Image
          src={imageUrl}
          alt={titleText}
          unoptimized
          fill
          className="object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* 🔥 CATEGORY BADGE */}
      <div className="mb-2">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-[#1e40af]">
          {category}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-2 text-blue-900 group-hover:text-[#1e40af] transition line-clamp-2">
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

    </section>
  );
}