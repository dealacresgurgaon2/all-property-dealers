"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../../context/design8api/blogcontext";
import Breadcrumb from "../../components/Breadcrumb";

const formatDate = (date) => {

  if (!date) return "";

  const d = new Date(date);

  return `${d.getDate()
    .toString()
    .padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;

};

export default function BlogList() {

  const {
    blogs,
    listLoading,
    listError,
  } = useBlogs();

  /* LOADING */
  if (listLoading) {

    return (

      <div
        className="
          min-h-[60vh]
          flex items-center justify-center
          bg-gradient-to-br
          from-[#FFF8FA]
          via-white
          to-[#FFF3F7]
        "
      >

        <div className="flex flex-col items-center gap-5">

          <div
            className="
              w-14 h-14
              rounded-full
              border-[4px]
              border-[#F3D9E3]
              border-t-[#76153C]
              animate-spin
            "
          />

          <div className="text-center">

            <h2
              className="
                text-xl
                font-bold
                text-[#76153C]
              "
            >

              Loading Blogs...

            </h2>

            <p className="text-sm text-gray-500 mt-2">

              Fetching latest real estate articles

            </p>

          </div>

        </div>

      </div>

    );

  }

  /* ERROR */
  if (listError) {

    return (

      <div
        className="
          min-h-[60vh]
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

          {listError}

        </div>

      </div>

    );

  }

  return (

    <section
      className="
        relative
        overflow-hidden
        py-6
        px-4 lg:px-0
        bg-gradient-to-br
        from-[#FFF8FA]
        via-white
        to-[#FFF3F7]
      "
    >

      {/* BG GLOW */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#76153C]/5 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#5A0E24]/5 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">

          {/* BREADCRUMB */}
          <Breadcrumb
  className="
    max-w-7xl
    mx-auto
    md:px-0
    px-4
    py-5
  "
  items={[
    {
      label: "Blogs",
    },
  ]}
/>

          {/* SMALL BADGE */}
          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              border border-[#F3D9E3]
              bg-white
              text-[#76153C]
              text-sm
              font-medium
              shadow-sm
              mb-5
            "
          >

            <div className="w-2 h-2 rounded-full bg-[#76153C]" />

            Real Estate Articles

          </div>

          {/* HEADING */}
          <h1
            className="
              text-3xl md:text-5xl
              font-bold
              text-[#2A0E18]
              leading-tight
            "
          >

            Latest Blogs & Insights

          </h1>

          {/* DESC */}
          <p
            className="
              text-gray-600
              max-w-2xl
              mt-5
              leading-8
            "
          >

            Explore latest real estate insights,
            investment guides and expert property tips.

          </p>

        </div>

        {/* BLOG GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {blogs && blogs.length > 0 ? (

            [...blogs]
              .sort(
                (a, b) =>
                  new Date(b?.Date) -
                  new Date(a?.Date)
              )
              .map((post, index) => (

                <Link
                  key={index}
                  href={`/blogs/${post?.Slug}`}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border border-[#F3D9E3]
                    bg-white/90
                    backdrop-blur-xl
                    shadow-[0_10px_35px_rgba(118,21,60,0.08)]
                    hover:-translate-y-2
                    hover:shadow-[0_18px_45px_rgba(118,21,60,0.14)]
                    transition-all
                    duration-300
                  "
                >

                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      w-full
                      aspect-[16/9]
                      overflow-hidden
                    "
                  >

                    <Image
                      src={
                        post?.HeroImg?.url ||
                        "/placeholder.jpg"
                      }
                      alt={
                        post?.Title ||
                        "Blog Image"
                      }
                      fill
                      unoptimized
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    {/* DATE */}
                    <div
                      className="
                        inline-flex
                        items-center
                        px-3 py-1
                        rounded-full
                        bg-[#FCE7EF]
                        text-[#76153C]
                        text-xs
                        font-semibold
                        mb-5
                      "
                    >

                      {formatDate(post?.Date)}

                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[#2A0E18]
                        leading-8
                        line-clamp-2
                        group-hover:text-[#76153C]
                        transition
                      "
                    >

                      {post?.Title}

                    </h3>

                    {/* BUTTON */}
                    <div
                      className="
                        mt-6
                        flex items-center justify-between
                      "
                    >

                      <span
                        className="
                          text-[#76153C]
                          font-semibold
                        "
                      >

                        Read More

                      </span>

                      <div
                        className="
                          w-11 h-11
                          rounded-2xl
                          bg-gradient-to-br
                          from-[#76153C]
                          to-[#5A0E24]
                          text-white
                          flex items-center justify-center
                          shadow-md
                          group-hover:translate-x-1
                          transition
                        "
                      >

                        →

                      </div>

                    </div>

                  </div>

                </Link>

              ))

          ) : (

            /* EMPTY */
            <div className="col-span-3">

              <div
                className="
                  rounded-[36px]
                  border border-[#F3D9E3]
                  bg-white/90
                  backdrop-blur-xl
                  p-14
                  text-center
                  shadow-sm
                "
              >

                <div
                  className="
                    w-20 h-20
                    rounded-[28px]
                    bg-gradient-to-br
                    from-[#76153C]
                    to-[#5A0E24]
                    text-white
                    flex items-center justify-center
                    text-4xl
                    mx-auto
                    mb-6
                    shadow-md
                  "
                >

                  ✨

                </div>

                <h3
                  className="
                    text-3xl
                    font-bold
                    text-[#2A0E18]
                    mb-4
                  "
                >

                  Coming Soon

                </h3>

                <p
                  className="
                    text-gray-600
                    max-w-xl
                    mx-auto
                    leading-8
                  "
                >

                  We’re working on amazing real estate
                  blogs, market insights and expert
                  property guides for you.

                </p>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>

  );
}