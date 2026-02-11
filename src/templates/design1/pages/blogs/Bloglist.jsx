"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";

const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {
  const { blogs, page, setPage, totalPages, loading } = useBlogs();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">

          <div className="w-14 h-14 border-4 border-blue-700/30 border-t-blue-900 rounded-full animate-spin"></div>

          <h2 className="text-lg text-blue-700 font-semibold">
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

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Latest Blogs
        </h1>
        <p className="text-blue-700">
          Read our latest insights on property & real estate.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">

        {blogs.map((post) => {

          // ===== FIXED TITLE LOGIC =====
          const titleText =
            typeof post.title === "object"
              ? post.title?.rendered
              : post.title;

          return (
            <Link
              key={post._id}
              href={`/blogs/${post.slug}`}
              className="group bg-white border rounded-xl p-3 shadow-sm hover:-translate-y-2 transition-all"
            >
              <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
                <Image
                  src={post.heroImg}
                  alt={titleText}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2 text-blue-900 group-hover:text-blue-700 transition">
                {titleText}
              </h3>

              <p className="text-sm text-blue-600">
                {formatDate(post.date)}
              </p>

            </Link>
          );
        })}

      </div>

    </section>
  );
}
