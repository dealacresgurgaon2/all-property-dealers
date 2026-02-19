"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
import { useBlogs } from "@/context/blogcontext/BlogContext";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;
const MAX_BLOGS = 8;

const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function SingleBlogPage() {
  const { slug } = useParams();

  const { singleBlog, fetchSingleBlog, recentBlogs, loading, setPage } =
    useBlogs();

  const [blogStack, setBlogStack] = useState([]);
  const [nextLoading, setNextLoading] = useState(false);

  const bottomRef = useRef(null);
  const observerRef = useRef(null);
  const isFetchingRef = useRef(false);

  /* ---------------- FIRST LOAD ---------------- */
  useEffect(() => {
    if (!slug) return;

    fetchSingleBlog(slug);
    setPage(1);
    window.scrollTo(0, 0);
  }, [slug]);

  /* ---------------- RESET STACK ---------------- */
  useEffect(() => {
    if (singleBlog) {
      setBlogStack([singleBlog]);
    }
  }, [singleBlog]);

  /* ---------------- LOAD NEXT BLOG ---------------- */
  const loadNextBlog = useCallback(async () => {
    if (blogStack.length === 0) return;
    if (blogStack.length >= MAX_BLOGS) return;
    if (isFetchingRef.current) return;

    isFetchingRef.current = true;
    setNextLoading(true);

    const lastBlog = blogStack[blogStack.length - 1];

    try {
      const res = await fetch(
        `${API_BASE}/api/blogs/next/${lastBlog.slug}`
      );
      const result = await res.json();

      if (result?.success && result?.data) {
        setBlogStack((prev) => {
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
  }, [blogStack]);

  /* ---------------- OBSERVER ---------------- */
  useEffect(() => {
    if (!bottomRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadNextBlog();
        }
      },
      { rootMargin: "300px" }
    );

    observerRef.current.observe(bottomRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadNextBlog]);

  /* ---------------- FIRST PAGE LOADER ---------------- */
  if (loading && blogStack.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-14 h-14 border-4 border-green-700/30 border-t-green-700 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* MAIN CONTENT */}
        <div className="lg:col-span-2">

          {blogStack.map((blog, index) => (
            <div key={`${blog._id}-${index}`} className="mb-20">

              <div className="mb-6">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                  {blog.title?.rendered}
                </h1>

                <p className="text-sm text-gray-500 mt-3">
                  Published on {formatDate(blog.date)}
                </p>
              </div>

              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-8 bg-gray-100">
                {blog.heroImg && (
                  <Image
                    src={blog.heroImg}
                    alt={blog.title?.rendered}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                )}
              </div>

              <div
                className="text-gray-700 leading-relaxed space-y-6 text-lg"
                dangerouslySetInnerHTML={{
                  __html: blog.content?.rendered,
                }}
              />
            </div>
          ))}

          {nextLoading && (
            <div className="text-center py-10 text-green-700 font-semibold">
              Loading next blog...
            </div>
          )}

          <div ref={bottomRef} className="h-20"></div>
        </div>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h3 className="text-xl font-semibold mb-6 text-black">
              Recent Blogs
            </h3>

            <div className="space-y-4">
              {recentBlogs?.map((b) => (
                <Link
                  key={b._id}
                  href={`/blogs/${b.slug}`}
                  className="flex gap-3 p-3 rounded-xl hover:bg-green-50"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={b.heroImg}
                      alt={b.title?.rendered}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      {formatDate(b.date)}
                    </p>
                    <h4 className="text-sm font-semibold text-green-700 line-clamp-2">
                      {b.title?.rendered}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
}
