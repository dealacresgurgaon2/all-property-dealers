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
  const paginatedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="px-4 lg:px-0 py-8 bg-[#f2e8e1]">

      {/* Heading */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-[#422c18] mb-2">
          Latest Blogs
        </h1>
        <p className="text-[#7a5c42]">
          Read our latest insights on property & real estate.
        </p>
      </section>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">
        {paginatedBlogs.map((post) => (
          <Link
            key={post._id}
            href={`/blogs/${post.Slug}`}
            className="
              group
              bg-[#ffffff]
              rounded-xl
              shadow
              p-4
              hover:shadow-lg
              transition
            "
          >
            {/* Image */}
            <div className="relative w-full h-56 rounded-md overflow-hidden mb-4">
              <Image
                src={post.HeroImg.url}
                alt={post.Title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Category */}
            <p className="text-xs font-semibold text-[#422c18] uppercase mb-2 tracking-wider">
              {post.Category}
            </p>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#422c18] leading-snug mb-2">
              {post.Title}
            </h3>

            {/* Date */}
            <p className="text-sm text-[#7a5c42]">
              {formatDate(post.Date)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

// 👇 pagination ke liye export
export const TOTAL_BLOGS = blogs.length;
