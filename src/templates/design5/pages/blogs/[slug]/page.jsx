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
      <div className="py-24 text-center text-black/70">
        Blog not found
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* =========== MAIN BLOG CONTENT =========== */}
          <div className="lg:col-span-2">

            {/* HERO IMAGE */}
            <div className="relative w-full h-[420px] mb-8 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={blog.HeroImg.url}
                alt={blog.Title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* META INFO */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="bg-red-100 text-red-600 text-xs font-semibold px-4 py-1 rounded-full">
                {blog.Category}
              </span>

              <span className="text-sm text-black/60">
                Published on {formatDate(blog.Date)}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
              {blog.Title}
            </h1>

            {/* DIVIDER */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent mb-8" />

            {/* BLOG CONTENT */}
            <div className="space-y-6 text-black/80 leading-8 text-lg">
              {blog.Content.split("\n").map(
                (para, i) =>
                  para.trim() && <p key={i}>{para}</p>
              )}
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-12 p-8 bg-white rounded-2xl border border-red-200 text-center">
              <h4 className="text-xl font-semibold mb-2 text-black">
                Need Expert Property Advice?
              </h4>

              <p className="text-black/70 mb-4">
                Talk to our verified property consultants and get the best deals.
              </p>

              <Link
                href="/contact"
                className="inline-block px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Contact Experts
              </Link>
            </div>

          </div>

          {/* =========== SIDEBAR =========== */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">

              <h3 className="text-xl font-semibold text-black mb-6">
                Recent Blogs
              </h3>

              <div className="space-y-4">

                {blogs.map((b) => (
                  <Link
                    key={b._id}
                    href={`/blogs/${b.Slug}`}
                    className={`
                      flex gap-4 p-3 rounded-xl
                      bg-white border border-red-200
                      hover:shadow-lg transition
                      ${
                        b.Slug === blog.Slug
                          ? "ring-2 ring-red-500"
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

                      <h4 className="text-sm font-semibold text-black line-clamp-2 hover:text-red-600 transition">
                        {b.Title}
                      </h4>
                    </div>
                  </Link>
                ))}

              </div>

              {/* SIDEBAR HELP BOX */}
              <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-2xl">
                <h4 className="text-lg font-semibold text-black mb-2">
                  Have Questions?
                </h4>

                <p className="text-sm text-black/70 mb-4">
                  Get free consultation from our real estate experts.
                </p>

                <Link
                  href="/contact"
                  className="block text-center px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition"
                >
                  Ask Now
                </Link>
              </div>

            </div>
          </aside>

        </div>

      </div>
    </section>
  );
}
