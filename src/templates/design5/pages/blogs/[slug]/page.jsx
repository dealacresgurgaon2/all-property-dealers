"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import { useBlogs } from "@/context/blogcontext/BlogContext";
import ContactPopup from "@/templates/design5/components/ContactPopup";

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
    listError,
    setPage,
  } = useBlogs();

  const [blogStack, setBlogStack] = useState([]);
  const [nextLoading, setNextLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

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

  // 🔹 Reset Stack
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
      }
    );

    observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, [blogStack]);

  // 🔹 Loading Screen
  if (loading && blogStack.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="w-14 h-14 border-4 border-red-600/30 border-t-red-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-red-600 font-semibold">Loading Blog...</p>
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

        {/* ================= MAIN STACK ================= */}
        <div className="lg:col-span-2">

          {blogStack.map((blog, index) => (
            <div key={`${blog._id}-${index}`} className="mb-20">

              {index !== 0 && <hr className="mb-12 border-gray-300" />}

              {/* ===== HERO IMAGE ===== */}
              <div className="relative w-full h-[460px] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={blog.heroImg}
                  alt={blog.title?.rendered}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-black/20 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-2xl md:text-4xl font-bold text-white">
                    {blog.title?.rendered}
                  </h1>
                  <p className="text-white/90 mt-2">
                    Published on {formatDate(blog.date)}
                  </p>
                </div>
              </div>

              {/* ===== CONTENT ===== */}
              <div
                className="text-gray-700 leading-relaxed space-y-6 text-[17px]"
                dangerouslySetInnerHTML={{
                  __html: blog.content?.rendered,
                }}
              />
            </div>
          ))}

          {/* 🔥 Infinite Loader */}
          {nextLoading && (
            <div className="space-y-6 mb-20 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-[300px] bg-gray-200 rounded-2xl"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          )}

          {blogStack.length < MAX_BLOGS && (
            <div ref={bottomRef} className="h-20"></div>
          )}
        </div>

        {/* ================= SIDEBAR ================= */}
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-6">

            {/* RECENT BLOGS */}
            <div className="bg-white border border-red-600/20 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-red-600 mb-4 border-b border-red-600/20 pb-2">
                Recent Blogs
              </h3>

              {listError && (
                <p className="text-red-600 text-sm mb-3">
                  {listError}
                </p>
              )}

              <div className="space-y-4">
                {recentBlogs?.map((b) => (
                  <Link
                    key={b._id}
                    href={`/blogs/${b.slug}`}
                    className="flex gap-3 p-3 rounded-xl hover:bg-red-600/5"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={b.heroImg}
                        alt={b.title?.rendered}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        {formatDate(b.date)}
                      </p>
                      <h4 className="text-sm font-semibold text-red-600 line-clamp-2">
                        {b.title?.rendered}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-red-600 text-white rounded-2xl p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">
                Need Property Help?
              </h4>
              <p className="text-sm mb-4">
                Get expert guidance for buying, selling or investing.
              </p>

              <button
                onClick={() => setPopupOpen(true)}
                className="bg-white text-red-600 px-5 py-2 rounded-full font-semibold"
              >
                Contact Us
              </button>
            </div>

          </div>
        </div>

      </div>

      <ContactPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  );
}
