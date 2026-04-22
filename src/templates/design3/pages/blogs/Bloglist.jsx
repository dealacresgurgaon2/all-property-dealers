"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";
import Breadcrumb from "../../components/Breadcrumb";

const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {

  const { blogs, page, setPage, totalPages, listLoading, listError } = useBlogs();

  // ✅ LOADING STATE
  if (listLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#5E23DC]/20 border-t-[#5E23DC] rounded-full animate-spin"></div>

          <h2 className="text-lg font-semibold text-[#5E23DC]">
            Loading Blogs...
          </h2>

          <p className="text-sm text-gray-500">
            Fetching latest articles
          </p>
        </div>
      </div>
    );
  }

  // ✅ ERROR STATE
  if (listError) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-red-500 font-medium">
          {listError}
        </p>
      </div>
    );
  }

  return (
    <section className="px-4 lg:px-0 bg-white py-5">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="py-5">
          <Breadcrumb/>
        </div>
        <h1 className="text-3xl font-bold text-[#5E23DC] mb-2">
          Latest Blogs
        </h1>
      </section>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">

        {blogs && blogs.length > 0 ? (
          [...(blogs || [])]
  .sort((a, b) => new Date(b?.Date) - new Date(a?.Date))
  .map((post, index) => (
            <Link
              key={index}
              href={`/blogs/${post?.Slug}`}
              className="group bg-white border border-[#5E23DC]/20 rounded-xl shadow-sm p-4 hover:shadow-md transition"
            >
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={post?.HeroImg?.url || "/placeholder.jpg"}
                  alt={post?.Title || "Blog Image"}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#5E23DC] mt-3 mb-1 line-clamp-2">
                {post?.Title}
              </h3>

              <p className="text-sm text-gray-500">
                {formatDate(post?.Date)}
              </p>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No Blogs Found
          </p>
        )}

      </div>

    </section>
  );
}