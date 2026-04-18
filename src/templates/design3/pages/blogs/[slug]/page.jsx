"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useBlogs } from "@/context/blogcontext/BlogContext";

const formatDate = (date) => {
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
    clearSingleBlog, // 👈 IMPORTANT
  } = useBlogs();

  const [activeFAQ, setActiveFAQ] = useState(null);

  // 🔥 LOAD BLOG (FIXED)
  useEffect(() => {
    if (slug) {
      clearSingleBlog(); // old remove
      fetchSingleBlog(slug);
      setPage(1);
      window.scrollTo(0, 0);
    }
  }, [slug]);

  // 🔥 LOADER
  if (singleLoading || !singleBlog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-16 h-16 border-4 border-[#5E23DC]/20 border-t-[#5E23DC] rounded-full animate-spin"></div>
      </div>
    );
  }

  // 🔥 ERROR
  if (singleError) {
    return (
      <div className="py-32 text-center text-xl text-red-700">
        {singleError}
      </div>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">

        {/* MAIN */}
        <div className="lg:col-span-2">

          <article className="space-y-10 mb-20">

            {/* HERO */}
            <div>
              <div className="w-full h-[260px] md:h-[480px] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={
                    typeof singleBlog?.HeroImg === "string"
                      ? singleBlog?.HeroImg
                      : singleBlog?.HeroImg?.url || "/placeholder.jpg"
                  }
                  alt={singleBlog?.Title}
                  width={1200}
                  height={800}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
                  {singleBlog?.Title}
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                  {new Date(singleBlog?.Date).toDateString()}
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-3xl mx-auto space-y-8">

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
                        unoptimized
                        className="rounded-xl"
                      />
                    </div>
                  )}
                </div>
              ))}

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
                          ${isOpen 
                            ? "bg-gradient-to-r from-[#f3f0ff] to-[#f8f6ff] border-[#5E23DC]/30 shadow-md" 
                            : "bg-[#faf9ff] border-gray-200 hover:shadow-sm"
                          }`}
                        >
                          <button
                            onClick={() => setActiveFAQ(isOpen ? null : i)}
                            className="w-full flex justify-between items-center p-5 text-left"
                          >
                            <span className="font-semibold text-gray-800">
                              {faq.Q}
                            </span>

                            <span
                              className={`text-lg font-bold transition-all duration-300 
                              ${isOpen 
                                ? "rotate-180 text-[#5E23DC]" 
                                : "text-gray-400"
                              }`}
                            >
                              ⌄
                            </span>
                          </button>

                          <div
                            className={`px-5 transition-all duration-300 overflow-hidden ${
                              isOpen
                                ? "max-h-[300px] pb-5 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <p className="text-gray-600 leading-relaxed">
                              {faq.A}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              )}

            </div>

          </article>

        </div>

        {/* SIDEBAR */}
        <div>
          <div className="sticky top-24">

            <div className="bg-white border border-[#5E23DC]/20 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-[#5E23DC] mb-4 border-b pb-2">
                Recent Blogs
              </h3>

              <div className="space-y-4">
                {[...(recentBlogs || [])]
                  .sort((a, b) => new Date(b?.Date) - new Date(a?.Date))
                  .slice(0, 5)
                  .map((b, i) => (
                    <Link
                      key={i}
                      href={`/blogs/${b?.Slug}`}
                      className="group flex gap-3 p-3 border rounded-xl hover:bg-[#5E23DC]"
                    >
                      <div className="relative w-20 h-20 overflow-hidden rounded-lg">
                        <Image
                          src={b?.HeroImg?.url || "/placeholder.jpg"}
                          alt={b?.Title}
                          fill
                          unoptimized
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