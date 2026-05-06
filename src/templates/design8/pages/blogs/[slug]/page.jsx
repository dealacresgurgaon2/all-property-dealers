"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useBlogs } from "@/context/design7api/blogcontext";
import Breadcrumb from "@/templates/design8/components/Breadcrumb";

const formatDate = (date) => {
  const d = new Date(date);

  return `${d.getDate()
    .toString()
    .padStart(2, "0")}-${(d.getMonth() + 1)
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

  const [activeFAQ, setActiveFAQ] =
    useState(null);

  useEffect(() => {

    if (slug) {

      clearSingleBlog();

      fetchSingleBlog(slug);

      setPage(1);

      window.scrollTo(0, 0);

    }

  }, [slug]);


  const params = useParams();

const blogTitle = params?.slug
  ?.replace(/-/g, " ")
  ?.replace(/\b\w/g, (c) =>
    c.toUpperCase()
  );

  /* LOADER */
  if (singleLoading || !singleBlog) {

    return (

      <div
        className="
          min-h-screen
          flex items-center justify-center
          bg-gradient-to-br
          from-[#FFF8FA]
          via-white
          to-[#FFF3F7]
        "
      >

        <div
          className="
            w-16 h-16
            rounded-full
            border-[4px]
            border-[#F3D9E3]
            border-t-[#76153C]
            animate-spin
          "
        />

      </div>

    );

  }



  /* ERROR */
  if (singleError) {

    return (

      <div
        className="
          min-h-screen
          flex items-center justify-center
          bg-gradient-to-br
          from-[#FFF8FA]
          via-white
          to-[#FFF3F7]
        "
      >

        <div
          className="
            px-6 py-4
            rounded-2xl
            border border-[#F3D9E3]
            bg-white
            text-red-500
            shadow-sm
          "
        >

          {singleError}

        </div>

      </div>

    );

  }

  return (

    <section
      className="
        relative
        
        py-8
        bg-gradient-to-br
        from-[#FFF8FA]
        via-white
        to-[#FFF3F7]
      "
    >
        <Breadcrumb
  className="
    max-w-7xl
    mx-auto
    px-4
    py-5
  "
  items={[
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label:
        blogTitle,
    },
  ]}
/>
      {/* BG GLOW */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#76153C]/5 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#5A0E24]/5 blur-[140px] rounded-full" />

      <div
        className="
          relative z-10
          max-w-7xl
          mx-auto
          grid grid-cols-1 lg:grid-cols-3
          gap-10
          px-4
        "
      >

        {/* MAIN */}
        <div className="lg:col-span-2">



          <article className="space-y-10 mb-20">

            {/* HERO */}
            <div
              className="
                overflow-hidden
                rounded-[36px]
                border border-[#F3D9E3]
                bg-white/90
                backdrop-blur-xl
                shadow-[0_10px_40px_rgba(118,21,60,0.08)]
              "
            >

              {/* IMAGE */}
              <div
                className="
                  w-full
                  h-[260px]
                  md:h-[500px]
                  overflow-hidden
                "
              >

                <Image
                  src={
                    typeof singleBlog?.HeroImg === "string"
                      ? singleBlog?.HeroImg
                      : singleBlog?.HeroImg?.url ||
                        "/placeholder.jpg"
                  }
                  alt={singleBlog?.Title}
                  width={1200}
                  height={800}
                  unoptimized
                  className="
                    w-full h-full
                    object-cover
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-7 md:p-10">

                {/* DATE */}
                <div
                  className="
                    inline-flex
                    items-center
                    px-4 py-2
                    rounded-full
                    bg-[#FCE7EF]
                    text-[#76153C]
                    text-sm
                    font-semibold
                    mb-5
                  "
                >

                  {new Date(singleBlog?.Date).toDateString()}

                </div>

                {/* TITLE */}
                <h1
                  className="
                    text-3xl md:text-5xl
                    font-bold
                    text-[#2A0E18]
                    leading-tight
                  "
                >

                  {singleBlog?.Title}

                </h1>

              </div>

            </div>

            {/* BLOG CONTENT */}
            <div
              className="
                rounded-[36px]
                border border-[#F3D9E3]
                bg-white/90
                backdrop-blur-xl
                p-7 md:p-10
                shadow-[0_10px_40px_rgba(118,21,60,0.08)]
              "
            >

              <div className="max-w-3xl mx-auto space-y-10">

                {singleBlog?.Content?.map((section) => (

                  <div key={section?._id}>

                    {/* HTML CONTENT */}
                    <div className="quill-content">

                      <div
                        className="
                          ql-editor !p-0
                          text-gray-700
                          text-[17px]
                          leading-8

                          [&_h1]:text-4xl
                          [&_h1]:font-bold
                          [&_h1]:text-[#2A0E18]
                          [&_h1]:mt-8
                          [&_h1]:mb-4

                          [&_h2]:text-3xl
                          [&_h2]:font-bold
                          [&_h2]:text-[#2A0E18]
                          [&_h2]:mt-7
                          [&_h2]:mb-4

                          [&_h3]:text-2xl
                          [&_h3]:font-semibold
                          [&_h3]:text-[#5A0E24]
                          [&_h3]:mt-6
                          [&_h3]:mb-3

                          [&_p]:mb-5
                          [&_p]:text-gray-700

                          [&_ul]:pl-6
                          [&_ul]:list-disc
                          [&_ul]:mb-5

                          [&_ol]:pl-6
                          [&_ol]:list-decimal
                          [&_ol]:mb-5

                          [&_li]:mb-2
                          [&_li]:marker:text-[#76153C]

                          [&_a]:text-[#76153C]
                          [&_a]:underline

                          [&_blockquote]:border-l-4
                          [&_blockquote]:border-[#76153C]
                          [&_blockquote]:pl-5
                          [&_blockquote]:italic
                          [&_blockquote]:text-gray-600
                          [&_blockquote]:my-6

                          [&_img]:rounded-3xl
                          [&_img]:my-8
                        "
                        dangerouslySetInnerHTML={{
                          __html: section?.content,
                        }}
                      />

                    </div>

                    {/* IMAGE */}
                    {section?.img?.url && (

                      <div className="mt-8">

                        <Image
                          src={section.img.url}
                          alt="Blog"
                          width={900}
                          height={600}
                          unoptimized
                          className="
                            rounded-[32px]
                            shadow-md
                          "
                        />

                      </div>

                    )}

                  </div>

                ))}

                {/* FAQ */}
                {singleBlog?.FAQs?.length > 0 && (

                  <div className="mt-20">

                    <div className="mb-10">

                      <div
                        className="
                          inline-flex items-center gap-2
                          px-4 py-2
                          rounded-full
                          border border-[#F3D9E3]
                          bg-[#FFF8FA]
                          text-[#76153C]
                          text-sm
                          font-medium
                          shadow-sm
                          mb-5
                        "
                      >

                        <div className="w-2 h-2 rounded-full bg-[#76153C]" />

                        FAQs

                      </div>

                      <h2
                        className="
                          text-3xl md:text-4xl
                          font-bold
                          text-[#2A0E18]
                        "
                      >

                        Frequently Asked Questions

                      </h2>

                    </div>

                    <div className="space-y-4">

                      {singleBlog.FAQs.map((faq, i) => {

                        const isOpen =
                          activeFAQ === i;

                        return (

                          <div
                            key={i}
                            className={`
                              rounded-[28px]
                              border
                              overflow-hidden
                              transition-all
                              duration-300

                              ${
                                isOpen
                                  ? `
                                    border-[#F3D9E3]
                                    bg-gradient-to-r
                                    from-[#FFF8FA]
                                    to-[#FFF3F7]
                                    shadow-md
                                  `
                                  : `
                                    border-[#F3D9E3]
                                    bg-white
                                  `
                              }
                            `}
                          >

                            {/* QUESTION */}
                            <button
                              onClick={() =>
                                setActiveFAQ(
                                  isOpen ? null : i
                                )
                              }
                              className="
                                w-full
                                flex items-center justify-between
                                gap-5
                                px-6 py-5
                                text-left
                              "
                            >

                              <span
                                className="
                                  font-semibold
                                  text-[#2A0E18]
                                  leading-7
                                "
                              >

                                {faq.Q}

                              </span>

                              <span
                                className={`
                                  w-10 h-10
                                  rounded-2xl
                                  flex items-center justify-center
                                  text-xl
                                  font-bold
                                  transition-all
                                  duration-300

                                  ${
                                    isOpen
                                      ? `
                                        bg-gradient-to-br
                                        from-[#76153C]
                                        to-[#5A0E24]
                                        text-white
                                        rotate-180
                                      `
                                      : `
                                        bg-[#FFF8FA]
                                        border border-[#F3D9E3]
                                        text-[#76153C]
                                      `
                                  }
                                `}
                              >

                                ⌄

                              </span>

                            </button>

                            {/* ANSWER */}
                            <div
                              className={`
                                overflow-hidden
                                transition-all
                                duration-300

                                ${
                                  isOpen
                                    ? `
                                      max-h-[400px]
                                      opacity-100
                                    `
                                    : `
                                      max-h-0
                                      opacity-0
                                    `
                                }
                              `}
                            >

                              <div
                                className="
                                  px-6 pb-6
                                  text-gray-600
                                  leading-8
                                "
                              >

                                {faq.A}

                              </div>

                            </div>

                          </div>

                        );

                      })}

                    </div>

                  </div>

                )}

              </div>

            </div>

          </article>

        </div>

        {/* SIDEBAR */}
        <div>

          <div className="sticky top-24">

            <div
              className="
                rounded-[32px]
                border border-[#F3D9E3]
                bg-white/90
                backdrop-blur-xl
                p-6
                shadow-[0_10px_40px_rgba(118,21,60,0.08)]
              "
            >

              {/* TITLE */}
              <div className="mb-6">

                <div
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    bg-[#FCE7EF]
                    text-[#76153C]
                    text-sm
                    font-semibold
                    mb-4
                  "
                >

                  <div className="w-2 h-2 rounded-full bg-[#76153C]" />

                  Recent Articles

                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#2A0E18]
                  "
                >

                  Recent Blogs

                </h3>

              </div>

              {/* BLOGS */}
              <div className="space-y-4">

                {[...(recentBlogs || [])]
                  .sort(
                    (a, b) =>
                      new Date(b?.Date) -
                      new Date(a?.Date)
                  )
                  .slice(0, 5)
                  .map((b, i) => (

                    <Link
                      key={i}
                      href={`/blogs/${b?.Slug}`}
                      className="
                        group
                        flex gap-4
                        rounded-2xl
                        border border-[#F3D9E3]
                        bg-[#FFF8FA]
                        p-3
                        hover:bg-gradient-to-r
                        hover:from-[#76153C]
                        hover:to-[#5A0E24]
                        transition-all
                        duration-300
                      "
                    >

                      {/* IMAGE */}
                      <div
                        className="
                          relative
                          w-20 h-20
                          overflow-hidden
                          rounded-xl
                          shrink-0
                        "
                      >

                        <Image
                          src={
                            b?.HeroImg?.url ||
                            "/placeholder.jpg"
                          }
                          alt={b?.Title}
                          fill
                          unoptimized
                          className="object-cover"
                        />

                      </div>

                      {/* CONTENT */}
                      <div>

                        <p
                          className="
                            text-xs
                            text-gray-500
                            group-hover:text-white/80
                            transition
                          "
                        >

                          {formatDate(b?.Date)}

                        </p>

                        <h4
                          className="
                            text-sm
                            font-semibold
                            text-[#2A0E18]
                            group-hover:text-white
                            line-clamp-2
                            leading-6
                            mt-1
                            transition
                          "
                        >

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