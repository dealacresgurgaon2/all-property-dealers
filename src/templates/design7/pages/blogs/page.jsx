"use client";

import { useState, useRef } from "react";
import Pagination from "../../components/Pagination";
import BlogList from "./Bloglist";

// 🔥 30 BLOGS PER PAGE
const ITEMS_PER_PAGE = 30;

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);

  const listRef = useRef(null);

  const totalPages = Math.ceil(totalBlogs / ITEMS_PER_PAGE);

  // Smooth Scroll Function
  const scrollToList = () => {
    listRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="bg-slate-50 pb-10">

      {/* Blog List Section */}
      <div ref={listRef}>
        <BlogList
          page={page}
          itemsPerPage={ITEMS_PER_PAGE}
          setTotalBlogs={setTotalBlogs}
        />
      </div>

      {/* Pagination - Sirf tab dikhe jab pages > 1 ho */}
      {totalPages > 1 && (
        <div className="mt-10">
          <Pagination
            page={page}
            totalPages={totalPages}
            setPage={(p) => {
              setPage(p);
              scrollToList();
            }}
          />
        </div>
      )}

    </main>
  );
}
