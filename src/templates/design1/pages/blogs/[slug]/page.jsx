"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useBlogs } from "@/context/blogcontext/BlogContext";

const formatDate = (date) => {
  if (!date) return "N/A";
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
    clearSingleBlog,
  } = useBlogs();

  const [activeFAQ, setActiveFAQ] = useState(null);

  // ================= LOAD BLOG =================
  useEffect(() => {
    if (slug) {
      clearSingleBlog();
      fetchSingleBlog(slug);
      window.scrollTo(0, 0);
    }
  }, [slug]);

  // ================= LOADER =================
  if (singleLoading || !singleBlog) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <div className="w-14 h-14 border-4 border-[#5E23DC]/20 border-t-[#1e40af] rounded-full animate-spin"></div>
        <p className="mt-4 text-[#1e40af] font-semibold">
          Loading Blog...
        </p>
      </div>
    );
  }

  // ================= ERROR =================
  if (singleError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <p className="text-red-600 text-lg font-semibold">
          {singleError}
        </p>
      </div>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">

        {/* ================= MAIN ================= */}
        <div className="lg:col-span-2">

          <article className="space-y-10">

            {/* HERO */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src={
                  typeof singleBlog?.HeroImg === "string"
                    ? singleBlog?.HeroImg
                    : singleBlog?.HeroImg?.url || "/placeholder.jpg"
                }
                
                alt={singleBlog?.Title}
                width={1200}
                height={700}
                className="w-full h-[260px] md:h-[420px] object-cover"
                unoptimized
              />
            </div>

            {/* TITLE */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {singleBlog?.Title}
              </h1>

              <p className="text-sm text-gray-500 mt-3">
                {formatDate(singleBlog?.Date)}
              </p>
            </div>

            {/* CONTENT */}
            <div className="space-y-8">
              {singleBlog?.Content?.map((section) => (
                <div key={section?._id}>
                  <div className="quill-content">
              <div
                className="
                ql-editor !p-0 text-gray-700 text-[17px] leading-8

                [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mt-6 [&_h1]:mb-3
                [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h2]:mt-5 [&_h2]:mb-2
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mt-4 [&_h3]:mb-2

                [&_p]:mb-4 [&_p]:text-gray-700

                [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:mb-4
                [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:mb-4
                [&_li]:mb-2

                [&_a]:text-[#1e40af] [&_a]:underline

                [&_blockquote]:border-l-4 [&_blockquote]:border-[#1e40af]
                [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-4

                [&_img]:rounded-xl [&_img]:my-6
                "
                dangerouslySetInnerHTML={{ __html: section?.content }}
              />
            </div>

                  {section?.img?.url && (
                    <div className="my-6">
                      <Image
                        src={section.img.url}
                        alt="Blog"
                        width={900}
                        height={600}
                        className="rounded-xl"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ */}
            {singleBlog?.FAQs?.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {singleBlog.FAQs.map((faq, i) => {
                    const isOpen = activeFAQ === i;

                    return (
                      <div
                        key={i}
                        className={`rounded-2xl border transition-all duration-300 
                        ${
                          isOpen
                            ? "bg-[#f3f0ff] border-[#5E23DC]/30 shadow-md"
                            : "bg-white border-gray-200"
                        }`}
                      >
                        <button
                          onClick={() =>
                            setActiveFAQ(isOpen ? null : i)
                          }
                          className="w-full flex justify-between items-center p-5 text-left"
                        >
                          <span className="font-semibold text-gray-800">
                            {faq.Q}
                          </span>

                          <span
                            className={`transition ${
                              isOpen
                                ? "rotate-180 text-[#1e40af]"
                                : "text-gray-400"
                            }`}
                          >
                            ⌄
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 text-gray-600">
                            {faq.A}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </article>

        </div>

        {/* ================= SIDEBAR ================= */}
        <div>
          <div className="sticky top-24">

            <div className="bg-white border border-[#5E23DC]/20 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xl font-bold text-[#5E23DC] mb-4 border-b pb-2">
                Recent Blogs
              </h3>

              <div className="space-y-4">
                {recentBlogs?.slice(0, 5).map((b, i) => (
                  <Link
                    key={i}
                    href={`/blogs/${b?.Slug}`}
                    className="group flex gap-3 p-3 rounded-xl hover:bg-[#5E23DC] transition"
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
                      <p className="text-xs text-gray-500 group-hover:text-white">
                        {formatDate(b?.Date)}
                      </p>

                      <h4 className="text-sm font-semibold text-gray-800 group-hover:text-white line-clamp-2">
                        {b?.Title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}