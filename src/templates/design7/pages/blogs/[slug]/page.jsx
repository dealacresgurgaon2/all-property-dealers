"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

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

  const [blogs, setBlogs] = useState([]);
  const [blogStack, setBlogStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextLoading, setNextLoading] = useState(false);

  const bottomRef = useRef(null);
  const isFetchingRef = useRef(false);

  // 🔹 Fetch All Blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${API_BASE}/api/blogs/getBlogsByFixedDomains/blogs`
        );

        const allBlogs = res.data.data;
        setBlogs(allBlogs);

        const firstBlog = allBlogs.find((b) => b.slug === slug);
        if (firstBlog) {
          setBlogStack([firstBlog]);
        }

        setLoading(false);
      } catch (error) {
        console.log("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [slug]);

  // 🔥 Infinite Scroll
  useEffect(() => {
    if (!bottomRef.current) return;
    if (blogStack.length === 0) return;
    if (blogStack.length >= MAX_BLOGS) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        if (isFetchingRef.current) return;

        isFetchingRef.current = true;
        setNextLoading(true);

        const lastBlog = blogStack[blogStack.length - 1];
        const currentIndex = blogs.findIndex(
          (b) => b.slug === lastBlog.slug
        );

        const nextBlog = blogs[currentIndex + 1];

        if (nextBlog) {
          setBlogStack((prev) => [...prev, nextBlog]);

          window.history.replaceState(
            null,
            "",
            `/blogs/${nextBlog.slug}`
          );
        }

        setNextLoading(false);
        isFetchingRef.current = false;
      },
      { rootMargin: "300px" }
    );

    observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, [blogStack, blogs]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="flex flex-col items-center gap-6 p-10 bg-white shadow-2xl rounded-3xl border border-indigo-100">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-indigo-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-xl font-semibold text-indigo-700">
            Loading Blog...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ================= MAIN STACK ================= */}
          <div className="lg:col-span-2">

            {blogStack.map((blog, index) => (
              <div key={`${blog._id}-${index}`} className="mb-10">

                {/* 🔥 Simple Border Between Blogs */}
                {index !== 0 && (
                  <div className="mb-10">
                    <div className="border-t border-2 border-gray-300"></div>
                  </div>
                )}

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-3">
                  {blog.title?.rendered}
                </h1>

                {/* Date */}
                <span className="text-sm text-gray-500">
                  Published on {formatDate(blog.date)}
                </span>

                {/* HERO IMAGE */}
                <div className="relative w-full h-[420px] mt-8 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={blog.heroImg}
                    alt={blog.title?.rendered}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div
                  className="space-y-6 text-gray-700 leading-8 text-lg mt-8"
                  dangerouslySetInnerHTML={{
                    __html: blog.content?.rendered || "",
                  }}
                />

              </div>
            ))}

            {/* Loader */}
            {nextLoading && (
              <div className="text-center py-10 text-indigo-600 font-semibold">
                Loading next blog...
              </div>
            )}

            {blogStack.length < MAX_BLOGS && (
              <div ref={bottomRef} className="h-20"></div>
            )}

          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Recent Blogs
              </h3>

              <div className="space-y-4">
                {blogs.slice(0, 5).map((b) => (
                  <Link
                    key={b._id}
                    href={`/blogs/${b.slug}`}
                    className="flex gap-4 p-3 rounded-xl bg-white border border-indigo-200 hover:shadow-lg transition"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={b.heroImg || "/images/download.jpeg"}
                        alt={b.title?.rendered}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        {formatDate(b.date)}
                      </p>
                      <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 hover:text-indigo-700 transition">
                        {b.title?.rendered}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
