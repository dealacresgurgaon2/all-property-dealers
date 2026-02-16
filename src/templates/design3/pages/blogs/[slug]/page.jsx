
"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useBlogs } from "@/context/blogcontext/BlogContext";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;
const MAX_BLOGS = 8;

const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function SingleBlogPage() {
  const { slug } = useParams();

  const {
    singleBlog,
    fetchSingleBlog,
    recentBlogs,
    loading,
    singleError,
    setPage,
  } = useBlogs();

  const [blogStack, setBlogStack] = useState([]);
  const [nextLoading, setNextLoading] = useState(false);
  const bottomRef = useRef(null);
  const isFetchingRef = useRef(false);

  // 🔹 First Load
  useEffect(() => {
    if (slug) {
      fetchSingleBlog(slug);
      setPage(1);
      window.scrollTo(0, 0);
    }
  }, [slug]);

  // 🔹 Reset stack
  useEffect(() => {
    if (singleBlog) {
      setBlogStack([singleBlog]);
    }
  }, [singleBlog]);

  // 🔥 Infinite Scroll
  useEffect(() => {
    if (!bottomRef.current) return;
    if (blogStack.length === 0) return;
    if (blogStack.length >= MAX_BLOGS) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        if (!entries[0].isIntersecting) return;
        if (isFetchingRef.current) return;

        isFetchingRef.current = true;
        setNextLoading(true);

        const lastBlog = blogStack[blogStack.length - 1];

        try {
          const res = await fetch(
            `${API_BASE}/api/blogs/next/${lastBlog.slug}`
          );
          const result = await res.json();

          if (result.success && result.data) {
            setBlogStack((prev) => {
              if (prev.length >= MAX_BLOGS) return prev;

              const exists = prev.some(
                (b) => b._id === result.data._id
              );
              if (exists) return prev;

              return [...prev, result.data];
            });

            window.history.replaceState(
              null,
              "",
              `/blogs/${result.data.slug}`
            );
          }
        } catch (err) {
          console.error("Next fetch error:", err);
        }

        setNextLoading(false);
        isFetchingRef.current = false;
      },
      {
        rootMargin: "300px",
        threshold: 0,
      }
    );

    observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, [blogStack]);

  // 🔹 Full Page First Loading
  if (loading && blogStack.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-[#5E23DC]/20 border-t-[#5E23DC] rounded-full animate-spin"></div>
          <p className="text-[#5E23DC] font-semibold animate-pulse">
            Loading Blog...
          </p>
        </div>
      </div>
    );
  }

  if (singleError) {
    return (
      <div className="py-32 text-center text-xl text-red-700">
        {singleError}
      </div>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">

        {/* MAIN STACK */}
        <div className="lg:col-span-2">

          {blogStack.map((blog, index) => (
            <div key={`${blog._id}-${index}`} className="mb-20">

              {index !== 0 && (
                <div className="mb-8">
                  <hr className="border-gray-300" />
                </div>
              )}

              <div className="mb-6">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {blog.title?.rendered}
                </h1>

                <p className="text-sm text-gray-500 mt-3">
                  Published on {formatDate(blog.date)}
                </p>
              </div>

              {/* IMAGE */}
              <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8 bg-gray-100 ">
                <Image
                  src={blog.heroImg}
                  alt={blog.title?.rendered}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                />
              </div>

              <div
                className="text-gray-700 leading-relaxed space-y-6 text-[17px]"
                dangerouslySetInnerHTML={{
                  __html: blog.content?.rendered,
                }}
              />
            </div>
          ))}

          {/* 🔥 Infinite Scroll Skeleton Loader */}
          {nextLoading && (
            <div className="space-y-6 mb-20 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-[300px] bg-gray-200 rounded-2xl"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          )}

          {blogStack.length < MAX_BLOGS && (
            <div ref={bottomRef} className="h-20"></div>
          )}

        </div>

        {/* SIDEBAR */}
        <div>
          <div className="sticky top-24 space-y-6">

            <div className="bg-white border border-[#5E23DC]/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#5E23DC] mb-3">
                About This Blog
              </h3>
              <p className="text-sm text-gray-600">
                Stay updated with real estate insights.
              </p>
            </div>

            <div className="bg-white border border-[#5E23DC]/20 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-[#5E23DC] mb-4 border-b pb-2">
                Recent Blogs
              </h3>

              <div className="space-y-4">
                {recentBlogs?.map((b) => (
                  <Link
                    key={b._id}
                    href={`/blogs/${b.slug}`}
                    className="group flex gap-3 p-3 border border-[#5E23DC]/20 rounded-xl transition-all duration-300 hover:bg-[#5E23DC]"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                      <Image
                        src={b.heroImg}
                        alt={b.title?.rendered}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 group-hover:text-white transition-colors">
                        {formatDate(b.date)}
                      </p>
                      <h4 className="text-sm font-semibold text-[#5E23DC] group-hover:text-white transition-colors line-clamp-2">
                        {b.title?.rendered}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
