"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

import { useBlogs } from "@/context/blogcontext/BlogContext";

const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function SingleBlogPage() {
  const { slug } = useParams();

  const { singleBlog, fetchSingleBlog, recentBlogs, loading } = useBlogs();

  useEffect(() => {
    if (slug) {
      fetchSingleBlog(slug);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="py-32 text-center text-xl text-[#422c18] font-semibold">
        Loading Blog...
      </div>
    );
  }

  if (!singleBlog) {
    return (
      <div className="py-32 text-center text-xl text-red-700">
        Blog not found
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-[#f2e8e1] to-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">

        {/* ===== MAIN BLOG ===== */}
        <div className="lg:col-span-2">

          {/* HERO IMAGE */}
          <div className="relative w-full h-[460px] rounded-2xl overflow-hidden mb-8">
            <Image
              src={singleBlog.heroImg}
              alt={singleBlog.title?.rendered}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                {singleBlog.title?.rendered}
              </h1>

              <p className="text-white/90 mt-2">
                Published on {formatDate(singleBlog.date)}
              </p>
            </div>
          </div>

          {/* BLOG CONTENT */}
          <div
            className="
              text-[#5a3c26]
              leading-relaxed
              space-y-6
              text-[17px]

              [&_img]:block
              [&_img]:mx-auto
              [&_img]:my-6
              [&_img]:rounded-xl
              [&_img]:max-w-full

              [&_figure]:text-center
              [&_figure]:my-6

              [&_h2]:font-bold
              [&_h2]:text-xl
              [&_h2]:mt-6
              [&_h2]:mb-3

              [&_h3]:font-bold
              [&_h3]:mt-5
              [&_h3]:mb-2

              [&_p]:mb-4
            "
            dangerouslySetInnerHTML={{
              __html: singleBlog.content?.rendered,
            }}
          />
        </div>

        {/* ===== SIDEBAR ===== */}
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-6">

            {/* ABOUT BOX */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-bold text-[#422c18] mb-3">
                About This Blog
              </h3>
              <p className="text-sm text-[#7a5c42] leading-relaxed">
                Stay updated with the latest real estate insights, investment tips, and property trends.
              </p>
            </div>

            {/* RECENT BLOGS */}
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-xl font-bold text-[#422c18] mb-4 border-b pb-2">
                Recent Blogs
              </h3>

              <div className="space-y-4">
                {recentBlogs.map((b) => (
                  <Link
                    key={b._id}
                    href={`/blogs/${b.slug}`}
                    className="
                      flex gap-3
                      p-3
                      rounded-xl
                      hover:bg-[#f2e8e1]
                      transition-all
                      duration-200
                      group
                    "
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={b.heroImg}
                        alt={b.title?.rendered}
                        fill
                        className="object-cover group-hover:scale-105 transition"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-[#7a5c42]">
                        {formatDate(b.date)}
                      </p>

                      <h4 className="text-sm font-semibold text-[#422c18] line-clamp-2">
                        {b.title?.rendered}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA BOX */}
            <div className="bg-[#422c18] text-white rounded-2xl p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">
                Need Property Help?
              </h4>
              <p className="text-sm mb-4">
                Get expert guidance for buying, selling or investing.
              </p>

              <Link
                href="/"
                className="
                  inline-block
                  bg-white
                  text-[#422c18]
                  px-5 py-2
                  rounded-full
                  font-semibold
                  hover:bg-[#f2e8e1]
                  transition
                "
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
