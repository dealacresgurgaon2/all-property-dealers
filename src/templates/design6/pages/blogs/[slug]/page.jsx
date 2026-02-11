"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useBlogs } from "@/context/blogcontext/BlogContext";

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

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      setPageLoading(true);

      fetchSingleBlog(slug);

      setPage(1);

      setTimeout(() => {
        setPageLoading(false);
      }, 800);
    }
  }, [slug]);

  useEffect(() => {
    if (!recentBlogs || recentBlogs.length === 0) {
      setPage(1);
    }
  }, []);

  const blogCount = recentBlogs ? recentBlogs.length : 0;

  if (pageLoading || loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 border-4 border-green-700/30 border-t-green-700 rounded-full animate-spin"></div>

          <h2 className="text-lg text-green-700 font-semibold">
            Loading Blog...
          </h2>

          <p className="text-sm text-gray-600">
            Please wait while we fetch the content
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* MAIN BLOG CONTENT */}
          <div className="lg:col-span-2">
            {/* HERO IMAGE */}
            {singleBlog?.heroImg && (
              <div className="relative w-full h-[420px] mb-8 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={singleBlog.heroImg}
                  alt={singleBlog?.title?.rendered || "blog image"}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            )}

            {/* META INFO */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-4 py-1 rounded-full">
                {singleBlog?.title?.rendered}
              </span>

              <span className="text-sm text-black/60">
                Published on {formatDate(singleBlog?.date)}
              </span>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/40 to-transparent mb-8" />

            {/* BLOG CONTENT */}
            <div
              className="space-y-6 text-black/80 leading-8 text-lg"
              dangerouslySetInnerHTML={{
                __html: singleBlog?.content?.rendered || "",
              }}
            />

            {/* BOTTOM CTA */}
            <div className="mt-12 p-8 bg-white rounded-2xl border border-green-200 text-center">
              <h4 className="text-xl font-semibold mb-2 text-black">
                Need Expert Property Advice?
              </h4>

              <p className="text-black/70 mb-4">
                Talk to our verified property consultants and get the best deals.
              </p>

              <Link
                href="/"
                className="inline-block px-6 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Go to Home Page
              </Link>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold text-black mb-6">
                Recent Blogs ({blogCount})
              </h3>

              <div className="space-y-4">
                {recentBlogs && recentBlogs.length > 0 ? (
                  recentBlogs.map((b) => (
                    <Link
                      key={b._id}
                      href={`/blogs/${b.slug}`}
                      className="flex gap-3 p-3 rounded-xl hover:bg-[#5E23DC]/5"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={b.heroImg}
                          alt={b.title?.rendered || "blog image"}
                          fill
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
                  ))
                ) : (
                  <p className="text-sm text-gray-500">
                    No recent blogs available
                  </p>
                )}
              </div>

              {/* SIDEBAR HELP BOX */}
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
                <h4 className="text-lg font-semibold text-black mb-2">
                  Have Questions?
                </h4>

                <p className="text-sm text-black/70 mb-4">
                  Get free consultation from our real estate experts.
                </p>

                <Link
                  href="/"
                  className="block text-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
