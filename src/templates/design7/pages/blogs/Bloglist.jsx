"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../../context/design7api/blogcontext";
import Breadcrumb from "../../components/Breadcrumb";

const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {
  const { blogs, listLoading, listError } = useBlogs();

  // ✅ LOADING
  if (listLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">

          <div className="w-14 h-14 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>

          <h2 className="text-lg font-semibold text-indigo-700">
            Loading Blogs...
          </h2>

          <p className="text-sm text-gray-500">
            Fetching latest articles
          </p>
        </div>
      </div>
    );
  }

  // ✅ ERROR
  if (listError) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <p className="text-red-500 font-medium">{listError}</p>
      </div>
    );
  }

  return (
    <section className="px-4 lg:px-0 bg-slate-50 py-10">

      {/* 🔥 HEADER */}
      <div className="max-w-7xl mx-auto  mb-12">
        <div className="mb-5"> 
          <Breadcrumb/>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-transparent bg-clip-text mb-3">
          Latest Blogs
        </h1>

        <p className="text-gray-500 max-w-xl">
          Explore latest real estate insights, guides & expert tips
        </p>
      </div>

      {/* 🔥 BLOG GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">

        {blogs && blogs.length > 0 ? (
          [...blogs]
            .sort((a, b) => new Date(b?.Date) - new Date(a?.Date))
            .map((post, index) => (
              <Link
                key={index}
                href={`/blogs/${post?.Slug}`}
                className="group bg-white border border-indigo-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(79,70,229,0.25)]"
              >

                {/* IMAGE */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={post?.HeroImg?.url || "/placeholder.jpg"}
                    alt={post?.Title || "Blog Image"}
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col">

                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-700 transition">
                    {post?.Title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">
                    {formatDate(post?.Date)}
                  </p>

                  <div className="flex items-center justify-between mt-auto">

                    <span className="text-indigo-600 text-sm font-medium">
                      Read More
                    </span>

                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                      →
                    </span>

                  </div>

                </div>
              </Link>
            ))
        ) : (
         <div className="col-span-3 text-center py-10">
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    ✨ Coming Soon
  </h3>
  <p className="text-gray-500 text-sm">
    We’re working on amazing blogs for you. Stay tuned for updates, tips & insights!
  </p>
</div>
        )}
      </div>
    </section>
  );
}