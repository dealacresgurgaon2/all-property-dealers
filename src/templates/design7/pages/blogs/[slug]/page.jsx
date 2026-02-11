"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
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
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${API_BASE}/api/blogs/getBlogsByFixedDomains/blogs`
        );

        const allBlogs = res.data.data;

        setBlogs(allBlogs);

        // 🔥 SLUG MATCH EXACTLY BLOG LIST KE HISAB SE
        const single = allBlogs.find((b) => b.slug === slug);

        setBlog(single);
        setLoading(false);

      } catch (error) {
        console.log("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [slug]);

  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      
      <div className="flex flex-col items-center gap-6 p-10 bg-white shadow-2xl rounded-3xl border border-indigo-100">

        {/* Animated Spinner */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-indigo-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>

        <h2 className="text-xl font-semibold text-indigo-700">
          Loading Blog...
        </h2>

        <p className="text-gray-500 text-sm text-center max-w-xs">
          Please wait while we prepare the content for you
        </p>

        {/* Subtle Progress Bar Effect */}
        <div className="w-40 h-1 bg-indigo-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-600 w-20 animate-pulse"></div>
        </div>

      </div>
    </div>
  );
}


  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* MAIN BLOG CONTENT */}
          <div className="lg:col-span-2">

            {/* HERO IMAGE */}
            <div className="relative w-full h-[420px] mb-8 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={blog.heroImg || "/images/download.jpeg"}
                alt={blog.title?.rendered || "blog image"}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* META INFO */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">

              <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-4 py-1 rounded-full border border-indigo-200">
                {blog.Category}
              </span>

              <span className="text-sm text-gray-500">
                Published on {formatDate(blog.date)}
              </span>

            </div>

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
              {blog.title?.rendered}
            </h1>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent mb-8" />

            {/* BLOG CONTENT */}
            <div
              className="space-y-6 text-gray-700 leading-8 text-lg"
              dangerouslySetInnerHTML={{
                __html: blog.content?.rendered || "",
              }}
            />

            {/* CTA */}
            <div className="mt-12 p-8 bg-white rounded-2xl border border-indigo-200 text-center">

              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                Need Expert Property Advice?
              </h4>

              <p className="text-gray-600 mb-4">
                Talk to our verified property consultants and get the best deals.
              </p>

              <Link
                href="/"
                className="inline-block px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Go to Home Page
              </Link>

            </div>

          </div>

          {/* SIDEBAR */}
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
                    className={`flex gap-4 p-3 rounded-xl bg-white border border-indigo-200 hover:shadow-lg transition ${
                      b.slug === blog.slug ? "ring-2 ring-indigo-500" : ""
                    }`}
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
