"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogs = [
  {
    _id: "1",
    Slug: "property-investment-tips",
    Title: "Top Property Investment Tips for 2026",
    Category: "Real Estate",
    Date: "2026-01-10",
    HeroImg: { url: "/images/download.jpeg" },
    Content: `
Property investment in 2026 requires careful planning and market research.

Always evaluate location growth, infrastructure, and builder reputation.

Long-term investment gives better returns than short-term speculation.
    `,
  },
  {
    _id: "2",
    Slug: "buy-vs-rent-property",
    Title: "Buy vs Rent: What Is Better in Today’s Market?",
    Category: "Guides",
    Date: "2026-01-08",
    HeroImg: { url: "/images/ghj.png" },
    Content: `
Property investment has always been considered one of the most secure ways to build wealth.

Location, infrastructure, legal verification, and budget planning are key factors.

A long-term vision helps generate stable returns and financial security.
    `,
  },
  {
    _id: "3",
    Slug: "home-loan-eligibility",
    Title: "Home Loan Eligibility: Everything You Must Know",
    Category: "Finance",
    Date: "2026-01-05",
    HeroImg: { url: "/images/download.jpeg" },
    Content: `
Your income, credit score, and existing liabilities decide loan eligibility.
    `,
  },
];

const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function SingleBlogPage() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.Slug === slug);

  if (!blog) {
    return (
      <div className="py-24 text-center text-[#1e40af]">
        Blog not found
      </div>
    );
  }

  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">

        {/* ================= LEFT BLOG ================= */}
        <div className="lg:col-span-2">

          <div className="px-2 md:px-10">

            {/* IMAGE */}
            <div className="relative w-full h-[420px] mb-8">
              <Image
                src={blog.HeroImg.url}
                alt={blog.Title}
                fill
                priority
                className="object-cover rounded-2xl"
              />
            </div>

            {/* META */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#1e40af] text-white text-xs px-3 py-1 rounded-full">
                {blog.Category}
              </span>
              <span className="text-sm text-gray-500">
                {formatDate(blog.Date)}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#0b1f33] leading-tight mb-8">
              {blog.Title}
            </h1>

            {/* CONTENT */}
            <div className="space-y-6 text-gray-700 leading-8 text-[17px]">
              {blog.Content.split("\n").map(
                (para, i) =>
                  para.trim() && <p key={i}>{para}</p>
              )}
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-4">

            <h3 className="text-xl font-semibold text-[#0b1f33]">
              Recent Blogs
            </h3>

            {blogs.map((b) => (
              <Link
                key={b._id}
                href={`/blogs/${b.Slug}`}
                className={`
                  flex gap-3 
                  bg-white
                  border border-gray-200
                  rounded-lg shadow-sm
                  p-3
                  hover:shadow-md
                  transition
                  ${
                    b.Slug === blog.Slug
                      ? "ring-2 ring-[#1e40af]"
                      : "hover:border-[#1e40af]/30"
                  }
                `}
              >
                <div className="relative w-20 h-20 rounded overflow-hidden">
                  <Image
                    src={b.HeroImg.url}
                    alt={b.Title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    {formatDate(b.Date)}
                  </p>
                  <h4 className="text-sm font-semibold text-[#0b1f33] line-clamp-2 hover:text-[#1e40af] transition">
                    {b.Title}
                  </h4>
                </div>
              </Link>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
