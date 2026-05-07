// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// import { useBlogs } from "@/context/blogcontext/BlogContext";

// const formatDate = (date) => {
//   const d = new Date(date);
//   return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
//     .toString()
//     .padStart(2, "0")}-${d.getFullYear()}`;
// };

// export default function SingleBlogPage() {
//   const { slug } = useParams();

//   const { singleBlog, fetchSingleBlog, recentBlogs, loading } = useBlogs();

//   // ===== LOCAL LOADING FOR REFRESH =====
//   const [pageLoading, setPageLoading] = useState(true);

//   useEffect(() => {
//     if (slug) {
//       setPageLoading(true);

//       fetchSingleBlog(slug);

//       // Smooth loader experience
//       setTimeout(() => {
//         setPageLoading(false);
//       }, 200);
//     }
//   }, [slug]);

//   // ===== SHOW LOADER ON REFRESH OR API CALL =====
//   if (loading || pageLoading) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf6f3]">

//         <div className="flex flex-col items-center gap-4">

//           <div className="w-14 h-14 border-4 border-[#d4c2b5] border-t-[#422c18] rounded-full animate-spin"></div>

//           <h2 className="text-lg text-[#422c18] font-semibold">
//             Loading Blog...
//           </h2>

//           <p className="text-sm text-[#7a5c42]">
//             Please wait while we fetch the content
//           </p>

//         </div>

//       </div>
//     );
//   }

//   if (!singleBlog) {
//     return (
//       <div className="py-32 text-center text-xl text-red-700">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <section className="bg-[#fafafa] py-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">

//         {/* ===== MAIN BLOG ===== */}
//         <div className="lg:col-span-2">

//           {/* HERO IMAGE */}
//           <div className="relative w-full h-[440px] mb-10 rounded-3xl overflow-hidden shadow-2xl">
//             <Image
//               src={singleBlog.heroImg}
//               alt={singleBlog.title?.rendered}
//               fill
//               priority
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-black/10" />
//           </div>

//           {/* META */}
//           <div className="flex flex-wrap items-center gap-3 mb-4">
//             <span className="bg-[#d4af37]/20 text-[#b8964a] text-xs font-semibold px-4 py-1 rounded-full">
//               Blog
//             </span>

//             <span className="text-sm text-black/50">
//               {formatDate(singleBlog.date)}
//             </span>
//           </div>

//           {/* TITLE */}
//           <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-8">
//             {singleBlog.title?.rendered}
//           </h1>

//           {/* CONTENT */}
//           <div
//             className="space-y-6 text-black/80 leading-8 text-[17px]"
//             dangerouslySetInnerHTML={{
//               __html: singleBlog.content?.rendered,
//             }}
//           />
//         </div>

//         {/* ===== SIDEBAR ===== */}
//         <aside className="hidden lg:block">
//           <div className="sticky top-28">

//             <h3 className="text-xl font-semibold text-black mb-6">
//               Recent <span className="text-[#d4af37]">Blogs</span>
//             </h3>

//             <div className="space-y-4">

//               {/* RECENT BLOGS LOADING */}
//               {loading && (
//                 <p className="text-sm text-black/60">
//                   Loading recent blogs...
//                 </p>
//               )}

//               {!loading &&
//                 recentBlogs &&
//                 recentBlogs.length > 0 &&
//                 recentBlogs.map((b) => (
//                   <Link
//                     key={b._id}
//                     href={`/blogs/${b.slug}`}
//                     className={`flex gap-4 p-3 rounded-xl
//                     bg-white border border-[#d4af37]/20
//                     shadow hover:shadow-lg transition
//                     ${
//                       b.slug === singleBlog.slug
//                         ? "ring-2 ring-[#d4af37]"
//                         : ""
//                     }`}
//                   >
//                     <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
//                       <Image
//                         src={b.heroImg}
//                         alt={b.title?.rendered}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     <div>
//                       <p className="text-xs text-black/50 mb-1">
//                         {formatDate(b.date)}
//                       </p>

