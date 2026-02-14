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

          {/* Animated Loader */}
          <div className="w-14 h-14 border-4 border-[#5E23DC]/30 border-t-[#5E23DC] rounded-full animate-spin"></div>

          <h2 className="text-lg text-[#5E23DC] font-semibold">
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
    <section className="px-4 lg:px-0 bg-white py-5">

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-[#5E23DC] mb-2">
          Latest Blogs
        </h1>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">

        {blogs.map((post) => (

          <Link
            key={post._id}
            href={`/blogs/${post.slug}`}
            className="group bg-white border border-[#5E23DC]/20 rounded-xl shadow-sm p-4 hover:shadow-md transition"
          >
<div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
  <Image
    src={post.heroImg}
    alt={post.title?.rendered}
    fill
    className="object-cover"
  />
</div>





            <h3 className="text-lg font-semibold text-[#5E23DC] mb-2">
              {post.title?.rendered}
            </h3>

            <p className="text-sm text-gray-600">
              {formatDate(post.date)}
            </p>

          </Link>

        ))}

      </div>

    </section>
  );
}
