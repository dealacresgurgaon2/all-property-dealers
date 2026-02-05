"use client";

import { useRef } from "react";
import Pagination from "../../components/Pagination";

import BlogList from "./Bloglist";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";


export default function BlogPage() {

  const listRef = useRef(null);

  // CONTEXT se data lo
  const { page, setPage, totalPages } = useBlogs();

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
    <main>
      <div ref={listRef} className="bg-[#f2e8e1] py-10">
  <BlogList />

  <div className="">
    <Pagination
      page={page}
      totalPages={totalPages}
      setPage={handlePageChange}
    />
  </div>
</div>


    </main>
  );
}
