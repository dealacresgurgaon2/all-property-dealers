"use client";

import Link from "next/link";
import Image from "next/image";
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

export default function FourBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${API_BASE}/api/blogs/getBlogsByFixedDomains/blogs`
        );

        setBlogs(res.data.data || []);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-700 rounded-full animate-spin"></div>
      </div>
    );
  }

  const fourBlogs = blogs.slice(0, 4);

  return (
    <section className="px-4 py-8 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          Latest Blogs
        </h2>

        {fourBlogs.length === 0 && (
          <div className="text-center text-gray-500 py-6">
            No Blogs Available
          </div>
        )}

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

                <h3 className="text-base font-semibold text-purple-700 group-hover:text-purple-900 transition">
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
