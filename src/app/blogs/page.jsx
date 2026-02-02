"use client";

import { useState, useRef, useEffect } from "react";
import Pagination from "@/components/Pagination";
import BlogList, { TOTAL_BLOGS } from "./Bloglist";

const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const listRef = useRef(null);

  const totalPages = Math.ceil(TOTAL_BLOGS / ITEMS_PER_PAGE);

  // 🔒 SAFETY: agar page last se aage ho gaya
  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages || 1);
    }
  }, [page, totalPages]);

  const scrollToList = () => {
    listRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="bg-[#fafafa] pb-11">
      {/* Blog List */}
      <div ref={listRef}>
        <BlogList
          page={page}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>

      {/* Pagination */}
      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={(p) => {
          setPage(p);
          scrollToList();
        }}
      />
    </main>
  );
}
