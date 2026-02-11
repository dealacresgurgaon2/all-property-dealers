"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useBlogs } from "@/context/blogcontext/BlogContext";
import ContactPopup from "@/templates/design5/components/ContactPopup";

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
    loading,
    singleError,
    listError,
    setPage,
  } = useBlogs();

  // ===== LOCAL LOADING STATE FOR REFRESH =====
  const [pageLoading, setPageLoading] = useState(true);
const [popupOpen, setPopupOpen] = useState(false);
  useEffect(() => {
    if (slug) {
      setPageLoading(true);

      fetchSingleBlog(slug);

      // Recent blogs load karne ke liye
      setPage(1);

      // Artificial small delay for smooth UX
      setTimeout(() => {
        setPageLoading(false);
      }, 800);
    }
  }, [slug]);

  // ===== EXTRA SAFETY FOR RECENT BLOGS =====
  useEffect(() => {
    if (!recentBlogs || recentBlogs.length === 0) {
      setPage(1);
    }
  }, []);

  // ===== MAIN LOADING STATE =====
  if (pageLoading || loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">

          <div className="w-14 h-14 border-4 border-red-600/30 border-t-red-600 rounded-full animate-spin"></div>

          <h2 className="text-lg text-red-600 font-semibold">
            Loading Blog...
          </h2>

          <p className="text-sm text-gray-600">
            Please wait while we fetch the content
          </p>
        </div>
      </div>
    );
  }

  // ===== SINGLE BLOG ERROR =====
  if (singleError) {
    return (
      <div className="py-32 text-center text-xl text-red-700">
        {singleError}
      </div>
    );
  }

  // ===== DATA NOT AVAILABLE BUT NO ERROR =====
  if (!pageLoading && !loading && !singleBlog) {
    return (
      <div className="py-32 text-center text-xl text-red-700">
        Blog not found
      </div>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">

        {/* ===== MAIN BLOG ===== */}
        <div className="lg:col-span-2">

          {/* HERO IMAGE */}
          <div className="relative w-full h-[460px] rounded-2xl overflow-hidden mb-8">
            <Image
              src={singleBlog?.heroImg}
              alt={singleBlog?.title?.rendered}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-black/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                {singleBlog?.title?.rendered}
              </h1>

              <p className="text-white/90 mt-2">
                Published on {formatDate(singleBlog?.date)}
              </p>
            </div>
          </div>

          {/* BLOG CONTENT */}
          <div
            className="text-gray-700 leading-relaxed space-y-6 text-[17px]"
            dangerouslySetInnerHTML={{
              __html: singleBlog?.content?.rendered,
            }}
          />
        </div>

        {/* ===== SIDEBAR ===== */}
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-6">

            {/* ABOUT BOX */}
            {/* <div className="bg-white border border-red-600/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-red-600 mb-3">
                About This Blog
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Stay updated with the latest real estate insights, investment tips, and property trends.
              </p>
            </div> */}

            {/* ===== RECENT BLOGS SECTION ===== */}
            <div className="bg-white border border-red-600/20 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-red-600 mb-4 border-b border-red-600/20 pb-2">
                Recent Blogs
              </h3>

              {listError && (
                <p className="text-red-600 text-sm mb-3">
                  {listError}
                </p>
              )}

              <div className="space-y-4">

                {/* ===== RECENT BLOGS LOADER ===== */}
                {loading && (
                  <p className="text-sm text-gray-500">
                    Loading recent blogs...
                  </p>
                )}

                {!loading && recentBlogs && recentBlogs.length > 0 ? (
                  recentBlogs.map((b) => (
                    <Link
                      key={b._id}
                      href={`/blogs/${b.slug}`}
                      className="flex gap-3 p-3 rounded-xl hover:bg-red-600/5"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={b.heroImg}
                          alt={b.title?.rendered}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">
                          {formatDate(b.date)}
                        </p>

                        <h4 className="text-sm font-semibold text-red-600 line-clamp-2">
                          {b.title?.rendered}
                        </h4>
                      </div>
                    </Link>
                  ))
                ) : (
                  !loading && (
                    <p className="text-sm text-gray-500">
                      No recent blogs available
                    </p>
                  )
                )}

              </div>
            </div>

            {/* CTA BOX */}
            <div className="bg-red-600 text-white rounded-2xl p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">
                Need Property Help?
              </h4>
              <p className="text-sm mb-4">
                Get expert guidance for buying, selling or investing.
              </p>

              <button
                onClick={() => setPopupOpen(true)}
                className="inline-block bg-white text-red-600 px-5 py-2 rounded-full font-semibold cursor-pointer"
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
