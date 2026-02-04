"use client";

import { useState, useRef, useEffect } from "react";
import Pagination from "../../components/Pagination";

import BlogList, { TOTAL_BLOGS } from "./Bloglist";

const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const listRef = useRef(null);

  const totalPages = Math.ceil(TOTAL_BLOGS / ITEMS_PER_PAGE);

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

  const handlePageChange = (p) => {
    setPage(p);
    scrollToList();
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <div ref={listRef}>
        <BlogList page={page} itemsPerPage={ITEMS_PER_PAGE} />
      </div>

      {/* PAGINATION WITH PROPER SPACING */}
      <div className="pb-20 pt-6">
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={handlePageChange}
        />
      </div>
    </main>
  );
}
