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
const { blogs, page, setPage, totalPages, loading } = useBlogs();
  // 🔒 SAFETY CHECKS
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">

        <div className="flex flex-col items-center gap-4">

          {/* Animated Loader */}
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

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-5 py-2 rounded-full mb-4">
            Knowledge Hub
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Latest Real Estate Insights
          </h1>

          <p className="text-black/70 max-w-2xl mx-auto">
            Tips, guides and expert articles to help you make smarter real estate decisions.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

         {blogs.map((post) => (

          <Link
            key={post._id}
            href={`/blogs/${post.slug}`}
            className="group bg-white border border-green-700/20 rounded-xl shadow-sm p-4 hover:shadow-md transition"
          >

            <div className="relative w-full h-56 rounded-md overflow-hidden mb-4">
              <Image
                src={post.heroImg}
                alt={post.title?.rendered}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-green-700 mb-2">
              {post.title?.rendered}
            </h3>

            <p className="text-sm text-gray-600">
              {formatDate(post.date)}
            </p>

          </Link>
          ))}

        </div>

      </div>
    </section>
  );
}



