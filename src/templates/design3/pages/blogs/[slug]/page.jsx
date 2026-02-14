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

//   const {
//     singleBlog,
//     fetchSingleBlog,
//     recentBlogs,
//     loading,
//     singleError,
//     listError,
//     setPage,
//   } = useBlogs();

//   // ===== LOCAL LOADING STATE FOR REFRESH =====
//   const [pageLoading, setPageLoading] = useState(true);

//   useEffect(() => {
//     if (slug) {
//       setPageLoading(true);

//       fetchSingleBlog(slug);

//       // Recent blogs load karne ke liye
//       setPage(1);

//       // Artificial small delay for smooth UX
//       setTimeout(() => {
//         setPageLoading(false);
//       }, 800);
//     }
//   }, [slug]);

//   // ===== EXTRA SAFETY FOR RECENT BLOGS =====
//   useEffect(() => {
//     if (!recentBlogs || recentBlogs.length === 0) {
//       setPage(1);
//     }
//   }, []);

//   // ===== MAIN LOADING STATE =====
//   if (pageLoading || loading) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-white">
//         <div className="flex flex-col items-center gap-4">

//           <div className="w-14 h-14 border-4 border-[#5E23DC]/30 border-t-[#5E23DC] rounded-full animate-spin"></div>

//           <h2 className="text-lg text-[#5E23DC] font-semibold">
//             Loading Blog...
//           </h2>

//           <p className="text-sm text-gray-600">
//             Please wait while we fetch the content
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // ===== SINGLE BLOG ERROR =====
//   if (singleError) {
//     return (
//       <div className="py-32 text-center text-xl text-red-700">
//         {singleError}
//       </div>
//     );
//   }

//   // ===== DATA NOT AVAILABLE BUT NO ERROR =====
//   if (!pageLoading && !loading && !singleBlog) {
//     return (
//       <div className="py-32 text-center text-xl text-red-700">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">

//         {/* ===== MAIN BLOG ===== */}
//         <div className="lg:col-span-2">

//           {/* HERO IMAGE */}
//           <div className="relative w-full h-[460px] rounded-2xl overflow-hidden mb-8">
//             <Image
//               src={singleBlog?.heroImg}
//               alt={singleBlog?.title?.rendered}
//               fill
//               priority
//               className="object-cover"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#5E23DC]/90 via-black/20 to-transparent"></div>

//             <div className="absolute bottom-6 left-6 right-6">
//               <h1 className="text-2xl md:text-4xl font-bold text-white">
//                 {singleBlog?.title?.rendered}
//               </h1>

//               <p className="text-white/90 mt-2">
//                 Published on {formatDate(singleBlog?.date)}
//               </p>
//             </div>
//           </div>

//           {/* BLOG CONTENT */}
//           <div
//             className="text-gray-700 leading-relaxed space-y-6 text-[17px]"
//             dangerouslySetInnerHTML={{
//               __html: singleBlog?.content?.rendered,
//             }}
//           />
//         </div>

//         {/* ===== SIDEBAR ===== */}
//         <div className="">
//           <div className="sticky top-24 space-y-6">

//             {/* ABOUT BOX */}
//             <div className="bg-white border border-[#5E23DC]/20 rounded-2xl p-6">
//               <h3 className="text-lg font-bold text-[#5E23DC] mb-3">
//                 About This Blog
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 Stay updated with the latest real estate insights, investment tips, and property trends.
//               </p>
//             </div>

//             {/* ===== RECENT BLOGS SECTION ===== */}
//             <div className="bg-white border border-[#5E23DC]/20 rounded-2xl p-5">
//               <h3 className="text-xl font-bold text-[#5E23DC] mb-4 border-b border-[#5E23DC]/20 pb-2">
//                 Recent Blogs
//               </h3>

//               {listError && (
//                 <p className="text-red-600 text-sm mb-3">
//                   {listError}
//                 </p>
//               )}

//               <div className="space-y-4">

//                 {/* ===== RECENT BLOGS LOADER ===== */}
//                 {loading && (
//                   <p className="text-sm text-gray-500">
//                     Loading recent blogs...
//                   </p>
//                 )}

//                 {!loading && recentBlogs && recentBlogs.length > 0 ? (
//                   recentBlogs.map((b) => (
//                     <Link
//                       key={b._id}
//                       href={`/blogs/${b.slug}`}
//                       className="flex gap-3 p-3 rounded-xl hover:bg-[#5E23DC]/5"
//                     >
//                       <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
//                         <Image
//                           src={b.heroImg}
//                           alt={b.title?.rendered}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>

//                       <div>
//                         <p className="text-xs text-gray-500">
//                           {formatDate(b.date)}
//                         </p>

//                         <h4 className="text-sm font-semibold text-[#5E23DC] line-clamp-2">
//                           {b.title?.rendered}
//                         </h4>
//                       </div>
//                     </Link>
//                   ))
//                 ) : (
//                   !loading && (
//                     <p className="text-sm text-gray-500">
//                       No recent blogs available
//                     </p>
//                   )
//                 )}

