"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "@/context/design8api/blogcontext";

const formatDate = (date) => {

  if (!date) return "N/A";

  const d = new Date(date);

  return `${d.getDate()
    .toString()
    .padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;

};

export default function FourBlogs() {

  const {
    blogs = [],
    loading,
  } = useBlogs();

  /* LOADING */
  if (loading) {

    return (

      <div className="flex items-center justify-center py-16">

        <div
          className="
            w-12 h-12
            rounded-full
            border-[3px]
            border-[#F3D9E3]
            border-t-[#76153C]
            animate-spin
          "
        />

      </div>

    );

  }

  const fourBlogs = blogs.slice(0, 4);

  return (

    <section
      className="
        relative
        overflow-hidden
        py-14
        px-4
        bg-gradient-to-br
        from-[#FFF8FA]
        via-white
        to-[#FFF3F7]
      "
    >

      {/* BG GLOW */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#76153C]/5 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#5A0E24]/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="mb-10">

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
            "
          >

            <div className="w-2 h-2 rounded-full bg-[#76153C]" />

            Latest Articles

          </div>

          <h2
            className="
              mt-5
              text-3xl md:text-4xl
              font-bold
              text-[#2A0E18]
            "
          >

            Latest Blogs & Insights

          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl leading-7">

            Explore real estate tips, market updates and
            expert property insights.

          </p>

        </div>

        {/* EMPTY */}
        {fourBlogs.length === 0 && (

          <div
            className="
              py-16
              rounded-3xl
              border border-[#F3D9E3]
              bg-white
              text-center
              text-gray-500
              shadow-sm
            "
          >

            No Blogs Available

          </div>

        )}

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {fourBlogs.map((post) => {

            const titleText =
              typeof post.title === "object"
                ? post.title?.rendered
                : post.title;

            return (

              <Link
                key={post._id}
                href={`/blogs/${post.slug}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
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
                <div className="relative w-full h-56 overflow-hidden">

                  <Image
                    src={post.heroImg}
                    alt={titleText}
                    fill
                    unoptimized
                    className="
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-500
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                </div>

                {/* CONTENT */}
                <div className="p-5">

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
                      mb-4
                    "
                  >

                    {formatDate(post.date)}

                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[#2A0E18]
                      leading-7
                      line-clamp-2
                      group-hover:text-[#76153C]
                      transition
                    "
                  >

                    {titleText}

                  </h3>

                  {/* READ MORE */}
                  <div
                    className="
                      mt-5
                      flex items-center gap-2
                      text-[#76153C]
                      font-semibold
                      text-sm
                    "
                  >

                    Read More

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="
                        w-4 h-4
                        group-hover:translate-x-1
                        transition
                      "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />

                    </svg>

                  </div>

                </div>

              </Link>

            );

          })}

        </div>

      </div>

    </section>

  );
}