"use client";

import Link from "next/link";
import Image from "next/image";

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
    Title: "Home Loan Eligibility – Complete Guide",
    Category: "Finance",
    Date: "2026-01-05",
    HeroImg: { url: "/images/download.jpeg" },
  },
  {
    _id: "4",
    Slug: "property-documents",
    Title: "Important Property Documents Checklist",
    Category: "Legal",
    Date: "2026-01-02",
    HeroImg: { url: "/images/ghj.png" },
  },
  {
    _id: "5",
    Slug: "real-estate-trends",
    Title: "Latest Real Estate Trends in 2026",
    Category: "Trends",
    Date: "2025-12-28",
    HeroImg: { url: "/images/download.jpeg" },
  },
  {
    _id: "6",
    Slug: "best-investment-areas",
    Title: "Best Areas to Invest in Gurgaon",
    Category: "Investment",
    Date: "2025-12-25",
    HeroImg: { url: "/images/ghj.png" },
  },
];

const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList({ page = 1, itemsPerPage = 6 }) {

  // 🔥 Current city
  

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedBlogs = blogs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="px-4 py-8 bg-[#f8fafc]">

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Latest Blogs
        </h1>
        <p className="text-blue-700">
          Read our latest insights on property & real estate.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">
        {paginatedBlogs.map((post) => (
          <Link
            key={post._id}
            href={`/blogs/${post.Slug}`}
            className="group bg-white border rounded-xl p-3 shadow-sm hover:-translate-y-2 transition-all"
          >
            <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
              <Image
                src={post.HeroImg.url}
                alt={post.Title}
                fill
                className="object-cover group-hover:scale-110 transition"
              />
            </div>

            <h3 className="text-lg font-semibold mb-2 text-blue-900 group-hover:text-blue-700 transition">
              {post.Title}
            </h3>

            <p className="text-sm text-blue-600">
              {formatDate(post.Date)}
            </p>

          </Link>
        ))}
      </div>
    </section>
  );
}

export const TOTAL_BLOGS = blogs.length;
