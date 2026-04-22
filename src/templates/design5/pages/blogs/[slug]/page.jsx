"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useBlogs } from "@/context/blogcontext/BlogContext";
import ContactPopup from "@/templates/design5/components/ContactPopup";
import Breadcrumb from "@/templates/design5/components/Breadcrumb";

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
    listError,
    setPage,
    clearSingleBlog,
  } = useBlogs();

  const [popupOpen, setPopupOpen] = useState(false);
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="w-14 h-14 border-4 border-red-600/30 border-t-red-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-red-600 font-semibold">Loading Blog...</p>
      </div>
    );
  }

  // ERROR
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

        {/* ===== MAIN ===== */}
        <div className="lg:col-span-2">
<div className="py-5">
  <Breadcrumb/>
</div>
          {/* TITLE */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              {singleBlog?.Title}
            </h1>

            <p className="text-sm text-gray-500 mt-3">
              Published on {formatDate(singleBlog?.Date)}
            </p>
          </div>

          {/* HERO */}
          <div className="relative w-full h-[460px] rounded-2xl overflow-hidden mb-8">
            <Image
              src={
                typeof singleBlog?.HeroImg === "string"
                  ? singleBlog?.HeroImg
                  : singleBlog?.HeroImg?.url || "/placeholder.jpg"
              }
              alt={singleBlog?.Title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-6 text-gray-700 text-[17px] leading-relaxed">
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
                    width={900}
                    height={600}
                    unoptimized
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
                      className={`rounded-xl border ${
                        isOpen
                          ? "bg-red-50 border-red-400"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setActiveFAQ(isOpen ? null : i)
                        }
                        className="w-full p-4 flex justify-between"
                      >
                        <span>{faq.Q}</span>
                        <span
                          className={`${
                            isOpen ? "rotate-180 text-red-600" : ""
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

        {/* ===== SIDEBAR ===== */}
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-6">

            <div className="bg-white border border-red-600/20 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-red-600 mb-4 border-b pb-2">
                Recent Blogs
              </h3>

              {listError && (
                <p className="text-red-600 text-sm mb-3">
                  {listError}
                </p>
              )}

              <div className="space-y-4">
                {recentBlogs
                  ?.slice(0, 5)
                  .map((b, i) => (
                    <Link
                      key={b?._id || b?.Slug || i}
                      href={`/blogs/${b?.Slug}`}
                      className="flex gap-3 p-3 rounded-xl hover:bg-red-50"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                        <Image
                          src={b?.HeroImg?.url || "/placeholder.jpg"}
                          alt={b?.Title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">
                          {formatDate(b?.Date)}
                        </p>
                        <h4 className="text-sm font-semibold text-red-600 line-clamp-2">
                          {b?.Title}
                        </h4>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-red-600 text-white rounded-2xl p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">
                Need Property Help?
              </h4>
              <p className="text-sm mb-4">
                Get expert guidance for buying, selling or investing.
              </p>

              <button
                onClick={() => setPopupOpen(true)}
                className="bg-white text-red-600 px-5 py-2 rounded-full font-semibold"
              >
                Contact Us
              </button>
            </div>

          </div>
        </div>

      </div>

      <ContactPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  );
}