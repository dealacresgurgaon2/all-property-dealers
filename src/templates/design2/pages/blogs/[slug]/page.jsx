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

  // ===== LOCAL LOADING FOR REFRESH =====
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

  // ===== SHOW LOADER ON REFRESH OR API CALL =====
  if (loading || pageLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf6f3]">

        <div className="flex flex-col items-center gap-4">

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

  if (!singleBlog) {
    return (
      <div className="py-32 text-center text-xl text-red-700">
        Blog not found
      </div>
    );
  }

  return (
    <section className="bg-[#fafafa] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">

        {/* ===== MAIN BLOG ===== */}
        <div className="lg:col-span-2">

          {/* HERO IMAGE */}
          <div className="relative w-full h-[440px] mb-10 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={singleBlog.heroImg}
              alt={singleBlog.title?.rendered}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* META */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#d4af37]/20 text-[#b8964a] text-xs font-semibold px-4 py-1 rounded-full">
              Blog
            </span>

            <span className="text-sm text-black/50">
              {formatDate(singleBlog.date)}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-8">
            {singleBlog.title?.rendered}
          </h1>

          {/* CONTENT */}
          <div
            className="space-y-6 text-black/80 leading-8 text-[17px]"
            dangerouslySetInnerHTML={{
              __html: singleBlog.content?.rendered,
            }}
          />
        </div>

        {/* ===== SIDEBAR ===== */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">

            <h3 className="text-xl font-semibold text-black mb-6">
              Recent <span className="text-[#d4af37]">Blogs</span>
            </h3>

            <div className="space-y-4">

              {/* RECENT BLOGS LOADING */}
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
                    bg-white border border-[#d4af37]/20
                    shadow hover:shadow-lg transition
                    ${
                      b.slug === singleBlog.slug
                        ? "ring-2 ring-[#d4af37]"
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

              {!loading && recentBlogs.length === 0 && (
                <p className="text-sm text-black/60">
                  No recent blogs available
                </p>
              )}

            </div>

          </div>
        </aside>

      </div>
    </section>
  );
}
