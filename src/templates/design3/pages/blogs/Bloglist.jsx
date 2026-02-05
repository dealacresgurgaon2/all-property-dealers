"use client";

import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";


const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {

  const { blogs, page, setPage, totalPages, loading } = useBlogs();

  if (loading) return <h2>Loading...</h2>;

  return (
    <section className="px-4 lg:px-0 py-8 bg-[#f2e8e1]">

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-[#422c18] mb-2">
          Latest Blogs
        </h1>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">

        {blogs.map((post) => (

          <Link
            key={post._id}
            href={`/blogs/${post.slug}`}
            className="group bg-[#f2e8e1] rounded-xl shadow p-4 hover:shadow-lg transition"
          >

            <div className="relative w-full h-56 rounded-md overflow-hidden mb-4">
              <Image
                src={post.heroImg}
                alt={post.title?.rendered}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-[#422c18] mb-2">
              {post.title?.rendered}
            </h3>

            <p className="text-sm text-[#7a5c42]">
              {formatDate(post.date)}
            </p>

          </Link>

        ))}

      </div>

      

    </section>
  );
}
