"use client";

import { useRef } from "react";
import Pagination from "../../components/Pagination";
import BlogList from "./Bloglist";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";

export default function BlogPage() {

  const listRef = useRef(null);

  const { page, setPage, totalPages } = useBlogs();

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
        <BlogList />
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={(p) => {
            setPage(p);
            scrollToList();
          }}
        />
      )}

    </main>
  );
}
