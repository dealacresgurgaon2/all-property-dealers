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

// 📅 date formatter
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
      <div className="py-24 text-center text-black/70">
        Blog not found
      </div>
    );
  }

  return (
    <section className="bg-[#fafafa] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">

        {/* ================= LEFT BLOG ================= */}
        <div className="lg:col-span-2">

          {/* HERO IMAGE */}
          <div className="relative w-full h-[440px] mb-10 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={blog.HeroImg.url}
              alt={blog.Title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* META */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#d4af37]/20 text-[#b8964a] text-xs font-semibold px-4 py-1 rounded-full">
              {blog.Category}
            </span>
            <span className="text-sm text-black/50">
              {formatDate(blog.Date)}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-8">
            {blog.Title}
          </h1>

          {/* CONTENT */}
          <div className="space-y-6 text-black/80 leading-8 text-[17px]">
            {blog.Content.split("\n").map(
              (para, i) =>
                para.trim() && <p key={i}>{para}</p>
            )}
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">

            <h3 className="text-xl font-semibold text-black mb-6">
              Recent <span className="text-[#d4af37]">Blogs</span>
            </h3>

            <div className="space-y-4">
              {blogs.map((b) => (
                <Link
                  key={b._id}
                  href={`/blogs/${b.Slug}`}
                  className={`
                    flex gap-4 p-3 rounded-xl
                    bg-white border border-[#d4af37]/20
                    shadow hover:shadow-lg transition
                    ${
                      b.Slug === blog.Slug
                        ? "ring-2 ring-[#d4af37]"
                        : ""
                    }
                  `}
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={b.HeroImg.url}
                      alt={b.Title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-black/50 mb-1">
                      {formatDate(b.Date)}
                    </p>
                    <h4 className="text-sm font-semibold text-black line-clamp-2">
                      {b.Title}
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
