"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";
import Breadcrumb from "../../components/Breadcrumb";

// 📅 Date formatter
const formatDate = (date) => {
  if (!date) return "N/A";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {
  const { blogs = [], listloading } = useBlogs();

  // 🔁 LOADING STATE
  if (listloading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">

          <div className="w-14 h-14 border-4 border-red-600/30 border-t-red-600 rounded-full animate-spin"></div>

          <h2 className="text-lg text-red-600 font-semibold">
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
        <div className=" mb-12">
          <div className="py-5">
            <Breadcrumb/>
          </div>
          <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-5 py-2 rounded-full mb-4">
            Knowledge Hub
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Latest Real Estate Insights
          </h1>

          <p className="text-black/70 max-w-2xl ">
            Tips, guides and expert articles to help you make smarter real estate decisions.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((post, i) => {

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

            // ✅ CATEGORY FIX
            const category =
              typeof post?.category === "string"
                ? post.category
                : typeof post?.Category === "string"
                ? post.Category
                : Array.isArray(post?.categories)
                ? post.categories[0]?.name || post.categories[0]
                : post?.categories || "Real Estate";

            return (
              <Link
                key={post?._id || slug || i}
                href={`/blogs/${slug}`}
                className="group bg-white border border-red-600/20 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >

                {/* IMAGE */}
                <div className="relative w-full h-56 overflow-hidden">

                  <Image
                    src={imageUrl}
                    alt={titleText}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* 🔥 CATEGORY */}
                  <span className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {category}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-grow">

                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-red-600 transition line-clamp-2">
                    {titleText}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">
                    Published on {formatDate(post?.date || post?.Date)}
                  </p>

                  <div className="mt-auto">
                    <span className="text-red-600 text-sm font-medium group-hover:underline">
                      Read Full Article →
                    </span>
                  </div>

                </div>

              </Link>
            );
          })}

        </div>

        {/* EMPTY */}
        {blogs.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-700">
              No Blogs Found
            </h3>
            <p className="text-gray-500 mt-2">
              Please check back later for new updates.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}