//                       <h4 className="text-sm font-semibold text-black line-clamp-2">
//                         {b.title?.rendered}
//                       </h4>
//                     </div>
//                   </Link>
//                 ))}

//               {!loading && recentBlogs.length === 0 && (
//                 <p className="text-sm text-black/60">
//                   No recent blogs available
//                 </p>
//               )}

//             </div>

//           </div>
//         </aside>

//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useBlogs } from "@/context/blogcontext/BlogContext";
import Breadcrumb from "@/templates/design1/components/Breadcrumb";

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

  useEffect(() => {
    if (slug) {
      clearSingleBlog();
      fetchSingleBlog(slug);
      window.scrollTo(0, 0);
    }
  }, [slug]);

  // LOADER
  if (singleLoading || !singleBlog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf6f3]">
        <div className="w-14 h-14 border-4 border-[#d4af37]/30 border-t-[#d4af37] rounded-full animate-spin"></div>
        <p className="mt-4 text-[#422c18] font-semibold">
          Loading Blog...
        </p>
      </div>
    );
  }

  // ERROR
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
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">

        {/* MAIN */}
        <div className="lg:col-span-2">
<div className="py-5">
  <Breadcrumb/>
</div>
          <article className="space-y-10">

            {/* TITLE */}
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-black leading-tight mt-5">
                {singleBlog?.Title}
              </h1>

              <p className="text-sm text-black/60 mt-3">
                Published on {formatDate(singleBlog?.Date)}
              </p>
            </div>
            {/* HERO */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#d4af37]/20">
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


            {/* CONTENT */}
            <div className="space-y-8 text-black/80">
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

                [&_a]:text-[#d4af37] [&_a]:underline

                [&_blockquote]:border-l-4 [&_blockquote]:border-[#d4af37]
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
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black">
                  FAQs
                </h2>

                <div className="space-y-4">
                  {singleBlog.FAQs.map((faq, i) => {
                    const isOpen = activeFAQ === i;

                    return (
                      <div
                        key={i}
                        className={`rounded-2xl border transition-all 
                        ${
                          isOpen
                            ? "bg-[#fff8e6] border-[#d4af37] shadow"
                            : "bg-white border-gray-200"
                        }`}
                      >
                        <button
                          onClick={() =>
                            setActiveFAQ(isOpen ? null : i)
                          }
                          className="w-full flex justify-between items-center p-5"
                        >
                          <span className="font-semibold text-black">
                            {faq.Q}
                          </span>

                          <span
                            className={`transition ${
                              isOpen
                                ? "rotate-180 text-[#d4af37]"
                                : "text-gray-400"
                            }`}
                          >
                            ⌄
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 text-black/70">
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

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">

            <div className="bg-white border border-[#d4af37]/30 rounded-2xl p-5 shadow-md">
              <h2 className="text-xl font-bold text-black mb-4 border-b pb-2">
                Recent <span className="text-[#d4af37]">Blogs</span>
              </h2>

              <div className="space-y-4">
                {recentBlogs
                  ?.sort((a, b) => new Date(b.Date) - new Date(a.Date))
                  .slice(0, 5)
                  .map((b, i) => (
  <Link
    key={b?._id || b?.Slug || i}
    href={`/blogs/${b?.Slug}`}
                      
                      className="group flex gap-3 p-3 rounded-xl hover:bg-[#d4af37] transition"
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
                        <p className="text-xs text-black/50 group-hover:text-white">
                          {formatDate(b?.Date)}
                        </p>

                        <h3 className="text-sm font-semibold text-black group-hover:text-white line-clamp-2">
                          {b?.Title}
                        </h3>
                      </div>
                    </Link>
                  ))}
              </div>

            </div>

          </div>
        </aside>

      </div>
    </section>
  );
}