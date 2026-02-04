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
  Slug: "extra-blog",
  Title: "Extra Blog Example",
  Category: "Demo",
  Date: "2025-12-20",
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

export default function BlogList({ page, itemsPerPage }) {

  // 🔒 SAFETY CHECKS
  const currentPage = page || 1;
  const perPage = itemsPerPage || 6;

  const startIndex = (currentPage - 1) * perPage;

  const paginatedBlogs = blogs.slice(
    startIndex,
    startIndex + perPage
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-5 py-2 rounded-full mb-4">
            Knowledge Hub
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Latest Real Estate Insights
          </h1>

          <p className="text-black/70 max-w-2xl mx-auto">
            Tips, guides and expert articles to help you make smarter real estate decisions.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {paginatedBlogs.map((post) => (
            <Link
              key={post._id}
              href={`/blogs/${post.Slug}`}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                border border-green-200
                hover:shadow-2xl
                transition-all duration-300
                flex flex-col
              "
            >
              {/* IMAGE SECTION */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={post.HeroImg.url}
                  alt={post.Title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

                <span className="
                  absolute top-3 left-3
                  bg-green-600 text-white
                  text-xs font-semibold
                  px-3 py-1 rounded-full
                ">
                  {post.Category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-lg font-semibold text-black leading-snug mb-3 line-clamp-2 group-hover:text-green-700 transition">
                  {post.Title}
                </h3>

                <p className="text-sm text-black/60 mb-5">
                  Published on {formatDate(post.Date)}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-green-700 font-medium text-sm">
                    Read Full Article
                  </span>

                  <span className="
                    w-8 h-8 rounded-full
                    bg-green-100 text-green-700
                    flex items-center justify-center
                    group-hover:bg-green-600 group-hover:text-white
                    transition
                  ">
                    →
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

// 👇 pagination ke liye export – IMPORTANT
export const TOTAL_BLOGS = blogs.length;
