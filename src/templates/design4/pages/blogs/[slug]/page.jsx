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
      <div className="min-h-screen flex items-center justify-center relative">

        <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec]" />

        <div className="relative w-14 h-14 border-4 border-[#D02752]/30 border-t-[#D02752] rounded-full animate-spin"></div>
      </div>
    );
  }

  // ERROR
  if (singleError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {singleError}
      </div>
    );
  }

  return (
    <section className="relative py-16 overflow-hidden">

      {/* PREMIUM BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec]" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#D02752]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* MAIN */}
        <div className="lg:col-span-2">

          {/* TITLE */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-[#8A244B]">
              {singleBlog?.Title}
            </h1>

            <p className="text-sm text-gray-500 mt-3">
              Published on {formatDate(singleBlog?.Date)}
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8 border border-[#f3c6d1] shadow-md">
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
              <h2 className="text-2xl font-bold mb-6 text-[#8A244B]">
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
                          ? "bg-[#fde6ec] border-[#D02752]"
                          : "bg-white border-[#f3c6d1]"
                      }`}
                    >
                      <button
                        onClick={() => setActiveFAQ(isOpen ? null : i)}
                        className="w-full p-4 flex justify-between text-gray-800"
                      >
                        {faq.Q}

                        <span className="text-[#D02752] font-bold">
                          {isOpen ? "−" : "+"}
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

            <h3 className="text-xl font-semibold mb-6 text-[#8A244B]">
              Recent <span className="text-[#D02752]">Blogs</span>
            </h3>

            <div className="space-y-4">
              {recentBlogs?.slice(0, 5).map((b, i) => (
                <Link
                  key={b?._id || b?.Slug || i}
                  href={`/blogs/${b?.Slug}`}
                  className="flex gap-3 p-3 rounded-xl hover:bg-[#fde6ec] transition group"
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
                    <p className="text-xs text-gray-500 group-hover:text-[#D02752]">
                      {formatDate(b?.Date)}
                    </p>

                    <h4 className="text-sm font-semibold text-gray-800 group-hover:text-[#D02752] line-clamp-2">
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