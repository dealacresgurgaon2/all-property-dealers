"use client";

import { useState, useRef, useEffect } from "react";

// ---- CORRECT PATHS ----
import Pagination from "../../components/Pagination";
import BlogList, { TOTAL_BLOGS } from "./Bloglist";
// -----------------------

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

  return (
    <main className="bg-[#f8fafc] pb-9">
      <div ref={listRef}>
        <BlogList page={page} itemsPerPage={ITEMS_PER_PAGE} />
      </div>

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
