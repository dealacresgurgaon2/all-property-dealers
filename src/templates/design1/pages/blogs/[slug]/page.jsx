"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useBlogs } from "@/context/blogcontext/BlogContext";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;
const MAX_BLOGS = 6;

const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function SingleBlogPage() {
  const { slug } = useParams();

  const { singleBlog, fetchSingleBlog, recentBlogs, loading } =
    useBlogs();

  const [blogStack, setBlogStack] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  const bottomRef = useRef(null);
  const isFetchingRef = useRef(false);

  // ================= FIRST LOAD =================
  useEffect(() => {
    if (!slug) return;

    const load = async () => {
      setPageLoading(true);
      await fetchSingleBlog(slug);
      setPageLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    load();
  }, [slug]);

  // ================= RESET STACK =================
  useEffect(() => {
    if (singleBlog) {
      setBlogStack([singleBlog]);
    }
  }, [singleBlog]);

  // ================= INFINITE SCROLL =================
  useEffect(() => {
    if (!bottomRef.current) return;
    if (blogStack.length === 0) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        if (!entries[0].isIntersecting) return;
        if (isFetchingRef.current) return;
        if (blogStack.length >= MAX_BLOGS) return;

        isFetchingRef.current = true;

        const lastBlog = blogStack[blogStack.length - 1];

        try {
          const res = await fetch(
            `${API_BASE}/api/blogs/next/${lastBlog.slug}`
          );

          const result = await res.json();

          if (result.success && result.data) {
            setBlogStack((prev) => {
              const exists = prev.some(
                (b) => b._id === result.data._id
              );
              if (exists) return prev;

              return [...prev, result.data];
            });

            // URL update without refresh
            window.history.replaceState(
              null,
              "",
              `/blogs/${result.data.slug}`
            );
          }
        } catch (err) {
          console.error("Next fetch error:", err);
        }

        isFetchingRef.current = false;
      },
      {
        rootMargin: "400px",
        threshold: 0,
      }
    );

    observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, [blogStack]);

  // ================= LOADER =================
  if ((loading || pageLoading) && blogStack.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc]">
        <div className="w-14 h-14 border-4 border-[#1e40af]/30 border-t-[#1e40af] rounded-full animate-spin"></div>
        <p className="mt-4 text-[#1e40af] font-semibold">
          Loading Blog...
        </p>
      </div>
    );
  }

  if (!singleBlog) {
    return (
      <div className="py-32 text-center text-xl text-red-600">
        Blog not found
      </div>
    );
  }

  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">

        {/* ================= MAIN STACK ================= */}
        <div className="lg:col-span-2">

          {blogStack.map((blog, index) => (
            <div key={`${blog._id}-${index}`} className="mb-20">

              {/* Divider for next blogs */}
              {index !== 0 && (
                <div className="mb-8">
                  <hr className="border-gray-300" />
                  <p className="text-sm text-gray-500 mt-3">
                    Continue Reading
                  </p>
                </div>
              )}

              {/* HERO IMAGE */}
              <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8">

  <Image
    src={blog.heroImg}
    alt={blog.title?.rendered}
    fill
    priority={index === 0}
    className="object-cover object-left"
  />

</div>


              {/* META */}
              <div className="flex items-center gap-3 mb-4">
                {blog.category && (
                  <span className="bg-[#1e40af] text-white text-xs px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                )}

                <span className="text-sm text-gray-500">
                  {formatDate(blog.date)}
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-3xl md:text-4xl font-bold text-[#0b1f33] leading-tight mb-8">
                {blog.title?.rendered}
              </h1>

              {/* CONTENT */}
              <div
                className="space-y-6 text-gray-700 leading-8 text-[17px]"
                dangerouslySetInnerHTML={{
                  __html: blog.content?.rendered,
                }}
              />
            </div>
          ))}

          {/* SCROLL TRIGGER */}
          {blogStack.length < MAX_BLOGS && (
            <div ref={bottomRef} className="h-20"></div>
          )}

          {blogStack.length >= MAX_BLOGS && (
            <div className="text-center text-gray-500 py-10">
              You have reached the end.
            </div>
          )}

        </div>

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">

            <h3 className="text-xl font-semibold text-[#0b1f33] mb-6">
              Recent Blogs
            </h3>

            <div className="space-y-4">
              {recentBlogs?.map((b) => (
                <Link
                  key={b._id}
                  href={`/blogs/${b.slug}`}
                  className="group flex gap-4 p-3 rounded-xl
                  bg-white border border-[#1e40af]/20
                  shadow-sm hover:shadow-lg transition-all duration-300
                  hover:bg-[#1e40af]"
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
                    <p className="text-xs text-gray-500 group-hover:text-white transition-colors">
                      {formatDate(b.date)}
                    </p>

                    <h4 className="text-sm font-semibold text-[#0b1f33] group-hover:text-white transition-colors line-clamp-2">
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
