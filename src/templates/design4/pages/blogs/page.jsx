"use client";

import { useEffect, useRef } from "react";
import Pagination from "../../components/Pagination";
import BlogList from "./Bloglist";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";

// Define items per page


export default function BlogPage({domain}) {
  const listRef = useRef(null);

  const { page, setPage, totalPages,setDomain } = useBlogs();
    useEffect(()=>{
      if (domain)
        setDomain(domain);
      
    },[domain])

  

  const scrollToList = () => {
    listRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };  const handlePageChange = (p) => {
    setPage(p);
    scrollToList();
  };


  return (
    <main className="bg-gradient-to-br from-[#fff0f4] via-white to-[#fde6ec] pb-11">
      {/* Blog List */}
      <div ref={listRef}>
        <BlogList
          
        />
      </div>

      {/* Pagination */}
      <Pagination
                  page={page}
                  totalPages={totalPages}
                  setPage={handlePageChange}
                />
    </main>
  );
}
