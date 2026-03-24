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
    singleLoading,
    singleError,
    setPage,
    clearSingleBlog,
  } = useBlogs();

  const [activeFAQ, setActiveFAQ] = useState(null);

  // LOAD BLOG
  useEffect(() => {
    if (slug) {
      clearSingleBlog();
      fetchSingleBlog(slug);
      setPage(1);
      window.scrollTo(0, 0);
    }
  }, [slug]);

  // LOADER
  if (singleLoading || !singleBlog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-14 h-14 border-4 border-green-700/30 border-t-green-700 rounded-full animate-spin"></div>
      </div>
    );
  }

  // ERROR
  if (singleError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {singleError}
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* MAIN */}
        <div className="lg:col-span-2">

          {/* TITLE */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              {singleBlog?.Title}
            </h1>

            <p className="text-sm text-gray-500 mt-3">
              Published on {formatDate(singleBlog?.Date)}
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8 border border-green-200">
            <Image
              src={
                typeof singleBlog?.HeroImg === "string"
                  ? singleBlog?.HeroImg
                  : singleBlog?.HeroImg?.url || "/placeholder.jpg"
              }
              alt={singleBlog?.Title}
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
            {singleBlog?.Content?.map((section) => (
              <div key={section?._id}>
                <div className="quill-content">
                <div
                  className="ql-editor !p-0 text-gray-800 leading-relaxed
                  [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-gray-900
                  [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900
                  [&_p]:text-gray-700
                  [&_li]:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: section?.content }}
                />
              </div>

                {section?.img?.url && (
                  <Image
                    src={section.img.url}
                    alt="blog"
                    width={800}
                    height={500}
                    className="rounded-xl mt-4"
                  />
                )}
              </div>
            ))}
          </div>

          {/* FAQ */}
          {singleBlog?.FAQs?.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                FAQs
              </h2>

              <div className="space-y-4">
                {singleBlog.FAQs.map((faq, i) => {
                  const isOpen = activeFAQ === i;

                  return (
                    <div
                      key={i}
                      className={`rounded-xl border transition ${
                        isOpen
                          ? "bg-green-50 border-green-500"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setActiveFAQ(isOpen ? null : i)
                        }
                        className="w-full p-4 flex justify-between"
                      >
                        <span className="text-gray-800 font-medium">
                          {faq.Q}
                        </span>

                        <span
                          className={`${
                            isOpen
                              ? "rotate-180 text-green-700"
                              : "text-gray-400"
                          }`}
                        >
                          ⌄
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-gray-600">
                          {faq.A}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">

            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Recent <span className="text-green-700">Blogs</span>
            </h3>

            <div className="space-y-4">
              {recentBlogs
                ?.slice(0, 5)
                .map((b, i) => (
                  <Link
                    key={b?._id || b?.Slug || i}
                    href={`/blogs/${b?.Slug}`}
                    className="flex gap-3 p-3 rounded-xl hover:bg-green-50 transition group"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                      <Image
                        src={b?.HeroImg?.url || "/placeholder.jpg"}
                        alt={b?.Title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 group-hover:text-green-700">
                        {formatDate(b?.Date)}
                      </p>

                      <h4 className="text-sm font-semibold text-gray-800 group-hover:text-green-700 line-clamp-2">
                        {b?.Title}
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