"use client";

import Link from "next/link";
import Image from "next/image";

// 🔒 STATIC BLOG DATA
const blogs = [
  {
    _id: "1",
    Slug: "property-investment-tips",
    Title: "Top Property Investment Tips for 2026",
    Category: "Real Estate",
    Date: "2026-01-10",
    HeroImg: { url: "/images/download.jpeg" },
  },
  {
    _id: "2",
    Slug: "buy-vs-rent-property",
    Title: "Buy vs Rent: What Is Better in Today’s Market?",
    Category: "Guides",
    Date: "2026-01-08",
    HeroImg: { url: "/images/ghj.png" },
  },
  {
    _id: "3",
    Slug: "home-loan-eligibility",
    Title: "Home Loan Eligibility: Everything You Must Know",
    Category: "Finance",
    Date: "2026-01-05",
    HeroImg: { url: "/images/download.jpeg" },
  },
  {
    _id: "4",
    Slug: "best-areas-to-invest",
    Title: "Best Areas to Invest in Property This Year",
    Category: "Locations",
    Date: "2026-01-02",
    HeroImg: { url: "/images/download.jpeg" },
  },
  {
    _id: "5",
    Slug: "property-documents-checklist",
    Title: "Property Documents Checklist Before Buying",
    Category: "Legal",
    Date: "2025-12-28",
    HeroImg: { url: "/images/download.jpeg" },
  },
  {
    _id: "6",
    Slug: "real-estate-market-trends",
    Title: "Real Estate Market Trends You Should Watch",
    Category: "Trends",
    Date: "2025-12-25",
    HeroImg: { url: "/images/download.jpeg" },
  },
  {
    _id: "7",
    Slug: "property-documents-checklist-2",
    Title: "Property Documents Checklist Before Buying",
    Category: "Legal",
    Date: "2025-12-28",
    HeroImg: { url: "/images/download.jpeg" },
  },
  {
    _id: "8",
    Slug: "real-estate-market-trends-2",
    Title: "Real Estate Market Trends You Should Watch",
    Category: "Trends",
    Date: "2025-12-25",
    HeroImg: { url: "/images/download.jpeg" },
  },
];

// 📅 Date formatter
const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList({ page = 1, itemsPerPage = 6 }) {
 
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedBlogs = blogs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="bg-[#fafafa] py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#d4af37]/15 text-[#b8964a] text-sm font-semibold px-5 py-1.5 rounded-full mb-4">
            Blogs & Insights
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Latest <span className="text-[#d4af37]">Real Estate Blogs</span>
          </h1>
          <p className="text-black/70 text-lg">
            Expert insights, guides and trends to help you make smarter
            property decisions.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedBlogs.map((post) => (
            <Link
              key={post._id}
              href={`/blogs/${post.Slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#d4af37]/20 hover:shadow-2xl transition"
            >
              {/* IMAGE */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={post.HeroImg.url}
                  alt={post.Title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                {/* CATEGORY */}
                <span className="inline-block text-xs font-semibold text-[#d4af37] uppercase tracking-wide mb-2">
                  {post.Category}
                </span>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-black leading-snug mb-3 line-clamp-2">
                  {post.Title}
                </h3>

                {/* FOOTER */}
                <div className="flex items-center justify-between text-sm text-black/60">
                  <span>{formatDate(post.Date)}</span>
                  <span className="text-[#d4af37] font-medium group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

// 👇 pagination ke liye export (BlogPage mein use hoga)
export const TOTAL_BLOGS = blogs.length;
