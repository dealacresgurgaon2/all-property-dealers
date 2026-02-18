"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
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

  const {
    singleBlog,
    fetchSingleBlog,
    recentBlogs,
    loading,
    setPage,
  } = useBlogs();

  const [blogStack, setBlogStack] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [nextLoading, setNextLoading] = useState(false);

  const bottomRef = useRef(null);
  const isFetchingRef = useRef(false);

  // 🔹 First Load
  useEffect(() => {
    if (!slug) return;

    setPageLoading(true);
    fetchSingleBlog(slug);
    setPage(1);
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [slug]);

  // 🔹 Reset stack when new blog loads
  useEffect(() => {
    if (singleBlog) {
      setBlogStack([singleBlog]);
    }
  }, [singleBlog]);

  // 🔥 API BASED Infinite Scroll (Stable)
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

  if (pageLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-14 h-14 border-4 border-green-700/30 border-t-green-700 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ================= MAIN STACK ================= */}
          <div className="lg:col-span-2">

            {blogStack.map((blog, index) => (
              <div key={`${blog._id}-${index}`} className="mb-20">

                {/* Title + Date */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <h1 className="bg-green-100 text-green-700 text-2xl font-semibold px-4 py-1 rounded-full">
                    {blog.title?.rendered}
                  </h1>
                  <span className="text-sm text-black/60">
                    Published on {formatDate(blog.date)}
                  </span>
                </div>

                {/* Image Safe */}
                <div className="relative w-full h-[420px] mb-8 rounded-3xl overflow-hidden shadow-xl bg-gray-200">
                  {blog.heroImg && blog.heroImg.trim() !== "" ? (
                    <Image
                      src={blog.heroImg}
                      alt={blog.title?.rendered || "blog image"}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      No Image Available
                    </div>
                  )}
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/40 to-transparent mb-8" />

                <div
                  className="space-y-6 text-black/80 leading-8 text-lg"
                  dangerouslySetInnerHTML={{
                    __html: blog.content?.rendered || "",
                  }}
                />

              </div>
            ))}

            {nextLoading && (
              <div className="text-center py-10 text-green-700 font-semibold">
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
              <h3 className="text-xl font-semibold text-black mb-6">
                Recent Blogs ({recentBlogs?.length || 0})
              </h3>

              <div className="space-y-4">
                {recentBlogs?.map((b) => (
                  <Link
                    key={b._id}
                    href={`/blogs/${b.slug}`}
                    className="flex gap-3 p-3 rounded-xl hover:bg-green-50"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                      {b.heroImg && b.heroImg.trim() !== "" ? (
                        <Image
                          src={b.heroImg}
                          alt={b.title?.rendered || "blog image"}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                          No Image
                        </div>
                      )}
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
      </div>
    </section>
  );
}