//               </div>
//             </div>

//             {/* CTA BOX */}
//             <div className="bg-[#5E23DC] text-white rounded-2xl p-6 text-center">
//               <h4 className="text-lg font-semibold mb-2">
//                 Need Property Help?
//               </h4>
//               <p className="text-sm mb-4">
//                 Get expert guidance for buying, selling or investing.
//               </p>

//               <Link
//                 href="/"
//                 className="inline-block bg-white text-[#5E23DC] px-5 py-2 rounded-full font-semibold"
//               >
//                 Contact Us
//               </Link>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useBlogs } from "@/context/blogcontext/BlogContext";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;
const MAX_BLOGS = 6;

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
    setPage,
  } = useBlogs();

  const [blogStack, setBlogStack] = useState([]);
  const bottomRef = useRef(null);
  const isFetchingRef = useRef(false);

  // 🔹 First Load
  useEffect(() => {
    if (slug) {
      fetchSingleBlog(slug);
      setPage(1);
      window.scrollTo(0, 0);
    }
  }, [slug]);

  // 🔹 Reset stack
  useEffect(() => {
    if (singleBlog) {
      setBlogStack([singleBlog]);
    }
  }, [singleBlog]);

  // 🔥 Infinite Scroll
  useEffect(() => {
    if (!bottomRef.current) return;
    if (blogStack.length === 0) return;
    if (blogStack.length >= MAX_BLOGS) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        if (!entries[0].isIntersecting) return;
        if (isFetchingRef.current) return;

        isFetchingRef.current = true;

        const lastBlog = blogStack[blogStack.length - 1];

        try {
          const res = await fetch(
            `${API_BASE}/api/blogs/next/${lastBlog.slug}`
          );
          const result = await res.json();

          if (result.success && result.data) {
            setBlogStack((prev) => {
              if (prev.length >= MAX_BLOGS) return prev;

              const exists = prev.some(
                (b) => b._id === result.data._id
              );
              if (exists) return prev;

              return [...prev, result.data];
            });

            window.history.replaceState(
              null,
              "",
              `/blogs/${result.data.slug}`
            );
          }
        } catch (err) {
          console.error("Next fetch error:", err);
        }

        isFetchingRef.current = false;
      },
      {
        rootMargin: "300px",
        threshold: 0,
      }
    );

    observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, [blogStack]);

  if (loading && blogStack.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-14 h-14 border-4 border-[#5E23DC]/30 border-t-[#5E23DC] rounded-full animate-spin"></div>
      </div>
    );
  }

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

        {/* MAIN STACK */}
        <div className="lg:col-span-2">

          {blogStack.map((blog, index) => (
            <div key={`${blog._id}-${index}`} className="mb-20">

              {/* Separator for next blogs */}
              {index !== 0 && (
                <div className="mb-8">
                  <hr className="border-gray-300" />
                </div>
              )}

              {/* TITLE */}
              <div className="mb-6">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {blog.title?.rendered}
                </h1>

                <p className="text-sm text-gray-500 mt-3">
                  Published on {formatDate(blog.date)}
                </p>
              </div>

              {/* IMAGE */}
             <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8">

  <Image
    src={blog.heroImg}
    alt={blog.title?.rendered}
    fill
    priority={index === 0}
    className="object-cover object-center"
  />

</div>



              {/* CONTENT */}
              <div
                className="text-gray-700 leading-relaxed space-y-6 text-[17px]"
                dangerouslySetInnerHTML={{
                  __html: blog.content?.rendered,
                }}
              />

            </div>
          ))}

          {/* Scroll Trigger */}
          {blogStack.length < MAX_BLOGS && (
            <div ref={bottomRef} className="h-20"></div>
          )}

          {/* End Message
          {blogStack.length >= MAX_BLOGS && (
            
          )} */}

        </div>

        {/* SIDEBAR */}
        <div>
          <div className="sticky top-24 space-y-6">

            <div className="bg-white border border-[#5E23DC]/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#5E23DC] mb-3">
                About This Blog
              </h3>
              <p className="text-sm text-gray-600">
                Stay updated with real estate insights.
              </p>
            </div>

            <div className="bg-white border border-[#5E23DC]/20 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-[#5E23DC] mb-4 border-b pb-2">
                Recent Blogs
              </h3>

              <div className="space-y-4">
                {recentBlogs?.map((b) => (
                  <Link
                    key={b._id}
                    href={`/blogs/${b.slug}`}
                    className="group flex gap-3 p-3 border border-[#5E23DC]/20 rounded-xl transition-all duration-300 hover:bg-[#5E23DC]"
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
                      <p className="text-xs text-gray-500 group-hover:text-white transition-colors">
                        {formatDate(b.date)}
                      </p>
                      <h4 className="text-sm font-semibold text-[#5E23DC] group-hover:text-white transition-colors line-clamp-2">
                        {b.title?.rendered}
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
