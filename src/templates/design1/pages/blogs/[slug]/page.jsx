"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useBlogs } from "@/context/blogcontext/BlogContext";

const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function SingleBlogPage() {
  const { slug } = useParams();

  const { singleBlog, fetchSingleBlog, recentBlogs, loading } = useBlogs();

  // ===== FIXED TYPO HERE =====
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      setPageLoading(true);

      fetchSingleBlog(slug);

      // Smooth loader experience
      setTimeout(() => {
        setPageLoading(false);
      }, 200);
    }
  }, [slug]);

  if (loading || pageLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf6f3]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 border-4 border-[#1e40af] border-t-[#1e40af] rounded-full animate-spin"></div>

          <h2 className="text-lg text-[#1e40af] font-semibold">
            Loading Blog...
          </h2>

          <p className="text-sm text-[#1e40af]">
            Please wait while we fetch the content
          </p>
        </div>
      </div>
    );
  }

  if (!singleBlog) {
    return (
      <div className="py-32 text-center text-xl text-red-700">
        Blog not found
      </div>
    );
  }

  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">

        {/* ================= LEFT BLOG ================= */}
        <div className="lg:col-span-2">
          <div className="px-2 md:px-10">

            {/* IMAGE */}
            <div className="relative w-full h-[420px] mb-8">
              <Image
                src={singleBlog.heroImg}
                alt={singleBlog.title?.rendered}
                fill
                priority
                className="object-cover rounded-2xl"
              />
            </div>

            {/* META */}
            <div className="flex items-center gap-3 mb-4">

              {/* FIXED WRONG VARIABLE HERE */}
              {singleBlog.category && (
                <span className="bg-[#1e40af] text-white text-xs px-3 py-1 rounded-full">
                  {singleBlog.category}
                </span>
              )}

              <span className="text-sm text-gray-500">
                {formatDate(singleBlog.date)}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#0b1f33] leading-tight mb-8">
              {singleBlog.title?.rendered}
            </h1>

            {/* CONTENT */}
            <div
              className="space-y-6 text-gray-700 leading-8 text-[17px]"
              dangerouslySetInnerHTML={{
                __html: singleBlog.content?.rendered,
              }}
            />

          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-4">

            <h3 className="text-xl font-semibold text-[#0b1f33]">
              Recent Blogs
            </h3>

            {loading && (
              <p className="text-sm text-black/60">
                Loading recent blogs...
              </p>
            )}

            {!loading &&
              recentBlogs &&
              recentBlogs.length > 0 &&
              recentBlogs.map((b) => (
                <Link
                  key={b._id}
                  href={`/blogs/${b.slug}`}
                  className={`flex gap-4 p-3 rounded-xl
                    bg-white border border-[#1e40af]/20
                    shadow hover:shadow-lg transition
                    ${
                      b.slug === singleBlog.slug
                        ? "ring-2 ring-[#1e40af]"
                        : ""
                    }`}
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={b.heroImg}
                      alt={b.title?.rendered}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-black/50 mb-1">
                      {formatDate(b.date)}
                    </p>

                    <h4 className="text-sm font-semibold text-black line-clamp-2">
                      {b.title?.rendered}
                    </h4>
                  </div>
                </Link>
              ))}

          </div>
        </div>

      </div>
    </section>
  );
}
