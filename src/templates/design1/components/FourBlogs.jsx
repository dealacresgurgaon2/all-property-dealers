"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../context/blogcontext/BlogContext";
import { useEffect } from "react";

const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function FourBlogs() {
  const { blogs, loading, setDomain } = useBlogs();

  // 👉 Domain detect karke context me set karna
 useEffect(() => {
  if (typeof window !== "undefined") {
    let hostname = window.location.hostname;

    if (hostname === "localhost") {
      hostname = "www.propertydealeringurgaon.com";
    }

    setDomain(hostname);
  }
}, [setDomain]);


  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="w-10 h-10 border-4 border-blue-700/30 border-t-blue-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <section className="px-4 py-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Latest Blogs
          </h2>

          <p className="text-center text-gray-600">
            No blogs available for this domain
          </p>
        </div>
      </section>
    );
  }

  // API se aaye blogs me se sirf 4 show karne hain
  const fourBlogs = blogs.slice(0, 4);

  return (
    <section className="px-4 py-8 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fourBlogs.map((post) => {
            const titleText =
              typeof post.title === "object"
                ? post.title?.rendered
                : post.title;

            return (
              <Link
                key={post._id}
                href={`/blogs/${post.slug}`}
                className="group bg-white border rounded-xl p-3 shadow-sm hover:-translate-y-2 transition-all"
              >
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={post.heroImg}
                    alt={titleText}
                    fill
                    className="object-cover group-hover:scale-110 transition"
                  />
                </div>

                <h3 className="text-base font-semibold text-blue-900 group-hover:text-blue-700 transition">
                  {titleText}
                </h3>

                <p className="text-sm text-blue-600 mt-1">
                  {formatDate(post.date)}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
