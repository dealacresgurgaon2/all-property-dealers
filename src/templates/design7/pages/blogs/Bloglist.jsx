"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
// 📅 Date formatter
const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList({ page, itemsPerPage, setTotalBlogs }) {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentPage = page || 1;
  const perPage = itemsPerPage || 30;   // 🔥 30 BLOGS PER PAGE

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${API_BASE}/api/blogs/getBlogsByFixedDomains/blogs`
        );

        setBlogs(res.data.data);

        // 🔥 Pagination ke liye total blogs set
        setTotalBlogs(res.data.data.length);

        setLoading(false);

      } catch (error) {
        console.log("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const startIndex = (currentPage - 1) * perPage;

  const paginatedBlogs = blogs.slice(startIndex, startIndex + perPage);

  return (
    <section className="bg-slate-50 py-6">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-5 py-2 rounded-full mb-4 border border-indigo-200">
            Knowledge Hub
          </span>

          <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-3">
            Latest Real Estate Insights
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Tips, guides and expert articles to help you make smarter real estate decisions.
          </p>
        </div>

        {/* ===== PROFESSIONAL LOADING STATE ===== */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-indigo-100 shadow-lg">

            <div className="relative mb-6">
              <div className="w-16 h-16 border-4 border-indigo-200 rounded-full"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            </div>

            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              Loading Blogs...
            </h3>

            <p className="text-gray-500 text-sm max-w-sm text-center">
              Please wait while we fetch the latest real estate insights for you
            </p>

            <div className="w-48 h-1 bg-indigo-100 rounded-full overflow-hidden mt-4">
              <div className="h-full bg-indigo-600 w-24 animate-pulse"></div>
            </div>

          </div>
        )}

        {/* ===== NO DATA STATE ===== */}
        {!loading && blogs.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-indigo-100 shadow">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              No Blogs Found
            </h3>
            <p className="text-gray-500">
              Currently there are no blogs available to display.
            </p>
          </div>
        )}

        {/* ===== BLOG GRID ===== */}
        {!loading && blogs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {paginatedBlogs.map((post) => (
              <Link
                key={post._id}
                href={`/blogs/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-indigo-200 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >

                <div className="relative w-full h-52 overflow-hidden">

                  <Image
                    src={post.heroImg}
                    alt={post.title?.rendered}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <span className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.Category}
                  </span>

                </div>

                <div className="p-6 flex flex-col flex-grow">

                  <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-3 line-clamp-2 group-hover:text-indigo-700 transition">
                    {post.title?.rendered}
                  </h3>

                  <p className="text-sm text-gray-500 mb-5">
                    Published on {formatDate(post.date)}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-indigo-700 font-medium text-sm">
                      Read Full Article
                    </span>

                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition">
                      →
                    </span>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}
